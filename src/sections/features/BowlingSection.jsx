import { motion } from 'framer-motion';
import { Target, Zap, ShieldAlert, ArrowRight } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import CricketImage from '../../components/common/CricketImage';
import { BOWLING_DATA } from '../../data/featuresPage';
import { ROUTES } from '../../utils/constants';
import { fadeIn, staggerContainer } from '../../utils/animations';

const getHighlightIcon = (index) => {
  switch (index) {
    case 0:
      return Zap;
    case 1:
      return Target;
    case 2:
      return ShieldAlert;
    default:
      return Zap;
  }
};

export const BowlingSection = () => {
  return (
    <section id="bowling-experience" className="relative py-24 lg:py-32 bg-midnight-light border-y border-slate/60 scroll-mt-20 overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-coral/5 blur-[160px] pointer-events-none"
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
          {/* Left Column: Editorial Narrative & Highlights (Swapped relative to Batting) */}
          <motion.div variants={fadeIn} className="lg:col-span-6 lg:order-1">
            <Badge variant="lime" size="sm" className="mb-4">
              {BOWLING_DATA.eyebrow}
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-6 leading-tight">
              PRECISION MEETS <br />
              <span className="text-lime">STRATEGY.</span>
            </h2>

            <p className="text-warm-white/80 font-sans leading-relaxed text-base sm:text-lg mb-8">
              {BOWLING_DATA.description}
            </p>

            {/* Three Bowling Highlights */}
            <div className="space-y-6 mb-10">
              {BOWLING_DATA.highlights.map((item, index) => {
                const Icon = getHighlightIcon(index);
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

            {/* CTA Link */}
            <div className="flex items-center gap-4">
              <Button
                as="link"
                to={ROUTES.OUR_GAME}
                variant="outline"
                size="md"
                className="gap-2 group"
              >
                <span>EXPLORE BOWLING IN OUR GAME</span>
                <ArrowRight className="w-4 h-4 text-lime transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Bowler Action Artwork & Tactical Overlay (Swapped layout) */}
          <motion.div variants={fadeIn} className="lg:col-span-6 lg:order-2">
            <div className="relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card shadow-2xl group">
              {/* Primary Seam Macro / Action Artwork */}
              <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-midnight-light">
                <CricketImage
                  src={BOWLING_DATA.imageMain}
                  fallbackSrc={BOWLING_DATA.imageFallback}
                  alt={BOWLING_DATA.imageAlt}
                  aspectRatio="16/10"
                  title="Bowling Mechanics"
                  badge="TACTICAL DISCIPLINE"
                  icon="zap"
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
                  TACTICAL DISCIPLINE &bull; BOWLING
                </span>
              </div>

              {/* Inset Technical Radar Blueprint */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between p-3 rounded-brand bg-midnight/90 border border-slate backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded overflow-hidden border border-slate shrink-0 bg-slate">
                    <CricketImage
                      src={BOWLING_DATA.imageDetail}
                      alt="Bowling trajectory blueprint"
                      aspectRatio="1/1"
                      objectFit="contain"
                      icon="target"
                      className="w-full h-full p-1"
                    />
                  </div>
                  <div>
                    <span className="font-heading font-black text-xs uppercase text-warm-white block">
                      Seam &amp; Swing Mechanics
                    </span>
                    <span className="text-[11px] text-muted-text">Real-time ball revolution &amp; pitch drift</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-lime font-bold">145+ KPH</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BowlingSection;
