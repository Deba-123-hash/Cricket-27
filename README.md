# CRICKET27 — Official 2D Cricket Gaming Brand Website

> **Tagline:** BEYOND THE BOUNDARY.  
> **Current Phase:** Phase 24 of 24 — Final Frontend Integration & Production Readiness  
> **Status:** All 24 Phases Complete & Fully Integrated &bull; Production-Ready Build &bull; 100% Automated Test Pass Rate (68/68 Tests) &bull; 0 ESLint Warnings

---

## 1. Project Overview

**CRICKET27** is the official promotional and informational web portal for the next-generation 2D cricket gaming brand. It introduces the studio's brand vision, showcases concept art and planned game mechanics (batting, bowling, fielding, DRS, match presentation), publishes developer diaries and news, and fosters a global player community.

> [!IMPORTANT]
> **Scope Clarification:** This repository contains the official brand and promotional web portal for CRICKET27. It is **not** the playable cricket video game itself. It serves as the primary digital destination, community hub, media center, and editorial platform for the franchise.

---

## 2. Complete 24-Phase Project Roadmap & Status

| Phase | Phase Name | Status |
|:---:|:---|:---:|
| **01** | Project Setup & Brand Foundation | COMPLETED |
| **02** | Design System & Reusable Components Foundation | COMPLETED |
| **03** | Global Navigation & Header System | COMPLETED |
| **04** | Global Footer & Brand Closure | COMPLETED |
| **05** | Homepage — Hero Section & First Impression | COMPLETED |
| **06** | Homepage — Brand Story & Vision Sections | COMPLETED |
| **07** | Homepage — Game Features, Media & Community Sections | COMPLETED |
| **08** | Complete About Page Development | COMPLETED |
| **09** | Complete Our Game Page Development | COMPLETED |
| **10** | Complete Features Page Development | COMPLETED |
| **11** | Complete Media Page & Interactive Gallery Development | COMPLETED |
| **12** | Complete News Page & Editorial Experience Development | COMPLETED |
| **13** | Dynamic News Details Page & Complete Article Experience | COMPLETED |
| **14** | Complete Community Page & Community Engagement Experience | COMPLETED |
| **15** | Complete FAQ Page & Advanced Interactive Help Center | COMPLETED |
| **16** | Complete Contact Page & Interactive Inquiry Experience | COMPLETED |
| **17** | Advanced UI Interactions & Dynamic Components Development | COMPLETED |
| **18** | Advanced Animation & Motion Design | COMPLETED |
| **19** | Advanced Responsive Design & Mobile Experience | COMPLETED |
| **20** | Advanced Component Architecture & Frontend State Management | COMPLETED |
| **21** | Advanced Frontend Performance Optimisation | COMPLETED |
| **22** | Advanced SEO, Accessibility & Browser Compatibility | COMPLETED |
| **23** | Advanced Frontend Testing & Quality Assurance | COMPLETED |
| **24** | **Final Frontend Integration & Production Readiness** | **COMPLETED (FINAL)** |

---

## 3. Technology Stack & Rationale

| Technology | Version | Architectural Rationale |
|:---|:---|:---|
| **React** | `^18.2.0` | Declarative component model, concurrent rendering, rich ecosystem for UI state |
| **Vite** | `^6.0.0` | Lightning-fast ESM dev server, instant HMR, optimized Rollup-based production builds |
| **Tailwind CSS** | `^3.4.0` | Utility-first styling with custom design tokens, zero-runtime overhead, purge efficiency |
| **React Router DOM** | `^6.22.0` | Client-side routing with dynamic params, scroll restoration, and nested layouts |
| **Framer Motion** | `^11.0.0` | Production-grade physics springs, layout animations, exit transitions, accessible motion |
| **Lucide React** | `^0.344.0` | Lightweight, scalable vector iconography matching the modern sports aesthetic |
| **ESLint & PostCSS** | `^9.x` / `^8.4` | Automated linting, zero-warning policy, autoprefixing for cross-browser reliability |

---

## 4. Development & Testing Commands

```bash
# 1. Install all required project dependencies
npm install

# 2. Start Vite local development server (http://localhost:3000)
npm run dev

# 3. Static code analysis with ESLint (Strict zero-warning policy)
npm run lint

# 4. Execute automated Vitest + React Testing Library test suite
npm test
npm run test:run

# 5. Execute test suite with V8 code coverage report
npm run test:coverage

# 6. Interactive test watcher
npm run test:watch

# 7. Compile and build production-ready optimized bundles into dist/
npm run build

# 8. Preview production build locally (http://localhost:4173)
npm run preview
```

---

## 5. Folder Structure & Architectural Layout

```
CRICKET27/
├── public/                     # Static assets served directly without build processing
│   ├── assets/
│   │   ├── branding/           # Brand vector logos and identity marks
│   │   ├── hero/               # Hero background imagery and stadium atmosphere
│   │   ├── game-concept/       # Gameplay concept artwork (batting, bowling, fielding)
│   │   ├── features/           # Feature card illustrations and graphics
│   │   ├── gallery/            # HD media gallery wallpapers and screenshots
│   │   ├── news/               # Editorial articles and developer diary banners
│   │   └── promotional-posters/# Downloadable brand posters
│   └── robots.txt              # Search engine crawler instructions
│
├── src/
│   ├── assets/                 # SVGs and bundled vector resources
│   │   ├── backgrounds/        # Abstract ambient patterns
│   │   ├── illustrations/      # Decorative SVGs
│   │   └── logos/              # Official brand logo marks and wordmarks
│   │
│   ├── components/             # Reusable UI component library (atomic layout)
│   │   ├── animations/         # Framer Motion wrappers (FadeIn, PageTransition, etc.)
│   │   ├── cards/              # Domain card components (NewsCard, FeatureCard, etc.)
│   │   ├── common/             # Primitive UI atoms (Button, Badge, Container, Modal, etc.)
│   │   ├── footer/             # Global footer, link columns, copyright notices
│   │   ├── forms/              # Reusable form primitives (Input, Textarea, Select, Checkbox)
│   │   ├── gallery/            # Media lightbox, filter controls, gallery cards
│   │   ├── interactions/       # Interactive widgets (QuickActions, Toast)
│   │   ├── navigation/         # Header, Navbar, DesktopMenu, MobileMenu
│   │   └── typography/         # Section headings, display titles, lead text
│   │
│   ├── context/                # Global React Context providers & definitions
│   │   ├── ToastContext.jsx    # Toast notification container & provider
│   │   ├── toastState.js       # ToastContext instance
│   │   ├── UIContext.jsx       # Global UI state provider (mobile menu, modals, scroll)
│   │   └── uiState.js          # UIContext instance
│   │
│   ├── data/                   # Decoupled mock data sources (domain datasets)
│   │   ├── about.js            # Studio values, roadmap, team, origin story
│   │   ├── community.js        # Discord, creator program, social platforms
│   │   ├── contact.js          # Inquiries, FAQ topics, studio contact info
│   │   ├── faq.js              # Categorized questions and answers
│   │   ├── features.js         # Comprehensive feature catalog & specs
│   │   ├── game.js             # 2D game concept, mechanics, DRS telemetry
│   │   ├── home.js             # Homepage curated teasers and stats
│   │   ├── media.js            # Wallpaper dimensions, tags, categories
│   │   └── news.js             # Full editorial articles, dev diaries, author metadata
│   │
│   ├── hooks/                  # Custom reusable React hooks
│   │   ├── useClickOutside.js  # Detects clicks outside ref target
│   │   ├── useDebounce.js      # Debounces values (e.g. search inputs)
│   │   ├── useEscapeKey.js     # Triggers callback on Escape press
│   │   ├── useLockBodyScroll.js# Locks document scroll when drawers/modals open
│   │   ├── useMediaQuery.js    # Responsive viewport matcher hook
│   │   ├── usePageTitle.js     # Synchronizes document.title on route change
│   │   ├── useScrollProgress.js# Tracks normalized window scroll progress (0..1)
│   │   ├── useToast.js         # Hook to trigger global toast messages
│   │   ├── useToggle.js        # Boolean state toggle utility
│   │   └── useUI.js            # Hook to access global UIContext
│   │
│   ├── layouts/                # Page layout wrappers
│   │   ├── MainLayout.jsx      # Global layout (Navbar + Page Content + Footer + Toast)
│   │   └── MinimalLayout.jsx   # Lightweight layout for focused views
│   │
│   ├── pages/                  # Top-level route pages (11 total)
│   │   ├── Home.jsx            # Landing page (/)
│   │   ├── About.jsx           # Studio & Brand Vision (/about)
│   │   ├── OurGame.jsx         # 2D Cricket Game Concept (/our-game)
│   │   ├── Features.jsx        # Detailed Game Features (/features)
│   │   ├── Media.jsx           # Media Gallery & Wallpapers (/media)
│   │   ├── News.jsx            # Editorial & Updates Hub (/news)
│   │   ├── NewsDetails.jsx     # Dynamic Article Reader (/news/:slug)
│   │   ├── Community.jsx       # Community & Creator Hub (/community)
│   │   ├── FAQ.jsx             # Interactive Help Center (/faq)
│   │   ├── Contact.jsx         # Inquiries & Partnerships (/contact)
│   │   └── DesignSystem.jsx    # UI Pattern & Token Showcase (/design-system)
│   │
│   ├── routes/                 # Routing configuration
│   │   └── AppRoutes.jsx       # Route declarations with ScrollToTop
│   │
│   ├── sections/               # Page-specific modular section components
│   │   ├── about/              # Sections for About page
│   │   ├── community/          # Sections for Community page
│   │   ├── contact/            # Sections for Contact page
│   │   ├── faq/                # Sections for FAQ page
│   │   ├── features/           # Sections for Features page
│   │   ├── game/               # Sections for OurGame page
│   │   ├── home/               # Sections for Homepage
│   │   ├── media/              # Sections for Media page
│   │   └── news/               # Sections for News and NewsDetails pages
│   │
│   ├── services/               # Future API transport & backend specifications
│   │   └── README.md           # Architecture, DTO mappers, API client blueprint
│   │
│   ├── styles/                 # Global styles & design tokens
│   │   ├── animations.css      # Keyframe animations & glow filters
│   │   ├── globals.css         # Tailwind directives & base variables
│   │   └── typography.css      # Fluid clamp typography scales
│   │
│   ├── utils/                  # Pure utility functions & constants
│   │   ├── animations.js       # Framer Motion variant library
│   │   ├── constants.js        # Global app metadata, routes, navigation items
│   │   ├── helpers.js          # Classname merger (cn), formatting, date utils
│   │   └── validators.js       # Centralized pure form & input validation rules
│   │
│   ├── App.jsx                 # Application root with Providers
│   └── main.jsx                # DOM mount entry point
│
├── index.html                  # HTML5 entry with meta tags & Google Fonts
├── tailwind.config.js          # Brand color tokens, typography scales, shadows
├── vite.config.js              # Vite bundler configuration (port 3000)
├── eslint.config.js            # Flat ESLint rules configuration
└── README.md                   # Project documentation
```

---

## 6. Component Architecture & Conventions

CRICKET27 follows an **atomic component hierarchy**:

```
Primitives (Atoms)        Composite (Molecules)       Sections (Organisms)       Layouts & Pages
─────────────────────────────────────────────────────────────────────────────────────────────────
• Button                  • NewsCard                  • HomeHero                 • MainLayout
• Badge                   • MediaGalleryCard          • BattingSection           • Home
• Input                   • ContactForm               • NewsGrid                 • About
• Textarea                • NewsletterCTA             • FAQAccordion             • Features
• Select                  • QuickActionDrawer         • CommunityHero            • Contact
• Checkbox                • ToastNotification         • FeaturedPosters          • NewsDetails
• FormError               • SearchInput               • MatchPresentationSection • etc.
```

### Component Best Practices
1. **Explicit Props Validation**: Components declare `propTypes` or default parameter assignments.
2. **Accessible by Default**: All form primitives incorporate `aria-invalid`, `aria-describedby`, accessible `<label>` associations, and keyboard navigation.
3. **Pure Presentational Separation**: Business logic and validation reside in `src/utils/validators.js` and custom hooks, keeping JSX clean and declarative.
4. **Style Encapsulation**: Tailwind utility classes combined with `cn()` utility (`clsx` + `tailwind-merge`) ensure zero style collisions.

---

## 7. State Management Strategy

CRICKET27 uses a structured, pragmatic approach to state management without bloated external stores:

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                              STATE ARCHITECTURE                                │
├─────────────────────────┬──────────────────────────────────────────────────────┤
│ State Scope             │ Implementation Mechanism & Usage                    │
├─────────────────────────┼──────────────────────────────────────────────────────┤
│ Local Component State   │ useState / useReducer: toggle accordions, form       │
│                         │ inputs, lightbox indices, tabs.                      │
├─────────────────────────┼──────────────────────────────────────────────────────┤
│ Global UI State         │ UIContext: mobile drawer open/close, active modal    │
│                         │ payload, navbar scroll elevation status.             │
├─────────────────────────┼──────────────────────────────────────────────────────┤
│ Global Notification     │ ToastContext: queued transient alerts (success,      │
│                         │ error, info) with auto-dismiss.                      │
├─────────────────────────┼──────────────────────────────────────────────────────┤
│ URL / Navigation State  │ React Router (useSearchParams, useParams): category  │
│                         │ filters, active article slugs, pagination page index.│
├─────────────────────────┼──────────────────────────────────────────────────────┤
│ Derived / Computed      │ Pure in-component memoization (useMemo): search      │
│                         │ filtering, pagination slices, tag matching.          │
└─────────────────────────┴──────────────────────────────────────────────────────┘
```

---

## 8. Data Architecture & In-Memory Domain Models

All content is structured as typed-like JS modules in `src/data/`. This enables zero-latency rendering while providing exact DTO contracts for future backend endpoints:

- `src/data/about.js` — Timeline milestones, studio mission, core team roster, leadership philosophies.
- `src/data/community.js` — Discord channels, content creator showcase, community events calendar.
- `src/data/contact.js` — Inquiry categories (`General`, `Media`, `Partnership`, `Feedback`, `Creator`), direct emails.
- `src/data/faq.js` — 6 structured categories (Brand, Game, Features, Media, Community, General) with search tags.
- `src/data/features.js` — Detailed specifications for batting, bowling, fielding, DRS, and match presentation.
- `src/data/game.js` — 2D gameplay concept, philosophy, physics engine overview, and tactical mechanics.
- `src/data/home.js` — Curated stats, hero highlights, feature teasers, and call-to-action blocks.
- `src/data/media.js` — High-definition wallpapers, concept renders, category filters, and aspect ratios.
- `src/data/news.js` — Full articles with slug URLs, author metadata, read times, rich Markdown bodies, and tags.

---

## 9. Custom Hooks Catalog

All custom hooks are located in `src/hooks/`:

| Hook | Signature | Purpose & Description |
|:---|:---|:---|
| `useClickOutside` | `useClickOutside(ref, handler)` | Listens for mousedown/touchstart events outside a DOM element. Used in menus and drawers. |
| `useDebounce` | `useDebounce(value, delayMs)` | Returns debounced value updated only after the specified delay. Used for real-time search filtering. |
| `useEscapeKey` | `useEscapeKey(handler, isEnabled)` | Listens for keyboard `Escape` presses. Closes lightboxes, modals, and drawers. |
| `useLockBodyScroll`| `useLockBodyScroll(isLocked)` | Locks `document.body` overflow to prevent background scrolling when overlays are active. |
| `useMediaQuery` | `useMediaQuery(query)` | Matches CSS media queries (e.g. `(min-width: 768px)`) using modern `matchMedia` event listeners. |
| `usePageTitle` | `usePageTitle(title)` | Dynamically updates the browser's document title with the CRICKET27 branding suffix. |
| `useScrollProgress`| `useScrollProgress()` | Returns current normalized window scroll progress (`0.0` to `1.0`) with RAF throttling. |
| `useToast` | `useToast()` | Returns `{ success, error, info, removeToast }` methods to trigger global notifications. |
| `useToggle` | `useToggle(initialState)` | Provides `[state, toggle, setTrue, setFalse]` helpers for boolean state management. |
| `useUI` | `useUI()` | Accesses global UI state: `isMobileMenuOpen`, `openModal`, `closeModal`, `isNavScrolled`. |

---

## 10. Animation Architecture & Motion Design

Framer Motion powers the cinematic animation language across all pages. Defined centrally in `src/utils/animations.js`:

- **Fade Variants:** `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInScale`
- **Stagger Containers:** `staggerContainer`, `staggerFast`, `staggerSlow`
- **Page Transitions:** `pageTransitionVariants` (smooth route exit and entry)
- **Interactive Gestures:** `cardHover`, `buttonTap`, `magneticSpring`
- **Performance Guidelines:**
  - Transforms and opacity are animated exclusively to guarantee 60fps GPU acceleration.
  - Layout thrashing (`height`, `width`, `top`, `left`) is strictly avoided.
  - `prefers-reduced-motion` is respected to ensure accessibility compliance.

---

## 11. Responsive Design & Viewport Strategy

The website is engineered with a mobile-first responsive architecture tested across 9 target viewports:

- **Target Viewports:** `320px` (min iPhone SE), `360px` (budget Android), `390px` (iPhone 13/14), `480px` (large mobile), `768px` (iPad portrait), `1024px` (iPad landscape / laptop), `1280px` (desktop), `1440px` (large desktop), `1920px` (full HD widescreen).
- **Mobile Landscape:** Validated with landscape orientation checks to prevent modal and navbar clipping.
- **Fluid Typography:** Managed via CSS `clamp()` in `src/styles/typography.css` ensuring proportional scaling without manual breakpoint thrashing.
- **Touch Target Standard:** All clickable interactive elements maintain a minimum bounding box of 44x44px.
- **iOS Safari Input Zoom Prevention:** Mobile text inputs specify `16px` minimum font size (`text-base sm:text-sm`).

---

## 12. Future Backend Integration

Detailed technical specifications for future backend connectivity are documented in:
[src/services/README.md](file:///c:/Users/Samsung/Desktop/Cricket27/src/services/README.md)

Key architectural highlights:
- **Client Transport Layer:** Centralized `api.js` abstraction using standard Fetch/Axios patterns.
- **DTO Mappers:** Decouples backend database schemas from frontend UI expectations.
- **Mock Service Adapter:** In-memory fallback (`VITE_USE_MOCK_DATA=true`) enables seamless offline preview and testing.
- **Standard JSON Envelopes:** Standardized `{ success: true, data: ... }` and `{ success: false, error: ... }` formats.

---

## 13. Brand Identity & Design Tokens

### Color Palette
- **Midnight Navy (`#101827`):** Primary stadium night background.
- **Midnight Light (`#162032`):** Elevated section and panel backgrounds.
- **Slate Blue (`#263449`):** Card surfaces and subtle dividers.
- **Electric Lime (`#B7F34A`):** High-energy primary brand accent and cricket ball neon glow.
- **Warm White (`#F5F3EB`):** High-contrast editorial typography and primary headings.
- **Coral (`#FF704D`):** Accent highlights, warnings, and attention indicators.
- **Muted Text (`#8491A3`):** Secondary metadata, timestamps, and captions.

### Typography Hierarchy
- **Heading Font:** `Outfit`, sans-serif (800 / 900 weights, uppercase, tracking-tight).
- **Body Font:** `Inter`, sans-serif (400 / 500 / 600 weights, line-height 1.6).
- **Code & Metadata Font:** `JetBrains Mono`, monospace (specs, tags, timestamps).

---

## 14. Testing & Quality Assurance Suite

CRICKET27 includes an automated unit, hook, component, and routing integration test suite built with **Vitest**, **React Testing Library**, **@testing-library/jest-dom**, and **@testing-library/user-event**:

- **Execution Command:** `npm test` or `npm run test`
- **Watch Mode:** `npm run test:watch`
- **Total Tests:** 68 passing tests across 11 test suites
- **Coverage Areas:**
  - **Unit Tests:** `validators.test.js` (15 tests), `helpers.test.js` (8 tests)
  - **Custom Hooks:** `hooks.test.jsx` (9 tests for `useToggle`, `useDebounce`, `useEscapeKey`, `useLockBodyScroll`, `useToast`)
  - **UI Components:** `common.test.jsx` (8 tests), `forms.test.jsx` (6 tests), `cards.test.jsx` (2 tests), `interactions.test.jsx` (3 tests)
  - **Integration & Workflows:**
    - `contactForm.test.jsx`: Complete validation errors and successful local submission simulation (2 tests)
    - `faqFilter.test.jsx`: Live keyword search, debouncing, and category tab switching (2 tests)
    - `newsFilter.test.jsx`: Real-time article search query and category filtering (2 tests)
    - `routes.test.jsx`: Full route rendering integrity for all 10 core pages and custom 404 handler (11 tests)

---

## 15. Complete Page Catalog (All 10 Routes)

| # | Route | Page Title | Key Sections & Features |
|:---:|:---|:---|:---|
| **01** | `/` | Home | Cinematic Hero, About Teaser, Game Intro, Features Showcase, Brand Vision, Media Gallery Preview, Latest News, Community Intro, FAQ Preview, Final CTA. |
| **02** | `/about` | About Us | About Hero, Brand Story, Mission, Vision, Core Values, Why CRICKET27, Brand Philosophy ("BEYOND THE BOUNDARY"), Final CTA. |
| **03** | `/our-game` | Our Game | Game Hero with quick anchors, 2D Concept Introduction, Cricket Experience Pillars, Experience Highlights, Concept Art Gallery & Lightbox, Studio Vision, Game FAQ. |
| **04** | `/features` | Features | Features Hero, 6-Category Feature Overview, Batting Systems, Bowling Dynamics, Fielding Radar, Match Presentation & DRS, Competitive Leagues, Customisation Kit Studio, Feature Matrix Summary. |
| **05** | `/media` | Media & Vault | Media Hero, Visual Introduction, Category Filters (All, Concept Art, Wallpapers, UI Concepts, Stadiums), Interactive Lightbox with Keyboard Controls, 3 Downloadable Limited-Edition Posters. |
| **06** | `/news` | News & Editorial | News Hero, Hero Featured Article, Category Filter Tabs, Real-Time Keyword Search, 6-Card Responsive News Grid, Numeric Pagination, Transparent Newsletter CTA. |
| **07** | `/news/:slug` | News Details | Dynamic Route by Slug/ID, Article Breadcrumbs, Author Header & Meta, Hero Image, Semantic Content Renderer (Headers, Pull Quotes, Highlights), Social Share Controls, Previous/Next Navigation, Related Articles Grid. |
| **08** | `/community` | Community Hub | Community Hero, Community Philosophy, 4 Core Community Values, Cricket Culture & Atmosphere, Highlights Grid, Social Platform Cards (Discord, YouTube, Instagram, X/Twitter), Creator Showcase, Community FAQ. |
| **09** | `/faq` | FAQ & Help Center | FAQ Hero, Real-Time Debounced Question Search, 7 FAQ Category Filters with Counts, Animated Expandable Accordions, Filter Reset, Empty State with Quick Reset, Direct Contact Help CTA. |
| **10** | `/contact` | Contact & Inquiries | Contact Hero, Communications Intro, Direct Channels Info Cards (with "Coming Soon" indicators), 6-Field Client-Validated Inquiry Form (Name, Email, Type, Subject, Message, Notice Checkbox), 4-Step Communication Process, FAQ CTA. |
| **—** | `*` | 404 Not Found | Custom "Out of Crease" Error Page with Cricket Metaphor, Home Navigation Button. |

---

## 16. Asset Management & Directory Structure

All media assets are organized systematically within `public/assets/`:

```
public/assets/
├── about/                # Studio portraits, origin visuals, mission & vision graphics
├── backgrounds/          # Stadium floodlight gradients, mesh textures, pitch patterns
├── branding/             # Official SVG wordmarks, symbol marks, horizontal lockups
├── community/            # Fan culture photography, creator badges, squad banners
├── contact/              # Stadium night atmospheres, inquiry hero backgrounds
├── features/             # Batting, bowling, fielding, and telemetry breakdown assets
├── gallery/              # High-resolution concept renders and widescreen wallpapers
├── game-concept/         # 2D game concept illustrations, DRS diagrams, UI mockups
├── hero/                 # High-priority preloaded LCP desktop and mobile hero WebPs
├── homepage/             # Teaser graphics and feature cards
├── icons/                # Dedicated sport icons and custom SVG badges
├── news/                 # Editorial headers, dev diary visuals, author avatars
├── promotional-posters/  # Downloadable typography posters in SVG/WebP
└── videos/               # Video poster fallbacks and animated loop placeholders
```

> [!TIP]
> **Asset Guidelines:**
> - High-resolution images use modern **WebP** format with fallback JPG/PNG copies.
> - SVGs are utilized for all logos, wordmarks, and technical diagrams to guarantee crisp rendering on Retina/HiDPI screens.
> - Every `<img>` tag specifies explicit `width`, `height`, and accessible `alt` descriptions.

---

## 17. Production Deployment Preparation Guide

CRICKET27 is built as a pure client-side Single Page Application (SPA). To prepare for production deployment to any static hosting provider or CDN, review the following guidelines:

### 1. Client-Side Routing (SPA Fallback)
Because React Router manages routes in the browser, web servers must rewrite all non-file incoming requests to `/index.html` (HTTP 200).
- **Netlify & Cloudflare Pages:** Configured via `public/_redirects` (auto-copied to `dist/_redirects` on build).
- **Vercel:** Add `vercel.json` with `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`.
- **Nginx:** `try_files $uri $uri/ /index.html;`
- **Apache:** Use `.htaccess` rewrite rule `RewriteRule ^ index.html [L]`.

### 2. Domain & DNS Configuration Checklist
Before deploying to production, update the placeholder values in the following files:
- **`src/utils/constants.js`:** Update `SITE_URL` to the production domain (e.g., `https://cricket27.com`).
- **`public/sitemap.xml`:** Replace default domain prefix with the verified production URL.
- **`public/robots.txt`:** Ensure Sitemap URL points to the final live production location.
- **`src/components/common/SEO.jsx`:** Ensure Open Graph and Twitter Card tags resolve against production assets.

### 3. Environment Variables
No secrets are required for frontend building. Optional runtime toggles:
- `VITE_USE_MOCK_DATA=true` — Activates in-memory local data layer (default).

---

## 18. Code Quality & Standards

- **ESLint Compliance:** Configured with `eslint.config.js` adhering to a strict **0 errors, 0 warnings** standard.
- **Production Bundle Optimization:** Code-splitting with Vite, zero unused packages, clean imports.
- **Security Best Practices:** External links enforce `rel="noopener noreferrer"`. No hardcoded sensitive keys or backend tokens in client code.

---

&copy; 2026 CRICKET27. All rights reserved. BEYOND THE BOUNDARY.
