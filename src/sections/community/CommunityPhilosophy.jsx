import { motion } from 'framer-motion';
import { Heart, Globe, Sparkles } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import { COMMUNITY_PHILOSOPHY_DATA } from '../../data/community';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const CommunityPhilosophy = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-midnight-light border-y border-slate/60 overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-lime/5 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Narrative Content */}
          <motion.div variants={fadeIn} className="lg:col-span-6">
            <Badge variant="lime" size="sm" className="mb-4">
              {COMMUNITY_PHILOSOPHY_DATA.eyebrow}
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-6 leading-tight">
              MORE THAN FANS. <br />
              <span className="text-lime">A SHARED PASSION.</span>
            </h2>

            <p className="text-warm-white/85 font-sans leading-relaxed text-base sm:text-lg mb-6">
              {COMMUNITY_PHILOSOPHY_DATA.description}
            </p>

            <p className="text-sm sm:text-base text-muted-text font-sans leading-relaxed mb-8">
              {COMMUNITY_PHILOSOPHY_DATA.subtext}
            </p>

            {/* Three Philosophy Pillars */}
            <div className="space-y-4 pt-4 border-t border-slate/60">
              {COMMUNITY_PHILOSOPHY_DATA.pillars.map((pillar, idx) => {
                const icons = [Globe, Heart, Sparkles];
                const Icon = icons[idx] || Sparkles;

                return (
                  <div
                    key={pillar.title}
                    className="p-4 rounded-brand bg-slate-card/60 border border-slate/80 hover:border-lime/40 transition-colors flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-brand bg-midnight border border-slate flex items-center justify-center text-lime shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-sm uppercase text-warm-white tracking-wide">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-warm-white/70 font-sans leading-relaxed mt-0.5">
                        {pillar.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Prominent Visual Feature Card */}
          <motion.div variants={fadeIn} className="lg:col-span-6">
            <div className="relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card shadow-2xl group">
              <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-midnight">
                <CricketImage
                  src={COMMUNITY_PHILOSOPHY_DATA.image}
                  fallbackSrc={COMMUNITY_PHILOSOPHY_DATA.fallbackImage}
                  alt={COMMUNITY_PHILOSOPHY_DATA.alt}
                  aspectRatio="16/10"
                  title="Community Ethos"
                  badge="COMMUNITY CULTURE"
                  icon="users"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-heading font-black text-xs uppercase px-3 py-1 rounded bg-midnight/90 text-lime border border-lime/40 backdrop-blur-sm">
                  CRICKET COMMUNITY ETHOS
                </span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-warm-white/90 p-3 rounded-brand bg-midnight/90 border border-slate backdrop-blur-sm">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-text truncate mr-2">
                  {COMMUNITY_PHILOSOPHY_DATA.caption}
                </span>
                <span className="font-mono text-lime font-bold shrink-0">CRICKET27</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CommunityPhilosophy;
