import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useToggle from '../../src/hooks/useToggle';
import useDebounce from '../../src/hooks/useDebounce';
import useEscapeKey from '../../src/hooks/useEscapeKey';
import useLockBodyScroll from '../../src/hooks/useLockBodyScroll';
import useToast from '../../src/hooks/useToast';
import { ToastProvider } from '../../src/context/ToastContext';

describe('Custom Hooks (src/hooks/)', () => {
  describe('useToggle', () => {
    it('initializes with default false state', () => {
      const { result } = renderHook(() => useToggle());
      expect(result.current[0]).toBe(false);
    });

    it('toggles value on toggle call', () => {
      const { result } = renderHook(() => useToggle(false));
      act(() => {
        result.current[1]();
      });
      expect(result.current[0]).toBe(true);

      act(() => {
        result.current[1]();
      });
      expect(result.current[0]).toBe(false);
    });

    it('supports direct setter', () => {
      const { result } = renderHook(() => useToggle(false));
      act(() => {
        result.current[2](true);
      });
      expect(result.current[0]).toBe(true);
    });
  });

  describe('useDebounce', () => {
    it('returns immediate value on mount and delays updates', () => {
      vi.useFakeTimers();
      const { result, rerender } = renderHook(({ val }) => useDebounce(val, 200), {
        initialProps: { val: 'cricket' },
      });

      expect(result.current).toBe('cricket');

      rerender({ val: 'cricket27' });
      // Before delay expires, value is unchanged
      expect(result.current).toBe('cricket');

      // Fast-forward time
      act(() => {
        vi.advanceTimersByTime(200);
      });
      expect(result.current).toBe('cricket27');

      vi.useRealTimers();
    });
  });

  describe('useEscapeKey', () => {
    it('triggers callback when Escape key is pressed and enabled', () => {
      const callback = vi.fn();
      renderHook(() => useEscapeKey(callback, true));

      const event = new window.KeyboardEvent('keydown', { key: 'Escape' });
      window.dispatchEvent(event);

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('does not trigger callback when disabled', () => {
      const callback = vi.fn();
      renderHook(() => useEscapeKey(callback, false));

      const event = new window.KeyboardEvent('keydown', { key: 'Escape' });
      window.dispatchEvent(event);

      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('useLockBodyScroll', () => {
    it('sets overflow hidden when locked and restores original overflow on unlock/unmount', () => {
      const originalOverflow = window.getComputedStyle(document.body).overflow;
      const { rerender, unmount } = renderHook(({ locked }) => useLockBodyScroll(locked), {
        initialProps: { locked: true },
      });

      expect(document.body.style.overflow).toBe('hidden');

      rerender({ locked: false });
      expect(document.body.style.overflow).toBe(originalOverflow);

      rerender({ locked: true });
      expect(document.body.style.overflow).toBe('hidden');

      unmount();
      expect(document.body.style.overflow).toBe(originalOverflow);
    });
  });

  describe('useToast', () => {
    it('throws error when used outside ToastProvider', () => {
      expect(() => {
        renderHook(() => useToast());
      }).toThrow('useToast must be used within a ToastProvider');
    });

    it('provides toast dispatch methods when wrapped in ToastProvider', () => {
      const wrapper = ({ children }) => <ToastProvider>{children}</ToastProvider>;
      const { result } = renderHook(() => useToast(), { wrapper });

      expect(typeof result.current.success).toBe('function');
      expect(typeof result.current.error).toBe('function');
      expect(typeof result.current.info).toBe('function');
      expect(typeof result.current.removeToast).toBe('function');
    });
  });
});
