import { cn } from '../../utils/helpers';

const sizeMap = {
  display: 'text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-wider uppercase',
  h1: 'text-3xl sm:text-5xl md:text-6xl font-heading font-black tracking-wide uppercase',
  h2: 'text-2xl sm:text-4xl font-heading font-bold tracking-wide uppercase',
  h3: 'text-xl sm:text-2xl font-heading font-bold uppercase',
  h4: 'text-lg sm:text-xl font-heading font-semibold uppercase',
  h5: 'text-base sm:text-lg font-heading font-semibold uppercase',
  h6: 'text-sm font-heading font-semibold uppercase tracking-widest',
};

export const Heading = ({
  as: Component = 'h2',
  size,
  children,
  highlight = false,
  className = '',
  ...props
}) => {
  const chosenSize = size || (Component.startsWith('h') ? Component : 'h2');

  return (
    <Component
      className={cn(
        sizeMap[chosenSize] || sizeMap.h2,
        highlight ? 'text-gradient-lime' : 'text-warm-white',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Heading;
