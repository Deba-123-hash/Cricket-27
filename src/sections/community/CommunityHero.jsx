import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, Users } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { COMMUNITY_HERO_DATA } from '../../data/community';
import { ROUTES } from '../../utils/constants';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const CommunityHero = () => {
  return (
    <section className="relative min-h-[500px] sm:min-h-[85vh] flex items-center justify-center overflow-hidden bg-midnight pt-28 pb-16 lg:py-28">
      {/* Background Stadium Crowd / Arena Image with Gradient Masks */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            type="image/webp"
            srcSet={(COMMUNITY_HERO_DATA.bgImage || '').replace(/\.(jpg|jpeg|png)$/, '.webp')}
          />
          <img
            src={COMMUNITY_HERO_DATA.bgFallback || COMMUNITY_HERO_DATA.bgImage}
            alt="Cricket stadium packed with passionate supporters under floodlights"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-transparent to-midnight" />

        {/* Ambient Radial Lime Glow */}
        <div
          className="absolute -top-32 right-1/4 w-[600px] h-[600px] rounded-full bg-lime/10 blur-[150px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-28 left-10 w-[450px] h-[450px] rounded-full bg-coral/5 blur-[130px] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl text-left"
        >
          {/* Eyebrow & Pill Badge */}
          <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-heading font-black tracking-widest text-xs uppercase px-3 py-1.5 rounded-full bg-lime/15 text-lime border border-lime/30 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              {COMMUNITY_HERO_DATA.eyebrow}
            </span>
            <Badge variant="outline" size="sm" className="border-slate-card text-muted-text">
              GLOBAL CRICKET FELLOWSHIP
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeIn}
            className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black tracking-tight text-warm-white uppercase leading-[1.05] mb-6"
          >
            ONE GAME. ONE PASSION. <br />
            <span className="text-lime">ONE COMMUNITY.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            className="text-base sm:text-xl text-warm-white/80 leading-relaxed font-sans max-w-2xl mb-8 sm:mb-10"
          >
            {COMMUNITY_HERO_DATA.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <Button
              as="link"
              to={ROUTES.ABOUT}
              variant="primary"
              size="lg"
              className="gap-2 group shadow-lime-glow/50 justify-center w-full sm:w-auto"
            >
              <span>{COMMUNITY_HERO_DATA.cta1Text}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              as="link"
              to={ROUTES.OUR_GAME}
              variant="outline"
              size="lg"
              className="gap-2 justify-center w-full sm:w-auto"
            >
              <Compass className="w-4 h-4 text-lime" />
              <span>{COMMUNITY_HERO_DATA.cta2Text}</span>
            </Button>
          </motion.div>

          {/* Bottom Info Strip */}
          <motion.div
            variants={fadeIn}
            className="pt-6 border-t border-slate/60 flex flex-wrap items-center gap-6 text-xs text-muted-text font-mono"
          >
            <div className="flex items-center gap-2 text-warm-white">
              <Users className="w-4 h-4 text-lime" />
              <span>United by Cricket Culture</span>
            </div>
            <div className="h-4 w-[1px] bg-slate hidden sm:block" />
            <span>Inclusive &bull; Passionate &bull; Creative</span>
            <div className="h-4 w-[1px] bg-slate hidden sm:block" />
            <span className="text-lime">BEYOND THE BOUNDARY</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CommunityHero;
