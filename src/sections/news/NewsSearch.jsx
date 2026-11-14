import { Search, X } from 'lucide-react';

export const NewsSearch = ({ searchQuery, onSearchChange, onClearSearch }) => {
  return (
    <div className="relative w-full">
      <label htmlFor="news-search-input" className="sr-only">
        Search news stories, updates and announcements
      </label>
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-4 text-muted-text pointer-events-none flex items-center justify-center">
          <Search className="w-4 h-4 text-lime" aria-hidden="true" />
        </div>

        {/* Input Field */}
        <input
          id="news-search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search stories, updates and announcements..."
          className="w-full pl-11 pr-12 py-3 sm:py-3.5 bg-slate-card/90 border border-slate rounded-full text-warm-white text-base sm:text-sm placeholder:text-muted-text focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-all duration-200"
        />

        {/* Clear Button (Visible when text exists) */}
        {searchQuery && (
          <button
            type="button"
            onClick={onClearSearch}
            className="absolute right-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-text hover:text-warm-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime"
            aria-label="Clear news search query"
          >
            <div className="w-6 h-6 rounded-full bg-slate flex items-center justify-center">
              <X className="w-3.5 h-3.5" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsSearch;
