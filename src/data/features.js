/**
 * CRICKET27 — Official Homepage Features Data
 * Aligned with Section 7 of Phase 06 Specifications
 * Note: These are proposed promotional concepts, not released game features.
 */

export const HOMEPAGE_FEATURES = [
  {
    id: 'batting-experience',
    title: 'Precision Batting Experience',
    category: 'Core Gameplay',
    summary: 'Sub-millisecond input response and 360° analog stroke placement.',
    description: 'Execute 28+ authentic strokes from classic cover drives to unorthodox ramps with 360° analog placement.',
    badge: 'Timing & Placement',
    iconName: 'Crosshair',
    image: '/assets/features/batting/batting-main.webp',
    fallbackImage: '/assets/features/batting/batting-main.jpg',
    highlight: true,
  },
  {
    id: 'bowling-experience',
    title: 'Strategic Bowling Mechanics',
    category: 'Physics & Trajectory',
    summary: 'Seam deviation, release angles, and atmospheric swing control.',
    description: 'Control seam deviation, release angles, and atmospheric drift to exploit pitch wear and dismantle lineups.',
    badge: 'Seam & Drift',
    iconName: 'Zap',
    image: '/assets/features/bowling/bowling-main.webp',
    fallbackImage: '/assets/features/bowling/bowling-main.jpg',
    highlight: false,
  },
  {
    id: 'fielding-experience',
    title: 'Dynamic Fielding Reflexes',
    category: 'Teamwork & Defense',
    summary: 'Custom ring presets, direct-hit challenges, and boundary saves.',
    description: 'Deploy customizable ring presets, trigger clutch direct-hit reflex challenges, and execute diving boundary saves.',
    badge: 'Reflex Targets',
    iconName: 'Shield',
    image: '/assets/features/fielding/fielding-main.webp',
    fallbackImage: '/assets/features/fielding/fielding-main.jpg',
    highlight: false,
  },
  {
    id: 'match-presentation',
    title: 'Cinematic Match Presentation',
    category: 'Audio-Visual Immersion',
    summary: 'Broadcast telemetry, real-time wagon wheels, and dynamic DRS.',
    description: 'Esports-grade broadcast telemetry, real-time wagon wheels, dynamic DRS reviews, and atmospheric stadium lighting.',
    badge: 'Hawk-Eye & DRS',
    iconName: 'Tv',
    image: '/assets/features/match-presentation/stadium-atmosphere.webp',
    fallbackImage: '/assets/features/match-presentation/stadium-atmosphere.jpg',
    highlight: true,
  },
  {
    id: 'competitive-experience',
    title: 'Competitive League Vision',
    category: 'Championships',
    summary: 'International Test series, franchise leagues, and skill balance.',
    description: 'Dominate international Test series, franchise leagues, and high-stakes T20 cups built on pure skill balance.',
    badge: 'Global Cups',
    iconName: 'Trophy',
    image: '/assets/features/competitive/competitive-concept.webp',
    fallbackImage: '/assets/features/competitive/competitive-concept.jpg',
    highlight: false,
  },
  {
    id: 'customisation-experience',
    title: 'Tactical Customisation Studio',
    category: 'Player Personalisation',
    summary: 'Bespoke team kits, willow decals, and atmospheric venues.',
    description: 'Design bespoke team kits, willow sticker decals, and squad numbers in atmospheric custom venues.',
    badge: 'Kits & Venues',
    iconName: 'Sparkles',
    image: '/assets/features/feature-summary.webp',
    fallbackImage: '/assets/features/feature-summary.jpg',
    highlight: false,
  },
];

// Backwards compatibility alias
export const GAME_FEATURES = HOMEPAGE_FEATURES;

export default HOMEPAGE_FEATURES;
