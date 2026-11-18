import { motion } from 'framer-motion';
import { Heart, Compass, Users } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const GameVision = () => {
  return (
    <section id="game-vision" className="relative py-28 lg:py-36 bg-midnight scroll-mt-20 overflow-hidden">
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture>
          <source type="image/webp" srcSet="/assets/game-concept/match-experience.webp" />
          <img
            src="/assets/game-concept/match-experience.jpg"
            alt="Atmospheric cricket arena under evening floodlights"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
            loading="lazy"
            decoding="async"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/90 to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-midnight" />
        {/* Subtle Radial Glow */}
        <div
          className="absolute -top-24 right-1/4 w-96 h-96 rounded-full bg-lime/10 blur-[150px] pointer-events-none"
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
              THE PHILOSOPHY
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-warm-white uppercase mb-8 leading-tight"
          >
            A PASSION THAT GOES <br />
            <span className="text-lime">BEYOND THE BOUNDARY.</span>
          </motion.h2>

          {/* Editorial Manifesto */}
          <motion.div
            variants={fadeIn}
            className="space-y-4 text-warm-white/85 text-base sm:text-lg font-sans leading-relaxed mb-14 text-center max-w-2xl mx-auto"
          >
            <p>
              We are crafting a celebration of cricket—its tactical patience, sudden explosive drama, and the shared bond across generations of players and fans.
            </p>
            <p className="text-lime font-mono text-sm font-semibold">
              Built with uncompromising respect for the spirit of the game.
            </p>
          </motion.div>

          {/* 3 Pillars Grid */}
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left"
          >
            <div className="p-6 rounded-brand-lg bg-slate-card/80 border border-slate backdrop-blur-sm hover:border-lime/40 transition-colors">
              <div className="w-10 h-10 rounded-brand bg-midnight border border-slate flex items-center justify-center text-lime mb-4">
                <Heart className="w-5 h-5 text-lime" />
              </div>
              <h3 className="font-heading font-black text-xl text-warm-white uppercase tracking-wide mb-2">
                100% Passion Driven
              </h3>
              <p className="text-sm text-warm-white/70 leading-relaxed">
                Dedicated to authentic field placements, ball swing, and realistic pitch behavior.
              </p>
            </div>

            <div className="p-6 rounded-brand-lg bg-slate-card/80 border border-slate backdrop-blur-sm hover:border-lime/40 transition-colors">
              <div className="w-10 h-10 rounded-brand bg-midnight border border-slate flex items-center justify-center text-lime mb-4">
                <Compass className="w-5 h-5 text-lime" />
              </div>
              <h3 className="font-heading font-black text-xl text-warm-white uppercase tracking-wide mb-2">
                Pure 2D Focus
              </h3>
              <p className="text-sm text-warm-white/70 leading-relaxed">
                Frame-perfect control response and fluid 120 FPS stylized visual art.
              </p>
            </div>

            <div className="p-6 rounded-brand-lg bg-slate-card/80 border border-slate backdrop-blur-sm hover:border-lime/40 transition-colors">
              <div className="w-10 h-10 rounded-brand bg-midnight border border-slate flex items-center justify-center text-lime mb-4">
                <Users className="w-5 h-5 text-lime" />
              </div>
              <h3 className="font-heading font-black text-xl text-warm-white uppercase tracking-wide mb-2">
                Community Centered
              </h3>
              <p className="text-sm text-warm-white/70 leading-relaxed">
                Design concepts and milestones shaped directly through open community feedback.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default GameVision;
