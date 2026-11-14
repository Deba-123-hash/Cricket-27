# CRICKET27 — PHASE 15 MASTER DEVELOPMENT PROMPT
## Complete FAQ Page & Advanced Interactive Help Center

### PROJECT INFORMATION

Project Name: CRICKET27  
Brand: CRICKET27  
Tagline: BEYOND THE BOUNDARY.  
Current Phase: 15 of 24  
Phase Name: Complete FAQ Page Development

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

### 1. YOUR ROLE

Act as a senior React frontend developer, UI/UX designer, accessibility specialist and professional website help-center designer.

Your task is to develop a complete, polished FAQ page for CRICKET27.

The page must help visitors quickly find answers about the brand, its vision, game concepts, media, community and general information.

Build a premium interactive help-center experience rather than a basic list of questions.

### 2. INSPECT THE EXISTING PROJECT FIRST

Before modifying the project:

1. Inspect the entire project structure.
2. Review completed Phases 01–14.
3. Inspect the existing `/faq` route.
4. Review the FAQ preview created in Phase 07.
5. Review the FAQ preview on the Community page from Phase 14.
6. Inspect the existing `src/data/faq.js`.
7. Review reusable Accordion, Button, Input and SectionHeading components.
8. Inspect the global design system and animation utilities.
9. Review existing Navbar and Footer.

IMPORTANT:
- Preserve all completed phases.
- Do not recreate the project.
- Do not duplicate FAQ data.
- Reuse existing components.
- Maintain visual consistency.
- Do not unnecessarily modify other pages.

### 3. BRAND DESIGN REQUIREMENTS

Follow the existing CRICKET27 visual identity.

Colours:
- Midnight Navy: #101827
- Electric Lime: #B7F34A
- Warm White: #F5F3EB
- Slate Blue: #263449
- Coral: #FF704D
- Muted Text: #8491A3

Typography:
- Headings: Bebas Neue or Oswald.
- Body: Inter.

Visual direction:
- Premium sports editorial design.
- Modern help-center interface.
- Clean layouts.
- Strong typography.
- Clear question hierarchy.
- Subtle interactive elements.
- Professional spacing.
- Minimal visual clutter.

Avoid:
- Generic FAQ templates.
- Excessive gradients.
- Excessive glassmorphism.
- Unnecessary animations.
- Emoji as interface icons.

### 4. FAQ PAGE STRUCTURE

Develop the following sections in order.

#### SECTION 1 — FAQ HERO

Create an attractive FAQ hero section.

Eyebrow:
CRICKET27 HELP CENTER

Main heading:
GOT QUESTIONS? LET'S CLEAR THINGS UP.

Description:
Find answers to common questions about CRICKET27, our vision, the cricket gaming concept, community and future updates.

Breadcrumb:
Home / FAQ

Design requirements:
- Midnight Navy background.
- Large bold headline.
- Electric Lime accent.
- Subtle cricket-inspired visual.
- Responsive layout.
- Smooth entrance animations.

#### SECTION 2 — FAQ SEARCH INTERFACE

Create a fully functional FAQ search experience.

Search placeholder:
Search your question here...

Requirements:
- Search input.
- Search icon.
- Clear button.
- Search by question.
- Search by answer.
- Case-insensitive matching.
- Live filtering.
- Clear search functionality.
- Empty search state.
- Responsive design.

Example:
Searching "game" should show relevant questions and answers containing the word game.

IMPORTANT:
The search must operate on local static FAQ data.

Do not create a decorative search field that does nothing.

#### SECTION 3 — FAQ CATEGORY FILTERS

Create category filters.

Categories:

1. All Questions
2. About CRICKET27
3. Our Game
4. Features
5. Availability
6. Community
7. Media & Updates
8. General

Requirements:
- Working category filters.
- Active category indicator.
- Smooth transitions.
- Responsive horizontal scrolling where needed.
- Keyboard accessibility.
- Clear selected state.

Use the existing FAQ category names if they are already established. Avoid creating inconsistent duplicate categories.

#### SECTION 4 — FAQ QUESTION ACCORDIONS

Create a professional accordion interface.

Requirements:
- Clear question titles.
- Smooth expand and collapse animation.
- Plus/minus or chevron icons.
- Accessible keyboard interaction.
- Proper ARIA attributes.
- Good content spacing.
- Responsive layout.

Interaction rules:
- Clicking a question opens its answer.
- Clicking it again closes it.
- Decide whether multiple questions can remain open or only one, and use a consistent behaviour.
- Provide a clear active state.

Organise questions into their categories.

#### SECTION 5 — FAQ CONTENT

Create accurate, useful answers for the following topics.

CATEGORY A — ABOUT CRICKET27

Q1. What is CRICKET27?

A:
CRICKET27 is a cricket gaming brand concept focused on presenting a fresh vision for cricket gaming through a dedicated promotional website.

Q2. What does "Beyond the Boundary" mean?

A:
It represents the passion, imagination and excitement that make cricket more than just a sport.

Q3. What is the vision behind CRICKET27?

A:
Our vision is to build a distinctive cricket gaming identity that celebrates the sport and its community.

CATEGORY B — OUR GAME

Q4. What is the CRICKET27 game concept?

A:
CRICKET27 represents a cricket gaming concept built around the excitement, passion and presentation of the sport.

Q5. Is CRICKET27 currently available to play?

A:
Game availability has not been confirmed. Please follow official CRICKET27 updates for verified information.

Q6. Which platforms will support CRICKET27?

A:
Supported platforms have not yet been confirmed.

CATEGORY C — FEATURES

Q7. What features are planned for CRICKET27?

A:
The website presents concepts around batting, bowling, fielding, match presentation, competitive experiences and customisation. These are concepts, not confirmation of implemented game features.

Q8. Will CRICKET27 include different cricket experiences?

A:
The website explores different cricket experience concepts. Specific gameplay modes have not yet been confirmed.

CATEGORY D — AVAILABILITY

Q9. When will CRICKET27 launch?

A:
An official launch date has not been confirmed.

Q10. Where can I find official updates?

A:
Visit the CRICKET27 website and check the News and Community sections for verified updates when they become available.

CATEGORY E — COMMUNITY

Q11. How can I stay connected with CRICKET27?

A:
Visit the Community page to find information about our community vision and available official social channels.

Q12. Will CRICKET27 introduce community activities?

A:
Future community activities have not yet been confirmed. Any official information will be shared through verified CRICKET27 channels.

CATEGORY F — MEDIA & UPDATES

Q13. Where can I find CRICKET27 images and artwork?

A:
Visit the Media page to explore available visual concepts, promotional artwork and brand imagery.

Q14. Where can I read CRICKET27 news?

A:
Visit the News page for available brand stories, editorial content and updates.

CATEGORY G — GENERAL

Q15. How can I contact CRICKET27?

A:
Visit the Contact page to find the available contact information and communication options.

Q16. Can I use CRICKET27 branding or artwork?

A:
Do not assume that CRICKET27 branding or artwork is available for reuse. Contact the brand owner for permission before using protected materials.

IMPORTANT CONTENT RULES:

- Keep answers simple and direct.
- Do not invent official release dates.
- Do not invent platform support.
- Do not claim that planned game features are already implemented.
- Do not invent company history, partnerships or achievements.
- Keep the FAQ content data-driven.
- Correctly label unconfirmed information.

#### SECTION 6 — FAQ RESULTS AND EMPTY STATE

When search or category filtering returns no results, display a professional empty state.

Example:

NO QUESTIONS FOUND.

Try another search term or select a different category.

Include a Clear Filters button.

Requirements:
- Correctly reset search and category state.
- No blank page.
- No broken layouts.
- Accessible feedback.

#### SECTION 7 — CONTACT SUPPORT CTA

Create a support-style CTA.

Heading:
STILL HAVE QUESTIONS?

Description:
If you could not find the information you were looking for, visit our Contact page to explore the available ways to reach us.

Button:
CONTACT US → `/contact`

Design:
- Premium dark background.
- Electric Lime accent.
- Clear CTA.
- Responsive layout.

Do not display an unverified email address or phone number.

### 5. FAQ DATA ARCHITECTURE

Use:

`src/data/faq.js`

Keep all FAQ information separate from the React components.

Recommended structure:

- id
- question
- answer
- category
- keywords

Example:

{
  id: 1,
  question: "What is CRICKET27?",
  answer: "CRICKET27 is a cricket gaming brand concept...",
  category: "About CRICKET27",
  keywords: ["brand", "cricket", "gaming"]
}

Use the existing data format if it is already established.

Ensure the homepage and Community FAQ previews can reuse the same source data.

Avoid duplicating questions across separate files.

### 6. COMPONENT ARCHITECTURE

Create reusable components as needed:

- FAQHero.jsx
- FAQSearch.jsx
- FAQCategoryFilter.jsx
- FAQAccordion.jsx
- FAQItem.jsx
- FAQEmptyState.jsx
- FAQContactCTA.jsx

Reuse existing shared components wherever possible.

Do not create duplicate Accordion, Input or Button implementations.

Keep the page modular and maintainable.

### 7. ADVANCED FRONTEND INTERACTIONS

Implement:
- Live FAQ search.
- Category filtering.
- Accordion open/close behaviour.
- Search clearing.
- Category reset.
- Empty-state handling.
- Smooth scrolling to FAQ results if appropriate.
- Accessible keyboard interactions.

Search and category filters must work together.

For example:
- Select "Our Game".
- Search "platform".
- Display only matching questions from the selected category.

Reset pagination or other irrelevant UI states if necessary.

### 8. ANIMATION REQUIREMENTS

Use Framer Motion.

Implement:
- Hero entrance animation.
- Heading reveal.
- Search field entrance.
- Category transition.
- Accordion expansion.
- FAQ item stagger.
- Contact CTA entrance.

Respect prefers-reduced-motion.

Keep transitions smooth and lightweight.

### 9. RESPONSIVE DESIGN

Test at:

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

Requirements:
- Search field fits mobile.
- Category filters remain accessible.
- Questions wrap properly.
- Answers remain readable.
- Accordion controls are touch-friendly.
- No horizontal overflow.
- CTA layout adapts correctly.

### 10. ACCESSIBILITY

Implement:
- Semantic HTML.
- Accessible search label.
- Correct accordion ARIA attributes.
- Keyboard navigation.
- Visible focus indicators.
- Proper button labels.
- Correct heading hierarchy.
- Sufficient colour contrast.
- Reduced-motion support.

### 11. PERFORMANCE

Optimise:
- FAQ rendering.
- Search filtering.
- State management.
- Animation performance.
- Component reuse.
- Unnecessary re-renders.

Do not install unnecessary dependencies.

### 12. STRICT PROJECT RESTRICTIONS

This phase is strictly frontend-only.

DO NOT BUILD:
- Backend.
- Node/Express server.
- Database.
- APIs.
- Authentication.
- User login.
- Support ticket system.
- Live chat.
- Admin dashboard.
- CMS.
- Email submission service.
- External search service.
- Game engine.
- Cricket gameplay.
- Three.js.
- WebGL.
- 3D models or scenes.

Use local static FAQ data.

Do not unnecessarily modify other completed pages.

### 13. FINAL TESTING CHECKLIST

Verify:

[ ] `/faq` opens correctly.

[ ] Navbar and footer work.

[ ] FAQ hero displays correctly.

[ ] Search by question works.

[ ] Search by answer works.

[ ] Search is case-insensitive.

[ ] Clear search works.

[ ] All eight category filters work.

[ ] Search and category filters work together.

[ ] Accordion opens and closes correctly.

[ ] Keyboard interaction works.

[ ] Empty state displays correctly.

[ ] Clear Filters resets the interface.

[ ] Contact CTA works.

[ ] Homepage FAQ preview still works.

[ ] Community FAQ preview still works.

[ ] FAQ content remains accurate.

[ ] No fake contact details appear.

[ ] Mobile and tablet layouts work.

[ ] No horizontal overflow.

[ ] No console errors.

[ ] ESLint passes.

[ ] Production build succeeds.

### 14. FINAL DEVELOPMENT REPORT

After completing Phase 15, provide:

1. Phase completion summary.
2. Files created.
3. Files modified.
4. Components developed.
5. FAQ data structure.
6. Search functionality details.
7. Category filter functionality.
8. Accordion behaviour.
9. Homepage and Community FAQ integration.
10. Responsive testing results.
11. Accessibility improvements.
12. ESLint results.
13. Production build results.
14. Remaining issues.

### 15. PHASE COMPLETION RULE

Complete Phase 15 only.

Do not automatically start Phase 16.

Preserve all completed work from Phases 01–14.

Do not redesign unrelated pages.

Do not introduce backend functionality.

After successful testing, stop and wait for my approval.

**PHASE 15 SUCCESS CRITERIA:**

The completed CRICKET27 FAQ page must function as a premium interactive help center with live search, eight working category filters, accessible accordions, accurate answers, empty states and a responsive design.