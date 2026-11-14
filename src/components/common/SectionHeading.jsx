import { cn } from '../../utils/helpers';

export const SectionHeading = ({
  eyebrow,
  title,
  highlightText,
  description,
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-12 sm:mb-16', alignmentClasses[align], className)}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-3 text-xs font-display font-bold uppercase tracking-widest text-cricket-green bg-cricket-green/10 border border-cricket-green/30 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-cricket-green animate-pulse" />
          {eyebrow}
        </span>
      )}

      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white mb-4">
          {title}{' '}
          {highlightText && (
            <span className="text-gradient-green">{highlightText}</span>
          )}
        </h2>
      )}

      {description && (
        <p className="text-base sm:text-lg text-cricket-muted leading-relaxed max-w-2xl font-normal">
          {description}
        </p>
      )}

      <div className={cn(
        'w-16 h-1 mt-6 rounded-full bg-gradient-to-r from-cricket-green to-transparent',
        align === 'center' ? 'mx-auto' : ''
      )} />
    </div>
  );
};

export default SectionHeading;
