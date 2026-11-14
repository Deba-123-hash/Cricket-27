import { motion } from 'framer-motion';
import { Calendar, Clock, User, Sparkles } from 'lucide-react';
import Badge from '../../components/common/Badge';
import { formatDate } from '../../utils/helpers';
import { fadeIn } from '../../utils/animations';

export const ArticleHeader = ({ article }) => {
  const { title, category, excerpt, date, readTime, author } = article;

  return (
    <motion.header
      variants={fadeIn}
      initial="initial"
      animate="animate"
      className="max-w-4xl mx-auto mb-10 text-left"
    >
      {/* Category and Concept Status */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <Badge variant="lime" size="sm" className="shadow-md">
          {category}
        </Badge>
        <span className="font-mono text-[11px] uppercase tracking-wider text-muted-text flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-lime" />
          CRICKET27 EDITORIAL
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-4xl lg:text-6xl font-heading font-black tracking-tight text-warm-white uppercase leading-[1.08] mb-6">
        {title}
      </h1>

      {/* Excerpt Lead */}
      <p className="text-base sm:text-xl text-warm-white/85 font-sans leading-relaxed mb-8">
        {excerpt}
      </p>

      {/* Metadata Bar */}
      <div className="pt-6 border-t border-slate/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-text">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 text-warm-white">
            <Calendar className="w-3.5 h-3.5 text-lime" />
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-muted-text" />
            <span>{readTime}</span>
          </div>
          {author && (
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-lime" />
              <span>
                <strong className="text-warm-white">{author.name}</strong>
                {author.role ? ` (${author.role})` : ''}
              </span>
            </div>
          )}
        </div>
        <span className="text-[11px] text-lime font-mono">BEYOND THE BOUNDARY</span>
      </div>
    </motion.header>
  );
};

export default ArticleHeader;
