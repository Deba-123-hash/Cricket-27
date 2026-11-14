import { useEffect } from 'react';

/**
 * Custom hook to detect clicks outside a specified DOM element ref
 * @param {React.RefObject} ref - Ref of element to monitor
 * @param {Function} handler - Callback triggered when clicking outside
 * @param {boolean} [active=true] - Whether the listener is active
 */
export const useClickOutside = (ref, handler, active = true) => {
  useEffect(() => {
    if (!active) return;

    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, active]);
};

export default useClickOutside;
