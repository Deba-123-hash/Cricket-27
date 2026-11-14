import { motion } from 'framer-motion';
import { Trophy, Brain, Flame, Users, CheckCircle2 } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import { COMPETITIVE_DATA } from '../../data/featuresPage';
import { fadeIn, staggerContainer } from '../../utils/animations';

const getHighlightIcon = (index) => {
  switch (index) {
    case 0:
      return Brain;
    case 1:
      return Flame;
    case 2:
      return Users;
    default:
      return Trophy;
  }
};

export const CompetitiveSection = () => {
  return (
    <section id="competitive-experience" className="relative py-24 lg:py-32 bg-midnight-light border-y border-slate/60 scroll-mt-20 overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-lime/5 blur-[160px] pointer-events-none"
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
          {/* Left Column: Visual Artwork & Tournament League Blueprint */}
          <motion.div variants={fadeIn} className="lg:col-span-6">
            <div className="relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card shadow-2xl group">
              {/* Primary Competitive Action Shot */}
              <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-midnight-light">
                <CricketImage
                  src={COMPETITIVE_DATA.imageMain}
                  fallbackSrc={COMPETITIVE_DATA.imageFallback}
                  alt="Atmospheric stadium arena representing competitive cricket"
                  aspectRatio="16/10"
                  title="Competitive Leagues"
                  badge="HIGH STAKES"
                  icon="trophy"
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
                  HIGH STAKES &bull; COMPETITION
                </span>
              </div>

              {/* Bottom Inset League Blueprint */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-brand bg-midnight/95 border border-slate backdrop-blur-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-lime" />
                    <span className="font-heading font-black text-xs uppercase text-warm-white">
                      Tournament Structure Vision
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-lime">CHAMPIONSHIP CUPS</span>
                </div>
                <div className="aspect-[21/9] w-full rounded overflow-hidden border border-slate/60 bg-slate">
                  <CricketImage
                    src={COMPETITIVE_DATA.imageDiagram}
                    alt="Championship cup and competitive bracket structure"
                    aspectRatio="21/9"
                    objectFit="contain"
                    icon="trophy"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Narrative & Three Highlights */}
          <motion.div variants={fadeIn} className="lg:col-span-6">
            <Badge variant="lime" size="sm" className="mb-4">
              {COMPETITIVE_DATA.eyebrow}
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-6 leading-tight">
              CRICKET IS A GAME OF <br />
              <span className="text-lime">DECISIONS.</span>
            </h2>

            <p className="text-warm-white/80 font-sans leading-relaxed text-base sm:text-lg mb-8">
              {COMPETITIVE_DATA.description}
            </p>

            {/* Three Highlights */}
            <div className="space-y-6 mb-10">
              {COMPETITIVE_DATA.highlights.map((item, index) => {
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

            {/* Integrity Notice */}
            <div className="flex items-center gap-2 p-3 rounded-brand bg-slate-card/40 border border-slate text-xs text-muted-text font-mono">
              <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
              <span>Skill-Based Match Balance &bull; No Pay-to-Win Mechanics</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CompetitiveSection;
