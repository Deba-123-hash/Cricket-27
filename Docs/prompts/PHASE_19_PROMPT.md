# CRICKET27 — PHASE 19 MASTER DEVELOPMENT PROMPT
## Advanced Responsive Design & Mobile Experience

### 1. PROJECT INFORMATION

Project Name: CRICKET27  
Tagline: BEYOND THE BOUNDARY.  
Current Phase: 19 of 24  
Phase Name: Advanced Responsive Design & Mobile Experience

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

### 2. YOUR ROLE

Act as a senior responsive frontend engineer, mobile UI/UX specialist and professional web optimisation developer.

Your task is to audit, improve and optimise the complete CRICKET27 website for different screen sizes and devices.

The website must deliver a consistent, premium experience across:

- Desktop computers.
- Laptops.
- Tablets.
- Android smartphones.
- iPhones.
- Small-screen devices.
- Landscape mobile devices.

Do not simply scale down desktop layouts.

Design and implement responsive layouts that are appropriate for each device category.

### 3. INSPECT THE EXISTING PROJECT

Before changing anything:

1. Inspect the complete project structure.
2. Review completed Phases 01–18.
3. Inspect all ten website pages.
4. Review existing Tailwind breakpoints.
5. Inspect the homepage layout.
6. Review navbar and mobile navigation.
7. Inspect all card layouts.
8. Review image sizes and aspect ratios.
9. Inspect typography scaling.
10. Review forms and interactive components.
11. Test existing Framer Motion animations on mobile.
12. Identify horizontal overflow and layout issues.

IMPORTANT:
- Preserve all existing functionality.
- Do not rebuild the website.
- Do not remove working components.
- Do not create duplicate responsive components unnecessarily.
- Improve the existing architecture.
- Preserve the CRICKET27 visual identity.

### 4. RESPONSIVE DESIGN STRATEGY

Use a mobile-first responsive development approach.

Maintain the existing CRICKET27 brand theme:

- Midnight Navy: #101827
- Electric Lime: #B7F34A
- Warm White: #F5F3EB
- Slate Blue: #263449
- Coral: #FF704D
- Muted Text: #8491A3

Typography:
- Headings: Bebas Neue or Oswald.
- Body: Inter.

Design requirements:
- Clean spacing.
- Consistent alignment.
- Readable typography.
- Proper image cropping.
- Touch-friendly controls.
- Appropriate content hierarchy.
- No horizontal overflow.
- No overlapping elements.
- No unnecessary empty space.

### 5. RESPONSIVE BREAKPOINT SYSTEM

Review and standardise the existing responsive breakpoints.

Use these target viewport widths for testing:

| Device | Width |
|---|---:|
| Small mobile | 320px |
| Mobile | 360px |
| Mobile | 390px |
| Large mobile | 480px |
| Tablet | 768px |
| Small laptop | 1024px |
| Laptop | 1280px |
| Desktop | 1440px |
| Large desktop | 1920px |

Use Tailwind breakpoints where suitable.

Create custom breakpoints only when the design genuinely requires them.

Avoid unnecessary breakpoint complexity.

### 6. ADVANCED RESPONSIVE NAVIGATION

Improve the existing navigation for every device.

Desktop:
- Full horizontal navigation.
- Proper spacing.
- Active route indicator.
- Responsive logo sizing.
- Contact CTA.
- Dropdown menus where needed.

Tablet:
- Adjust navigation spacing.
- Prevent menu collisions.
- Maintain logo visibility.
- Switch to a compact menu when necessary.

Mobile:
- Compact logo.
- Accessible menu button.
- Full-height or appropriately sized navigation drawer.
- Clear navigation links.
- Contact CTA.
- Smooth opening and closing.
- Escape key support.
- Touch-friendly controls.
- Background scroll locking when required.

Ensure:
- No clipped menu.
- No overlapping navbar elements.
- No horizontal scrolling.
- Correct active-route behaviour.

Preserve Phase 17 interaction functionality.

### 7. HOMEPAGE RESPONSIVE OPTIMISATION

Optimise the complete homepage.

#### Hero section
- Responsive headline size.
- Correct headline line breaks.
- Appropriate image crop.
- Mobile-specific image positioning.
- Readable overlay.
- Responsive CTA arrangement.
- No clipped text.
- Proper hero height.
- Responsive scroll indicator.

#### About section
- Responsive image and text layout.
- Proper stacking on mobile.
- Balanced spacing.

#### Our Game section
- Responsive content arrangement.
- Appropriate image proportions.
- Readable text.

#### Features section
- Responsive feature grid.
- Consistent card heights where practical.
- Touch-friendly interactions.

#### Media preview
- Responsive gallery layout.
- Proper image ratios.
- No image overflow.

#### News preview
- Desktop multi-column grid.
- Tablet-adjusted grid.
- Mobile single-column layout.

#### Community and FAQ
- Responsive section spacing.
- Readable content.
- Accessible buttons and accordions.

#### Final CTA
- Responsive typography.
- Proper button arrangement.
- Correct content alignment.

### 8. RESPONSIVE INTERNAL PAGES

Review and optimise all ten routes.

1. Home.
2. About Us.
3. Our Game.
4. Features.
5. Media.
6. News.
7. News Details.
8. Community.
9. FAQ.
10. Contact.

Every page must receive a dedicated responsive audit.

Do not focus only on the homepage.

### 9. RESPONSIVE TYPOGRAPHY SYSTEM

Create or improve fluid typography.

Use CSS `clamp()` where appropriate.

Optimise:
- Hero headlines.
- Page titles.
- Section headings.
- Card headings.
- Paragraphs.
- Captions.
- Buttons.
- Navigation labels.
- Form labels.
- Article content.

Requirements:
- No excessively large mobile headings.
- No unreadably small body text.
- Good line-height.
- Balanced text width.
- Appropriate line breaks.
- Consistent heading hierarchy.

Preserve Bebas Neue or Oswald and Inter.

### 10. RESPONSIVE GRID AND LAYOUT SYSTEM

Improve existing layout components.

Implement appropriate responsive behaviour for:

- Containers.
- Columns.
- Feature grids.
- News grids.
- Gallery grids.
- Card groups.
- Split layouts.
- Image-text sections.
- Footer columns.

Requirements:
- Consistent maximum content width.
- Fluid spacing.
- Responsive gaps.
- Proper stacking order.
- Correct alignment.
- No unintended overflow.

Use CSS Grid and Flexbox appropriately.

Do not force every section into the same layout.

### 11. RESPONSIVE IMAGE OPTIMISATION

Review every image used across the website.

Requirements:
- Appropriate image aspect ratios.
- Responsive width and height.
- Correct object-fit.
- Correct object-position.
- No stretched images.
- No broken image links.
- No unnecessary oversized assets.

Use responsive image techniques where appropriate:
- `srcset`.
- `sizes`.
- `<picture>`.
- WebP or AVIF where supported.
- Lazy loading for below-the-fold images.
- Appropriate dimensions to reduce layout shift.

Create mobile-specific image crops only when they materially improve composition.

Do not use unrelated replacement images.

Do not leave blank image areas.

### 12. RESPONSIVE CARD SYSTEM

Optimise all existing cards.

Components:
- FeatureCard.
- NewsCard.
- GalleryCard.
- MediaCard.
- InformationCard.
- HighlightCard.
- CommunityCard.

Desktop:
- Balanced multi-column layouts.
- Consistent card spacing.
- Appropriate hover interactions.

Tablet:
- Adjust column count.
- Prevent cramped content.
- Maintain readable typography.

Mobile:
- Single-column or appropriate compact layouts.
- Full-width cards where suitable.
- Touch-friendly controls.
- Appropriate image heights.
- Readable descriptions.

Do not force fixed heights when content requires flexibility.

### 13. RESPONSIVE MEDIA GALLERY

Improve the Media page for mobile and tablet.

Requirements:
- Responsive gallery columns.
- Appropriate image crops.
- Touch-friendly filters.
- Scrollable filter controls where necessary.
- Responsive lightbox.
- Touch-friendly previous/next controls.
- Proper close button placement.
- Keyboard accessibility on supported devices.
- No viewport overflow.

The lightbox must fit small screens without cropping essential controls.

Preserve all existing Phase 17 and 18 gallery functionality.

### 14. RESPONSIVE NEWS EXPERIENCE

Optimise:
- News listing.
- Featured article.
- Search bar.
- Category filters.
- Pagination.
- News Details.
- Related articles.

Mobile:
- Full-width search.
- Touch-friendly category controls.
- Appropriate article image sizing.
- Readable article typography.
- Comfortable content width.
- Stacked related article cards.
- Proper pagination spacing.

Do not break existing filtering and routing.

### 15. RESPONSIVE FORMS

Improve the Contact form.

Requirements:
- Full-width mobile inputs.
- Proper label spacing.
- Touch-friendly select controls.
- Comfortable textarea dimensions.
- Readable validation errors.
- Accessible checkbox.
- Responsive submit button.
- No horizontal overflow.
- Appropriate keyboard behaviour.

Preserve all existing frontend-only validation.

Do not add backend submission.

### 16. RESPONSIVE FOOTER

Optimise the global footer.

Desktop:
- Multi-column layout.
- Brand information.
- Navigation links.
- Social links.
- Legal placeholders.

Tablet:
- Balanced column arrangement.

Mobile:
- Stacked footer sections.
- Appropriate spacing.
- Readable links.
- Touch-friendly social icons.
- Responsive logo.
- Correct copyright alignment.

Do not invent social media URLs.

### 17. TOUCH INTERACTION OPTIMISATION

Optimise all interactive components for touch devices.

Review:
- Navigation.
- Dropdowns.
- Buttons.
- Tabs.
- Accordions.
- Modals.
- Toasts.
- Gallery filters.
- Lightbox.
- Search.
- Pagination.
- Contact form.

Requirements:
- Adequate touch target sizes.
- Clear active states.
- No hover-only functionality.
- Appropriate tap feedback.
- No accidental overlapping controls.
- No difficult-to-use tiny icons.

Aim for approximately 44 × 44 CSS pixels for important touch controls where practical.

### 18. LANDSCAPE MOBILE OPTIMISATION

Test mobile landscape layouts.

Check:
- Navbar height.
- Hero height.
- Hero headline.
- CTA visibility.
- Modal dimensions.
- Gallery lightbox.
- Navigation drawer.
- Footer layout.

Prevent content from being hidden behind the viewport.

Use viewport-relative sizing carefully.

### 19. RESPONSIVE ANIMATION OPTIMISATION

Review all Phase 18 animations.

Requirements:
- Smooth mobile transitions.
- Lightweight scroll animations.
- No excessive parallax.
- No large unnecessary movement.
- Touch-compatible hover alternatives.
- Reduced-motion support.
- Avoid animation-related layout shifts.

Do not remove important animation effects unnecessarily.

Adjust them for mobile performance.

### 20. MOBILE PERFORMANCE

Optimise the mobile experience.

Review:
- Image loading.
- Font loading.
- CSS delivery.
- JavaScript bundle size.
- Lazy loading.
- Component rendering.
- Animation performance.
- Layout stability.

Avoid unnecessary dependencies.

Use responsive image assets and code splitting where appropriate.

Do not introduce a complex performance system.

### 21. CROSS-DEVICE TESTING

Test all ten pages at:

- 320px.
- 360px.
- 390px.
- 480px.
- 768px.
- 1024px.
- 1280px.
- 1440px.
- 1920px.

Use browser responsive mode and automated browser testing if the existing environment supports it.

Check:
- Layout overflow.
- Text wrapping.
- Image cropping.
- Navigation.
- Interactive components.
- Forms.
- Footer.
- Animation behaviour.
- Landscape mobile.

Do not claim physical-device testing unless it was actually performed.

### 22. STRICT PROJECT RESTRICTIONS

This phase is frontend responsive optimisation only.

DO NOT BUILD:
- Backend.
- APIs.
- Database.
- Authentication.
- CMS.
- Admin dashboard.
- Payment system.
- Game engine.
- Cricket gameplay.
- Multiplayer.
- Three.js.
- WebGL.
- 3D models or scenes.

Maintain:
- React.
- Vite.
- JavaScript JSX.
- Tailwind CSS.
- React Router DOM.
- Framer Motion.
- Lucide React.

### 23. RESPONSIVE TESTING CHECKLIST

[ ] Homepage works at 320px.

[ ] Homepage works at 360px.

[ ] Homepage works at 390px.

[ ] Homepage works at 480px.

[ ] Homepage works at 768px.

[ ] Homepage works at 1024px.

[ ] Homepage works at 1280px.

[ ] Homepage works at 1440px.

[ ] Homepage works at 1920px.

[ ] All nine internal pages are responsive.

[ ] No horizontal overflow.

[ ] No broken layouts.

[ ] No overlapping text.

[ ] Images maintain correct proportions.

[ ] Mobile navigation works.

[ ] Dropdowns work on touch.

[ ] Tabs work on mobile.

[ ] Accordions work on mobile.

[ ] Modals fit small screens.

[ ] Gallery lightbox works on mobile.

[ ] Search and filters remain usable.

[ ] Contact form works on mobile.

[ ] Footer layout is responsive.

[ ] Landscape mode is usable.

[ ] Reduced-motion preferences are respected.

[ ] No major mobile performance issues.

[ ] ESLint passes.

[ ] Production build succeeds.

### 24. FINAL DEVELOPMENT REPORT

After completing Phase 19, provide:

1. Responsive audit summary.
2. Breakpoint system improvements.
3. Navbar improvements.
4. Homepage responsive improvements.
5. Internal page improvements.
6. Typography improvements.
7. Grid and layout improvements.
8. Image optimisation details.
9. Card system improvements.
10. Gallery improvements.
11. News and FAQ improvements.
12. Contact form improvements.
13. Footer improvements.
14. Touch interaction improvements.
15. Landscape mobile testing results.
16. Performance improvements.
17. Browser testing results.
18. ESLint results.
19. Production build results.
20. Remaining responsive issues.

### 25. PHASE COMPLETION RULE

Complete Phase 19 only.

Preserve all work from Phases 01–18.

Do not rebuild existing pages.

Do not change the CRICKET27 visual identity.

Do not introduce backend functionality.

Do not automatically start Phase 20.

After successful implementation and testing, stop and wait for my approval.

**PHASE 19 SUCCESS CRITERIA:**

The entire CRICKET27 website must deliver a polished, consistent and fully usable responsive experience across mobile, tablet, laptop and desktop screen sizes, with no major layout overflow, broken navigation, unreadable text or unusable interactive components.