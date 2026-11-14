import { ChevronLeft, ChevronRight } from 'lucide-react';

export const NewsPagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="News articles pagination"
      className="flex items-center justify-center gap-2 sm:gap-3 select-none"
    >
      {/* Previous Page Button */}
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="min-h-[44px] min-w-[44px] p-2 sm:px-3.5 sm:py-2 rounded-brand bg-slate-card border border-slate text-warm-white hover:border-lime hover:text-lime disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center justify-center gap-1 text-xs font-heading font-bold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
        aria-label="Go to previous page"
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="hidden sm:inline">Prev</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 sm:gap-2">
        {pages.map((pageNum) => {
          const isActive = currentPage === pageNum;

          return (
            <button
              key={pageNum}
              type="button"
              aria-current={isActive ? 'page' : undefined}
              onClick={() => onPageChange(pageNum)}
              className={`min-h-[44px] min-w-[44px] rounded-brand font-mono text-xs sm:text-sm font-bold flex items-center justify-center transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime ${
                isActive
                  ? 'bg-lime text-midnight border border-lime shadow-lime-glow/20'
                  : 'bg-slate-card text-warm-white/80 border border-slate hover:border-lime/40 hover:text-warm-white'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Page Button */}
      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="min-h-[44px] min-w-[44px] p-2 sm:px-3.5 sm:py-2 rounded-brand bg-slate-card border border-slate text-warm-white hover:border-lime hover:text-lime disabled:opacity-40 disabled:pointer-events-none transition-colors flex items-center justify-center gap-1 text-xs font-heading font-bold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
        aria-label="Go to next page"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
};

export default NewsPagination;
