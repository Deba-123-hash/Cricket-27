# CRICKET27 — PHASE 05
# CINEMATIC HOMEPAGE HERO SECTION DEVELOPMENT

## 1. YOUR ROLE

Act as a Senior Frontend Developer, Senior UI/UX Designer, Creative Director, Cinematic Sports Website Designer, Senior Animation Developer and Expert Prompt Engineer.

Your task is to design and develop an exceptional homepage hero section for CRICKET27.

Think like a creative team designing the official website of an international cricket gaming brand.

Target visual quality: 9/10.

The final result must look premium, cinematic, visually engaging and professionally developed.

Do not create a generic gaming landing page.

## 2. PROJECT CONTEXT

Project Name: CRICKET27

Tagline: BEYOND THE BOUNDARY.

Project Type: Premium 2D Cricket Gaming Brand Website.

Website Purpose:
- Promote the CRICKET27 brand.
- Introduce the planned cricket gaming experience.
- Present the brand's identity.
- Attract visitors and cricket gaming enthusiasts.
- Encourage visitors to explore the website.

IMPORTANT:

CRICKET27 is a promotional website, NOT the playable cricket game.

Do not create a playable match, gameplay controls, a cricket simulator, multiplayer functionality or game engine.

## 3. FIRST TASK — INSPECT PREVIOUS PHASES

Before implementation:

1. Inspect the existing project.
2. Review Phase 01 project foundation.
3. Review Phase 02 brand identity.
4. Review Phase 03 design system.
5. Review Phase 04 navbar and global layout.
6. Inspect the existing Home.jsx page.
7. Inspect MainLayout.jsx.
8. Review existing reusable buttons and containers.
9. Review existing animation utilities.
10. Preserve all working code.

Do not rebuild existing components unnecessarily.

The new hero section must integrate with the existing global navbar and footer.

## 4. HERO DESIGN CONCEPT

Create a premium, full-width cinematic cricket hero.

Visual direction:

- International cricket stadium atmosphere.
- Night stadium or dramatic sports lighting.
- Powerful cricket photography.
- Deep Midnight Navy colour treatment.
- Electric Lime brand highlights.
- Strong editorial typography.
- Professional sports advertising composition.
- Premium esports-inspired graphic details.

The hero should communicate energy, ambition, competition and excitement.

Avoid excessive decorative elements.

## 5. HERO LAYOUT

Create a responsive hero with the following composition.

### A. Background

Use a high-quality original cricket promotional image.

Preferred visual:
- Professional cricket batsman.
- Dramatic stadium floodlights.
- Large stadium environment.
- Atmospheric shadows.
- Strong subject composition.
- Suitable negative space for text.

The image should feel like a premium sports campaign.

Use an original AI-generated image or properly licensed image.

Do not copy images from other cricket games or gaming brands.

### B. Background Treatment

Add carefully controlled visual layers:

1. Main background image.
2. Dark gradient overlay.
3. Bottom gradient for transition into the next section.
4. Optional subtle vignette.
5. Optional subtle texture.

Ensure that text remains readable.

Do not make the background excessively dark or hide the cricket artwork.

### C. Main Content

Place the hero text in a carefully selected position based on the image composition.

Use the following initial content:

Eyebrow:
THE NEXT CHAPTER OF CRICKET GAMING

Main headline:
BEYOND
THE BOUNDARY.

Brand:
CRICKET27

Supporting description:
A new cricket gaming vision built around the passion, intensity and excitement of the sport. Discover the world of CRICKET27.

Keep the content concise, confident and promotional.

Do not make unsupported claims about released features or game availability.

### D. CTA Buttons

Create two CTA buttons.

Primary:
EXPLORE OUR GAME

Destination:
/our-game

Secondary:
DISCOVER CRICKET27

Destination:
/about

Use existing reusable Button components from Phase 03.

Do not create duplicate button styling.

### E. Optional Scroll Indicator

Add a minimal scroll indicator near the bottom of the hero.

It should communicate that more content exists below.

Use subtle animation.

Do not use a distracting continuous animation.

## 6. TYPOGRAPHY

Use the Phase 02 typography system.

Main headline:
- Very bold.
- Large.
- Athletic.
- High contrast.
- Strong visual hierarchy.
- Responsive font sizing.

Supporting text:
- Clean.
- Readable.
- Limited line length.
- Comfortable line height.

Use the brand accent colour selectively.

Do not use too many font styles.

## 7. VISUAL DESIGN DETAILS

Create a distinctive hero rather than a simple background image with text.

Consider these elements where appropriate:

- Oversized typography.
- Small editorial eyebrow labels.
- Subtle horizontal lines.
- Brand number 27 as a graphic accent.
- Angular geometric overlays.
- Stadium lighting effects.
- Controlled gradient treatments.
- Fine decorative borders.
- Subtle image depth.

All decorative elements must support the design.

Do not add random circles, excessive glowing effects or unnecessary floating objects.

## 8. ANIMATION DEVELOPMENT

Use Framer Motion.

Create a polished entrance sequence.

Suggested animation order:

1. Background image fades into view.
2. Brand eyebrow appears.
3. Main headline reveals with controlled movement.
4. Supporting description fades in.
5. CTA buttons appear with subtle stagger.
6. Optional scroll indicator appears last.

Animation requirements:

- Smooth easing.
- Professional timing.
- No excessive bouncing.
- No distracting spinning.
- No unnecessary animation loops.
- Avoid layout shifts.
- Avoid heavy animation effects.

Create reusable animation variants if appropriate.

Respect prefers-reduced-motion.

Do not animate every element independently.

## 9. IMAGE QUALITY AND ASSET HANDLING

Prepare a dedicated hero asset location.

Recommended:
public/assets/hero/

Use a descriptive filename, such as:
cricket27-home-hero.webp

Requirements:
- High-quality image.
- Wide desktop composition.
- Suitable mobile crop or alternate mobile asset.
- Optimised image format.
- Correct image positioning.
- Appropriate alt text where image semantics require it.

If an original asset does not exist:

1. Identify the exact image requirement.
2. Generate or source an appropriate original/licensed image.
3. Save it in the correct asset folder.
4. Use the actual local asset path.
5. Verify the image loads.

Do not leave the final hero with a blank background or broken external image URL.

Do not use emoji as decorative cricket artwork.

## 10. RESPONSIVE HERO DESIGN

Create dedicated responsive behaviour.

### Large Desktop

- Large cinematic composition.
- Strong typography.
- Wide image presentation.
- Spacious content positioning.

### Standard Desktop and Laptop

- Balanced text and background.
- Maintain image subject visibility.
- Proper navbar clearance.

### Tablet

- Adjust text size.
- Adjust image positioning.
- Maintain CTA usability.
- Preserve visual hierarchy.

### Mobile

- Use a mobile-appropriate image crop or alternate asset.
- Keep headline readable.
- Stack CTA buttons when necessary.
- Maintain sufficient spacing.
- Avoid text overlapping the subject.
- Keep the hero visually impressive.
- Ensure content fits small screens.

Do not simply shrink the desktop design.

## 11. PERFORMANCE OPTIMISATION

Requirements:

- Optimise background image.
- Avoid unnecessarily large image downloads.
- Prevent layout shifts.
- Use appropriate responsive image handling.
- Avoid excessive Framer Motion effects.
- Avoid unnecessary re-renders.
- Use CSS for simple visual effects where appropriate.
- Ensure smooth scrolling and rendering.

Do not sacrifice visual quality for unnecessary effects.

## 12. COMPONENT ARCHITECTURE

Use reusable components where appropriate.

Suggested structure:

src/
├── components/
│   ├── sections/
│   │   └── HeroSection.jsx
│   └── animations/
│       ├── RevealOnScroll.jsx
│       └── StaggerContainer.jsx
│
├── sections/
│   └── home/
│       ├── HomeHero.jsx
│       └── HeroContent.jsx
│
└── pages/
    └── Home.jsx

Adapt to the actual existing project structure.

Do not create duplicate components if suitable reusable components already exist.

Keep Home.jsx clean and maintainable.

## 13. ACCESSIBILITY

Implement:

- Proper heading hierarchy.
- Accessible CTA labels.
- Visible focus states.
- Sufficient colour contrast.
- Keyboard-accessible buttons and links.
- Meaningful image alternative text where applicable.
- Reduced-motion support.

Do not make important text part of the background image itself.

## 14. STRICT LIMITATIONS

This phase is ONLY for the homepage hero section.

Do not:
- Build the About section.
- Build the Our Game section.
- Build the Features section.
- Build the Media section.
- Build the News section.
- Build the Community section.
- Modify the global footer unnecessarily.
- Implement backend.
- Implement database.
- Implement APIs.
- Add authentication.
- Add gameplay.
- Add 3D or WebGL.

Other homepage sections will be developed in Phase 06 and Phase 07.

## 15. TESTING AND VALIDATION

After implementation:

1. Open the homepage.
2. Verify the hero image loads.
3. Check headline positioning.
4. Check CTA navigation.
5. Check desktop appearance.
6. Check laptop appearance.
7. Check tablet appearance.
8. Check mobile appearance.
9. Check animation sequence.
10. Check reduced-motion behaviour.
11. Check navbar compatibility.
12. Check image loading performance.
13. Check browser console.
14. Run ESLint.
15. Run production build.

Fix errors caused by this phase.

Do not claim tests passed unless you actually ran them.

## 16. PHASE 05 COMPLETION CRITERIA

Phase 05 is complete when:

- Cinematic hero is implemented.
- High-quality cricket artwork is visible.
- Background overlays are professionally balanced.
- CRICKET27 branding is prominent.
- Headline and supporting content are polished.
- Both CTA buttons work.
- Entrance animations work.
- Responsive desktop and mobile designs work.
- Image loading is verified.
- Accessibility basics are implemented.
- Existing navbar and footer remain functional.
- Production build succeeds.

## 17. FINAL REPORT

Provide:

1. Hero design summary.
2. Image asset details.
3. Typography and content details.
4. CTA destinations.
5. Animation details.
6. Responsive implementation summary.
7. Files created or modified.
8. Testing results.
9. ESLint results.
10. Production build results.
11. Remaining issues.

IMPORTANT:

Complete only Phase 05.

Do not automatically start Phase 06.

Wait for my approval before continuing.