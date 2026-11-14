import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Maximize2, Sparkles } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import Lightbox from '../../components/gallery/Lightbox';
import { GALLERY_ITEMS } from '../../data/gallery';

export const MediaGallerySection = () => {
  const [activeItem, setActiveItem] = useState(null);

  // Take first 6 to 8 items for the homepage preview
  const previewItems = GALLERY_ITEMS.slice(0, 7);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = previewItems.findIndex((i) => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % previewItems.length;
    setActiveItem(previewItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = previewItems.findIndex((i) => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + previewItems.length) % previewItems.length;
    setActiveItem(previewItems[prevIndex]);
  };

  return (
    <section id="media-gallery-preview" className="py-24 sm:py-32 bg-midnight-dark relative overflow-hidden border-t border-slate/50">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[160px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="lime" size="sm">
                THE CRICKET27 VISUAL WORLD
              </Badge>
              <span className="h-px w-8 bg-slate-light" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
                GALLERY PREVIEW
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
              INSIDE THE WORLD OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-hover">
                CRICKET27.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-text leading-relaxed">
              Immerse yourself in official concept artwork, atmospheric stadium visuals, and high-resolution wallpapers.
            </p>
          </div>

          <Button
            to={ROUTES.MEDIA}
            variant="outline"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            className="self-start md:self-end shrink-0 font-heading uppercase tracking-wider"
          >
            EXPLORE ALL MEDIA
          </Button>
        </div>

        {/* Asymmetrical Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {previewItems.map((item, index) => {
            // Asymmetric spans: 1st item spans 8 cols on desktop, 2nd spans 4 cols, etc.
            const isHeroCard = index === 0;
            const isTallCard = index === 1;
            const colSpanClass = isHeroCard
              ? 'lg:col-span-8 aspect-[16/10]'
              : isTallCard
              ? 'lg:col-span-4 aspect-[4/3] lg:aspect-auto'
              : index === 2
              ? 'lg:col-span-4 aspect-[16/10]'
              : index === 3
              ? 'lg:col-span-4 aspect-[16/10]'
              : index === 4
              ? 'lg:col-span-4 aspect-[16/10]'
              : 'lg:col-span-6 aspect-[16/9]';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveItem(item)}
                className={`group relative rounded-brand overflow-hidden bg-slate-card border border-slate hover:border-lime/60 cursor-pointer transition-all duration-300 shadow-card-depth flex flex-col justify-end ${colSpanClass}`}
              >
                {/* Image Element */}
                <div className="absolute inset-0 z-0 bg-midnight overflow-hidden">
                  <CricketImage
                    src={item.src}
                    alt={item.title}
                    title={item.title}
                    icon="eye"
                    aspectRatio="auto"
                    objectFit="cover"
                    className="w-full h-full"
                    imageClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity pointer-events-none" />
                </div>

                {/* Top Category Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <Badge variant="neutral" size="sm" className="bg-midnight/80 backdrop-blur-md border border-slate text-warm-white">
                    {item.category}
                  </Badge>
                </div>

                {/* Hover Maximize Prompt */}
                <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 rounded-brand bg-lime text-midnight flex items-center justify-center shadow-lime-glow">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Title Bar */}
                <div className="relative z-10 p-5 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base sm:text-lg font-heading font-black uppercase text-warm-white group-hover:text-lime transition-colors truncate">
                      {item.title}
                    </h3>
                    {item.dimensions && (
                      <span className="text-[10px] font-mono text-muted-text hidden sm:inline">
                        {item.dimensions}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-text line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Note */}
        <div className="mt-8 p-4 rounded-brand bg-midnight border border-slate/60 flex items-center justify-between text-xs text-muted-text font-mono">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-lime" />
            <span>Click any artwork thumbnail to launch full-resolution lightbox viewer</span>
          </div>
          <span className="text-lime font-bold">7 PROMOTIONAL ASSETS</span>
        </div>
      </Container>

      {/* Interactive Lightbox Viewer */}
      <Lightbox
        item={activeItem}
        onClose={() => setActiveItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

export default MediaGallerySection;
