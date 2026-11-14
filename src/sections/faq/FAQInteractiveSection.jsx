import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/common/Container';
import FAQSearch from './FAQSearch';
import FAQCategoryFilter from './FAQCategoryFilter';
import FAQAccordion from './FAQAccordion';
import FAQEmptyState from './FAQEmptyState';
import { FAQ_ITEMS, FAQ_CATEGORIES, filterFAQItems } from '../../data/faq';
import { useDebounce } from '../../hooks/useDebounce';
import { useToast } from '../../hooks/useToast';

export const FAQInteractiveSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Questions');
  const debouncedSearch = useDebounce(searchQuery, 200);
  const { info } = useToast();

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = { 'All Questions': FAQ_ITEMS.length };

    FAQ_CATEGORIES.forEach((cat) => {
      if (cat !== 'All Questions') {
        counts[cat] = FAQ_ITEMS.filter((item) => item.category === cat).length;
      }
    });

    return counts;
  }, []);

  // Filter items based on active search and active category
  const filteredItems = useMemo(() => {
    return filterFAQItems(FAQ_ITEMS, debouncedSearch, activeCategory);
  }, [debouncedSearch, activeCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setActiveCategory('All Questions');
    info('FAQ filters and search reset');
  };

  return (
    <section
      id="faq-interactive-hub"
      aria-labelledby="faq-hub-heading"
      className="py-16 sm:py-24 bg-midnight-light/60 border-b border-slate/60 relative"
    >
      <h2 id="faq-hub-heading" className="sr-only">
        FAQ Search and Categories
      </h2>

      <Container size="lg" className="space-y-10 sm:space-y-12">
        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <FAQSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onClearSearch={() => setSearchQuery('')}
            totalResults={filteredItems.length}
            totalItems={FAQ_ITEMS.length}
          />
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <FAQCategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            categoryCounts={categoryCounts}
          />
        </motion.div>

        {/* Current Active Category Heading / Summary */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate/40">
          <div>
            <span className="text-xs font-mono text-lime uppercase tracking-widest block mb-0.5">
              Category View
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-black uppercase tracking-tight text-warm-white">
              {activeCategory}
            </h3>
          </div>

          <div className="text-xs font-mono text-muted-text">
            <span>
              Showing <strong className="text-warm-white">{filteredItems.length}</strong>{' '}
              {filteredItems.length === 1 ? 'question' : 'questions'}
            </span>
          </div>
        </div>

        {/* Questions Accordion OR Empty State */}
        <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key={`results-${activeCategory}-${searchQuery}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <FAQAccordion
                  items={filteredItems}
                />
              </motion.div>
            ) : (
              <motion.div
                key="empty-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <FAQEmptyState
                  searchQuery={searchQuery}
                  activeCategory={activeCategory}
                  onResetFilters={handleResetFilters}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default FAQInteractiveSection;
