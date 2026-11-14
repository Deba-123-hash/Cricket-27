import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import NewsCard from '../../components/cards/NewsCard';
import { NEWS_ARTICLES } from '../../data/news';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const RelatedArticles = ({ currentArticle }) => {
  if (!currentArticle) return null;

  // Filter out current article and avoid duplicate slugs
  const seen = new Set([currentArticle.slug, currentArticle.id]);
  const candidates = NEWS_ARTICLES.filter((item) => {
    if (seen.has(item.slug)) return false;
    seen.add(item.slug);
    return true;
  });

  // Prefer matching category first, then remaining
  const sameCategory = candidates.filter(
    (item) => item.category?.toLowerCase() === currentArticle.category?.toLowerCase()
  );
  const otherCategory = candidates.filter(
    (item) => item.category?.toLowerCase() !== currentArticle.category?.toLowerCase()
  );

  const related = [...sameCategory, ...otherCategory].slice(0, 3);

  if (related.length === 0) return null;

  return (
    <section className="relative py-20 lg:py-28 bg-midnight-light border-t border-slate/60 overflow-hidden">
      {/* Decorative Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-lime/5 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <Badge variant="lime" size="sm" className="mb-3">
              EDITORIAL RECOMMENDATIONS
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase">
              MORE STORIES <span className="text-lime">TO EXPLORE.</span>
            </h2>
          </div>
          <span className="text-xs font-mono text-muted-text">
            Related to {currentArticle.category}
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {related.map((article) => (
            <motion.div key={article.id} variants={fadeIn}>
              <NewsCard article={article} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default RelatedArticles;
