/**
 * CRICKET27 — Official News, Studio Dispatches & Editorial Articles
 * Phase 13 News Details Page & Complete Article Experience
 * Note: These are sample editorial articles exploring brand concepts, not confirmed commercial announcements.
 */

export const NEWS_CATEGORIES = [
  'All News',
  'Brand Updates',
  'Game Vision',
  'Development',
  'Community',
  'Announcements',
];

export const NEWS_ARTICLES = [
  {
    id: 'vision-behind-cricket27',
    slug: 'the-vision-behind-cricket27',
    title: 'THE VISION BEHIND CRICKET27',
    category: 'Brand Updates',
    date: '2026-11-14',
    readTime: '4 min read',
    excerpt:
      'Discover the creative direction, ambition and ideas shaping the CRICKET27 cricket gaming brand.',
    author: {
      name: 'CRICKET27 Studio Team',
      role: 'Creative Directors',
    },
    image: '/assets/news/vision-behind-cricket27.jpg',
    alt: 'International cricket night match batsman executing aggressive cover drive under floodlights',
    imageCaption: 'Concept Keyframe: High-contrast cover drive execution under atmospheric night floodlights.',
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'Welcome to the official digital hub of CRICKET27 — an international gaming brand dedicated to celebrating the authentic spirit, tactical depth, and pure adrenaline of cricket.',
      },
      {
        type: 'heading',
        text: 'Redefining the 2D Cricket Experience',
      },
      {
        type: 'paragraph',
        text: 'For too long, digital cricket has been caught in a simulation dilemma. Mainstream sports franchises frequently invest millions into complex 3D graphics that often struggle with wooden physics, disjointed animation transitions, and laggy input response. In contrast, CRICKET27 was conceived from a different conviction: what if we built a high-refresh, stylized 2D sports experience that plays with the lightning-fast responsiveness of an elite arcade title, while respecting the serious strategic depth of Test and limited-overs cricket?',
      },
      {
        type: 'quote',
        text: 'Cricket is not just an athletic sport — it is a psychological chess match fought at 145 kilometers per hour. Every ball demands an answer.',
        author: 'CRICKET27 Creative Direction',
      },
      {
        type: 'paragraph',
        text: 'From the moment a batsman marks their guard to the collective silence before the bowler begins their run-up, cricket is built on rhythm, anticipation, and explosive release. Our design pillars focus intensely on these micro-moments:',
      },
      {
        type: 'list',
        items: [
          '360-Degree Analog Placement: Micro-second timing windows that reward reading line and length early.',
          'Authentic Pitch Dynamics: Day-one true bounce transitioning into day-five variable rough and reverse swing.',
          'Situational Field Telemetry: Coordinated ring presets, boundary sweeper angles, and clutch direct-hit meters.',
          'Esports-Grade Presentation: Clean television broadcast HUDs without intrusive visual clutter.',
        ],
      },
      {
        type: 'heading',
        text: 'A Foundation Built Alongside the Fans',
      },
      {
        type: 'paragraph',
        text: 'We are establishing the design foundation before moving into production phases. This website serves as our public platform to share concepts, gather genuine community feedback, and document our design journey transparently. We invite players worldwide to step beyond the boundary with us.',
      },
    ],
  },
  {
    id: 'building-gaming-identity',
    slug: 'building-a-cricket-gaming-identity',
    title: 'BUILDING A CRICKET GAMING IDENTITY',
    category: 'Brand Updates',
    date: '2026-11-08',
    readTime: '3 min read',
    excerpt:
      'How our creative team balances authentic sports heritage with a bold, modern esports visual identity.',
    author: {
      name: 'Brand Experience Lead',
      role: 'Art & Identity',
    },
    image: '/assets/news/building-gaming-identity.jpg',
    alt: 'Cricket key art depicting cover drive in athletic posture',
    imageCaption: 'Brand Artistry: Merging deep midnight navy with vibrant electric lime boundary accents.',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Creating an enduring sports brand requires honoring history while forging an unmistakable modern aesthetic. Cricket carries centuries of rich traditions, storied rivalries, and distinctive aesthetics — from the clean whites of Test cricket to the vibrant neon horizons of floodlit T20 leagues.',
      },
      {
        type: 'heading',
        text: 'The Palette of Night Cricket',
      },
      {
        type: 'paragraph',
        text: 'Our signature palette was developed directly from the sensory experience of attending a high-stakes night match. The deep Midnight Navy (#101827) mirrors the dark stadium sky. The Electric Lime (#B7F34A) captures the glowing boundary rope and radar trackers. Warm White (#F5F3EB) provides tactile balance like fresh flannel and bleached willow, while Coral (#FF704D) sparks sudden moments of high drama.',
      },
      {
        type: 'quote',
        text: 'A sports brand should feel electric the moment it illuminates your screen.',
        author: 'Brand Design Directorate',
      },
      {
        type: 'subheading',
        text: 'Typographic Precision',
      },
      {
        type: 'paragraph',
        text: 'We paired bold, athletic uppercase headlines in Oswald with the clean, legible clarity of Inter for body text. The result is a publication system that feels equally at home on broadcast television, mobile leaderboards, and print promotional posters.',
      },
    ],
  },
  {
    id: 'art-of-cricket-presentation',
    slug: 'the-art-of-cricket-presentation',
    title: 'THE ART OF CRICKET PRESENTATION',
    category: 'Game Vision',
    date: '2026-10-30',
    readTime: '5 min read',
    excerpt:
      'Exploring broadcast-grade HUD telemetry, Hawk-Eye ball tracking overlays, and immersive floodlit arena atmospheres.',
    author: {
      name: 'Visual Presentation Lead',
      role: 'Broadcast Design',
    },
    image: '/assets/news/art-of-cricket-presentation.jpg',
    alt: 'Atmospheric stadium floodlights and perimeter boundary lighting',
    imageCaption: 'Broadcast Telemetry: Designing clean informational HUD overlays for 2D competitive play.',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'A great sports title should evoke the sensory immersion of watching a world-class television broadcast. In CRICKET27, our presentation philosophy is anchored around clarity, atmosphere, and authentic telemetry.',
      },
      {
        type: 'heading',
        text: 'Telemetry Without Distraction',
      },
      {
        type: 'paragraph',
        text: 'Too many modern games overload the player interface with intrusive health bars, floating indicators, and neon meters that obscure the actual action. Our concept streamlines these elements into minimalistic, broadcast-grade telemetry inspired by modern TV graphics:',
      },
      {
        type: 'list',
        items: [
          'Ball Tracking & Pitch Map: Clear visual trajectory arcs showing length, deviation, and point of impact.',
          'Wagon Wheel Analytics: Instant visual breakdown of boundary distribution across 360 degrees.',
          'Speed & Seam Telemetry: Accurate release speed readouts and seam angle rotation indicators.',
          'Ultra-Edge Acoustic Waveforms: Stylized audio wave overlays during tight review appeals.',
        ],
      },
      {
        type: 'quote',
        text: 'Information should empower player strategy, not fight for visual dominance on the screen.',
        author: 'HUD Systems Architect',
      },
      {
        type: 'paragraph',
        text: 'Combined with dynamic crowd audio cues that surge when a boundary is struck or fall silent during a tense lbw appeal, the match presentation makes every over feel consequential.',
      },
    ],
  },
  {
    id: 'celebrating-spirit-of-cricket',
    slug: 'celebrating-the-spirit-of-cricket',
    title: 'CELEBRATING THE SPIRIT OF CRICKET',
    category: 'Community',
    date: '2026-10-22',
    readTime: '4 min read',
    excerpt:
      'Honouring sportsmanship, respectful rivalries, and the shared passion connecting cricket supporters across the globe.',
    author: {
      name: 'Player Relations',
      role: 'Community Engagement',
    },
    image: '/assets/news/celebrating-spirit-of-cricket.jpg',
    alt: 'Tunnel walkout into grand cricket arena with volumetric illumination',
    imageCaption: 'The Spirit of Cricket: Walking down the pavilion stairs with everything on the line.',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Few sports possess an ethos as revered as "The Spirit of Cricket." Beyond runs, wickets, and trophies, cricket is defined by mutual respect between competitors, the gracious acceptance of an umpire’s decision, and the shared joy of a closely fought match.',
      },
      {
        type: 'heading',
        text: 'A Global Community Bound by Passion',
      },
      {
        type: 'paragraph',
        text: 'From dusty gully pitches in Mumbai and Melbourne parklands to floodlit stadiums in London and Barbados, cricket connects people across cultural and linguistic divides. In building CRICKET27, our goal is to foster an inclusive, respectful gaming community that celebrates this heritage.',
      },
      {
        type: 'quote',
        text: 'You play with fierce competitive fire on the pitch, and share a cup of tea when the bails come off.',
        author: 'Community Values Charter',
      },
      {
        type: 'paragraph',
        text: 'We are committed to building a digital space where supporters can debate tactics, vote on upcoming feature priorities, share artwork, and connect through their mutual devotion to the game.',
      },
    ],
  },
  {
    id: 'future-of-cricket-gaming',
    slug: 'exploring-the-future-of-cricket-gaming',
    title: 'EXPLORING THE FUTURE OF CRICKET GAMING',
    category: 'Game Vision',
    date: '2026-10-15',
    readTime: '5 min read',
    excerpt:
      'Why fluid 2D mechanics, frame-perfect timing, and strategic depth create an unmatched digital cricket experience.',
    author: {
      name: 'Gameplay Architecture Lead',
      role: 'Core Systems',
    },
    image: '/assets/news/future-of-cricket-gaming.jpg',
    alt: 'Panoramic cricket stadium filled with spectators under night lights',
    imageCaption: 'The Future of Cricket Gaming: Blending responsive arcade speed with tactical depth.',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'As hardware capabilities grow, the instinct of many developers is to chase photorealistic 3D fidelity at all costs. But in high-speed sports like cricket — where reading ball seam orientation and triggering bat strokes happens in fractions of a second — input latency and animation responsiveness are what truly matter.',
      },
      {
        type: 'heading',
        text: 'The Precision Advantage of 2D',
      },
      {
        type: 'paragraph',
        text: 'Our engineering framework focuses on high-refresh 60/120 FPS performance where controls feel instantaneously connected to your fingertips. When you time a drive through the covers or adjust your wrist at the bowling crease, there is zero sluggish interpolation.',
      },
      {
        type: 'list',
        items: [
          'Instantaneous Stroke Execution: Your timing inputs map directly to the trajectory without buffering delay.',
          'Visual Readability: Clean player silhouettes make identifying bowler release variations intuitive and fair.',
          'Cross-Platform Parity: Ensuring that PC and mobile players enjoy the exact same high-precision control physics.',
        ],
      },
      {
        type: 'quote',
        text: 'True sports simulation is not about poly counts — it is about the honesty of the physical contest.',
        author: 'Systems Lead',
      },
      {
        type: 'paragraph',
        text: 'By pairing this responsiveness with deep cricket rules, dynamic weather, and strategic field coordinates, CRICKET27 establishes a fresh standard for 2D competitive sports titles.',
      },
    ],
  },
  {
    id: 'cricket27-community-vision',
    slug: 'the-cricket27-community-vision',
    title: 'THE CRICKET27 COMMUNITY VISION',
    category: 'Community',
    date: '2026-10-05',
    readTime: '3 min read',
    excerpt:
      'How genuine cricket fans directly shape our design pillars, feature polls, and creative roadmap milestones.',
    author: {
      name: 'Community Lead',
      role: 'Player Relations',
    },
    image: '/assets/news/community-vision.jpg',
    alt: 'Athletic perspective over cricket turf and grandstands',
    imageCaption: 'Community First: Empowering cricket fans to guide feature roadmaps and visual design.',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'The most enduring sports games are never developed in isolation; they are built alongside the enthusiasts who understand the sport at an emotional level. From opening partnership strategies to the intricacies of ball reverse-swing, the cricket community holds unparalleled domain knowledge.',
      },
      {
        type: 'heading',
        text: 'Transparent Pre-Production',
      },
      {
        type: 'paragraph',
        text: 'Throughout the pre-production phase of CRICKET27, we are sharing our design documents, tactical blueprints, and concept artwork openly. Community members can cast votes on proposed feature sets, suggest historic equipment styles, and debate rule balancing directly with our team.',
      },
      {
        type: 'numbered_list',
        items: [
          'Quarterly Community Design Polls: Deciding which gameplay features take priority.',
          'Devlog Discussion Channels: Direct dialogue with systems architects and visual designers.',
          'Creator Spotlights: Celebrating fan artwork, custom jersey concepts, and commentary breakdowns.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Join our official community channels today to share your perspective on what modern cricket gaming should look and feel like.',
      },
    ],
  },
  {
    id: 'tactical-depth-devlog',
    slug: 'tactical-depth-seam-swing-and-pitch-wear',
    title: 'TACTICAL DEPTH: SEAM, SWING & PITCH WEAR',
    category: 'Development',
    date: '2026-09-28',
    readTime: '6 min read',
    excerpt:
      'A deep dive into our concept calculations for ball revolution, atmospheric drift, and surface friction.',
    author: {
      name: 'Physics & Simulation Lead',
      role: 'Systems Engineering',
    },
    image: '/assets/news/tactical-depth-devlog.jpg',
    alt: 'Close-up macro study of raised seam grip on red cricket ball',
    imageCaption: 'Tactile Mechanics: Simulating seam deviation and atmospheric drift on variable turf conditions.',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'What makes bowling captivating is its quiet mathematical elegance. A seam tilted at four degrees toward the slips, combined with a polished ball surface and atmospheric humidity, produces late deviation that can outwit the world’s best batsmen.',
      },
      {
        type: 'heading',
        text: 'Deconstructing the Corridor of Uncertainty',
      },
      {
        type: 'paragraph',
        text: 'Our design calculations account for ball aerodynamics and surface degradation over long matches. As the overs tick by, the ball condition evolves:',
      },
      {
        type: 'list',
        items: [
          'New Ball Phase (Overs 1–15): Maximum conventional swing, pronounced seam bounce, and pristine leather acoustics.',
          'Mid-Innings Wear (Overs 16–35): Fading shine, consistent off-the-pitch carry, and increased reliance on cutters and change-of-pace.',
          'Old Ball Phase (Overs 36+): Asymmetric scuffing enabling late reverse swing and sharper spin traction off pitch indentations.',
        ],
      },
      {
        type: 'quote',
        text: 'When a bowler reads the pitch wear and sets a trap three deliveries in advance, cricket becomes pure tactical poetry.',
        author: 'Lead Simulation Designer',
      },
      {
        type: 'paragraph',
        text: 'These physical parameters ensure that every match unfolds with its own organic tactical narrative, rewarding bowlers who think strategically.',
      },
    ],
  },
  {
    id: 'customisation-studio-preview',
    slug: 'introducing-the-customisation-studio-blueprint',
    title: 'INTRODUCING THE CUSTOMISATION STUDIO BLUEPRINT',
    category: 'Announcements',
    date: '2026-09-15',
    readTime: '4 min read',
    excerpt:
      'A first look at our proposed concepts for team colourways, bespoke jersey designs, and willow finishes.',
    author: {
      name: 'Studio Design Lead',
      role: 'Product Architecture',
    },
    image: '/assets/news/customisation-studio-preview.jpg',
    alt: 'English willow bat propped next to wickets on pitch',
    imageCaption: 'Customisation Studio: Visualising team colours, kit patterns, and gear finishes.',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Personal expression has always been a vital component of sports gaming. Today, we are excited to unveil our preliminary concept blueprint for the CRICKET27 Customisation Studio.',
      },
      {
        type: 'heading',
        text: 'Expressing Your Cricket Identity',
      },
      {
        type: 'paragraph',
        text: 'Rather than locking basic aesthetic options behind predatory microtransactions, our proposed architecture envisions a comprehensive, accessible design tool that lets players craft distinctive squad identities:',
      },
      {
        type: 'list',
        items: [
          'Bespoke Team Palettes: Full spectrum gradient builders for home and away franchise colours.',
          'Athletic Jersey Patterns: Dynamic geometric stripes, side-panel accents, and custom collar cuts.',
          'Willow & Equipment Finishes: Natural English willow grains, colored rubber grips, and matte helmet textures.',
          'Player Presentation Details: Custom batting stances, wristbands, and signature celebration animations.',
        ],
      },
      {
        type: 'quote',
        text: 'Your squad should look and feel uniquely yours every time you walk onto the field.',
        author: 'Studio Design Lead',
      },
      {
        type: 'paragraph',
        text: 'Take a look at the full blueprint in our Features section and let us know your thoughts on our community Discord server.',
      },
    ],
  },
  // Backwards compatibility aliases
  {
    id: 'welcome-to-the-world-of-cricket27',
    slug: 'welcome-to-the-world-of-cricket27',
    title: 'WELCOME TO THE WORLD OF CRICKET27',
    category: 'Brand Updates',
    date: '2026-11-01',
    readTime: '4 min read',
    excerpt:
      'Discover the vision, identity and inspiration behind the CRICKET27 cricket gaming brand.',
    author: {
      name: 'CRICKET27 Studio Team',
      role: 'Creative Directors',
    },
    image: '/assets/news/vision-behind-cricket27.jpg',
    alt: 'Welcome to CRICKET27 visual banner',
    imageCaption: 'CRICKET27 brand introduction and creative vision overview.',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Welcome to the official digital hub of CRICKET27 — an international gaming brand dedicated to celebrating the authentic spirit, tactical depth, and adrenaline of cricket.',
      },
      {
        type: 'paragraph',
        text: 'Our vision centers on bringing world-class 2D gameplay into the competitive sports landscape, honoring both timeless arcade accessibility and serious tactical simulation.',
      },
    ],
  },
  {
    id: 'a-new-vision-for-cricket-gaming',
    slug: 'a-new-vision-for-cricket-gaming',
    title: 'A NEW VISION FOR CRICKET GAMING',
    category: 'Game Vision',
    date: '2026-10-24',
    readTime: '5 min read',
    excerpt:
      'Explore the ideas and creative direction shaping the CRICKET27 gaming concept.',
    author: {
      name: 'Game Systems Lead',
      role: 'Gameplay Architecture',
    },
    image: '/assets/news/future-of-cricket-gaming.jpg',
    alt: 'Game concept overview',
    imageCaption: 'Conceptual overview of 2D cricket gaming mechanics.',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'What sets CRICKET27 apart? We believe 2D cricket should not mean oversimplified mechanics.',
      },
      {
        type: 'paragraph',
        text: 'From 360-degree wagon wheel shot angles and sub-millisecond input windows to dynamic bowler seam angles and DRS Hawkeye impact tracking, our concept is built around player skill and tactical mastery.',
      },
    ],
  },
  {
    id: 'built-around-the-love-of-cricket',
    slug: 'built-around-the-love-of-cricket',
    title: 'BUILT AROUND THE LOVE OF CRICKET',
    category: 'Community',
    date: '2026-10-10',
    readTime: '3 min read',
    excerpt:
      'Discover how the CRICKET27 brand aims to connect cricket enthusiasts through a shared passion for the sport.',
    author: {
      name: 'Community Lead',
      role: 'Player Relations',
    },
    image: '/assets/news/community-vision.jpg',
    alt: 'Community dispatches',
    imageCaption: 'Connecting cricket supporters worldwide through digital gaming.',
    featured: false,
    content: [
      {
        type: 'paragraph',
        text: 'Cricket is unified across borders, generations, and cultures.',
      },
      {
        type: 'paragraph',
        text: 'The CRICKET27 brand community is founded to bring fans, tactical minds, and digital sports enthusiasts together to discuss game concepts, share feedback, and celebrate great cricket moments.',
      },
    ],
  },
];

export const NEWS_HERO_DATA = {
  eyebrow: 'THE LATEST FROM CRICKET27',
  heading: 'NEWS. STORIES. THE GAME.',
  description:
    'Creative updates, devlogs, and design announcements from the CRICKET27 studio.',
  breadcrumb: [
    { label: 'Home', path: '/' },
    { label: 'News', path: '/news' },
  ],
  bgImage: '/assets/game-concept/match-experience.webp',
  bgFallback: '/assets/game-concept/match-experience.jpg',
};

export const NEWS_NEWSLETTER_DATA = {
  eyebrow: 'INSIDER DISPATCHES',
  heading: "DON'T MISS THE NEXT UPDATE.",
  description:
    'Receive periodic studio devlogs and creative concepts directly to your inbox.',
  placeholder: 'Enter your email address...',
  buttonText: 'SUBSCRIBE FOR UPDATES',
  note: '* Subscription functionality is in preview. No personal data is stored or transmitted.',
};

export const NEWS_CTA_DATA = {
  eyebrow: 'STAY CONNECTED',
  heading: 'STAY CLOSE TO THE GAME.',
  description:
    'Explore the CRICKET27 vision and discover what sets our cricket gaming brand apart.',
  primaryCtaText: 'EXPLORE OUR GAME',
  primaryCtaLink: '/our-game',
  secondaryCtaText: 'VIEW MEDIA',
  secondaryCtaLink: '/media',
  bgImage: '/assets/features/feature-summary.webp',
  bgFallback: '/assets/features/feature-summary.jpg',
};

export const NEWS_DETAILS_CTA_DATA = {
  eyebrow: 'BEYOND THE BOUNDARY',
  heading: 'MORE THAN A STORY. A CRICKET27 VISION.',
  description:
    'Explore our creative direction and join the community shaping next-generation 2D cricket.',
  primaryCtaText: 'EXPLORE OUR GAME',
  primaryCtaLink: '/our-game',
  secondaryCtaText: 'BACK TO NEWS',
  secondaryCtaLink: '/news',
  bgImage: '/assets/features/feature-summary.webp',
  bgFallback: '/assets/features/feature-summary.jpg',
};

export default {
  NEWS_CATEGORIES,
  NEWS_ARTICLES,
  NEWS_HERO_DATA,
  NEWS_NEWSLETTER_DATA,
  NEWS_CTA_DATA,
  NEWS_DETAILS_CTA_DATA,
};
