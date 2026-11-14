import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Bookmark } from 'lucide-react';
import Badge from '../../components/common/Badge';
import ArticleShare from './ArticleShare';
import { formatDate } from '../../utils/helpers';
import { ROUTES } from '../../utils/constants';

export const ArticleSidebar = ({ article }) => {
  const { title, category, date, readTime, author, excerpt } = article;

  return (
    <aside
      aria-label="Article Details and Share Options"
      className="space-y-6 lg:sticky lg:top-28"
    >
      {/* Article Metadata Card */}
      <div className="p-6 rounded-brand-lg bg-slate-card/80 border border-slate shadow-card">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate/60">
          <span className="text-xs font-heading font-black uppercase text-lime tracking-wider flex items-center gap-1.5">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Story Intel</span>
          </span>
          <Badge variant="lime" size="sm">
            {category}
          </Badge>
        </div>

        <div className="space-y-3.5 text-xs font-mono">
          <div className="flex items-center justify-between text-muted-text">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-lime" />
              Published:
            </span>
            <span className="text-warm-white font-medium">{formatDate(date)}</span>
          </div>

          <div className="flex items-center justify-between text-muted-text">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-lime" />
              Reading Time:
            </span>
            <span className="text-warm-white font-medium">{readTime}</span>
          </div>

          {author && (
            <div className="pt-3 border-t border-slate/50 flex flex-col gap-1">
              <span className="text-muted-text flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-lime" />
                Authored by:
              </span>
              <span className="text-warm-white font-medium text-xs pl-5">
                {author.name}
              </span>
              {author.role && (
                <span className="text-muted-text text-[11px] pl-5">{author.role}</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Share Component */}
      <ArticleShare title={title} excerpt={excerpt} />

      {/* Back to News Action */}
      <div className="p-4 rounded-brand bg-midnight border border-slate text-center">
        <Link
          to={ROUTES.NEWS}
          className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-lime hover:text-warm-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to News Hub</span>
        </Link>
      </div>
    </aside>
  );
};

export default ArticleSidebar;
