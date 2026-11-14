import { ArrowRight, Sparkles } from 'lucide-react';
import Container from '../common/Container';
import Button from '../common/Button';
import { ROUTES } from '../../utils/constants';

export const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <Container size="xl">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-cricket-dark-elevated via-cricket-dark-card to-cricket-dark-elevated border border-cricket-green/30 p-8 sm:p-14 lg:p-16 text-center space-y-6 shadow-2xl">
          {/* Neon Glow Spots */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-cricket-green/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cricket-gold/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-cricket-green bg-cricket-green/10 px-3 py-1 rounded-full border border-cricket-green/30 inline-block">
              Be Part Of The Journey
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white leading-tight">
              Ready For The <br />
              <span className="text-gradient-green font-display">New Standard in Cricket?</span>
            </h2>

            <p className="text-base text-cricket-muted leading-relaxed">
              Sign up to receive development dispatches, exclusive brand posters, and early notifications on upcoming test builds.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                to={ROUTES.OUR_GAME}
                variant="primary"
                size="lg"
                icon={ArrowRight}
              >
                Explore Our Game
              </Button>
              <Button
                to={ROUTES.FEATURES}
                variant="outline"
                size="lg"
                icon={Sparkles}
                iconPosition="left"
              >
                Explore Features
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
