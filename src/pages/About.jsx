import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';

// About Us Page Sections
import AboutHero from '../sections/about/AboutHero';
import OurStorySection from '../sections/about/OurStorySection';

export const About = () => {
  usePageTitle('About Us — Passion For Cricket | CRICKET27');

  return (
    <PageTransition>
      <SEO
        title="About Us | The Vision & Origin of CRICKET27"
        description="Learn about the origins, mission, and philosophy behind CRICKET27 — redefining the 2D cricket gaming landscape with passion, authenticity, and competitive spirit."
        canonical="/about"
        ogImage="/assets/about/about-hero.webp"
      />

      {/* 1. About Hero Section */}
      <AboutHero />

      {/* 2. Our Story Section */}
      <OurStorySection />
    </PageTransition>
  );
};

export default About;
