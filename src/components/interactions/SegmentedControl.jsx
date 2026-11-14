import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

export const SegmentedControl = ({
  options = [],
  value,
  onChange,
  className = '',
  name = 'segmented-control',
}) => {
  return (
    <div
      role="radiogroup"
      aria-label={name}
      className={cn(
        'inline-flex p-1 rounded-brand bg-midnight border border-slate gap-1 select-none',
        className
      )}
    >
      {options.map((option) => {
        const optionVal = option.value ?? option.label;
        const isSelected = value === optionVal;
        const Icon = option.icon;

        return (
          <button
            key={optionVal}
            type="button"
            role="radio"
            aria-checked={isSelected}
            onClick={() => onChange?.(optionVal)}
            className={cn(
              'relative px-3.5 py-1.5 min-h-[40px] sm:min-h-[44px] rounded text-xs font-heading font-bold uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime z-10',
              isSelected
                ? 'text-midnight font-black'
                : 'text-muted-text hover:text-warm-white'
            )}
          >
            {isSelected && (
              <motion.div
                layoutId={`segment-${name}`}
                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                className="absolute inset-0 bg-lime rounded shadow-lime-glow z-[-1]"
              />
            )}

            {Icon && <Icon className={cn('w-3.5 h-3.5', isSelected ? 'text-midnight' : 'text-lime')} />}
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedControl;
