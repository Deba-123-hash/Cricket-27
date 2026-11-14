import { cn } from '../../utils/helpers';

export const LoadingSpinner = ({
  size = 'md',
  text = 'Loading...',
  variant = 'lime',
  className = '',
}) => {
  const sizeMap = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
    xl: 'w-16 h-16 border-4',
  };

  const variantBorderMap = {
    lime: 'border-slate border-t-lime',
    coral: 'border-slate border-t-coral',
    white: 'border-slate border-t-warm-white',
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn('inline-flex flex-col items-center justify-center gap-3', className)}
    >
      <div className="relative">
        <div
          className={cn(
            'rounded-full animate-spin',
            sizeMap[size] || sizeMap.md,
            variantBorderMap[variant] || variantBorderMap.lime
          )}
        />
        <div className="absolute inset-0 rounded-full border border-lime/20 blur-[1px]" />
      </div>
      {text && (
        <span className="text-xs uppercase font-heading font-semibold tracking-widest text-muted-text">
          {text}
        </span>
      )}
      <span className="sr-only">{text || 'Loading'}</span>
    </div>
  );
};

export default LoadingSpinner;
