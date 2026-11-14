import { cn } from '../../utils/helpers';

export const Divider = ({
  orientation = 'horizontal',
  variant = 'subtle',
  label,
  className = '',
}) => {
  const variantMap = {
    subtle: 'border-slate/60',
    strong: 'border-slate',
    lime: 'border-lime/40',
  };

  if (orientation === 'vertical') {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          'inline-block h-full min-h-[1.5rem] w-px self-stretch border-r',
          variantMap[variant] || variantMap.subtle,
          className
        )}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn('relative my-8 flex items-center', className)}
      >
        <div className={cn('flex-grow border-t', variantMap[variant] || variantMap.subtle)} />
        <span className="mx-4 text-xs font-heading uppercase tracking-widest text-muted-text px-3 py-1 bg-midnight border border-slate rounded">
          {label}
        </span>
        <div className={cn('flex-grow border-t', variantMap[variant] || variantMap.subtle)} />
      </div>
    );
  }

  return (
    <hr
      role="separator"
      aria-orientation="horizontal"
      className={cn('my-8 border-t', variantMap[variant] || variantMap.subtle, className)}
    />
  );
};

export default Divider;
