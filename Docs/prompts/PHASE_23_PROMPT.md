# CRICKET27 — PHASE 23 MASTER DEVELOPMENT PROMPT
## Advanced Frontend Testing & Quality Assurance

### 1. PROJECT INFORMATION

Project Name: CRICKET27  
Tagline: BEYOND THE BOUNDARY.  
Current Phase: 23 of 24  
Phase Name: Advanced Frontend Testing & Quality Assurance

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

Testing Stack:
- Vitest
- React Testing Library
- @testing-library/user-event
- @testing-library/jest-dom
- Playwright
- ESLint
- Lighthouse
- axe-core or an appropriate accessibility testing integration

### 2. YOUR ROLE

Act as a senior QA engineer, React testing specialist, frontend automation engineer and software quality assurance architect.

Your responsibility is to conduct a complete quality audit of CRICKET27.

The objective is to verify that:

- All 10 pages work correctly.
- All navigation works.
- All buttons perform their intended actions.
- Interactive components behave correctly.
- Forms validate correctly.
- Search and filtering work.
- Responsive layouts remain stable.
- Animations do not break functionality.
- Accessibility requirements are respected.
- Production builds succeed.
- No critical bugs remain.

This phase is about testing and fixing the existing website, not creating a new design.

### 3. FIRST INSPECT THE COMPLETE PROJECT

Before making modifications:

1. Inspect completed Phases 01–22.
2. Inspect the full project structure.
3. Review package.json.
4. Review the Vite configuration.
5. Inspect all ten pages.
6. Review reusable components.
7. Inspect custom hooks.
8. Review Context providers.
9. Inspect routing.
10. Review forms.
11. Inspect gallery functionality.
12. Review search and filtering.
13. Inspect animation components.
14. Review responsive styles.
15. Inspect SEO and accessibility improvements.
16. Run the existing production build.
17. Run existing lint and test commands.

Create an initial QA audit.

Record all existing errors before changing code.

IMPORTANT:
- Preserve working features.
- Do not rebuild the project.
- Do not remove important components.
- Do not change the established CRICKET27 design.
- Fix actual problems instead of rewriting everything.
- Do not report tests as successful unless they were executed.

### 4. TESTING ARCHITECTURE

Establish a professional testing structure.

Suggested:

```text
src/
  components/
  pages/
  hooks/
  utils/

tests/
  unit/
  components/
  integration/
  e2e/
  accessibility/
  fixtures/

playwright/
  tests/
  fixtures/

vitest.config.js
playwright.config.js
```

Adapt to the actual project.

Avoid creating duplicate testing directories if one already exists.

### 5. VITEST CONFIGURATION

Install and configure Vitest if it is not already available.

Requirements:
- React-compatible test environment.
- jsdom where appropriate.
- Test setup file.
- React Testing Library integration.
- Jest DOM matchers.
- Coverage configuration.
- Clear test commands.

Suggested package scripts:

```json
{
  "scripts": {
    "test": "vitest",
    "test:run": "vitest run",
    "test:coverage": "vitest run --coverage"
  }
}
```

Merge scripts with the existing package.json.

Do not overwrite unrelated configuration.

### 6. REACT TESTING LIBRARY

Use React Testing Library to test user-visible behaviour.

Test:
- Component rendering.
- User interactions.
- Button actions.
- Form validation.
- Navigation.
- Search behaviour.
- Filtering.
- Accordion behaviour.
- Modal behaviour.
- Toast notifications.
- Error states.
- Empty states.

Prefer tests that reflect how visitors actually use the website.

Avoid testing unnecessary internal implementation details.

### 7. COMPONENT UNIT TESTING

Create tests for important reusable components.

Examples:

**Common components**
- Button.
- SectionHeading.
- Badge.
- Breadcrumb.
- LoadingSpinner.
- EmptyState.
- ErrorState.

**Navigation**
- Navbar.
- MobileMenu.
- Dropdown.

**Cards**
- FeatureCard.
- NewsCard.
- GalleryCard.
- CommunityCard.

**Interactions**
- Tabs.
- SegmentedControl.
- Accordion.
- Modal.
- Toast.
- SearchInput.

**Forms**
- FormField.
- Input.
- Textarea.
- Select.
- Checkbox.

Test only components that actually exist.

### 8. CUSTOM HOOK TESTING

Test custom hooks where appropriate.

Examples:
- useClickOutside.
- useEscapeKey.
- useDebounce.
- useMediaQuery.
- useLockBodyScroll.
- useToast.

Verify:
- Expected behaviour.
- State changes.
- Event listener cleanup.
- Correct effect cleanup.
- No memory leaks.
- Correct handling of unmounting.

Do not duplicate existing hooks simply for testing.

### 9. ALL TEN PAGE TESTING

Test all ten public website routes.

**Page 1: Home**
- Hero appears.
- Headline is visible.
- CTA links work.
- All homepage sections render.
- Media and news previews work.
- FAQ preview works.
- Footer works.

**Page 2: About Us**
- Page heading appears.
- Story content renders.
- Mission and vision sections render.
- CTA navigation works.

**Page 3: Our Game**
- Game concept content renders.
- Feature sections render.
- Concept imagery loads.
- FAQ and CTA work.

**Page 4: Features**
- Feature categories render.
- Feature cards display correctly.
- All navigation links work.

**Page 5: Media**
- Gallery renders.
- Category filters work.
- Lightbox opens.
- Previous and next controls work.
- Escape closes the lightbox.
- Empty states behave correctly.

**Page 6: News**
- Featured article appears.
- News cards render.
- Search works.
- Category filtering works.
- Pagination works.
- Article links work.

**Page 7: News Details**
- Valid article slug renders.
- Dynamic title is correct.
- Article content appears.
- Related articles work.
- Previous and next article navigation works.
- Invalid slug displays the correct not-found state.

**Page 8: Community**
- Community sections render.
- Social cards behave correctly.
- FAQ preview works.
- No unavailable links are falsely presented as active.

**Page 9: FAQ**
- Questions render.
- Search works.
- Category filters work.
- Accordions open and close.
- Empty state works.

**Page 10: Contact**
- Form renders.
- Required fields validate.
- Email validation works.
- Inquiry selection works.
- Checkbox works.
- Reset behaviour works.
- Frontend-only confirmation is accurate.

### 10. NAVIGATION AND ROUTING TESTING

Verify:
- Homepage route.
- All internal routes.
- Dynamic News Details route.
- Invalid route.
- Navbar links.
- Footer links.
- Breadcrumb links.
- CTA links.
- Browser back button.
- Browser forward button.
- Direct URL loading.
- Page refresh on internal routes.

No broken internal links.

Do not silently change the established URL structure.

### 11. INTERACTION TESTING

Test all Phase 17 interactions.

Dropdown:
- Open.
- Close.
- Outside click.
- Escape.
- Keyboard navigation.

Tabs:
- Select tabs.
- Switch content.
- Keyboard navigation.
- Active state.

Accordions:
- Open.
- Close.
- Multiple-open behaviour where configured.

Modals:
- Open.
- Close.
- Escape.
- Focus management.
- Scroll locking.
- Focus restoration.

Toast:
- Correct message.
- Correct notification type.
- Dismiss behaviour.

Buttons:
- Correct action.
- Correct navigation.
- Disabled state.
- Focus state.

No dead or decorative interactive controls.

### 12. FORM TESTING

Test Contact form validation.

Test cases:
- Empty submission.
- Missing name.
- Invalid email.
- Missing inquiry type.
- Missing subject.
- Empty message.
- Privacy checkbox not selected.
- Valid form.
- Reset form.

Verify:
- Correct field errors.
- Clear validation messages.
- Accessible error announcements.
- Correct focus behaviour.
- Correct frontend-only confirmation.

IMPORTANT:

No backend submission is permitted.

Do not test fake email delivery.

### 13. SEARCH AND FILTER TESTING

Test News:
- Search by title.
- Search by category.
- Search by excerpt.
- Combined category and search.
- Empty result.
- Clear search.
- Reset filters.
- Pagination after filtering.

Test FAQ:
- Search by question.
- Search by answer.
- Category filtering.
- Combined search and category.
- Empty result.
- Clear filters.

Test Media:
- All category filter.
- Individual category filters.
- Empty results.
- Lightbox opening after filtering.

### 14. PLAYWRIGHT END-TO-END TESTING

Install and configure Playwright if appropriate.

Create browser automation tests for critical user journeys.

Suggested test files:

```text
playwright/tests/
  homepage.spec.js
  navigation.spec.js
  pages.spec.js
  media.spec.js
  news.spec.js
  faq.spec.js
  contact.spec.js
  responsive.spec.js
```

Test user journeys:

Journey 1:
Homepage → About → Our Game → Features.

Journey 2:
Homepage → Media → Select category → Open image → Close lightbox.

Journey 3:
Homepage → News → Search article → Open News Details.

Journey 4:
Homepage → FAQ → Search question → Open accordion.

Journey 5:
Homepage → Contact → Enter details → Validate form.

Journey 6:
Mobile homepage → Open menu → Navigate to another page → Close menu.

Use stable selectors such as accessible roles and labels.

Use test IDs only where necessary.

Do not use brittle CSS selectors unnecessarily.

### 15. RESPONSIVE TESTING

Test at:

- 320px.
- 360px.
- 390px.
- 480px.
- 768px.
- 1024px.
- 1280px.
- 1440px.
- 1920px.

Check:
- Horizontal overflow.
- Broken grids.
- Overlapping text.
- Navigation.
- Hero layout.
- Cards.
- Gallery.
- Modal.
- Contact form.
- Footer.
- Mobile landscape.

Use Playwright viewport testing where supported.

Do not claim physical device testing unless performed.

### 16. CROSS-BROWSER TESTING

Test supported browsers where the environment allows:

- Chromium.
- Firefox.
- WebKit.

Verify:
- Navigation.
- Images.
- Typography.
- CSS layout.
- Animations.
- Modal interactions.
- Forms.
- Search.
- Responsive behaviour.

Clearly report browsers that could not be tested.

Do not claim Safari or real iPhone testing from WebKit emulation alone.

### 17. ACCESSIBILITY TESTING

Use automated accessibility checks where available.

Check:
- Missing accessible names.
- Missing image alt text.
- Colour contrast.
- Heading hierarchy.
- Keyboard navigation.
- Form labels.
- Dialog accessibility.
- Link accessibility.
- Focus indicators.
- ARIA states.
- Reduced-motion support.

Use axe-core integration where appropriate.

Automated testing does not replace manual accessibility testing.

Record remaining violations and severity.

### 18. VISUAL REGRESSION TESTING

Check whether completed phases have introduced visual inconsistencies.

Compare:
- Homepage hero.
- Navbar.
- Footer.
- Internal page headers.
- Feature cards.
- News cards.
- Gallery.
- Modal.
- Contact form.

Check:
- Brand colours.
- Typography.
- Spacing.
- Image crops.
- Alignment.
- Responsive behaviour.
- Animation appearance.

Use screenshot comparisons where the tools support them.

Do not change the visual design unless fixing an identified defect.

### 19. PERFORMANCE REGRESSION TESTING

Verify that Phase 21 improvements remain intact.

Check:
- Production build output.
- JavaScript bundle sizes.
- CSS bundle sizes.
- Image loading.
- Route chunking.
- Lighthouse performance where available.
- Core Web Vitals lab measurements where available.

Avoid introducing unnecessary testing dependencies into the production bundle.

### 20. BUG FIXING AND PRIORITISATION

Classify identified issues:

**Critical**
- Application does not start.
- Important routes fail.
- Major navigation is broken.
- Production build fails.
- Core functionality is unusable.

**High**
- Contact form validation is broken.
- Gallery or News functionality fails.
- Mobile navigation is unusable.
- Major responsive layout breaks.

**Medium**
- Individual controls behave incorrectly.
- Some accessibility problems.
- Minor browser inconsistencies.

**Low**
- Small spacing issues.
- Minor animation inconsistencies.
- Nonessential visual polish.

Fix critical and high-priority defects first.

Then address medium and low-priority issues where practical.

Do not hide unresolved defects.

### 21. TEST COVERAGE

Configure coverage reporting where appropriate.

Measure:
- Statements.
- Branches.
- Functions.
- Lines.

Aim for meaningful coverage of important components, utilities and user journeys.

Do not chase 100% coverage by writing low-value tests.

Report actual measured coverage.

Identify untested critical areas.

### 22. PACKAGE AND DEPENDENCY AUDIT

Review package.json.

Check:
- Duplicate dependencies.
- Unused dependencies.
- Missing test dependencies.
- Incompatible package versions.
- Unnecessary packages.

Do not upgrade everything automatically.

Avoid breaking the existing Vite and React setup.

Do not install unnecessary testing tools if equivalent tools already exist.

### 23. STRICT PROJECT RESTRICTIONS

This phase is frontend testing and quality assurance only.

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

Do not redesign the website.

Do not change the established frontend technology stack.

### 24. FINAL QA CHECKLIST

[ ] Project starts successfully.

[ ] Production build succeeds.

[ ] All ten routes render.

[ ] Navigation works.

[ ] Dynamic News Details works.

[ ] Invalid route works.

[ ] All major buttons work.

[ ] Dropdowns work.

[ ] Tabs work.

[ ] Accordions work.

[ ] Modals work.

[ ] Toast notifications work.

[ ] Media gallery works.

[ ] Lightbox works.

[ ] News search works.

[ ] News filters work.

[ ] News pagination works.

[ ] FAQ search works.

[ ] FAQ filters work.

[ ] Contact form validation works.

[ ] All important user journeys work.

[ ] Responsive layouts work.

[ ] Accessibility checks completed.

[ ] Browser compatibility checks completed.

[ ] No critical console errors.

[ ] No broken image URLs.

[ ] No unnecessary dependencies.

[ ] No critical defects remain.

[ ] ESLint passes.

[ ] Vitest passes.

[ ] Playwright tests pass where configured.

[ ] Production build passes.

### 25. FINAL DEVELOPMENT REPORT

After completing Phase 23, provide:

1. Initial QA audit.
2. Bugs identified.
3. Bugs fixed.
4. Remaining bugs.
5. Vitest configuration.
6. Component testing results.
7. Custom hook testing results.
8. All ten page testing results.
9. Navigation testing results.
10. Interaction testing results.
11. Contact form testing results.
12. Search and filter testing results.
13. Playwright E2E results.
14. Responsive testing results.
15. Cross-browser testing results.
16. Accessibility testing results.
17. Visual regression testing results.
18. Performance regression results.
19. Test coverage results.
20. ESLint results.
21. Production build results.

For every testing category, report:
- Passed.
- Failed.
- Not tested.
- Not applicable.

Include real test counts and failure details.

### 26. PHASE COMPLETION RULE

Complete Phase 23 only.

Preserve all work from Phases 01–22.

Do not redesign the website.

Do not remove existing functionality.

Do not introduce backend functionality.

Do not change the CRICKET27 visual identity.

Do not automatically start Phase 24.

After completing the tests and fixing identified issues, stop and wait for my approval.

**PHASE 23 SUCCESS CRITERIA:**

The complete CRICKET27 frontend must pass meaningful component, integration, interaction, responsive and end-to-end testing, with critical defects fixed and all remaining issues transparently documented.