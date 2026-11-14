import { motion } from 'framer-motion';
import { SearchX, RotateCcw } from 'lucide-react';
import Button from '../../components/common/Button';

export const FAQEmptyState = ({
  searchQuery,
  activeCategory,
  onResetFilters,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className="p-10 sm:p-14 rounded-brand-lg bg-slate-card/80 border border-slate text-center flex flex-col items-center justify-center max-w-lg mx-auto shadow-card"
    >
      <div className="w-16 h-16 rounded-full bg-midnight border border-slate flex items-center justify-center text-muted-text mb-5 shadow-inner">
        <SearchX className="w-8 h-8 text-coral/80" aria-hidden="true" />
      </div>

      <h3 className="text-2xl font-heading font-black uppercase text-warm-white tracking-wide mb-2">
        NO QUESTIONS FOUND.
      </h3>

      <p className="text-sm sm:text-base text-muted-text leading-relaxed max-w-sm mx-auto mb-6">
        {searchQuery ? (
          <>
            No questions matched &ldquo;<span className="text-lime">{searchQuery}</span>&rdquo; in{' '}
            <span className="text-warm-white">{activeCategory}</span>.
          </>
        ) : (
          <>No questions are currently available in <span className="text-warm-white">{activeCategory}</span>.</>
        )}
        <br />
        Try another search term or select a different category.
      </p>

      <Button
        onClick={onResetFilters}
        variant="primary"
        size="md"
        className="gap-2 group shadow-lime-glow"
      >
        <RotateCcw className="w-4 h-4 group-hover:-rotate-90 transition-transform duration-300" />
        <span>CLEAR FILTERS</span>
      </Button>
    </motion.div>
  );
};

export default FAQEmptyState;
