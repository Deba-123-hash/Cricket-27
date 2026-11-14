import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const ArticleNavigation = ({ prevArticle, nextArticle }) => {
  if (!prevArticle && !nextArticle) return null;

  return (
    <nav
      aria-label="Article Previous and Next Navigation"
      className="pt-10 mt-12 border-t border-slate/60 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
    >
      {/* Previous Article Link */}
      {prevArticle ? (
        <Link
          to={`/news/${prevArticle.slug}`}
          className="group p-5 rounded-brand-lg bg-slate-card/70 border border-slate hover:border-lime/40 transition-all flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
        >
          <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-text group-hover:text-lime transition-colors mb-2">
            <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform" />
            <span>Previous Story</span>
          </div>
          <h4 className="font-heading font-black text-base sm:text-lg uppercase text-warm-white group-hover:text-lime transition-colors line-clamp-2 leading-tight">
            {prevArticle.title}
          </h4>
        </Link>
      ) : (
        <div className="p-5 rounded-brand-lg bg-slate-card/20 border border-slate/40 opacity-40 select-none flex flex-col justify-center">
          <span className="text-xs font-mono uppercase tracking-wider text-muted-text">
            Beginning of Archive
          </span>
          <span className="text-xs text-muted-text mt-1">This is the latest story</span>
        </div>
      )}

      {/* Next Article Link */}
      {nextArticle ? (
        <Link
          to={`/news/${nextArticle.slug}`}
          className="group p-5 rounded-brand-lg bg-slate-card/70 border border-slate hover:border-lime/40 transition-all flex flex-col justify-between sm:text-right focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
        >
          <div className="flex items-center gap-1.5 sm:justify-end text-xs font-mono uppercase tracking-wider text-muted-text group-hover:text-lime transition-colors mb-2">
            <span>Next Story</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </div>
          <h4 className="font-heading font-black text-base sm:text-lg uppercase text-warm-white group-hover:text-lime transition-colors line-clamp-2 leading-tight">
            {nextArticle.title}
          </h4>
        </Link>
      ) : (
        <div className="p-5 rounded-brand-lg bg-slate-card/20 border border-slate/40 opacity-40 select-none flex flex-col justify-center sm:text-right">
          <span className="text-xs font-mono uppercase tracking-wider text-muted-text">
            End of Archive
          </span>
          <span className="text-xs text-muted-text mt-1">No earlier stories</span>
        </div>
      )}
    </nav>
  );
};

export default ArticleNavigation;
