import { motion } from 'framer-motion';
import { Compass, Palette, Monitor, HeartHandshake, ShieldCheck } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';

export const WhyCricket27Section = () => {
  const characteristics = [
    {
      title: 'CRICKET INSPIRED',
      description: 'Crafted with authentic appreciation for classic drives, yorkers, and crease tactics.',
      icon: Compass,
      accent: 'text-lime',
    },
    {
      title: 'CREATIVE DIRECTION',
      description: 'Bespoke sports typography, atmospheric stadium lighting, and stylized 2D art.',
      icon: Palette,
      accent: 'text-coral',
    },
    {
      title: 'DIGITAL FIRST',
      description: 'Optimized for high refresh rates, broadcast telemetry, and instant responsiveness.',
      icon: Monitor,
      accent: 'text-sky-400',
    },
    {
      title: 'COMMUNITY MINDED',
      description: 'Direct player dialogue, transparent devlog updates, and collaborative feedback.',
      icon: HeartHandshake,
      accent: 'text-emerald-400',
    },
  ];

  return (
    <section id="why-cricket27" className="py-24 sm:py-32 bg-midnight-dark relative overflow-hidden border-t border-slate/50">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-lime/5 rounded-full blur-[160px] pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 4 Characteristics Stack */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="lime" size="sm">
                  OUR DIFFERENCE
                </Badge>
                <span className="h-px w-8 bg-slate-light" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
                  WHY CRICKET27
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
                A BRAND BUILT AROUND THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-hover">
                  LOVE OF CRICKET.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-muted-text leading-relaxed">
                Discover the foundational characteristics that set CRICKET27 apart as an upcoming 2D sports gaming brand.
              </p>
            </div>

            {/* 4 Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {characteristics.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="p-5 rounded-brand bg-slate-card border border-slate hover:border-lime/40 transition-colors space-y-3 group"
                  >
                    <div className="w-10 h-10 rounded bg-midnight border border-slate flex items-center justify-center group-hover:scale-105 transition-all">
                      <Icon className={`w-5 h-5 ${item.accent}`} />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-heading font-black uppercase text-warm-white group-hover:text-lime transition-colors tracking-wide">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-xs text-muted-text leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Promotional Artwork */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-brand overflow-hidden border border-slate shadow-card-elevated group">
              <div className="aspect-[4/5] w-full overflow-hidden bg-midnight">
                <CricketImage
                  src="/assets/about/brand-difference.webp"
                  fallbackSrc="/assets/about/brand-difference.jpg"
                  alt="English willow cricket bat resting against wooden wicket stumps under stadium floodlights"
                  aspectRatio="4/5"
                  title="Our Difference"
                  badge="AUTHENTIC ROOTS"
                  icon="shield"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 z-10">
                <div className="px-3 py-1 rounded bg-midnight/90 border border-lime/50 text-lime font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  AUTHENTIC ROOTS
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 p-5 rounded-brand bg-midnight-light/95 backdrop-blur-md border border-slate space-y-1.5">
                <span className="text-xs font-heading font-black uppercase text-warm-white block">
                  English Willow &bull; Floodlit Turf
                </span>
                <p className="text-[11px] text-muted-text leading-relaxed">
                  Honoring the timeless equipment, acoustics, and rituals that make cricket extraordinary.
                </p>
                <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-lime">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>CONCEPTUAL BRAND STANDARDS</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default WhyCricket27Section;
