import { cn } from '../../utils/helpers';

const bgMap = {
  midnight: 'bg-midnight',
  'midnight-dark': 'bg-midnight-dark',
  'midnight-light': 'bg-midnight-light/60',
  slate: 'bg-slate-card/60',
  pattern: 'bg-midnight bg-pitch-pattern bg-[length:32px_32px]',
};

const paddingMap = {
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-24',
  lg: 'py-20 sm:py-32',
  xl: 'py-24 sm:py-40',
};

export const SectionWrapper = ({
  children,
  bg = 'midnight',
  padding = 'md',
  bordered = false,
  id,
  className = '',
  ...props
}) => {
  return (
    <section
      id={id}
      className={cn(
        'relative w-full overflow-hidden',
        bgMap[bg] || bgMap.midnight,
        paddingMap[padding] || paddingMap.md,
        bordered && 'border-y border-slate/60',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
