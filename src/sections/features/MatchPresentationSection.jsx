import { motion } from 'framer-motion';
import { Sparkles, Trophy, Tv, HeartHandshake } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { MATCH_PRESENTATION_DATA } from '../../data/featuresPage';
import { fadeIn, staggerContainer } from '../../utils/animations';

const getThemeIcon = (id) => {
  switch (id) {
    case 'stadium-atmosphere':
      return Sparkles;
    case 'match-moments':
      return Trophy;
    case 'sports-presentation':
      return Tv;
    case 'cricket-culture':
      return HeartHandshake;
    default:
      return Sparkles;
  }
};

export const MatchPresentationSection = () => {
  return (
    <section id="match-presentation" className="relative py-28 lg:py-36 bg-midnight scroll-mt-20 overflow-hidden">
      {/* Cinematic Stadium Background with Deep Navy Gradient Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture>
          <source type="image/webp" srcSet={MATCH_PRESENTATION_DATA.bgImage} />
          <img
            src={MATCH_PRESENTATION_DATA.bgFallback || MATCH_PRESENTATION_DATA.bgImage}
            alt="Atmospheric stadium under night floodlights"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            loading="lazy"
            decoding="async"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/90 to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight" />

        {/* Ambient Radial Accent */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-lime/10 blur-[170px] pointer-events-none"
          aria-hidden="true"
        />
      </div>

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
                {MATCH_PRESENTATION_DATA.eyebrow}
              </Badge>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-warm-white uppercase mb-6 leading-tight whitespace-pre-line"
            >
              MORE THAN THE MATCH. <br />
              <span className="text-lime">IT&apos;S THE EXPERIENCE.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-base sm:text-lg text-warm-white/80 font-sans leading-relaxed"
            >
              {MATCH_PRESENTATION_DATA.description}
            </motion.p>
          </div>

          {/* Four Thematic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {MATCH_PRESENTATION_DATA.themes.map((theme) => {
              const Icon = getThemeIcon(theme.id);

              return (
                <motion.div
                  key={theme.id}
                  variants={fadeIn}
                  className="group relative rounded-brand-lg bg-slate-card/80 border border-slate p-7 flex flex-col justify-between hover:border-lime/50 hover:-translate-y-1.5 transition-all duration-300 shadow-card"
                >
                  <div>
                    {/* Top Number & Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-heading font-black text-3xl text-lime/30 group-hover:text-lime transition-colors">
                        {theme.number}
                      </span>
                      <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-midnight border border-slate/60 text-muted-text">
                        {theme.tag}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-brand bg-midnight border border-slate flex items-center justify-center text-lime mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-black uppercase text-warm-white tracking-wide mb-1 group-hover:text-lime transition-colors">
                      {theme.title}
                    </h3>

                    {/* Subtitle */}
                    <span className="font-mono text-xs text-lime block mb-3">
                      {theme.subtitle}
                    </span>

                    {/* Description */}
                    <p className="text-sm text-warm-white/70 font-sans leading-relaxed">
                      {theme.description}
                    </p>
                  </div>

                  {/* Bottom Border Accent */}
                  <div className="mt-6 pt-3 border-t border-slate/50 flex items-center justify-between text-[11px] text-muted-text font-mono">
                    <span>BROADCAST DNA</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-lime/40 group-hover:bg-lime group-hover:scale-150 transition-all duration-200" />
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

export default MatchPresentationSection;
