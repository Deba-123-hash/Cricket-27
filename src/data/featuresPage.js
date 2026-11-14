/**
 * CRICKET27 — Features Page Official Data
 * Phase 10 Complete Features Showcase Specifications
 * Note: These are proposed promotional concepts, not released game features.
 */

export const FEATURES_HERO_DATA = {
  eyebrow: 'DISCOVER THE EXPERIENCE',
  titleLines: ['EVERY DETAIL.', 'EVERY MOMENT.', 'THE SPIRIT OF CRICKET.'],
  description:
    'Tactical depth, athletic authenticity, and a modern 2D cricket gaming perspective built around precision and competition.',
  primaryCtaText: 'EXPLORE FEATURES',
  secondaryCtaText: 'OUR GAME',
  badgeText: 'CONCEPT SHOWCASE • IN ACTIVE DESIGN',
  bgImage: '/assets/features/feature-hero.webp',
  bgFallback: '/assets/features/feature-hero.jpg',
  stats: [
    { label: 'Core Pillars', value: '6 Categories' },
    { label: 'Art Direction', value: 'Dynamic 2D' },
    { label: 'Tactical Depth', value: 'Uncompromised' },
  ],
};

export const FEATURE_OVERVIEW_ITEMS = [
  {
    id: 'batting-experience',
    title: 'Batting Experience',
    shortDescription:
      'Precision shot selection, 360-degree control, and the tactile thrill of finding the sweet spot.',
    icon: 'Crosshair',
    badge: 'Timing & Placement',
    targetSectionId: 'batting-experience',
    image: '/assets/features/batting/batting-main.webp',
    fallbackImage: '/assets/features/batting/batting-main.jpg',
  },
  {
    id: 'bowling-experience',
    title: 'Bowling Experience',
    shortDescription:
      'Command pace, seam angle, swing drift, and subtle spin variations to outthink the batter.',
    icon: 'Zap',
    badge: 'Pace & Deception',
    targetSectionId: 'bowling-experience',
    image: '/assets/features/bowling/bowling-main.webp',
    fallbackImage: '/assets/features/bowling/bowling-main.jpg',
  },
  {
    id: 'fielding-experience',
    title: 'Fielding Experience',
    shortDescription:
      'Reflex boundary saves, acrobatic slip catches, and laser-accurate direct-hit throws.',
    icon: 'Shield',
    badge: 'Agility & Reflexes',
    targetSectionId: 'fielding-experience',
    image: '/assets/features/fielding/fielding-main.webp',
    fallbackImage: '/assets/features/fielding/fielding-main.jpg',
  },
  {
    id: 'match-presentation',
    title: 'Match Presentation',
    shortDescription:
      'Cinematic floodlit arenas, broadcast HUD telemetry, and dynamic stadium lighting.',
    icon: 'Tv',
    badge: 'Atmosphere & Broadcast',
    targetSectionId: 'match-presentation',
    image: '/assets/features/match-presentation/stadium-atmosphere.webp',
    fallbackImage: '/assets/features/match-presentation/stadium-atmosphere.jpg',
  },
  {
    id: 'competitive-experience',
    title: 'Competitive Experience',
    shortDescription:
      'Tactical depth and high-stakes decision-making across world cups and death-over chases.',
    icon: 'Trophy',
    badge: 'Strategy & Cups',
    targetSectionId: 'competitive-experience',
    image: '/assets/features/competitive/competitive-concept.webp',
    fallbackImage: '/assets/features/competitive/competitive-concept.jpg',
  },
  {
    id: 'customisation-concepts',
    title: 'Customisation',
    shortDescription:
      'Express team identity through custom colourways, bespoke jersey designs, and willow decals.',
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
    'Master timing windows, reading trajectories, and unleashing 360° strokeplay across orthodox cover drives and modern improvisations.',
  imageMain: '/assets/features/batting/batting-main.webp',
  imageFallback: '/assets/features/batting/batting-main.jpg',
  imageDetail: '/assets/features/batting/batting-detail.webp',
  imageDetailFallback: '/assets/features/batting/batting-detail.jpg',
  imageAlt: 'Cricketer in full batting stance playing an aggressive drive',
  highlights: [
    {
      title: 'SHOT SELECTION',
      subtitle: 'Approaching Each Delivery',
      description:
        'Read line, length, and trajectory to calculate when to defend, punch, or loft.',
    },
    {
      title: 'TIMING AND TECHNIQUE',
      subtitle: 'The Sweet Spot Contact',
      description:
        'Micro-second timing mechanics separating boundary strikes from outside edges.',
    },
    {
      title: 'BATTING STYLE',
      subtitle: 'Individuality on the Crease',
      description:
        'Express personal flair with classical orthodox strokes or fearless innovative ramps.',
    },
  ],
  ctaText: 'EXPLORE OUR GAME',
  ctaLink: '/our-game',
};

export const BOWLING_DATA = {
  eyebrow: 'THE ART OF BOWLING',
  heading: 'PRECISION MEETS STRATEGY.',
  description:
    'Dictate match tempo with precision pace, late swing drift, seam deviations, and deceptive spin rotations.',
  imageMain: '/assets/features/bowling/bowling-main.webp',
  imageFallback: '/assets/features/bowling/bowling-main.jpg',
  imageDetail: '/assets/features/bowling/bowling-tactics.svg',
  imageAlt: 'Macro close-up of a bowler gripping the red cricket ball with raised white seam',
  highlights: [
    {
      title: 'PACE BOWLING',
      subtitle: 'Speed, Rhythm & Accuracy',
      description:
        'Generate express velocity, late outswing, and seam movement in the corridor of uncertainty.',
    },
    {
      title: 'SPIN BOWLING',
      subtitle: 'Variation, Drift & Deception',
      description:
        'Execute subtle arm balls, sharp leg-breaks, atmospheric drift, and sharp surface dip.',
    },
    {
      title: 'BOWLING STRATEGY',
      subtitle: 'Field-Aligned Execution',
      description:
        'Set field traps, exploit pitch deterioration, and build bowling tandem pressure.',
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
      title: 'ATHLETICISM',
      subtitle: 'Agility & Physical Mastery',
      description:
        'Boundary-skimming dives, airborne catches, and rapid recovery throws back to the stumps.',
    },
    {
      title: 'TEAMWORK',
      subtitle: 'Coordination & Collective Effort',
      description:
        'Dynamic ring rotations, backing up throws, and boundary relay tag teams.',
    },
    {
      title: 'QUICK REACTIONS',
      subtitle: 'Match-Changing Split Seconds',
      description:
        'Lightning reflex slip catches, sharp bat-pad grabs, and direct-hit run outs.',
    },
  ],
};

export const MATCH_PRESENTATION_DATA = {
  eyebrow: 'THE ATMOSPHERE OF CRICKET',
  heading: 'MORE THAN THE MATCH.\nIT’S THE EXPERIENCE.',
  description:
    'Atmospheric floodlit arenas, dynamic telemetry HUDs, and the electric roar of high-stakes tournament cricket.',
  bgImage: '/assets/features/match-presentation/stadium-atmosphere.webp',
  bgFallback: '/assets/features/match-presentation/stadium-atmosphere.jpg',
  themes: [
    {
      id: 'stadium-atmosphere',
      number: '01',
      title: 'STADIUM ATMOSPHERE',
      subtitle: 'The Roar of 80,000 Fans',
      description:
        'Premier cricket stadiums under towering floodlights with volumetric haze and crowd acoustics.',
      tag: 'Arena Energy',
    },
    {
      id: 'match-moments',
      number: '02',
      title: 'MATCH MOMENTS',
      subtitle: 'Dramatic Finishes',
      description:
        'Last-over thrillers, nervous nineties, hat-trick tension, and clutch DRS reviews.',
      tag: 'High Stakes',
    },
    {
      id: 'sports-presentation',
      number: '03',
      title: 'SPORTS PRESENTATION',
      subtitle: 'Broadcast-Grade Telemetry',
      description:
        'Wagon wheels, release velocity, ball trajectory arcs, and clean HUD telemetry design.',
      tag: 'Telemetry HUD',
    },
    {
      id: 'cricket-culture',
      number: '04',
      title: 'CRICKET CULTURE',
      subtitle: 'Timeless Traditions',
      description:
        'Timeless traditions, respectful sportsmanship, and the passion uniting generations.',
      tag: 'Soul of Cricket',
    },
  ],
};

export const COMPETITIVE_DATA = {
  eyebrow: 'THE SPIRIT OF COMPETITION',
  heading: 'CRICKET IS A GAME OF DECISIONS.',
  description:
    'Calculated decision-making under high-pressure death overs, championship series, and tactical match situations.',
  imageMain: '/assets/features/competitive/competitive-concept.webp',
  imageFallback: '/assets/features/competitive/competitive-concept.jpg',
  imageDiagram: '/assets/features/competitive/competitive-leagues.svg',
  highlights: [
    {
      title: 'STRATEGIC THINKING',
      subtitle: 'Situational Match Awareness',
      description:
        'Assess required run rates, powerplay restrictions, and bowling quota management.',
    },
    {
      title: 'COMPETITIVE SPIRIT',
      subtitle: 'The Thrill of the Duel',
      description:
        'Defend low totals on worn pitches, or execute composed run chases under the lights.',
    },
    {
      title: 'TEAM DYNAMICS',
      subtitle: 'Partnerships & Collective Will',
      description:
        'Build resolute batting stands and coordinate bowling attacks to break stubborn defenses.',
    },
  ],
};

export const CUSTOMISATION_DATA = {
  eyebrow: 'MAKE IT YOUR STYLE',
  heading: 'A PERSONAL TOUCH TO CRICKET.',
  description:
    'Express your visual identity through custom team kits, willow sticker decals, and tailored gear accents.',
  diagram: '/assets/features/customisation/customisation-kit.svg',
  imageMain: '/assets/features/feature-summary.webp',
  imageFallback: '/assets/features/feature-summary.jpg',
  concepts: [
    {
      id: 'team-colours',
      title: 'TEAM COLOURS',
      description:
        'Bespoke palettes blending midnight navies, vibrant electric accents, and classic whites.',
      tag: 'Palette Presets',
      icon: 'Palette',
    },
    {
      id: 'jersey-styles',
      title: 'JERSEY STYLES',
      description:
        'Athletic silhouettes, side-panel gradients, collar options, and bold squad numbers.',
      tag: 'Apparel Design',
      icon: 'Shirt',
    },
    {
      id: 'cricket-equipment',
      title: 'CRICKET EQUIPMENT',
      description:
        'Natural willow grains, custom grip textures, coloured batting pads, and helmet decals.',
      tag: 'Willow & Gear',
      icon: 'Wrench',
    },
    {
      id: 'player-presentation',
      title: 'PLAYER PRESENTATION',
      description:
        'Unique batting stances, wristwear, sunglasses, and celebratory animations.',
      tag: 'Player Identity',
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
    heading: 'Pace, Seam & Spin Deception',
    detail: 'Corridor of uncertainty, ball drift, release angles, and strategic field traps.',
    tag: 'Defense',
    accentColor: 'coral',
  },
  {
    category: 'Fielding Experience',
    heading: 'Agility, Reflexes & Catches',
    detail: 'Boundary diving stops, slip cordons, and clutch direct-hit throws.',
    tag: 'Athleticism',
    accentColor: 'lime',
  },
  {
    category: 'Match Presentation',
    heading: 'Atmospheric Arenas & Broadcast HUD',
    detail: 'Volumetric floodlights, crowd roar audio, and real-time telemetry overlays.',
    tag: 'Immersion',
    accentColor: 'warm-white',
  },
  {
    category: 'Competitive Experience',
    heading: 'Strategic Chess & Decision Making',
    detail: 'Required run rate pressure, partnership building, and championship stakes.',
    tag: 'Strategy',
    accentColor: 'lime',
  },
  {
    category: 'Customisation Concepts',
    heading: 'Personalised Kits & Willow Styling',
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
