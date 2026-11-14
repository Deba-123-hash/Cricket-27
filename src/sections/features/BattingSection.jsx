import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import CricketImage from '../../components/common/CricketImage';
import { BATTING_DATA } from '../../data/featuresPage';
import { ROUTES } from '../../utils/constants';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const BattingSection = () => {
  return (
    <section id="batting-experience" className="relative py-24 lg:py-32 bg-midnight scroll-mt-20 overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/3 -left-48 w-96 h-96 rounded-full bg-lime/5 blur-[160px] pointer-events-none"
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
          {/* Left Column: Batsman Visual Artwork */}
          <motion.div variants={fadeIn} className="lg:col-span-6">
            <div className="relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card shadow-2xl group">
              {/* Primary Action Shot */}
              <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-midnight-light">
                <CricketImage
                  src={BATTING_DATA.imageMain}
                  fallbackSrc={BATTING_DATA.imageFallback}
                  alt={BATTING_DATA.imageAlt}
                  aspectRatio="16/10"
                  title="Batting Mechanics"
                  badge="CORE MECHANIC"
                  icon="crosshair"
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
                  CORE MECHANIC &bull; BATTING
                </span>
              </div>

              {/* Bottom Inset Thumbnail Detail */}
              <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between p-3 rounded-brand bg-midnight/90 border border-slate backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded overflow-hidden border border-slate shrink-0">
                    <CricketImage
                      src={BATTING_DATA.imageDetail}
                      fallbackSrc={BATTING_DATA.imageDetailFallback}
                      alt="Willow and wickets detail"
                      aspectRatio="1/1"
                      icon="sparkles"
                      className="w-full h-full"
                    />
                  </div>
                  <div>
                    <span className="font-heading font-black text-xs uppercase text-warm-white block">
                      English Willow Dynamics
                    </span>
                    <span className="text-[11px] text-muted-text">Sweet spot contact acoustic design</span>
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-lime shrink-0" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Three Highlights */}
          <motion.div variants={fadeIn} className="lg:col-span-6">
            <Badge variant="lime" size="sm" className="mb-4">
              {BATTING_DATA.eyebrow}
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-6 leading-tight">
              TIMING. TECHNIQUE. <br />
              <span className="text-lime">THE PERFECT SHOT.</span>
            </h2>

            <p className="text-warm-white/80 font-sans leading-relaxed text-base sm:text-lg mb-8">
              {BATTING_DATA.description}
            </p>

            {/* Three Highlights */}
            <div className="space-y-6 mb-10">
              {BATTING_DATA.highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-5 rounded-brand bg-slate-card/60 border border-slate/80 hover:border-lime/40 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-6 h-6 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime font-mono text-xs font-bold shrink-0">
                      0{index + 1}
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-base uppercase text-warm-white tracking-wide">
                        {item.title}
                      </h3>
                      <span className="text-[11px] font-mono text-lime block">{item.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-sm text-warm-white/70 font-sans leading-relaxed pl-9">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA and Disclaimer */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                as="link"
                to={ROUTES.OUR_GAME}
                variant="primary"
                size="md"
                className="gap-2 group shadow-lime-glow/30"
              >
                <span>{BATTING_DATA.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <div className="flex items-center gap-2 text-xs text-muted-text font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime" />
                <span>360-Degree Shotmaking Concept</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BattingSection;
