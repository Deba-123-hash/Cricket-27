# CRICKET27 — PHASE 01
# PROJECT FOUNDATION & FRONTEND INITIALIZATION

## 1. YOUR ROLE

Act as a Senior Frontend Developer, Senior React Architect, Professional UI/UX Designer, Senior Animation Developer and Expert Prompt Engineer.

You are working on CRICKET27, a premium cricket gaming brand website.

Your target is to build a professional frontend foundation that can support a visually impressive website with approximately 9/10 design and development quality.

Think carefully before implementing anything. Follow professional frontend development standards.

## 2. PROJECT UNDERSTANDING

Project Name: CRICKET27

Project Type: 2D Cricket Gaming Brand Website.

Website Purpose:
- Promote the CRICKET27 brand.
- Introduce the brand and its vision.
- Showcase the planned cricket game.
- Present promotional features.
- Display images, posters and videos.
- Publish gaming news and announcements.
- Build a gaming community.
- Provide contact information.

IMPORTANT:

This project is a promotional website, NOT an actual playable cricket game.

Do not create:
- Playable cricket matches.
- Cricket gameplay mechanics.
- Multiplayer functionality.
- Game engines.
- Game servers.
- 3D environments.

## 3. TECHNOLOGY STACK

Use the following technologies:

Frontend:
- React.js
- Vite
- JavaScript (JSX)
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React

Development:
- npm
- ESLint
- Git-compatible project structure

Use JavaScript, not TypeScript.

Use stable compatible package versions. Check the installed environment and official package compatibility before configuring dependencies.

## 4. FIRST TASK — INSPECT THE PROJECT

Before making changes:

1. Inspect the existing project directory.
2. Check existing files and dependencies.
3. Identify whether React and Vite are already configured.
4. Identify existing code that must be preserved.
5. Check the Node.js and npm environment.
6. Avoid deleting existing working files.
7. Do not overwrite configuration files without inspecting them.

If the project already has a working React/Vite setup, improve it instead of recreating it unnecessarily.

## 5. INITIALIZE THE FRONTEND

Configure the project with:

- React and Vite.
- JavaScript JSX support.
- Tailwind CSS.
- React Router DOM.
- Framer Motion.
- Lucide React.
- ESLint.

Ensure the Tailwind configuration matches the installed Tailwind version. Do not blindly use outdated configuration instructions.

Configure:
- package.json
- vite.config.js
- index.html
- eslint.config.js
- main.jsx
- App.jsx

Add suitable scripts:
- npm run dev
- npm run build
- npm run preview
- npm run lint

## 6. CREATE THE PROJECT ARCHITECTURE

Create the following organised frontend structure:

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
│   └── Contact.jsx
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
├── data/
│   ├── navigation.js
│   ├── features.js
│   ├── news.js
│   ├── gallery.js
│   ├── faq.js
│   └── socialLinks.js
│
├── hooks/
├── routes/
│   └── AppRoutes.jsx
│
├── utils/
│   ├── constants.js
│   ├── animations.js
│   └── helpers.js
│
├── styles/
│   ├── globals.css
│   ├── animations.css
│   └── typography.css
│
├── App.jsx
└── main.jsx

public/
└── assets/
    ├── branding/
    ├── hero/
    ├── backgrounds/
    ├── game-concept/
    ├── features/
    ├── gallery/
    ├── news/
    ├── community/
    ├── promotional-posters/
    ├── videos/
    └── icons/

Create additional files only when genuinely required.

Do not create unnecessary empty components or duplicate folders.

## 7. CONFIGURE ROUTING

Set up React Router DOM.

Create these routes:

/                  → Home
/about             → About
/our-game          → OurGame
/features          → Features
/media             → Media
/news              → News
/news/:slug        → NewsDetails
/community         → Community
/faq               → FAQ
/contact           → Contact

Create a proper MainLayout and use it for the main website pages.

Create a custom 404 Not Found page or route.

For now, each page should contain only a clean, minimal placeholder with its page name.

Do not create complete page designs in this phase.

## 8. GLOBAL DESIGN FOUNDATION

Prepare the initial design tokens for CRICKET27.

Suggested brand colours:

Midnight Navy: #101827
Electric Lime: #B7F34A
Warm White: #F5F3EB
Slate Blue: #263449
Coral: #FF704D
Muted Text: #8491A3

Typography direction:
- Headings: Bebas Neue or Oswald.
- Body: Inter.

Create reusable CSS variables for:

- Primary and secondary colours.
- Background colours.
- Text colours.
- Typography.
- Spacing.
- Border radius.
- Container widths.
- Transition durations.
- Animation timing.

Keep the design system centralised so it can be refined in Phase 02.

Do not build the full visual design yet.

## 9. GLOBAL CSS

Prepare:

globals.css:
- CSS reset.
- Box sizing.
- Body styles.
- Font defaults.
- Base background.
- Text rendering.
- Link defaults.
- Image defaults.
- Selection styling.

typography.css:
- Heading hierarchy.
- Paragraph styles.
- Font weights.
- Responsive typography foundation.

animations.css:
- Initial reusable animation variables.
- Reduced-motion support.
- Basic transition utilities.

Avoid unnecessary global CSS rules.

## 10. APPLICATION FOUNDATION

Create a working App.jsx and main.jsx.

Requirements:
- React application must mount correctly.
- Router must work.
- Global styles must load.
- All ten routes must resolve.
- Layout must be reusable.
- Browser refresh must work on frontend routes during local development.
- No console errors.
- No broken imports.

The home route should show a simple CRICKET27 foundation screen with:
- CRICKET27 brand name.
- A short temporary tagline: BEYOND THE BOUNDARY.
- A minimal navigation test.
- A clear development placeholder.

Do not spend time designing the final homepage.

## 11. CODE QUALITY RULES

Follow these rules:

1. Write clean JSX.
2. Use functional React components.
3. Use meaningful component and variable names.
4. Keep code reusable.
5. Avoid unnecessary dependencies.
6. Avoid giant files.
7. Use semantic HTML.
8. Use accessible navigation.
9. Avoid emoji as professional interface icons.
10. Do not use inline styling everywhere.
11. Keep data separate from UI.
12. Add comments only when they clarify non-obvious logic.
13. Do not introduce TypeScript.
14. Do not introduce backend functionality.

## 12. STRICT PROJECT LIMITATIONS

This phase is FRONTEND FOUNDATION ONLY.

Do not implement:
- Node.js backend.
- Express.js.
- MongoDB.
- Database.
- API endpoints.
- Authentication.
- Admin dashboard.
- Payment gateway.
- Deployment.
- 3D graphics.
- Game mechanics.

Future backend integration will be planned separately.

## 13. TESTING AND VALIDATION

After implementation:

1. Run npm install if necessary.
2. Run npm run dev.
3. Open the local website.
4. Test all ten routes.
5. Refresh individual routes.
6. Check browser console.
7. Run npm run lint.
8. Run npm run build.
9. Fix all errors caused by this phase.
10. Verify that no unnecessary files or dependencies were introduced.

Do not claim a test passed unless you actually ran it.

## 14. PHASE 01 COMPLETION CRITERIA

Phase 01 is complete only when:

- React and Vite work correctly.
- JavaScript JSX is configured.
- Tailwind CSS works.
- React Router works.
- Framer Motion and Lucide React are installed.
- All ten website routes are configured.
- Folder architecture is created.
- Global styling foundation exists.
- MainLayout is configured.
- Every route loads successfully.
- Production build succeeds.
- No backend or game functionality has been created.

## 15. FINAL REPORT

After finishing, provide:

1. Project setup summary.
2. Complete folder structure.
3. Dependencies installed.
4. Files created or modified.
5. Route configuration.
6. Design foundation details.
7. Testing results.
8. Build results.
9. Remaining issues, if any.
10. Confirmation that Phase 01 is complete.

IMPORTANT:

Do not automatically start Phase 02.

Complete only Phase 01, verify everything, and wait for my approval before proceeding.