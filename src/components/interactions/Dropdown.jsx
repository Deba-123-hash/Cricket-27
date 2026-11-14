import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { cn } from '../../utils/helpers';

export const Dropdown = ({
  trigger,
  triggerLabel = 'Select Option',
  items = [],
  value,
  onChange,
  align = 'left',
  className = '',
  menuClassName = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useClickOutside(containerRef, () => setIsOpen(false), isOpen);
  useEscapeKey(() => setIsOpen(false), isOpen);

  const handleSelect = (item) => {
    if (item.disabled) return;
    onChange?.(item.value ?? item.label);
    item.onClick?.();
    setIsOpen(false);
  };

  const selectedItem = items.find((item) => (item.value ?? item.label) === value);
  const displayLabel = selectedItem ? selectedItem.label : triggerLabel;

  return (
    <div ref={containerRef} className={cn('relative inline-block text-left', className)}>
      {trigger ? (
        <div onClick={() => setIsOpen((prev) => !prev)}>{trigger(isOpen)}</div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className="inline-flex min-h-[44px] items-center justify-between gap-2.5 px-4 py-2.5 rounded-brand bg-slate-card/90 border border-slate text-warm-white hover:border-lime/50 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime shadow-card select-none"
        >
          <span>{displayLabel}</span>
          <ChevronDown
            className={cn('w-4 h-4 text-muted-text transition-transform duration-200', isOpen && 'rotate-180 text-lime')}
            aria-hidden="true"
          />
        </button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            role="listbox"
            className={cn(
              'absolute z-50 mt-1.5 w-56 rounded-brand bg-slate-card/95 backdrop-blur-md border border-slate shadow-card-depth p-1.5 focus:outline-none ring-1 ring-lime/20',
              align === 'right' ? 'right-0' : 'left-0',
              menuClassName
            )}
          >
            <div className="py-0.5 space-y-0.5">
              {items.map((item, index) => {
                const itemVal = item.value ?? item.label;
                const isSelected = value !== undefined && itemVal === value;
                const Icon = item.icon;

                return (
                  <button
                    key={itemVal || index}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    disabled={item.disabled}
                    onClick={() => handleSelect(item)}
                    className={cn(
                      'w-full min-h-[38px] text-left px-3 py-2 text-xs font-heading uppercase tracking-wider rounded transition-all flex items-center justify-between group select-none',
                      isSelected
                        ? 'bg-midnight text-lime font-bold border-l-2 border-lime'
                        : item.disabled
                        ? 'text-muted-text/50 cursor-not-allowed'
                        : 'text-warm-white hover:text-lime hover:bg-midnight/80'
                    )}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {Icon && <Icon className="w-3.5 h-3.5 text-lime shrink-0" />}
                      <span className="truncate">{item.label}</span>
                    </div>

                    {isSelected ? (
                      <Check className="w-3.5 h-3.5 text-lime shrink-0" />
                    ) : item.badge ? (
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-midnight text-muted-text border border-slate/60">
                        {item.badge}
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
