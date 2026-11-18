import { motion } from 'framer-motion';
import { Target, Zap, Shield, CheckCircle2 } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const GameIntroduction = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-midnight-light border-y border-slate/60 overflow-hidden">
      {/* Decorative Background Accents */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-lime/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Philosophy */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <Badge variant="lime" size="sm">
                ABOUT THE GAME CONCEPT
              </Badge>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase leading-tight mb-6"
            >
              INSPIRED BY THE GAME. <br />
              <span className="text-lime">DESIGNED AROUND THE PASSION.</span>
            </motion.h2>

            <motion.div variants={fadeIn} className="space-y-4 text-warm-white/80 font-sans leading-relaxed text-base sm:text-lg">
              <p>
                <strong className="text-warm-white font-semibold">CRICKET27</strong> strips away synthetic clutter to deliver an elegant 2D sports experience where reflexes, tactical awareness, and cricket IQ decide the outcome.
              </p>
            </motion.div>

            {/* Core Values Checklist */}
            <motion.div variants={fadeIn} className="mt-8 pt-6 border-t border-slate grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 text-sm text-warm-white">
                <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                <span>Responsive micro-second timing</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-warm-white">
                <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                <span>Deep situational match intelligence</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-warm-white">
                <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                <span>Authentic acoustics &amp; visual feedback</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-warm-white">
                <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                <span>Built from the ground up for fans</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Stylized Brand '27' Concept Card */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-brand-lg bg-gradient-to-br from-slate-card/90 via-midnight to-midnight-light border border-slate p-8 sm:p-10 shadow-2xl overflow-hidden group hover:border-lime/40 transition-colors duration-300">
              {/* Giant Stylized '27' Watermark */}
              <div
                className="absolute -right-6 -bottom-10 font-heading font-black text-8xl sm:text-9xl text-slate-light/10 select-none pointer-events-none group-hover:text-lime/10 transition-colors duration-500"
                aria-hidden="true"
              >
                27
              </div>

              {/* Header inside Card */}
              <div className="relative z-10 flex items-center justify-between pb-6 border-b border-slate/60 mb-6">
                <div>
                  <div className="text-xs uppercase font-heading font-black tracking-widest text-lime">
                    CORE DNA
                  </div>
                  <h3 className="text-xl font-heading font-black uppercase text-warm-white">
                    THE CRICKET27 PILLARS
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime font-heading font-black text-lg">
                  27
                </div>
              </div>

              {/* Three Strategic Feature Blocks */}
              <div className="relative z-10 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-brand bg-slate/80 border border-slate flex items-center justify-center shrink-0 text-lime mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase font-heading font-black text-warm-white tracking-wide">
                      Tactile Mechanics
                    </h4>
                    <p className="text-xs text-muted-text mt-1 leading-relaxed">
                      Distinctive stroke feedback, vibration cues, and trajectory lines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-brand bg-slate/80 border border-slate flex items-center justify-center shrink-0 text-lime mt-0.5">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase font-heading font-black text-warm-white tracking-wide">
                      Strategic Chess
                    </h4>
                    <p className="text-xs text-muted-text mt-1 leading-relaxed">
                      Exploit gaps, outwit bowlers with footwork, and read pitch wear.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-brand bg-slate/80 border border-slate flex items-center justify-center shrink-0 text-lime mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase font-heading font-black text-warm-white tracking-wide">
                      Electric Atmosphere
                    </h4>
                    <p className="text-xs text-muted-text mt-1 leading-relaxed">
                      Immersive stadium soundscapes and floodlit night match intensity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="relative z-10 mt-8 pt-6 border-t border-slate/60 flex items-center justify-between text-xs text-muted-text">
                <span className="font-mono text-[11px] uppercase tracking-wider text-lime">
                  PRE-PRODUCTION BLUEPRINT
                </span>
                <span className="text-warm-white font-medium">BEYOND THE BOUNDARY.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default GameIntroduction;
