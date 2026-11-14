import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import { formatDate } from '../../utils/helpers';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const FeaturedNews = ({ article }) => {
  if (!article) return null;

  return (
    <section className="relative py-16 lg:py-20 bg-midnight-light border-b border-slate/60 overflow-hidden">
      {/* Decorative Ambient Glow */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-lime/5 blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card/90 shadow-2xl group hover:border-lime/50 transition-all duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Visual Column */}
            <motion.div
              variants={fadeIn}
              className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] overflow-hidden bg-midnight"
            >
              <CricketImage
                src={article.image}
                fallbackSrc="/assets/news/news-devlog-thumb.svg"
                alt={article.alt || article.title}
                aspectRatio="16/10"
                title={article.title}
                badge={article.category}
                icon="newspaper"
                className="w-full h-full min-h-[300px] sm:min-h-[420px]"
                imageClassName="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-midnight/90 via-midnight/40 to-transparent pointer-events-none" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <Badge variant="lime" size="sm" className="shadow-lg">
                  FEATURED STORY
                </Badge>
                <span className="font-mono text-[11px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-midnight/90 text-warm-white border border-slate/60 backdrop-blur-sm">
                  {article.category}
                </span>
              </div>
            </motion.div>

            {/* Editorial Content Column */}
            <motion.div
              variants={fadeIn}
              className="lg:col-span-5 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-midnight/95"
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center gap-4 text-xs font-mono text-muted-text mb-4">
                  <span className="inline-flex items-center gap-1.5 text-warm-white">
                    <Calendar className="w-3.5 h-3.5 text-lime" />
                    {formatDate(article.date)}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-muted-text" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-4xl font-heading font-black tracking-tight text-warm-white uppercase mb-4 leading-tight group-hover:text-lime transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-warm-white/80 font-sans leading-relaxed text-base sm:text-lg mb-6">
                  {article.excerpt}
                </p>

                {/* Author Info */}
                {article.author && (
                  <div className="pt-4 border-t border-slate/60 text-xs text-muted-text font-mono">
                    <span className="text-warm-white font-semibold">{article.author.name}</span> &bull; {article.author.role}
                  </div>
                )}
              </div>

              {/* Action Link Button */}
              <div className="mt-8 pt-6 border-t border-slate/60 flex items-center justify-between">
                <Link
                  to={`/news/${article.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-brand bg-lime text-midnight font-heading font-black text-xs uppercase tracking-wider hover:bg-lime-light hover:shadow-lime-glow transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  <span>READ STORY</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-1 text-[11px] font-mono text-muted-text">
                  <Sparkles className="w-3 h-3 text-lime" />
                  <span>Concept Editorial</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedNews;
