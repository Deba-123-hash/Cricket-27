import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASINGS } from '../../utils/animations';
import { cn } from '../../utils/helpers';

export const ImageReveal = ({
  src,
  alt = '',
  className = '',
  imageClassName = '',
  aspectRatio = 'aspect-[16/10]',
  delay = 0,
  duration = 0.8,
  overlay = true,
  loading = 'lazy',
  children,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-brand-lg border border-slate bg-midnight group shadow-card',
        aspectRatio,
        className
      )}
    >
      {/* Animated Image Element */}
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 1.08,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            opacity: { duration: shouldReduceMotion ? 0.2 : duration, delay, ease: EASINGS.cinematic },
            scale: { duration: shouldReduceMotion ? 0 : duration + 0.2, delay, ease: EASINGS.cinematic },
          },
        }}
        viewport={{ once: true, margin: '-60px' }}
        className={cn(
          'w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105',
          !isLoaded && 'blur-sm',
          imageClassName
        )}
      />

      {/* Subtle Cinematic Vignette Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-80"
          aria-hidden="true"
        />
      )}

      {/* Optional Inset Content (Badges, Captions) */}
      {children && <div className="absolute inset-0 z-10 pointer-events-none">{children}</div>}
    </div>
  );
};

export default ImageReveal;
