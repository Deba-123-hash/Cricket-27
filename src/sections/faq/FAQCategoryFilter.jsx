import { motion } from 'framer-motion';
import { FAQ_CATEGORIES } from '../../data/faq';

export const FAQCategoryFilter = ({
  activeCategory,
  onSelectCategory,
  categoryCounts = {},
}) => {
  return (
    <div className="w-full">
      {/* Scrollable Container for Mobile / Responsive */}
      <div
        role="tablist"
        aria-label="FAQ Categories"
        className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto pb-3 sm:pb-2 pt-1 no-scrollbar sm:flex-wrap sm:justify-center"
      >
        {FAQ_CATEGORIES.map((category) => {
          const isActive = activeCategory === category;
          const count = categoryCounts[category] ?? 0;

          return (
            <motion.button
              key={category}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => onSelectCategory(category)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`min-h-[44px] px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-brand text-xs sm:text-sm font-heading font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-2 border select-none shrink-0 ${
                isActive
                  ? 'bg-lime text-midnight border-lime shadow-lime-glow font-black'
                  : 'bg-slate-card/80 text-warm-white/80 border-slate hover:border-lime/40 hover:text-warm-white'
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold transition-colors ${
                  isActive
                    ? 'bg-midnight text-lime'
                    : 'bg-midnight text-muted-text border border-slate/60'
                }`}
              >
                {count}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default FAQCategoryFilter;
