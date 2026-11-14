import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';

export const AboutCTASection = () => {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-midnight border-t border-slate/40">
      {/* Background Stadium Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture>
          <source type="image/webp" srcSet="/assets/homepage/cta-stadium-atmosphere.webp" />
          <img
            src="/assets/homepage/cta-stadium-atmosphere.jpg"
            alt="Atmospheric night cricket stadium with glowing boundary rope"
            className="w-full h-full object-cover object-center opacity-30"
            loading="lazy"
            decoding="async"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-midnight/80 to-midnight-dark" />
      </div>

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
            DISCOVER THE WORLD OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-lime to-lime-hover">
              CRICKET27.
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-xl text-warm-white/85 max-w-xl mx-auto leading-relaxed">
            Explore our cricket gaming vision and become part of a community connected by a shared passion for cricket.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <Button
              to={ROUTES.OUR_GAME}
              variant="primary"
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto shadow-lime-glow font-heading uppercase tracking-wider justify-center"
            >
              EXPLORE OUR GAME
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
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-muted-text text-center max-w-full">
            <ShieldCheck className="w-4 h-4 text-lime shrink-0" />
            <span>Official brand portal &bull; Connecting fans, creators &amp; gamers</span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AboutCTASection;
