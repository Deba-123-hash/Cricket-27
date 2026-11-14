import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import ExperienceCard from '../../components/cards/ExperienceCard';
import { FEATURE_OVERVIEW_ITEMS } from '../../data/featuresPage';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const FeatureOverview = () => {
  const handleScrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="feature-overview" className="relative py-24 lg:py-32 bg-midnight-light border-y border-slate/60 scroll-mt-20 overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-lime/5 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <Badge variant="lime" size="sm" className="mb-4">
            THE EXPERIENCE AT A GLANCE
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-4">
            A CRICKET EXPERIENCE <span className="text-lime">BUILT AROUND THE SPORT.</span>
          </h2>
          <p className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed">
            From batting and bowling to match presentation and competition, explore the different aspects that inspire the CRICKET27 gaming concept.
          </p>
        </div>

        {/* 6 Feature Overview Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {FEATURE_OVERVIEW_ITEMS.map((item) => (
            <motion.div key={item.id} variants={fadeIn}>
              <ExperienceCard item={item} onNavigate={handleScrollToSection} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default FeatureOverview;
