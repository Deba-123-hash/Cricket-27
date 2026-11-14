import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';

// Our Game Page Sections (Phase 09)
import GameHero from '../sections/game/GameHero';
import GameIntroduction from '../sections/game/GameIntroduction';
import CricketExperience from '../sections/game/CricketExperience';
import ExperienceHighlights from '../sections/game/ExperienceHighlights';
import GameConceptGallery from '../sections/game/GameConceptGallery';
import GameVision from '../sections/game/GameVision';
import GameCTA from '../sections/game/GameCTA';

export const OurGame = () => {
  usePageTitle('Our Game — The 2D Cricket Gaming Concept | CRICKET27');

  return (
    <PageTransition>
      <SEO
        title="Our Game | The Next-Gen 2D Cricket Experience | CRICKET27"
        description="Explore the CRICKET27 gameplay concept — precision batting timing, dynamic seam and swing bowling, agile fielding, and authentic broadcast atmosphere."
        canonical="/our-game"
        ogImage="/assets/game-concept/game-hero.webp"
      />

      {/* 1. Game Hero Section with Background & Anchor CTAs */}
      <GameHero />

      {/* 2. Introducing CRICKET27 Split Narrative & Brand '27' Card */}
      <GameIntroduction />

      {/* 3. The Cricket Experience — Four Core Pillars */}
      <CricketExperience />

      {/* 4. Experience Highlights — Six Promotional Cards Grid */}
      <ExperienceHighlights />

      {/* 5. Game Concept Showcase & Interactive Lightbox */}
      <GameConceptGallery />

      {/* 6. Our Vision for Cricket Gaming Editorial */}
      <GameVision />

      {/* 7. Final Call to Action */}
      <GameCTA />
    </PageTransition>
  );
};

export default OurGame;
