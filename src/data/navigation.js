import { ROUTES, SOCIAL_PLATFORMS } from '../utils/constants';

/**
 * Primary Desktop Center Navigation Links
 * Core Brand Navigation: Home, Features
 */
export const PRIMARY_NAV_LINKS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Features', path: ROUTES.FEATURES },
];

/**
 * Mobile Drawer Navigation Links
 */
export const MOBILE_NAV_LINKS = [
  { label: 'Home', path: ROUTES.HOME, badge: 'Home' },
  { label: 'Features', path: ROUTES.FEATURES, badge: 'Core' },
];

/**
 * Legacy alias for backwards compatibility
 */
export const NAV_LINKS = MOBILE_NAV_LINKS;

/**
 * Footer Column Sections
 */
export const FOOTER_COLUMNS = {
  EXPLORE: {
    title: 'Explore',
    links: [
      { label: 'Home', path: ROUTES.HOME },
      { label: 'Features', path: ROUTES.FEATURES },
    ],
  },
  UPDATES: {
    title: 'Brand Vision',
    links: [
      { label: 'Feature Concepts', path: ROUTES.FEATURES },
    ],
  },
  SOCIAL: {
    title: 'Official Social Media',
    disclaimer: 'Pre-launch temporary preview links. Official handles will be activated prior to public launch.',
    links: [
      { label: 'YouTube', url: SOCIAL_PLATFORMS.YOUTUBE, icon: 'Youtube', note: 'Trailers & Devlogs' },
      { label: 'Instagram', url: SOCIAL_PLATFORMS.INSTAGRAM, icon: 'Instagram', note: 'Artwork & Concept Art' },
      { label: 'Facebook', url: SOCIAL_PLATFORMS.FACEBOOK, icon: 'Facebook', note: 'Community Events' },
      { label: 'X (Twitter)', url: SOCIAL_PLATFORMS.TWITTER, icon: 'Twitter', note: 'Studio Announcements' },
      { label: 'Discord', url: SOCIAL_PLATFORMS.DISCORD, icon: 'MessageSquare', note: 'Player Lounge' },
    ],
  },
};

/**
 * Legacy format for existing components
 */
export const FOOTER_SECTIONS = [
  FOOTER_COLUMNS.EXPLORE,
  FOOTER_COLUMNS.UPDATES,
];

/**
 * Legal and Policy Links
 */
export const LEGAL_LINKS = [
  { label: 'Privacy Policy', path: '#privacy-policy' },
  { label: 'Terms & Conditions', path: '#terms-conditions' },
  { label: 'Cookie Policy', path: '#cookie-policy' },
];
