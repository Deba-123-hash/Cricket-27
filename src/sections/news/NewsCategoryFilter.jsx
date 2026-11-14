import { motion } from 'framer-motion';

export const NewsCategoryFilter = ({
  categories,
  activeCategory,
  onSelectCategory,
  itemCounts = {},
}) => {
  return (
    <div className="w-full">
      <div
        role="tablist"
        aria-label="Filter news by category"
        className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-2 sm:pb-0 scrollbar-none scroll-smooth"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count = itemCounts[category];

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(category)}
              className={`relative min-h-[44px] inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-heading font-black uppercase tracking-wider shrink-0 transition-all duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                isActive
                  ? 'bg-lime text-midnight border border-lime shadow-lime-glow/30'
                  : 'bg-slate-card/80 text-warm-white/80 border border-slate hover:border-lime/40 hover:text-warm-white hover:bg-slate-card'
              }`}
            >
              <span>{category}</span>
              {typeof count === 'number' && (
                <span
                  className={`ml-2 text-[11px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-midnight text-lime' : 'bg-midnight/70 text-muted-text'
                  }`}
                >
                  {count}
                </span>
              )}

              {/* Active Tab Indicator Pill Animation */}
              {isActive && (
                <motion.div
                  layoutId="activeNewsFilterPill"
                  className="absolute inset-0 rounded-full border border-lime pointer-events-none"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default NewsCategoryFilter;
