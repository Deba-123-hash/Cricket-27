/**
 * CRICKET27 — Official Social Platforms & Community Channels Data
 * Phase 14 Community Configuration
 * Note: When a real verified URL is unavailable, enabled is false and a "Coming Soon" state is displayed.
 */

export const SOCIAL_PLATFORMS_CONFIG = [
  {
    id: 'instagram',
    name: 'Instagram',
    icon: 'Instagram',
    url: null,
    description: 'Visual identity showcases, concept wallpapers, and creative design dispatches.',
    tagline: 'Visual Dispatches',
    enabled: false,
    statusText: 'Official Channel Coming Soon',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: 'Youtube',
    url: null,
    description: 'Concept showcase animations, developer design diaries, and gameplay vision deep dives.',
    tagline: 'Video Showcase',
    enabled: false,
    statusText: 'Official Channel Coming Soon',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'Facebook',
    url: null,
    description: 'Community announcements, feature discussions, and global cricket fan conversations.',
    tagline: 'Community News',
    enabled: false,
    statusText: 'Official Channel Coming Soon',
  },
  {
    id: 'x-twitter',
    name: 'X (formerly Twitter)',
    icon: 'Twitter',
    url: null,
    description: 'Real-time studio dispatches, concept art reveals, and cricket culture highlights.',
    tagline: 'Studio Updates',
    enabled: false,
    statusText: 'Official Channel Coming Soon',
  },
];

// Backwards compatibility alias for footer / older sections
export const SOCIAL_LINKS = SOCIAL_PLATFORMS_CONFIG.map((item) => ({
  name: item.name,
  url: item.url || '#',
  icon: item.icon,
  description: item.description,
  enabled: item.enabled,
  primary: item.id === 'youtube' || item.id === 'instagram',
}));

export default SOCIAL_PLATFORMS_CONFIG;
