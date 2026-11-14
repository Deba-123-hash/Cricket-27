import { useState, useCallback } from 'react';

/**
 * Custom hook to toggle a boolean state with optional explicit setter
 * @param {boolean} [initialValue=false]
 * @returns {[boolean, () => void, (value: boolean) => void]}
 */
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  return [value, toggle, setValue];
};

export default useToggle;
