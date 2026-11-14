import { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { formatDate } from '../../utils/helpers';
import Badge from '../common/Badge';
import CricketImage from '../common/CricketImage';

export const NewsCard = memo(
  forwardRef(({ article }, ref) => {
    const { id, slug, title, date, category, readTime, excerpt, image, featured } = article;
    const targetRoute = `/news/${slug || id}`;
    const isSvg = typeof image === 'string' && image.endsWith('.svg');

    return (
      <motion.article
        ref={ref}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className={`rounded-brand-lg overflow-hidden bg-slate-card/90 border transition-all duration-300 flex flex-col justify-between group shadow-card ${
          featured
            ? 'border-lime/50 ring-1 ring-lime/20'
            : 'border-slate hover:border-lime/40 hover:shadow-card-elevated'
        }`}
      >
        <div>
          {/* Card Thumbnail */}
          <div className="relative aspect-video w-full bg-midnight overflow-hidden border-b border-slate">
            <CricketImage
              src={image || '/assets/news/news-devlog-thumb.svg'}
              fallbackSrc="/assets/news/news-devlog-thumb.svg"
              alt={title}
              title={title}
              icon="newspaper"
              aspectRatio="16/9"
              objectFit={isSvg ? 'contain' : 'cover'}
              className="w-full h-full"
              imageClassName={`w-full h-full transform group-hover:scale-105 transition-transform duration-500 ${
                isSvg ? 'object-contain p-6' : 'object-cover'
              }`}
              loading="lazy"
              decoding="async"
              width="640"
              height="360"
            />
            {/* Subtle Gradient Overlay for Photography */}
            {!isSvg && (
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />
            )}
            <div className="absolute top-3 left-3 z-10">
              <Badge variant={featured ? 'coral' : 'lime'} size="sm" className="shadow-md">
                {category}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center gap-4 text-xs text-muted-text mb-3 font-mono">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-lime" />
                {formatDate(date)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-muted-text" />
                {readTime}
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-heading font-black uppercase text-warm-white mb-2.5 line-clamp-2 group-hover:text-lime transition-colors leading-tight">
              {title}
            </h3>

            <p className="text-sm text-warm-white/75 font-sans line-clamp-3 leading-relaxed">
              {excerpt}
            </p>
          </div>
        </div>

        {/* Read More Link */}
        <div className="p-6 pt-0">
          <Link
            to={targetRoute}
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-lime hover:text-warm-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded"
          >
            <span>Read Full Story</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </motion.article>
    );
  })
);

NewsCard.displayName = 'NewsCard';

NewsCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    category: PropTypes.string,
    readTime: PropTypes.string,
    excerpt: PropTypes.string,
    image: PropTypes.string,
    featured: PropTypes.bool,
  }).isRequired,
};

export default NewsCard;
