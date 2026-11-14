# CRICKET27 — PHASE 04
# GLOBAL LAYOUT, NAVIGATION & FOOTER DEVELOPMENT

## 1. YOUR ROLE

Act as a Senior Frontend Developer, Senior React Architect, Professional UI/UX Designer, Senior Navigation Designer and Senior Animation Developer.

Your responsibility is to develop the complete global website layout for CRICKET27.

Think like an experienced team building a premium international sports gaming website.

Target quality: 9/10.

The navigation, layout and footer must feel polished, responsive, accessible and visually consistent.

## 2. PROJECT CONTEXT

Project: CRICKET27

Tagline: BEYOND THE BOUNDARY.

Website type: Premium 2D cricket gaming brand website.

Website pages:

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

Technology:
- React.
- Vite.
- JavaScript JSX.
- Tailwind CSS.
- React Router DOM.
- Framer Motion.
- Lucide React.

This is a promotional gaming brand website, NOT a playable cricket game.

## 3. FIRST TASK — INSPECT PREVIOUS PHASES

Before implementation:

1. Inspect the complete Phase 01 project foundation.
2. Review Phase 02 brand identity.
3. Review Phase 03 design system.
4. Inspect existing components.
5. Review existing routes.
6. Review CSS variables and design tokens.
7. Check current dependencies.
8. Preserve working functionality.
9. Reuse existing reusable components.

Do not rebuild the project from scratch.

Do not create duplicate design systems.

## 4. GLOBAL WEBSITE ARCHITECTURE

Build a reusable global layout.

Recommended architecture:

src/
├── components/
│   ├── navigation/
│   │   ├── Navbar.jsx
│   │   ├── DesktopMenu.jsx
│   │   ├── MobileMenu.jsx
│   │   ├── MobileMenuButton.jsx
│   │   ├── DropdownMenu.jsx
│   │   └── NavigationLink.jsx
│   │
│   ├── footer/
│   │   ├── Footer.jsx
│   │   ├── FooterLinks.jsx
│   │   ├── SocialLinks.jsx
│   │   └── FooterBottom.jsx
│   │
│   └── common/
│       ├── Logo.jsx
│       ├── Container.jsx
│       └── BackToTop.jsx
│
├── layouts/
│   ├── MainLayout.jsx
│   └── MinimalLayout.jsx
│
├── data/
│   └── navigation.js
│
└── routes/
    └── AppRoutes.jsx

Adapt this structure to the existing project instead of duplicating files.

## 5. NAVBAR DESIGN

Create a premium responsive CRICKET27 navbar.

Desktop design:

Left:
- CRICKET27 brand logo.

Center:
- Home.
- About.
- Our Game.
- Features.
- Media.
- News.
- Community.

Right:
- Contact button.

The navigation should have balanced spacing and clear visual hierarchy.

Design direction:
- Midnight Navy background or a carefully controlled transparent hero overlay.
- Warm White navigation text.
- Electric Lime active state.
- Professional logo presentation.
- Subtle bottom border or divider when appropriate.
- Premium typography.
- Clean spacing.

Do not overcrowd the navbar.

If the full navigation does not fit, intelligently adjust the layout instead of shrinking text excessively.

## 6. NAVIGATION INTERACTIONS

Implement:

1. Active navigation highlighting.
2. Hover states.
3. Keyboard focus states.
4. Smooth navigation.
5. Mobile menu toggle.
6. Dropdown interaction if genuinely useful.
7. Accessible menu controls.
8. Proper route navigation using React Router.

The active link must update automatically based on the current route.

Do not use plain anchor reloads for internal application navigation.

## 7. STICKY AND SCROLL NAVBAR

Create a polished scroll-aware navbar.

Initial state:
- Appropriate positioning over the homepage hero.
- Maintain logo and navigation readability.

Scrolled state:
- Solid or more opaque background.
- Subtle border or shadow.
- Controlled transition.
- Consistent height.

Requirements:
- Smooth state change.
- No layout jumping.
- No excessive blur.
- Good contrast on all pages.
- No flickering.
- Works on mobile and desktop.

For internal pages, ensure the navbar has a readable background even when there is no hero image behind it.

## 8. MOBILE NAVIGATION

Create a premium mobile navigation drawer.

Requirements:

- Hamburger menu button.
- Close button.
- Slide-in or controlled fade transition.
- Full navigation list.
- Clear active page.
- Contact CTA.
- Optional social links.
- Proper spacing.
- Scroll handling.
- Escape-key support.
- Close after selecting a navigation link.
- Prevent unwanted background scrolling while the drawer is open.
- Accessible aria-expanded and aria-controls attributes.

Test on small mobile screens.

Do not use a tiny desktop navbar on mobile.

## 9. DROPDOWN MENU

If appropriate, create a refined dropdown for navigation categories.

Requirements:
- Clear visual hierarchy.
- Keyboard accessibility.
- Hover and click behaviour.
- Proper dismissal.
- Mobile compatibility.

Do not add unnecessary mega menus.

Only add dropdowns if they improve navigation.

## 10. MAIN LAYOUT

Develop MainLayout.jsx.

It should manage:

- Global navbar.
- Page content.
- Global footer.
- Back-to-top control.
- Consistent background and layout behaviour.

All primary website pages should use MainLayout.

MinimalLayout may be used for special standalone pages when appropriate.

Ensure that page content does not overlap the navbar or footer.

## 11. GLOBAL FOOTER

Build a premium CRICKET27 footer.

Footer content:

### Column 1 — Brand
- CRICKET27 logo.
- BEYOND THE BOUNDARY.
- Short brand description.

### Column 2 — Explore
- Home.
- About Us.
- Our Game.
- Features.
- Media.

### Column 3 — Updates
- News.
- Community.
- FAQ.
- Contact.

### Column 4 — Social Media
- YouTube.
- Instagram.
- Facebook.
- X.
- Other official platforms when available.

Do not invent real social media URLs.

Use clearly marked temporary links or disabled placeholders until official profiles are supplied.

### Bottom Footer
- Copyright information.
- Privacy Policy placeholder.
- Terms and Conditions placeholder.
- Back-to-top interaction.

Use the current year dynamically.

Design direction:
- Midnight Navy background.
- Strong logo visibility.
- Warm White headings.
- Muted supporting text.
- Electric Lime accents.
- Subtle separators.
- Proper spacing.

Do not make the footer excessively tall.

## 12. PAGE TRANSITIONS

Use Framer Motion to prepare polished page transitions.

Requirements:
- Subtle fade transitions.
- Controlled movement.
- No distracting animation.
- Avoid unnecessary delays.
- Maintain navigation responsiveness.
- Handle reduced-motion preferences.

Ensure that route changes do not cause broken scroll behaviour.

Reset scroll position on navigation when appropriate, while preserving expected browser navigation behaviour.

## 13. BACK TO TOP

Create a reusable BackToTop component.

Requirements:
- Appears after a suitable scroll threshold.
- Uses Lucide icon.
- Smooth scroll to top.
- Accessible label.
- Clear hover and focus states.
- Responsive positioning.

Do not permanently cover important content.

## 14. NAVIGATION DATA

Keep navigation configuration separate from the UI.

Use:

src/data/navigation.js

Store:
- Navigation labels.
- Route paths.
- Optional dropdown data.
- Footer link groups.

Avoid duplicating navigation data in multiple components.

## 15. RESPONSIVE DESIGN

Test global layout at:

- Large desktop.
- Standard desktop.
- Laptop.
- Tablet.
- Mobile.
- Small mobile.

Check:
- Navbar height.
- Logo sizing.
- Navigation spacing.
- Mobile drawer width.
- Footer columns.
- Footer stacking.
- CTA positioning.
- Text overflow.
- Touch target sizes.

All components must adapt naturally.

## 16. ACCESSIBILITY

Implement:

- Semantic header.
- Semantic nav.
- Semantic footer.
- Keyboard navigation.
- Visible focus indicators.
- Accessible mobile menu.
- Proper ARIA attributes.
- Sufficient contrast.
- Reduced-motion support.
- Meaningful link labels.

Avoid clickable divs when a button or link is appropriate.

## 17. PERFORMANCE

Requirements:

- Avoid unnecessary re-renders.
- Avoid excessive scroll listeners.
- Use efficient event handling.
- Clean up event listeners.
- Avoid heavy animation effects.
- Keep navigation lightweight.
- Avoid unnecessary dependencies.

## 18. STRICT LIMITATIONS

This phase is GLOBAL LAYOUT DEVELOPMENT ONLY.

Do not:
- Build the full homepage.
- Build the hero section.
- Build internal page content.
- Implement backend.
- Implement APIs.
- Implement database.
- Implement authentication.
- Add gameplay.
- Add 3D or WebGL.
- Start deployment.

The homepage hero and content sections belong to later phases.

## 19. TESTING AND VALIDATION

After implementation:

1. Test every navigation link.
2. Test all ten routes.
3. Verify active navigation state.
4. Test sticky navbar.
5. Test mobile menu open and close.
6. Test Escape-key behaviour.
7. Test footer links.
8. Test back-to-top.
9. Test page transitions.
10. Test keyboard accessibility.
11. Check responsive layouts.
12. Check browser console.
13. Run ESLint.
14. Run production build.

Fix all errors caused by this phase.

Do not claim tests passed without actually running them.

## 20. PHASE 04 COMPLETION CRITERIA

Phase 04 is complete when:

- Desktop navbar is polished.
- Mobile navigation works.
- Active route highlighting works.
- Sticky navbar works.
- MainLayout is functional.
- Footer is complete.
- Navigation data is centralised.
- Back-to-top works.
- Page transitions work.
- Responsive behaviour is verified.
- Accessibility basics are implemented.
- Existing design system is reused.
- Production build succeeds.

## 21. FINAL REPORT

Provide:

1. Navbar implementation summary.
2. Mobile navigation summary.
3. Sticky navigation behaviour.
4. Footer implementation summary.
5. Layout architecture.
6. Page transition implementation.
7. Files created or modified.
8. Responsive test results.
9. Accessibility test results.
10. ESLint results.
11. Production build results.
12. Remaining issues.

IMPORTANT:

Complete only Phase 04.

Do not automatically start Phase 05.

Wait for my approval before continuing.