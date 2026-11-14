# CRICKET27 — PHASE 16 MASTER DEVELOPMENT PROMPT
## Complete Contact Page & Interactive Inquiry Experience

### PROJECT INFORMATION

Project Name: CRICKET27  
Brand: CRICKET27  
Tagline: BEYOND THE BOUNDARY.  
Current Phase: 16 of 24  
Phase Name: Contact Page Development

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

Act as a senior React frontend developer, UI/UX designer, frontend architect and professional contact-page design specialist.

Your task is to build a complete, premium-quality Contact page for the CRICKET27 promotional website.

The page should provide visitors with a clear and professional way to explore contact options and prepare an inquiry.

Create a premium sports brand contact experience rather than a generic contact form template.

IMPORTANT:
This phase is frontend-only. Do not connect the form to any backend, email service or external API.

### 2. INSPECT THE EXISTING PROJECT FIRST

Before making modifications:

1. Inspect the complete project structure.
2. Review completed Phases 01–15.
3. Inspect the existing `/contact` route.
4. Review the global design system.
5. Inspect existing Navbar and Footer.
6. Review existing Input, Button and Card components.
7. Inspect existing form-related components.
8. Check existing social link configuration.
9. Review animation utilities.
10. Inspect available contact-related brand assets.

IMPORTANT:
- Preserve all previous work.
- Do not recreate the project.
- Do not duplicate existing components.
- Reuse the existing design system.
- Do not modify unrelated pages unnecessarily.

### 3. BRAND IDENTITY

Use the existing CRICKET27 design system.

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

Visual style:
- Premium sports editorial.
- Modern esports identity.
- Clean contact layouts.
- Bold headings.
- Cinematic visual accents.
- Professional form design.
- Consistent spacing.
- Smooth interactions.

Avoid:
- Generic contact templates.
- Excessive gradients.
- Excessive glassmorphism.
- Unnecessary visual clutter.
- Emoji interface icons.

Use Lucide React icons.

### 4. CONTACT PAGE STRUCTURE

Develop the following sections in order.

#### SECTION 1 — CONTACT HERO

Create a premium Contact page hero.

Eyebrow:
GET IN TOUCH

Main heading:
LET'S START A CONVERSATION.

Description:
Have a question, an idea or something you'd like to share about CRICKET27? We'd be glad to hear from you.

Breadcrumb:
Home / Contact

Design requirements:
- Dark navy background.
- Cinematic cricket-inspired visual.
- Bold typography.
- Electric Lime accent.
- Responsive composition.
- Smooth Framer Motion entrance animation.

#### SECTION 2 — CONTACT INTRODUCTION

Heading:
WE'RE HERE TO CONNECT.

Description:
Whether you want to ask a question, share feedback or discuss an opportunity, this page is the starting point for connecting with CRICKET27.

Create a two-column layout:
- Left: introduction and contact information.
- Right: visual or supporting brand artwork.

Maintain strong visual hierarchy and professional spacing.

#### SECTION 3 — CONTACT INFORMATION CARDS

Create attractive contact information cards.

Card 1 — GENERAL INQUIRIES

Description:
For general questions about CRICKET27 and the website.

Card 2 — BRAND & PARTNERSHIPS

Description:
For potential brand collaborations and partnership discussions.

Card 3 — FEEDBACK & SUGGESTIONS

Description:
Share your thoughts, suggestions and feedback about the CRICKET27 experience.

Card 4 — MEDIA & CREATIVE

Description:
For media-related questions and creative discussions.

Requirements:
- Lucide React icons.
- Professional card layouts.
- Subtle hover animations.
- Consistent spacing.
- Responsive grid.

IMPORTANT:
Do not invent:
- Email addresses.
- Phone numbers.
- Office addresses.
- Business hours.
- Team member names.

Only display contact details if they are already verified in the existing project.

If verified details are unavailable, display a clearly labelled "Contact details coming soon" state.

#### SECTION 4 — INTERACTIVE CONTACT FORM

Create a professional inquiry form.

Heading:
SEND US A MESSAGE.

Description:
Share your inquiry using the form below.

Form fields:

1. Full Name
   - Required
   - Text input
   - Minimum 2 characters

2. Email Address
   - Required
   - Email input
   - Basic email validation

3. Inquiry Type
   - Required
   - Select input

Options:
- General Inquiry
- Brand & Partnerships
- Feedback & Suggestions
- Media & Creative
- Other

4. Subject
   - Required
   - Text input
   - Clear character limit

5. Message
   - Required
   - Textarea
   - Minimum 10 characters
   - Maximum 1000 characters
   - Character counter

6. Privacy Acknowledgement
   - Checkbox
   - Required
   - Clearly labelled

Submit button:
SEND MESSAGE

Requirements:
- Controlled React form state.
- Individual field validation.
- Clear validation messages.
- Invalid field highlighting.
- Email format validation.
- Required field validation.
- Character counter.
- Disabled or loading-style submission state when appropriate.
- Accessible labels.
- Keyboard navigation.
- Responsive form layout.

IMPORTANT FRONTEND-ONLY BEHAVIOUR:

There is no backend or email integration in this phase.

When a visitor submits the form:
- Validate the form locally.
- Do not send any information to a server.
- Do not store personal information in a database.
- Do not claim that a real email was sent.
- Do not claim that CRICKET27 received the message.

After successful local validation, display a clear message:

"Your form has been validated successfully. Message delivery is not available yet."

Provide an option to reset the form.

#### SECTION 5 — CONTACT PROCESS

Heading:
HOW TO CONNECT WITH US.

Create a simple three-step visual process.

STEP 01 — SHARE YOUR QUERY

Choose the inquiry type and describe what you need.

STEP 02 — PROVIDE DETAILS

Add your contact details and a clear message.

STEP 03 — STAY UPDATED

Follow the official CRICKET27 channels for future communication information.

This is an informational UI section, not a real message delivery workflow.

#### SECTION 6 — SOCIAL CONNECTION

Heading:
FOLLOW THE CRICKET27 JOURNEY.

Description:
Explore our community page to find available social channels and future updates.

Button:
VISIT COMMUNITY → `/community`

Optionally show social platform icons by reusing `src/data/socialLinks.js`.

Rules:
- Do not invent social URLs.
- Do not create fake clickable links.
- Show Coming Soon for unavailable channels.
- Reuse the existing social link configuration.

#### SECTION 7 — FAQ SUPPORT CTA

Heading:
LOOKING FOR QUICK ANSWERS?

Description:
You may find what you need in our frequently asked questions.

Button:
VISIT FAQ → `/faq`

Reuse the existing design system.

#### SECTION 8 — FINAL CTA

Heading:
BEYOND THE BOUNDARY STARTS HERE.

Description:
Discover the CRICKET27 vision and explore the world we are building around cricket.

Buttons:
EXPLORE OUR GAME → `/our-game`
BACK TO HOME → `/`

Create a premium closing section with a cinematic visual and Electric Lime accent.

### 5. COMPONENT ARCHITECTURE

Create reusable components where appropriate:

- ContactHero.jsx
- ContactIntroduction.jsx
- ContactInfoCards.jsx
- ContactForm.jsx
- ContactProcess.jsx
- ContactSocialSection.jsx
- ContactFAQCTA.jsx
- ContactFinalCTA.jsx

Suggested shared form components:
- FormInput.jsx
- FormSelect.jsx
- FormTextarea.jsx
- FormCheckbox.jsx
- FormErrorMessage.jsx

Reuse existing shared components wherever possible.

Do not create duplicate buttons, inputs or card components.

Keep the page modular and maintainable.

### 6. FORM VALIDATION ARCHITECTURE

Use React state and existing project conventions.

Validation requirements:

Full Name:
- Required.
- Minimum 2 characters.
- Trim unnecessary whitespace.

Email:
- Required.
- Basic valid email format.
- Display a clear error when invalid.

Inquiry Type:
- Required.
- Must be one of the available options.

Subject:
- Required.
- Minimum 3 characters.
- Maximum 100 characters.

Message:
- Required.
- Minimum 10 characters.
- Maximum 1000 characters.

Privacy Acknowledgement:
- Must be checked.

Additional requirements:
- Validate on submission.
- Show field-specific errors.
- Clear the relevant error when the field is corrected.
- Prevent invalid local submission.
- Avoid logging personal form information to the console.

Do not add an unnecessary form library.

### 7. DATA AND PRIVACY REQUIREMENTS

This is a frontend-only implementation.

Do not:
- Submit personal information to external services.
- Save form information in localStorage.
- Save form information in sessionStorage.
- Send email.
- Create a fake success confirmation.
- Log personal data.
- Add third-party tracking.

Clearly explain that actual message delivery will be added in a future backend phase.

### 8. ANIMATION REQUIREMENTS

Use Framer Motion.

Implement:
- Hero entrance animation.
- Heading reveal.
- Contact card stagger.
- Form entrance.
- Input focus transitions.
- Validation feedback transitions.
- Process step reveal.
- Final CTA animation.

Respect prefers-reduced-motion.

Keep interactions smooth and professional.

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
- Contact information cards stack correctly.
- Form fields remain readable.
- Buttons fit mobile screens.
- Textareas are usable.
- Validation messages do not break layouts.
- No horizontal overflow.
- Proper mobile spacing.
- Touch-friendly controls.

### 10. ACCESSIBILITY

Implement:
- Semantic HTML.
- Accessible field labels.
- Required field indicators.
- Proper error associations.
- ARIA attributes where necessary.
- Keyboard navigation.
- Visible focus indicators.
- Accessible checkbox.
- Clear success and error announcements.
- Sufficient colour contrast.
- Reduced-motion support.

### 11. PERFORMANCE

Optimise:
- Form state updates.
- Component rendering.
- Images.
- Animation performance.
- Reusable form components.
- Unnecessary dependencies.

Do not install unnecessary libraries.

### 12. STRICT PROJECT RESTRICTIONS

This phase is frontend-only.

DO NOT BUILD:
- Backend.
- Node/Express server.
- Database.
- APIs.
- Authentication.
- Email services.
- Real contact submission.
- CRM integration.
- Admin dashboard.
- CMS.
- File upload service.
- Payment functionality.
- Game engine.
- Cricket gameplay.
- Three.js.
- WebGL.
- 3D models or scenes.

Do not modify unrelated pages.

### 13. FINAL TESTING CHECKLIST

Verify:

[ ] `/contact` opens correctly.

[ ] Navbar works.

[ ] Footer works.

[ ] Contact hero displays correctly.

[ ] Contact information cards display correctly.

[ ] No invented contact details appear.

[ ] Full Name validation works.

[ ] Email validation works.

[ ] Inquiry Type selection works.

[ ] Subject validation works.

[ ] Message validation works.

[ ] Character counter works.

[ ] Privacy checkbox validation works.

[ ] Field-specific errors display correctly.

[ ] Valid form displays the correct frontend-only confirmation.

[ ] No data is sent externally.

[ ] Reset form works.

[ ] Social links use verified URLs only.

[ ] FAQ CTA works.

[ ] Community CTA works.

[ ] Final CTA links work.

[ ] Mobile layout works.

[ ] Tablet layout works.

[ ] No horizontal overflow.

[ ] No broken images.

[ ] No console errors.

[ ] ESLint passes.

[ ] Production build succeeds.

### 14. FINAL DEVELOPMENT REPORT

After completing Phase 16, provide:

1. Phase completion summary.
2. Files created.
3. Files modified.
4. Components developed.
5. Contact form fields.
6. Validation logic.
7. Privacy and frontend-only behaviour.
8. Social link integration.
9. Responsive testing results.
10. Accessibility improvements.
11. ESLint results.
12. Production build results.
13. Remaining issues.

### 15. PHASE COMPLETION RULE

Complete Phase 16 only.

Do not automatically start Phase 17.

Preserve all completed work from Phases 01–15.

Do not redesign other completed pages.

Do not introduce backend functionality.

After successful implementation and testing, stop and wait for my approval.

**PHASE 16 SUCCESS CRITERIA:**

The final Contact page must look like a premium sports brand contact experience with professional contact cards, a working frontend inquiry form, field-level validation, clear privacy behaviour, responsive layouts and polished interactions.