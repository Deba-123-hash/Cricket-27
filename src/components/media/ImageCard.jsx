import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import { cn } from '../../utils/helpers';
import Badge from '../common/Badge';
import ResponsiveImage from './ResponsiveImage';

export const ImageCard = ({
  src,
  title,
  category,
  aspectRatio = '16/9',
  resolution,
  onClick,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={cn(
        'group rounded-brand overflow-hidden bg-slate-card border border-slate hover:border-lime cursor-pointer shadow-card-depth transition-all duration-300 flex flex-col',
        className
      )}
    >
      <div className="relative overflow-hidden bg-midnight">
        <ResponsiveImage
          src={src}
          alt={title}
          aspectRatio={aspectRatio}
          objectFit="contain"
          imageClassName="p-4 group-hover:scale-105 transition-transform duration-300"
        />

        {/* Hover Action Icon Overlay */}
        <div className="absolute inset-0 bg-midnight/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-lime text-midnight flex items-center justify-center shadow-lime-glow">
            <Maximize2 className="w-5 h-5" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="p-4 bg-slate-card border-t border-slate flex items-center justify-between">
        <div>
          {category && (
            <Badge variant="lime" size="sm" className="mb-1">
              {category}
            </Badge>
          )}
          <h4 className="text-sm font-heading font-bold text-warm-white truncate max-w-[200px]">
            {title}
          </h4>
        </div>
        {resolution && (
          <span className="text-[11px] font-mono text-muted-text">
            {resolution}
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default ImageCard;
