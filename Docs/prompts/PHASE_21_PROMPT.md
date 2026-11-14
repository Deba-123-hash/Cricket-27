# CRICKET27 — PHASE 21 MASTER DEVELOPMENT PROMPT
## Advanced Frontend Performance Optimisation

### 1. PROJECT INFORMATION

Project Name: CRICKET27  
Tagline: BEYOND THE BOUNDARY.  
Current Phase: 21 of 24  
Phase Name: Advanced Performance Optimisation

Development Tools:
- Google AI Studio
- Antigravity

Technology Stack:
- React
- Vite
- JavaScript JSX
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React

Performance Tools:
- Lighthouse
- Chrome DevTools
- Vite build analysis
- Browser Performance tools
- Web Vitals measurements

### 2. YOUR ROLE

Act as a senior frontend performance engineer, React optimisation specialist and web performance architect.

Your responsibility is to audit and optimise the complete CRICKET27 website.

The website must deliver:
- Fast initial loading.
- Smooth page navigation.
- Efficient image loading.
- Optimised JavaScript bundles.
- Reduced unnecessary rendering.
- Stable layouts.
- Smooth animations.
- Improved mobile performance.
- Better Core Web Vitals.

The goal is to create a lightweight and production-quality frontend without sacrificing the established visual design.

### 3. INSPECT THE COMPLETE PROJECT FIRST

Before making changes:

1. Inspect the project structure.
2. Review completed Phases 01–20.
3. Inspect package.json.
4. Review installed dependencies.
5. Analyse the Vite configuration.
6. Inspect all ten website pages.
7. Review image assets.
8. Inspect font loading.
9. Review Framer Motion animations.
10. Inspect React rendering behaviour.
11. Review route loading.
12. Check CSS and Tailwind output.
13. Identify large dependencies.
14. Identify unused assets.
15. Run an initial production build.

Establish a baseline before optimisation.

Record actual measurements wherever tools are available.

IMPORTANT:
- Preserve all existing functionality.
- Do not rebuild the website.
- Do not remove important visual content.
- Do not redesign the UI.
- Do not introduce unnecessary libraries.
- Do not claim performance improvements without measurements.

### 4. PERFORMANCE TARGETS

Use the following as optimisation goals, not guaranteed results.

Core Web Vitals targets at the 75th percentile:

| Metric | Target |
|---|---:|
| LCP | 2.5 seconds or less |
| INP | 200 ms or less |
| CLS | 0.1 or less |

Additional Lighthouse goals:

| Category | Goal |
|---|---:|
| Performance | 90+ |
| Accessibility | 90+ |
| Best Practices | 90+ |
| SEO | 90+ |

These are aspirational targets.

Report actual test conditions and measured results.

Do not fake or manually modify Lighthouse scores.

### 5. IMAGE OPTIMISATION

Images are a major part of CRICKET27's visual identity.

Audit every image used throughout the website.

Implement where appropriate:

- WebP conversion.
- AVIF support where suitable.
- Responsive image sources.
- Correct image dimensions.
- Lazy loading.
- Image compression.
- Appropriate image quality.
- Correct object-fit.
- Correct aspect ratios.
- Width and height attributes.
- Efficient mobile image delivery.

Use:
- `srcset`.
- `sizes`.
- `<picture>`.
- `loading="lazy"` for appropriate below-the-fold images.
- `decoding="async"` where appropriate.

For the main hero image:
- Prioritise loading.
- Avoid lazy loading if it is the LCP image.
- Use an appropriate preload strategy when justified.
- Ensure the hero is not delayed by unnecessary scripts.

Do not compress images to visibly poor quality.

Do not replace original assets with unrelated images.

Do not leave broken image URLs.

### 6. JAVASCRIPT BUNDLE OPTIMISATION

Analyse the production JavaScript bundle.

Identify:
- Large dependencies.
- Duplicate libraries.
- Unused imports.
- Unnecessary packages.
- Large page components.
- Heavy animation imports.
- Unnecessary utility code.

Implement appropriate:
- Tree shaking.
- Dynamic imports.
- Code splitting.
- Dependency cleanup.
- Lazy loading.
- Route-based chunking.

Use Vite's build configuration appropriately.

Do not blindly remove dependencies.

Preserve all existing functionality.

### 7. ROUTE-BASED CODE SPLITTING

Optimise the ten website routes.

Routes:
- Home.
- About.
- Our Game.
- Features.
- Media.
- News.
- News Details.
- Community.
- FAQ.
- Contact.

Use React.lazy and Suspense where appropriate.

Requirements:
- Load the homepage efficiently.
- Load internal pages when needed.
- Preserve direct URL access.
- Preserve browser back/forward navigation.
- Preserve dynamic News Details routes.
- Provide polished loading fallbacks.
- Avoid unnecessary layout shifts.

Do not introduce broken route transitions.

### 8. REACT RENDERING OPTIMISATION

Review existing React components.

Identify:
- Unnecessary re-renders.
- Expensive filtering calculations.
- Repeated data processing.
- Excessive state updates.
- Large component trees.
- Unnecessary context updates.
- Repeated event handlers.

Use appropriately:
- React.memo.
- useMemo.
- useCallback.
- useReducer.
- Component splitting.

Optimise only where profiling or code inspection justifies it.

Do not apply memoisation to every component.

Do not sacrifice readability for insignificant performance gains.

### 9. FRAMER MOTION OPTIMISATION

Review all animations developed in Phase 18.

Optimise:
- Scroll-triggered animations.
- Hero animations.
- Page transitions.
- Image reveals.
- Card animations.
- Modal transitions.
- Gallery transitions.
- Text reveals.

Requirements:
- Prefer transform and opacity.
- Avoid excessive layout recalculations.
- Reduce unnecessary animation loops.
- Avoid expensive blur effects.
- Avoid unnecessary parallax.
- Use viewport-based animation triggers.
- Reduce simultaneous animations on mobile.
- Respect reduced-motion preferences.

Keep the premium CRICKET27 motion design.

### 10. FONT OPTIMISATION

Review existing typography assets.

Optimise:
- Font file sizes.
- Font formats.
- Font loading.
- Font weights.
- Unused font variations.
- Font display behaviour.

Use appropriate:
- WOFF2.
- Font subsets where available.
- `font-display: swap`.
- Preloading for critical fonts only.

Avoid loading unnecessary font weights.

Preserve the intended Bebas Neue or Oswald heading style and Inter body typography.

### 11. CSS AND TAILWIND OPTIMISATION

Review the CSS architecture.

Implement improvements where needed:
- Remove unused styles.
- Remove duplicate CSS.
- Reduce unnecessary global selectors.
- Optimise Tailwind configuration.
- Remove unused dependencies.
- Simplify complex selectors.
- Avoid excessive animation CSS.
- Avoid large unused stylesheets.

Preserve all visual styling.

Do not randomly remove classes.

Verify production CSS output.

### 12. LAZY LOADING STRATEGY

Implement lazy loading for appropriate resources.

Potential targets:
- Below-the-fold images.
- Gallery content.
- News images.
- Noncritical page sections.
- Internal page modules.
- Heavy components.

Do not lazy-load critical above-the-fold content unnecessarily.

Avoid loading every page's assets on the homepage.

Use lazy loading based on actual user experience.

### 13. GALLERY PERFORMANCE OPTIMISATION

Review the Media page.

Improve:
- Image loading.
- Image dimensions.
- Filtering performance.
- Gallery rendering.
- Lightbox loading.
- Previous/next transitions.
- Responsive image selection.

Avoid rendering unnecessary heavy image elements.

Preserve:
- Gallery filtering.
- Lightbox navigation.
- Keyboard controls.
- Touch interactions.
- Accessibility.

Do not break Phase 17 functionality.

### 14. NEWS AND FAQ PERFORMANCE

Optimise:
- News search.
- News category filtering.
- Pagination.
- Related article calculations.
- FAQ search.
- FAQ category filtering.
- Accordion rendering.

Use efficient calculations when necessary.

For the current static data sizes, avoid unnecessary advanced search libraries.

Preserve existing behaviour.

### 15. LAYOUT SHIFT REDUCTION

Improve Cumulative Layout Shift.

Check:
- Image dimensions.
- Hero image dimensions.
- Font swapping.
- Card dimensions.
- Dynamic content.
- Navigation height.
- Loading placeholders.
- Modal positioning.
- Toast positioning.

Use:
- Explicit image dimensions.
- Aspect-ratio containers.
- Stable section sizing where appropriate.
- Proper font-loading strategies.

Do not introduce fixed heights that break responsive layouts.

### 16. NETWORK AND RESOURCE OPTIMISATION

Review how the browser loads resources.

Optimise:
- Critical assets.
- Font requests.
- Image requests.
- CSS requests.
- JavaScript chunks.
- Unnecessary external resources.

Use preload, preconnect and other resource hints only where justified.

Avoid excessive third-party requests.

This project remains frontend-only.

Do not introduce backend caching or external services.

### 17. MOBILE PERFORMANCE OPTIMISATION

Pay special attention to low-end Android devices.

Optimise:
- Hero image loading.
- Image sizes.
- JavaScript bundle size.
- Animation complexity.
- DOM size.
- Scroll performance.
- Touch interactions.
- Font loading.
- Memory consumption.

Keep the experience smooth on slower connections.

Do not remove essential design features simply to improve scores.

### 18. VITE BUILD OPTIMISATION

Review `vite.config.js`.

Inspect:
- Build configuration.
- Asset handling.
- Output structure.
- Code splitting.
- Chunk organisation.
- Source maps.
- CSS processing.

Use appropriate production settings.

Avoid excessive manual chunk splitting.

Check whether chunk-size warnings indicate a real issue.

Do not suppress meaningful warnings without addressing their cause.

### 19. PERFORMANCE MONITORING

Use available tools to measure the result.

Recommended tools:
- Lighthouse.
- Chrome DevTools Performance.
- Chrome DevTools Network.
- Vite build output.
- Web Vitals.

Measure:
- Initial load.
- LCP.
- INP where measurable.
- CLS.
- JavaScript bundle size.
- CSS bundle size.
- Image transfer size.
- Route loading.
- Mobile performance.

Distinguish between:
- Lab measurements.
- Real-user field measurements.
- Estimates.
- Measurements that were unavailable.

Do not claim field Core Web Vitals without real-user data.

### 20. ACCESSIBILITY AND PERFORMANCE BALANCE

Ensure performance improvements do not damage accessibility.

Preserve:
- Semantic HTML.
- Keyboard navigation.
- Screen-reader labels.
- Reduced-motion support.
- Visible focus indicators.
- Accessible loading feedback.
- Image alternative text.

Performance and accessibility must work together.

### 21. STRICT PROJECT RESTRICTIONS

This phase is frontend performance optimisation only.

DO NOT BUILD:
- Backend.
- APIs.
- Database.
- Authentication.
- CMS.
- Admin dashboard.
- Payment system.
- Server-side rendering.
- Game engine.
- Cricket gameplay.
- Multiplayer.
- Three.js.
- WebGL.
- 3D models or scenes.

Do not change the established technology stack.

Do not introduce unnecessary packages.

### 22. TESTING CHECKLIST

[ ] Initial performance baseline recorded.

[ ] All ten routes tested.

[ ] Hero image optimised.

[ ] Below-the-fold images lazy-loaded.

[ ] Responsive image delivery reviewed.

[ ] Font loading optimised.

[ ] JavaScript bundle analysed.

[ ] CSS output analysed.

[ ] Route-based code splitting implemented where justified.

[ ] React rendering reviewed.

[ ] Framer Motion performance reviewed.

[ ] Gallery performance tested.

[ ] News search tested.

[ ] FAQ search tested.

[ ] Layout shift reviewed.

[ ] Mobile performance tested.

[ ] Reduced-motion support preserved.

[ ] No broken image URLs.

[ ] No broken routes.

[ ] No console errors.

[ ] ESLint passes.

[ ] Production build succeeds.

[ ] Lighthouse results recorded where available.

### 23. FINAL DEVELOPMENT REPORT

After completing Phase 21, provide:

1. Initial performance audit.
2. Final performance audit.
3. Lighthouse results.
4. Core Web Vitals measurements.
5. Image optimisation details.
6. JavaScript bundle improvements.
7. CSS optimisation details.
8. Route-based code splitting.
9. React rendering improvements.
10. Framer Motion optimisation.
11. Font loading improvements.
12. Lazy loading implementation.
13. Gallery optimisation.
14. Mobile performance improvements.
15. Layout shift improvements.
16. Vite build configuration changes.
17. Before-and-after measurements.
18. ESLint results.
19. Production build results.
20. Remaining performance issues.

Include actual numbers wherever measured.

If a metric could not be measured, clearly say so.

### 24. PHASE COMPLETION RULE

Complete Phase 21 only.

Preserve all work from Phases 01–20.

Do not redesign the website.

Do not remove important features.

Do not introduce backend functionality.

Do not change the established CRICKET27 identity.

Do not automatically start Phase 22.

After successful implementation and testing, stop and wait for my approval.

**PHASE 21 SUCCESS CRITERIA:**

The complete CRICKET27 website should load efficiently, render smoothly, use optimised images and assets, minimise unnecessary JavaScript and deliver a stable, high-performance experience across mobile, tablet and desktop devices.