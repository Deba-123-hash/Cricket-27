import { motion } from 'framer-motion';
import { Eye, TrendingUp, Flag } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';

export const VisionSection = () => {
  return (
    <section id="our-vision" className="py-24 sm:py-32 bg-midnight-dark relative overflow-hidden border-t border-slate/50">
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 bg-pitch-pattern bg-[length:40px_40px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[180px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Vision Prose */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <Badge variant="lime" size="sm">
                WHERE WE WANT TO GO
              </Badge>
              <span className="h-px w-8 bg-slate-light" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
                HORIZON
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
              A FRESH VISION FOR THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-hover">
                FUTURE OF CRICKET GAMING.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-muted-text leading-relaxed">
              <p>
                We envision CRICKET27 as a premier cricket gaming brand uniting digital creativity, tactical gameplay depth, and a passionate global community.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-brand bg-slate-card border border-slate flex items-center gap-3.5">
                <div className="w-8 h-8 rounded bg-midnight border border-slate flex items-center justify-center text-lime shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white block">
                    Long-Term Brand Growth
                  </span>
                  <span className="text-xs text-muted-text">
                    Progressive milestones expanding from conceptual art into active community engagement.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-brand bg-slate-card border border-slate flex items-center gap-3.5">
                <div className="w-8 h-8 rounded bg-midnight border border-slate flex items-center justify-center text-coral shrink-0">
                  <Flag className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white block">
                    Player-Centric Collaboration
                  </span>
                  <span className="text-xs text-muted-text">
                    Listening to fans and competitive gamers to guide future gaming mechanics.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Vision Visual Artwork */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-brand overflow-hidden border border-slate shadow-card-elevated group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-midnight">
                <CricketImage
                  src="/assets/about/vision-visual.webp"
                  fallbackSrc="/assets/about/vision-visual.jpg"
                  alt="Athletic cricketer looking out towards a glowing stadium arena with volumetric floodlight rays"
                  aspectRatio="4/3"
                  title="Our Vision"
                  badge="FUTURE AMBITION"
                  icon="eye"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 z-10">
                <div className="px-3 py-1 rounded bg-midnight/90 border border-lime/50 text-lime font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5" />
                  <span>FUTURE AMBITION</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-brand bg-midnight-light/95 backdrop-blur-md border border-slate flex items-center justify-between">
                <div>
                  <span className="text-xs font-heading font-black uppercase tracking-wider text-warm-white block">
                    The Horizon of 2D Sports
                  </span>
                  <span className="text-[11px] font-mono text-muted-text">
                    Where cricket culture meets digital innovation
                  </span>
                </div>
                <span className="text-xs font-mono text-lime font-bold">2026 &amp; BEYOND</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default VisionSection;
