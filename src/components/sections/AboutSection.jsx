import { Shield, Target, Flame } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { ROUTES } from '../../utils/constants';

export const AboutSection = () => {
  return (
    <section className="py-20 bg-cricket-dark-elevated/40 border-y border-cricket-dark-border/60 relative">
      <Container size="xl">
        <SectionHeading
          eyebrow="Our Mission & DNA"
          title="Engineered for"
          highlightText="Pure Cricket Mastery"
          description="We are building CRICKET27 to bridge the gap between high-stakes esports precision and the authentic tactical soul of cricket."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-cricket-dark-card border border-cricket-dark-border hover:border-cricket-green/40 transition-colors space-y-4">
            <div className="w-12 h-12 rounded-lg bg-cricket-green/10 text-cricket-green flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white">
              Pixel-Perfect Timing
            </h3>
            <p className="text-sm text-cricket-muted leading-relaxed">
              Every defensive block, lofted cover drive, and late cut depends on honest timing windows and dynamic bat trajectory rather than pre-baked dice rolls.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-cricket-dark-card border border-cricket-dark-border hover:border-cricket-gold/40 transition-colors space-y-4">
            <div className="w-12 h-12 rounded-lg bg-cricket-gold/10 text-cricket-gold flex items-center justify-center">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white">
              Arcade Pace, Tactical Soul
            </h3>
            <p className="text-sm text-cricket-muted leading-relaxed">
              Fast matches with strategic field configurations, bowling seam variations, and pitch condition adaptations designed for modern players.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-cricket-dark-card border border-cricket-dark-border hover:border-cricket-crimson/40 transition-colors space-y-4">
            <div className="w-12 h-12 rounded-lg bg-cricket-crimson/10 text-cricket-crimson flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white">
              Community First
            </h3>
            <p className="text-sm text-cricket-muted leading-relaxed">
              Developing openly with our community, gathering feedback from real cricket gamers and content creators to establish an enduring sports franchise.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button to={ROUTES.ABOUT} variant="outline" size="md">
            Learn More About Our Team & Story &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
