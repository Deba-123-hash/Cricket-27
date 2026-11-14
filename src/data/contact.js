/**
 * CRICKET27 — Official Contact Page Data Architecture
 * Phase 16 Contact Page Specifications
 * Data-driven configuration with verified details and "Coming Soon" statuses.
 */

export const CONTACT_HERO_DATA = {
  eyebrow: 'GET IN TOUCH',
  heading: "LET'S START A CONVERSATION.",
  description:
    "Have a question, idea, or feedback about CRICKET27? We'd be glad to hear from you.",
  breadcrumb: [
    { label: 'Contact', to: '/contact' },
  ],
  bgImage: '/assets/contact/contact-hero.webp',
  bgFallback: '/assets/contact/contact-hero.jpg',
};

export const CONTACT_INTRO_DATA = {
  eyebrow: 'COMMUNICATION HUB',
  heading: "WE'RE HERE TO CONNECT.",
  description:
    'Connect with the CRICKET27 team for inquiries, partnership proposals, and community feedback.',
  subtext:
    'Direct communication channels prepared to engage players, media, and creators worldwide.',
  image: '/assets/contact/contact-stadium.webp',
  imageFallback: '/assets/contact/contact-stadium.jpg',
  alt: 'Atmospheric cricket stadium arena at dusk with floodlights',
  caption: 'GLOBAL CRICKET VISION • OFFICIAL INQUIRY HUB',
  highlights: [
    {
      title: 'Direct Dialogue',
      desc: 'Routing for community, media, and creative feedback.',
    },
    {
      title: 'Brand Transparency',
      desc: 'Verified dispatches through official channels.',
    },
    {
      title: 'Community First',
      desc: 'Shaping cricket gaming alongside passionate supporters.',
    },
  ],
};

export const CONTACT_INFO_CARDS = [
  {
    id: 'general-inquiries',
    title: 'GENERAL INQUIRIES',
    description: 'For general questions about CRICKET27 and the website.',
    icon: 'HelpCircle',
    badge: 'Support',
    status: 'Contact details coming soon',
    detailLabel: 'Channel Status',
  },
  {
    id: 'brand-partnerships',
    title: 'BRAND & PARTNERSHIPS',
    description: 'For potential brand collaborations and partnership discussions.',
    icon: 'Briefcase',
    badge: 'Collaborations',
    status: 'Contact details coming soon',
    detailLabel: 'Channel Status',
  },
  {
    id: 'feedback-suggestions',
    title: 'FEEDBACK & SUGGESTIONS',
    description: 'Share your thoughts, suggestions and feedback about the CRICKET27 experience.',
    icon: 'MessageSquare',
    badge: 'Community',
    status: 'Contact details coming soon',
    detailLabel: 'Channel Status',
  },
  {
    id: 'media-creative',
    title: 'MEDIA & CREATIVE',
    description: 'For media-related questions and creative discussions.',
    icon: 'Camera',
    badge: 'Press & Media',
    status: 'Contact details coming soon',
    detailLabel: 'Channel Status',
  },
];

export const INQUIRY_TYPES = [
  'General Inquiry',
  'Brand & Partnerships',
  'Feedback & Suggestions',
  'Media & Creative',
  'Other',
];

export const CONTACT_PROCESS_STEPS = [
  {
    step: '01',
    title: 'SHARE YOUR QUERY',
    description: 'Choose the inquiry type and describe what you need.',
    icon: 'Filter',
  },
  {
    step: '02',
    title: 'PROVIDE DETAILS',
    description: 'Add your contact details and a clear message.',
    icon: 'FileText',
  },
  {
    step: '03',
    title: 'STAY UPDATED',
    description: 'Follow the official CRICKET27 channels for future communication information.',
    icon: 'Bell',
  },
];

export const CONTACT_FINAL_CTA = {
  eyebrow: 'BEYOND THE BOUNDARY',
  heading: 'BEYOND THE BOUNDARY STARTS HERE.',
  description:
    'Discover the CRICKET27 vision and explore the world we are building around cricket.',
  cta1Text: 'EXPLORE OUR GAME',
  cta1Link: '/our-game',
  cta2Text: 'BACK TO HOME',
  cta2Link: '/',
  bgImage: '/assets/contact/contact-hero.jpg',
};

export default {
  CONTACT_HERO_DATA,
  CONTACT_INTRO_DATA,
  CONTACT_INFO_CARDS,
  INQUIRY_TYPES,
  CONTACT_PROCESS_STEPS,
  CONTACT_FINAL_CTA,
};
