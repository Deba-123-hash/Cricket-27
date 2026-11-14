import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';
import { NEWS_ARTICLES } from '../data/news';

// News Page Sections (Phase 12)
import NewsHero from '../sections/news/NewsHero';
import FeaturedNews from '../sections/news/FeaturedNews';
import NewsGrid from '../sections/news/NewsGrid';
import NewsletterCTA from '../sections/news/NewsletterCTA';
import NewsPageCTA from '../sections/news/NewsPageCTA';

export const News = () => {
  usePageTitle('CRICKET27 News | Latest Stories and Brand Updates');

  const featuredArticle =
    NEWS_ARTICLES.find((article) => article.featured) || NEWS_ARTICLES[0];

  return (
    <PageTransition>
      <SEO
        title="News & Dev Diaries | Studio Updates & Dispatches | CRICKET27"
        description="Stay informed with CRICKET27 developer diaries, game design breakdowns, community spotlights, and studio announcements straight from the team."
        canonical="/news"
        ogImage="/assets/news/vision-behind-cricket27.webp"
      />

      {/* 1. News Hero Section (Breadcrumb, headline, stats) */}
      <NewsHero />

      {/* 2. Featured News Story (Prominent split layout) */}
      <FeaturedNews article={featuredArticle} />

      {/* 3, 4, 5, 6. Category Filters, Search, News Grid & Pagination */}
      <NewsGrid />

      {/* 7. Newsletter / Updates CTA (Transparent preview notice) */}
      <NewsletterCTA />

      {/* 8. Final Call to Action */}
      <NewsPageCTA />
    </PageTransition>
  );
};

export default News;
