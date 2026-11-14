import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import GalleryGrid from '../gallery/GalleryGrid';
import { GALLERY_ITEMS } from '../../data/gallery';

export const GallerySection = ({ limit }) => {
  const items = limit ? GALLERY_ITEMS.slice(0, limit) : GALLERY_ITEMS;

  return (
    <section className="py-20 bg-cricket-dark-elevated/30 border-y border-cricket-dark-border/50 relative">
      <Container size="xl">
        <SectionHeading
          eyebrow="Visual Exploration"
          title="Concept Art &"
          highlightText="Design Studies"
          description="A glimpse into the visual direction, stadium moodboards, broadcast telemetry, and brand artwork."
        />

        <GalleryGrid items={items} />
      </Container>
    </section>
  );
};

export default GallerySection;
