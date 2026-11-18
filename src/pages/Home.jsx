import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';
import HomeHero from '../sections/home/HomeHero';

export const Home = () => {
  usePageTitle('Home — Beyond The Boundary');

  return (
    <PageTransition>
      <SEO
        title="CRICKET27 | Beyond the Boundary"
        description="Discover CRICKET27, a cricket gaming brand concept built around the passion, intensity and excitement of cricket. Beyond The Boundary."
        canonical="/"
      />

      {/* Cinematic Hero Section */}
      <HomeHero />
    </PageTransition>
  );
};

export default Home;
