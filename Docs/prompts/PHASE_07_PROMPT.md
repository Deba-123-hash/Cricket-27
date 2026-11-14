# CRICKET27 — PHASE 07
# HOMEPAGE MEDIA, NEWS, COMMUNITY & FAQ DEVELOPMENT

## 1. YOUR ROLE

Act as a Senior Frontend Developer, Professional UI/UX Designer, Creative Director, React Specialist, Framer Motion Animation Developer and Sports Gaming Website Expert.

Your task is to complete the remaining homepage sections of CRICKET27.

Build a visually impressive, modern, premium and responsive experience.

Target quality: 9/10.

Think like a professional gaming brand design agency.

Do not create generic website sections.

## 2. PROJECT INFORMATION

Project: CRICKET27

Tagline: BEYOND THE BOUNDARY.

Project type: Premium 2D cricket gaming brand website.

Technology:
- React
- Vite
- JavaScript JSX
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React

Design identity:
- Midnight Navy: #101827
- Electric Lime: #B7F34A
- Warm White: #F5F3EB
- Slate Blue: #263449
- Coral: #FF704D
- Muted Text: #8491A3

Typography:
- Bebas Neue or Oswald for headings.
- Inter for body text.

## 3. INSPECT PREVIOUS PHASES FIRST

Before writing code:

1. Inspect Phase 01 foundation.
2. Inspect Phase 02 brand identity.
3. Inspect Phase 03 design system.
4. Inspect Phase 04 navigation and footer.
5. Inspect Phase 05 hero section.
6. Inspect Phase 06 homepage sections.
7. Inspect the current Home.jsx.
8. Inspect existing media, cards, buttons and animation components.
9. Inspect the existing data files.
10. Preserve all existing working functionality.

IMPORTANT:
Do not rebuild the homepage from scratch.

Continue the existing homepage after the Phase 06 sections.

## 4. REQUIRED HOMEPAGE SECTIONS

Develop these sections in the following order:

1. Media Gallery Preview.
2. Latest News.
3. Community Introduction.
4. FAQ Preview.
5. Final Homepage Visual Polish.

All sections must use the same CRICKET27 visual identity.

## 5. SECTION ONE — MEDIA GALLERY

Create a premium media gallery preview.

Eyebrow:
THE CRICKET27 VISUAL WORLD

Heading:
INSIDE THE WORLD OF CRICKET27.

Description:

Explore the visual identity and creative world of CRICKET27 through cricket-inspired artwork, promotional visuals and gaming concept imagery.

CTA:
EXPLORE ALL MEDIA

Destination:
/media

### Gallery content

Show approximately 6 to 8 visual items.

Suggested categories:

- Cricket Artwork.
- Promotional Posters.
- Stadium Visuals.
- Game Concept Artwork.
- Brand Visuals.
- Cricket Moments.

### Design requirements

Create an attractive editorial gallery.

Use:
- Asymmetric image grid.
- Different image sizes.
- Large featured image.
- Smaller supporting images.
- Dark image overlays.
- Subtle image zoom on hover.
- Category labels.
- Clean spacing.
- Strong visual hierarchy.

Do not use a boring identical-card grid.

### Image interaction

When visitors click an image:
- Open a clean image lightbox.
- Show the full image.
- Provide a close button.
- Support previous and next navigation if practical.
- Support keyboard navigation.
- Close with Escape.
- Prevent background scrolling while open.
- Restore scrolling when closed.
- Provide accessible labels.

The lightbox must work properly on desktop and mobile.

Use original or properly licensed artwork.

Never use broken image links.

## 6. SECTION TWO — LATEST NEWS

Create a professional latest news and announcements section.

Eyebrow:
WHAT'S HAPPENING

Heading:
LATEST FROM CRICKET27.

Description:

Stay connected with the latest updates, announcements and stories from the CRICKET27 world.

### News cards

Show 3 featured news cards.

Each card should contain:
- Featured image.
- Category label.
- Publication date.
- Article title.
- Short summary.
- Read More link.

Example content for initial sample entries:

Article 1:
Category: BRAND UPDATE

Title:
WELCOME TO THE WORLD OF CRICKET27

Summary:
Discover the vision, identity and inspiration behind the CRICKET27 cricket gaming brand.

Article 2:
Category: GAME CONCEPT

Title:
A NEW VISION FOR CRICKET GAMING

Summary:
Explore the ideas and creative direction shaping the CRICKET27 gaming concept.

Article 3:
Category: COMMUNITY

Title:
BUILT AROUND THE LOVE OF CRICKET

Summary:
Discover how the CRICKET27 brand aims to connect cricket enthusiasts through a shared passion for the sport.

These are sample editorial entries. Do not present fictional announcements as verified real-world events.

### Card interactions

- Subtle hover animation.
- Image zoom.
- Read More link.
- Consistent card height where appropriate.
- Responsive layout.

CTA:
VIEW ALL NEWS

Destination:
/news

### Data architecture

Keep news content in:

src/data/news.js

Use a reusable NewsCard component.

Each entry should support:

- id
- slug
- title
- category
- date
- excerpt
- image
- content
- featured

Prepare the data structure for future news detail pages.

Do not implement backend or CMS functionality.

## 7. SECTION THREE — COMMUNITY INTRODUCTION

Create an engaging CRICKET27 community section.

Eyebrow:
MORE THAN A GAME. A COMMUNITY.

Heading:
ONE SPORT.
ONE PASSION.
ONE COMMUNITY.

Description:

Cricket brings people together through passion, competition and unforgettable moments. CRICKET27 aims to build a community where cricket enthusiasts can share their interest in the evolving world of cricket gaming.

Primary CTA:
EXPLORE COMMUNITY

Destination:
/community

Secondary CTA:
GET IN TOUCH

Destination:
/contact

### Design direction

Use a bold community-focused visual.

Possible design:
- Large cricket crowd artwork.
- Stadium atmosphere.
- Dark background.
- Large typography.
- Electric Lime highlights.
- Editorial image composition.
- Strong CTA buttons.

### Social media presentation

Prepare a social links presentation.

Potential platforms:
- Instagram.
- YouTube.
- Facebook.
- X.

IMPORTANT:
Do not invent social media URLs or claim official accounts exist.

If verified links are not available:
- Display non-clickable visual placeholders.
- Clearly mark them as coming soon.
- Keep all links centralised in src/data/socialLinks.js.

Do not create fake external destinations.

## 8. SECTION FOUR — HOMEPAGE FAQ PREVIEW

Create an interactive FAQ preview section.

Eyebrow:
NEED TO KNOW MORE?

Heading:
FREQUENTLY ASKED QUESTIONS.

Description:
Find answers to common questions about CRICKET27 and our vision.

### Sample questions

1. What is CRICKET27?

Answer:
CRICKET27 is a cricket gaming brand focused on presenting a fresh digital cricket gaming vision.

2. Is CRICKET27 a playable game?

Answer:
This website introduces the CRICKET27 brand and its gaming concept. Actual game availability and release information will be announced through official channels when confirmed.

3. Where can I find information about the game?

Answer:
Visit the Our Game page to explore the concept and information about CRICKET27.

4. How can I stay updated?

Answer:
Visit the News section for available announcements and updates.

5. How can I contact CRICKET27?

Answer:
Use the Contact page to find the available contact information.

### Accordion behaviour

- Click to expand an answer.
- Click again to collapse.
- Smooth height animation.
- Use clear plus/minus or chevron icons.
- Support keyboard navigation.
- Use appropriate ARIA attributes.
- Maintain accessible focus states.

Use a clean and minimal design.

Avoid excessive borders and decorative effects.

CTA:
VIEW ALL QUESTIONS

Destination:
/faq

Keep FAQ content in:

src/data/faq.js

Reuse the existing accordion component if one exists.

## 9. SECTION FIVE — HOMEPAGE COMPLETION

After the FAQ section, create a polished final visual transition into the existing global footer.

Ensure the homepage contains the complete sequence:

1. Hero.
2. About CRICKET27.
3. Our Game.
4. Gaming Features.
5. Brand Vision.
6. Media Gallery.
7. Latest News.
8. Community.
9. FAQ Preview.
10. Final CTA.
11. Global Footer.

IMPORTANT:

If Phase 06 already implemented a final CTA, do not create a duplicate.

Inspect it and improve the existing section if necessary.

The final homepage must feel visually balanced.

## 10. COMPONENT ARCHITECTURE

Suggested structure:

src/
├── sections/
│   └── home/
│       ├── MediaGallerySection.jsx
│       ├── LatestNewsSection.jsx
│       ├── CommunitySection.jsx
│       ├── FAQPreviewSection.jsx
│       └── HomeFinalSection.jsx
│
├── components/
│   ├── gallery/
│   │   ├── GalleryGrid.jsx
│   │   ├── GalleryItem.jsx
│   │   └── ImageLightbox.jsx
│   │
│   └── cards/
│       └── NewsCard.jsx
│
├── data/
│   ├── news.js
│   ├── gallery.js
│   ├── faq.js
│   └── socialLinks.js
│
└── pages/
    └── Home.jsx

Adapt the architecture to the existing project.

Do not duplicate existing reusable components.

Keep data separate from presentation.

## 11. ASSET REQUIREMENTS

Prepare original or properly licensed assets for:

- Gallery artwork.
- Promotional posters.
- Cricket stadium imagery.
- News thumbnails.
- Community background.
- Feature promotional images.

Recommended asset organisation:

public/assets/
├── gallery/
├── promotional-posters/
├── news/
├── community/
└── homepage/

Requirements:
- High-quality imagery.
- Consistent colour grading.
- Suitable image ratios.
- Optimised formats.
- Responsive loading.
- Proper alt text.
- No broken URLs.
- No unrelated stock imagery.

Do not copy assets from Dream Cricket or other proprietary cricket games.

Do not leave large blank image spaces.

## 12. ANIMATIONS

Use Framer Motion.

Implement:
- Gallery reveal.
- Image hover zoom.
- Lightbox entrance and exit.
- News card stagger.
- Community section reveal.
- FAQ accordion transitions.
- CTA hover interactions.

Animation rules:
- Smooth and professional.
- Consistent timing.
- No excessive motion.
- No unnecessary continuous animations.
- Respect prefers-reduced-motion.
- Avoid layout shifts.
- Maintain mobile performance.

Reuse Phase 03 animation utilities.

## 13. RESPONSIVE DESIGN

Test all new sections on:

- Large desktop.
- Desktop.
- Laptop.
- Tablet.
- Mobile.
- Small mobile.

Gallery:
- Desktop: asymmetric grid.
- Tablet: balanced two-column grid.
- Mobile: single-column or carefully designed compact grid.

News:
- Desktop: three cards where space permits.
- Tablet: two columns.
- Mobile: one column.

Community:
- Adapt image and text composition.
- Keep CTAs accessible.

FAQ:
- Full-width readable accordion.
- Proper touch targets.
- No horizontal overflow.

## 14. ACCESSIBILITY AND PERFORMANCE

Ensure:
- Semantic HTML.
- Accessible buttons.
- Keyboard navigation.
- Visible focus states.
- Alt text.
- Correct heading hierarchy.
- ARIA attributes for accordion and lightbox.
- Reduced-motion support.
- Lazy loading for below-the-fold images.
- Optimised image formats.
- No unnecessary dependencies.

## 15. STRICT PROJECT LIMITATIONS

This phase is homepage development only.

Do not:
- Rebuild previous homepage sections.
- Change the global brand identity.
- Redesign the navbar unnecessarily.
- Rebuild the footer.
- Develop full internal pages.
- Implement backend.
- Implement APIs.
- Implement databases.
- Implement authentication.
- Implement CMS.
- Implement payment systems.
- Implement playable cricket gameplay.
- Add Three.js.
- Add WebGL.
- Add 3D models.
- Start deployment.

Keep the project frontend-only.

## 16. QUALITY CONTROL

After implementation:

1. Verify the complete homepage order.
2. Verify media gallery.
3. Test lightbox opening and closing.
4. Test previous and next image navigation.
5. Test Escape key.
6. Verify all news cards.
7. Verify news routes.
8. Verify community section.
9. Check social link placeholders.
10. Test FAQ accordion.
11. Verify all CTA destinations.
12. Check image loading.
13. Check mobile responsiveness.
14. Check keyboard accessibility.
15. Check browser console.
16. Run ESLint.
17. Run production build.

Fix errors introduced by this phase.

Do not report successful tests unless actually executed.

## 17. PHASE 07 COMPLETION CRITERIA

Phase 07 is complete when:

- Media gallery preview is implemented.
- Gallery lightbox works.
- Latest News section is implemented.
- News cards use structured data.
- Community section is implemented.
- Social links are handled honestly.
- FAQ preview is interactive.
- Homepage sections are in the correct order.
- Existing final CTA is not duplicated.
- Images are visible and optimised.
- Responsive layouts work.
- Animations work correctly.
- Existing Phase 01–06 work is preserved.
- Production build succeeds.

## 18. FINAL REPORT

Provide:

1. Sections developed.
2. Components created.
3. Data files created or updated.
4. Gallery and lightbox functionality.
5. News card implementation.
6. Community design details.
7. FAQ functionality.
8. Assets used.
9. Responsive testing results.
10. Accessibility results.
11. ESLint results.
12. Production build results.
13. Files created or modified.
14. Remaining issues.

IMPORTANT:

Complete only Phase 07.

Do not automatically start Phase 08.

Wait for my approval before continuing.