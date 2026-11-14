import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SearchX, RotateCcw } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import NewsCard from '../../components/cards/NewsCard';
import NewsCategoryFilter from './NewsCategoryFilter';
import NewsSearch from './NewsSearch';
import NewsPagination from './NewsPagination';
import { NEWS_CATEGORIES, NEWS_ARTICLES } from '../../data/news';
import { useDebounce } from '../../hooks/useDebounce';
import { useToast } from '../../hooks/useToast';

const ITEMS_PER_PAGE = 6;

export const NewsGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All News');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedSearch = useDebounce(searchQuery, 250);
  const { info } = useToast();

  // Filter out any duplicate backwards compatibility aliases from main grid listing
  const primaryArticles = useMemo(() => {
    // Only unique IDs
    const seen = new Set();
    return NEWS_ARTICLES.filter((article) => {
      if (seen.has(article.slug)) return false;
      seen.add(article.slug);
      return true;
    });
  }, []);

  // Calculate article counts per category
  const itemCounts = useMemo(() => {
    const counts = {
      'All News': primaryArticles.length,
    };
    NEWS_CATEGORIES.forEach((cat) => {
      if (cat !== 'All News') {
        counts[cat] = primaryArticles.filter(
          (a) => a.category?.toLowerCase() === cat.toLowerCase()
        ).length;
      }
    });
    return counts;
  }, [primaryArticles]);

  // Reset to page 1 whenever category or search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, debouncedSearch]);

  // Filter articles based on active category and search query
  const filteredArticles = useMemo(() => {
    return primaryArticles.filter((article) => {
      // Category match
      const matchesCategory =
        activeCategory === 'All News' ||
        article.category?.toLowerCase() === activeCategory.toLowerCase();

      // Search match
      const q = debouncedSearch.trim().toLowerCase();
      const matchesSearch =
        !q ||
        article.title?.toLowerCase().includes(q) ||
        article.category?.toLowerCase().includes(q) ||
        article.excerpt?.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [primaryArticles, activeCategory, debouncedSearch]);

  // Pagination slicing
  const totalPages = Math.ceil(filteredArticles.length / ITEMS_PER_PAGE);
  const displayedArticles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredArticles.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredArticles, currentPage]);

  const handleResetFilters = () => {
    setActiveCategory('All News');
    setSearchQuery('');
    setCurrentPage(1);
    info('News search and filters reset');
  };

  return (
    <section id="news-grid" className="relative py-20 lg:py-28 bg-midnight overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-lime/5 blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Badge variant="lime" size="sm" className="mb-3">
              EDITORIAL LISTINGS
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase">
              LATEST <span className="text-lime">DISPATCHES.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-text">
            <Filter className="w-4 h-4 text-lime" />
            <span>Showing {filteredArticles.length} {filteredArticles.length === 1 ? 'story' : 'stories'}</span>
          </div>
        </div>

        {/* Filter and Search Controls Bar */}
        <div className="space-y-6 mb-12">
          {/* Search Bar */}
          <div className="max-w-xl">
            <NewsSearch
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onClearSearch={() => setSearchQuery('')}
            />
          </div>

          {/* Category Filter Tabs */}
          <div>
            <NewsCategoryFilter
              categories={NEWS_CATEGORIES}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              itemCounts={itemCounts}
            />
          </div>
        </div>

        {/* News Cards Grid */}
        {displayedArticles.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
          >
            <AnimatePresence mode="popLayout">
              {displayedArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty Search & Filter State */
          <div className="text-center py-20 px-6 rounded-brand-lg border border-slate bg-slate-card/50 max-w-2xl mx-auto my-12">
            <div className="w-14 h-14 rounded-full bg-midnight border border-slate flex items-center justify-center text-lime mx-auto mb-4">
              <SearchX className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-black uppercase text-warm-white mb-2">
              No matching stories found
            </h3>
            <p className="text-sm text-muted-text font-sans mb-6">
              We couldn&apos;t find any stories matching &quot;{searchQuery}&quot; in {activeCategory}. Try adjusting your keywords or category filter.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-brand bg-slate border border-slate-light text-warm-white hover:text-lime hover:border-lime transition-colors text-xs font-heading font-bold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Search &amp; Filters</span>
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        <NewsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Container>
    </section>
  );
};

export default NewsGrid;
