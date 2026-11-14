/**
 * CRICKET27 — Core Application Constants
 * Phase 01 Project Foundation
 */

export const APP_CONFIG = {
  BRAND_NAME: 'CRICKET27',
  TAGLINE: 'BEYOND THE BOUNDARY',
  DESCRIPTION: 'Official promotional web portal for CRICKET27 — the next-generation 2D cricket gaming brand.',
  CONTACT_EMAIL: 'contact@cricket27.com',
  SITE_URL: 'https://cricket27.com',
  DEFAULT_OG_IMAGE: 'https://cricket27.com/assets/hero/cricket27-home-hero.webp',
  PHASE: 'Phase 24 — Final Frontend Integration & Production Readiness',
  YEAR: new Date().getFullYear(),
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  OUR_GAME: '/our-game',
  FEATURES: '/features',
  MEDIA: '/media',
  NEWS: '/news',
  NEWS_DETAILS: '/news/:slug',
  COMMUNITY: '/community',
  FAQ: '/faq',
  CONTACT: '/contact',
  BRAND_PREVIEW: '/brand-preview',
  DESIGN_SYSTEM: '/design-system',
};

export const SOCIAL_PLATFORMS = {
  DISCORD: 'https://discord.gg/cricket27',
  TWITTER: 'https://twitter.com/cricket27game',
  YOUTUBE: 'https://youtube.com/@cricket27',
  INSTAGRAM: 'https://instagram.com/cricket27game',
  FACEBOOK: 'https://facebook.com/cricket27game',
  REDDIT: 'https://reddit.com/r/cricket27',
};

export const NAV_ITEMS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'About', path: ROUTES.ABOUT },
  { label: 'Our Game', path: ROUTES.OUR_GAME },
  { label: 'Features', path: ROUTES.FEATURES },
];
