import { useEffect } from 'react';
import { APP_CONFIG } from '../utils/constants';

/**
 * Custom hook to dynamically update the document title
 * @param {string} title 
 */
export const usePageTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    if (title) {
      document.title = `${title} | ${APP_CONFIG.BRAND_NAME}`;
    } else {
      document.title = `${APP_CONFIG.BRAND_NAME} — ${APP_CONFIG.TAGLINE}`;
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export default usePageTitle;
