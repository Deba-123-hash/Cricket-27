# CRICKET27 — PHASE 17 MASTER DEVELOPMENT PROMPT
## Advanced UI Interactions & Dynamic Components Development

### PROJECT INFORMATION

Project Name: CRICKET27  
Tagline: BEYOND THE BOUNDARY.  
Current Phase: 17 of 24  
Phase Name: Advanced UI Interactions & Dynamic Components

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
- React Context API where appropriate
- Custom React Hooks

### 1. YOUR ROLE

Act as a senior frontend engineer, advanced React developer, UI interaction specialist and professional sports website architect.

Your task is to upgrade the entire CRICKET27 website with advanced, reusable, functional and professional UI interactions.

This phase is not about creating another page.

It is about improving the interaction quality of all existing pages developed in Phases 01–16.

Make the website feel responsive, dynamic, polished and professionally engineered.

Every visible interactive element must perform its intended action.

Do not create decorative controls that do nothing.

### 2. FIRST INSPECT THE COMPLETE PROJECT

Before changing anything:

1. Inspect the complete project folder structure.
2. Review all completed Phases 01–16.
3. Inspect all ten website pages.
4. Review the current component architecture.
5. Inspect existing buttons, cards, inputs and navigation.
6. Review all dropdowns and accordions.
7. Inspect the Media gallery and lightbox.
8. Review News search and category filtering.
9. Inspect FAQ search and accordion behaviour.
10. Review Contact form validation.
11. Inspect existing Framer Motion animations.
12. Check all installed dependencies.

IMPORTANT:

- Do not recreate the project.
- Do not delete working components.
- Do not duplicate existing functionality.
- Do not replace the existing design system.
- Improve existing components instead of creating unnecessary alternatives.
- Preserve all completed page content and routes.
- Identify actual interaction problems before making modifications.

### 3. DESIGN SYSTEM PRESERVATION

Maintain the existing CRICKET27 visual identity.

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

Interaction design principles:
- Clear visual feedback.
- Smooth transitions.
- Consistent button behaviour.
- Professional hover states.
- Accessible keyboard interactions.
- Predictable navigation.
- Responsive touch interactions.
- Consistent spacing and sizing.

Do not introduce a completely new visual theme.

### 4. ADVANCED NAVIGATION INTERACTIONS

Upgrade the existing Navbar.

Implement or improve:

1. Active route highlighting.
2. Smooth mobile menu opening and closing.
3. Dropdown navigation where appropriate.
4. Click-outside dropdown closing.
5. Escape key closing.
6. Automatic closing after route navigation.
7. Proper keyboard navigation.
8. Focus management.
9. Scroll-aware navbar styling.
10. Responsive menu behaviour.

Dropdown requirements:
- Smooth open/close transitions.
- Correct positioning.
- No viewport overflow.
- Accessible labels.
- Proper expanded states.
- Touch-friendly interaction.

Do not add unnecessary dropdowns just for decoration.

### 5. REUSABLE DROPDOWN COMPONENT

Create a reusable dropdown system.

Suggested component:
`src/components/common/Dropdown.jsx`

Features:
- Trigger button.
- Dropdown panel.
- Optional icons.
- Active option.
- Outside-click handling.
- Escape key support.
- Keyboard navigation.
- Responsive positioning.
- Smooth animation.

Use it where appropriate without making every menu a dropdown.

### 6. ADVANCED TABS AND SEGMENTED CONTROLS

Create reusable tab and segmented-control components.

Suggested components:
- Tabs.jsx
- SegmentedControl.jsx

Features:
- Active tab state.
- Keyboard arrow navigation.
- Correct ARIA roles.
- Smooth active indicator.
- Responsive layout.
- Optional icons.
- Dynamic content switching.

Apply where useful:

- Media categories.
- News categories.
- Feature information.
- Game concept information.
- Other suitable content sections.

IMPORTANT:
Preserve the existing filtering functionality from Phases 11 and 12.

Do not create duplicate category systems.

### 7. ADVANCED ACCORDION SYSTEM

Improve the existing FAQ accordion and other accordion interfaces.

Requirements:
- Smooth expansion and collapse.
- Accessible ARIA attributes.
- Keyboard navigation.
- Clear active states.
- Plus/minus or chevron icon animation.
- Support single-open or multiple-open behaviour through configuration.
- Correct height transitions.
- Responsive interaction.

Use one reusable accordion system.

Suggested components:
- Accordion.jsx
- AccordionItem.jsx

Integrate with:
- FAQ page.
- Community FAQ preview.
- Other existing sections where useful.

### 8. ADVANCED MODAL AND POPUP SYSTEM

Create a reusable modal architecture.

Suggested components:
- Modal.jsx
- ModalOverlay.jsx
- ModalContent.jsx
- ConfirmDialog.jsx

Requirements:
- Smooth opening animation.
- Smooth closing animation.
- Background overlay.
- Escape key closing.
- Click-outside closing where appropriate.
- Focus trapping.
- Focus restoration.
- Body scroll locking.
- Accessible dialog semantics.
- Responsive dimensions.

Support optional:
- Title.
- Description.
- Header.
- Footer.
- Custom content.
- Close button.

Use modals only when they improve the user experience.

Do not introduce unnecessary popup windows.

### 9. ADVANCED MEDIA GALLERY INTERACTIONS

Upgrade the existing Media page gallery.

Requirements:

1. Dynamic category filtering.
2. Active category indicator.
3. Smooth image transitions.
4. Improved lightbox.
5. Previous and next navigation.
6. Keyboard arrow navigation.
7. Escape key closing.
8. Image title and category display.
9. Background scroll locking.
10. Loading state.
11. Graceful missing-image handling.
12. Responsive image presentation.

Additional improvements:
- Optional featured-image presentation.
- Smooth gallery item reveal.
- Consistent aspect ratios.
- Better touch interactions.

IMPORTANT:
Reuse the existing Media gallery data.

Do not create duplicate image records.

### 10. ADVANCED NEWS INTERACTIONS

Upgrade the existing News page.

Implement or improve:

- Live news search.
- Category filtering.
- Search clear button.
- Search empty state.
- Pagination.
- Active pagination indicator.
- Smooth article card transitions.
- Correct reset behaviour after changing filters.
- Accessible filter controls.

Search should support:
- Article title.
- Article category.
- Article excerpt.

Ensure search and category filtering work together.

Example:
When a visitor selects Brand Updates and searches "vision", show only matching articles from that category.

Preserve existing article routes.

### 11. ADVANCED FAQ INTERACTIONS

Upgrade the FAQ page.

Implement:
- Live search.
- Category selection.
- Combined search and category filtering.
- Accessible accordion interactions.
- Clear filters.
- Empty state.
- Smooth result transitions.
- Clear active category styling.

Ensure the FAQ preview sections on the Homepage and Community page continue working.

Use the same central FAQ data source.

### 12. ADVANCED CONTACT FORM INTERACTIONS

Improve the existing Contact form without connecting a backend.

Implement:
- Better input focus states.
- Real-time validation feedback where appropriate.
- Error message transitions.
- Character counter animation.
- Select dropdown interaction.
- Checkbox interaction.
- Form reset interaction.
- Accessible validation messages.
- Clear frontend-only confirmation.

Preserve the frontend-only submission behaviour.

Never claim a message was delivered.

Do not send or store user information.

### 13. REUSABLE INTERACTION COMPONENT LIBRARY

Review the existing shared component directory.

Build or improve reusable components as appropriate:

- Dropdown
- Tabs
- SegmentedControl
- Accordion
- Modal
- Tooltip
- Popover
- Toast
- LoadingSpinner
- ProgressIndicator
- EmptyState
- ErrorState
- SearchInput
- FilterButton
- IconButton
- BackToTop

Suggested folder:

`src/components/interactions/`

Do not blindly create every component if an equivalent already exists.

Use consistent props, naming and behaviour.

### 14. TOAST NOTIFICATION SYSTEM

Create a lightweight frontend toast system.

Use cases:
- Link copied.
- Action completed.
- Invalid action.
- Form validation feedback.
- Other genuine frontend interactions.

Requirements:
- Success state.
- Error state.
- Informational state.
- Clear message.
- Dismiss button.
- Automatic dismissal only if the existing architecture supports it cleanly.
- Accessible announcements.
- Responsive positioning.

Use a reusable hook or context if appropriate.

Suggested:
- `ToastProvider.jsx`
- `useToast.js`
- `Toast.jsx`

Do not show fake success notifications.

### 15. CUSTOM REACT HOOKS

Create reusable hooks only when they genuinely improve architecture.

Possible hooks:

- useClickOutside
- useEscapeKey
- useLockBodyScroll
- useDebounce
- useMediaQuery
- useToggle
- useToast

Requirements:
- Clean React hook conventions.
- Proper event cleanup.
- No memory leaks.
- No unnecessary global listeners.
- Reuse hooks across components where appropriate.

Do not create unnecessary abstractions.

### 16. INTERACTION STATE MANAGEMENT

Review the existing React state architecture.

Use:
- useState for local component state.
- useReducer for complex local interaction state where appropriate.
- Context API only for genuinely shared state.

Avoid:
- Excessive prop drilling.
- Duplicated state.
- Unnecessary global context.
- Overengineering.
- Unnecessary external state-management libraries.

Ensure interactive components behave consistently.

### 17. HOVER AND MICRO-INTERACTIONS

Upgrade interactive elements across the website.

Improve:
- Buttons.
- Navigation links.
- Cards.
- Images.
- Category filters.
- Social cards.
- Article cards.
- Gallery cards.
- CTA sections.
- Form controls.

Implement:
- Hover state.
- Active state.
- Focus state.
- Disabled state.
- Loading state where appropriate.
- Smooth transitions.

Do not use aggressive animation.

### 18. ACCESSIBILITY REQUIREMENTS

All interactive components must support:

- Keyboard navigation.
- Visible focus indicators.
- Correct button semantics.
- Accessible labels.
- Appropriate ARIA attributes.
- Escape key support where relevant.
- Focus management for dialogs.
- Reduced-motion support.
- Sufficient colour contrast.

Do not use clickable div elements when a semantic button or link is appropriate.

### 19. RESPONSIVE INTERACTION REQUIREMENTS

Test interactions at:

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
- Dropdowns fit the viewport.
- Menus work with touch.
- Tabs remain usable.
- Accordions work on mobile.
- Modals fit small screens.
- Gallery lightbox works on touch devices.
- Toast messages do not cover essential controls.
- Forms remain accessible.

### 20. PERFORMANCE REQUIREMENTS

Optimise:
- Component rendering.
- Event listener cleanup.
- State updates.
- Animation complexity.
- Modal rendering.
- Gallery interactions.
- Search filtering.
- Unnecessary React re-renders.

Use React.memo, useMemo or useCallback only where they provide measurable value.

Do not optimise blindly.

### 21. STRICT PROJECT RESTRICTIONS

This phase is advanced frontend development only.

DO NOT BUILD:
- Backend.
- Node/Express server.
- Database.
- APIs.
- Authentication.
- CMS.
- Admin dashboard.
- Real-time messaging.
- Payment system.
- External services.
- User registration.
- Cricket gameplay.
- Game engine.
- Three.js.
- WebGL.
- 3D models or scenes.

Do not change the existing frontend technology stack.

Do not introduce unnecessary dependencies.

### 22. TESTING CHECKLIST

Verify:

[ ] Navbar active route works.

[ ] Mobile menu works.

[ ] Dropdown opens and closes correctly.

[ ] Click-outside closing works.

[ ] Escape key works.

[ ] Tabs switch content correctly.

[ ] Segmented controls work.

[ ] Accordions open and close.

[ ] Modal opens and closes.

[ ] Modal focus behaviour works.

[ ] Body scrolling locks when needed.

[ ] Toast notifications work.

[ ] Media gallery filters work.

[ ] Lightbox navigation works.

[ ] News search works.

[ ] News category filters work.

[ ] News pagination works.

[ ] FAQ search works.

[ ] FAQ category filters work.

[ ] Contact form validation works.

[ ] All buttons have correct actions.

[ ] No duplicate interaction components.

[ ] No broken routes.

[ ] No horizontal overflow.

[ ] No console errors.

[ ] Event listeners are cleaned up.

[ ] ESLint passes.

[ ] Production build succeeds.

### 23. FINAL DEVELOPMENT REPORT

After completing Phase 17, provide:

1. Summary of Phase 17.
2. Existing interactions reviewed.
3. Components created.
4. Components improved.
5. Custom hooks created.
6. Modal system details.
7. Dropdown and tab system details.
8. Gallery interaction improvements.
9. News and FAQ interaction improvements.
10. Contact form improvements.
11. Accessibility improvements.
12. Responsive testing results.
13. Performance improvements.
14. ESLint results.
15. Production build results.
16. Remaining issues.

### 24. PHASE COMPLETION RULE

Complete Phase 17 only.

Do not automatically start Phase 18.

Preserve all work from Phases 01–16.

Do not redesign completed pages.

Do not introduce backend functionality.

Do not change the established CRICKET27 brand identity.

After successful implementation and testing, stop and wait for my approval.

**PHASE 17 SUCCESS CRITERIA:**

The CRICKET27 website must have a professional reusable interaction system with functional dropdowns, tabs, accordions, modals, toast notifications, improved gallery controls, advanced filtering, search and responsive interactions across all existing pages.