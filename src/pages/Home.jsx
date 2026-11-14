import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';

// Complete Homepage Sections
import HomeHero from '../sections/home/HomeHero';
import AboutSection from '../sections/home/AboutSection';
import GameIntroSection from '../sections/home/GameIntroSection';
import FeaturesSection from '../sections/home/FeaturesSection';
import BrandVisionSection from '../sections/home/BrandVisionSection';
import FinalCTASection from '../sections/home/FinalCTASection';

export const Home = () => {
  usePageTitle('Home — Beyond The Boundary');

  return (
    <PageTransition>
      <SEO
        title="CRICKET27 | Beyond the Boundary"
        description="Discover CRICKET27, a cricket gaming brand concept built around the passion, intensity and excitement of cricket. Beyond The Boundary."
        canonical="/"
      />

      {/* 1. Cinematic Hero Section */}
      <HomeHero />

      {/* 2. Section One: About CRICKET27 */}
      <AboutSection />

      {/* 3. Section Two: Our Game Concept */}
      <GameIntroSection />

      {/* 4. Section Three: Gaming Features Showcase */}
      <FeaturesSection />

      {/* 5. Section Four: Brand Vision & Principles */}
      <BrandVisionSection />

      {/* 6. Section Five: Final Homepage Promotional CTA */}
      <FinalCTASection />
    </PageTransition>
  );
};

export default Home;
