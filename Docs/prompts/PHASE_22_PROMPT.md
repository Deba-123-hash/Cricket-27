# CRICKET27 — PHASE 22 MASTER DEVELOPMENT PROMPT
## Advanced SEO, Accessibility & Browser Compatibility

### 1. PROJECT INFORMATION

Project Name: CRICKET27  
Tagline: BEYOND THE BOUNDARY.  
Current Phase: 22 of 24  
Phase Name: Advanced SEO, Accessibility & Browser Compatibility

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

Testing Tools:
- Lighthouse
- Chrome DevTools
- WAVE Accessibility Evaluation Tool
- axe DevTools
- BrowserStack or available browser testing tools
- Google Search Console preparation

### 2. YOUR ROLE

Act as a senior technical SEO specialist, accessibility engineer, frontend quality engineer and browser compatibility specialist.

Your responsibility is to improve the complete CRICKET27 website across three important areas:

1. Technical and on-page SEO.
2. Accessibility and WCAG compliance.
3. Cross-browser compatibility.

The objective is to create a website that is discoverable, understandable, accessible and reliable across modern browsers.

Do not redesign the website.

Do not introduce backend functionality.

### 3. INSPECT THE COMPLETE PROJECT FIRST

Before modifying anything:

1. Inspect completed Phases 01–21.
2. Review all ten website pages.
3. Inspect React Router configuration.
4. Review the existing HTML document structure.
5. Inspect page titles and meta descriptions.
6. Review heading hierarchy.
7. Inspect image alt text.
8. Review internal links.
9. Inspect navigation accessibility.
10. Review form accessibility.
11. Inspect keyboard interactions.
12. Review modal and dropdown accessibility.
13. Inspect animation and reduced-motion support.
14. Review existing CSS compatibility.
15. Run an initial Lighthouse audit.

Prepare an initial SEO and accessibility audit.

Preserve existing functionality and design.

### 4. TECHNICAL SEO ARCHITECTURE

Improve the website's technical SEO foundation.

Implement or improve:

- Page-specific document titles.
- Unique meta descriptions.
- Canonical URL configuration.
- Open Graph metadata.
- Social sharing metadata.
- Proper heading hierarchy.
- Semantic HTML.
- Internal linking.
- Descriptive image alt text.
- Search-engine-friendly URLs.
- Robots.txt.
- XML sitemap.
- Favicon configuration.
- Web manifest where appropriate.

Do not add fake business information.

Do not invent company addresses, phone numbers, registration information or launch dates.

### 5. PAGE-SPECIFIC SEO

Optimise all ten routes individually.

**Home**
- Title: CRICKET27 | Beyond the Boundary
- Description: Discover CRICKET27, a cricket gaming brand concept built around the passion, intensity and excitement of cricket.

**About Us**
- Unique title describing the CRICKET27 brand story.
- Description explaining the brand vision and values.

**Our Game**
- Unique title describing the CRICKET27 game concept.
- Description about the cricket gaming vision.

**Features**
- Unique title focused on the CRICKET27 feature concepts.
- Description covering the proposed cricket experience.

**Media**
- Unique title describing CRICKET27 media and visual content.
- Description about artwork, promotional posters and concept visuals.

**News**
- Unique title describing CRICKET27 news and updates.
- Description about brand and concept updates.

**News Details**
- Dynamic title using the actual article title.
- Dynamic description using the article excerpt.
- Appropriate canonical URL for the article.

**Community**
- Unique title describing the CRICKET27 community vision.
- Description about cricket culture and community.

**FAQ**
- Unique title describing CRICKET27 frequently asked questions.
- Description covering brand, game concept and availability information.

**Contact**
- Unique title describing contact and enquiries.
- Description explaining the available contact interface.

These are starting examples. Refine the metadata according to actual page content.

Do not keyword-stuff.

Do not imply that planned features are already available.

### 6. DYNAMIC SEO METADATA SYSTEM

Create or improve a reusable SEO component.

Suggested file:

`src/components/common/SEO.jsx`

Support:
- Page title.
- Meta description.
- Canonical URL.
- Open Graph title.
- Open Graph description.
- Open Graph image.
- Twitter card metadata.

Integrate it into all ten pages.

For News Details:
- Use the article title.
- Use the article excerpt.
- Use the actual article image where appropriate.
- Use a valid canonical URL.

IMPORTANT:

React-based client-side metadata does not guarantee that every crawler will execute JavaScript.

Document this limitation and evaluate prerendering or server-rendering only as a separate future requirement.

Do not silently introduce a backend or change the current frontend architecture.

### 7. STRUCTURED DATA

Add structured data only where the information is accurate and eligible.

Potential schema types:
- Organization, only when actual organisation details are supplied.
- WebSite.
- WebPage.
- Article or NewsArticle for genuine editorial articles.
- BreadcrumbList.

Requirements:
- Valid JSON-LD.
- No invented business details.
- No fake ratings.
- No fake reviews.
- No fabricated launch dates.
- No unsupported availability claims.
- No misleading structured data.

Validate the generated structured data.

Do not add irrelevant schema types.

### 8. ROBOTS.TXT AND XML SITEMAP

Create or improve:

`public/robots.txt`

`public/sitemap.xml`

Requirements:
- Include the correct production domain only when it has been provided.
- Do not invent a production domain.
- Include canonical public page URLs only when the domain is verified.
- Include appropriate dynamic News Details URLs for actual articles.
- Exclude invalid or nonexistent routes.
- Do not accidentally block important public pages.
- Keep sitemap entries synchronised with actual routes.

If the final domain is not known, use a clearly documented configuration placeholder and explain what must be replaced before production.

### 9. SEMANTIC HTML IMPROVEMENTS

Review all ten pages.

Use appropriate semantic elements:
- header.
- nav.
- main.
- section.
- article.
- aside.
- footer.
- figure.
- figcaption.

Ensure:
- One clear primary page heading.
- Logical heading hierarchy.
- Correct button elements.
- Correct anchor elements.
- Meaningful lists.
- Descriptive link labels.
- No unnecessary generic div wrappers.

Do not change the visual design simply to add semantic elements.

### 10. ADVANCED IMAGE SEO

Review all website images.

Implement:
- Descriptive alt text.
- Empty alt attributes for decorative images.
- Descriptive file names where appropriate.
- Correct image dimensions.
- Appropriate image formats.
- Image sitemap consideration where useful.
- Responsive image metadata.

Avoid:
- Keyword-stuffed alt text.
- Generic alt text for every image.
- Repeating the same alt text unnecessarily.
- Misleading image descriptions.

Make sure the description reflects the actual image.

### 11. INTERNAL LINKING AND NAVIGATION SEO

Review internal navigation across all pages.

Requirements:
- Descriptive anchor text.
- Correct internal routes.
- Breadcrumbs where useful.
- Related news links.
- Related page links.
- No broken internal links.
- No unnecessary redirect chains.

Preserve the current URL structure.

Ensure every public page can be reached through appropriate navigation or internal links.

### 12. ACCESSIBILITY STANDARD

Target WCAG 2.2 Level AA where applicable.

Conduct a complete accessibility review.

Check:
- Colour contrast.
- Keyboard navigation.
- Screen-reader support.
- Focus visibility.
- Form labels.
- Semantic structure.
- Interactive controls.
- Modal behaviour.
- Dropdown behaviour.
- Accordion behaviour.
- Images.
- Error messages.
- Reduced motion.

Do not claim formal WCAG certification.

Report actual test coverage and any remaining issues.

### 13. KEYBOARD ACCESSIBILITY

Ensure all important interactions work using a keyboard.

Test:
- Tab.
- Shift + Tab.
- Enter.
- Space.
- Escape.
- Arrow keys where appropriate.

Review:
- Navbar.
- Mobile menu.
- Dropdowns.
- Tabs.
- Accordions.
- Modals.
- Gallery lightbox.
- Search controls.
- Pagination.
- Contact form.
- Toast dismiss controls.

Requirements:
- Logical focus order.
- Visible focus indicators.
- No keyboard traps outside intended modal focus trapping.
- Correct focus restoration.
- Skip-to-content link where appropriate.

### 14. SCREEN READER ACCESSIBILITY

Improve screen-reader support.

Implement where appropriate:
- Accessible names.
- ARIA labels.
- ARIA descriptions.
- ARIA expanded states.
- ARIA selected states.
- Dialog semantics.
- Live regions.
- Form error announcements.
- Meaningful link text.

Use native HTML semantics first.

Do not add unnecessary ARIA attributes.

Ensure icon-only buttons have accessible names.

### 15. COLOUR CONTRAST AND VISUAL ACCESSIBILITY

Review the CRICKET27 colour palette.

Check:
- Body text.
- Muted text.
- Button labels.
- Navigation links.
- Input labels.
- Form errors.
- Badges.
- Focus indicators.
- Disabled controls.

Target:
- 4.5:1 contrast for normal text.
- 3:1 contrast for large text.
- Appropriate non-text contrast for essential UI controls.

Preserve the Midnight Navy and Electric Lime identity.

Adjust individual combinations only where necessary.

### 16. FORM ACCESSIBILITY

Review the Contact page form.

Ensure:
- Every input has a visible label.
- Required fields are identified.
- Error messages are associated with fields.
- Invalid fields are clearly indicated.
- Validation is keyboard accessible.
- Success and error feedback is announced appropriately.
- Checkbox labels are clickable.
- Select controls are accessible.
- Focus remains predictable.

Preserve the existing frontend-only form behaviour.

Do not add email delivery or backend submission.

### 17. MOTION ACCESSIBILITY

Review Phase 18 animations.

Requirements:
- Respect prefers-reduced-motion.
- Avoid flashing effects.
- Avoid unnecessary continuous movement.
- Keep content available without animation.
- Ensure text remains readable.
- Avoid motion that interferes with interaction.

Maintain a premium animation experience for visitors who have not requested reduced motion.

### 18. CROSS-BROWSER COMPATIBILITY

Test the website on available modern browsers.

Target:

**Desktop**
- Google Chrome.
- Microsoft Edge.
- Mozilla Firefox.
- Safari where available.

**Mobile**
- Chrome on Android.
- Safari on iOS where available.

Check:
- Navigation.
- Typography.
- CSS layout.
- Images.
- Framer Motion animations.
- Modals.
- Dropdowns.
- Forms.
- Gallery lightbox.
- Page transitions.
- Responsive layouts.

Do not claim testing on a browser or physical device that was not actually tested.

### 19. CSS AND JAVASCRIPT COMPATIBILITY

Review:
- CSS features.
- Responsive units.
- Flexbox.
- Grid.
- Sticky positioning.
- Viewport units.
- Backdrop filters.
- Clip-path effects.
- CSS transitions.
- JavaScript APIs.

Provide graceful fallbacks for important visual functionality when necessary.

Avoid introducing browser-specific hacks without a clear reason.

Do not remove premium visual effects unnecessarily.

### 20. SEO AND ACCESSIBILITY TESTING TOOLS

Use available tools where possible:

- Lighthouse.
- axe DevTools.
- WAVE.
- Browser DevTools.
- Google Rich Results Test where appropriate.
- Schema Markup Validator.
- HTML validation tools.

Record:
- SEO issues.
- Accessibility violations.
- Contrast issues.
- Broken links.
- Metadata problems.
- Structured data errors.
- Browser compatibility issues.

Do not report tests as passed unless they were performed.

### 21. STRICT PROJECT RESTRICTIONS

This phase is frontend SEO, accessibility and browser compatibility only.

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

Do not change the established frontend technology stack.

Do not invent company or game information.

### 22. FINAL TESTING CHECKLIST

[ ] All ten routes have unique titles.

[ ] All ten routes have appropriate descriptions.

[ ] Dynamic News Details metadata works.

[ ] Canonical URL handling is configured correctly.

[ ] Open Graph metadata is configured.

[ ] Social sharing metadata is configured.

[ ] Structured data is valid where implemented.

[ ] robots.txt is configured.

[ ] Sitemap is configured without invented URLs.

[ ] Image alt text is reviewed.

[ ] Heading hierarchy is logical.

[ ] Semantic HTML is reviewed.

[ ] Internal links work.

[ ] No broken routes.

[ ] Keyboard navigation works.

[ ] Screen-reader labels are present.

[ ] Modal accessibility works.

[ ] Dropdown accessibility works.

[ ] Form accessibility works.

[ ] Colour contrast is checked.

[ ] Reduced-motion support works.

[ ] Desktop browser compatibility is tested.

[ ] Mobile browser compatibility is tested where available.

[ ] No console errors.

[ ] ESLint passes.

[ ] Production build succeeds.

### 23. FINAL DEVELOPMENT REPORT

After completing Phase 22, provide:

1. Initial SEO audit.
2. Final SEO improvements.
3. Page-specific metadata summary.
4. Dynamic metadata implementation.
5. Structured data implementation.
6. Sitemap and robots.txt status.
7. Internal linking improvements.
8. Image SEO improvements.
9. Semantic HTML improvements.
10. Accessibility audit summary.
11. WCAG 2.2 AA review results.
12. Keyboard testing results.
13. Screen-reader testing results.
14. Colour contrast results.
15. Form accessibility improvements.
16. Reduced-motion improvements.
17. Browser compatibility results.
18. Lighthouse results.
19. ESLint results.
20. Production build results.
21. Remaining issues.

Clearly distinguish verified results from recommendations.

### 24. PHASE COMPLETION RULE

Complete Phase 22 only.

Preserve all work from Phases 01–21.

Do not redesign the website.

Do not rebuild existing pages.

Do not introduce backend functionality.

Do not change the established CRICKET27 identity.

Do not automatically start Phase 23.

After successful implementation and testing, stop and wait for my approval.

**PHASE 22 SUCCESS CRITERIA:**

The complete CRICKET27 website must have page-specific SEO, technically correct metadata, accessible interactions, semantic HTML, keyboard support, appropriate colour contrast and reliable compatibility with modern browsers.