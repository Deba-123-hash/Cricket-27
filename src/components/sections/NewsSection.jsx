import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import NewsCard from '../cards/NewsCard';
import { NEWS_ARTICLES } from '../../data/news';
import Button from '../common/Button';
import { ROUTES } from '../../utils/constants';

export const NewsSection = ({ limit }) => {
  const articles = limit ? NEWS_ARTICLES.slice(0, limit) : NEWS_ARTICLES;

  return (
    <section className="py-20 relative">
      <Container size="xl">
        <SectionHeading
          eyebrow="Announcements & Dispatches"
          title="Latest From The"
          highlightText="CRICKET27 Studio"
          description="Follow our development diaries, community milestones, and major brand announcements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Button to={ROUTES.NEWS} variant="outline" size="md">
              Read All News & Devlogs &rarr;
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default NewsSection;
