import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';
import {
  FAQHero,
  FAQInteractiveSection,
  FAQContactCTA,
} from '../sections/faq';

/**
 * CRICKET27 — Official FAQ Page & Interactive Help Center
 * Phase 15 Master Experience
 * Route: /faq
 */
export const FAQ = () => {
  usePageTitle('FAQ — Help Center & Brand Answers | CRICKET27');

  return (
    <PageTransition>
      <SEO
        title="Frequently Asked Questions | Help & Information Center | CRICKET27"
        description="Find answers to frequently asked questions about CRICKET27 — brand origins, 2D game concept, visual media, player community, and project roadmap."
        canonical="/faq"
        ogImage="/assets/hero/cricket27-home-hero.webp"
      />
      <div className="relative w-full bg-midnight min-h-screen text-warm-white">
        {/* Section 1: FAQ Hero */}
        <FAQHero />

        {/* Sections 2–6: FAQ Interactive Hub (Search, Category Filters, Accordions, Results & Empty State) */}
        <FAQInteractiveSection />

        {/* Section 7: Support & Contact CTA */}
        <FAQContactCTA />
      </div>
    </PageTransition>
  );
};

export default FAQ;
