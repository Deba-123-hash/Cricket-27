import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';

// Features Page Sections (Phase 10)
import FeaturesHero from '../sections/features/FeaturesHero';
import FeatureOverview from '../sections/features/FeatureOverview';
import BattingSection from '../sections/features/BattingSection';
import BowlingSection from '../sections/features/BowlingSection';
import FieldingSection from '../sections/features/FieldingSection';
import MatchPresentationSection from '../sections/features/MatchPresentationSection';
import CompetitiveSection from '../sections/features/CompetitiveSection';
import CustomisationSection from '../sections/features/CustomisationSection';
import FeatureSummary from '../sections/features/FeatureSummary';
import FeaturesCTA from '../sections/features/FeaturesCTA';

export const Features = () => {
  usePageTitle('Features — The 2D Cricket Gaming Vision | CRICKET27');

  return (
    <PageTransition>
      <SEO
        title="Features | Batting, Bowling, Fielding & Presentation | CRICKET27"
        description="Discover the deep cricket feature set of CRICKET27 — 360-degree batting shot control, variable seam and spin trajectories, DRS telemetry, and stadium customization."
        canonical="/features"
        ogImage="/assets/features/feature-hero.webp"
      />

      {/* 1. Features Hero */}
      <FeaturesHero />

      {/* 2. Feature Overview (6 Category Cards with smooth scroll) */}
      <FeatureOverview />

      {/* 3. Batting Experience (Split layout & 3 highlights) */}
      <BattingSection />

      {/* 4. Bowling Experience (Alternating layout & 3 highlights) */}
      <BowlingSection />

      {/* 5. Fielding Experience (Dynamic radar & 3 highlights) */}
      <FieldingSection />

      {/* 6. Match Presentation (Stadium atmosphere & 4 themes) */}
      <MatchPresentationSection />

      {/* 7. Competitive Experience (Championship bracket & 3 highlights) */}
      <CompetitiveSection />

      {/* 8. Customisation Concepts (Kit studio diagram & 4 concepts) */}
      <CustomisationSection />

      {/* 9. Feature Summary (Compact matrix breakdown & jump actions) */}
      <FeatureSummary />

      {/* 10. Final Call to Action */}
      <FeaturesCTA />
    </PageTransition>
  );
};

export default Features;
