# CRICKET27 — PHASE 20 MASTER DEVELOPMENT PROMPT
## Advanced Component Architecture & Frontend State Management

### 1. PROJECT INFORMATION

Project Name: CRICKET27  
Tagline: BEYOND THE BOUNDARY.  
Current Phase: 20 of 24  
Phase Name: Advanced Component Architecture & Frontend State Management

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
- React Context API
- Custom React Hooks

### 2. YOUR ROLE

Act as a senior React architect, frontend software engineer and component-system specialist.

Your responsibility is to review and improve the complete CRICKET27 frontend architecture.

The objective is to make the existing website:

- Modular.
- Reusable.
- Maintainable.
- Scalable.
- Consistent.
- Well organised.
- Easy to debug.
- Easy to extend.
- Ready for future backend integration.

This is an architecture improvement phase, not a website redesign.

### 3. INSPECT THE COMPLETE PROJECT FIRST

Before changing anything:

1. Inspect the complete project folder structure.
2. Review completed Phases 01–19.
3. Inspect all ten website pages.
4. Review existing React components.
5. Inspect reusable UI components.
6. Review custom hooks.
7. Inspect Context API usage.
8. Review local component states.
9. Inspect data files.
10. Review routing architecture.
11. Inspect animation utilities.
12. Review form validation.
13. Identify duplicated code.
14. Identify unnecessary dependencies.
15. Identify components that are too large or difficult to maintain.

Prepare an internal architecture audit before modifying files.

IMPORTANT:
- Do not rebuild the project.
- Do not delete working functionality.
- Do not replace the established design system.
- Do not duplicate existing components.
- Refactor only when there is a clear benefit.
- Preserve all existing routes and content.
- Keep the project running throughout the process.

### 4. ARCHITECTURE OBJECTIVES

Improve the following areas:

1. Component architecture.
2. Component reusability.
3. Page organisation.
4. Shared layouts.
5. Data management.
6. Custom React hooks.
7. State management.
8. Form state.
9. Navigation state.
10. Interaction state.
11. Error handling.
12. Loading and empty states.
13. Configuration management.
14. Code duplication reduction.
15. Future backend integration readiness.

Avoid unnecessary architectural complexity.

### 5. IMPROVE THE PROJECT FOLDER STRUCTURE

Review the existing structure and improve it only where needed.

Target architecture:

```text
src/
├── assets/
│   ├── images/
│   ├── illustrations/
│   ├── backgrounds/
│   ├── logos/
│   └── fonts/
│
├── components/
│   ├── common/
│   ├── navigation/
│   ├── footer/
│   ├── cards/
│   ├── sections/
│   ├── animations/
│   ├── interactions/
│   ├── gallery/
│   └── forms/
│
├── layouts/
│   ├── MainLayout.jsx
│   └── MinimalLayout.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── OurGame.jsx
│   ├── Features.jsx
│   ├── Media.jsx
│   ├── News.jsx
│   ├── NewsDetails.jsx
│   ├── Community.jsx
│   ├── FAQ.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
│
├── sections/
│   ├── home/
│   ├── about/
│   ├── game/
│   ├── features/
│   ├── media/
│   ├── news/
│   └── community/
│
├── context/
│   ├── UIContext.jsx
│   └── ToastContext.jsx
│
├── hooks/
│   ├── useClickOutside.js
│   ├── useEscapeKey.js
│   ├── useDebounce.js
│   ├── useMediaQuery.js
│   ├── useLockBodyScroll.js
│   └── useToast.js
│
├── data/
│   ├── navigation.js
│   ├── features.js
│   ├── news.js
│   ├── gallery.js
│   ├── faq.js
│   └── socialLinks.js
│
├── services/
│   └── README.md
│
├── utils/
│   ├── animations.js
│   ├── constants.js
│   ├── helpers.js
│   └── validators.js
│
├── routes/
│   └── AppRoutes.jsx
│
├── styles/
│   ├── globals.css
│   ├── animations.css
│   └── typography.css
│
├── App.jsx
└── main.jsx
```

This is a target structure, not a requirement to move every existing file.

Avoid creating empty folders or unnecessary files.

### 6. ADVANCED COMPONENT ARCHITECTURE

Review all existing components.

Organise components into clear categories.

**Common components**
- Button.
- Container.
- SectionHeading.
- Badge.
- Divider.
- Breadcrumb.
- LoadingSpinner.
- EmptyState.
- ErrorState.
- BackToTop.
- PageHeader.

**Navigation components**
- Navbar.
- MobileMenu.
- Dropdown.
- NavLink.

**Card components**
- FeatureCard.
- NewsCard.
- GalleryCard.
- MediaCard.
- InformationCard.
- HighlightCard.
- CommunityCard.

**Interaction components**
- Modal.
- Accordion.
- Tabs.
- SegmentedControl.
- Tooltip.
- Popover.
- Toast.
- SearchInput.

**Animation components**
- FadeIn.
- RevealOnScroll.
- TextReveal.
- ImageReveal.
- StaggerContainer.
- PageTransition.

**Form components**
- FormField.
- Input.
- Textarea.
- Select.
- Checkbox.
- FormError.

Use existing components whenever possible.

### 7. COMPONENT REUSABILITY IMPROVEMENT

Review duplicated JSX across all pages.

Convert repeated structures into reusable components where appropriate.

Examples:
- Repeated page headers.
- Repeated section headings.
- Repeated CTA sections.
- Repeated card structures.
- Repeated image overlays.
- Repeated metadata layouts.
- Repeated social links.
- Repeated empty states.
- Repeated form fields.

Requirements:
- Clear component responsibilities.
- Consistent prop naming.
- Predictable component behaviour.
- Sensible defaults.
- Optional customisation.
- Maintainable JSX.
- Avoid overly generic components.

Do not combine unrelated functionality into one giant component.

### 8. COMPONENT PROP DESIGN

Improve the consistency of component props.

Example:

```jsx
<Button
  variant="primary"
  size="large"
  to="/our-game"
>
  Explore Our Game
</Button>
```

Example:

```jsx
<SectionHeading
  eyebrow="THE STORY BEHIND CRICKET27"
  title="MORE THAN JUST A GAME"
  description="Discover the vision behind CRICKET27."
/>
```

Requirements:
- Consistent prop names.
- Sensible default values.
- Clear optional props.
- Proper event handling.
- Correct semantic elements.
- Avoid unnecessary boolean props.
- Avoid complicated nested prop structures.

Do not break existing component interfaces without updating all usages.

### 9. ADVANCED CUSTOM REACT HOOKS

Review and improve existing hooks.

Suggested hooks:

**useClickOutside**
- Detect clicks outside an element.
- Support reusable event handling.
- Clean up listeners.

**useEscapeKey**
- Detect Escape key.
- Support modal and dropdown behaviour.
- Clean up event listeners.

**useDebounce**
- Debounce search input.
- Prevent unnecessary filtering calculations.

**useMediaQuery**
- Detect responsive media queries.
- Clean up event listeners.

**useLockBodyScroll**
- Lock background scrolling when required.
- Restore the original scroll behaviour.

**useToast**
- Reusable toast access.
- Consistent notification interface.

Add other hooks only when a clear requirement exists.

Do not duplicate hooks already created in Phase 17.

### 10. FRONTEND STATE MANAGEMENT STRATEGY

Review all existing React state.

Choose the appropriate state location.

**Local state**
Use `useState` for:
- Accordion state.
- Individual dropdowns.
- Modal visibility.
- Local tab selection.
- Component-level interaction.

**Reducer state**
Use `useReducer` where:
- Multiple related state transitions exist.
- State logic is sufficiently complex.
- A reducer makes behaviour easier to understand.

**Context API**
Use Context API only for genuinely shared state, such as:
- Global toast notifications.
- Shared UI configuration.
- Other application-wide interaction state when justified.

Avoid:
- Excessive global state.
- Duplicated state.
- Unnecessary Context providers.
- Prop drilling where a simpler solution exists.
- Introducing Redux or another library without a demonstrated need.

### 11. UI CONTEXT ARCHITECTURE

Review whether a UIContext is necessary.

If useful, create:

`src/context/UIContext.jsx`

Potential responsibilities:
- Shared UI state.
- Global modal coordination if needed.
- Consistent global interaction behaviour.

Do not place every component's state inside UIContext.

Keep local state local.

### 12. TOAST CONTEXT ARCHITECTURE

Review the existing Phase 17 toast implementation.

If a shared provider is appropriate, organise it as:

`src/context/ToastContext.jsx`

Responsibilities:
- Show notifications.
- Dismiss notifications.
- Manage notification types.
- Provide consistent messages.
- Support accessible announcements.

Suggested notification types:
- Success.
- Error.
- Info.

Do not duplicate an existing working toast provider.

### 13. CENTRAL DATA MANAGEMENT

Review all data files.

Maintain centralised data for:

- Navigation.
- Features.
- News.
- Gallery.
- FAQ.
- Social links.

Requirements:
- Avoid hardcoded repeated records inside JSX.
- Use consistent data shapes.
- Keep content separate from presentation.
- Maintain stable IDs.
- Validate required fields.
- Handle missing optional fields.
- Preserve existing page content.

Do not invent company information, launch dates, game availability or social links.

### 14. DATA VALIDATION AND HELPERS

Improve the utility layer.

Suggested files:

`src/utils/validators.js`

Responsibilities:
- Email validation.
- Required field validation.
- Input validation.
- Reusable frontend form rules.

`src/utils/helpers.js`

Responsibilities:
- String formatting.
- Date formatting.
- Safe URL handling.
- Reusable formatting helpers.

`src/utils/constants.js`

Responsibilities:
- Brand constants.
- Route constants.
- UI configuration.
- Shared static values.

Avoid duplicating validation and formatting logic.

### 15. FRONTEND FORM ARCHITECTURE

Review the Contact form.

Improve:
- Form state organisation.
- Field validation.
- Error state.
- Touched state where useful.
- Reset behaviour.
- Submission state.
- Accessible feedback.

Create reusable form components only when justified.

Keep the form frontend-only.

Do not:
- Connect a backend.
- Send emails.
- Store personal information.
- Add external submission APIs.

Preserve the honest submission message explaining that delivery is not available yet.

### 16. ROUTING ARCHITECTURE

Review:

`src/routes/AppRoutes.jsx`

Requirements:
- Centralised route definitions.
- Clear page imports.
- Correct dynamic News Details route.
- Proper 404 route.
- Maintain browser navigation.
- Maintain direct URL access.
- Preserve page transitions.

Avoid duplicate route definitions.

Do not change public URLs without a strong reason.

### 17. FUTURE BACKEND INTEGRATION READINESS

Prepare the frontend structure for future backend work without implementing it.

Suggested services directory:

`src/services/`

Create documentation describing how future services could be organised.

Possible future service categories:
- News service.
- Contact service.
- Media service.
- Community service.
- Configuration service.

Requirements:
- Keep components independent of data-fetching implementation.
- Separate presentation from data.
- Avoid direct network requests inside UI components.
- Document future integration boundaries.

IMPORTANT:
Do not create actual API calls, backend endpoints or server functionality.

### 18. ERROR, LOADING AND EMPTY STATES

Standardise frontend states.

Review:
- LoadingSpinner.
- EmptyState.
- ErrorState.
- FormError.
- NotFound.

Requirements:
- Consistent visual language.
- Reusable messages.
- Accessible announcements.
- Appropriate icons.
- Responsive layouts.
- Clear recovery actions where appropriate.

Do not show fake server errors or fake network loading.

### 19. CODE QUALITY AND CLEAN ARCHITECTURE

Review all JSX and JavaScript files.

Improve:
- Component naming.
- File naming.
- Function naming.
- Import organisation.
- Unused variables.
- Duplicate functions.
- Repeated JSX.
- Complex conditional rendering.
- Large components.
- Unnecessary dependencies.
- Inconsistent styling.

Keep components focused and reasonably sized.

Do not split components into dozens of tiny files without a reason.

### 20. REACT PERFORMANCE AND STATE OPTIMISATION

Review:
- Unnecessary component rendering.
- Expensive filtering.
- Repeated calculations.
- Context re-rendering.
- Event listener management.
- Large component trees.

Use appropriately:
- React.memo.
- useMemo.
- useCallback.
- useReducer.
- Lazy loading.
- Dynamic imports.

Only apply optimisations when they improve actual maintainability or performance.

Do not use memoisation everywhere.

### 21. DOCUMENTATION

Improve project documentation.

Update README.md with:

1. Project overview.
2. CRICKET27 website scope.
3. Technology stack.
4. Installation instructions.
5. Development commands.
6. Build commands.
7. Folder structure.
8. Component architecture.
9. State management strategy.
10. Data file locations.
11. Custom hooks.
12. Animation architecture.
13. Responsive design strategy.
14. Future backend integration boundaries.

Keep documentation accurate to the actual implementation.

### 22. STRICT PROJECT RESTRICTIONS

This phase is frontend architecture improvement only.

DO NOT BUILD:
- Backend.
- APIs.
- Database.
- Authentication.
- CMS.
- Admin dashboard.
- Payment system.
- Real-time messaging.
- Game engine.
- Cricket gameplay.
- Multiplayer.
- Three.js.
- WebGL.
- 3D models or scenes.

Do not change the established frontend stack.

Do not introduce unnecessary libraries.

### 23. TESTING CHECKLIST

[ ] Existing project structure reviewed.

[ ] No duplicated components unnecessarily.

[ ] Shared components work correctly.

[ ] Component props are consistent.

[ ] Custom hooks work correctly.

[ ] Event listeners are cleaned up.

[ ] Context providers work correctly.

[ ] State updates behave correctly.

[ ] No duplicated state logic.

[ ] Central data files work.

[ ] Form validation works.

[ ] Routes work.

[ ] Dynamic News Details routes work.

[ ] 404 route works.

[ ] Loading and empty states work.

[ ] Existing interactions remain functional.

[ ] All ten pages remain functional.

[ ] No broken imports.

[ ] No unused dependencies introduced.

[ ] No console errors.

[ ] ESLint passes.

[ ] Production build succeeds.

### 24. FINAL DEVELOPMENT REPORT

After completing Phase 20, provide:

1. Architecture audit summary.
2. Folder structure changes.
3. Components created.
4. Components refactored.
5. Reusability improvements.
6. Custom hooks created or improved.
7. State management strategy.
8. Context API implementation.
9. Central data management improvements.
10. Form architecture improvements.
11. Routing improvements.
12. Utility improvements.
13. Future backend integration preparation.
14. Code quality improvements.
15. Performance improvements.
16. Documentation updates.
17. Testing results.
18. ESLint results.
19. Production build results.
20. Remaining issues.

### 25. PHASE COMPLETION RULE

Complete Phase 20 only.

Preserve all work from Phases 01–19.

Do not redesign the website.

Do not rebuild completed pages.

Do not introduce backend functionality.

Do not change the CRICKET27 visual identity.

Do not automatically start Phase 21.

After successful implementation and testing, stop and wait for my approval.

**PHASE 20 SUCCESS CRITERIA:**

The complete CRICKET27 frontend must have a clean, reusable and maintainable React architecture, consistent component interfaces, appropriate state management, centralised data, reusable hooks and clear boundaries for future backend integration.