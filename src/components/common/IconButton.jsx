import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';
import { buttonPress } from '../../utils/animations';

const iconButtonVariants = {
  primary:
    'bg-lime text-midnight hover:bg-lime-hover shadow-lime-glow border border-lime/40 focus-visible:outline-lime',
  secondary:
    'bg-slate-card text-warm-white hover:text-white hover:border-lime/50 border border-slate shadow-card-depth focus-visible:outline-lime',
  outline:
    'bg-transparent text-warm-white border border-slate hover:border-lime hover:text-lime focus-visible:outline-lime',
  coral:
    'bg-coral text-midnight hover:bg-coral-hover shadow-coral-glow border border-coral/40 focus-visible:outline-coral',
  ghost:
    'bg-transparent text-muted-text hover:text-warm-white hover:bg-slate-card/60 focus-visible:outline-lime',
};

const iconButtonSizes = {
  sm: 'p-1.5 rounded-md text-sm',
  md: 'p-2.5 rounded-brand text-base',
  lg: 'p-3.5 rounded-brand text-lg',
};

export const IconButton = forwardRef(
  (
    {
      icon: Icon,
      variant = 'secondary',
      size = 'md',
      onClick,
      disabled = false,
      className = '',
      'aria-label': ariaLabel,
      title,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled}
        aria-label={ariaLabel || title}
        title={title || ariaLabel}
        whileTap={disabled ? undefined : buttonPress}
        className={cn(
          'inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed aspect-square focus-visible:outline-2',
          iconButtonVariants[variant] || iconButtonVariants.secondary,
          iconButtonSizes[size] || iconButtonSizes.md,
          className
        )}
        {...rest}
      >
        {Icon && <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />}
      </motion.button>
    );
  }
);

IconButton.displayName = 'IconButton';
export default IconButton;
