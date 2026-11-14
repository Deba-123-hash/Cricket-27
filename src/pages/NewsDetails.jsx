import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import Container from '../components/common/Container';
import SEO from '../components/common/SEO';
import { NEWS_ARTICLES } from '../data/news';

// Article Components (Phase 13)
import ArticleBreadcrumb from '../sections/article/ArticleBreadcrumb';
import ArticleHeader from '../sections/article/ArticleHeader';
import ArticleHeroImage from '../sections/article/ArticleHeroImage';
import ArticleContentRenderer from '../sections/article/ArticleContentRenderer';
import ArticleSidebar from '../sections/article/ArticleSidebar';
import ArticleNavigation from '../sections/article/ArticleNavigation';
import ArticleNotFound from '../sections/article/ArticleNotFound';
import RelatedArticles from '../sections/article/RelatedArticles';
import NewsDetailsCTA from '../sections/article/NewsDetailsCTA';

export const NewsDetails = () => {
  const { slug } = useParams();

  // Find article by slug or ID
  const article = useMemo(() => {
    return NEWS_ARTICLES.find(
      (item) => item.slug === slug || item.id === slug
    );
  }, [slug]);

  // Set dynamic page title
  usePageTitle(
    article ? `${article.title} | CRICKET27 News` : 'Article Not Found — CRICKET27'
  );

  // Compute unique articles for previous / next navigation
  const uniqueArticles = useMemo(() => {
    const seen = new Set();
    return NEWS_ARTICLES.filter((item) => {
      if (seen.has(item.slug)) return false;
      seen.add(item.slug);
      return true;
    });
  }, []);

  // Compute previous and next articles
  const { prevArticle, nextArticle } = useMemo(() => {
    if (!article) return { prevArticle: null, nextArticle: null };
    const currentIndex = uniqueArticles.findIndex(
      (item) => item.slug === article.slug || item.id === article.id
    );

    if (currentIndex === -1) {
      return { prevArticle: null, nextArticle: null };
    }

    return {
      prevArticle: currentIndex > 0 ? uniqueArticles[currentIndex - 1] : null,
      nextArticle:
        currentIndex < uniqueArticles.length - 1
          ? uniqueArticles[currentIndex + 1]
          : null,
    };
  }, [article, uniqueArticles]);

  // Handle invalid slug state
  if (!article) {
    return (
      <PageTransition>
        <ArticleNotFound slug={slug} />
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <SEO
        title={`${article.title} | CRICKET27 News`}
        description={article.excerpt || article.summary}
        canonical={`/news/${article.slug || article.id}`}
        ogType="article"
        ogImage={article.image}
        article={{
          publishedTime: article.date,
          author: article.author?.name || 'CRICKET27 Editorial Team',
          tags: article.tags,
        }}
      />
      <div className="pt-28 pb-16 bg-midnight text-warm-white min-h-screen">
        <Container>
          {/* 1. Article Breadcrumb */}
          <ArticleBreadcrumb title={article.title} />

          {/* 2. Article Header */}
          <ArticleHeader article={article} />

          {/* 3. Featured Article Hero Image */}
          <ArticleHeroImage
            image={article.image}
            alt={article.alt}
            caption={article.imageCaption}
          />

          {/* 4 & 5. Article Content & Desktop Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-5xl mx-auto mb-20">
            {/* Main Reading Column (8 Columns) */}
            <article className="lg:col-span-8">
              <ArticleContentRenderer content={article.content} />

              {/* 8. Previous & Next Article Navigation */}
              <ArticleNavigation
                prevArticle={prevArticle}
                nextArticle={nextArticle}
              />
            </article>

            {/* Sticky Sidebar (4 Columns) */}
            <div className="lg:col-span-4 w-full">
              <ArticleSidebar article={article} />
            </div>
          </div>
        </Container>

        {/* 7. Related Articles Section */}
        <RelatedArticles currentArticle={article} />

        {/* 9. Final Call to Action */}
        <NewsDetailsCTA />
      </div>
    </PageTransition>
  );
};

export default NewsDetails;
