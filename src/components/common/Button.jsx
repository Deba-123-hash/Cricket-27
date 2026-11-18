import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '../../utils/helpers';
import { buttonPress } from '../../utils/animations';

const buttonVariants = {
  primary:
    'bg-lime text-midnight-dark font-heading font-bold hover:bg-lime-hover shadow-lime-glow border border-lime/40 focus-visible:outline-lime hover:shadow-[0_0_28px_rgba(183,243,74,0.45)]',
  secondary:
    'bg-slate-card text-warm-white font-heading font-semibold hover:text-white hover:border-lime/60 hover:bg-slate-elevated border border-slate shadow-card-depth focus-visible:outline-lime',
  outline:
    'bg-transparent text-warm-white font-heading font-semibold border border-slate hover:border-lime hover:text-lime hover:bg-lime/5 focus-visible:outline-lime',
  coral:
    'bg-coral text-midnight-dark font-heading font-bold hover:bg-coral-hover shadow-coral-glow border border-coral/40 focus-visible:outline-coral',
  ghost:
    'bg-transparent text-muted-text hover:text-warm-white hover:bg-slate-card/70 font-heading font-medium focus-visible:outline-lime',
  text:
    'bg-transparent text-lime hover:text-warm-white font-heading font-bold underline-offset-4 hover:underline p-0 focus-visible:outline-lime',
  icon:
    'bg-slate-card text-warm-white hover:text-midnight-dark hover:bg-lime hover:border-lime border border-slate focus-visible:outline-lime',
};

const buttonSizes = {
  sm: 'px-3.5 py-1.5 text-xs tracking-wider rounded-md',
  md: 'px-5 py-2.5 text-sm tracking-wider rounded-brand',
  lg: 'px-7 py-3.5 text-base tracking-widest rounded-brand',
};

export const Button = forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      to,
      href,
      onClick,
      disabled = false,
      loading = false,
      className = '',
      icon: Icon,
      iconPosition = 'right',
      type = 'button',
      'aria-label': ariaLabel,
      ...rest
    },
    ref
  ) => {
    const isTextVariant = variant === 'text';
    const isIconOnly = variant === 'icon';

    const baseClasses = cn(
      'inline-flex items-center justify-center gap-2 select-none uppercase transition-all duration-200 focus-visible:outline-2 disabled:opacity-50 disabled:cursor-not-allowed',
      buttonVariants[variant] || buttonVariants.primary,
      !isTextVariant && (buttonSizes[size] || buttonSizes.md),
      isIconOnly && 'p-2.5 aspect-square',
      className
    );

    const content = (
      <>
        {loading ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden="true" />
        ) : (
          Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
        )}
        {children && <span>{children}</span>}
        {!loading && Icon && iconPosition === 'right' && (
          <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        )}
      </>
    );

    if (to && !disabled && !loading) {
      return (
        <Link to={to} className={baseClasses} ref={ref} aria-label={ariaLabel} {...rest}>
          {content}
        </Link>
      );
    }

    if (href && !disabled && !loading) {
      return (
        <a
          href={href}
          className={baseClasses}
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          {...rest}
        >
          {content}
        </a>
      );
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        aria-label={ariaLabel}
        className={baseClasses}
        whileTap={disabled || loading ? undefined : buttonPress}
        {...rest}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
