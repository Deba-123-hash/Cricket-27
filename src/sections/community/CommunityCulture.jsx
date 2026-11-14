import { motion } from 'framer-motion';
import { Camera, Sparkles } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import { COMMUNITY_CULTURE_ITEMS } from '../../data/community';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const CommunityCulture = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-midnight-light border-y border-slate/60 overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute bottom-1/4 -left-48 w-96 h-96 rounded-full bg-coral/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <Badge variant="lime" size="sm" className="mb-4">
            THE CRICKET CULTURE
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-warm-white uppercase mb-4">
            THE ENERGY THAT <span className="text-lime">UNITES US.</span>
          </h2>
          <p className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed">
            From the quiet reverence of the morning session to the explosive celebration of a boundary under the lights, cricket culture is our greatest creative inspiration.
          </p>
        </div>

        {/* Culture Visuals Asymmetric Showcase */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Main Large Feature (7 Columns) */}
          <motion.div variants={fadeIn} className="lg:col-span-7 flex flex-col justify-between">
            <div className="group relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card shadow-2xl h-full flex flex-col justify-between">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-midnight">
                <CricketImage
                  src={COMMUNITY_CULTURE_ITEMS[0].image}
                  fallbackSrc={COMMUNITY_CULTURE_ITEMS[0].fallbackImage}
                  alt={COMMUNITY_CULTURE_ITEMS[0].title}
                  aspectRatio="16/9"
                  title={COMMUNITY_CULTURE_ITEMS[0].title}
                  badge={COMMUNITY_CULTURE_ITEMS[0].tag}
                  icon="camera"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="lime" size="sm" className="shadow-md">
                    {COMMUNITY_CULTURE_ITEMS[0].tag}
                  </Badge>
                </div>
              </div>

              <div className="p-6 sm:p-8 bg-midnight/95 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-lime block mb-1">
                    {COMMUNITY_CULTURE_ITEMS[0].subtitle}
                  </span>
                  <h3 className="font-heading font-black text-2xl sm:text-3xl text-warm-white uppercase tracking-wide mb-3 group-hover:text-lime transition-colors">
                    {COMMUNITY_CULTURE_ITEMS[0].title}
                  </h3>
                  <p className="text-sm sm:text-base text-warm-white/80 font-sans leading-relaxed">
                    {COMMUNITY_CULTURE_ITEMS[0].description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate/50 flex items-center justify-between text-xs text-muted-text font-mono">
                  <span className="flex items-center gap-1.5 text-lime">
                    <Sparkles className="w-3.5 h-3.5" />
                    ATMOSPHERIC ARCHIVE
                  </span>
                  <span>Photo study &bull; Cricket Stadium</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Stack (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            {COMMUNITY_CULTURE_ITEMS.slice(1).map((item) => (
              <motion.div
                key={item.id}
                variants={fadeIn}
                className="group relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card shadow-card flex flex-col justify-between hover:border-lime/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-midnight">
                  <CricketImage
                    src={item.image}
                    fallbackSrc={item.fallbackImage}
                    alt={item.title}
                    aspectRatio="16/9"
                    title={item.title}
                    badge={item.tag}
                    icon="camera"
                    className="w-full h-full"
                    imageClassName="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-midnight/90 text-lime border border-lime/40 backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 bg-midnight/95 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[11px] text-lime block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-heading font-black text-xl text-warm-white uppercase tracking-wide mb-2 group-hover:text-lime transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-warm-white/75 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate/50 flex items-center justify-between text-[11px] text-muted-text font-mono">
                    <span className="flex items-center gap-1 text-muted-text">
                      <Camera className="w-3 h-3 text-lime" />
                      Visual Vignette
                    </span>
                    <span className="text-lime">CRICKET27</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CommunityCulture;
