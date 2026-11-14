import { useEffect } from 'react';

/**
 * Custom hook to lock body scrolling when a modal, drawer, or lightbox is active
 * @param {boolean} [locked=true] - Whether body scroll should be prevented
 */
export const useLockBodyScroll = (locked = true) => {
  useEffect(() => {
    if (!locked) return;

    // Save previous overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;

    // Prevent scrolling
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [locked]);
};

export default useLockBodyScroll;
