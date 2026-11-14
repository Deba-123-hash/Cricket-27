import { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Sparkles, Award } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import Lightbox from '../../components/gallery/Lightbox';
import { FEATURED_POSTERS_DATA } from '../../data/gallery';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const FeaturedPosters = () => {
  const [selectedPoster, setSelectedPoster] = useState(null);

  const handleOpenPoster = (poster) => {
    setSelectedPoster(poster);
  };

  const handleClosePoster = () => {
    setSelectedPoster(null);
  };

  const handleNext = () => {
    const idx = FEATURED_POSTERS_DATA.findIndex((p) => p.id === selectedPoster.id);
    const nextIdx = (idx + 1) % FEATURED_POSTERS_DATA.length;
    setSelectedPoster(FEATURED_POSTERS_DATA[nextIdx]);
  };

  const handlePrev = () => {
    const idx = FEATURED_POSTERS_DATA.findIndex((p) => p.id === selectedPoster.id);
    const prevIdx = idx === 0 ? FEATURED_POSTERS_DATA.length - 1 : idx - 1;
    setSelectedPoster(FEATURED_POSTERS_DATA[prevIdx]);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-midnight-light border-y border-slate/60 overflow-hidden">
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
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <motion.div variants={fadeIn} className="mb-4">
              <Badge variant="lime" size="sm">
                PROMOTIONAL ART SERIES
              </Badge>
            </motion.div>

            <motion.h2
              variants={fadeIn}
              className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-tight text-warm-white uppercase mb-4"
            >
              BUILT TO MAKE <span className="text-lime">AN IMPACT.</span>
            </motion.h2>

            <motion.p
              variants={fadeIn}
              className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed"
            >
              A collection of creative visual concepts that reflect the energy, passion and identity of CRICKET27.
            </motion.p>
          </div>

          {/* Three Posters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {FEATURED_POSTERS_DATA.map((poster, index) => (
              <motion.div
                key={poster.id}
                variants={fadeIn}
                onClick={() => handleOpenPoster(poster)}
                className="group relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card/90 shadow-2xl cursor-pointer hover:border-lime/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Poster 3:4 Visual Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-midnight">
                  <CricketImage
                    src={poster.image}
                    fallbackSrc="/assets/game-concept/game-hero.jpg"
                    alt={poster.alt}
                    aspectRatio="3/4"
                    objectFit="contain"
                    title={poster.title}
                    badge={poster.edition}
                    icon="camera"
                    className="w-full h-full p-2 sm:p-4"
                    imageClassName="w-full h-full object-contain transition-transform duration-600 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-midnight/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px] z-10 pointer-events-none">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-lime text-midnight font-heading font-black text-xs uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>VIEW POSTER</span>
                    </div>
                  </div>

                  {/* Edition Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-midnight/90 text-lime border border-lime/40 backdrop-blur-sm">
                      {poster.edition}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-midnight/90 text-muted-text border border-slate/60">
                      {poster.year}
                    </span>
                  </div>
                </div>

                {/* Poster Text Content */}
                <div className="p-6 border-t border-slate/60 bg-midnight/95 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-lime font-bold uppercase tracking-wider mb-1.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>{poster.subtitle}</span>
                    </div>

                    <h3 className="font-heading font-black text-2xl text-warm-white uppercase tracking-wide group-hover:text-lime transition-colors mb-2">
                      {poster.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-warm-white/75 font-sans leading-relaxed mb-4">
                      {poster.description}
                    </p>
                  </div>

                  {/* Footer Bar */}
                  <div className="pt-4 border-t border-slate/50 flex items-center justify-between text-[11px] text-muted-text font-mono">
                    <span className="text-lime flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      SERIES {index + 1}
                    </span>
                    <span>Click to inspect 4K</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer Note */}
          <motion.div
            variants={fadeIn}
            className="mt-12 text-center text-xs text-muted-text font-mono"
          >
            <span>* Posters are promotional visual design concepts, not announcements of commercial game releases or live events.</span>
          </motion.div>
        </motion.div>
      </Container>

      {/* Lightbox for Posters */}
      {selectedPoster && (
        <Lightbox
          item={{
            ...selectedPoster,
            category: 'Promotional Posters',
            dimensions: '1080x1440 (3:4 Vector)',
          }}
          onClose={handleClosePoster}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={FEATURED_POSTERS_DATA.findIndex((p) => p.id === selectedPoster.id)}
          totalCount={FEATURED_POSTERS_DATA.length}
        />
      )}
    </section>
  );
};

export default FeaturedPosters;
