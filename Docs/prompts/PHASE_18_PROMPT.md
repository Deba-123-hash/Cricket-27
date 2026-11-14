# CRICKET27 — PHASE 18 MASTER DEVELOPMENT PROMPT
## Advanced Animation & Motion Design

### 1. PROJECT INFORMATION

Project: CRICKET27  
Tagline: BEYOND THE BOUNDARY.  
Current Phase: 18 of 24  
Phase Name: Advanced Animation & Motion Design

Development tools:
- Google AI Studio
- Antigravity

Frontend technology:
- React
- Vite
- JavaScript JSX
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React

### 2. YOUR ROLE

Act as a senior motion designer, creative frontend developer, Framer Motion specialist and professional sports-brand website animation engineer.

Your task is to transform the existing CRICKET27 website into a polished, cinematic and visually engaging digital experience through carefully designed motion.

The animation quality should feel comparable to premium sports, esports and gaming-brand websites.

Do not make the website look like a collection of random animated elements.

Every animation must have a purpose and support the content, visual hierarchy or user interaction.

### 3. INSPECT THE EXISTING PROJECT FIRST

Before making changes:

1. Inspect the existing React project.
2. Review all completed Phases 01–17.
3. Inspect the global design system.
4. Review existing Framer Motion implementations.
5. Inspect all ten pages.
6. Review navigation and page transitions.
7. Inspect reusable components.
8. Review existing animation CSS.
9. Check for duplicate animation logic.
10. Identify performance issues.

IMPORTANT:
- Preserve all existing pages and components.
- Do not rebuild the website.
- Do not remove working interactions from Phase 17.
- Do not create duplicate animation systems.
- Extend existing animation utilities where possible.
- Keep all existing routes functional.

### 4. ANIMATION DIRECTION

Create a distinctive CRICKET27 motion language.

Brand identity:
- Midnight Navy: #101827
- Electric Lime: #B7F34A
- Warm White: #F5F3EB
- Slate Blue: #263449
- Coral: #FF704D
- Muted Text: #8491A3

Motion personality:
- Cinematic.
- Energetic.
- Confident.
- Smooth.
- Premium.
- Sport-inspired.
- Modern.
- Controlled.

Use a combination of:
- Smooth fade transitions.
- Directional slide reveals.
- Staggered text animations.
- Image masking.
- Scroll-triggered reveals.
- Subtle scale effects.
- Interactive hover animations.
- Page transitions.
- Editorial typography animation.

Avoid:
- Excessive bouncing.
- Continuous unnecessary movement.
- Overly aggressive zooming.
- Random floating objects.
- Distracting background animations.
- Excessive neon effects.

### 5. CENTRAL ANIMATION SYSTEM

Create or improve a central animation utility.

Suggested location:

`src/utils/animations.js`

Include reusable Framer Motion variants:

- fadeIn
- fadeUp
- fadeDown
- slideLeft
- slideRight
- scaleIn
- staggerContainer
- staggerItem
- imageReveal
- textReveal
- pageTransition
- hoverScale
- cardReveal

Use consistent:
- Duration.
- Delay.
- Easing.
- Stagger timing.
- Animation direction.
- Initial states.
- Final states.

Create reusable motion components if useful.

Suggested location:

`src/components/animations/`

Possible components:
- FadeIn.jsx
- RevealOnScroll.jsx
- StaggerContainer.jsx
- TextReveal.jsx
- ImageReveal.jsx
- PageTransition.jsx

Do not create unnecessary components if equivalent components already exist.

### 6. CINEMATIC HOMEPAGE HERO ANIMATION

Improve the existing homepage hero.

Animation sequence:

1. Background image slowly fades in.
2. Add a subtle image scale transition.
3. Brand eyebrow text appears.
4. Main headline reveals line by line.
5. Description fades upward.
6. Primary CTA appears.
7. Secondary CTA appears.
8. Scroll indicator becomes visible.

Headline:

BEYOND  
THE BOUNDARY.

Use premium typography animation.

Possible effects:
- Mask reveal.
- Word-by-word reveal.
- Letter-spacing transition.
- Subtle upward movement.
- Controlled stagger timing.

The final result must remain readable.

Do not hide important content until the visitor scrolls or interacts.

### 7. SCROLL-TRIGGERED STORYTELLING

Implement scroll-triggered animations across existing pages.

Use Framer Motion's viewport capabilities.

Animate:
- Section headings.
- Section descriptions.
- Feature cards.
- News cards.
- Gallery images.
- About sections.
- Game concept visuals.
- Community content.
- FAQ sections.
- Contact information cards.

Requirements:
- Smooth entrance.
- Directional movement.
- Controlled stagger.
- Appropriate viewport trigger.
- No unnecessary repeated animation.
- Avoid layout shifts.

Use once-only reveals for most content.

Where repeat-on-scroll improves the experience, configure it intentionally.

### 8. ADVANCED TEXT REVEAL ANIMATIONS

Create a reusable text-reveal system.

Apply to important headings throughout the website.

Supported effects:
- Word-by-word reveal.
- Line-by-line reveal.
- Mask-based reveal.
- Fade and upward movement.
- Subtle character animation for short display text.

Requirements:
- Preserve correct text layout.
- Avoid breaking screen-reader accessibility.
- Maintain responsive typography.
- Avoid excessive per-character DOM elements.
- Support reduced motion.

Do not animate every paragraph.

Reserve advanced text reveals for important headlines and selected editorial statements.

### 9. IMAGE REVEAL ANIMATIONS

Improve image presentation across the website.

Implement:
- Clip-path reveal.
- Mask reveal.
- Subtle image zoom.
- Fade transitions.
- Directional reveal.
- Hover zoom.
- Image overlay transitions.

Apply to:
- Homepage hero.
- About page imagery.
- Game concept images.
- Features visuals.
- Media gallery.
- News article images.
- Community visuals.

Keep image subjects visible.

Do not crop important cricket players, bats, balls or stadium details.

Respect each image's intended aspect ratio.

### 10. ADVANCED CARD ANIMATIONS

Improve all existing card components.

Target:
- FeatureCard.
- NewsCard.
- GalleryCard.
- MediaCard.
- InformationCard.
- HighlightCard.
- CommunityCard.

Implement:
- Entrance animation.
- Staggered appearance.
- Subtle hover lift.
- Image zoom.
- Overlay transition.
- Border or accent transition.
- Icon movement where appropriate.

Use consistent interaction timing.

Do not make cards jump excessively when hovered.

### 11. ADVANCED BUTTON MICRO-INTERACTIONS

Improve the existing button system.

Implement:
- Smooth hover transition.
- Press feedback.
- Subtle scale adjustment.
- Arrow movement.
- Icon transition.
- Focus-visible animation.
- Disabled-state behaviour.

Maintain existing button variants.

Do not break:
- Internal navigation.
- External links.
- Form submission behaviour.
- Accessible keyboard interaction.

### 12. PAGE TRANSITIONS

Create a reusable page-transition system.

Requirements:
- Smooth route transitions.
- Fade-based entry.
- Subtle vertical movement.
- Controlled exit animation.
- No excessive waiting.
- No broken browser back/forward navigation.
- No unnecessary page reloads.

Integrate with the existing React Router DOM architecture.

Ensure:
- Direct URL access works.
- Browser history works.
- Scroll reset remains correct.
- Dynamic News Details routes remain functional.
- 404 handling remains functional.

Do not introduce a transition that prevents visitors from navigating quickly.

### 13. NAVBAR ANIMATIONS

Improve the existing navbar.

Add:
- Smooth sticky-header transition.
- Background and backdrop changes where appropriate.
- Logo transition.
- Active-link indicator animation.
- Mobile drawer entrance and exit.
- Dropdown opening animation.
- Menu icon transition.

Preserve all Phase 17 accessibility and keyboard behaviours.

### 14. MEDIA GALLERY ANIMATIONS

Improve the existing gallery.

Implement:
- Staggered gallery entrance.
- Filter transition.
- Image reveal.
- Hover zoom.
- Lightbox opening animation.
- Lightbox closing animation.
- Previous/next image transitions.
- Loading-state transitions.

Maintain:
- Existing gallery data.
- Existing filters.
- Existing keyboard controls.
- Escape key behaviour.
- Focus management.
- Responsive layout.

### 15. NEWS AND FAQ ANIMATIONS

News page:
- Article card entrance.
- Search result transitions.
- Category-filter transitions.
- Pagination transitions.
- Featured article reveal.

News Details:
- Article heading reveal.
- Featured image reveal.
- Content-section entrance.
- Related article card animation.

FAQ:
- Accordion expansion.
- Chevron rotation.
- Search result transitions.
- Category-filter transitions.
- Empty-state entrance.

All existing search and filtering functionality must continue working.

### 16. COMMUNITY AND CONTACT ANIMATIONS

Community:
- Hero reveal.
- Community value card entrance.
- Social card hover effects.
- Content image reveals.
- CTA transitions.

Contact:
- Hero animation.
- Contact card entrance.
- Form field focus transitions.
- Validation feedback transitions.
- Submission-state transition.
- CTA animations.

Do not create false submission-success animations.

### 17. LOADING AND STATE TRANSITIONS

Create polished visual transitions for existing frontend states.

Support:
- Loading.
- Empty.
- Error.
- Success.
- Disabled.

Examples:
- Gallery image loading.
- News empty results.
- FAQ empty results.
- Contact form validation.
- Modal opening and closing.
- Toast notifications.

Avoid fake network loading states because this is still a frontend-only website.

### 18. BACKGROUND MOTION AND VISUAL DETAILS

Use subtle decorative motion only where appropriate.

Possible elements:
- Static-to-moving gradient transitions.
- Subtle background texture.
- Gentle light movement.
- Decorative line reveals.
- Section divider animations.
- Minimal accent transitions.

Maintain the existing colour palette.

Do not introduce unnecessary visual elements.

Do not create 3D scenes, WebGL effects or Three.js animations.

### 19. REDUCED MOTION AND ACCESSIBILITY

Respect the visitor's motion preferences.

Implement:
- `prefers-reduced-motion`.
- Framer Motion reduced-motion configuration.
- Disable or simplify nonessential movement.
- Keep content visible without animation.
- Avoid flashing effects.
- Avoid rapid continuous motion.
- Preserve keyboard navigation.
- Preserve screen-reader accessibility.

No important information should depend on animation.

### 20. PERFORMANCE OPTIMISATION

Ensure animations do not negatively affect website performance.

Requirements:
- Prefer transform and opacity animations.
- Avoid excessive layout-triggering properties.
- Avoid unnecessary scroll listeners.
- Avoid excessive animation loops.
- Use viewport-based animation triggers.
- Clean up event listeners.
- Avoid unnecessary React state updates.
- Keep mobile animation lightweight.
- Avoid large animation dependencies.

Use GPU-friendly animation techniques where appropriate.

### 21. RESPONSIVE ANIMATION TESTING

Test animation behaviour at:

Desktop:
- 1440px.
- 1280px.

Tablet:
- 1024px.
- 768px.

Mobile:
- 480px.
- 390px.
- 360px.

Check:
- Hero headline animation.
- Image reveal.
- Navigation transitions.
- Card hover behaviour.
- Mobile touch interactions.
- Gallery lightbox.
- Modal transitions.
- Page transitions.
- Reduced-motion behaviour.

Hover-only effects must have appropriate touch-device alternatives.

### 22. STRICT PROJECT RESTRICTIONS

This phase is frontend motion development only.

DO NOT BUILD:
- Backend.
- APIs.
- Database.
- Authentication.
- CMS.
- Admin dashboard.
- Game engine.
- Cricket gameplay.
- Multiplayer.
- Three.js.
- WebGL.
- 3D models.
- 3D scenes.

Do not change the established technology stack.

Do not redesign the existing brand identity.

Do not automatically start Phase 19.

### 23. TESTING CHECKLIST

[ ] Homepage hero animation works.

[ ] Headline reveal works.

[ ] Scroll-triggered animations work.

[ ] Text reveal works.

[ ] Image reveal works.

[ ] Card animations work.

[ ] Button micro-interactions work.

[ ] Navbar animations work.

[ ] Dropdown transitions work.

[ ] Page transitions work.

[ ] Media gallery animations work.

[ ] Lightbox transitions work.

[ ] News card transitions work.

[ ] FAQ accordion animation works.

[ ] Contact form transitions work.

[ ] Toast animations work.

[ ] Modal animations work.

[ ] Reduced-motion support works.

[ ] Mobile animations work.

[ ] No excessive animation.

[ ] No broken navigation.

[ ] No console errors.

[ ] ESLint passes.

[ ] Production build succeeds.

### 24. FINAL DEVELOPMENT REPORT

After completing Phase 18, provide:

1. Summary of animation improvements.
2. Central animation system details.
3. New reusable animation components.
4. Homepage hero animation details.
5. Scroll-triggered animation details.
6. Text reveal improvements.
7. Image reveal improvements.
8. Card and button animation improvements.
9. Page transition implementation.
10. Gallery and lightbox animation improvements.
11. News and FAQ animation improvements.
12. Mobile animation testing results.
13. Reduced-motion accessibility results.
14. Performance improvements.
15. ESLint results.
16. Production build results.
17. Remaining issues.

### 25. PHASE COMPLETION RULE

Complete Phase 18 only.

Preserve all completed work from Phases 01–17.

Do not rebuild existing pages.

Do not change the established CRICKET27 theme.

Do not introduce backend functionality.

Do not automatically proceed to Phase 19.

After successful implementation and testing, stop and wait for my approval.

**PHASE 18 SUCCESS CRITERIA:**

The complete CRICKET27 website should have a consistent, cinematic and professional motion-design system, with smooth page transitions, scroll reveals, image effects, typography animation and polished micro-interactions without sacrificing accessibility, responsiveness or performance.