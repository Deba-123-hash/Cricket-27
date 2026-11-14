# CRICKET27 — PHASE 14 MASTER DEVELOPMENT PROMPT
## Complete Community Page & Community Engagement Experience

### PROJECT INFORMATION

Project Name: CRICKET27  
Brand Tagline: BEYOND THE BOUNDARY.  
Current Phase: 14 of 24  
Phase Name: Community Page Development

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

Act as a senior frontend developer, professional UI/UX designer, React architect and sports community website specialist.

Your responsibility is to create a complete, premium-quality Community page for the CRICKET27 website.

The page should communicate the importance of cricket culture, shared passion, competitive spirit and community identity.

Build an engaging community experience that makes visitors feel connected to the CRICKET27 brand.

Do not create a generic social media landing page.

### 2. INSPECT THE EXISTING PROJECT FIRST

Before modifying any files:

1. Inspect the entire project structure.
2. Review completed Phases 01–13.
3. Inspect the existing `/community` route.
4. Review the global design system.
5. Inspect existing Navbar and Footer.
6. Review existing CTA, card and button components.
7. Inspect animation utilities.
8. Review existing social link data, if available.
9. Check the existing asset library.

IMPORTANT:
- Preserve all previously completed phases.
- Do not recreate the project.
- Do not duplicate existing components.
- Reuse the existing design system.
- Do not unnecessarily change other pages.
- Keep the existing navigation and footer consistent.

### 3. BRAND IDENTITY AND VISUAL DIRECTION

Use the established CRICKET27 colour palette:

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
- Premium sports community identity.
- Cinematic stadium photography.
- Cricket fan culture.
- Bold typography.
- Modern esports-inspired design.
- Strong editorial layouts.
- Professional image compositions.
- Clean spacing.
- Subtle interactions.

Avoid:
- Generic community templates.
- Excessive gradients.
- Excessive glassmorphism.
- Unnecessary decorative elements.
- Emoji as interface icons.

Use Lucide React icons and original visual artwork.

### 4. COMMUNITY PAGE STRUCTURE

Develop the following sections in order.

#### SECTION 1 — COMMUNITY HERO

Create a visually powerful Community page hero.

Eyebrow:
THE CRICKET27 COMMUNITY

Main heading:
ONE GAME. ONE PASSION. ONE COMMUNITY.

Description:
Cricket brings people together. CRICKET27 celebrates the passion, excitement and shared spirit of cricket fans who believe the game is more than just a sport.

CTA 1:
EXPLORE OUR VISION → `/about`

CTA 2:
DISCOVER OUR GAME → `/our-game`

Design requirements:
- Full-width cinematic stadium or cricket crowd background.
- Dark navy overlay.
- Large bold typography.
- Electric Lime accent.
- Responsive layout.
- Smooth Framer Motion entrance animations.

Do not use fake photographs of an existing CRICKET27 event.

#### SECTION 2 — OUR COMMUNITY PHILOSOPHY

Heading:
MORE THAN FANS. A SHARED PASSION.

Description:
The love of cricket connects people across different backgrounds, places and generations. Our community vision is built around this shared passion, creativity and excitement for the game.

Create an editorial two-column layout.

Include:
- Large cricket crowd visual.
- Supporting content.
- Small visual highlights.
- Subtle image animation.

Use genuine brand philosophy rather than unsupported claims about an existing user base.

#### SECTION 3 — COMMUNITY VALUES

Heading:
WHAT BRINGS US TOGETHER.

Create four premium community value cards.

CARD 1 — PASSION

Description:
A shared love for cricket and everything that makes the sport special.

CARD 2 — CONNECTION

Description:
Bringing cricket enthusiasts together through a common interest.

CARD 3 — COMPETITIVE SPIRIT

Description:
Celebrating ambition, sportsmanship and the excitement of competition.

CARD 4 — CREATIVITY

Description:
Exploring fresh ideas and new ways to express our love for cricket.

Requirements:
- Custom icons using Lucide React.
- Professional card layouts.
- Hover interactions.
- Responsive grid.
- Subtle animation.
- Consistent spacing.

#### SECTION 4 — THE CRICKET CULTURE

Heading:
THE ENERGY THAT UNITES US.

Create a visual storytelling section celebrating cricket culture.

Include visual themes:
- Stadium atmosphere.
- Supporters and fans.
- Team spirit.
- Match-day excitement.
- Cricket traditions.
- The emotional connection with the sport.

Requirements:
- Large editorial images.
- Asymmetric grid layout.
- Image overlays.
- Short descriptive captions.
- Smooth reveal animations.

Use original or appropriately licensed visual assets.

Do not imply that these visuals represent actual CRICKET27 community events.

#### SECTION 5 — COMMUNITY HIGHLIGHTS

Heading:
A COMMUNITY BUILT AROUND THE GAME.

Create a premium highlight section.

Showcase these planned community content themes:

1. Cricket Conversations.
2. Creative Fan Culture.
3. Cricket Gaming Discussions.
4. Community Stories.
5. Match-Day Moments.
6. Shared Cricket Experiences.

Each highlight should have:
- Icon or visual.
- Heading.
- Short description.
- Consistent card layout.

IMPORTANT:
These are proposed community themes, not confirmed active programmes or existing community activities.

Do not invent:
- Number of community members.
- User statistics.
- Active competitions.
- Community achievements.
- Testimonials.
- Real event participation figures.

#### SECTION 6 — SOCIAL MEDIA CONNECTION

Heading:
FOLLOW THE CRICKET27 JOURNEY.

Description:
Stay connected with CRICKET27 and follow future brand updates, visual stories and community announcements.

Create social platform cards for:

- Instagram
- YouTube
- Facebook
- X

Requirements:
- Professional platform icons.
- Platform name.
- Short descriptive text.
- Follow or Visit button only when a real verified URL exists.

IMPORTANT:
Do not invent social media URLs or pretend accounts already exist.

Create a central configuration file:

`src/data/socialLinks.js`

Each platform should support:
- id
- name
- icon
- url
- description
- enabled

When a real URL is unavailable:
- Show a clearly labelled "Coming Soon" state.
- Disable the external navigation button.
- Do not create a fake hyperlink.
- Keep the design visually complete.

When a real URL is available, open it safely in a new tab.

#### SECTION 7 — COMMUNITY CONTENT PREVIEW

Heading:
STORIES FROM THE WORLD OF CRICKET.

Create a preview area showing community-related editorial content.

Possible categories:
- Cricket Culture.
- Fan Stories.
- Game Discussions.
- Brand Updates.

Requirements:
- Reuse the existing news data when suitable.
- Use existing NewsCard components where appropriate.
- Link articles to `/news/:slug`.
- Display no more than three preview cards.
- Add a link to the News page.

Do not create fake testimonials, comments or community posts.

#### SECTION 8 — COMMUNITY FAQ PREVIEW

Heading:
QUESTIONS ABOUT OUR COMMUNITY?

Display 3–4 relevant questions.

Suggested questions:

1. How can I stay connected with CRICKET27?
2. Where can I find CRICKET27 updates?
3. Will CRICKET27 introduce community activities?
4. How can I follow future announcements?

Use honest answers.

Explain that future community activities and official social channels will be shared when available.

Requirements:
- Accessible accordion.
- Smooth open/close transitions.
- Keyboard navigation.
- Reuse the existing FAQ component if appropriate.

CTA:
VIEW ALL QUESTIONS → `/faq`

#### SECTION 9 — FINAL COMMUNITY CTA

Create a large closing section.

Heading:
THE GAME IS BETTER TOGETHER.

Description:
Be part of the spirit behind CRICKET27. Explore our vision, discover the game concept and follow the journey ahead.

Buttons:

EXPLORE CRICKET27 → `/about`

DISCOVER OUR GAME → `/our-game`

Use:
- Cinematic cricket stadium background.
- Strong headline.
- Electric Lime accent.
- Professional CTA styling.
- Subtle animations.

### 5. COMPONENT ARCHITECTURE

Create reusable components as appropriate:

- CommunityHero.jsx
- CommunityIntroduction.jsx
- CommunityValues.jsx
- CommunityCulture.jsx
- CommunityHighlights.jsx
- SocialMediaSection.jsx
- CommunityContentPreview.jsx
- CommunityFAQPreview.jsx
- CommunityCTA.jsx

Use existing components wherever possible.

Do not create duplicate button, card, accordion or news components.

Keep the Community page modular and maintainable.

### 6. DATA ARCHITECTURE

Create or extend:

`src/data/socialLinks.js`

Recommended structure:

- id
- name
- icon
- url
- description
- enabled

Use existing `faq.js` and `news.js` data when appropriate.

Avoid duplicating information that already exists in the project.

Keep data separate from UI components.

### 7. ADVANCED INTERACTIONS

Implement:
- Social platform card hover interactions.
- Responsive CTA interactions.
- Community value card animations.
- Interactive FAQ accordion.
- Community content navigation.
- Smooth section transitions.
- Accessible buttons and links.

All interactive controls must perform their intended actions.

Do not create decorative controls that appear functional but do nothing.

### 8. ANIMATION REQUIREMENTS

Use Framer Motion.

Implement:
- Hero entrance animation.
- Heading reveal.
- Image reveal.
- Community value card stagger.
- Culture gallery transitions.
- Social card hover interactions.
- FAQ accordion transitions.
- Final CTA entrance.

Respect prefers-reduced-motion.

Keep animations smooth, lightweight and professional.

### 9. RESPONSIVE DESIGN

Test the complete Community page at:

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
- No horizontal overflow.
- Responsive hero composition.
- Correct image positioning.
- Community cards stack properly.
- Social cards remain readable.
- FAQ accordion works on mobile.
- CTA buttons remain touch-friendly.
- Typography scales correctly.
- No broken layouts.

### 10. ACCESSIBILITY

Implement:
- Semantic HTML.
- Correct heading hierarchy.
- Keyboard navigation.
- Visible focus states.
- Accessible accordion controls.
- Descriptive icon labels.
- Proper image alt text.
- Sufficient colour contrast.
- Accessible external links.
- Reduced-motion support.

### 11. PERFORMANCE OPTIMISATION

Optimise:
- Community images.
- Lazy loading.
- Image dimensions.
- Animation performance.
- React rendering.
- Component reuse.
- Unnecessary state updates.

Avoid loading large images unnecessarily.

### 12. STRICT PROJECT RESTRICTIONS

This phase is frontend-only.

DO NOT BUILD:
- Backend.
- Node/Express server.
- Database.
- APIs.
- Authentication.
- User registration.
- Login system.
- Social media integration APIs.
- Community chat.
- Real-time messaging.
- User-generated content system.
- Comment system.
- Admin dashboard.
- Payment system.
- Game engine.
- Cricket gameplay.
- Three.js.
- WebGL.
- 3D models or scenes.

Use local static data.

Do not claim that planned community features are already operational.

### 13. FINAL TESTING CHECKLIST

Verify:

[ ] `/community` opens correctly.

[ ] Navbar and footer work.

[ ] Hero displays correctly.

[ ] Community introduction displays correctly.

[ ] Four community values render correctly.

[ ] Culture section displays available assets.

[ ] Community highlights render correctly.

[ ] Social platform cards display correctly.

[ ] Coming Soon states work.

[ ] No fake social URLs exist.

[ ] Verified social links open safely.

[ ] Community content preview links work.

[ ] FAQ accordion works.

[ ] FAQ page navigation works.

[ ] All CTA links work.

[ ] Responsive layouts work.

[ ] No broken images.

[ ] No horizontal overflow.

[ ] No console errors.

[ ] ESLint passes.

[ ] Production build succeeds.

### 14. FINAL DEVELOPMENT REPORT

After completing Phase 14, provide:

1. Phase completion summary.
2. Files created.
3. Files modified.
4. Components developed.
5. Community sections implemented.
6. Social link configuration details.
7. FAQ integration details.
8. Asset information.
9. Responsive testing results.
10. Accessibility improvements.
11. ESLint results.
12. Production build results.
13. Remaining issues.

### 15. PHASE COMPLETION RULE

Complete Phase 14 only.

Do not automatically start Phase 15.

Preserve all work from Phases 01–13.

Do not redesign previously completed pages.

Do not introduce backend or database functionality.

After successful implementation and testing, stop and wait for my approval.

**PHASE 14 SUCCESS CRITERIA:**

The final CRICKET27 Community page must provide a premium, cinematic community experience with brand philosophy, community values, cricket culture, social platform presentation, community content previews and responsive layouts.