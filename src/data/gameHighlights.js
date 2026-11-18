/**
 * CRICKET27 — Game Highlights Data
 * Phase 09 Our Game Experience Pillars & Core Highlights
 * Editorial Content — Shortened & Visually Focused
 */

export const EXPERIENCE_PILLARS = [
  {
    id: 'batting',
    number: '01',
    title: 'BATTING MASTERY',
    tagline: '360° Analog Placement & Timing',
    description:
      'Feel the crisp contact of the sweet spot with 360° strokeplay across classical drives and modern improvisations.',
    image: '/assets/game-concept/game-hero.webp',
    imageFallback: '/assets/game-concept/game-hero.jpg',
    imageAlt: 'Batsman executing an aggressive lofted cover drive under stadium lights',
    badge: 'Core Mechanic',
    metrics: [
      { label: 'Control Arc', value: '360°' },
      { label: 'Timing', value: 'Sub-Millisecond' },
      { label: 'Shot Variety', value: '28+ Strokes' },
    ],
    features: [
      'Crisp audio feedback on sweet-spot contact',
      'Fluid footwork transitions between front and back foot',
      'True risk-reward calculations on aerial shots',
    ],
  },
  {
    id: 'bowling',
    number: '02',
    title: 'BOWLING ARTISTRY',
    tagline: 'Pace, Seam, Drift & Deception',
    description:
      'A tactical duel of wits—command late outswing into the corridor of uncertainty and exploit pitch wear.',
    image: '/assets/game-concept/bowling-concept.webp',
    imageFallback: '/assets/game-concept/bowling-concept.jpg',
    imageAlt: 'Bowler gripping the raised seam of a cricket ball',
    badge: 'Artistry & Craft',
    metrics: [
      { label: 'Release Styles', value: '16+ Variations' },
      { label: 'Ball Physics', value: 'Dynamic Drift' },
      { label: 'Tactics', value: 'Field-Aligned' },
    ],
    features: [
      'Tactile seam release and wrist angle control',
      'Variable pace from express yorkers to subtle cutters',
      'Intelligent field traps tailored to pitch conditions',
    ],
  },
  {
    id: 'fielding',
    number: '03',
    title: 'ATHLETIC FIELDING',
    tagline: 'Reflex Saves & Direct Hits',
    description:
      'Split-second boundary diving stops, acrobatic slip catches, and clutch direct-hit throws that swing match momentum.',
    image: '/assets/game-concept/fielding-concept.webp',
    imageFallback: '/assets/game-concept/fielding-concept.jpg',
    imageAlt: 'Athletic fielder diving to stop the boundary under floodlights',
    badge: 'Split-Second Agility',
    metrics: [
      { label: 'Reflex Window', value: 'Sub-Second' },
      { label: 'Throw Accuracy', value: 'Skill Based' },
      { label: 'Ring Shift', value: 'Dynamic' },
    ],
    features: [
      'Custom 30-yard ring presets and deep sweepers',
      'Pressure-tested direct-hit throwing mechanics',
      'Acrobatic boundary relays and slip cordons',
    ],
  },
  {
    id: 'atmosphere',
    number: '04',
    title: 'MATCH ATMOSPHERE',
    tagline: 'Electric Arenas & Roaring Crowds',
    description:
      'Floodlit night stadiums alive with crowd acoustics, atmospheric haze, and broadcast-grade telemetry HUDs.',
    image: '/assets/game-concept/match-experience.webp',
    imageFallback: '/assets/game-concept/match-experience.jpg',
    imageAlt: 'Panoramic international cricket stadium illuminated by floodlights',
    badge: 'Atmospheric Immersion',
    metrics: [
      { label: 'Lighting', value: 'Day / Dusk / Night' },
      { label: 'Audio', value: 'Dynamic Roar' },
      { label: 'Telemetry', value: 'DRS & Speeds' },
    ],
    features: [
      'Volumetric floodlight glare and dusk transitions',
      'Crowd audio that rises with every wicket and boundary',
      'Clean broadcast telemetry with real-time wagon wheels',
    ],
  },
];

export const EXPERIENCE_HIGHLIGHTS = [
  {
    id: 'authenticity',
    title: 'Cricket Authenticity',
    icon: 'ShieldCheck',
    tag: 'Physics & Sound',
    description: 'Authentic seam deviation, ball drift, and the distinctive sound of willow on leather.',
  },
  {
    id: 'intensity',
    title: 'Match Intensity',
    icon: 'Flame',
    tag: 'Clutch Moments',
    description: 'High-stakes death overs, low-score defenses, and tense DRS reviews under the lights.',
  },
  {
    id: 'expression',
    title: 'Player Expression',
    icon: 'Sparkles',
    tag: 'Signature Flair',
    description: 'Personalized batting stances, unique run-ups, and distinctive celebration styles.',
  },
  {
    id: 'strategy',
    title: 'Strategic Thinking',
    icon: 'Compass',
    tag: 'Tactical Depth',
    description: 'Field placement adjustments, bowling rotations, and calculated risk-taking.',
  },
  {
    id: 'visuals',
    title: 'Visual Presentation',
    icon: 'Layers',
    tag: 'Modern 2D Art',
    description: 'High-refresh stylized 2D graphics, floodlit haze, and clean broadcast HUD overlays.',
  },
  {
    id: 'community',
    title: 'Community Driven',
    icon: 'Users',
    tag: 'Player Feedback',
    description: 'Shaped directly through player polls, mechanics discussions, and transparent updates.',
  },
];

export default {
  EXPERIENCE_PILLARS,
  EXPERIENCE_HIGHLIGHTS,
};
