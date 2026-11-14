import { motion } from 'framer-motion';
import { Target, Sparkles, CheckCircle2 } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';

export const MissionSection = () => {
  return (
    <section id="our-mission" className="py-24 sm:py-32 bg-midnight relative overflow-hidden border-t border-slate/40">
      {/* Background Graphic Flare */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[180px] pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mission Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative rounded-brand overflow-hidden border border-slate shadow-card-elevated group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-midnight">
                <CricketImage
                  src="/assets/about/mission-visual.webp"
                  fallbackSrc="/assets/about/mission-visual.jpg"
                  alt="Sports macro of cricketer hand gripping cricket ball seam under stadium lights"
                  aspectRatio="4/3"
                  title="Our Purpose"
                  badge="CORE PURPOSE"
                  icon="target"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent pointer-events-none" />

              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="px-3 py-1 rounded bg-midnight/90 border border-lime/50 text-lime font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2">
                  <Target className="w-3.5 h-3.5" />
                  <span>CORE PURPOSE</span>
                </div>
              </div>

              {/* Bottom Scrim Info */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-brand bg-midnight-light/95 backdrop-blur-md border border-slate">
                <span className="text-xs font-heading font-black uppercase text-warm-white block">
                  Authentic Sports Detail
                </span>
                <span className="text-[11px] font-mono text-muted-text">
                  Precision physics, tactile seams &amp; tactical mastery
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission Statement Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 order-1 lg:order-2 space-y-6"
          >
            <div className="flex items-center gap-3">
              <Badge variant="lime" size="sm">
                OUR PURPOSE
              </Badge>
              <span className="h-px w-8 bg-slate-light" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
                MISSION STATEMENT
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
              BRINGING THE SPIRIT OF CRICKET <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-lime to-lime-hover">
                INTO DIGITAL ENTERTAINMENT.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-warm-white/90 leading-relaxed font-sans font-normal border-l-2 border-lime pl-4">
              Our mission is to build a distinctive cricket gaming brand that reflects the passion of cricket through creative ideas, engaging experiences and a strong visual identity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-brand bg-slate-card border border-slate flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white block">
                    Sports Realism &bull; 2D Clarity
                  </span>
                  <p className="text-xs text-muted-text">
                    Merging competitive esports responsiveness with authentic match atmosphere.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-brand bg-slate-card border border-slate flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white block">
                    Creative Digital Expression
                  </span>
                  <p className="text-xs text-muted-text">
                    Bold typography, high-impact key art, and authentic fan culture integration.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default MissionSection;
