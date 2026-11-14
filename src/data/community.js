import { FAQ_ITEMS } from './faq';

/**
 * CRICKET27 — Official Community Page Data
 * Phase 14 Community Engagement Specifications
 * Note: These are proposed community concepts and creative themes, not active commercial clubs.
 */

export const COMMUNITY_HERO_DATA = {
  eyebrow: 'THE CRICKET27 COMMUNITY',
  heading: 'ONE GAME. ONE PASSION. ONE COMMUNITY.',
  description:
    'Celebrating the passion, tactical excitement, and shared spirit of cricket purists worldwide.',
  cta1Text: 'EXPLORE OUR VISION',
  cta1Link: '/about',
  cta2Text: 'DISCOVER OUR GAME',
  cta2Link: '/our-game',
  bgImage: '/assets/community/community-hero.webp',
  bgFallback: '/assets/community/community-hero.jpg',
};

export const COMMUNITY_PHILOSOPHY_DATA = {
  eyebrow: 'OUR FOUNDATIONAL BELIEF',
  heading: 'MORE THAN FANS. A SHARED PASSION.',
  description:
    'A shared passion for cricket connects players across generations, clubs, and continents.',
  subtext:
    'An authentic digital home to exchange ideas, debate tactical nuances, and shape the direction of CRICKET27.',
  image: '/assets/community/community-philosophy.webp',
  fallbackImage: '/assets/community/community-philosophy.jpg',
  alt: 'Panoramic cricket stadium arena filled with passionate spectators',
  caption: 'GLOBAL CRICKET CULTURE • UNITED BEYOND THE BOUNDARY',
  pillars: [
    { title: 'Global Fellowship', text: 'Connecting cricket minds across continents.' },
    { title: 'Respect for Tradition', text: 'Honouring the history and sportsmanship of the game.' },
    { title: 'Co-Creation Vision', text: 'Inviting player voices to influence game feature design.' },
  ],
};

export const COMMUNITY_VALUES = [
  {
    id: 'passion',
    title: 'PASSION',
    icon: 'Heart',
    tag: 'Core Driver',
    description:
      'A deep love for cricket—from the opening delivery to final-over drama.',
  },
  {
    id: 'connection',
    title: 'CONNECTION',
    icon: 'Users',
    tag: 'Community Bond',
    description:
      'Uniting enthusiasts through tactical dialogue and mutual appreciation of the sport.',
  },
  {
    id: 'competitive-spirit',
    title: 'COMPETITIVE SPIRIT',
    icon: 'Trophy',
    tag: 'Sportsmanship',
    description:
      'Celebrating ambition, fair play, tactical mastery, and the thrill of competition.',
  },
  {
    id: 'creativity',
    title: 'CREATIVITY',
    icon: 'Sparkles',
    tag: 'Expression',
    description:
      'Exploring fresh ideas, bespoke team kits, and modern 2D game aesthetics.',
  },
];

export const COMMUNITY_CULTURE_ITEMS = [
  {
    id: 'culture-stadium',
    title: 'Stadium Atmosphere',
    subtitle: 'The Roar of the Crowd',
    description:
      'Towering floodlights and the palpable tension of supporters watching a decisive delivery.',
    image: '/assets/community/community-hero.webp',
    fallbackImage: '/assets/community/community-hero.jpg',
    tag: 'Atmosphere',
    aspect: '16:9',
  },
  {
    id: 'culture-tunnel',
    title: 'Tunnel Walkout & Pride',
    subtitle: 'Stepping Onto the Pitch',
    description:
      'The quiet focus before stepping through the pavilion doors onto manicured turf.',
    image: '/assets/community/culture-atmosphere.webp',
    fallbackImage: '/assets/community/culture-atmosphere.jpg',
    tag: 'Tradition',
    aspect: '4:3',
  },
  {
    id: 'culture-boundary',
    title: 'Match-Day Excitement',
    subtitle: 'Beyond the Boundary Line',
    description:
      'Vibrant boundary ropes, diving outfield stops, and shared celebrations.',
    image: '/assets/community/culture-tradition.webp',
    fallbackImage: '/assets/community/culture-tradition.jpg',
    tag: 'Match Day',
    aspect: '16:9',
  },
];

export const COMMUNITY_HIGHLIGHTS = [
  {
    id: 'conversations',
    title: 'Cricket Conversations',
    icon: 'MessageSquare',
    tag: 'Dialogue',
    description:
      'Thoughtful discussions on bowling variations, pitch wear, and memorable historical moments.',
  },
  {
    id: 'fan-culture',
    title: 'Creative Fan Culture',
    icon: 'Palette',
    tag: 'Creativity',
    description:
      'Fan visual concepts, team colourway palettes, and custom cricket banner artwork.',
  },
  {
    id: 'gaming-discussions',
    title: 'Cricket Gaming Discussions',
    icon: 'Gamepad2',
    tag: 'Game Vision',
    description:
      'Debating mechanics, control response, and what makes 2D cricket simulation authentic.',
  },
  {
    id: 'community-stories',
    title: 'Community Stories',
    icon: 'BookOpen',
    tag: 'Editorial',
    description:
      'Personal stories from supporters sharing why the sport is deeply meaningful to them.',
  },
  {
    id: 'match-day-moments',
    title: 'Match-Day Moments',
    icon: 'Flame',
    tag: 'Excitement',
    description:
      'Celebrating clutch overs, hat-tricks, diving boundary saves, and final-ball finishes.',
  },
  {
    id: 'shared-experiences',
    title: 'Shared Cricket Experiences',
    icon: 'Compass',
    tag: 'Shared Spirit',
    description:
      'Connecting club cricketers and armchair analysts who celebrate the sport.',
  },
];

export const COMMUNITY_GUIDELINES = [
  {
    rule: 'Respect the Game and Each Other',
    description:
      'Treat every member with courtesy and honor the sportsmanship that defines cricket.',
  },
  {
    rule: 'Constructive Ideas & Feedback',
    description:
      'Share thoughtful feedback on concepts, mechanics, and design to help shape the project.',
  },
  {
    rule: 'Celebrate All Formats',
    description:
      'Embrace the diversity of cricket—from five-day Test grinds to fast-paced T20 finishes.',
  },
  {
    rule: 'Keep It Cricket Centric',
    description:
      'Maintain discussions focused on cricket culture, sports gaming, and creative direction.',
  },
];

export const COMMUNITY_CTA_DATA = {
  eyebrow: 'BEYOND THE BOUNDARY',
  heading: 'SHAPE THE FUTURE OF CRICKET GAMING.',
  description:
    'Join our community discussions, contribute feedback, and help us build a cricket game honoring the sport.',
  primaryCtaText: 'CONTACT TEAM',
  primaryCtaLink: '/contact',
  secondaryCtaText: 'EXPLORE OUR GAME',
  secondaryCtaLink: '/our-game',
  bgImage: '/assets/community/community-hero.webp',
  bgFallback: '/assets/community/community-hero.jpg',
};

export const COMMUNITY_FAQ_ITEMS = FAQ_ITEMS.slice(0, 4);
export const COMMUNITY_FAQS = COMMUNITY_FAQ_ITEMS;

export default {
  COMMUNITY_HERO_DATA,
  COMMUNITY_PHILOSOPHY_DATA,
  COMMUNITY_VALUES,
  COMMUNITY_CULTURE_ITEMS,
  COMMUNITY_HIGHLIGHTS,
  COMMUNITY_GUIDELINES,
  COMMUNITY_CTA_DATA,
  COMMUNITY_FAQ_ITEMS,
  COMMUNITY_FAQS,
};
