# CRICKET27 — BRAND GUIDELINES & VISUAL IDENTITY MANUAL
## Phase 02: Design Foundation & Brand Language Specification

---

## 1. Brand Essence & Personality

**CRICKET27** represents the next generation of international cricket gaming. It bridges the dramatic, electric atmosphere of broadcast stadium cricket with the sharp, pixel-perfect responsiveness of modern esports.

### Core Brand Attributes
- **Competitive:** Built for skill-first tacticians and reflex masters.
- **Energetic:** Electric Lime sparks against deep midnight stadium shadows.
- **Premium:** Confident typography, generous negative space, editorial compositions.
- **Authentic:** Faithful to cricket seam physics, fielding placements, and stadium atmospheres.

### The Hybrid Aesthetic
1. **Cinematic Sports:** Dramatic floodlight cones, stadium bowl silhouettes, low-angle athletic poses, pitch degradation, and telephoto lens composition.
2. **Modern Esports:** Geometric shield crest, athletic condensed typography, 120 FPS high-refresh HUD telemetry, and sharp contrast borders.

---

## 2. Logo & Brand Mark Suite

The CRICKET27 brand mark is engineered around a hexagonal athletic shield, dual cricket seam arcs, a distinctive diagonal monogram "27", and an energy node.

| Variant | Purpose | Recommended Placement | Min Size |
|---|---|---|---|
| **Primary Horizontal** | Standard identity | Website navbar, press releases, video endcards | 140px width |
| **Compact Stacked** | Centered layouts | App splash screens, merchandise tags, posters | 80px width |
| **Symbol Mark** | Standalone icon | Favicon, social avatars, mobile launcher icons | 28px width |
| **Monochrome White** | Single-color print | Apparel embroidery, dark media overlays, watermark | 120px width |
| **Light-Background** | High contrast on light | Stationery, invoices, light mode documents | 140px width |
| **Dark-Background** | Luminous on dark | Default web canvas, OLED stadium displays | 140px width |

### Logo Rules & Clear Space
- **Clear Space:** Maintain minimum clearance equal to 50% of the shield height around all logo edges.
- **Do Not:** Rotate the logo, distort aspect ratio, alter individual letter spacing, or substitute unofficial colors.

---

## 3. Brand Colour System

| Colour Name | Token | Hex Code | RGB | Contrast (WCAG) | Primary Role |
|---|---|---|---|---|---|
| **Midnight Navy** | `--color-midnight` | `#101827` | `rgb(16, 24, 39)` | 15.4:1 on Warm White | Canvas background, deep stadium shadow |
| **Electric Lime** | `--color-lime` | `#B7F34A` | `rgb(183, 243, 74)` | 12.8:1 on Midnight | Primary brand accent, CTAs, live stats |
| **Warm White** | `--color-warm-white` | `#F5F3EB` | `rgb(245, 243, 235)` | 15.4:1 on Midnight | Main headings, editorial text, light panels |
| **Slate Blue** | `--color-slate` | `#263449` | `rgb(38, 52, 73)` | 4.8:1 on Midnight | Cards, structural borders, subtle dividers |
| **Coral Accent** | `--color-coral` | `#FF704D` | `rgb(255, 112, 77)` | 6.2:1 on Midnight | Urgent highlights, live wickets, energy nodes |
| **Muted Text** | `--color-muted` | `#8491A3` | `rgb(132, 145, 163)` | 5.2:1 on Midnight | Captions, metadata, author bylines |

---

## 4. Typography System

- **Headings Font:** `Oswald` / `Bebas Neue` (condensed athletic sans-serif, uppercase, tracking `0.04em` to `0.08em`).
- **Body Font:** `Inter` (geometric sans-serif, line-height `1.65`, optical size adjusted).
- **Telemetry Monospace:** `font-mono` / `Rajdhani` (athletic numerals for velocity, run rates, and timing).

### Scale Hierarchy
- **Display 1:** `clamp(3rem, 6vw + 1rem, 5.5rem)` (Oswald 900)
- **H1:** `clamp(2.25rem, 4.5vw + 0.5rem, 4rem)` (Oswald 700)
- **H2:** `clamp(1.75rem, 3vw + 0.5rem, 2.75rem)` (Oswald 700)
- **H3:** `clamp(1.35rem, 2vw + 0.25rem, 2rem)` (Oswald 700)
- **Body Large:** `1.125rem / 1.7` (Inter 400)
- **Body Regular:** `1rem / 1.65` (Inter 400)
- **Body Small:** `0.875rem / 1.5` (Inter 400)
- **Eyebrow / Badge:** `0.75rem / 1` (Oswald 700, uppercase, letter-spacing `0.15em`)

---

## 5. Media Asset Inventory & Requirements

All visual sections are backed by bespoke high-resolution vector artwork in `public/assets/` to ensure zero empty boxes.

| Asset File | Target Placement | Aspect Ratio | Dimensions | Purpose |
|---|---|---|---|---|
| `hero-cricket-batter.svg` | Hero Section | 16:9 | 1920x1080 | Floodlit cover drive batter key art |
| `brand-intro-stadium.svg` | About / Intro | 16:9 | 1920x1080 | Panoramic stadium bowl with lights |
| `game-concept-pitch.svg` | Our Game Page | 16:9 | 1920x1080 | 2D tactical field radar & delivery arc |
| `features-physics-telemetry.svg` | Features Page | 16:9 | 1920x1080 | Ball seam angle, speed & Hawkeye DRS |
| `gallery-poster-beyond.svg` | Gallery / Posters | 3:4 | 1080x1440 | Limited edition esports promotional poster |
| `news-devlog-thumb.svg` | News & Devlogs | 16:9 | 1280x720 | Developer diary thumbnail with telemetry |
| `community-squad-banner.svg` | Community Hub | 21:9 | 1600x685 | Discord banner & squad clubhouse graphic |
| `social-promo-square.svg` | Social / Marketing | 1:1 | 1080x1080 | Square brand announcement visual |

---

## 6. Iconography & Button Controls

- **Library:** Lucide React (standardized `2px` stroke, optical sizes: `16px`, `20px`, `24px`, `32px`).
- **Button System:**
  - `primary`: Electric Lime surface, Midnight Navy text, subtle glow hover.
  - `secondary`: Slate Blue surface, Warm White text, lime border on hover.
  - `outline`: Transparent canvas, Slate border, lime fill on hover.
  - `coral`: Coral surface, Midnight Navy text for high-urgency notifications.
  - `magnetic`: 2D physics cursor attraction on desktop pointers.
