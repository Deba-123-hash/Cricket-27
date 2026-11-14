import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { FEATURE_SUMMARY_ITEMS } from '../../data/featuresPage';
import { fadeIn, staggerContainer } from '../../utils/animations';

const targetSectionMap = {
  'Batting Experience': 'batting-experience',
  'Bowling Experience': 'bowling-experience',
  'Fielding Experience': 'fielding-experience',
  'Match Presentation': 'match-presentation',
  'Competitive Experience': 'competitive-experience',
  'Customisation Concepts': 'customisation-concepts',
};

export const FeatureSummary = () => {
  const scrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-24 lg:py-32 bg-midnight-light border-y border-slate/60 overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-lime/5 blur-[160px] pointer-events-none"
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
                FEATURE SUMMARY
              </Badge>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-4"
            >
              THE SPIRIT OF CRICKET. <br />
              <span className="text-lime">THE VISION OF CRICKET27.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed"
            >
              A cohesive synthesis of our proposed creative pillars, balancing high-tempo gameplay with pure sporting integrity.
            </motion.p>
          </div>

          {/* Matrix Breakdown Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {FEATURE_SUMMARY_ITEMS.map((item, index) => {
              const targetId = targetSectionMap[item.category] || 'feature-overview';

              return (
                <motion.div
                  key={item.category}
                  variants={fadeIn}
                  onClick={() => scrollTo(targetId)}
                  className="group relative rounded-brand-lg bg-slate-card/80 border border-slate p-7 flex flex-col justify-between hover:border-lime/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-card"
                >
                  <div>
                    {/* Top Meta Line */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-lime">
                        0{index + 1} {'//'}
                      </span>
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-midnight border border-slate/60 text-muted-text">
                        {item.tag}
                      </span>
                    </div>

                    {/* Category Title */}
                    <div className="text-xs uppercase font-heading font-bold text-muted-text tracking-wider mb-1">
                      {item.category}
                    </div>

                    {/* Main Takeaway */}
                    <h3 className="text-xl font-heading font-black uppercase text-warm-white tracking-wide mb-3 group-hover:text-lime transition-colors leading-tight">
                      {item.heading}
                    </h3>

                    {/* Detail */}
                    <p className="text-sm text-warm-white/70 font-sans leading-relaxed">
                      {item.detail}
                    </p>
                  </div>

                  {/* Jump Action */}
                  <div className="mt-6 pt-4 border-t border-slate/50 flex items-center justify-between text-xs font-heading font-bold uppercase tracking-wider text-muted-text group-hover:text-lime transition-colors">
                    <span>Explore Section</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Callout Banner */}
          <motion.div
            variants={fadeIn}
            className="mt-14 p-6 sm:p-8 rounded-brand-lg bg-gradient-to-r from-slate-card/90 via-midnight to-slate-card/90 border border-slate/80 flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime shrink-0">
                <Sparkles className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="font-heading font-black text-lg uppercase text-warm-white">
                  Built For The Cricket Community
                </h4>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  Every feature concept is open for community discussion and feature voting on our Discord server.
                </p>
              </div>
            </div>
            <div className="shrink-0 font-heading font-bold text-xs uppercase px-4 py-2 rounded-full bg-lime/10 text-lime border border-lime/30 tracking-widest">
              COMMUNITY-DRIVEN VISION
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeatureSummary;
