import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils/helpers';

export const HeroBackground = ({
  src,
  alt = 'CRICKET27 Stadium Atmosphere',
  sources = null,
  opacity = 'opacity-35',
  scale = 'scale-105',
  className = '',
  loading = 'eager',
  priority: _priority = 'high',
  children = null,
}) => {
  const [hasError, setHasError] = useState(!src);

  useEffect(() => {
    setHasError(!src);
  }, [src]);

  return (
    <div
      data-testid="hero-background-container"
      className={cn(
        'absolute inset-0 z-0 pointer-events-none overflow-hidden select-none',
        className
      )}
    >
      {!hasError && src && (
        sources && sources.length > 0 ? (
          <picture>
            {sources.map((s, idx) => (
              <source key={idx} media={s.media} srcSet={s.srcSet} type={s.type} />
            ))}
            <img
              src={src}
              alt={alt}
              className={cn(
                'w-full h-full object-cover object-center transition-opacity duration-500',
                opacity,
                scale
              )}
              loading={loading}
              decoding="async"
              onError={() => setHasError(true)}
            />
          </picture>
        ) : (
          <img
            src={src}
            alt={alt}
            className={cn(
              'w-full h-full object-cover object-center transition-opacity duration-500',
              opacity,
              scale
            )}
            loading={loading}
            decoding="async"
            onError={() => setHasError(true)}
          />
        )
      )}

      {/* Atmospheric Stadium Fallback Canvas (active behind image or when image fails) */}
      <div
        data-testid="hero-background-canvas"
        className="absolute inset-0 bg-midnight pointer-events-none -z-10"
      />
      {/* Floodlight Cones & Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-lime/10 rounded-full blur-[160px] pointer-events-none" />
      {/* Subtle Pitch Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#263449_1px,transparent_1px),linear-gradient(to_bottom,#263449_1px,transparent_1px)] bg-[size:36px_36px]" />

      {/* Optional Child Overlays / Scrims */}
      {children}
    </div>
  );
};

HeroBackground.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      media: PropTypes.string,
      srcSet: PropTypes.string.isRequired,
      type: PropTypes.string,
    })
  ),
  opacity: PropTypes.string,
  scale: PropTypes.string,
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  priority: PropTypes.string,
  children: PropTypes.node,
};

export default HeroBackground;
