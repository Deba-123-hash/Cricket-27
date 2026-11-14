import { useState } from 'react';
import {
  Shield,
  Zap,
  Crosshair,
  Trophy,
  Flame,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Sparkles,
  RefreshCw,
  FolderOpen,
} from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';

// Component Library Imports
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import IconButton from '../components/common/IconButton';
import Badge from '../components/common/Badge';
import Divider from '../components/common/Divider';
import Breadcrumb from '../components/common/Breadcrumb';
import LoadingSpinner from '../components/common/LoadingSpinner';
import EmptyState from '../components/common/EmptyState';
import ErrorState from '../components/common/ErrorState';
import PageHeader from '../components/common/PageHeader';
import BrandLogo from '../components/common/BrandLogo';
import MagneticButton from '../components/animations/MagneticButton';

// Typography Primitives
import Heading from '../components/typography/Heading';
import Text from '../components/typography/Text';

// Card System
import FeatureCard from '../components/cards/FeatureCard';
import NewsCard from '../components/cards/NewsCard';
import GalleryCard from '../components/cards/GalleryCard';
import MediaCard from '../components/cards/MediaCard';
import InformationCard from '../components/cards/InformationCard';
import HighlightCard from '../components/cards/HighlightCard';
import CommunityCard from '../components/cards/CommunityCard';

// Media Components
import ResponsiveImage from '../components/media/ResponsiveImage';
import ImageWithOverlay from '../components/media/ImageWithOverlay';
import ImageCard from '../components/media/ImageCard';

// Layout Primitives
import SectionWrapper from '../components/layout/SectionWrapper';
import SplitLayout from '../components/layout/SplitLayout';
import ResponsiveGrid from '../components/layout/ResponsiveGrid';
import ContentWithImage from '../components/layout/ContentWithImage';

// Navigation Primitives
import DropdownMenu from '../components/navigation/DropdownMenu';
import MobileMenuButton from '../components/navigation/MobileMenuButton';
import SocialLink from '../components/navigation/SocialLink';

// Phase 17 Interactive UI Primitives
import {
  Dropdown,
  Tabs,
  SegmentedControl,
  Accordion,
  Modal,
  ConfirmDialog,
  Tooltip,
} from '../components/interactions';
import { useToast } from '../hooks/useToast';

export const DesignSystem = () => {
  usePageTitle('Complete UI/UX Design System & Component Library — CRICKET27');
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [selectedSegment, setSelectedSegment] = useState('t20');
  const [selectedDropdown, setSelectedDropdown] = useState('Pro Edition');
  const toast = useToast();

  const sampleFeature = {
    id: 'precision-batting',
    title: 'Precision 2D Batting System',
    category: 'Gameplay Mechanics',
    summary: 'Sub-millisecond input timing and 360-degree shot placement with authentic trajectory physics.',
    badge: 'Core Mechanic',
    iconName: 'Crosshair',
    highlight: true,
  };

  const sampleArticle = {
    id: 'announcing-cricket27',
    slug: 'introducing-cricket27-reimagining-2d-cricket-gaming',
    title: 'Introducing CRICKET27: Reimagining 2D Cricket Gaming',
    date: '2026-11-01',
    category: 'Studio Dispatch',
    readTime: '4 min read',
    excerpt: 'We are thrilled to officially unveil CRICKET27 — an international gaming brand dedicated to bringing world-class 2D cricket gaming back into the spotlight.',
    image: '/assets/news/news-devlog-thumb.svg',
    featured: true,
  };

  const sampleGalleryItem = {
    id: 'hero-cricket-batter',
    title: 'Floodlit Match Stance Artwork',
    category: 'Stadium Art',
    src: '/assets/hero/hero-cricket-batter.svg',
    dimensions: '1920x1080 (16:9)',
  };

  return (
    <PageTransition>
      <div className="py-12 sm:py-20 space-y-20">
        {/* Top Header */}
        <PageHeader
          eyebrow="Phase 03 Component Library"
          title="CRICKET27"
          highlightText="Design System"
          subtitle="A complete, accessible, production-ready UI/UX component library engineered for an international cricket gaming brand website."
          breadcrumbs={[
            { label: 'Development', to: '/' },
            { label: 'Design System & Component Library' },
          ]}
          action={
            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setLoadingBtn(true);
                  window.setTimeout(() => setLoadingBtn(false), 1500);
                }}
                loading={loadingBtn}
              >
                Test Loading State
              </Button>
            </div>
          }
        />

        {/* Section 1: Color Tokens & Feedback States */}
        <SectionWrapper bg="midnight-dark" padding="sm" bordered>
          <Container size="xl">
            <div className="mb-8">
              <span className="text-xs font-heading font-bold text-lime uppercase tracking-widest">
                TOKENS 01
              </span>
              <Heading as="h2" size="h2">
                Brand &amp; Feedback Colours
              </Heading>
              <Text variant="muted">
                Core dark stadium tones paired with Electric Lime and semantic feedback states (Success, Warning, Error, Info).
              </Text>
            </div>

            <ResponsiveGrid cols={4} gap="sm">
              {[
                { name: 'Midnight Navy', hex: '#101827', role: 'Canvas Surface', bg: 'bg-midnight', text: 'text-warm-white' },
                { name: 'Electric Lime', hex: '#B7F34A', role: 'Brand Accent / Primary Action', bg: 'bg-lime', text: 'text-midnight' },
                { name: 'Warm White', hex: '#F5F3EB', role: 'Primary Typography', bg: 'bg-warm-white', text: 'text-midnight' },
                { name: 'Slate Blue', hex: '#263449', role: 'Card & Border Surface', bg: 'bg-slate', text: 'text-warm-white' },
                { name: 'Coral Accent', hex: '#FF704D', role: 'Wickets / Match Day', bg: 'bg-coral', text: 'text-midnight' },
                { name: 'Success Green', hex: '#22C55E', role: 'Validated / Active', bg: 'bg-success', text: 'text-midnight' },
                { name: 'Warning Amber', hex: '#F59E0B', role: 'Alert / Maintenance', bg: 'bg-warning', text: 'text-midnight' },
                { name: 'Error Crimson', hex: '#EF4444', role: 'Failure / Disconnection', bg: 'bg-error', text: 'text-warm-white' },
              ].map((swatch) => (
                <div key={swatch.name} className="p-4 rounded-brand bg-slate-card border border-slate shadow-card-depth space-y-2">
                  <div className={`h-16 rounded-md flex items-end p-2.5 ${swatch.bg}`}>
                    <span className={`font-mono text-xs font-bold ${swatch.text}`}>{swatch.hex}</span>
                  </div>
                  <h4 className="font-heading font-bold text-sm uppercase text-warm-white">{swatch.name}</h4>
                  <p className="text-[11px] text-muted-text">{swatch.role}</p>
                </div>
              ))}
            </ResponsiveGrid>
          </Container>
        </SectionWrapper>

        {/* Section 2: Typography System Primitives */}
        <SectionWrapper bg="midnight" padding="sm">
          <Container size="xl">
            <div className="mb-8">
              <span className="text-xs font-heading font-bold text-lime uppercase tracking-widest">
                COMPONENTS 01
              </span>
              <Heading as="h2" size="h2">
                Typography Primitives (Heading &amp; Text)
              </Heading>
              <Text variant="muted">
                Semantic components enforcing Oswald headings and Inter body hierarchy without ad-hoc styling.
              </Text>
            </div>

            <div className="space-y-4 rounded-brand bg-slate-card border border-slate p-6 sm:p-8">
              <div className="border-b border-slate pb-4">
                <span className="font-mono text-xs text-lime">{"Heading as=\"h1\" size=\"display\""}</span>
                <Heading as="h1" size="display">
                  CRICKET27 &bull; BEYOND THE BOUNDARY
                </Heading>
              </div>

              <div className="border-b border-slate pb-4">
                <span className="font-mono text-xs text-lime">{"Heading as=\"h2\" size=\"h2\""}</span>
                <Heading as="h2" size="h2">
                  TACTICAL 2D CRICKET BROADCAST EXPERIENCE
                </Heading>
              </div>

              <div className="border-b border-slate pb-4">
                <span className="font-mono text-xs text-lime">{"Heading as=\"h3\" size=\"h3\" highlight"}</span>
                <Heading as="h3" size="h3" highlight>
                  SEAM REVOLUTION &amp; ATMOSPHERIC DRIFT
                </Heading>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                <div>
                  <span className="font-mono text-xs text-lime">{"Text variant=\"lead\""}</span>
                  <Text variant="lead">
                    High-level editorial lead paragraph designed for introduction sections.
                  </Text>
                </div>
                <div>
                  <span className="font-mono text-xs text-lime">{"Text variant=\"body\""}</span>
                  <Text variant="body">
                    Standard body copy calibrated for sustained reading contrast across all light and dark conditions.
                  </Text>
                </div>
                <div>
                  <span className="font-mono text-xs text-lime">{"Text variant=\"mono\""}</span>
                  <Text variant="mono">
                    VELOCITY: 148.5 KM/H &bull; DRS PITCHING IN LINE
                  </Text>
                </div>
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* Section 3: Button System & Icon Buttons */}
        <SectionWrapper bg="midnight-dark" padding="sm" bordered>
          <Container size="xl">
            <div className="mb-8">
              <span className="text-xs font-heading font-bold text-lime uppercase tracking-widest">
                COMPONENTS 02
              </span>
              <Heading as="h2" size="h2">
                Complete Button &amp; Icon Button Matrix
              </Heading>
              <Text variant="muted">
                All variants, optical sizes, loading states, and icon configurations with micro-motion feedback.
              </Text>
            </div>

            <div className="space-y-8 rounded-brand bg-slate-card border border-slate p-6 sm:p-8">
              {/* Variants */}
              <div className="space-y-3">
                <Text variant="caption">Action Variants</Text>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="md" icon={ArrowRight}>
                    Primary Action
                  </Button>
                  <Button variant="secondary" size="md">
                    Secondary Surface
                  </Button>
                  <Button variant="outline" size="md">
                    Outline Action
                  </Button>
                  <Button variant="coral" size="md" icon={Flame}>
                    Coral Urgency
                  </Button>
                  <Button variant="ghost" size="md">
                    Ghost Link
                  </Button>
                  <Button variant="text" size="md">
                    Text Button
                  </Button>
                </div>
              </div>

              {/* Sizing & Loading States */}
              <div className="space-y-3 pt-4 border-t border-slate">
                <Text variant="caption">Sizing Scale &amp; Async Loading</Text>
                <div className="flex flex-wrap items-center gap-4">
                  <Button variant="primary" size="lg">
                    Large (lg)
                  </Button>
                  <Button variant="primary" size="md">
                    Medium (md)
                  </Button>
                  <Button variant="primary" size="sm">
                    Small (sm)
                  </Button>
                  <Button variant="primary" size="md" loading>
                    Processing
                  </Button>
                  <Button variant="secondary" size="md" disabled>
                    Disabled State
                  </Button>
                </div>
              </div>

              {/* Dedicated Icon Buttons */}
              <div className="space-y-3 pt-4 border-t border-slate">
                <Text variant="caption">Dedicated Accessible Icon Buttons (IconButton.jsx)</Text>
                <div className="flex flex-wrap items-center gap-4">
                  <IconButton icon={Zap} variant="primary" size="lg" aria-label="Quick power mode" />
                  <IconButton icon={Shield} variant="secondary" size="md" aria-label="Fielding shield" />
                  <IconButton icon={Crosshair} variant="outline" size="md" aria-label="Precision reticle" />
                  <IconButton icon={Flame} variant="coral" size="md" aria-label="Match intensity" />
                  <IconButton icon={RefreshCw} variant="ghost" size="sm" aria-label="Refresh telemetry" />
                  <IconButton icon={Trophy} variant="secondary" size="md" disabled aria-label="Locked trophy" />
                </div>
              </div>

              {/* Micro-Interaction & Magnetic Motion */}
              <div className="space-y-3 pt-4 border-t border-slate">
                <Text variant="caption">Micro-Interaction &amp; Magnetic Motion (MagneticButton.jsx)</Text>
                <div className="flex flex-wrap items-center gap-4">
                  <MagneticButton strength={0.25}>
                    <Button variant="primary" size="md" icon={Sparkles}>
                      Magnetic Motion Button
                    </Button>
                  </MagneticButton>
                  <Button
                    variant="outline"
                    size="md"
                    icon={ExternalLink}
                    to="/brand-preview"
                  >
                    Phase 02 Style Guide
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* Section 4: Badge & State Components */}
        <SectionWrapper bg="midnight" padding="sm">
          <Container size="xl">
            <div className="mb-8">
              <span className="text-xs font-heading font-bold text-lime uppercase tracking-widest">
                COMPONENTS 03
              </span>
              <Heading as="h2" size="h2">
                Badges, Dividers &amp; Status States
              </Heading>
              <Text variant="muted">
                Compact feedback flags, sports divider notches, accessible loading spinners, and empty/error states.
              </Text>
            </div>

            <div className="space-y-8">
              {/* Badges Matrix */}
              <div className="p-6 rounded-brand bg-slate-card border border-slate space-y-4">
                <Text variant="caption">Badge System Variants (Pulse Supported)</Text>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="lime" size="md" pulse>Lime Active</Badge>
                  <Badge variant="coral" size="md" pulse>Coral Wicket</Badge>
                  <Badge variant="success" size="md">Success Verified</Badge>
                  <Badge variant="warning" size="md">Warning Delay</Badge>
                  <Badge variant="error" size="md">Error Failed</Badge>
                  <Badge variant="info" size="md">Info Telemetry</Badge>
                  <Badge variant="neutral" size="md">Neutral Slate</Badge>
                  <Badge variant="outline" size="md">Outline Tag</Badge>
                </div>
              </div>

              {/* Dividers & Breadcrumbs */}
              <div className="p-6 rounded-brand bg-slate-card border border-slate space-y-6">
                <Text variant="caption">Dividers &amp; Breadcrumb Trails</Text>
                <Breadcrumb
                  items={[
                    { label: 'Esports Circuit', to: '/features' },
                    { label: 'World Championship Series' },
                  ]}
                />
                <Divider label="MATCH DAY INNINGS BREAK" />
              </div>

              {/* Loading, Empty & Error States */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-brand bg-slate-card border border-slate flex items-center justify-center min-h-[220px]">
                  <LoadingSpinner size="lg" text="Syncing 120Hz Telemetry..." />
                </div>
                <EmptyState
                  icon={FolderOpen}
                  title="No Replays Available"
                  description="Your match replay reel is currently empty. Replays save automatically after completing matches."
                  actionLabel="Explore Concepts"
                  actionTo="/our-game"
                />
                <ErrorState
                  title="Telemetry Disconnected"
                  message="Unable to establish link with DRS virtual tracking server. Check local network connection."
                  onRetry={() => alert('Retry triggered')}
                />
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* Section 5: The Complete Card System (All 7 Cards) */}
        <SectionWrapper bg="midnight-dark" padding="sm" bordered>
          <Container size="xl">
            <div className="mb-8">
              <span className="text-xs font-heading font-bold text-lime uppercase tracking-widest">
                COMPONENTS 04
              </span>
              <Heading as="h2" size="h2">
                Complete Card System (7 Architected Types)
              </Heading>
              <Text variant="muted">
                Feature, News, Gallery, Media, Information, Highlight, and Community Cards.
              </Text>
            </div>

            <ResponsiveGrid cols={3} gap="md">
              {/* 1. Feature Card */}
              <FeatureCard feature={sampleFeature} />

              {/* 2. News Card */}
              <NewsCard article={sampleArticle} />

              {/* 3. Gallery Card */}
              <GalleryCard item={sampleGalleryItem} onSelect={() => alert('Gallery item selected')} />

              {/* 4. Media Card */}
              <MediaCard
                title="Floodlit Stadium Key Art"
                type="wallpaper"
                thumbnail="/assets/hero/hero-cricket-batter.svg"
                resolution="3840x2160 (16:9)"
              />

              {/* 5. Information Card */}
              <InformationCard
                icon={Zap}
                badge="Physics Specs"
                title="Ball Aerodynamics Engine"
                subtitle="Calculated at 120Hz sub-millisecond intervals"
                items={[
                  { label: 'Refresh Rate', value: '120 FPS' },
                  { label: 'Swing Variations', value: 'Conventional & Reverse' },
                  { label: 'Pitch Deterioration', value: 'Day 1 to 5 Multi-Day' },
                  { label: 'Seam Deviation', value: 'Realistic Pitch Damping' },
                ]}
              />

              {/* 6. Highlight Card */}
              <HighlightCard
                badge="Signature Showcase"
                title="Tactical Field Captaincy"
                description="Real-time boundary sweeper placement and aggressive slip cordons to outthink opposing batters."
                image="/assets/game-concept/game-concept-pitch.svg"
                to="/our-game"
                actionLabel="Inspect Tactical Board"
              />

              {/* 7. Community Card */}
              <CommunityCard
                icon={MessageSquare}
                platform="Official Discord"
                handle="discord.gg/cricket27"
                members="5,000+ Fans"
                description="Chat with core developers, share feedback, vote in concept polls, and interact with fellow cricket gamers."
                url="https://discord.gg/cricket27"
              />
            </ResponsiveGrid>
          </Container>
        </SectionWrapper>

        {/* Section 6: Image Presentation Components */}
        <SectionWrapper bg="midnight" padding="sm">
          <Container size="xl">
            <div className="mb-8">
              <span className="text-xs font-heading font-bold text-lime uppercase tracking-widest">
                COMPONENTS 05
              </span>
              <Heading as="h2" size="h2">
                Image Presentation Primitives
              </Heading>
              <Text variant="muted">
                ResponsiveImage with aspect-ratio management, ImageWithOverlay, and ImageCard with zoom overlays.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ResponsiveImage */}
              <div>
                <Text variant="caption" className="mb-3">
                  ResponsiveImage &bull; Aspect Ratio &amp; Skeleton
                </Text>
                <ResponsiveImage
                  src="/assets/branding/brand-intro-stadium.svg"
                  alt="Stadium floodlight preview"
                  aspectRatio="16/9"
                  rounded="brand"
                  hoverZoom
                />
              </div>

              {/* ImageWithOverlay */}
              <div>
                <Text variant="caption" className="mb-3">
                  ImageWithOverlay &bull; 16:9 Scrim Overlay
                </Text>
                <ImageWithOverlay
                  src="/assets/branding/brand-intro-stadium.svg"
                  alt="Stadium atmosphere preview"
                  aspectRatio="16/9"
                >
                  <div className="space-y-2">
                    <Badge variant="lime" size="sm">
                      Stadium Atmosphere
                    </Badge>
                    <Heading as="h3" size="h3">
                      Panoramic Night Arena
                    </Heading>
                    <Text variant="small" className="text-muted-text">
                      High-contrast floodlit bowl engineered with authentic stadium acoustics.
                    </Text>
                  </div>
                </ImageWithOverlay>
              </div>

              {/* ImageCard */}
              <div>
                <Text variant="caption" className="mb-3">
                  ImageCard &bull; Interactive Hover Preview
                </Text>
                <ImageCard
                  src="/assets/features/features-physics-telemetry.svg"
                  title="DRS Hawkeye Impact Prediction"
                  category="Physics Telemetry"
                  resolution="1920x1080"
                  onClick={() => alert('Image card clicked')}
                />
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* Section 7: Layout Primitives & ContentWithImage */}
        <SectionWrapper bg="midnight-dark" padding="sm" bordered>
          <Container size="xl">
            <div className="mb-8">
              <span className="text-xs font-heading font-bold text-lime uppercase tracking-widest">
                COMPONENTS 06
              </span>
              <Heading as="h2" size="h2">
                Layout Primitives &amp; ContentWithImage
              </Heading>
              <Text variant="muted">
                SectionWrapper, SplitLayout, ResponsiveGrid, and ContentWithImage editorial layouts.
              </Text>
            </div>

            <div className="p-8 rounded-brand bg-slate-card border border-slate shadow-card-depth space-y-8">
              <ContentWithImage
                eyebrow="Tactical Innovation"
                title="Engineered For"
                highlightText="Precision Timing"
                description="CRICKET27 eliminates clunky animation queues. By designing sub-millisecond input response, every stroke from defensive blocks to lofted drives feels immediate."
                bullets={[
                  'Sub-millisecond input window calibrated for competitive esports',
                  'Analog 360-degree ground and aerial stroke placement',
                  'Broadcast wagon wheel and DRS Hawkeye trajectory replay',
                ]}
                imageSrc="/assets/game-concept/game-concept-pitch.svg"
                imageAlt="Field deployment radar visual"
                action={
                  <Button to="/our-game" variant="primary" size="md" icon={ArrowRight}>
                    Explore Concept Vision
                  </Button>
                }
              />

              <div className="pt-8 border-t border-slate">
                <Text variant="caption" className="mb-4">
                  SplitLayout Primitive (50/50 Balanced Column Division)
                </Text>
                <SplitLayout
                  ratio="50/50"
                  align="center"
                  left={
                    <div className="space-y-3">
                      <Badge variant="coral">SplitLayout Demo</Badge>
                      <Heading as="h4" size="h4">
                        Flexible Multi-Ratio Container
                      </Heading>
                      <Text variant="body">
                        Supports 50/50, 60/40, and 40/60 distribution with optional reversed column ordering on mobile screens.
                      </Text>
                    </div>
                  }
                  right={
                    <div className="p-6 rounded-brand bg-midnight border border-slate font-mono text-xs text-lime space-y-1">
                      <div>ratio: &quot;50/50&quot;</div>
                      <div>align: &quot;center&quot;</div>
                      <div>gap: &quot;lg&quot;</div>
                      <div>reverseOnMobile: false</div>
                    </div>
                  }
                />
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* Section 8: Navigation Primitives */}
        <SectionWrapper bg="midnight" padding="sm">
          <Container size="xl">
            <div className="mb-8">
              <span className="text-xs font-heading font-bold text-lime uppercase tracking-widest">
                COMPONENTS 07
              </span>
              <Heading as="h2" size="h2">
                Navigation UI Primitives
              </Heading>
              <Text variant="muted">
                DropdownMenu, MobileMenuButton, SocialLink, and NavigationLink primitives for Phase 04 navbar.
              </Text>
            </div>

            <div className="p-6 sm:p-8 rounded-brand bg-slate-card border border-slate flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-6">
                <BrandLogo variant="horizontal" className="h-8 w-auto" />
                <Divider orientation="vertical" className="h-7 hidden sm:block" />
                <DropdownMenu
                  triggerLabel="Tournament Modes"
                  items={[
                    { label: 'T20 Blitz Cup', badge: 'Active' },
                    { label: 'World Championship', badge: '50-Over' },
                    { label: 'Test Match Classic', badge: 'Endurance' },
                  ]}
                />

                <MobileMenuButton
                  isOpen={mobileMenuOpen}
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                />
              </div>

              <div className="flex items-center gap-3">
                <SocialLink href="https://discord.gg/cricket27" icon={MessageSquare} name="Discord" />
                <SocialLink href="https://twitter.com/cricket27game" icon={Zap} name="Twitter / X" />
                <SocialLink href="https://youtube.com/@cricket27" icon={Sparkles} name="YouTube" />
              </div>
            </div>
          </Container>
        </SectionWrapper>

        {/* SECTION 08: PHASE 17 ADVANCED INTERACTION PRIMITIVES */}
        <SectionWrapper id="interaction-primitives" className="border-t border-slate bg-midnight-light/50">
          <Container>
            <div className="mb-10">
              <span className="text-xs font-heading font-bold text-lime uppercase tracking-widest">
                COMPONENTS 08 • PHASE 17
              </span>
              <Heading as="h2" size="h2">
                Advanced UI Interactions &amp; Dynamic Components
              </Heading>
              <Text variant="muted">
                Reusable Dropdown, Tabs, SegmentedControl, Accordion, Modal, ConfirmDialog, Tooltip, and Toast notification system.
              </Text>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Box 1: Dropdown & Tooltips & Segmented Control */}
              <div className="p-6 sm:p-8 rounded-brand bg-slate-card border border-slate space-y-6">
                <Heading as="h4" size="h4">
                  Dropdown, Segmented Control &amp; Tooltip
                </Heading>

                <div className="space-y-4">
                  <div>
                    <Text variant="small" className="text-muted-text mb-2 font-mono uppercase text-xs">
                      Reusable Dropdown
                    </Text>
                    <Dropdown
                      value={selectedDropdown}
                      onChange={setSelectedDropdown}
                      items={[
                        { label: 'Pro Edition', badge: '120 FPS' },
                        { label: 'Arcade Mode', badge: 'Fast' },
                        { label: 'Test Series', badge: 'Classic' },
                      ]}
                    />
                  </div>

                  <div>
                    <Text variant="small" className="text-muted-text mb-2 font-mono uppercase text-xs">
                      Segmented Control
                    </Text>
                    <SegmentedControl
                      value={selectedSegment}
                      onChange={setSelectedSegment}
                      options={[
                        { label: 'T20', value: 't20' },
                        { label: 'ODI', value: 'odi' },
                        { label: 'Test', value: 'test' },
                      ]}
                    />
                  </div>

                  <div>
                    <Text variant="small" className="text-muted-text mb-2 font-mono uppercase text-xs">
                      Accessible Tooltips
                    </Text>
                    <div className="flex items-center gap-4">
                      <Tooltip content="CRICKET27 Esports Engine">
                        <Button variant="outline" size="sm">
                          Hover Me (Top)
                        </Button>
                      </Tooltip>
                      <Tooltip content="Tactical Telemetry" position="bottom">
                        <Button variant="secondary" size="sm">
                          Hover Me (Bottom)
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2: Modals & Toast Triggers */}
              <div className="p-6 sm:p-8 rounded-brand bg-slate-card border border-slate space-y-6">
                <Heading as="h4" size="h4">
                  Modals, Confirm Dialog &amp; Toasts
                </Heading>

                <div className="space-y-4">
                  <div>
                    <Text variant="small" className="text-muted-text mb-2 font-mono uppercase text-xs">
                      Modal &amp; Dialog Dialogs
                    </Text>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button variant="primary" size="sm" onClick={() => setIsModalOpen(true)}>
                        Open Standard Modal
                      </Button>
                      <Button variant="coral" size="sm" onClick={() => setIsConfirmOpen(true)}>
                        Open Confirm Dialog
                      </Button>
                    </div>
                  </div>

                  <div>
                    <Text variant="small" className="text-muted-text mb-2 font-mono uppercase text-xs">
                      Interactive Toast Notifications
                    </Text>
                    <div className="flex flex-wrap items-center gap-2">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => toast.success('Action completed successfully!')}
                      >
                        Success Toast
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => toast.info('System dispatch updated.')}
                      >
                        Info Toast
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toast.warning('High network latency detected.')}
                      >
                        Warning Toast
                      </Button>
                      <Button
                        variant="coral"
                        size="sm"
                        onClick={() => toast.error('Validation condition not satisfied.')}
                      >
                        Error Toast
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3: Tabs & Accordion Showcase */}
            <div className="p-6 sm:p-8 rounded-brand bg-slate-card border border-slate space-y-6">
              <Heading as="h4" size="h4">
                Interactive Tabs &amp; Accordion System
              </Heading>

              <div className="space-y-6">
                <div>
                  <Text variant="small" className="text-muted-text mb-2 font-mono uppercase text-xs">
                    Reusable Tabs
                  </Text>
                  <Tabs
                    activeTab={selectedTab}
                    onChange={setSelectedTab}
                    tabs={[
                      { id: 'overview', label: 'Overview', count: 3 },
                      { id: 'specifications', label: 'Specifications', count: 5 },
                      { id: 'integration', label: 'Integration', count: 2 },
                    ]}
                  />
                  <div className="mt-3 p-4 rounded bg-midnight border border-slate text-xs font-mono text-warm-white">
                    Active Tab Content: <strong className="text-lime">{selectedTab.toUpperCase()}</strong>
                  </div>
                </div>

                <div>
                  <Text variant="small" className="text-muted-text mb-2 font-mono uppercase text-xs">
                    Reusable Accordion
                  </Text>
                  <Accordion
                    items={[
                      {
                        id: 'acc-1',
                        title: 'Dynamic Input Timing Windows',
                        category: 'Physics',
                        answer: 'Sub-millisecond responsiveness calculated at 120 updates per second with zero simulated delay.',
                      },
                      {
                        id: 'acc-2',
                        title: 'Telemetry Analytics Feed',
                        category: 'Esports',
                        answer: 'Pitch trajectory telemetry streamed directly to companion match HUDs and analytics dashboards.',
                      },
                    ]}
                  />
                </div>
              </div>
            </div>

            {/* Modal Instances */}
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Interactive Modal Demonstration"
              description="Accessible dialog with focus trapping, body scroll locking, and Escape key dismissal."
              footer={
                <Button variant="primary" size="sm" onClick={() => setIsModalOpen(false)}>
                  Close Modal
                </Button>
              }
            >
              <p className="leading-relaxed">
                This modal component operates using standard HTML dialog semantics with accessible ARIA labeling, smooth Framer Motion transitions, and automatic focus restoration.
              </p>
            </Modal>

            <ConfirmDialog
              isOpen={isConfirmOpen}
              onClose={() => setIsConfirmOpen(false)}
              onConfirm={() => toast.success('Confirmed action successfully executed!')}
              title="Reset Project Settings?"
              message="This action will restore all local session configurations to default. Are you sure you want to proceed?"
              confirmLabel="Yes, Reset Settings"
              variant="coral"
            />
          </Container>
        </SectionWrapper>

        {/* Bottom Return Bar */}
        <div className="text-center pt-8 border-t border-slate">
          <Container size="md">
            <div className="p-6 rounded-brand bg-midnight border border-slate flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <Heading as="h4" size="h4" highlight>
                  Phase 03 Component Verification
                </Heading>
                <Text variant="small" className="text-muted-text">
                  Complete design system initialized. Ready for Phase 04 Navigation &amp; Shell.
                </Text>
              </div>
              <Button to="/" variant="primary" size="md">
                Return To Website &rarr;
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </PageTransition>
  );
};

export default DesignSystem;
