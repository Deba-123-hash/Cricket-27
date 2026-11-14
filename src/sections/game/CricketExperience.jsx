import { motion } from 'framer-motion';
import { Check, Shield, Activity, Sparkles, Trophy } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import { EXPERIENCE_PILLARS } from '../../data/gameHighlights';
import { fadeIn, staggerContainer } from '../../utils/animations';

const getCategoryIcon = (id) => {
  switch (id) {
    case 'batting':
      return Activity;
    case 'bowling':
      return Sparkles;
    case 'fielding':
      return Shield;
    case 'atmosphere':
      return Trophy;
    default:
      return Activity;
  }
};

export const CricketExperience = () => {
  return (
    <section id="cricket-experience" className="relative py-24 lg:py-32 bg-midnight scroll-mt-20 overflow-hidden">
      {/* Decorative Radial Ambient Glows */}
      <div
        className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-lime/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-coral/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <Badge variant="lime" size="sm" className="mb-4">
            THE FOUR PILLARS
          </Badge>
          <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-warm-white uppercase mb-4">
            THE CRICKET <span className="text-lime">EXPERIENCE.</span>
          </h2>
          <p className="text-lg text-warm-white/75 font-sans leading-relaxed">
            Every core facet of the sport reimagined through a modern, high-tempo 2D gaming lens.
            Precision mechanics engineered for genuine cricket fans.
          </p>
        </div>

        {/* Four Experience Pillars Showcase */}
        <div className="space-y-24 lg:space-y-36">
          {EXPERIENCE_PILLARS.map((pillar, index) => {
            const isEven = index % 2 === 1;
            const Icon = getCategoryIcon(pillar.id);

            return (
              <motion.div
                key={pillar.id}
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: '-80px' }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Artwork Column */}
                <motion.div
                  variants={fadeIn}
                  className={`lg:col-span-6 relative ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <div className="relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card shadow-2xl group">
                    {/* Image with subtle hover zoom */}
                    <div className="aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-midnight-light">
                      <CricketImage
                        src={pillar.image}
                        fallbackSrc={pillar.imageFallback}
                        alt={pillar.imageAlt}
                        aspectRatio="16/10"
                        title={pillar.title}
                        badge={pillar.badge}
                        icon={pillar.id}
                        className="w-full h-full"
                        imageClassName="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80 pointer-events-none" />

                    {/* Top Pill / Badge Overlay */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="font-heading font-black text-xs uppercase px-3 py-1 rounded bg-midnight/90 text-lime border border-lime/40 backdrop-blur-sm">
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Bottom Metadata Bar */}
                    <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-xs text-warm-white/90">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-muted-text">
                        CONCEPT VISUAL &bull; CRICKET27
                      </span>
                      <span className="font-heading font-bold text-lime tracking-widest">
                        SECTION {pillar.number}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Content Narrative Column */}
                <motion.div
                  variants={fadeIn}
                  className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  {/* Number & Icon Tag */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-lime/40">
                      {pillar.number}
                    </span>
                    <div className="h-5 w-[1px] bg-slate" />
                    <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-lime">
                      <Icon className="w-4 h-4 text-lime" />
                      <span>{pillar.tagline}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl sm:text-4xl font-heading font-black uppercase text-warm-white tracking-tight mb-4">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-warm-white/80 font-sans leading-relaxed text-base sm:text-lg mb-8">
                    {pillar.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-brand bg-slate-card/70 border border-slate mb-8">
                    {pillar.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="font-heading font-black text-base sm:text-lg text-lime">
                          {metric.value}
                        </div>
                        <div className="text-[11px] text-muted-text uppercase tracking-wider mt-0.5">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {pillar.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-sm text-warm-white/90">
                        <span className="w-5 h-5 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center shrink-0 mt-0.5 text-lime">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CricketExperience;
