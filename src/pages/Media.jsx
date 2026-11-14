import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';

// Media Page Sections (Phase 11)
import MediaHero from '../sections/media/MediaHero';
import MediaIntroduction from '../sections/media/MediaIntroduction';
import MediaGallery from '../sections/media/MediaGallery';
import FeaturedPosters from '../sections/media/FeaturedPosters';
import MediaCTA from '../sections/media/MediaCTA';

export const Media = () => {
  usePageTitle('Media & Visual Vault — Artwork & Posters | CRICKET27');

  return (
    <PageTransition>
      <SEO
        title="Media & Gallery | Concept Art, Posters & Wallpapers | CRICKET27"
        description="Explore official CRICKET27 concept artwork, high-resolution cricket gaming wallpapers, downloadable studio posters, and visual presentation assets."
        canonical="/media"
        ogImage="/assets/game-concept/match-experience.webp"
      />

      {/* 1. Media Hero (Breadcrumb, 3-layer overlay, stats) */}
      <MediaHero />

      {/* 2. Media Introduction (Editorial layout & prominent key art) */}
      <MediaIntroduction />

      {/* 3, 4, 5. Category Filters, Interactive Gallery & Advanced Lightbox */}
      <MediaGallery />

      {/* 6. Featured Promotional Posters (3 limited-edition vector posters) */}
      <FeaturedPosters />

      {/* 8. Final Call to Action */}
      <MediaCTA />
    </PageTransition>
  );
};

export default Media;
