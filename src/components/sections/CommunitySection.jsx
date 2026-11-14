import { MessageSquare, Users, Sparkles, ExternalLink } from 'lucide-react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { SOCIAL_PLATFORMS } from '../../utils/constants';

export const CommunitySection = () => {
  return (
    <section className="py-20 bg-cricket-dark-elevated/40 border-y border-cricket-dark-border/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cricket-green/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeading
          eyebrow="Join The Movement"
          title="Built By Players,"
          highlightText="Shaped By Community"
          description="Participate in game design surveys, vote on stadium atmospheres, and get early access to future playtests."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {/* Discord Card */}
          <div className="p-8 rounded-2xl bg-cricket-dark-card border border-cricket-green/30 hover:shadow-neon-green/20 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cricket-green/10 text-cricket-green flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Official Discord
              </h3>
              <p className="text-sm text-cricket-muted leading-relaxed">
                Chat directly with our core developers, share feedback, vote in concept polls, and interact with fellow cricket fans.
              </p>
            </div>
            <div className="pt-6">
              <Button
                href={SOCIAL_PLATFORMS.DISCORD}
                variant="primary"
                size="sm"
                className="w-full"
                icon={ExternalLink}
              >
                Join Discord Server
              </Button>
            </div>
          </div>

          {/* Creators Card */}
          <div className="p-8 rounded-2xl bg-cricket-dark-card border border-cricket-dark-border hover:border-cricket-gold/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cricket-gold/10 text-cricket-gold flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Content Creator Roster
              </h3>
              <p className="text-sm text-cricket-muted leading-relaxed">
                Streamers, YouTube creators, and cricket analysts get early asset press-kits, creator badges, and showcase opportunities.
              </p>
            </div>
            <div className="pt-6">
              <Button
                to="/contact"
                variant="secondary"
                size="sm"
                className="w-full"
              >
                Apply as Creator
              </Button>
            </div>
          </div>

          {/* Devlogs Card */}
          <div className="p-8 rounded-2xl bg-cricket-dark-card border border-cricket-dark-border hover:border-cricket-crimson/40 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cricket-crimson/10 text-cricket-crimson flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                VIP Early Access Pool
              </h3>
              <p className="text-sm text-cricket-muted leading-relaxed">
                Be in line when our first playable testing slice opens. Subscribers receive private invites and release milestone alerts.
              </p>
            </div>
            <div className="pt-6">
              <Button
                to="/community"
                variant="outline"
                size="sm"
                className="w-full"
              >
                Reserve Waitlist Spot
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunitySection;
