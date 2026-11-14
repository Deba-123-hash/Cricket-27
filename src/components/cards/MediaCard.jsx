import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Play, Download, Sparkles } from 'lucide-react';
import Badge from '../common/Badge';
import CricketImage from '../common/CricketImage';

export const MediaCard = forwardRef(
  (
    {
      title,
      type = 'wallpaper', // 'video' | 'wallpaper' | 'concept'
      thumbnail,
      duration,
      resolution,
      onPlay,
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="group relative rounded-brand overflow-hidden bg-slate-card border border-slate hover:border-lime transition-all duration-300 shadow-card-depth flex flex-col"
      >
        <div className="aspect-video w-full bg-midnight flex items-center justify-center relative overflow-hidden border-b border-slate">
          <CricketImage
            src={thumbnail || '/assets/hero/hero-cricket-batter.svg'}
            fallbackSrc="/assets/hero/hero-cricket-batter.svg"
            alt={title}
            title={title}
            icon="tv"
            aspectRatio="16/9"
            objectFit="contain"
            className="w-full h-full"
            imageClassName="w-full h-full object-contain p-6 transform group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute top-3 left-3 z-10">
            <Badge variant={type === 'video' ? 'coral' : 'lime'} size="sm">
              {type}
            </Badge>
          </div>

          {/* Media Action Overlay */}
          <div className="absolute inset-0 bg-midnight/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-20">
            {type === 'video' ? (
              <button
                type="button"
                onClick={onPlay}
                className="p-3.5 rounded-full bg-lime text-midnight shadow-lime-glow hover:scale-110 transition-transform"
                aria-label={`Play ${title}`}
              >
                <Play className="w-6 h-6 fill-current translate-x-0.5" />
              </button>
            ) : (
              <a
                href={thumbnail || '/assets/hero/hero-cricket-batter.svg'}
                download
                className="p-3.5 rounded-full bg-slate-card border border-lime text-lime hover:bg-lime hover:text-midnight transition-all"
                aria-label={`Download ${title}`}
              >
                <Download className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <div className="p-4 flex items-center justify-between">
          <div>
            <h4 className="text-sm font-heading font-bold uppercase text-warm-white group-hover:text-lime transition-colors">
              {title}
            </h4>
            <span className="text-xs text-muted-text font-mono">
              {duration ? `Runtime: ${duration}` : resolution ? `Res: ${resolution}` : '1920x1080 (16:9)'}
            </span>
          </div>
          <Sparkles className="w-4 h-4 text-muted-text group-hover:text-lime transition-colors" />
        </div>
      </motion.div>
    );
  }
);

MediaCard.displayName = 'MediaCard';

MediaCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'wallpaper', 'concept']),
  thumbnail: PropTypes.string,
  duration: PropTypes.string,
  resolution: PropTypes.string,
  onPlay: PropTypes.func,
};

export default MediaCard;
