import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { ROUTES } from '../../utils/constants';

export const ArticleBreadcrumb = ({ title }) => {
  return (
    <nav
      aria-label="Article Breadcrumb"
      className="flex items-center gap-2 text-xs font-mono text-muted-text flex-wrap mb-8"
    >
      <Link
        to={ROUTES.HOME}
        className="hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded"
      >
        Home
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-slate-light shrink-0" />
      <Link
        to={ROUTES.NEWS}
        className="hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded"
      >
        News
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-slate-light shrink-0" />
      <span className="text-warm-white font-medium truncate max-w-[260px] sm:max-w-md">
        {title}
      </span>
    </nav>
  );
};

export default ArticleBreadcrumb;
