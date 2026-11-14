import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import NewsCard from '../../components/cards/NewsCard';
import { NEWS_ARTICLES } from '../../data/news';

export const CommunityContentPreview = () => {
  // Select up to 3 community and brand culture articles
  const communityArticles = NEWS_ARTICLES.filter(
    (article) => article.category === 'Community' || article.id === 'vision-behind-cricket27'
  ).slice(0, 3);

  return (
    <section
      id="community-stories"
      aria-labelledby="community-stories-heading"
      className="relative py-24 sm:py-32 bg-slate-bg border-t border-slate overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral/5 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <Badge variant="coral">EDITORIAL HIGHLIGHTS</Badge>
              <span className="text-xs font-mono text-muted-text uppercase tracking-widest flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-coral" />
                COMMUNITY VOICES
              </span>
            </motion.div>

            <motion.h2
              id="community-stories-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-warm-white mb-4"
            >
              STORIES FROM THE WORLD OF CRICKET.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-text font-sans leading-relaxed"
            >
              Explore community stories, cultural perspectives and editorial dispatches celebrating the passion, drama and shared love of the sport.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0"
          >
            <Link to="/news">
              <Button variant="outline" size="md" className="group">
                <span>EXPLORE ALL NEWS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
            >
              <NewsCard article={article} />
            </motion.div>
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link to="/news" className="w-full block">
            <Button variant="outline" size="md" className="w-full justify-center group">
              <span>EXPLORE ALL NEWS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CommunityContentPreview;
