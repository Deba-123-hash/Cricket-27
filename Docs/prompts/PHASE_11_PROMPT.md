# CRICKET27 — PHASE 11 MASTER DEVELOPMENT PROMPT
## Complete Media Page & Interactive Gallery Development

### PROJECT INFORMATION

Project Name: CRICKET27  
Brand Tagline: BEYOND THE BOUNDARY.  
Current Phase: 11  
Phase Name: Complete Media Page & Interactive Gallery Development

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

Act as a senior frontend developer, UI/UX designer, React architect and professional sports website designer.

Your task is to develop a complete, visually impressive and fully responsive Media page for CRICKET27.

This must look like a premium cricket gaming brand's official media website.

Do not create a generic image gallery. Build a cinematic, editorial-style media experience with professional layouts, real visual assets, smooth interactions and polished animations.

### 2. FIRST INSPECT THE EXISTING PROJECT

Before writing or modifying code:

1. Inspect the entire existing project structure.
2. Review all previously completed phases from 01 to 10.
3. Inspect the existing Media route `/media`.
4. Review the current design system, global CSS, typography, colours and components.
5. Review existing navigation and footer.
6. Inspect available images and media assets.
7. Identify reusable gallery, button, modal, animation and layout components.
8. Check the existing package.json and installed dependencies.

IMPORTANT:
- Do not recreate the project.
- Do not replace working files unnecessarily.
- Do not duplicate existing components.
- Do not remove completed functionality.
- Reuse the established CRICKET27 design system.
- Follow the existing project architecture.

### 3. BRAND DESIGN REQUIREMENTS

Maintain the established CRICKET27 visual identity.

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

Visual direction:
- Premium sports editorial design.
- Cinematic cricket photography.
- Modern esports-inspired presentation.
- Bold typography.
- Strong image compositions.
- Clean spacing.
- Sophisticated hover interactions.
- Consistent rounded corners and borders.
- High-quality visual storytelling.

Avoid:
- Generic gallery templates.
- Excessive neon effects.
- Too many gradients.
- Excessive glassmorphism.
- Unnecessary decorative elements.
- Emoji as interface icons.

Use Lucide React icons and professional SVG artwork where appropriate.

### 4. MEDIA PAGE STRUCTURE

Develop the following sections in order.

#### SECTION 1 — MEDIA HERO

Create a full-width cinematic Media page hero.

Requirements:
- Premium cricket stadium background image.
- Dramatic stadium lighting.
- Dark navy image overlay.
- Large editorial heading.
- Subheading and short introduction.
- Subtle entrance animation.
- Responsive hero composition.

Content:

Eyebrow:
CRICKET27 VISUAL UNIVERSE

Main heading:
THE WORLD OF CRICKET27.

Description:
Explore the visual side of CRICKET27 through cricket-inspired artwork, creative concepts, promotional visuals and moments that represent our passion for the sport.

Add a breadcrumb:
Home / Media

#### SECTION 2 — MEDIA INTRODUCTION

Heading:
A VISUAL EXPERIENCE BEYOND THE GAME.

Description:
Discover the creative direction behind CRICKET27. From cinematic cricket-inspired artwork to promotional designs and visual concepts, this collection represents the identity and imagination of our brand.

Use an editorial layout with:
- Large heading.
- Supporting paragraph.
- One prominent cricket visual.
- Asymmetric content arrangement.
- Subtle image reveal animation.

#### SECTION 3 — MEDIA CATEGORY FILTERS

Build a functional category-filtering system.

Categories:

1. All Media
2. Cricket Artwork
3. Promotional Posters
4. Stadium Visuals
5. Game Concepts
6. Brand Visuals

Requirements:
- Interactive filter tabs.
- Active category clearly highlighted.
- Smooth transition when changing categories.
- Correct filtering of gallery items.
- Responsive horizontal scrolling on small screens when necessary.
- Accessible keyboard navigation.
- Proper active and focus states.

IMPORTANT:
The filters must actually work. Do not create decorative buttons that do nothing.

#### SECTION 4 — INTERACTIVE MEDIA GALLERY

Build a premium, responsive image gallery.

Requirements:
- At least 12 gallery items when original visual assets are available.
- Modern editorial grid or masonry-inspired layout.
- Different image aspect ratios.
- Large featured image cards.
- Smaller supporting image cards.
- Consistent spacing.
- Image hover effects.
- Image title and category labels.
- Subtle image zoom.
- Smooth entrance animations.

Each gallery item should support:
- Image.
- Title.
- Category.
- Description.
- Alt text.
- Featured status.
- Image aspect ratio.

When the user clicks an image, open the interactive lightbox.

Do not use blank image placeholders, broken image URLs or repeated unrelated stock photographs to artificially increase gallery size.

Use original AI-generated artwork or appropriately licensed visual assets.

#### SECTION 5 — ADVANCED IMAGE LIGHTBOX

Develop a professional image-preview experience.

Required functionality:

1. Open the selected image in a large overlay.
2. Show image title.
3. Show image category.
4. Show image description.
5. Previous image button.
6. Next image button.
7. Close button.
8. Keyboard Escape to close.
9. Keyboard left/right arrow navigation.
10. Background scroll locking.
11. Proper focus management.
12. Responsive lightbox layout.
13. Smooth opening and closing animations.

IMPORTANT:
- Previous and next navigation must work.
- Do not allow background scrolling while the lightbox is open.
- Restore focus when the lightbox closes.
- Use accessible dialog semantics.
- Ensure mobile touch interaction works properly.

#### SECTION 6 — FEATURED PROMOTIONAL POSTERS

Create a dedicated promotional poster showcase.

Heading:
BUILT TO MAKE AN IMPACT.

Description:
A collection of creative visual concepts that reflect the energy, passion and identity of CRICKET27.

Requirements:
- Large promotional poster presentation.
- At least 3 original poster designs when assets are available.
- Attractive image composition.
- Poster titles.
- Short descriptions.
- Hover interactions.
- Responsive layouts.

Use the following poster concepts as creative direction:

1. Beyond the Boundary.
2. The Spirit of Cricket.
3. A New Cricket Vision.

These are visual design concepts, not announcements of actual game releases or events.

#### SECTION 7 — VIDEO SHOWCASE (OPTIONAL)

Create this section only if actual, usable video assets are available.

Requirements:
- Attractive video thumbnail.
- Play/pause controls when a real video is provided.
- Responsive video container.
- Proper loading behaviour.

Do not:
- Invent video URLs.
- Create fake video players.
- Display nonfunctional play buttons.
- Use unrelated videos.
- Claim that a video is official gameplay if it is only a concept animation.

If no suitable video exists, omit this section cleanly.

#### SECTION 8 — FINAL CALL TO ACTION

Create a premium closing section.

Heading:
READY TO EXPLORE CRICKET27?

Description:
Discover our vision, explore the experience and follow the journey of CRICKET27.

Buttons:

EXPLORE OUR GAME
Route: /our-game

JOIN THE COMMUNITY
Route: /community

Use a cinematic background, subtle motion and Electric Lime CTA styling.

### 5. GALLERY DATA ARCHITECTURE

Keep gallery content separate from the UI.

Use:

src/data/gallery.js

Recommended structure:

- id
- title
- category
- image
- alt
- description
- featured
- aspectRatio

Use clear, reusable data structures.

Make category filtering data-driven rather than hardcoding individual gallery cards.

Use existing project conventions if the gallery data structure already exists.

### 6. ASSET MANAGEMENT

Use these asset locations where they fit the existing architecture:

public/assets/gallery/
public/assets/promotional-posters/
public/assets/videos/

Requirements:

- Use actual original cricket-related artwork.
- Use licensed assets where applicable.
- Generate original visual assets when required.
- Keep filenames meaningful.
- Optimise large images.
- Use WebP or AVIF where supported.
- Add appropriate alt text.
- Use lazy loading for gallery images.
- Provide graceful image-loading and error states.

Do not copy proprietary images, logos or screenshots from Dream Cricket or other cricket games.

Never leave large empty image areas in the final design.

If an image cannot be obtained, use a documented temporary asset with a meaningful visual treatment and report it clearly.

### 7. COMPONENT ARCHITECTURE

Build reusable components following the existing project architecture.

Possible components:

- MediaHero.jsx
- MediaIntroduction.jsx
- MediaCategoryFilter.jsx
- MediaGallery.jsx
- MediaGalleryCard.jsx
- MediaLightbox.jsx
- FeaturedPosters.jsx
- MediaCTA.jsx

These names are suggestions. Reuse existing components wherever possible.

Avoid:
- One enormous Media.jsx component.
- Duplicate gallery implementations.
- Unnecessary dependencies.
- Repeated hardcoded content.

### 8. ADVANCED ANIMATION REQUIREMENTS

Use Framer Motion.

Implement:
- Hero entrance animation.
- Heading reveal.
- Image reveal transitions.
- Gallery stagger animation.
- Hover interactions.
- Category transition animations.
- Lightbox opening and closing.
- CTA entrance animation.

Animations should feel smooth, professional and intentional.

Respect prefers-reduced-motion.

Avoid excessive animations that reduce usability or performance.

### 9. RESPONSIVE DESIGN

Test the entire Media page on:

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
- Images maintain correct proportions.
- Filters remain usable.
- Gallery grid adapts correctly.
- Lightbox fits small screens.
- Buttons are touch-friendly.
- Typography remains readable.
- Navigation and footer remain consistent.

### 10. ACCESSIBILITY

Implement:
- Semantic HTML.
- Accessible filter controls.
- Keyboard navigation.
- Visible focus states.
- Accessible lightbox dialog.
- Correct button labels.
- Image alt text.
- Proper heading hierarchy.
- Sufficient colour contrast.
- Reduced-motion support.

### 11. PERFORMANCE

Optimise:
- Image loading.
- Image dimensions.
- Lazy loading.
- Animation complexity.
- React rendering.
- Unnecessary state updates.
- Component reuse.

Avoid loading every large gallery image immediately.

### 12. STRICT PROJECT RESTRICTIONS

This is a FRONTEND PROMOTIONAL WEBSITE.

Do not build:
- Cricket gameplay.
- Game simulation.
- Game engine.
- Three.js.
- WebGL.
- 3D models.
- 3D environments.
- Backend.
- Node/Express server.
- Database.
- APIs.
- Authentication.
- CMS.
- Admin dashboard.
- Media upload system.
- Payment system.
- Deployment configuration.

Do not modify unrelated pages unless a small shared-component adjustment is necessary.

### 13. FINAL TESTING CHECKLIST

Before completing Phase 11, verify:

[ ] Media page opens at /media.

[ ] Existing navbar and footer work.

[ ] Hero displays the correct visual assets.

[ ] Introduction section displays correctly.

[ ] All six category filters work.

[ ] Gallery displays available images correctly.

[ ] Gallery layout is responsive.

[ ] Lightbox opens and closes correctly.

[ ] Previous and next buttons work.

[ ] Keyboard navigation works.

[ ] Escape closes the lightbox.

[ ] Background scrolling is locked when required.

[ ] Promotional posters display correctly.

[ ] Optional video section is only shown when usable assets exist.

[ ] All CTA links work.

[ ] No broken images.

[ ] No console errors.

[ ] No horizontal overflow.

[ ] ESLint passes.

[ ] Production build succeeds.

### 14. FINAL REPORT

After completing the work, provide:

1. Summary of Phase 11.
2. Components created.
3. Files modified.
4. Assets created or added.
5. Features implemented.
6. Responsive testing results.
7. Accessibility improvements.
8. Performance improvements.
9. ESLint results.
10. Production build results.
11. Any remaining issues.

### 15. PHASE COMPLETION RULE

Complete Phase 11 only.

Do not automatically start Phase 12.

Do not modify other page designs unnecessarily.

Do not remove previously completed functionality.

Preserve all completed phases.

After successful testing, stop and wait for my approval.

**PHASE 11 SUCCESS CRITERIA:**

The CRICKET27 Media page must look like a premium sports gaming brand's official media experience, with real visual assets, working filters, a professional image gallery, a functional lightbox, promotional posters and complete responsive behaviour.