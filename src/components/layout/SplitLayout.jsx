import { cn } from '../../utils/helpers';

const ratioMap = {
  '50/50': {
    left: 'lg:col-span-6',
    right: 'lg:col-span-6',
  },
  '60/40': {
    left: 'lg:col-span-7',
    right: 'lg:col-span-5',
  },
  '40/60': {
    left: 'lg:col-span-5',
    right: 'lg:col-span-7',
  },
};

const gapMap = {
  sm: 'gap-6 sm:gap-8',
  md: 'gap-8 sm:gap-12',
  lg: 'gap-12 sm:gap-16',
  xl: 'gap-16 sm:gap-20',
};

const alignMap = {
  center: 'items-center',
  start: 'items-start',
  end: 'items-end',
};

export const SplitLayout = ({
  left,
  right,
  ratio = '50/50',
  gap = 'lg',
  align = 'center',
  reversed = false,
  className = '',
}) => {
  const currentRatio = ratioMap[ratio] || ratioMap['50/50'];

  return (
    <div
      className={cn(
        'grid grid-cols-1 lg:grid-cols-12',
        gapMap[gap] || gapMap.lg,
        alignMap[align] || alignMap.center,
        className
      )}
    >
      <div className={cn(reversed ? 'lg:order-2' : 'lg:order-1', currentRatio.left)}>
        {left}
      </div>
      <div className={cn(reversed ? 'lg:order-1' : 'lg:order-2', currentRatio.right)}>
        {right}
      </div>
    </div>
  );
};

export default SplitLayout;
