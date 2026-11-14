import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Lightbox from '../../components/gallery/Lightbox';
import MediaCategoryFilter from './MediaCategoryFilter';
import MediaGalleryCard from './MediaGalleryCard';
import { MEDIA_CATEGORIES, GALLERY_ITEMS } from '../../data/gallery';

export const MediaGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All Media');
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Compute item counts per category
  const itemCounts = useMemo(() => {
    const counts = {
      'All Media': GALLERY_ITEMS.length,
    };
    MEDIA_CATEGORIES.forEach((cat) => {
      if (cat !== 'All Media') {
        counts[cat] = GALLERY_ITEMS.filter((item) => item.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter items based on activeCategory
  const filteredItems = useMemo(() => {
    if (activeCategory === 'All Media') {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedItem =
    selectedIndex !== null && filteredItems[selectedIndex]
      ? filteredItems[selectedIndex]
      : null;

  const handleOpenLightbox = useCallback((item) => {
    const index = filteredItems.findIndex((it) => it.id === item.id);
    setSelectedIndex(index !== -1 ? index : 0);
  }, [filteredItems]);

  const handleCloseLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
  }, [filteredItems.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  }, [filteredItems.length]);

  return (
    <section id="interactive-gallery" className="relative py-24 lg:py-32 bg-midnight overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[750px] rounded-full bg-lime/5 blur-[170px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="lime" size="sm" className="mb-4">
            VISUAL VAULT
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-4">
            INTERACTIVE <span className="text-lime">MEDIA GALLERY.</span>
          </h2>
          <p className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed">
            Filter through our concept artwork, stadium environments, tactical telemetry blueprints, and limited edition promotional posters.
          </p>
        </div>

        {/* Category Filters Row */}
        <div className="mb-12">
          <MediaCategoryFilter
            categories={MEDIA_CATEGORIES}
            activeCategory={activeCategory}
            onSelectCategory={(cat) => {
              setActiveCategory(cat);
              setSelectedIndex(null); // Reset lightbox on category switch
            }}
            itemCounts={itemCounts}
          />
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <MediaGalleryCard
                key={item.id}
                item={item}
                onClick={handleOpenLightbox}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State (Fallback Safety) */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 rounded-brand-lg border border-slate bg-slate-card/40">
            <p className="text-warm-white text-lg font-heading font-black uppercase">
              No assets in this category
            </p>
            <p className="text-muted-text text-sm mt-2">
              Please choose another filter above to view media assets.
            </p>
          </div>
        )}
      </Container>

      {/* Advanced Full-Screen Lightbox Modal */}
      {selectedItem && (
        <Lightbox
          item={selectedItem}
          onClose={handleCloseLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
          currentIndex={selectedIndex}
          totalCount={filteredItems.length}
        />
      )}
    </section>
  );
};

export default MediaGallery;
