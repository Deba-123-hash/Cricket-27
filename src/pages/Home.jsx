import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';

// Homepage Sections
import HomeHero from '../sections/home/HomeHero';
import AboutSection from '../sections/home/AboutSection';

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

      {/* 2. About CRICKET27 */}
      <AboutSection />
    </PageTransition>
  );
};

export default Home;
