/**
 * CRICKET27 — Features Page Official Data
 * Phase 10 Complete Features Showcase Specifications
 * Editorial Content — Concise, impactful, visual-first copy
 */

export const FEATURES_HERO_DATA = {
  eyebrow: 'THE CRICKET27 EXPERIENCE',
  titleLines: ['EVERY DETAIL.', 'EVERY MOMENT.', 'THE SPIRIT OF CRICKET.'],
  description:
    'Tactical depth, athletic responsiveness, and a stylized 2D sports gaming perspective built around skill.',
  primaryCtaText: 'EXPLORE FEATURES',
  secondaryCtaText: 'OUR GAME',
  badgeText: 'CONCEPT SHOWCASE • IN ACTIVE DESIGN',
  bgImage: '/assets/features/feature-hero.webp',
  bgFallback: '/assets/features/feature-hero.jpg',
  stats: [
    { label: 'Core Pillars', value: '6 Categories' },
    { label: 'Art Direction', value: 'Dynamic 2D' },
    { label: 'Tactical Depth', value: 'Skill First' },
  ],
};

export const FEATURE_OVERVIEW_ITEMS = [
  {
    id: 'batting-experience',
    title: 'Batting Experience',
    shortDescription: 'Precision timing, 360° analog placement, and the tactile feel of the sweet spot.',
    icon: 'Crosshair',
    badge: 'Timing & Placement',
    targetSectionId: 'batting-experience',
    image: '/assets/features/batting/batting-main.webp',
    fallbackImage: '/assets/features/batting/batting-main.jpg',
  },
  {
    id: 'bowling-experience',
    title: 'Bowling Experience',
    shortDescription: 'Control pace, seam drift, release angles, and deceptive spin rotations.',
    icon: 'Zap',
    badge: 'Pace & Deception',
    targetSectionId: 'bowling-experience',
    image: '/assets/features/bowling/bowling-main.webp',
    fallbackImage: '/assets/features/bowling/bowling-main.jpg',
  },
  {
    id: 'fielding-experience',
    title: 'Fielding Experience',
    shortDescription: 'Reflex boundary parries, acrobatic slip takes, and direct-hit throws.',
    icon: 'Shield',
    badge: 'Agility & Reflexes',
    targetSectionId: 'fielding-experience',
    image: '/assets/features/fielding/fielding-main.webp',
    fallbackImage: '/assets/features/fielding/fielding-main.jpg',
  },
  {
    id: 'match-presentation',
    title: 'Match Presentation',
    shortDescription: 'Cinematic night venues, broadcast HUD telemetry, and atmospheric floodlighting.',
    icon: 'Tv',
    badge: 'Atmosphere & HUD',
    targetSectionId: 'match-presentation',
    image: '/assets/features/match-presentation/stadium-atmosphere.webp',
    fallbackImage: '/assets/features/match-presentation/stadium-atmosphere.jpg',
  },
  {
    id: 'competitive-experience',
    title: 'Competitive Experience',
    shortDescription: 'High-stakes decision-making across international tournaments and death-over chases.',
    icon: 'Trophy',
    badge: 'Strategy & Cups',
    targetSectionId: 'competitive-experience',
    image: '/assets/features/competitive/competitive-concept.webp',
    fallbackImage: '/assets/features/competitive/competitive-concept.jpg',
  },
  {
    id: 'customisation-concepts',
    title: 'Customisation',
    shortDescription: 'Express team identity through bespoke colourways, custom kits, and willow decals.',
    icon: 'Sparkles',
    badge: 'Identity & Style',
    targetSectionId: 'customisation-concepts',
    image: '/assets/features/feature-summary.webp',
    fallbackImage: '/assets/features/feature-summary.jpg',
  },
];

export const BATTING_DATA = {
  eyebrow: 'THE ART OF BATTING',
  heading: 'TIMING. TECHNIQUE. THE PERFECT SHOT.',
  description:
    'Master tight timing windows and 360° analog strokeplay from classic cover drives to improvisational ramps.',
  imageMain: '/assets/features/batting/batting-main.webp',
  imageFallback: '/assets/features/batting/batting-main.jpg',
  imageDetail: '/assets/features/batting/batting-detail.webp',
  imageDetailFallback: '/assets/features/batting/batting-detail.jpg',
  imageAlt: 'Cricketer in full batting stance playing an aggressive drive',
  highlights: [
    {
      title: 'SHOT SELECTION',
      subtitle: 'Reading Trajectory',
      description: 'Anticipate line, length, and seam to defend, punch, or loft with purpose.',
    },
    {
      title: 'TIMING WINDOWS',
      subtitle: 'Sweet Spot Contact',
      description: 'Micro-second input timing separating boundary strikes from outside edges.',
    },
    {
      title: 'CREATIVE FLAIR',
      subtitle: 'Personal Style',
      description: 'Express individuality with classical orthodox strokes or fearless innovative shots.',
    },
  ],
  ctaText: 'EXPLORE OUR GAME',
  ctaLink: '/our-game',
};

export const BOWLING_DATA = {
  eyebrow: 'THE ART OF BOWLING',
  heading: 'PRECISION MEETS STRATEGY.',
  description:
    'Dictate the match tempo with express pace, late swing drift, seam deviation, and deceptive spin rotations.',
  imageMain: '/assets/features/bowling/bowling-main.webp',
  imageFallback: '/assets/features/bowling/bowling-main.jpg',
  imageDetail: '/assets/features/bowling/bowling-tactics.svg',
  imageAlt: 'Bowler gripping the red cricket ball with raised white seam',
  highlights: [
    {
      title: 'PACE & SWING',
      subtitle: 'Velocity & Drift',
      description: 'Generate express speed and late outswing in the corridor of uncertainty.',
    },
    {
      title: 'SPIN & DECEPTION',
      subtitle: 'Turn & Variations',
      description: 'Execute subtle arm balls, sharp leg-breaks, and dip off the surface.',
    },
    {
      title: 'TACTICAL TRAPS',
      subtitle: 'Field-Aligned Plans',
      description: 'Set field traps, exploit pitch wear, and build tandem bowling pressure.',
    },
  ],
};

export const FIELDING_DATA = {
  eyebrow: 'THE VALUE OF EVERY RUN',
  heading: 'EVERY MOVE CAN MATTER.',
  description:
    'Athletic agility, acrobatic slip cordons, boundary-line parries, and game-changing direct-hit throws.',
  imageMain: '/assets/features/fielding/fielding-main.webp',
  imageFallback: '/assets/features/fielding/fielding-main.jpg',
  imageDiagram: '/assets/features/fielding/fielding-reflex.svg',
  imageAlt: 'Athletic fielding perspective and dynamic ground coverage',
  highlights: [
    {
      title: 'ATHLETIC AGILITY',
      subtitle: 'Ground Coverage',
      description: 'Boundary-skimming dives, airborne catches, and rapid recovery throws.',
    },
    {
      title: 'RING COORDINATION',
      subtitle: 'Field Positioning',
      description: 'Dynamic ring rotations, backing up throws, and boundary relay teamwork.',
    },
    {
      title: 'CLUTCH REFLEXES',
      subtitle: 'Split-Second Takes',
      description: 'Lightning slip catches, sharp bat-pad grabs, and direct-hit run outs.',
    },
  ],
};

export const MATCH_PRESENTATION_DATA = {
  eyebrow: 'THE ATMOSPHERE OF CRICKET',
  heading: 'MORE THAN THE MATCH.\nIT’S THE EXPERIENCE.',
  description:
    'Atmospheric floodlit arenas, clean telemetry HUDs, and the electric roar of tournament cricket.',
  bgImage: '/assets/features/match-presentation/stadium-atmosphere.webp',
  bgFallback: '/assets/features/match-presentation/stadium-atmosphere.jpg',
  themes: [
    {
      id: 'stadium-atmosphere',
      number: '01',
      title: 'STADIUM ATMOSPHERE',
      subtitle: 'Arena Energy',
      description: 'Premier stadiums under floodlights with volumetric haze and crowd acoustics.',
      tag: 'Atmosphere',
    },
    {
      id: 'match-moments',
      number: '02',
      title: 'CLUTCH MOMENTS',
      subtitle: 'High Drama',
      description: 'Last-over thrillers, nervous nineties, hat-trick tension, and DRS reviews.',
      tag: 'Tension',
    },
    {
      id: 'sports-presentation',
      number: '03',
      title: 'SPORTS PRESENTATION',
      subtitle: 'Telemetry Overlays',
      description: 'Wagon wheels, release speed, trajectory arcs, and clean broadcast HUDs.',
      tag: 'Broadcast',
    },
    {
      id: 'cricket-culture',
      number: '04',
      title: 'CRICKET CULTURE',
      subtitle: 'Timeless Traditions',
      description: 'Deep traditions, sportsmanlike conduct, and passion uniting cricket fans.',
      tag: 'Tradition',
    },
  ],
};

export const COMPETITIVE_DATA = {
  eyebrow: 'THE SPIRIT OF COMPETITION',
  heading: 'CRICKET IS A GAME OF DECISIONS.',
  description:
    'High-pressure death overs, championship series, and tactical match scenarios decided by skill.',
  imageMain: '/assets/features/competitive/competitive-concept.webp',
  imageFallback: '/assets/features/competitive/competitive-concept.jpg',
  imageDiagram: '/assets/features/competitive/competitive-leagues.svg',
  highlights: [
    {
      title: 'TACTICAL AWARENESS',
      subtitle: 'Match Intelligence',
      description: 'Balance required run rates, powerplay fields, and bowling quotas.',
    },
    {
      title: 'PRESSURE MOMENTS',
      subtitle: 'The Decisive Duel',
      description: 'Defend low totals on worn pitches or orchestrate composed run chases.',
    },
    {
      title: 'TEAM MOMENTUM',
      subtitle: 'Partnerships & Grit',
      description: 'Build resolute batting partnerships and coordinate attacks to break stands.',
    },
  ],
};

export const CUSTOMISATION_DATA = {
  eyebrow: 'MAKE IT YOUR STYLE',
  heading: 'A PERSONAL TOUCH TO CRICKET.',
  description:
    'Express your visual identity with custom team kits, willow sticker decals, and tailored accents.',
  diagram: '/assets/features/customisation/customisation-kit.svg',
  imageMain: '/assets/features/feature-summary.webp',
  imageFallback: '/assets/features/feature-summary.jpg',
  concepts: [
    {
      id: 'team-colours',
      title: 'TEAM COLOURS',
      description: 'Bespoke palettes blending midnight navies, vibrant electric accents, and classic whites.',
      tag: 'Palettes',
      icon: 'Palette',
    },
    {
      id: 'jersey-styles',
      title: 'JERSEY STYLES',
      description: 'Athletic silhouettes, side-panel gradients, collar options, and bold squad numbers.',
      tag: 'Apparel',
      icon: 'Shirt',
    },
    {
      id: 'cricket-equipment',
      title: 'CRICKET EQUIPMENT',
      description: 'Natural willow grains, custom grip textures, coloured pads, and helmet decals.',
      tag: 'Gear',
      icon: 'Wrench',
    },
    {
      id: 'player-presentation',
      title: 'PLAYER IDENTITY',
      description: 'Unique batting stances, wristwear, sunglasses, and celebratory animations.',
      tag: 'Flair',
      icon: 'UserCheck',
    },
  ],
};

export const FEATURE_SUMMARY_ITEMS = [
  {
    category: 'Batting Experience',
    heading: 'Shot Precision & 360° Arc',
    detail: 'Timing windows, shot selection, footwork dominance, and willow acoustics.',
    tag: 'Offense',
    accentColor: 'lime',
  },
  {
    category: 'Bowling Experience',
    heading: 'Pace, Seam & Drift',
    detail: 'Corridor of uncertainty, ball drift, release angles, and strategic traps.',
    tag: 'Defense',
    accentColor: 'coral',
  },
  {
    category: 'Fielding Experience',
    heading: 'Agility & Direct Hits',
    detail: 'Boundary diving stops, slip cordons, and clutch direct-hit throws.',
    tag: 'Athleticism',
    accentColor: 'lime',
  },
  {
    category: 'Match Presentation',
    heading: 'Arenas & Telemetry',
    detail: 'Volumetric floodlights, crowd roar audio, and real-time telemetry HUDs.',
    tag: 'Immersion',
    accentColor: 'warm-white',
  },
  {
    category: 'Competitive Experience',
    heading: 'Tactical Chess & Pressure',
    detail: 'Run rate calculations, partnership building, and championship stakes.',
    tag: 'Strategy',
    accentColor: 'lime',
  },
  {
    category: 'Customisation Concepts',
    heading: 'Kits & Willow Decals',
    detail: 'Team colourways, jersey patterns, equipment finishes, and player flair.',
    tag: 'Identity',
    accentColor: 'coral',
  },
];

export const FEATURES_CTA_DATA = {
  eyebrow: 'BEYOND THE BOUNDARY',
  heading: 'DISCOVER WHAT LIES BEYOND THE BOUNDARY.',
  description:
    'Explore our gameplay vision and join a growing community shaping the future of digital cricket.',
  primaryCtaText: 'EXPLORE OUR GAME',
  primaryCtaLink: '/our-game',
  secondaryCtaText: 'ABOUT CRICKET27',
  secondaryCtaLink: '/about',
  bgImage: '/assets/features/feature-summary.webp',
  bgFallback: '/assets/features/feature-summary.jpg',
};

export default {
  FEATURES_HERO_DATA,
  FEATURE_OVERVIEW_ITEMS,
  BATTING_DATA,
  BOWLING_DATA,
  FIELDING_DATA,
  MATCH_PRESENTATION_DATA,
  COMPETITIVE_DATA,
  CUSTOMISATION_DATA,
  FEATURE_SUMMARY_ITEMS,
  FEATURES_CTA_DATA,
};
