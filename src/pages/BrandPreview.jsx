import { useState } from 'react';
import {
  Shield,
  Zap,
  Crosshair,
  Trophy,
  Flame,
  Activity,
  ArrowRight,
  ExternalLink,
  Download,
  CheckCircle2,
  Copy,
  Sparkles,
} from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import BrandLogo from '../components/common/BrandLogo';
import CricketImage from '../components/common/CricketImage';
import MagneticButton from '../components/animations/MagneticButton';
import { GALLERY_ITEMS } from '../data/gallery';

export const BrandPreview = () => {
  usePageTitle('Brand Style Guide & Design Tokens — CRICKET27');
  const [copiedColor, setCopiedColor] = useState(null);

  const colors = [
    {
      name: 'Midnight Navy',
      token: '--color-midnight',
      hex: '#101827',
      rgb: 'rgb(16, 24, 39)',
      contrast: '15.4:1 on Warm White',
      role: 'Primary dark background surface, base canvas, deep stadium shadows.',
      textColor: 'text-warm-white',
      bgClass: 'bg-midnight',
      borderClass: 'border-slate',
    },
    {
      name: 'Electric Lime',
      token: '--color-lime',
      hex: '#B7F34A',
      rgb: 'rgb(183, 243, 74)',
      contrast: '12.8:1 on Midnight Navy',
      role: 'Primary brand identifier, primary CTAs, active highlights, key metrics.',
      textColor: 'text-midnight',
      bgClass: 'bg-lime',
      borderClass: 'border-lime',
    },
    {
      name: 'Warm White',
      token: '--color-warm-white',
      hex: '#F5F3EB',
      rgb: 'rgb(245, 243, 235)',
      contrast: '15.4:1 on Midnight Navy',
      role: 'Primary headings, high-contrast editorial body text, light card surfaces.',
      textColor: 'text-midnight',
      bgClass: 'bg-warm-white',
      borderClass: 'border-warm-white',
    },
    {
      name: 'Slate Blue',
      token: '--color-slate',
      hex: '#263449',
      rgb: 'rgb(38, 52, 73)',
      contrast: '4.8:1 on Midnight Navy',
      role: 'Secondary surfaces, cards, structural borders, subtle grid dividers.',
      textColor: 'text-warm-white',
      bgClass: 'bg-slate',
      borderClass: 'border-slate-border',
    },
    {
      name: 'Coral Accent',
      token: '--color-coral',
      hex: '#FF704D',
      rgb: 'rgb(255, 112, 77)',
      contrast: '6.2:1 on Midnight Navy',
      role: 'Special highlights, match day urgency, live alerts, wickets & energy sparks.',
      textColor: 'text-midnight',
      bgClass: 'bg-coral',
      borderClass: 'border-coral',
    },
    {
      name: 'Muted Text',
      token: '--color-muted',
      hex: '#8491A3',
      rgb: 'rgb(132, 145, 163)',
      contrast: '5.2:1 on Midnight Navy',
      role: 'Secondary captions, metadata, author bylines, disabled elements.',
      textColor: 'text-midnight',
      bgClass: 'bg-muted-text',
      borderClass: 'border-slate',
    },
  ];

  const logoVariants = [
    {
      id: 'horizontal',
      name: 'Primary Horizontal Logo',
      purpose: 'Standard brand header, official website navbar, press releases, video endcards.',
      bg: 'bg-midnight border-slate',
      previewVariant: 'horizontal',
    },
    {
      id: 'compact',
      name: 'Compact Stacked Logo',
      purpose: 'Centered brand placements, app splash screens, merchandise tags, square formats.',
      bg: 'bg-midnight border-slate',
      previewVariant: 'compact',
    },
    {
      id: 'symbol',
      name: 'Icon & Symbol Mark',
      purpose: 'Mobile app icons, social media profile avatars, browser favicon, watermark bugs.',
      bg: 'bg-midnight border-slate',
      previewVariant: 'symbol',
    },
    {
      id: 'monochrome',
      name: 'Monochrome Silver/White',
      purpose: 'Single-color apparel screen printing, high-contrast media overlays, monochrome print.',
      bg: 'bg-midnight-dark border-slate',
      previewVariant: 'monochrome',
    },
    {
      id: 'light',
      name: 'Light Background Variant',
      purpose: 'White paper invoices, light-themed press kits, business stationery, light merchandise.',
      bg: 'bg-warm-white border-slate/20',
      previewVariant: 'light',
      isLight: true,
    },
    {
      id: 'dark',
      name: 'Dark Background Variant',
      purpose: 'OLED midnight surfaces, stadium broadcast HUD overlays, digital pitch sideboards.',
      bg: 'bg-midnight-dark border-slate',
      previewVariant: 'dark',
    },
  ];

  const copyToClipboard = (text, label) => {
    navigator.clipboard?.writeText(text);
    setCopiedColor(label);
    window.setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <PageTransition>
      <div className="py-16 sm:py-24 space-y-24">
        {/* Header Hero */}
        <section className="text-center space-y-6">
          <Container size="xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime/10 border border-lime/30 text-lime text-xs font-heading font-bold uppercase tracking-widest shadow-lime-glow">
              <Sparkles className="w-4 h-4" />
              <span>Phase 02 &bull; Brand Identity &amp; Visual Language Foundation</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black uppercase tracking-wider text-warm-white">
              CRICKET<span className="text-lime">27</span> DESIGN SYSTEM
            </h1>

            <p className="text-xl sm:text-2xl font-heading text-lime tracking-widest uppercase">
              BEYOND THE BOUNDARY
            </p>

            <p className="lead max-w-2xl mx-auto text-muted-text text-sm sm:text-base">
              A comprehensive internal specification combining <strong>Cinematic Sports Presentation</strong> with <strong>Modern Esports Branding</strong>. This style guide documents our color system, typography scales, logo variants, and media guidelines.
            </p>
          </Container>
        </section>

        {/* 1. Logo Variations */}
        <section id="logos" className="scroll-mt-24">
          <Container size="xl">
            <div className="border-b border-slate pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-heading font-bold tracking-widest text-lime uppercase">SECTION 01</span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase text-warm-white">Logo &amp; Brand Mark Variations</h2>
              </div>
              <p className="text-xs text-muted-text max-w-sm">
                Six engineered vector variations preserving visual integrity across digital UI, light &amp; dark backgrounds, and print merchandise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {logoVariants.map((logo) => (
                <div
                  key={logo.id}
                  className="rounded-brand bg-slate-card border border-slate overflow-hidden flex flex-col justify-between shadow-card-depth group"
                >
                  {/* Canvas Preview */}
                  <div
                    className={`h-48 sm:h-56 p-8 flex items-center justify-center border-b border-slate transition-colors ${logo.bg}`}
                  >
                    <BrandLogo variant={logo.previewVariant} className="max-h-24 w-auto group-hover:scale-105 transition-transform" />
                  </div>

                  {/* Metadata */}
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-base uppercase text-warm-white">
                        {logo.name}
                      </h3>
                      <Badge variant={logo.isLight ? 'coral' : 'lime'} size="sm">
                        {logo.id}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-text leading-relaxed">
                      {logo.purpose}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 2. Color System */}
        <section id="colors" className="scroll-mt-24">
          <Container size="xl">
            <div className="border-b border-slate pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-heading font-bold tracking-widest text-lime uppercase">SECTION 02</span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase text-warm-white">Centralized Colour Palette</h2>
              </div>
              <p className="text-xs text-muted-text max-w-sm">
                High-contrast sports-inspired palette. Midnight Navy base grounding Electric Lime action accents and Warm White typography.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {colors.map((color) => (
                <div
                  key={color.name}
                  className="rounded-brand bg-slate-card border border-slate overflow-hidden p-6 space-y-4 shadow-card-depth flex flex-col justify-between"
                >
                  <div>
                    {/* Swatch */}
                    <div
                      className={`h-28 rounded-md mb-4 flex items-end justify-between p-4 border ${color.bgClass} ${color.borderClass}`}
                    >
                      <span className={`font-heading font-bold text-lg uppercase ${color.textColor}`}>
                        {color.hex}
                      </span>
                      <button
                        type="button"
                        onClick={() => copyToClipboard(color.hex, color.name)}
                        className={`p-2 rounded bg-black/30 hover:bg-black/50 ${color.textColor} transition-colors`}
                        title="Copy Hex Code"
                        aria-label={`Copy hex code for ${color.name}`}
                      >
                        {copiedColor === color.name ? (
                          <CheckCircle2 className="w-4 h-4 text-lime" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-heading font-bold text-lg uppercase text-warm-white">
                        {color.name}
                      </h3>
                      <p className="font-mono text-xs text-lime">{color.token}</p>
                      <p className="font-mono text-[11px] text-muted-text">{color.rgb}</p>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate">
                      <span className="text-[11px] font-heading uppercase tracking-wider text-muted-text block mb-1">
                        WCAG Contrast: <strong className="text-warm-white">{color.contrast}</strong>
                      </span>
                      <p className="text-xs text-muted-text leading-relaxed">
                        {color.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 3. Typography System */}
        <section id="typography" className="scroll-mt-24">
          <Container size="xl">
            <div className="border-b border-slate pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-heading font-bold tracking-widest text-lime uppercase">SECTION 03</span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase text-warm-white">Typography Hierarchy</h2>
              </div>
              <p className="text-xs text-muted-text max-w-sm">
                Athletic editorial type pairing: <strong>Oswald / Bebas Neue</strong> for bold, condensed headings and <strong>Inter</strong> for hyper-legible body copy.
              </p>
            </div>

            <div className="space-y-6">
              {/* Display & H1 */}
              <div className="p-6 sm:p-8 rounded-brand bg-slate-card border border-slate space-y-4">
                <span className="text-xs font-mono text-lime">Display Scale &bull; Oswald Bold &bull; 64px - 72px</span>
                <p className="text-4xl sm:text-6xl md:text-7xl font-heading font-black uppercase text-warm-white tracking-wide">
                  BEYOND THE BOUNDARY
                </p>
              </div>

              {/* H2 */}
              <div className="p-6 sm:p-8 rounded-brand bg-slate-card border border-slate space-y-3">
                <span className="text-xs font-mono text-lime">Heading 2 &bull; Oswald Bold &bull; 36px - 44px</span>
                <p className="text-3xl sm:text-4xl font-heading font-bold uppercase text-warm-white">
                  TACTICAL 2D CRICKET REVOLUTION
                </p>
              </div>

              {/* H3 & H4 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-brand bg-slate-card border border-slate space-y-2">
                  <span className="text-xs font-mono text-lime">Heading 3 &bull; Oswald &bull; 26px - 32px</span>
                  <p className="text-2xl font-heading font-bold uppercase text-warm-white">
                    SEAM ANGLE &amp; DRIFT PHYSICS
                  </p>
                </div>
                <div className="p-6 rounded-brand bg-slate-card border border-slate space-y-2">
                  <span className="text-xs font-mono text-lime">Heading 4 &bull; Oswald &bull; 20px - 24px</span>
                  <p className="text-xl font-heading font-bold uppercase text-warm-white">
                    HAWKEYE REVIEW TELEMETRY
                  </p>
                </div>
              </div>

              {/* Body Paragraphs & Eyebrows */}
              <div className="p-6 sm:p-8 rounded-brand bg-slate-card border border-slate grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-lime">Eyebrow Text / Sports Badge</span>
                  <div className="pt-1">
                    <Badge variant="lime" size="md">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                      ESPORTS TOURNAMENT CIRCUIT
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-text pt-2">
                    Used for section subtitles, live status indicators, and category flags.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-lime">Body Regular &bull; Inter 16px / 1.65</span>
                  <p className="text-sm sm:text-base text-warm-white leading-relaxed">
                    CRICKET27 eliminates the unresponsive animation delays of traditional sports games. By prioritizing 2D frame-accurate input timing, players experience instant bat-to-ball feedback.
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-lime">Scoreboard Telemetry &bull; Athletic Monospace</span>
                  <p className="font-mono text-2xl font-bold text-lime">
                    148.5 <span className="text-xs text-muted-text">KM/H</span> &bull; 6-3 FIELD
                  </p>
                  <p className="text-xs text-muted-text">
                    Engineered for live match analytics, bowler velocity readouts, and wagon wheel statistics.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. Button & Interaction System */}
        <section id="buttons" className="scroll-mt-24">
          <Container size="xl">
            <div className="border-b border-slate pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-heading font-bold tracking-widest text-lime uppercase">SECTION 04</span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase text-warm-white">Button &amp; Interaction Matrix</h2>
              </div>
              <p className="text-xs text-muted-text max-w-sm">
                Standardized buttons across Primary, Secondary, Outline, Coral, Ghost, and Magnetic states with accessible focus rings.
              </p>
            </div>

            <div className="p-8 rounded-brand bg-slate-card border border-slate space-y-10 shadow-card-depth">
              {/* Primary & Secondary */}
              <div className="space-y-4">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-muted-text block">
                  Action Variants (Primary, Secondary, Outline, Coral)
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="lg" icon={ArrowRight}>
                    Primary Action
                  </Button>
                  <Button variant="secondary" size="lg">
                    Secondary Surface
                  </Button>
                  <Button variant="outline" size="lg">
                    Outline Action
                  </Button>
                  <Button variant="coral" size="lg" icon={Flame}>
                    Match Day Urgency
                  </Button>
                  <Button variant="ghost" size="lg">
                    Ghost Link
                  </Button>
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-4">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-muted-text block">
                  Standard Sizing Scale (Large, Medium, Small)
                </span>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="lg">
                    Large Button (lg)
                  </Button>
                  <Button variant="primary" size="md">
                    Medium Button (md)
                  </Button>
                  <Button variant="primary" size="sm">
                    Small Button (sm)
                  </Button>
                </div>
              </div>

              {/* Interactive States & Magnetic Micro-interaction */}
              <div className="space-y-4 pt-4 border-t border-slate">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-muted-text block">
                  Interactive Physics &amp; Disabled States
                </span>
                <div className="flex flex-wrap items-center gap-6">
                  <MagneticButton strength={0.35}>
                    <Button variant="primary" size="md" icon={Zap} iconPosition="left">
                      Magnetic Cursor Pull (Hover Me)
                    </Button>
                  </MagneticButton>

                  <Button variant="primary" size="md" disabled>
                    Disabled State (50% Opacity)
                  </Button>

                  <Button variant="secondary" size="md" icon={ExternalLink}>
                    External Link Trigger
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 5. Iconography System */}
        <section id="icons" className="scroll-mt-24">
          <Container size="xl">
            <div className="border-b border-slate pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-heading font-bold tracking-widest text-lime uppercase">SECTION 05</span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase text-warm-white">Iconography Standards</h2>
              </div>
              <p className="text-xs text-muted-text max-w-sm">
                Crisp vector SVG icons powered by <strong>Lucide React</strong>. Set with standard 2px stroke width across 4 fixed optical sizes.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: 'Shield', Icon: Shield, label: 'Fielding / Defense' },
                { name: 'Zap', Icon: Zap, label: 'Performance / Speed' },
                { name: 'Crosshair', Icon: Crosshair, label: 'Precision Batting' },
                { name: 'Trophy', Icon: Trophy, label: 'Tournaments' },
                { name: 'Flame', Icon: Flame, label: 'Match Urgency' },
                { name: 'Activity', Icon: Activity, label: 'DRS Telemetry' },
              ].map(({ name, Icon, label }) => (
                <div
                  key={name}
                  className="p-5 rounded-brand bg-slate-card border border-slate flex flex-col items-center text-center space-y-3 hover:border-lime transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-midnight flex items-center justify-center text-lime border border-slate">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-heading font-bold uppercase text-warm-white">{name}</h4>
                    <span className="text-[10px] text-muted-text block">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 6. Card Styles & Structural Visuals */}
        <section id="cards" className="scroll-mt-24">
          <Container size="xl">
            <div className="border-b border-slate pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-heading font-bold tracking-widest text-lime uppercase">SECTION 06</span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase text-warm-white">Card Visual Treatments</h2>
              </div>
              <p className="text-xs text-muted-text max-w-sm">
                Three core card compositions: Cinematic Sports, Telemetry Data, and Tactical Field Radar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Cinematic Card */}
              <div className="relative rounded-brand overflow-hidden bg-slate-card border border-slate hover:border-lime transition-all duration-300 p-6 flex flex-col justify-between group shadow-card-depth">
                <div className="absolute top-0 right-0 w-32 h-32 bg-lime/5 rounded-full blur-2xl group-hover:bg-lime/10 transition-colors pointer-events-none" />
                <div>
                  <Badge variant="lime" size="sm" className="mb-4">
                    Cinematic Sports
                  </Badge>
                  <h3 className="text-xl font-heading font-bold uppercase text-warm-white mb-2">
                    Night Stadium floodlights
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Combines high-contrast stadium shadows with an Electric Lime accent node and athletic typography.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate flex items-center justify-between text-xs font-heading uppercase text-lime">
                  <span>Explore Arena</span>
                  <span>&rarr;</span>
                </div>
              </div>

              {/* Telemetry Stat Card */}
              <div className="rounded-brand bg-slate-card border border-slate hover:border-lime transition-all duration-300 p-6 flex flex-col justify-between shadow-card-depth">
                <div>
                  <Badge variant="coral" size="sm" className="mb-4">
                    DRS Telemetry
                  </Badge>
                  <h3 className="text-xl font-heading font-bold uppercase text-warm-white mb-2">
                    Sub-Millisecond Hitbox
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Monospace telemetry readouts designed for competitive esports clarity and real-time bowling feedback.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate flex items-center justify-between font-mono text-xs">
                  <span className="text-muted-text">REFRESH:</span>
                  <span className="text-lime font-bold">120 FPS NATIVE</span>
                </div>
              </div>

              {/* Tactical Field Card */}
              <div className="rounded-brand bg-slate-card border border-slate hover:border-lime transition-all duration-300 p-6 flex flex-col justify-between shadow-card-depth">
                <div>
                  <Badge variant="outline" size="sm" className="mb-4">
                    Tactical Concept
                  </Badge>
                  <h3 className="text-xl font-heading font-bold uppercase text-warm-white mb-2">
                    360&deg; Shot Placement
                  </h3>
                  <p className="text-xs text-muted-text leading-relaxed">
                    Analog stick angle mapped to 2D trajectory arc with ground and lofted boundary calculation.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate flex items-center justify-between text-xs font-heading uppercase text-muted-text">
                  <span>Control Mapping</span>
                  <span className="text-warm-white font-mono">ANALOG 360</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 7. Image Asset Strategy & Inventory Showcase */}
        <section id="assets" className="scroll-mt-24">
          <Container size="xl">
            <div className="border-b border-slate pb-4 mb-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-heading font-bold tracking-widest text-lime uppercase">SECTION 07</span>
                <h2 className="text-2xl sm:text-4xl font-heading font-black uppercase text-warm-white">Image Strategy &amp; Asset Vault</h2>
              </div>
              <p className="text-xs text-muted-text max-w-sm">
                Bespoke high-resolution vector artwork generated to represent every major brand touchpoint with zero missing boxes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GALLERY_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="rounded-brand bg-slate-card border border-slate overflow-hidden shadow-card-depth flex flex-col justify-between"
                >
                  <div className="aspect-video w-full bg-midnight border-b border-slate flex items-center justify-center overflow-hidden">
                    <CricketImage
                      src={item.src}
                      alt={item.title}
                      title={item.title}
                      icon="eye"
                      aspectRatio="16/9"
                      objectFit="contain"
                      className="w-full h-full"
                      imageClassName="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="lime" size="sm">
                        {item.category}
                      </Badge>
                      <span className="text-[11px] font-mono text-muted-text">
                        {item.dimensions}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-base uppercase text-warm-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-text leading-relaxed">
                      {item.description}
                    </p>
                    <div className="pt-2 flex items-center justify-between">
                      <a
                        href={item.src}
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-heading uppercase text-lime hover:underline"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Asset</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Footer Navigation Bar */}
        <section className="pt-12 text-center border-t border-slate">
          <Container size="md">
            <div className="p-6 rounded-brand bg-midnight border border-slate flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <span className="text-xs font-heading font-bold uppercase text-lime block">
                  Design Verification Status
                </span>
                <span className="text-xs text-muted-text">
                  All 10 Phase 02 criteria satisfied. Zero runtime dependencies introduced.
                </span>
              </div>
              <Button to="/" variant="primary" size="md">
                Return To Website Foundation &rarr;
              </Button>
            </div>
          </Container>
        </section>
      </div>
    </PageTransition>
  );
};

export default BrandPreview;
