# CRICKET27 — PHASE 03
# COMPLETE UI/UX DESIGN SYSTEM & REUSABLE COMPONENT LIBRARY

## 1. YOUR ROLE

Act as a Senior UI/UX Designer, Senior Frontend Developer, Design System Architect, Professional Gaming Website Designer and Senior Animation Developer.

Your responsibility is to convert the CRICKET27 brand identity into a complete, reusable, production-quality UI/UX design system.

Think like a professional design team building a premium international sports gaming website.

Target quality: 9/10.

Every component must have a clear visual purpose, consistent styling, good usability and responsive behaviour.

## 2. PROJECT CONTEXT

Project: CRICKET27

Website type: Premium 2D cricket gaming brand website.

Tagline: BEYOND THE BOUNDARY.

The website contains these pages:

1. Home
2. About Us
3. Our Game
4. Features
5. Media
6. News
7. News Details
8. Community
9. FAQ
10. Contact

The website is promotional and community-focused.

IMPORTANT:
This is NOT the playable cricket game. Do not develop gameplay or game engine functionality.

## 3. FIRST TASK — INSPECT PREVIOUS PHASES

Before implementation:

1. Inspect the complete Phase 01 architecture.
2. Review the Phase 02 brand identity.
3. Review logo assets and variations.
4. Review colour variables.
5. Review typography.
6. Review existing CSS and Tailwind configuration.
7. Review existing components.
8. Preserve all working code.
9. Identify inconsistencies before making changes.

Do not recreate the project from scratch.

The Phase 02 brand identity must remain the visual foundation.

## 4. DESIGN SYSTEM PRINCIPLES

Follow these principles:

- Consistency.
- Reusability.
- Visual hierarchy.
- Accessibility.
- Responsive behaviour.
- Maintainability.
- Performance.
- Clear interaction feedback.
- Minimal visual clutter.
- Strong brand identity.

Do not make every component look identical. Create visual variety while maintaining a unified design language.

## 5. DESIGN TOKENS

Create or refine centralised design tokens for:

### A. Colours

Use the established Phase 02 palette:

- Midnight Navy: #101827
- Electric Lime: #B7F34A
- Warm White: #F5F3EB
- Slate Blue: #263449
- Coral: #FF704D
- Muted Text: #8491A3

Define:
- Primary background.
- Secondary background.
- Elevated surfaces.
- Primary text.
- Secondary text.
- Muted text.
- Borders.
- Accent.
- Success.
- Warning.
- Error.
- Focus states.

### B. Typography

Define:
- Display.
- H1.
- H2.
- H3.
- H4.
- H5.
- Body large.
- Body regular.
- Body small.
- Label.
- Caption.
- Navigation.
- Button.

Provide responsive font sizing and readable line heights.

### C. Spacing

Create a consistent spacing scale.

Use a predictable system for:
- Component padding.
- Section padding.
- Card gaps.
- Content spacing.
- Page margins.
- Navigation spacing.

### D. Layout

Define:
- Maximum content width.
- Wide content width.
- Standard container.
- Narrow content width.
- Grid gaps.
- Responsive breakpoints.
- Section spacing.

### E. Other tokens

Define:
- Border radius.
- Border thickness.
- Shadows.
- Focus rings.
- Transition duration.
- Animation easing.
- Layering and z-index conventions.

Keep all tokens centralised.

## 6. REUSABLE COMPONENT LIBRARY

Create reusable components inside the existing src/components directory.

### A. Common Components

Create:

1. Button.jsx
2. IconButton.jsx
3. Container.jsx
4. SectionHeading.jsx
5. Badge.jsx
6. Divider.jsx
7. Breadcrumb.jsx
8. LoadingSpinner.jsx
9. EmptyState.jsx
10. ErrorState.jsx
11. BackToTop.jsx
12. PageHeader.jsx

Each component should have clear props and reusable styling.

### B. Button System

Create button variants:

- Primary.
- Secondary.
- Outline.
- Ghost.
- Text.
- Icon.

Button sizes:
- Small.
- Medium.
- Large.

Support:
- Hover.
- Active.
- Focus.
- Disabled.
- Loading.

Use Framer Motion only when it improves interaction quality.

### C. Card System

Create:

1. FeatureCard.
2. NewsCard.
3. GalleryCard.
4. MediaCard.
5. InformationCard.
6. HighlightCard.
7. CommunityCard.

Card design should support:
- Image.
- Heading.
- Description.
- Category.
- Optional date.
- Optional link.
- Hover treatment.

Do not force all cards into the same visual layout.

### D. Typography Components

Create reusable heading and text styles.

Use semantic heading elements.

Maintain proper heading hierarchy across all pages.

### E. Image Components

Prepare reusable image presentation components:

- ResponsiveImage.
- ImageWithOverlay.
- ImageCard.
- BackgroundImageSection.

Requirements:
- Correct image aspect ratios.
- Object-fit handling.
- Responsive behaviour.
- Accessible alt text.
- Loading behaviour.
- Graceful fallback for missing assets.

Do not create arbitrary image URLs.

## 7. LAYOUT COMPONENTS

Create reusable layout utilities:

- StandardContainer.
- WideContainer.
- NarrowContainer.
- SectionWrapper.
- SplitLayout.
- ResponsiveGrid.
- ContentWithImage.

Requirements:
- Consistent maximum widths.
- Responsive spacing.
- Predictable alignment.
- Mobile-first behaviour.
- Reusable layout rules.

## 8. NAVIGATION UI FOUNDATION

Prepare reusable navigation visual components:

- NavigationLink.
- DropdownMenu.
- MobileMenuButton.
- SocialLink.
- Breadcrumb.

Do not redesign the complete global navbar in this phase. That belongs to Phase 04.

Only establish reusable navigation-related UI primitives.

## 9. INTERACTION AND MICRO-ANIMATION SYSTEM

Create a consistent motion language using Framer Motion.

Prepare reusable animation presets for:

- Fade in.
- Fade up.
- Fade down.
- Slide in.
- Stagger children.
- Scale in.
- Hover lift.
- Button press.
- Image reveal.

Requirements:

1. Use subtle motion.
2. Avoid excessive bouncing.
3. Avoid unnecessary animation loops.
4. Respect prefers-reduced-motion.
5. Avoid performance-heavy scroll handlers.
6. Keep animation definitions reusable.
7. Use GPU-friendly properties when possible.
8. Do not animate every element.

Prepare animation presets in a central file such as:

src/utils/animations.js

## 10. ACCESSIBILITY SYSTEM

Implement professional accessibility standards.

Requirements:

- Semantic HTML.
- Keyboard-accessible controls.
- Visible focus states.
- Proper button labels.
- Accessible link names.
- Sufficient colour contrast.
- Image alt text.
- Reduced-motion support.
- Proper form labels.
- Logical heading hierarchy.

Do not rely only on colour to communicate status.

## 11. RESPONSIVE DESIGN SYSTEM

Test the component library at:

- Large desktop.
- Standard desktop.
- Tablet.
- Mobile.
- Small mobile.

Ensure:
- Cards adapt to available width.
- Buttons remain usable.
- Text does not overflow.
- Images maintain their proportions.
- Grid layouts collapse correctly.
- Spacing adjusts appropriately.
- Interactive elements remain accessible.

Use the existing responsive system rather than adding conflicting breakpoints.

## 12. COMPONENT SHOWCASE PAGE

Create a temporary development-only component showcase.

It should demonstrate:

1. Colour palette.
2. Typography.
3. Buttons.
4. Badges.
5. Cards.
6. Containers.
7. Responsive grids.
8. Image treatments.
9. Dividers.
10. Animation examples.
11. Interactive states.

The showcase should be organised into clear sections.

Use real CRICKET27 branding and visual styles.

Do not add this showcase to the public navigation.

It may be available through a development-only route such as /design-system.

Ensure it is excluded from production access or clearly treated as an internal preview.

## 13. CODE ORGANISATION

Follow these rules:

- Keep each component focused.
- Avoid giant component files.
- Use JSX.
- Separate styles and reusable logic where appropriate.
- Use descriptive component names.
- Avoid duplicate CSS.
- Avoid excessive dependencies.
- Reuse existing design tokens.
- Keep data separate from presentation.
- Use Lucide React for professional interface icons.
- Do not use emoji as UI icons.

Do not introduce TypeScript.

## 14. STRICT LIMITATIONS

This phase is UI/UX design system development only.

Do not:
- Build the complete homepage.
- Build all ten finished pages.
- Implement backend.
- Implement database.
- Implement APIs.
- Implement authentication.
- Create game functionality.
- Add Three.js or WebGL.
- Start deployment.
- Change the brand identity without a clear reason.

Do not automatically proceed to Phase 04.

## 15. QUALITY CONTROL

After implementation:

1. Test every reusable component.
2. Test button states.
3. Test card layouts.
4. Test responsive grids.
5. Check typography.
6. Check colour contrast.
7. Check animation performance.
8. Check keyboard accessibility.
9. Check reduced-motion behaviour.
10. Check console errors.
11. Run ESLint.
12. Run production build.

Fix errors introduced during this phase.

## 16. PHASE 03 COMPLETION CRITERIA

Phase 03 is complete when:

- Design tokens are centralised.
- Typography system is reusable.
- Button system is complete.
- Card system is complete.
- Common UI components are available.
- Layout primitives are available.
- Animation presets are centralised.
- Accessibility foundations are implemented.
- Responsive components work.
- Component showcase is available.
- Existing routing and branding still work.
- Production build succeeds.

## 17. FINAL REPORT

Provide:

1. Design system summary.
2. Design tokens created.
3. Reusable components created.
4. Component folder structure.
5. Animation presets.
6. Responsive testing results.
7. Accessibility improvements.
8. Files created or modified.
9. ESLint results.
10. Production build results.
11. Remaining issues.

Do not start Phase 04 automatically.

Complete only Phase 03 and wait for my approval.