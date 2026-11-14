/**
 * CRICKET27 — Official FAQ Data Architecture
 * Phase 15 Help Center Specifications
 * Static, data-driven FAQ catalog with categories and search indexing keywords.
 */

export const FAQ_CATEGORIES = [
  'All Questions',
  'About CRICKET27',
  'Our Game',
  'Features',
  'Availability',
  'Community',
  'Media & Updates',
  'General',
];

export const FAQ_ITEMS = [
  // CATEGORY A — ABOUT CRICKET27
  {
    id: 'what-is-cricket27',
    question: 'What is CRICKET27?',
    answer:
      'CRICKET27 is a cricket gaming brand concept focused on presenting a fresh vision for cricket gaming through a dedicated promotional website.',
    category: 'About CRICKET27',
    keywords: ['brand', 'concept', 'vision', 'promotional', 'website', 'cricket', 'gaming', 'about', 'intro'],
  },
  {
    id: 'beyond-the-boundary-meaning',
    question: 'What does "Beyond the Boundary" mean?',
    answer:
      'It represents the passion, imagination and excitement that make cricket more than just a sport.',
    category: 'About CRICKET27',
    keywords: ['beyond the boundary', 'tagline', 'motto', 'slogan', 'meaning', 'passion', 'imagination', 'spirit'],
  },
  {
    id: 'vision-behind-cricket27',
    question: 'What is the vision behind CRICKET27?',
    answer:
      'Our vision is to build a distinctive cricket gaming identity that celebrates the sport and its community.',
    category: 'About CRICKET27',
    keywords: ['vision', 'mission', 'identity', 'community', 'celebrate', 'purpose', 'goal', 'philosophy'],
  },

  // CATEGORY B — OUR GAME
  {
    id: 'cricket27-game-concept',
    question: 'What is the CRICKET27 game concept?',
    answer:
      'CRICKET27 represents a cricket gaming concept built around the excitement, passion and presentation of the sport.',
    category: 'Our Game',
    keywords: ['concept', 'gameplay', 'game', 'presentation', '2d', 'simulation', 'arcade', 'experience'],
  },
  {
    id: 'is-cricket27-available-to-play',
    question: 'Is CRICKET27 currently available to play?',
    answer:
      'Game availability has not been confirmed. Please follow official CRICKET27 updates for verified information.',
    category: 'Our Game',
    keywords: ['playable', 'available', 'download', 'release', 'demo', 'play', 'access', 'install', 'steam'],
  },
  {
    id: 'which-platforms-will-support-cricket27',
    question: 'Which platforms will support CRICKET27?',
    answer:
      'Supported platforms have not yet been confirmed.',
    category: 'Our Game',
    keywords: ['platforms', 'pc', 'mobile', 'console', 'android', 'ios', 'playstation', 'xbox', 'windows'],
  },

  // CATEGORY C — FEATURES
  {
    id: 'what-features-are-planned',
    question: 'What features are planned for CRICKET27?',
    answer:
      'The website presents concepts around batting, bowling, fielding, match presentation, competitive experiences and customisation. These are concepts, not confirmation of implemented game features.',
    category: 'Features',
    keywords: ['features', 'batting', 'bowling', 'fielding', 'match presentation', 'customisation', 'tactics', 'planned'],
  },
  {
    id: 'will-include-different-cricket-experiences',
    question: 'Will CRICKET27 include different cricket experiences?',
    answer:
      'The website explores different cricket experience concepts. Specific gameplay modes have not yet been confirmed.',
    category: 'Features',
    keywords: ['modes', 'experiences', 'formats', 't20', 'test', 'tournament', 'career', 'multiplayer'],
  },

  // CATEGORY D — AVAILABILITY
  {
    id: 'when-will-cricket27-launch',
    question: 'When will CRICKET27 launch?',
    answer:
      'An official launch date has not been confirmed.',
    category: 'Availability',
    keywords: ['launch', 'date', 'release', 'when', 'schedule', 'timeline', 'release date', 'roadmap'],
  },
  {
    id: 'where-to-find-official-updates',
    question: 'Where can I find official updates?',
    answer:
      'Visit the CRICKET27 website and check the News and Community sections for verified updates when they become available.',
    category: 'Availability',
    keywords: ['updates', 'official', 'news', 'verified', 'announcements', 'website', 'dispatches', 'latest'],
  },

  // CATEGORY E — COMMUNITY
  {
    id: 'how-to-stay-connected',
    question: 'How can I stay connected with CRICKET27?',
    answer:
      'Visit the Community page to find information about our community vision and available official social channels.',
    category: 'Community',
    keywords: ['connected', 'community', 'social', 'channels', 'follow', 'discord', 'instagram', 'youtube', 'x', 'twitter'],
  },
  {
    id: 'will-introduce-community-activities',
    question: 'Will CRICKET27 introduce community activities?',
    answer:
      'Future community activities have not yet been confirmed. Any official information will be shared through verified CRICKET27 channels.',
    category: 'Community',
    keywords: ['activities', 'events', 'feedback', 'beta', 'polls', 'contests', 'club', 'initiatives'],
  },

  // CATEGORY F — MEDIA & UPDATES
  {
    id: 'where-to-find-images-and-artwork',
    question: 'Where can I find CRICKET27 images and artwork?',
    answer:
      'Visit the Media page to explore available visual concepts, promotional artwork and brand imagery.',
    category: 'Media & Updates',
    keywords: ['media', 'images', 'artwork', 'wallpapers', 'screenshots', 'gallery', 'visuals', 'photos', 'posters'],
  },
  {
    id: 'where-can-i-read-news',
    question: 'Where can I read CRICKET27 news?',
    answer:
      'Visit the News page for available brand stories, editorial content and updates.',
    category: 'Media & Updates',
    keywords: ['news', 'editorial', 'articles', 'dispatches', 'devlog', 'stories', 'reading', 'blog'],
  },

  // CATEGORY G — GENERAL
  {
    id: 'how-can-i-contact-cricket27',
    question: 'How can I contact CRICKET27?',
    answer:
      'Visit the Contact page to find the available contact information and communication options.',
    category: 'General',
    keywords: ['contact', 'email', 'support', 'reach out', 'message', 'help', 'inquiry', 'communication'],
  },
  {
    id: 'can-i-use-branding-or-artwork',
    question: 'Can I use CRICKET27 branding or artwork?',
    answer:
      'Do not assume that CRICKET27 branding or artwork is available for reuse. Contact the brand owner for permission before using protected materials.',
    category: 'General',
    keywords: ['branding', 'artwork', 'copyright', 'reuse', 'license', 'permission', 'assets', 'intellectual property', 'trademark'],
  },
];

/**
 * Filter FAQ items by search query (matching question, answer, and keywords) and category
 */
export const filterFAQItems = (items, query = '', category = 'All Questions') => {
  const normalizedQuery = query.trim().toLowerCase();

  return items.filter((item) => {
    // Category match
    const matchesCategory =
      !category || category === 'All Questions' || item.category === category;

    if (!matchesCategory) return false;

    // Search query match (question, answer, and keywords)
    if (!normalizedQuery) return true;

    const matchesQuestion = item.question.toLowerCase().includes(normalizedQuery);
    const matchesAnswer = item.answer.toLowerCase().includes(normalizedQuery);
    const matchesKeywords =
      Array.isArray(item.keywords) &&
      item.keywords.some((kw) => kw.toLowerCase().includes(normalizedQuery));

    return matchesQuestion || matchesAnswer || matchesKeywords;
  });
};

export default FAQ_ITEMS;
