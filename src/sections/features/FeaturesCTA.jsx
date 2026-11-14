import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { FEATURES_CTA_DATA } from '../../data/featuresPage';
import { ROUTES } from '../../utils/constants';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const FeaturesCTA = () => {
  return (
    <section className="relative py-28 lg:py-36 bg-midnight overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture>
          <source type="image/webp" srcSet={FEATURES_CTA_DATA.bgImage} />
          <img
            src={FEATURES_CTA_DATA.bgFallback || FEATURES_CTA_DATA.bgImage}
            alt="Night stadium atmosphere with glowing boundary rope"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            loading="lazy"
            decoding="async"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/90 to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-midnight" />

        {/* Electric Lime Ambient Glow */}
        <div
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[650px] h-[380px] rounded-full bg-lime/10 blur-[150px] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="mb-4">
            <Badge variant="lime" size="sm">
              {FEATURES_CTA_DATA.eyebrow}
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-warm-white uppercase mb-6 leading-tight"
          >
            DISCOVER WHAT LIES <br />
            <span className="text-lime">BEYOND THE BOUNDARY.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            className="text-base sm:text-xl text-warm-white/80 font-sans leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10"
          >
            {FEATURES_CTA_DATA.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
          >
            <Button
              as="link"
              to={ROUTES.OUR_GAME}
              variant="primary"
              size="lg"
              className="gap-2 group shadow-lime-glow/50 justify-center w-full sm:w-auto"
            >
              <span>{FEATURES_CTA_DATA.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              as="link"
              to={ROUTES.ABOUT}
              variant="outline"
              size="lg"
              className="gap-2 justify-center w-full sm:w-auto"
            >
              <Sparkles className="w-4 h-4 text-lime" />
              <span>ABOUT CRICKET27</span>
            </Button>
          </motion.div>

          {/* Concept Disclaimer Footer */}
          <motion.div
            variants={fadeIn}
            className="pt-8 border-t border-slate/60 inline-flex flex-wrap items-center justify-center gap-2 text-xs text-muted-text font-mono max-w-full text-center"
          >
            <Sparkles className="w-3.5 h-3.5 text-lime" />
            <span>CRICKET27 &bull; CONCEPT SHOWCASE &bull; BEYOND THE BOUNDARY</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturesCTA;
