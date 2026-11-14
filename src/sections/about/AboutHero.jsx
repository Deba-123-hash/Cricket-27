import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';

export const AboutHero = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleScrollDown = () => {
    const storySection = document.getElementById('our-story');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative min-h-[500px] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center -mt-20 pt-28 pb-20 overflow-hidden bg-midnight select-none"
      aria-label="About CRICKET27 Hero"
    >
      {/* Background Stadium Artwork */}
      <motion.div
        initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0.3 : 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <picture>
          <source type="image/webp" srcSet="/assets/about/about-hero.webp" />
          <img
            src="/assets/about/about-hero.jpg"
            alt="International cricket stadium at dusk under floodlight illumination"
            className="w-full h-full object-cover object-center opacity-40"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </picture>
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/70 to-midnight-dark/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight" />
        <div className="absolute inset-0 bg-pitch-pattern bg-[length:36px_36px] opacity-10" />
      </motion.div>

      {/* Main Content */}
      <Container size="lg" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="lime" size="md" pulse>
              GET TO KNOW CRICKET27
            </Badge>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-wider text-warm-white uppercase leading-[0.98]">
            WE ARE CRICKET27. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-lime to-lime-hover shadow-lime-glow">
              BEYOND THE BOUNDARY.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-warm-white/85 max-w-2xl mx-auto leading-relaxed font-sans">
            A cricket gaming brand inspired by the passion of the sport, the creativity of digital entertainment and the excitement of what lies ahead.
          </p>

          {/* Brand Philosophy Chip */}
          <div className="pt-2 inline-flex flex-wrap items-center justify-center gap-2 text-[11px] sm:text-xs font-mono text-muted-text bg-midnight-light/80 border border-slate px-3.5 py-1.5 rounded-2xl sm:rounded-full backdrop-blur-md max-w-full text-center">
            <Sparkles className="w-3.5 h-3.5 text-coral shrink-0" />
            <span>AUTHENTIC 2D CRICKET IDENTITY &bull; ESTABLISHED 2026</span>
          </div>
        </motion.div>
      </Container>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <button
          type="button"
          onClick={handleScrollDown}
          className="flex flex-col items-center gap-1 text-[10px] font-mono tracking-widest uppercase text-muted-text hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded p-1 group"
          aria-label="Scroll down to read our story"
        >
          <span className="group-hover:tracking-[0.25em] transition-all duration-200">
            OUR STORY
          </span>
          <motion.div
            animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-lime" aria-hidden="true" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default AboutHero;
