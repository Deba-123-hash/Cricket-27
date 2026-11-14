/**
 * CRICKET27 — Game Highlights Data
 * Phase 09 Our Game Experience Pillars & Core Highlights
 */

export const EXPERIENCE_PILLARS = [
  {
    id: 'batting',
    number: '01',
    title: 'BATTING MASTERY',
    tagline: 'Precision, Timing & Pure 360-Degree Shotmaking',
    description:
      'Experience the tactile thrill of sweet-spot contact, reading deliveries early and unleashing 360° strokeplay across orthodox drives and innovative ramps.',
    image: '/assets/game-concept/game-hero.webp',
    imageFallback: '/assets/game-concept/game-hero.jpg',
    imageAlt: 'Batsman executing an aggressive lofted cover drive under stadium lights',
    badge: 'Core Mechanic',
    metrics: [
      { label: 'Control Arc', value: '360°' },
      { label: 'Timing Windows', value: 'Micro-Precise' },
      { label: 'Shot Archetypes', value: '28+ Strokes' },
    ],
    features: [
      'Authentic sweet spot audio and visual impact feedback',
      'Dynamic footwork transitions for front-foot and back-foot dominance',
      'Calculated aerial loft vs. grounded placement risk balance',
    ],
  },
  {
    id: 'bowling',
    number: '02',
    title: 'BOWLING ARTISTRY',
    tagline: 'Pace, Seam, Drift & Tactical Deception',
    description:
      'A tactical duel of wits—command late outswing into the corridor of uncertainty, disguise cutters, and exploit pitch wear.',
    image: '/assets/game-concept/bowling-concept.webp',
    imageFallback: '/assets/game-concept/bowling-concept.jpg',
    imageAlt: 'Macro close-up of a bowler gripping the raised seam of a red cricket ball',
    badge: 'Artistry & Craft',
    metrics: [
      { label: 'Release Variations', value: '16+ Styles' },
      { label: 'Seam Physics', value: 'Dynamic Drift' },
      { label: 'Tactical Traps', value: 'Field-Aligned' },
    ],
    features: [
      'Tactile seam position control and wrist tilt calibration',
      'Speed variability across express pace, medium cutters, and finger spin',
      'Strategic trap setups designed around customized field coordinates',
    ],
  },
  {
    id: 'fielding',
    number: '03',
    title: 'ATHLETIC FIELDING',
    tagline: 'Reflex Catches, Boundary Saves & Direct Hits',
    description:
      'Split-second boundary diving stops, acrobatic slip takes, and clutch direct-hit throws that turn match momentum.',
    image: '/assets/game-concept/fielding-concept.webp',
    imageFallback: '/assets/game-concept/fielding-concept.jpg',
    imageAlt: 'Athletic fielding perspective showing ground coverage and stadium atmosphere',
    badge: 'Split-Second Agility',
    metrics: [
      { label: 'Reaction Window', value: 'Split-Second' },
      { label: 'Direct Hit Rate', value: 'Skill Based' },
      { label: 'Preset Rings', value: 'Instant Shift' },
    ],
    features: [
      'Customizable 30-yard ring presets and deep boundary sweepers',
      'High-stakes direct hit throw meter with clutch pressure modifiers',
      'Spectacular boundary-line relay catches with boundary-rope collision awareness',
    ],
  },
  {
    id: 'atmosphere',
    number: '04',
    title: 'MATCH ATMOSPHERE',
    tagline: 'Electric Arenas, Roaring Crowds & Match Intensity',
    description:
      'Step into floodlit arenas pulsing with crowd roars, dynamic evening lighting transitions, and broadcast-grade presentation.',
    image: '/assets/game-concept/match-experience.webp',
    imageFallback: '/assets/game-concept/match-experience.jpg',
    imageAlt: 'Full panoramic international cricket stadium illuminated by towering floodlights',
    badge: 'Cinematic Immersion',
    metrics: [
      { label: 'Lighting Modes', value: 'Day / Dusk / Night' },
      { label: 'Crowd Roar', value: 'Adaptive Audio' },
      { label: 'Match Tension', value: 'Dynamic HUD' },
    ],
    features: [
      'Volumetric floodlight glare and atmospheric dusk-to-night transitions',
      'Dynamic crowd audio that responds organically to every boundary and wicket',
      'Broadcast-grade telemetry HUD showcasing ball speeds, DRS tracking, and wagon wheels',
    ],
  },
];

export const EXPERIENCE_HIGHLIGHTS = [
  {
    id: 'authenticity',
    title: 'Cricket Authenticity',
    icon: 'ShieldCheck',
    tag: 'Physics & Acoustics',
    description:
      'Rooted in the genuine nuances of cricket—swing, seam deviation, and the unmistakable sound of willow on leather.',
  },
  {
    id: 'intensity',
    title: 'Match Intensity',
    icon: 'Flame',
    tag: 'Clutch Moments',
    description:
      'Capturing the pulse-pounding pressure of death-over run chases, defending low totals, and decisive DRS reviews.',
  },
  {
    id: 'expression',
    title: 'Player Expression',
    icon: 'Sparkles',
    tag: 'Signature Flair',
    description:
      'Distinct batting stances, expressive bowling run-ups, and signature celebratory rituals.',
  },
  {
    id: 'strategy',
    title: 'Strategic Thinking',
    icon: 'Compass',
    tag: 'Tactical Depth',
    description:
      'Field coordinate adjustments, situational bowling rotations, and calculating risk-versus-reward.',
  },
  {
    id: 'visuals',
    title: 'Visual Presentation',
    icon: 'Layers',
    tag: 'Modern 2D Art',
    description:
      'High-refresh 2D art direction, dynamic volumetric floodlighting, clean silhouettes, and broadcast telemetry HUDs.',
  },
  {
    id: 'community',
    title: 'Cricket Community',
    icon: 'Users',
    tag: 'Fan Driven',
    description:
      'A sports gaming project shaped with direct ideas, feedback polls, and shared passion from cricket fans worldwide.',
  },
];

export default {
  EXPERIENCE_PILLARS,
  EXPERIENCE_HIGHLIGHTS,
};
