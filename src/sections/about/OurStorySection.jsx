import { motion } from 'framer-motion';
import { Compass, Trophy } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';

export const OurStorySection = () => {
  return (
    <section id="our-story" className="py-24 sm:py-32 bg-midnight-dark relative overflow-hidden border-t border-slate/50">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-lime/5 rounded-full blur-[160px] pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story Prose */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex items-center gap-3">
              <Badge variant="lime" size="sm">
                THE STORY BEHIND THE BRAND
              </Badge>
              <span className="h-px w-8 bg-slate-light" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
                ORIGINS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
              BORN FROM A PASSION <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-hover">
                FOR CRICKET.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-muted-text leading-relaxed">
              <p>
                Cricket is defined by strategic tension, split-second reflexes, and electric stadium energy. CRICKET27 channels that culture into modern digital entertainment—crafted for competitors who live beyond the boundary.
              </p>
              <p>
                Our journey is centred on creative authenticity, thoughtful game design, and a shared appreciation for the sport.
              </p>
            </div>

            {/* Tactical Identity Box */}
            <div className="pt-2">
              <div className="p-5 rounded-brand bg-slate-card border border-slate flex items-start gap-4">
                <div className="w-12 h-12 rounded bg-midnight border border-lime/40 flex items-center justify-center text-lime font-heading font-black text-2xl shrink-0 shadow-lime-glow/20">
                  27
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white block">
                    The &apos;27&apos; Distinction
                  </span>
                  <p className="text-xs text-muted-text leading-relaxed">
                    A symbol of forward-looking ambition — aiming beyond traditional boundaries to create digital experiences shaped by sports culture.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Original Cricket Artwork */}
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
                  src="/assets/about/about-cricket-passion.webp"
                  fallbackSrc="/assets/about/about-cricket-passion.jpg"
                  alt="Player walking out of the stadium tunnel onto lush floodlit turf"
                  aspectRatio="4/3"
                  title="Our Story"
                  badge="BORN FROM PASSION"
                  icon="compass"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent pointer-events-none" />

              {/* Top Accent */}
              <div className="absolute top-4 left-4 z-10">
                <div className="px-3 py-1 rounded bg-midnight/90 border border-lime/50 text-lime font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>BRAND VISION</span>
                </div>
              </div>

              {/* Bottom Details Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-brand bg-midnight-light/95 backdrop-blur-md border border-slate flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-slate-card border border-slate flex items-center justify-center text-lime shrink-0">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-heading font-black uppercase tracking-wider text-warm-white block">
                      Cricket Passion &bull; Digital Future
                    </span>
                    <span className="text-[11px] font-mono text-muted-text">
                      Honoring traditions through fresh creative design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default OurStorySection;
