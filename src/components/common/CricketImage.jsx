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
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc || '');
  const [hasError, setHasError] = useState(!src && !fallbackSrc);
  const [isLoaded, setIsLoaded] = useState(false);
  const [usedFallback, setUsedFallback] = useState(false);

  useEffect(() => {
    const nextSrc = src || fallbackSrc || '';
    setCurrentSrc(nextSrc);
    setHasError(!nextSrc);
    setIsLoaded(false);
    setUsedFallback(false);
  }, [src, fallbackSrc]);

  const IconComponent =
    typeof icon === 'string'
      ? ICON_MAP[icon.toLowerCase()] || Activity
      : icon || Activity;

  const handleImageError = (e) => {
    if (e && e.currentTarget) {
      e.currentTarget.style.display = 'none';
    }
    if (fallbackSrc && !usedFallback && currentSrc !== fallbackSrc) {
      setUsedFallback(true);
      setCurrentSrc(fallbackSrc);
      setIsLoaded(false);
    } else {
      setHasError(true);
    }
  };

  const finalImgClass = imageClassName || imgClassName;
  const isSvg = typeof currentSrc === 'string' && currentSrc.endsWith('.svg');
  const isWebp = typeof currentSrc === 'string' && currentSrc.endsWith('.webp');

  return (
    <div
      data-testid="cricket-image-container"
      className={cn(
        'relative overflow-hidden bg-midnight flex items-center justify-center select-none',
        ASPECT_MAP[aspectRatio] || ASPECT_MAP['16/9'],
        className
      )}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
        <div
          data-testid="cricket-image-skeleton"
          className="absolute inset-0 bg-slate-card/70 animate-pulse z-0"
        />
      )}

      {hasError || !currentSrc ? (
        /* CRICKET27 Branded Visual Fallback UI */
        <div
          data-testid="cricket-image-fallback"
          className="w-full h-full bg-gradient-to-br from-slate-card via-midnight to-slate-card/90 flex flex-col items-center justify-center relative overflow-hidden p-4 text-center z-10"
        >
          {/* Subtle Electric Lime Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,243,74,0.12)_0%,transparent_70%)] pointer-events-none" />

          {/* Athletic Pitch Crease & Seam Lines Pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#263449_1px,transparent_1px),linear-gradient(to_bottom,#263449_1px,transparent_1px)] bg-[size:24px_24px]" />

          {/* Centered Luminous Badge */}
          <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-brand-lg bg-midnight/90 border border-slate-border/80 flex items-center justify-center text-lime shadow-card mb-2">
            <IconComponent className="w-6 h-6" aria-hidden="true" />
          </div>

          {/* Signature Brand Badge */}
          <span className="relative z-10 font-heading font-black text-xs uppercase tracking-wider text-warm-white">
            CRICKET27
          </span>

          {/* Signature Brand Tagline */}
          <span className="relative z-10 font-mono text-[9px] sm:text-[10px] text-lime/80 uppercase tracking-widest mt-0.5">
            BEYOND THE BOUNDARY
          </span>
        </div>
      ) : pictureSources && pictureSources.length > 0 ? (
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
            src={currentSrc}
            alt={alt}
            loading={loading}
            decoding={decoding}
            width={width}
            height={height}
            onLoad={() => setIsLoaded(true)}
            onError={handleImageError}
            className={cn(
              'w-full h-full transition-opacity duration-300',
              objectFit === 'cover' ? 'object-cover' : 'object-contain',
              isLoaded ? 'opacity-100' : 'opacity-0',
              finalImgClass
            )}
            {...props}
          />
        </picture>
      ) : !isSvg && !isWebp && !usedFallback && typeof currentSrc === 'string' && currentSrc.match(/\.(jpg|jpeg|png)$/i) ? (
        <picture className="w-full h-full">
          <source
            type="image/webp"
            srcSet={currentSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
          />
          <img
            src={currentSrc}
            alt={alt}
            loading={loading}
            decoding={decoding}
            width={width}
            height={height}
            onLoad={() => setIsLoaded(true)}
            onError={handleImageError}
            className={cn(
              'w-full h-full transition-opacity duration-300',
              objectFit === 'cover' ? 'object-cover' : 'object-contain',
              isLoaded ? 'opacity-100' : 'opacity-0',
              finalImgClass
            )}
            {...props}
          />
        </picture>
      ) : (
        <img
          src={currentSrc}
          alt={alt}
          loading={loading}
          decoding={decoding}
          width={width}
          height={height}
          onLoad={() => setIsLoaded(true)}
          onError={handleImageError}
          className={cn(
            'w-full h-full transition-opacity duration-300',
            objectFit === 'cover' ? 'object-cover' : 'object-contain',
            isLoaded ? 'opacity-100' : 'opacity-0',
            finalImgClass
          )}
          {...props}
        />
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
