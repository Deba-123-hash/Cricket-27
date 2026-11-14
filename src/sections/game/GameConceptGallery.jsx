import { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Sparkles } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import Lightbox from '../../components/gallery/Lightbox';
import { GAME_CONCEPT_ART } from '../../data/gameGallery';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const GameConceptGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedItem =
    selectedIndex !== null ? GAME_CONCEPT_ART[selectedIndex] : null;

  const handleOpen = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % GAME_CONCEPT_ART.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? GAME_CONCEPT_ART.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative py-24 lg:py-32 bg-midnight overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-lime/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <Badge variant="lime" size="sm" className="mb-4">
            CONCEPT ART &amp; DESIGNS
          </Badge>
          <h2 className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-warm-white uppercase mb-4">
            VISUALISING THE <span className="text-lime">VISION.</span>
          </h2>
          <p className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed">
            Early visual exploratory artwork defining stadium lighting, tactical pitch telemetry, and high-impact cricket moments.
          </p>
        </div>

        {/* Concept Art 6-Card Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {GAME_CONCEPT_ART.map((concept, index) => (
            <motion.div
              key={concept.id}
              variants={fadeIn}
              onClick={() => handleOpen(index)}
              className="group relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card/80 shadow-card cursor-pointer hover:border-lime/60 hover:shadow-lime-glow/20 transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="aspect-[16/10] overflow-hidden bg-midnight-light relative">
                <CricketImage
                  src={concept.thumbnail}
                  fallbackSrc={concept.fallbackThumbnail}
                  alt={concept.title}
                  aspectRatio="16/10"
                  title={concept.title}
                  badge={concept.category}
                  icon="camera"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Overlay with Inspect Icon */}
                <div className="absolute inset-0 bg-midnight/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px] z-10 pointer-events-none">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-lime text-midnight font-heading font-bold text-xs uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>INSPECT ARTWORK</span>
                  </div>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-midnight/85 text-warm-white border border-slate/60 backdrop-blur-sm">
                    {concept.category}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 border-t border-slate/60 bg-midnight/90">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-heading font-black text-lg text-warm-white uppercase tracking-wide group-hover:text-lime transition-colors truncate">
                    {concept.title}
                  </h3>
                  <span className="font-mono text-[11px] text-lime shrink-0">
                    {concept.dimensions.split(' ')[0]}
                  </span>
                </div>
                <p className="text-xs text-muted-text font-sans line-clamp-2 leading-relaxed">
                  {concept.description}
                </p>

                {/* Bottom Card Footer */}
                <div className="mt-3 pt-3 border-t border-slate/40 flex items-center justify-between text-[11px] text-muted-text">
                  <span className="flex items-center gap-1.5 text-lime font-mono">
                    <Sparkles className="w-3 h-3" />
                    {concept.tag}
                  </span>
                  <span>Click to expand</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Interactive Lightbox Modal */}
      {selectedItem && (
        <Lightbox
          item={selectedItem}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </section>
  );
};

export default GameConceptGallery;
