import { useContext } from 'react';
import { UIContext } from '../context/uiState';

/**
 * Custom hook to consume the global UIContext.
 * Throws an explicit error if called outside of UIProvider.
 */
export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};

export default useUI;
