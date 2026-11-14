import { motion } from 'framer-motion';
import { Heart, Users, Trophy, Sparkles } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { COMMUNITY_VALUES } from '../../data/community';
import { fadeIn, staggerContainer } from '../../utils/animations';

const iconMap = {
  Heart,
  Users,
  Trophy,
  Sparkles,
};

export const CommunityValues = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-midnight overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-lime/5 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <Badge variant="lime" size="sm" className="mb-4">
            OUR CORE VALUES
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-4">
            WHAT BRINGS <span className="text-lime">US TOGETHER.</span>
          </h2>
          <p className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed">
            Four foundational values that guide our community vision, dialogue, and collaborative culture.
          </p>
        </div>

        {/* Four Community Value Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {COMMUNITY_VALUES.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;

            return (
              <motion.div
                key={item.id}
                variants={fadeIn}
                className="group relative rounded-brand-lg bg-slate-card/80 border border-slate p-7 flex flex-col justify-between hover:border-lime/50 hover:-translate-y-2 transition-all duration-300 shadow-card"
              >
                <div>
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-brand bg-midnight border border-slate flex items-center justify-center text-lime group-hover:bg-lime group-hover:text-midnight group-hover:border-lime transition-all duration-300">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-midnight border border-slate/60 text-muted-text">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-black uppercase text-warm-white tracking-wide mb-3 group-hover:text-lime transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-warm-white/75 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Border Indicator */}
                <div className="mt-8 pt-4 border-t border-slate/50 flex items-center justify-between text-[11px] text-muted-text font-mono">
                  <span>CRICKET27 DNA</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-lime/40 group-hover:bg-lime group-hover:scale-150 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default CommunityValues;
