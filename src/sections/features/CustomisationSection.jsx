import { motion } from 'framer-motion';
import { Palette, Shirt, Wrench, UserCheck, Sparkles } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import { CUSTOMISATION_DATA } from '../../data/featuresPage';
import { fadeIn, staggerContainer } from '../../utils/animations';

const iconMap = {
  Palette,
  Shirt,
  Wrench,
  UserCheck,
};

export const CustomisationSection = () => {
  return (
    <section id="customisation-concepts" className="relative py-24 lg:py-32 bg-midnight scroll-mt-20 overflow-hidden">
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
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <motion.div variants={fadeIn} className="mb-4">
              <Badge variant="lime" size="sm">
                {CUSTOMISATION_DATA.eyebrow}
              </Badge>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-4"
            >
              A PERSONAL TOUCH TO THE <span className="text-lime">CRICKET EXPERIENCE.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed"
            >
              {CUSTOMISATION_DATA.description}
            </motion.p>
          </div>

          {/* Central Blueprint Artwork Banner */}
          <motion.div variants={fadeIn} className="mb-14">
            <div className="relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card shadow-2xl p-4 sm:p-6 group">
              <div className="aspect-[21/9] sm:aspect-[24/9] w-full rounded overflow-hidden bg-midnight border border-slate/60 flex items-center justify-center">
                <CricketImage
                  src={CUSTOMISATION_DATA.diagram}
                  alt="Customisation kit studio and jersey colourway blueprint"
                  aspectRatio="21/9"
                  objectFit="contain"
                  icon="palette"
                  title="Customisation Studio"
                  badge="STUDIO SUITE"
                  className="w-full h-full"
                />
              </div>

              {/* Status Bar */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-muted-text">
                <span className="font-mono text-[11px] text-lime flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  CONCEPTUAL STUDIO SUITE &bull; PRE-PRODUCTION SPECIFICATION
                </span>
                <span className="text-warm-white/80">Proposed styling concepts only</span>
              </div>
            </div>
          </motion.div>

          {/* Four Showcase Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {CUSTOMISATION_DATA.concepts.map((concept) => {
              const Icon = iconMap[concept.icon] || Sparkles;

              return (
                <motion.div
                  key={concept.id}
                  variants={fadeIn}
                  className="group relative rounded-brand-lg bg-slate-card/70 border border-slate p-6 flex flex-col justify-between hover:border-lime/40 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-brand bg-midnight border border-slate flex items-center justify-center text-lime group-hover:bg-lime group-hover:text-midnight group-hover:border-lime transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-midnight border border-slate/60 text-muted-text">
                        {concept.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-black uppercase text-warm-white tracking-wide mb-2 group-hover:text-lime transition-colors">
                      {concept.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-warm-white/70 font-sans leading-relaxed">
                      {concept.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate/50 flex items-center justify-between text-[11px] text-muted-text font-mono">
                    <span>PALETTE READY</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-lime/40 group-hover:bg-lime transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CustomisationSection;
