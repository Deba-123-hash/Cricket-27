import { describe, it, expect, vi } from 'vitest';
import { cn, formatDate, truncateText, scrollToTop } from '../../src/utils/helpers';

describe('Utility Helpers (src/utils/helpers.js)', () => {
  describe('cn (Classnames joiner)', () => {
    it('joins class strings correctly', () => {
      expect(cn('btn', 'btn-primary')).toBe('btn btn-primary');
    });

    it('filters out falsy values (null, undefined, false, empty string)', () => {
      const isHidden = false;
      expect(cn('btn', isHidden && 'hidden', null, undefined, '', 'active')).toBe('btn active');
    });
  });

  describe('formatDate', () => {
    it('formats valid ISO date strings properly', () => {
      const formatted = formatDate('2026-11-14T10:00:00Z');
      expect(formatted).toContain('2026');
      expect(formatted).toContain('Nov');
    });

    it('returns raw string fallback if date is invalid', () => {
      expect(formatDate('invalid-date-string')).toBe('invalid-date-string');
    });
  });

  describe('truncateText', () => {
    it('returns original string if length is within maxLength', () => {
      expect(truncateText('CRICKET27', 20)).toBe('CRICKET27');
    });

    it('truncates and appends ellipsis if string exceeds maxLength', () => {
      const result = truncateText('Beyond The Boundary cricket gaming revolution', 15);
      expect(result).toBe('Beyond The Boun...');
    });

    it('handles falsy input safely', () => {
      expect(truncateText('', 10)).toBe('');
      expect(truncateText(null, 10)).toBeNull();
    });
  });

  describe('scrollToTop', () => {
    it('calls window.scrollTo with top: 0 and smooth behavior', () => {
      const spy = vi.spyOn(window, 'scrollTo');
      scrollToTop();
      expect(spy).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
    });
  });
});
