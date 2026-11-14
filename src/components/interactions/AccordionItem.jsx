import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/helpers';

export const AccordionItem = ({
  id,
  title,
  subtitle,
  badge,
  index,
  isOpen,
  onToggle,
  children,
  icon: Icon,
  className = '',
  headerClassName = '',
  contentClassName = '',
}) => {
  const buttonId = `accordion-btn-${id || index}`;
  const panelId = `accordion-panel-${id || index}`;

  return (
    <div
      className={cn(
        'rounded-brand-lg border transition-all duration-200 overflow-hidden',
        isOpen
          ? 'bg-slate-card border-lime/60 shadow-card-elevated ring-1 ring-lime/20'
          : 'bg-slate-card/70 border-slate hover:border-lime/30 hover:bg-slate-card/90',
        className
      )}
    >
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={cn(
          'w-full text-left p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-midnight select-none group',
          headerClassName
        )}
      >
        <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
          {typeof index === 'number' && (
            <span
              className={cn(
                'w-7 h-7 sm:w-8 sm:h-8 rounded-brand flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 sm:mt-0 transition-colors',
                isOpen
                  ? 'bg-lime text-midnight font-black'
                  : 'bg-midnight text-muted-text border border-slate group-hover:border-lime/40 group-hover:text-lime'
              )}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
          )}

          {Icon && (
            <div className="w-8 h-8 rounded bg-midnight border border-slate flex items-center justify-center text-lime shrink-0">
              <Icon className="w-4 h-4" />
            </div>
          )}

          <div className="flex-1 min-w-0">
            {badge && (
              <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-midnight border border-slate/60 text-muted-text mb-1">
                {badge}
              </span>
            )}

            <h3 className="text-base sm:text-lg md:text-xl font-heading font-black uppercase text-warm-white tracking-wide group-hover:text-lime transition-colors leading-snug">
              {title}
            </h3>

            {subtitle && (
              <p className="text-xs text-muted-text font-sans mt-0.5 line-clamp-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <div
          className={cn(
            'w-8 h-8 rounded-full border flex items-center justify-center shrink-0 mt-1 sm:mt-0 transition-all duration-300',
            isOpen
              ? 'bg-lime text-midnight border-lime rotate-180'
              : 'bg-midnight text-muted-text border-slate group-hover:border-lime group-hover:text-warm-white'
          )}
        >
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.28, ease: 'easeOut' },
                opacity: { duration: 0.2, delay: 0.05 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.22, ease: 'easeIn' },
                opacity: { duration: 0.15 },
              },
            }}
            className="overflow-hidden"
          >
            <div className={cn('px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-warm-white/85 font-sans leading-relaxed border-t border-slate/40', contentClassName)}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;
