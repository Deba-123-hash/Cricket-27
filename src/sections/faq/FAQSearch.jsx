import { memo } from 'react';
import { Search, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const FAQSearch = memo(({
  searchQuery,
  onSearchChange,
  onClearSearch,
  totalResults,
  totalItems,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 pl-4 sm:pl-5 flex items-center pointer-events-none text-muted-text">
          <Search className="w-5 h-5 text-lime/80" aria-hidden="true" />
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search your question here..."
          aria-label="Search FAQ questions and answers"
          className="w-full pl-12 sm:pl-14 pr-12 py-4 rounded-brand bg-slate-card/90 border border-slate text-warm-white placeholder:text-muted-text/70 text-base sm:text-lg font-sans focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 shadow-card transition-all duration-200"
        />

        {/* Clear Button */}
        {searchQuery && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            type="button"
            onClick={onClearSearch}
            aria-label="Clear search query"
            className="absolute inset-y-0 right-0 pr-4 sm:pr-5 flex items-center text-muted-text hover:text-warm-white transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-midnight/80 border border-slate flex items-center justify-center hover:border-lime">
              <X className="w-3.5 h-3.5" aria-hidden="true" />
            </div>
          </motion.button>
        )}
      </div>

      {/* Live Search Meta Info */}
      <div className="mt-3 flex items-center justify-between text-xs font-mono text-muted-text px-1">
        <span>
          {searchQuery ? (
            <>
              Found <strong className="text-lime">{totalResults}</strong> of {totalItems} questions
            </>
          ) : (
            <>
              Showing all <strong className="text-lime">{totalItems}</strong> questions
            </>
          )}
        </span>
        <span className="hidden sm:inline">Search matches questions, answers, and tags</span>
      </div>
    </div>
  );
});

FAQSearch.displayName = 'FAQSearch';

export default FAQSearch;
