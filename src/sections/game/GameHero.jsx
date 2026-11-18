import { motion } from 'framer-motion';
import { ChevronDown, Sparkles, Compass, Eye } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const GameHero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[500px] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-midnight pt-24 pb-16 lg:py-32">
      {/* Background Image with Gradient Masks */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source type="image/webp" srcSet="/assets/game-concept/game-hero.webp" />
          <img
            src="/assets/game-concept/game-hero.jpg"
            alt="CRICKET27 international cricket match concept with batsman executing a powerful cover drive under floodlights"
            className="w-full h-full object-cover object-center lg:object-right opacity-40 scale-105"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </picture>
        {/* Cinematic Multi-Layer Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/60 via-transparent to-midnight" />
        {/* Subtle Lime Ambient Radial Glow */}
        <div
          className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-lime/10 blur-[140px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-32 right-10 w-[500px] h-[500px] rounded-full bg-coral/5 blur-[140px] pointer-events-none"
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
          {/* Eyebrow & Status Pills */}
          <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-heading font-black tracking-widest text-xs uppercase px-3 py-1.5 rounded-full bg-lime/15 text-lime border border-lime/30 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              INTRODUCING CRICKET27
            </span>
            <Badge variant="outline" size="sm" className="border-slate-card text-muted-text">
              CONCEPT PREVIEW &bull; IN ACTIVE DESIGN
            </Badge>
          </motion.div>

          {/* Main Hero Headline */}
          <motion.h1
            variants={fadeIn}
            className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black tracking-tight text-warm-white uppercase leading-[1.05] mb-6"
          >
            THE NEXT CHAPTER OF <span className="text-lime">CRICKET GAMING.</span>
          </motion.h1>

          {/* Lead Paragraph */}
          <motion.p
            variants={fadeIn}
            className="text-base sm:text-xl text-warm-white/80 leading-relaxed font-sans max-w-2xl mb-8 sm:mb-10"
          >
            A visionary 2D cricket gaming experience crafted with tactical depth, atmospheric arenas, and passion for the sport.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('cricket-experience')}
              className="gap-2 group shadow-lime-glow/50 justify-center w-full sm:w-auto"
            >
              <span>EXPLORE THE EXPERIENCE</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('game-vision')}
              className="gap-2 justify-center w-full sm:w-auto"
            >
              <Compass className="w-4 h-4 text-lime" />
              <span>OUR VISION</span>
            </Button>
          </motion.div>

          {/* Concept Key Value Badges */}
          <motion.div
            variants={fadeIn}
            className="pt-8 border-t border-slate/60 grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-brand bg-slate/50 border border-slate flex items-center justify-center shrink-0">
                <span className="font-heading font-black text-lime text-base">2D</span>
              </div>
              <div>
                <div className="text-xs uppercase font-heading font-black tracking-wider text-warm-white">
                  Pure 2D Focus
                </div>
                <div className="text-xs text-muted-text">High-refresh fluid physics</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-brand bg-slate/50 border border-slate flex items-center justify-center shrink-0">
                <span className="font-heading font-black text-lime text-base">360°</span>
              </div>
              <div>
                <div className="text-xs uppercase font-heading font-black tracking-wider text-warm-white">
                  Shot Mastery
                </div>
                <div className="text-xs text-muted-text">Timing-based controls</div>
              </div>
            </div>

            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <div className="w-10 h-10 rounded-brand bg-slate/50 border border-slate flex items-center justify-center shrink-0">
                <Eye className="w-5 h-5 text-lime" />
              </div>
              <div>
                <div className="text-xs uppercase font-heading font-black tracking-wider text-warm-white">
                  Broadcast HUD
                </div>
                <div className="text-xs text-muted-text">Authentic match telemetry</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default GameHero;
