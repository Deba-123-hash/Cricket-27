import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import FeatureCard from '../cards/FeatureCard';
import { GAME_FEATURES } from '../../data/features';
import Button from '../common/Button';
import { ROUTES } from '../../utils/constants';

export const FeaturesSection = ({ limit }) => {
  const displayedFeatures = limit ? GAME_FEATURES.slice(0, limit) : GAME_FEATURES;

  return (
    <section className="py-20 relative">
      <Container size="xl">
        <SectionHeading
          eyebrow="Planned Capabilities"
          title="Engineered With"
          highlightText="Cutting-Edge Precision"
          description="Every element in CRICKET27 is designed to offer deeper tactical satisfaction and lightning-quick feedback."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Button to={ROUTES.FEATURES} variant="outline" size="md">
              View All Planned Features &rarr;
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
};

export default FeaturesSection;
