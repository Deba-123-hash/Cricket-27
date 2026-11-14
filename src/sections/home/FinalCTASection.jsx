import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import HeroBackground from '../../components/common/HeroBackground';

export const FinalCTASection = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-midnight border-t border-slate/40">
      {/* Background Stadium Artwork */}
      <HeroBackground
        src="/assets/homepage/cta-stadium-atmosphere.jpg"
        alt="Night cricket stadium with glowing boundary rope and stadium atmosphere"
        opacity="opacity-35"
        loading="lazy"
      >
        {/* Scrims for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-midnight/80 to-midnight-dark pointer-events-none" />
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-60" />
      </HeroBackground>

      <Container size="lg" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="lime" size="md" pulse>
              BEYOND THE BOUNDARY
            </Badge>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.0] select-none">
            YOUR CRICKET STORY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-lime to-lime-hover">
              STARTS HERE.
            </span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-warm-white/85 max-w-xl mx-auto leading-relaxed">
            Step across the boundary rope. Experience next-generation 2D cricket gaming built for true fans.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Button
              to={ROUTES.OUR_GAME}
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto shadow-lime-glow font-heading uppercase tracking-wider justify-center"
            >
              EXPLORE CRICKET27
            </Button>

            <Button
              to={ROUTES.FEATURES}
              variant="secondary"
              size="lg"
              icon={Sparkles}
              iconPosition="left"
              className="w-full sm:w-auto font-heading uppercase tracking-wider justify-center border-slate hover:border-lime"
            >
              EXPLORE FEATURES
            </Button>
          </div>

          {/* Scope and Disclaimer Pill */}
          <div className="pt-6 flex items-center justify-center gap-2 text-xs font-mono text-muted-text">
            <ShieldCheck className="w-4 h-4 text-lime shrink-0" />
            <span>Promotional gaming brand portal &bull; Active pre-release development</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FinalCTASection;
