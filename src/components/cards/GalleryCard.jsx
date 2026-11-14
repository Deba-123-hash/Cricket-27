import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import Badge from '../common/Badge';
import CricketImage from '../common/CricketImage';

export const GalleryCard = forwardRef(({ item, onSelect }, ref) => {
  const { title, category, src, dimensions } = item;

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => onSelect && onSelect(item)}
      className="group relative rounded-brand overflow-hidden bg-slate-card border border-slate hover:border-lime cursor-pointer transition-all duration-300 shadow-card-depth flex flex-col"
    >
      {/* Image Preview Container */}
      <div className="aspect-video w-full bg-midnight flex items-center justify-center overflow-hidden relative border-b border-slate">
        <CricketImage
          src={src}
          alt={title}
          title={title}
          icon="eye"
          aspectRatio="16/9"
          objectFit="contain"
          className="w-full h-full"
          imageClassName="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover Overlay with expand icon */}
        <div className="absolute inset-0 bg-midnight/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 p-4 z-20">
          <div className="w-10 h-10 rounded-full bg-lime text-midnight flex items-center justify-center shadow-lime-glow">
            <Maximize2 className="w-5 h-5" aria-hidden="true" />
          </div>
          <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white">
            Inspect Asset
          </span>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4 bg-slate-card flex items-center justify-between">
        <div>
          <Badge variant="lime" size="sm" className="mb-1">
            {category}
          </Badge>
          <h4 className="text-sm font-heading font-bold uppercase text-warm-white truncate max-w-[200px]">
            {title}
          </h4>
        </div>
        {dimensions && (
          <span className="text-[11px] font-mono text-muted-text">
            {dimensions}
          </span>
        )}
      </div>
    </motion.div>
  );
});

GalleryCard.displayName = 'GalleryCard';

GalleryCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    src: PropTypes.string,
    dimensions: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func,
};

export default GalleryCard;
