import Container from '../../components/common/Container';
import HeroBackground from '../../components/common/HeroBackground';
import HeroContent from './HeroContent';

const HOME_HERO_SOURCES = [
  {
    media: '(max-width: 768px)',
    srcSet: '/assets/hero/cricket27-home-hero-mobile.webp',
    type: 'image/webp',
  },
  {
    media: '(max-width: 768px)',
    srcSet: '/assets/hero/cricket27-home-hero-mobile.jpg',
    type: 'image/jpeg',
  },
  {
    media: '(min-width: 769px)',
    srcSet: '/assets/hero/cricket27-home-hero.webp',
    type: 'image/webp',
  },
  {
    media: '(min-width: 769px)',
    srcSet: '/assets/hero/cricket27-home-hero.jpg',
    type: 'image/jpeg',
  },
];

export const HomeHero = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-between -mt-20 pt-24 pb-16 overflow-hidden bg-midnight select-none"
      aria-label="CRICKET27 Homepage Hero"
    >
      {/* =========================================================================
          LAYER 1: CINEMATIC BACKGROUND ARTWORK (Desktop & Mobile Crop)
          ========================================================================= */}
      <HeroBackground
        src="/assets/hero/cricket27-home-hero.webp"
        sources={HOME_HERO_SOURCES}
        alt="Professional cricket batsman executing an explosive cover drive stroke under floodlit night stadium atmosphere"
        opacity="opacity-100"
        scale="scale-100"
        className="z-0"
      />

      {/* =========================================================================
          LAYER 2: CINEMATIC MULTI-STAGE GRADIENT SCRIMS & ATMOSPHERE
          ========================================================================= */}
      {/* 2A. Left Editorial Scrim for Text Contrast (Desktop) */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-midnight via-midnight/85 md:via-midnight/70 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 2B. Bottom Scrim for Seamless Transition to Page Sections */}
      <div
        className="absolute inset-x-0 bottom-0 h-48 z-[2] bg-gradient-to-t from-midnight via-midnight/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 2C. Top Scrim for Navbar Contrast */}
      <div
        className="absolute inset-x-0 top-0 h-32 z-[2] bg-gradient-to-b from-midnight-dark/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* 2D. Subtle Vignette around Outer Boundaries */}
      <div
        className="absolute inset-0 z-[2] shadow-[inset_0_0_120px_rgba(10,15,26,0.8)] pointer-events-none"
        aria-hidden="true"
      />

      {/* 2E. Technical Turf Grid Overlay */}
      <div
        className="absolute inset-0 z-[3] bg-pitch-pattern bg-[length:36px_36px] opacity-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* =========================================================================
          LAYER 3: MAIN EDITORIAL CONTENT & CTA BUTTONS
          ========================================================================= */}
      <Container size="xl" className="relative z-10 w-full py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Hero Editorial Content */}
          <div className="lg:col-span-8 xl:col-span-7">
            <HeroContent />
          </div>

          {/* Right Column: Open Negative Space showcasing Batsman Art */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5 pointer-events-none" />
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
