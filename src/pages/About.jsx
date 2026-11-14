import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';

// About Us Page Sections (Phase 08)
import AboutHero from '../sections/about/AboutHero';
import OurStorySection from '../sections/about/OurStorySection';
import MissionSection from '../sections/about/MissionSection';
import VisionSection from '../sections/about/VisionSection';
import CoreValuesSection from '../sections/about/CoreValuesSection';
import WhyCricket27Section from '../sections/about/WhyCricket27Section';
import BrandPhilosophySection from '../sections/about/BrandPhilosophySection';
import AboutCTASection from '../sections/about/AboutCTASection';

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

      {/* 2. Section Two: Our Story */}
      <OurStorySection />

      {/* 3. Section Three: Our Mission */}
      <MissionSection />

      {/* 4. Section Four: Our Vision */}
      <VisionSection />

      {/* 5. Section Five: Core Values */}
      <CoreValuesSection />

      {/* 6. Section Six: Why CRICKET27? */}
      <WhyCricket27Section />

      {/* 7. Section Seven: Brand Philosophy ("BEYOND THE BOUNDARY.") */}
      <BrandPhilosophySection />

      {/* 8. Section Eight: Final About CTA */}
      <AboutCTASection />
    </PageTransition>
  );
};

export default About;
