import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';
import {
  CommunityHero,
  CommunityPhilosophy,
  CommunityValues,
  CommunityCulture,
  CommunityHighlights,
  SocialMediaSection,
  CommunityContentPreview,
  CommunityFAQPreview,
  CommunityCTA,
} from '../sections/community';

/**
 * CRICKET27 — Official Community Page
 * Phase 14 Master Experience
 * Route: /community
 */
export const Community = () => {
  usePageTitle('Community — One Game, One Passion | CRICKET27');

  return (
    <PageTransition>
      <SEO
        title="Community | Connect, Compete & Share Cricket Passion | CRICKET27"
        description="Join the official CRICKET27 community hub — engage on Discord, discover featured content creators, participate in events, and share the passion for cricket."
        canonical="/community"
        ogImage="/assets/community/community-hero.webp"
      />
      <div className="relative w-full bg-midnight min-h-screen text-warm-white">
        {/* Section 1: Community Hero */}
        <CommunityHero />

        {/* Section 2: Our Community Philosophy */}
        <CommunityPhilosophy />

        {/* Section 3: Community Values */}
        <CommunityValues />

        {/* Section 4: The Cricket Culture */}
        <CommunityCulture />

        {/* Section 5: Community Highlights */}
        <CommunityHighlights />

        {/* Section 6: Social Media Connection */}
        <SocialMediaSection />

        {/* Section 7: Community Content Preview */}
        <CommunityContentPreview />

        {/* Section 8: Community FAQ Preview */}
        <CommunityFAQPreview />

        {/* Section 9: Final Community CTA */}
        <CommunityCTA />
      </div>
    </PageTransition>
  );
};

export default Community;
