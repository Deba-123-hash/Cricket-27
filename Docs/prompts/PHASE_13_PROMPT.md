# CRICKET27 — PHASE 13 MASTER DEVELOPMENT PROMPT
## Dynamic News Details Page & Complete Article Experience

### PROJECT INFORMATION

Project: CRICKET27  
Tagline: BEYOND THE BOUNDARY.  
Phase: 13 of 24  
Phase Name: News Details Page Development

Development Tools:
- Google AI Studio
- Antigravity

Frontend Stack:
- React
- Vite
- JavaScript JSX
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React

### 1. YOUR ROLE

Act as a senior React developer, frontend architect, editorial UI/UX designer and professional sports media website specialist.

Your task is to develop a complete dynamic News Details page for CRICKET27.

The page must provide a premium article-reading experience similar to a professional sports publication.

The article page must be visually consistent with the existing CRICKET27 website while providing a distinct editorial layout.

Do not create a generic blog article template.

### 2. INSPECT THE EXISTING PROJECT FIRST

Before making any changes:

1. Inspect the entire project structure.
2. Review completed Phases 01–12.
3. Inspect the existing `/news/:slug` route.
4. Review the News page developed in Phase 12.
5. Inspect the existing `src/data/news.js`.
6. Review the existing NewsCard component.
7. Inspect the current design system and shared components.
8. Check existing image assets and typography.
9. Review navigation, footer and page transition behaviour.

IMPORTANT:
- Preserve all completed phases.
- Reuse the existing news data.
- Do not create duplicate article data.
- Do not recreate the project.
- Do not replace working components unnecessarily.
- Do not redesign the News listing page.

### 3. DESIGN AND BRAND IDENTITY

Use the established CRICKET27 design system.

Colours:
- Midnight Navy: #101827
- Electric Lime: #B7F34A
- Warm White: #F5F3EB
- Slate Blue: #263449
- Coral: #FF704D
- Muted Text: #8491A3

Typography:
- Headings: Bebas Neue or Oswald.
- Body: Inter.

Visual direction:
- Premium sports editorial.
- Cinematic cricket photography.
- Strong headline hierarchy.
- Comfortable reading width.
- Modern article layouts.
- Clean metadata presentation.
- High-quality image compositions.
- Professional responsive design.

Keep article body text comfortable to read. Do not make every element oversized.

### 4. DYNAMIC ARTICLE ROUTING

The page must work using the existing route:

`/news/:slug`

Requirements:

1. Read the slug from React Router parameters.
2. Find the corresponding article in `src/data/news.js`.
3. Display the correct article dynamically.
4. Reuse the same article data used by the News page.
5. Ensure every NewsCard links to the correct slug.
6. Support direct navigation to an article URL.
7. Support browser refresh on article URLs through the existing frontend routing setup.

Example:

`/news/the-vision-behind-cricket27`

Must display the matching article.

Do not hardcode one article into the page.

### 5. ARTICLE PAGE STRUCTURE

Build the following sections in order.

#### SECTION 1 — ARTICLE BREADCRUMB

Display:

Home / News / Article Title

Requirements:
- Clickable Home link.
- Clickable News link.
- Current article title.
- Clear visual hierarchy.
- Responsive wrapping or truncation.
- Accessible navigation labels.

#### SECTION 2 — ARTICLE HEADER

Create a premium editorial article header.

Include:
- Article category badge.
- Article headline.
- Short article excerpt.
- Publication date.
- Estimated reading time.
- Optional author label only if genuine author information exists.

Example:

Category:
BRAND UPDATES

Headline:
THE VISION BEHIND CRICKET27.

Excerpt:
Discover the creative direction, ambition and ideas shaping the CRICKET27 cricket gaming brand.

Metadata:
14 NOVEMBER 2026 · 3 MIN READ

These are sample content values. Keep publication dates consistent with the actual local article data. Do not invent authors or verified announcements.

Design:
- Large editorial headline.
- Controlled content width.
- Strong spacing.
- Subtle entrance animation.
- Responsive typography.

#### SECTION 3 — FEATURED ARTICLE IMAGE

Create a large hero image for the article.

Requirements:
- Full-width image within the article container.
- Appropriate aspect ratio.
- High-quality cricket visual.
- Correct image alt text.
- Responsive image sizing.
- Optional caption.
- Subtle image reveal animation.

Do not use unrelated stock imagery or fake gameplay screenshots.

#### SECTION 4 — ARTICLE CONTENT

Create a premium article reading layout.

Requirements:
- Main article content column.
- Optional article sidebar on desktop.
- Comfortable reading width.
- Clear paragraph spacing.
- Proper heading hierarchy.
- Lists where appropriate.
- Inline images when actual assets are available.
- Highlight or quote blocks where relevant.

Support the following content types:

1. Paragraph.
2. Heading.
3. Subheading.
4. Bullet list.
5. Numbered list.
6. Quote.
7. Image with caption.

Keep article content data-driven.

Do not write all article text directly inside the React component.

Use a reusable article content structure.

Example:

content: [
  {
    type: "paragraph",
    text: "..."
  },
  {
    type: "heading",
    text: "The Idea Behind CRICKET27"
  },
  {
    type: "paragraph",
    text: "..."
  },
  {
    type: "list",
    items: ["...", "..."]
  },
  {
    type: "quote",
    text: "..."
  }
]

Use the existing project data format if one already exists.

#### SECTION 5 — ARTICLE SIDEBAR

Create a sidebar for desktop layouts.

Possible elements:

- Article category.
- Publication information.
- Share article controls.
- Related story links.
- Back to News link.

Requirements:
- Visually distinct but consistent.
- Sticky positioning only if it improves usability.
- No overflow.
- Hide or reposition appropriately on mobile.

Do not add fake author biographies or unsupported information.

#### SECTION 6 — ARTICLE SHARE FUNCTIONALITY

Implement working frontend sharing controls.

Options:

1. Copy article URL.
2. Share through WhatsApp.
3. Share through Facebook.
4. Share through X.

Requirements:
- Use the current article URL.
- Use the browser's native Web Share API when available.
- Provide a fallback copy-link action.
- Display clear copied feedback.
- Open external sharing destinations safely.
- Use proper accessible button labels.

IMPORTANT:
Do not show fake share buttons.

Use Lucide React icons.

#### SECTION 7 — RELATED ARTICLES

Create a related article section.

Heading:
MORE STORIES TO EXPLORE.

Requirements:
- Display 3 related article cards when enough articles exist.
- Exclude the currently opened article.
- Prefer matching categories.
- Fill remaining positions with other relevant articles.
- Use the existing NewsCard component.
- Link to correct article slugs.
- Responsive grid.
- Smooth entrance animations.

Use local static news data.

Do not create duplicate article records.

#### SECTION 8 — ARTICLE NAVIGATION

Add previous and next article navigation.

Requirements:
- Previous article.
- Next article.
- Correct article title.
- Clear navigation labels.
- Proper slug links.
- Disabled or hidden states when no article exists.
- Responsive layout.

Use a consistent ordering from the existing news data.

#### SECTION 9 — FINAL CTA

Heading:
MORE THAN A STORY. A CRICKET27 VISION.

Description:
Explore more about the brand, its creative direction and the cricket gaming experience we envision.

Buttons:

EXPLORE OUR GAME
Route: `/our-game`

BACK TO NEWS
Route: `/news`

### 6. ARTICLE DATA ARCHITECTURE

Use the existing:

`src/data/news.js`

Extend the data model only when required.

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

Optional:
- imageCaption
- author, only when verified
- relatedArticleIds, if useful

Keep all content local and static.

The article renderer must safely handle missing optional fields.

Do not assume all articles have every content type.

### 7. COMPONENT ARCHITECTURE

Build reusable components where necessary:

- NewsDetails.jsx
- ArticleBreadcrumb.jsx
- ArticleHeader.jsx
- ArticleHeroImage.jsx
- ArticleContent.jsx
- ArticleContentRenderer.jsx
- ArticleSidebar.jsx
- ArticleShare.jsx
- RelatedArticles.jsx
- ArticleNavigation.jsx

These are suggested names.

Reuse existing components where possible.

Do not create a separate duplicate NewsCard.

Keep article rendering modular and maintainable.

### 8. 404 AND EMPTY ARTICLE STATES

Handle invalid slugs professionally.

When an article does not exist:

- Display a custom Article Not Found page.
- Show an appropriate message.
- Provide a Back to News button.
- Maintain CRICKET27 branding.
- Do not show a blank screen.
- Do not display another article accidentally.

Also handle:
- Missing images.
- Empty article content.
- Missing optional metadata.
- No related articles.
- First and last article navigation.

### 9. ANIMATION REQUIREMENTS

Use Framer Motion.

Implement:
- Article header reveal.
- Hero image reveal.
- Smooth content entrance.
- Sidebar entrance.
- Related article stagger animations.
- Navigation hover interactions.
- CTA animations.

Animations should be subtle and professional.

Respect prefers-reduced-motion.

Do not compromise reading performance.

### 10. RESPONSIVE DESIGN

Test at:

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
- Article headline fits.
- Featured image maintains aspect ratio.
- Reading column remains comfortable.
- Sidebar moves below content or hides appropriately.
- Share controls are touch-friendly.
- Related cards stack correctly.
- Previous/next navigation remains usable.
- Breadcrumb does not overflow.
- No horizontal scrolling.

### 11. ACCESSIBILITY AND SEO

Implement:
- Semantic article element.
- Correct H1/H2/H3 hierarchy.
- Accessible share controls.
- Keyboard-accessible navigation.
- Visible focus indicators.
- Descriptive image alt text.
- Sufficient colour contrast.
- Proper link labels.
- Reduced-motion support.

SEO:
- Dynamic document title for each article.
- Article-specific meta description.
- Open Graph title and description where supported by existing architecture.
- Appropriate article metadata.
- Canonical URL handling only if already supported.

Suggested title format:

`{Article Title} | CRICKET27 News`

Do not add unnecessary SEO dependencies.

### 12. PERFORMANCE

Optimise:
- Article image loading.
- Related article rendering.
- React component structure.
- Animation complexity.
- Unnecessary re-renders.
- Font loading.
- Layout stability.

Use appropriate image loading priority:
- Featured article image: eager loading when appropriate.
- Related images: lazy loading.

### 13. STRICT PROJECT RESTRICTIONS

This phase is strictly frontend-only.

DO NOT BUILD:
- Backend.
- Node/Express server.
- Database.
- API.
- CMS.
- Admin panel.
- Authentication.
- Real article publishing system.
- External news services.
- Comments backend.
- User accounts.
- Payment functionality.
- Game engine.
- Cricket gameplay.
- Three.js.
- WebGL.
- 3D models or scenes.

Use local JavaScript data only.

Do not modify unrelated completed pages.

### 14. TESTING CHECKLIST

Verify:

[ ] `/news/:slug` opens correctly.

[ ] Different slugs display different articles.

[ ] Direct URL access works.

[ ] Browser refresh works on article routes.

[ ] Breadcrumb links work.

[ ] Article title and metadata are correct.

[ ] Featured image loads.

[ ] All supported article content types render.

[ ] Missing article content is handled.

[ ] Invalid slug displays Article Not Found.

[ ] Copy article URL works.

[ ] WhatsApp sharing works through its external link.

[ ] Facebook sharing works through its external link.

[ ] X sharing works through its external link.

[ ] Native share is used when supported.

[ ] Related articles display correctly.

[ ] Current article is excluded from related articles.

[ ] Previous and next navigation works.

[ ] CTA links work.

[ ] Mobile layout works.

[ ] No broken images.

[ ] No console errors.

[ ] ESLint passes.

[ ] Production build succeeds.

### 15. FINAL DEVELOPMENT REPORT

After completing the phase, provide:

1. Phase 13 summary.
2. Files created.
3. Files modified.
4. Components developed.
5. Article rendering functionality.
6. Sharing functionality.
7. Related article logic.
8. Previous/next navigation logic.
9. Invalid article handling.
10. Responsive testing results.
11. Accessibility improvements.
12. ESLint results.
13. Production build results.
14. Remaining issues.

### 16. PHASE COMPLETION RULE

Complete Phase 13 only.

Do not automatically start Phase 14.

Preserve all work from Phases 01–12.

Do not redesign the homepage, Media page or News listing page.

Do not introduce backend functionality.

Wait for my approval before starting the next phase.

**PHASE 13 SUCCESS CRITERIA:**

The finished CRICKET27 News Details page must provide a premium, dynamic article-reading experience with correct slug routing, structured article content, sharing controls, related stories, previous/next navigation, responsive layouts and professional animations.