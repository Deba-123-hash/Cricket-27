import { memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Tag } from 'lucide-react';
import Badge from '../../components/common/Badge';

export const FAQItem = memo(({
  item,
  index,
  isOpen,
  onToggle,
}) => {
  const { id, question, answer, category } = item;
  const buttonId = `faq-btn-${id}`;
  const panelId = `faq-panel-${id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.3) }}
      className={`rounded-brand-lg border transition-all duration-200 overflow-hidden ${
        isOpen
          ? 'bg-slate-card border-lime/60 shadow-card-elevated ring-1 ring-lime/20'
          : 'bg-slate-card/70 border-slate hover:border-lime/30 hover:bg-slate-card/90'
      }`}
    >
      {/* Question Accordion Button */}
      <button
        type="button"
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className="w-full text-left p-4 sm:p-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-midnight select-none group min-h-[48px]"
      >
        <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
          {/* Index Counter */}
          <span
            className={`w-7 h-7 sm:w-8 sm:h-8 rounded-brand flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 sm:mt-0 transition-colors ${
              isOpen
                ? 'bg-lime text-midnight'
                : 'bg-midnight text-muted-text border border-slate group-hover:border-lime/40 group-hover:text-lime'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="flex-1 min-w-0">
            {/* Category Subtext Indicator */}
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="slate" size="sm" className="text-[10px] uppercase font-mono py-0 px-2 text-muted-text/90">
                {category}
              </Badge>
            </div>

            {/* Question Text */}
            <h3 className="text-base sm:text-lg md:text-xl font-heading font-black uppercase text-warm-white tracking-wide group-hover:text-lime transition-colors leading-snug">
              {question}
            </h3>
          </div>
        </div>

        {/* Animated Chevron Indicator */}
        <div
          className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 mt-1 sm:mt-0 transition-all duration-300 ${
            isOpen
              ? 'bg-lime text-midnight border-lime rotate-180'
              : 'bg-midnight text-muted-text border-slate group-hover:border-lime group-hover:text-warm-white'
          }`}
        >
          <ChevronDown className="w-4 h-4" aria-hidden="true" />
        </div>
      </button>

      {/* Answer Panel with Animated Height */}
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
            <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-warm-white/85 font-sans leading-relaxed border-t border-slate/40">
              <p className="max-w-3xl">{answer}</p>

              {/* Tags / Keywords in Footer of Answer */}
              {Array.isArray(item.keywords) && item.keywords.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate/30 flex flex-wrap items-center gap-2 text-xs font-mono text-muted-text">
                  <Tag className="w-3 h-3 text-lime" />
                  <span className="text-[11px] text-muted-text/80">Related topics:</span>
                  {item.keywords.slice(0, 4).map((kw) => (
                    <span
                      key={kw}
                      className="px-2 py-0.5 rounded bg-midnight/80 border border-slate/50 text-[10px] text-warm-white/70"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

FAQItem.displayName = 'FAQItem';

export default FAQItem;
