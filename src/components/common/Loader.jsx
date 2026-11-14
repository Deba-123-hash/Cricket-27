import PropTypes from 'prop-types';
import { cn } from '../../utils/helpers';

export const Loader = ({ size = 'md', text = 'Loading CRICKET27...', className = '' }) => {
  const sizeMap = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-[3px]',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={cn('flex flex-col items-center justify-center p-8 gap-4', className)}
    >
      <div className="relative">
        <div
          className={cn(
            'rounded-full border-slate border-t-lime animate-spin',
            sizeMap[size] || sizeMap.md
          )}
        />
        <div className="absolute inset-0 rounded-full border border-lime/20 blur-[2px]" />
      </div>
      {text && (
        <span className="text-xs uppercase font-heading font-bold tracking-widest text-muted-text animate-pulse">
          {text}
        </span>
      )}
      <span className="sr-only">Loading content</span>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  text: PropTypes.string,
  className: PropTypes.string,
};

export default Loader;
