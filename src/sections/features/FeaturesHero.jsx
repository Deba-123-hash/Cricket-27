import { motion } from 'framer-motion';
import { ChevronDown, Compass, Sparkles, Layers } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { FEATURES_HERO_DATA } from '../../data/featuresPage';
import { ROUTES } from '../../utils/constants';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const FeaturesHero = () => {
  const scrollToOverview = () => {
    const el = document.getElementById('feature-overview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[500px] sm:min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-midnight pt-24 pb-16 lg:py-28">
      {/* Background Stadium Artwork with Multi-Layer Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            type="image/webp"
            srcSet={(FEATURES_HERO_DATA.bgImage || '').replace(/\.(jpg|jpeg|png)$/, '.webp')}
          />
          <img
            src={FEATURES_HERO_DATA.bgFallback || FEATURES_HERO_DATA.bgImage}
            alt="International cricket stadium under brilliant floodlights"
            className="w-full h-full object-cover object-center opacity-35 scale-105"
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

        {/* Ambient Radial Lighting Accents */}
        <div
          className="absolute -top-32 right-1/4 w-[550px] h-[550px] rounded-full bg-lime/10 blur-[150px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 left-10 w-[450px] h-[450px] rounded-full bg-coral/5 blur-[130px] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          {/* Eyebrow and Status Badge */}
          <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-heading font-black tracking-widest text-xs uppercase px-3 py-1.5 rounded-full bg-lime/15 text-lime border border-lime/30 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              {FEATURES_HERO_DATA.eyebrow}
            </span>
            <Badge variant="outline" size="sm" className="border-slate-card text-muted-text">
              {FEATURES_HERO_DATA.badgeText}
            </Badge>
          </motion.div>

          {/* Three-Line Stacked Heading */}
          <motion.h1
            variants={fadeIn}
            className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black tracking-tight text-warm-white uppercase leading-[1.05] mb-6"
          >
            <span>{FEATURES_HERO_DATA.titleLines[0]}</span> <br />
            <span>{FEATURES_HERO_DATA.titleLines[1]}</span> <br />
            <span className="text-lime">{FEATURES_HERO_DATA.titleLines[2]}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            className="text-base sm:text-xl text-warm-white/80 leading-relaxed font-sans max-w-2xl mb-8 sm:mb-10"
          >
            {FEATURES_HERO_DATA.description}
          </motion.p>

          {/* Primary & Secondary Action CTAs */}
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
            <Button
              variant="primary"
              size="lg"
              onClick={scrollToOverview}
              className="gap-2 group shadow-lime-glow/50 justify-center w-full sm:w-auto"
            >
              <span>{FEATURES_HERO_DATA.primaryCtaText}</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button
              as="link"
              to={ROUTES.OUR_GAME}
              variant="outline"
              size="lg"
              className="gap-2 justify-center w-full sm:w-auto"
            >
              <Compass className="w-4 h-4 text-lime" />
              <span>{FEATURES_HERO_DATA.secondaryCtaText}</span>
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={fadeIn}
            className="pt-8 border-t border-slate/60 grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {FEATURES_HERO_DATA.stats.map((stat, i) => (
              <div key={stat.label} className={`flex items-center gap-3 ${i === 2 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <div className="w-10 h-10 rounded-brand bg-slate/50 border border-slate flex items-center justify-center shrink-0">
                  {i === 0 && <Layers className="w-5 h-5 text-lime" />}
                  {i === 1 && <span className="font-heading font-black text-lime text-base">2D</span>}
                  {i === 2 && <Sparkles className="w-5 h-5 text-lime" />}
                </div>
                <div>
                  <div className="text-xs uppercase font-heading font-black tracking-wider text-warm-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-text">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturesHero;
