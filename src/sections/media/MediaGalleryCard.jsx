import { memo, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Tag } from 'lucide-react';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';

export const MediaGalleryCard = memo(
  forwardRef(({ item, onClick }, ref) => {
    const imageSrc = item.src || item.image || item.thumbnail;
    const isPoster = item.category === 'Promotional Posters' || item.aspectRatio === '3:4';
    const aspectRatioProp = isPoster ? '3/4' : item.featured ? '16/9' : '16/10';

    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={() => onClick(item)}
        className={`group relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card/90 shadow-card cursor-pointer hover:border-lime/60 hover:shadow-lime-glow/20 transition-all duration-300 flex flex-col justify-between ${
          item.featured ? 'md:col-span-2 lg:col-span-2' : ''
        }`}
      >
        {/* Image Container with aspect ratio */}
        <div
          className={`relative w-full overflow-hidden bg-midnight ${
            isPoster
              ? 'aspect-[3/4]'
              : item.featured
              ? 'aspect-[16/9]'
              : 'aspect-[16/10]'
          }`}
        >
          <CricketImage
            src={imageSrc}
            fallbackSrc={item.fallbackSrc || '/assets/game-concept/game-hero.jpg'}
            alt={item.alt || item.title}
            aspectRatio={aspectRatioProp}
            objectFit="cover"
            title={item.title}
            badge={item.category}
            icon="camera"
            className="w-full h-full"
            imageClassName="w-full h-full object-cover transition-transform duration-600 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
            width={isPoster ? '600' : '800'}
            height={isPoster ? '800' : '500'}
          />

          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none" />

          {/* Hover Inspect Icon Pill */}
          <div className="absolute inset-0 bg-midnight/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[2px] z-10 pointer-events-none">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-lime text-midnight font-heading font-black text-xs uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-200">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>INSPECT ARTWORK</span>
            </div>
          </div>

          {/* Category Pill Tag */}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="lime" size="sm" className="shadow-md">
              {item.category}
            </Badge>
          </div>

          {/* Featured Tag (if featured) */}
          {item.featured && (
            <div className="absolute top-3 right-3 z-10">
              <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-midnight/90 text-lime border border-lime/40 backdrop-blur-sm">
                FEATURED ART
              </span>
            </div>
          )}
        </div>

        {/* Card Metadata Footer */}
        <div className="p-5 border-t border-slate/60 bg-midnight/90 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <h3 className="font-heading font-black text-lg text-warm-white uppercase tracking-wide group-hover:text-lime transition-colors truncate">
                {item.title}
              </h3>
              {item.dimensions && (
                <span className="font-mono text-[11px] text-lime shrink-0">
                  {item.dimensions.split(' ')[0]}
                </span>
              )}
            </div>
            <p className="text-xs text-muted-text font-sans line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Tags / Details Bar */}
          <div className="mt-4 pt-3 border-t border-slate/40 flex items-center justify-between text-[11px] text-muted-text">
            <div className="flex items-center gap-1.5 truncate text-muted-text">
              <Tag className="w-3 h-3 text-lime shrink-0" />
              <span className="truncate">{item.tags ? item.tags.slice(0, 3).join(' • ') : item.category}</span>
            </div>
            <span className="shrink-0 text-warm-white/70 font-mono">Click to expand</span>
          </div>
        </div>
      </motion.div>
    );
  })
);

MediaGalleryCard.displayName = 'MediaGalleryCard';

export default MediaGalleryCard;
