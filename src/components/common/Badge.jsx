import { cn } from '../../utils/helpers';

export const Badge = ({
  children,
  variant = 'neutral',
  size = 'md',
  pulse = false,
  className = '',
}) => {
  const variantClasses = {
    lime: 'bg-lime/10 text-lime border border-lime/30',
    green: 'bg-lime/10 text-lime border border-lime/30',
    coral: 'bg-coral/10 text-coral border border-coral/30',
    crimson: 'bg-coral/10 text-coral border border-coral/30',
    success: 'bg-success/15 text-success border border-success/30',
    warning: 'bg-warning/15 text-warning border border-warning/30',
    error: 'bg-error/15 text-error border border-error/30',
    info: 'bg-info/15 text-info border border-info/30',
    neutral: 'bg-slate border border-slate-border text-warm-white',
    outline: 'bg-transparent text-warm-white border border-slate',
    default: 'bg-slate border border-slate-border text-warm-white',
  };

  const pulseColorClasses = {
    lime: 'bg-lime',
    green: 'bg-lime',
    coral: 'bg-coral',
    crimson: 'bg-coral',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
    info: 'bg-info',
    neutral: 'bg-warm-white',
    outline: 'bg-lime',
    default: 'bg-lime',
  };

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-[10px] tracking-wider font-semibold rounded',
    md: 'px-2.5 py-1 text-xs tracking-wider font-semibold rounded-md',
    lg: 'px-3.5 py-1.5 text-xs tracking-widest font-bold rounded-md',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 uppercase font-heading select-none',
        variantClasses[variant] || variantClasses.neutral,
        sizeClasses[size] || sizeClasses.md,
        className
      )}
    >
      {pulse && (
        <span
          className={cn(
            'w-1.5 h-1.5 rounded-full animate-pulse shrink-0',
            pulseColorClasses[variant] || pulseColorClasses.lime
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};

export default Badge;
