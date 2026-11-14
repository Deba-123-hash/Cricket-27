import { cn } from '../../utils/helpers';
import ResponsiveImage from './ResponsiveImage';

export const ImageWithOverlay = ({
  src,
  alt,
  aspectRatio = '16/9',
  overlayPosition = 'bottom', // 'bottom' | 'full'
  children,
  className = '',
}) => {
  return (
    <div className={cn('relative rounded-brand overflow-hidden group shadow-card-depth border border-slate', className)}>
      <ResponsiveImage
        src={src}
        alt={alt}
        aspectRatio={aspectRatio}
        objectFit="cover"
        imageClassName="group-hover:scale-105 transition-transform duration-500"
      />

      {/* Scrim Overlay */}
      <div
        className={cn(
          'absolute inset-0 pointer-events-none transition-opacity duration-300',
          overlayPosition === 'full'
            ? 'bg-midnight/75 flex items-center justify-center p-6'
            : 'bg-gradient-to-t from-midnight via-midnight/60 to-transparent flex flex-col justify-end p-6 sm:p-8'
        )}
      >
        <div className="pointer-events-auto w-full">{children}</div>
      </div>
    </div>
  );
};

export default ImageWithOverlay;
