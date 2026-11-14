import { motion } from 'framer-motion';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import FeatureCard from '../../components/cards/FeatureCard';
import { HOMEPAGE_FEATURES } from '../../data/features';

export const FeaturesSection = () => {
  return (
    <section id="features-showcase" className="py-24 sm:py-32 bg-midnight relative overflow-hidden border-t border-slate/40">
      {/* Background Lighting Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-lime/5 rounded-full blur-[180px] pointer-events-none" />

      <Container size="xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="lime" size="sm">
              WHAT DEFINES THE EXPERIENCE
            </Badge>
            <span className="h-px w-10 bg-slate-light" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
              6 CORE PILLARS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
            BUILT AROUND THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-lime to-lime-hover">
              SPIRIT OF CRICKET.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-text leading-relaxed">
            Built for tactical depth, frame-perfect execution, and match-winning intensity. Explore our six foundational pillars.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOMEPAGE_FEATURES.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <FeatureCard feature={feature} to={ROUTES.FEATURES} />
            </motion.div>
          ))}
        </div>

        {/* Bottom Disclaimer & Section Footer CTA */}
        <div className="mt-16 pt-8 border-t border-slate flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 text-xs text-muted-text">
            <AlertCircle className="w-4 h-4 text-lime shrink-0" />
            <span>
              <strong className="text-warm-white">Promotional Concepts:</strong> Gameplay features represent planned development vision and concepts for the upcoming CRICKET27 title.
            </span>
          </div>

          <Button
            to={ROUTES.FEATURES}
            variant="outline"
            size="md"
            icon={ArrowRight}
            iconPosition="right"
            className="w-full sm:w-auto font-heading uppercase tracking-wider shrink-0"
          >
            EXPLORE FULL FEATURES
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
