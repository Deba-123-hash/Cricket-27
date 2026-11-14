import { cn } from '../../utils/helpers';

const colMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

const gapMap = {
  sm: 'gap-4 sm:gap-6',
  md: 'gap-6 sm:gap-8',
  lg: 'gap-8 sm:gap-10',
};

export const ResponsiveGrid = ({
  cols = 3,
  gap = 'md',
  children,
  className = '',
  ...props
}) => {
  return (
    <div
      className={cn(
        'grid w-full',
        colMap[cols] || colMap[3],
        gapMap[gap] || gapMap.md,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ResponsiveGrid;
