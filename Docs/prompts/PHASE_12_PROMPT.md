# CRICKET27 — PHASE 12 MASTER DEVELOPMENT PROMPT
## Complete News Page & Editorial Experience Development

### PROJECT INFORMATION

Project Name: CRICKET27  
Tagline: BEYOND THE BOUNDARY.  
Current Phase: 12  
Phase Name: Complete News Page Development

Development Tools:
- Google AI Studio
- Antigravity

Frontend Technology:
- React
- Vite
- JavaScript JSX
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React

### 1. YOUR ROLE

Act as a senior React frontend developer, professional editorial UI/UX designer and sports media website specialist.

Your responsibility is to develop a complete, premium-quality News page for CRICKET27.

The page should look like the news section of a professional cricket gaming brand, combining modern sports journalism layouts with a premium esports visual identity.

Do not create a generic blog template.

Build an engaging editorial experience with strong typography, attractive news photography, clear content hierarchy, working filters and smooth interactions.

### 2. INSPECT THE EXISTING PROJECT FIRST

Before making changes:

1. Inspect the existing project structure.
2. Review completed Phases 01–11.
3. Inspect the existing `/news` route.
4. Review the homepage Latest News section from Phase 07.
5. Inspect the existing NewsCard component.
6. Inspect `src/data/news.js`, if already created.
7. Review the current design tokens, navigation, footer and animation utilities.
8. Check available news images and assets.
9. Check installed dependencies.

IMPORTANT:
- Preserve all completed work.
- Do not recreate the project.
- Do not duplicate existing components.
- Reuse the existing design system.
- Extend existing news data structures where possible.
- Do not unnecessarily modify the homepage.

### 3. BRAND AND DESIGN SYSTEM

Follow the established CRICKET27 identity.

Colour palette:
- Midnight Navy: #101827
- Electric Lime: #B7F34A
- Warm White: #F5F3EB
- Slate Blue: #263449
- Coral: #FF704D
- Muted Text: #8491A3

Typography:
- Headings: Bebas Neue or Oswald.
- Body: Inter.

Design direction:
- Premium sports editorial.
- Modern esports-inspired presentation.
- Cinematic cricket photography.
- Bold editorial headlines.
- Asymmetric content layouts.
- Clean spacing.
- Strong visual hierarchy.
- Subtle animations.
- Professional cards and category labels.

Avoid generic blog layouts, excessive gradients, unnecessary glassmorphism and visual clutter.

Use Lucide React icons instead of emoji.

### 4. NEWS PAGE STRUCTURE

Build the following sections in order.

#### SECTION 1 — NEWS HERO

Create a premium news page hero.

Eyebrow:
THE LATEST FROM CRICKET27

Main heading:
NEWS. STORIES. THE GAME.

Description:
Stay connected with the latest stories, creative updates, announcements and developments from the world of CRICKET27.

Breadcrumb:
Home / News

Design requirements:
- Dark cinematic background.
- Cricket-inspired visual.
- Bold typography.
- Electric Lime accent.
- Responsive layout.
- Smooth entrance animation.

#### SECTION 2 — FEATURED NEWS STORY

Create a prominent featured article section.

Requirements:
- Large editorial image.
- Category badge.
- Article title.
- Short excerpt.
- Publication date.
- Read Article CTA.
- Distinctive layout with text and image.
- Responsive stacking on mobile.

Example editorial story:

Category: BRAND UPDATE

Title:
THE VISION BEHIND CRICKET27.

Excerpt:
Discover the creative direction, ambition and ideas shaping the CRICKET27 cricket gaming brand.

CTA:
READ STORY

Use the route `/news/:slug` for the article.

IMPORTANT:
This is sample editorial content. Do not represent it as a real announcement or confirmed development milestone.

#### SECTION 3 — NEWS CATEGORY FILTERS

Create working news category filters.

Categories:
1. All News
2. Brand Updates
3. Game Vision
4. Development
5. Community
6. Announcements

Requirements:
- Interactive category buttons.
- Active filter styling.
- Correct filtering of article data.
- Smooth transitions.
- Responsive horizontal scrolling if needed.
- Accessible keyboard navigation.

All categories must work using local static data.

Do not build a backend or external news API.

#### SECTION 4 — NEWS SEARCH

Build a working search interface.

Requirements:
- Search input.
- Search icon.
- Clear search button.
- Search by article title.
- Search by category.
- Search by article excerpt.
- Case-insensitive matching.
- Empty search state.
- Responsive layout.

Placeholder:
Search stories, updates and announcements...

The search must filter the existing local news data.

Do not add a fake search button.

#### SECTION 5 — LATEST NEWS GRID

Create a professional editorial news listing.

Requirements:
- Minimum 6 sample editorial articles if sufficient original content is available.
- Featured article card.
- Standard news cards.
- Consistent image ratios.
- Category labels.
- Publication dates.
- Article titles.
- Short excerpts.
- Read More links.
- Hover effects.
- Responsive grid.

Suggested content topics:

1. The Vision Behind CRICKET27.
2. Building a Cricket Gaming Identity.
3. The Art of Cricket Presentation.
4. Celebrating the Spirit of Cricket.
5. Exploring the Future of Cricket Gaming.
6. The CRICKET27 Community Vision.

These are sample editorial topics, not verified news events.

Do not invent real-world partnerships, release dates, awards, player endorsements or official announcements.

#### SECTION 6 — NEWS PAGINATION

Implement frontend pagination.

Requirements:
- Display a manageable number of articles per page.
- Previous button.
- Next button.
- Page number controls.
- Active page indicator.
- Correct disabled states.
- Automatically return to page one when filters or search change.
- No unnecessary page reloads.

Use local static data only.

If there are too few articles to require pagination, handle that gracefully rather than displaying fake pagination.

#### SECTION 7 — NEWSLETTER / UPDATES CTA

Create a visual subscription section only as a frontend concept.

Heading:
DON'T MISS THE NEXT UPDATE.

Description:
Keep an eye on the latest CRICKET27 stories and brand updates.

Requirements:
- Email input UI.
- Validation of basic email format.
- Clear error and success states.
- Accessible input label.
- Responsive layout.

IMPORTANT:
There is no backend or mailing service in this phase.

Do not pretend that an email has been subscribed or stored.

The form must clearly communicate that subscription functionality is coming soon, or remain a clearly labelled non-submitting UI concept.

Do not collect or transmit user information.

#### SECTION 8 — FINAL CTA

Heading:
STAY CLOSE TO THE GAME.

Description:
Explore the CRICKET27 vision and discover what makes our cricket gaming brand different.

Buttons:
EXPLORE OUR GAME → `/our-game`
VIEW MEDIA → `/media`

Maintain the existing CRICKET27 CTA design system.

### 5. NEWS DATA ARCHITECTURE

Use the existing file:

`src/data/news.js`

Extend its structure if necessary.

Each article should support:

- id
- slug
- title
- category
- date
- excerpt
- image
- alt
- content
- featured
- readTime

Example data shape:

{
  id: 1,
  slug: "the-vision-behind-cricket27",
  title: "The Vision Behind CRICKET27",
  category: "Brand Updates",
  date: "2026-11-14",
  excerpt: "Discover the creative direction behind CRICKET27.",
  image: "/assets/news/vision-behind-cricket27.webp",
  alt: "Cricket stadium under dramatic lights",
  content: [],
  featured: true,
  readTime: "3 min read"
}

Use existing project conventions where they differ.

Keep article content separate from UI components.

Ensure dates are formatted consistently and avoid misleading publication dates for sample content.

### 6. COMPONENT ARCHITECTURE

Create reusable components as appropriate:

- NewsHero.jsx
- FeaturedNews.jsx
- NewsCategoryFilter.jsx
- NewsSearch.jsx
- NewsGrid.jsx
- NewsCard.jsx
- NewsPagination.jsx
- NewsletterCTA.jsx
- NewsPageCTA.jsx

Reuse existing components wherever possible.

Do not create duplicate NewsCard implementations if one already exists.

Keep components small, readable and maintainable.

### 7. ADVANCED INTERACTIONS

Implement:
- Category filtering.
- Search functionality.
- Search clear button.
- Pagination.
- Hover effects.
- Card entrance animations.
- Featured story transitions.
- Newsletter UI validation.
- Responsive navigation.

All controls must work.

Do not create decorative controls without functionality.

### 8. ANIMATIONS

Use Framer Motion.

Add:
- Hero entrance animations.
- Headline reveal.
- Featured article reveal.
- Staggered news card animations.
- Category selection transitions.
- Search interface transitions.
- CTA entrance animations.
- Subtle card hover animations.

Keep animation durations smooth and professional.

Respect prefers-reduced-motion.

### 9. RESPONSIVE DESIGN

Test the News page at:

Desktop:
- 1440px
- 1280px

Tablet:
- 1024px
- 768px

Mobile:
- 480px
- 390px
- 360px

Ensure:
- No horizontal overflow.
- Search remains usable.
- Filters are accessible.
- News cards stack correctly.
- Featured news layout adapts.
- Typography remains readable.
- Images maintain correct aspect ratios.
- Pagination works on small screens.
- CTA buttons are touch-friendly.

### 10. SEO AND SEMANTIC STRUCTURE

Use:
- One primary H1.
- Proper H2/H3 hierarchy.
- Semantic article elements.
- Meaningful image alt text.
- Descriptive links.
- Appropriate page title.
- Meta description if supported by the existing SEO architecture.
- Canonical URL handling only if already supported.

Suggested page title:
CRICKET27 News | Latest Stories and Brand Updates

Suggested description:
Explore CRICKET27 news, brand stories, cricket gaming concepts, creative updates and community highlights.

### 11. ASSET MANAGEMENT

Use:
- `public/assets/news/`
- `src/assets/images/`

Requirements:
- Original or properly licensed cricket visuals.
- Optimised image formats.
- Meaningful filenames.
- Lazy loading for non-featured images.
- No broken image links.
- No unrelated stock photography.
- No copyrighted competitor game screenshots.

Do not use fake screenshots or describe concept art as actual gameplay.

### 12. STRICT PROJECT RESTRICTIONS

This phase is for the CRICKET27 frontend promotional website only.

DO NOT BUILD:
- Backend.
- Node/Express server.
- Database.
- APIs.
- Authentication.
- CMS.
- Admin dashboard.
- News publishing system.
- Real newsletter subscription service.
- External news API.
- Payment functionality.
- Game engine.
- Cricket gameplay.
- Three.js.
- WebGL.
- 3D models or scenes.

Use local static JavaScript data.

Do not modify unrelated pages or completed phases unnecessarily.

### 13. TESTING CHECKLIST

Verify all the following:

[ ] `/news` opens correctly.

[ ] Existing navbar works.

[ ] Existing footer works.

[ ] News hero looks correct.

[ ] Featured story displays correctly.

[ ] All six category filters work.

[ ] Search works by title.

[ ] Search works by category.

[ ] Search works by excerpt.

[ ] Clear search works.

[ ] Empty search results are handled.

[ ] News cards link to their correct article slugs.

[ ] Pagination works correctly.

[ ] Pagination resets after filtering.

[ ] Newsletter UI validation works.

[ ] Newsletter does not falsely claim a real subscription.

[ ] All images load correctly.

[ ] Mobile and tablet layouts work.

[ ] No horizontal overflow.

[ ] No console errors.

[ ] ESLint passes.

[ ] Production build succeeds.

### 14. FINAL DEVELOPMENT REPORT

After completing the phase, provide:

1. Phase 12 completion summary.
2. Files created.
3. Files modified.
4. Components developed.
5. News data added.
6. Search functionality details.
7. Category filter functionality.
8. Pagination functionality.
9. Responsive testing results.
10. Accessibility improvements.
11. ESLint results.
12. Production build results.
13. Remaining issues, if any.

### 15. PHASE COMPLETION RULE

Complete Phase 12 only.

Do not automatically start Phase 13.

Do not rebuild the homepage.

Do not redesign the Media page.

Preserve all previously completed phases.

Wait for my approval before continuing.

**PHASE 12 SUCCESS CRITERIA:**

The final News page must look like a premium cricket sports editorial platform with a featured story, professional news cards, working category filters, functional search, frontend pagination, responsive design and polished animations.