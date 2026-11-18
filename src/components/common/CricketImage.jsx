import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Trophy,
  Target,
  Shield,
  Sparkles,
  Tv,
  Crosshair,
  Zap,
  Eye,
  Camera,
  Newspaper,
  Compass,
  Award,
  Activity,
  Users,
  Flame,
  Radio,
} from 'lucide-react';
import { cn } from '../../utils/helpers';

const ICON_MAP = {
  trophy: Trophy,
  target: Target,
  shield: Shield,
  sparkles: Sparkles,
  tv: Tv,
  crosshair: Crosshair,
  zap: Zap,
  eye: Eye,
  camera: Camera,
  newspaper: Newspaper,
  compass: Compass,
  award: Award,
  activity: Activity,
  users: Users,
  flame: Flame,
  radio: Radio,
};

const ASPECT_MAP = {
  '16/9': 'aspect-video',
  '16/10': 'aspect-[16/10]',
  '4/3': 'aspect-[4/3]',
  '3/4': 'aspect-[3/4]',
  '1/1': 'aspect-square',
  '21/9': 'aspect-[21/9]',
  '24/9': 'aspect-[24/9]',
  '4/5': 'aspect-[4/5]',
  auto: '',
};

/**
 * CricketImage — Robust image component with:
 * 1. Primary src attempt
 * 2. fallbackSrc attempt if primary fails
 * 3. Branded CRICKET27 placeholder if all fail or no src provided
 */
export const CricketImage = ({
  src,
  alt = 'CRICKET27 visual asset',
  aspectRatio = '16/9',
  objectFit = 'cover',
  fallbackSrc = null,
  icon = 'activity',
  badge: _badge = 'CRICKET27',
  title: _title = null,
  className = '',
  imageClassName = '',
  imgClassName = '',
  pictureSources = null,
  loading = 'lazy',
  decoding = 'async',
  width,
  height,
  ...props
}) => {
  // Track which src to actually render
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc || '');
  // 'loading' | 'loaded' | 'error'
  const [status, setStatus] = useState(() => (src || fallbackSrc ? 'loading' : 'error'));
  const [triedFallback, setTriedFallback] = useState(false);

  // Reset when src/fallbackSrc props change
  useEffect(() => {
    const nextSrc = src || fallbackSrc || '';
    setImgSrc(nextSrc);
    setTriedFallback(false);
    setStatus(nextSrc ? 'loading' : 'error');
  }, [src, fallbackSrc]);

  const IconComponent =
    typeof icon === 'string'
      ? ICON_MAP[icon.toLowerCase()] || Activity
      : icon || Activity;

  const finalImgClass = imageClassName || imgClassName;

  const handleLoad = () => setStatus('loaded');

  const handleError = () => {
    // Try fallback once if available and not yet tried
    if (fallbackSrc && !triedFallback && imgSrc !== fallbackSrc) {
      setTriedFallback(true);
      setImgSrc(fallbackSrc);
      setStatus('loading');
    } else {
      setStatus('error');
    }
  };

  const isError = status === 'error';
  const isLoaded = status === 'loaded';
  const isLoading = status === 'loading';

  return (
    <div
      data-testid="cricket-image-container"
      className={cn(
        'relative overflow-hidden bg-midnight flex items-center justify-center select-none',
        ASPECT_MAP[aspectRatio] || ASPECT_MAP['16/9'],
        className
      )}
    >
      {/* Loading Skeleton — only shown while loading and not yet loaded */}
      {isLoading && (
        <div
          data-testid="cricket-image-skeleton"
          className="absolute inset-0 bg-slate-card/70 animate-pulse z-0"
        />
      )}

      {/* Branded Error Fallback */}
      {isError && (
        <div
          data-testid="cricket-image-fallback"
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-card via-midnight to-slate-card/90 flex flex-col items-center justify-center overflow-hidden p-4 text-center z-10"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,243,74,0.12)_0%,transparent_70%)] pointer-events-none" />
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#263449_1px,transparent_1px),linear-gradient(to_bottom,#263449_1px,transparent_1px)] bg-[size:24px_24px]" />
          {/* Icon Badge */}
          <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-brand-lg bg-midnight/90 border border-slate-border/80 flex items-center justify-center text-lime shadow-card mb-2">
            <IconComponent className="w-6 h-6" aria-hidden="true" />
          </div>
          <span className="relative z-10 font-heading font-black text-xs uppercase tracking-wider text-warm-white">
            CRICKET27
          </span>
          <span className="relative z-10 font-mono text-[9px] sm:text-[10px] text-lime/80 uppercase tracking-widest mt-0.5">
            BEYOND THE BOUNDARY
          </span>
        </div>
      )}

      {/* Actual Image — always rendered (hidden via opacity until loaded, removed from layout when error) */}
      {!isError && imgSrc && (
        pictureSources && pictureSources.length > 0 ? (
          <picture className="w-full h-full">
            {pictureSources.map((source, idx) => (
              <source
                key={idx}
                media={source.media}
                srcSet={source.srcSet}
                type={source.type}
              />
            ))}
            <img
              src={imgSrc}
              alt={alt}
              loading={loading}
              decoding={decoding}
              width={width}
              height={height}
              onLoad={handleLoad}
              onError={handleError}
              className={cn(
                'w-full h-full transition-opacity duration-500',
                objectFit === 'cover' ? 'object-cover' : 'object-contain',
                isLoaded ? 'opacity-100' : 'opacity-0',
                finalImgClass
              )}
              {...props}
            />
          </picture>
        ) : (
          <img
            src={imgSrc}
            alt={alt}
            loading={loading}
            decoding={decoding}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
            className={cn(
              'w-full h-full transition-opacity duration-500',
              objectFit === 'cover' ? 'object-cover' : 'object-contain',
              isLoaded ? 'opacity-100' : 'opacity-0',
              finalImgClass
            )}
            {...props}
          />
        )
      )}
    </div>
  );
};

CricketImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  aspectRatio: PropTypes.string,
  objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
  fallbackSrc: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType, PropTypes.func, PropTypes.object]),
  badge: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  imgClassName: PropTypes.string,
  pictureSources: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.string,
      srcSet: PropTypes.string.isRequired,
      type: PropTypes.string,
    })
  ),
  loading: PropTypes.oneOf(['lazy', 'eager']),
  decoding: PropTypes.oneOf(['async', 'sync', 'auto']),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CricketImage;
