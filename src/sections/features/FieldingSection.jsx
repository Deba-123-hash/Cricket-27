import { motion } from 'framer-motion';
import { Shield, Users, Zap, Check } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import { FIELDING_DATA } from '../../data/featuresPage';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const FieldingSection = () => {
  return (
    <section id="fielding-experience" className="relative py-24 lg:py-32 bg-midnight scroll-mt-20 overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-lime/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Visual Artwork & Dynamic Field Radar Overlay */}
          <motion.div variants={fadeIn} className="lg:col-span-6">
            <div className="relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card shadow-2xl group">
              {/* Primary Fielding Action / Ground Coverage */}
              <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-midnight-light">
                <CricketImage
                  src={FIELDING_DATA.imageMain}
                  fallbackSrc={FIELDING_DATA.imageFallback}
                  alt={FIELDING_DATA.imageAlt}
                  aspectRatio="16/10"
                  title="Fielding Reflexes"
                  badge="SPLIT-SECOND AGILITY"
                  icon="shield"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Top Status Pill */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-heading font-black text-xs uppercase px-3 py-1 rounded bg-midnight/90 text-lime border border-lime/40 backdrop-blur-sm">
                  SPLIT-SECOND AGILITY &bull; FIELDING
                </span>
              </div>

              {/* Bottom Inset Tactical Diagram */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-brand bg-midnight/95 border border-slate backdrop-blur-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-lime" />
                    <span className="font-heading font-black text-xs uppercase text-warm-white">
                      Fielding Reflex Matrix
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-lime">30-YARD RESTRICTIONS</span>
                </div>
                <div className="aspect-[21/9] w-full rounded overflow-hidden border border-slate/60 bg-slate">
                  <CricketImage
                    src={FIELDING_DATA.imageDiagram}
                    alt="Fielding radar coordinates and direct hit bullseye"
                    aspectRatio="21/9"
                    objectFit="contain"
                    icon="target"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Three Highlights */}
          <motion.div variants={fadeIn} className="lg:col-span-6">
            <Badge variant="lime" size="sm" className="mb-4">
              {FIELDING_DATA.eyebrow}
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-6 leading-tight">
              EVERY MOVE <br />
              <span className="text-lime">CAN MATTER.</span>
            </h2>

            <p className="text-warm-white/80 font-sans leading-relaxed text-base sm:text-lg mb-8">
              {FIELDING_DATA.description}
            </p>

            {/* Three Highlights */}
            <div className="space-y-6 mb-10">
              {FIELDING_DATA.highlights.map((item, index) => {
                const icons = [Shield, Users, Zap];
                const Icon = icons[index] || Shield;

                return (
                  <div
                    key={item.title}
                    className="p-5 rounded-brand bg-slate-card/70 border border-slate/80 hover:border-lime/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-brand bg-midnight border border-slate flex items-center justify-center text-lime shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-heading font-black text-base uppercase text-warm-white tracking-wide">
                          {item.title}
                        </h3>
                        <span className="text-[11px] font-mono text-lime block">{item.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-sm text-warm-white/70 font-sans leading-relaxed pl-11">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate/60 text-xs text-warm-white/90">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-card border border-slate">
                <Check className="w-3.5 h-3.5 text-lime" />
                Diving Boundary Stops
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-card border border-slate">
                <Check className="w-3.5 h-3.5 text-lime" />
                Direct-Hit Run Out Meter
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-card border border-slate">
                <Check className="w-3.5 h-3.5 text-lime" />
                Slip Cordon Catches
              </span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FieldingSection;
