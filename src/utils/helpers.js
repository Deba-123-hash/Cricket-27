/**
 * CRICKET27 — Utility Helpers
 */

/**
 * Conditionally joins CSS class strings together
 * @param  {...any} classes 
 * @returns {string}
 */
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Formats an ISO date string or timestamp into a readable date
 * @param {string|Date} dateString 
 * @param {Intl.DateTimeFormatOptions} options 
 * @returns {string}
 */
export const formatDate = (dateString, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    ...options,
  };
  try {
    return new Intl.DateTimeFormat('en-US', defaultOptions).format(new Date(dateString));
  } catch {
    return String(dateString);
  }
};

/**
 * Truncates text with an ellipsis
 * @param {string} text 
 * @param {number} maxLength 
 * @returns {string}
 */
export const truncateText = (text, maxLength = 120) => {
  if (!text || text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
};

/**
 * Scrolls smoothly to top of window
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
