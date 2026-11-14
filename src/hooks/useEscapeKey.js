import { useEffect } from 'react';

/**
 * Custom hook to trigger a callback when the Escape key is pressed
 * @param {Function} handler - Callback to execute on Escape
 * @param {boolean} [active=true] - Whether the listener is active
 */
export const useEscapeKey = (handler, active = true) => {
  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handler(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handler, active]);
};

export default useEscapeKey;
