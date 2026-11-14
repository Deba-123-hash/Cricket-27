import { motion } from 'framer-motion';
import { ArrowRight, Newspaper } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import NewsCard from '../../components/cards/NewsCard';
import { NEWS_ARTICLES } from '../../data/news';

export const LatestNewsSection = () => {
  return (
    <section id="latest-news-preview" className="py-24 sm:py-32 bg-midnight relative overflow-hidden border-t border-slate/40">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-slate/10 rounded-full blur-[180px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="lime" size="sm">
                WHAT&apos;S HAPPENING
              </Badge>
              <span className="h-px w-8 bg-slate-light" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
                STUDIO DISPATCHES
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
              LATEST FROM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-hover">
                CRICKET27.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-text leading-relaxed">
              Stay connected with the latest updates, announcements and stories from the CRICKET27 world.
            </p>
          </div>

          <Button
            to={ROUTES.NEWS}
            variant="outline"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            className="self-start md:self-end shrink-0 font-heading uppercase tracking-wider"
          >
            VIEW ALL NEWS
          </Button>
        </div>

        {/* 3 News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.slice(0, 3).map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <NewsCard article={article} />
            </motion.div>
          ))}
        </div>

        {/* Editorial Disclaimer Bar */}
        <div className="mt-12 p-4 rounded-brand bg-slate-card border border-slate/60 flex items-center justify-between text-xs text-muted-text font-mono">
          <div className="flex items-center gap-2">
            <Newspaper className="w-4 h-4 text-lime" />
            <span>Official editorial dispatches &bull; Pre-release project concept previews</span>
          </div>
          <span className="text-lime font-bold">ALL ARTICLES UP TO DATE</span>
        </div>
      </Container>
    </section>
  );
};

export default LatestNewsSection;
