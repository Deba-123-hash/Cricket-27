import { useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utils/helpers';

const logoSrcMap = {
  horizontal: '/assets/branding/logo/logo-primary-horizontal.svg',
  compact: '/assets/branding/logo/logo-compact.svg',
  symbol: '/assets/branding/logo/logo-symbol-mark.svg',
  monochrome: '/assets/branding/logo/logo-monochrome.svg',
  light: '/assets/branding/logo/logo-light-bg.svg',
  dark: '/assets/branding/logo/logo-dark-bg.svg',
};

const dimensionMap = {
  horizontal: { width: 520, height: 120, className: 'h-9 sm:h-11 w-auto' },
  compact: { width: 240, height: 240, className: 'w-24 h-24 sm:w-28 sm:h-28' },
  symbol: { width: 128, height: 128, className: 'w-10 h-10 sm:w-12 sm:h-12' },
  monochrome: { width: 520, height: 120, className: 'h-9 sm:h-11 w-auto' },
  light: { width: 520, height: 120, className: 'h-9 sm:h-11 w-auto' },
  dark: { width: 520, height: 120, className: 'h-9 sm:h-11 w-auto' },
};

export const BrandLogo = ({
  variant = 'horizontal',
  className = '',
  alt = 'CRICKET27 — Beyond The Boundary',
}) => {
  const [hasError, setHasError] = useState(false);
  const src = logoSrcMap[variant] || logoSrcMap.horizontal;
  const defaults = dimensionMap[variant] || dimensionMap.horizontal;

  if (hasError) {
    return (
      <div
        data-testid="brand-logo-fallback"
        className={cn(
          'inline-flex items-center gap-1.5 font-heading font-black tracking-wider uppercase select-none text-warm-white text-xl sm:text-2xl',
          className
        )}
        aria-label={alt}
      >
        <span>CRICKET</span>
        <span className="text-lime">27</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={defaults.width}
      height={defaults.height}
      className={cn(
        'inline-block object-contain select-none transition-transform duration-200',
        defaults.className,
        className
      )}
      loading="eager"
      onError={() => setHasError(true)}
    />
  );
};

BrandLogo.propTypes = {
  variant: PropTypes.oneOf([
    'horizontal',
    'compact',
    'symbol',
    'monochrome',
    'light',
    'dark',
  ]),
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default BrandLogo;
