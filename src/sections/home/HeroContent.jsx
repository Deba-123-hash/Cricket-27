import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Button from '../../components/common/Button';
import { EASINGS } from '../../utils/animations';

export const HeroContent = () => {
  const shouldReduceMotion = useReducedMotion();

  // Master container stagger orchestration
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemFadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.55,
        ease: EASINGS.sportSmooth,
      },
    },
  };

  // Line-by-line mask reveal variants
  const lineRevealVariants = {
    hidden: { y: shouldReduceMotion ? 0 : '110%', opacity: shouldReduceMotion ? 0 : 1 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.7,
        ease: EASINGS.sportSmooth,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-3xl space-y-6 sm:space-y-8 text-left"
    >
      {/* Sequence Step 3: Brand Eyebrow with Beacon */}
      <motion.div variants={itemFadeUp} className="inline-flex items-center gap-2 sm:gap-3 flex-wrap">
        <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-midnight-light/90 border border-lime/40 text-lime shadow-lime-glow backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse shrink-0" />
          <span className="text-[10px] sm:text-xs font-heading font-bold uppercase tracking-wider sm:tracking-widest">
            THE NEXT CHAPTER OF CRICKET GAMING
          </span>
        </div>
        <div className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-muted-text bg-midnight/80 px-2.5 py-1 rounded border border-slate/60">
          <Sparkles className="w-3.5 h-3.5 text-coral" />
          <span>BRAND VISION</span>
        </div>
      </motion.div>

      {/* Sequence Step 4: Main Headline with Line-by-Line Mask Reveal */}
      <div className="space-y-1">
        <motion.div
          variants={itemFadeUp}
          className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-muted-text uppercase mb-1"
        >
          <span className="text-lime font-black">CRICKET27</span>
          <span className="w-8 h-px bg-slate-light" />
          <span>PREVIEW VISION</span>
        </motion.div>

        <h1
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[6.5rem] font-heading font-black tracking-wider text-warm-white uppercase leading-[0.92] select-none"
          aria-label="Beyond The Boundary"
        >
          {/* Line 1: BEYOND */}
          <div className="overflow-hidden pb-1">
            <motion.div variants={lineRevealVariants}>
              BEYOND
            </motion.div>
          </div>

          {/* Line 2: THE BOUNDARY */}
          <div className="overflow-hidden pt-1 pb-2">
            <motion.div
              variants={lineRevealVariants}
              className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-lime to-lime-hover shadow-lime-glow"
            >
              THE BOUNDARY.
            </motion.div>
          </div>
        </h1>
      </div>

      {/* Sequence Step 5: Description Fades Upward */}
      <motion.p
        variants={itemFadeUp}
        className="text-base sm:text-lg md:text-xl text-warm-white/80 max-w-xl leading-relaxed font-sans font-normal"
      >
        A new cricket gaming vision built around the passion, intensity and excitement of the sport. Discover the world of <strong className="text-warm-white font-semibold">CRICKET27</strong>.
      </motion.p>

      {/* Primary Action CTA */}
      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <motion.div variants={itemFadeUp}>
          <Button
            to={ROUTES.ABOUT}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto shadow-lime-glow font-heading uppercase tracking-wider justify-center"
            icon={ArrowRight}
            iconPosition="right"
          >
            DISCOVER CRICKET27
          </Button>
        </motion.div>
      </div>

      {/* Technical Specs Strip */}
      <motion.div
        variants={itemFadeUp}
        className="pt-4 border-t border-slate/50 flex flex-wrap items-center gap-6 text-xs font-mono text-muted-text"
      >
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-lime" />
          <span>2D TACTICAL ENGINE</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-lime" />
          <span>SUB-MS TIMING</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-coral" />
          <span>BROADCAST DRS HAWKEYE</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
