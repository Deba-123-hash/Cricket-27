import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Container from '../common/Container';
import Button from '../common/Button';
import Badge from '../common/Badge';

export const GameIntroSection = () => {
  return (
    <section className="py-20 relative">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Concept Visual Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-cricket-dark-elevated to-cricket-dark-card border border-cricket-dark-border p-8 shadow-2xl">
              {/* Pitch Diagram Simulation Graphic */}
              <div className="aspect-[4/3] rounded-xl bg-cricket-dark border border-cricket-dark-border/80 flex flex-col items-center justify-center p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-pitch-pattern bg-[length:24px_24px] opacity-25" />
                
                {/* SVG Pitch Art Preview */}
                <svg viewBox="0 0 300 200" className="w-full h-full relative z-10" fill="none">
                  {/* Pitch Strip */}
                  <rect x="110" y="20" width="80" height="160" rx="4" fill="#141D32" stroke="#212E4A" strokeWidth="2" />
                  {/* Crease lines */}
                  <line x1="110" y1="50" x2="190" y2="50" stroke="#00E676" strokeWidth="2" />
                  <line x1="110" y1="150" x2="190" y2="150" stroke="#00E676" strokeWidth="2" />
                  {/* Stumps */}
                  <circle cx="140" cy="30" r="3" fill="#FFB800" />
                  <circle cx="150" cy="30" r="3" fill="#FFB800" />
                  <circle cx="160" cy="30" r="3" fill="#FFB800" />
                  <circle cx="140" cy="170" r="3" fill="#FFB800" />
                  <circle cx="150" cy="170" r="3" fill="#FFB800" />
                  <circle cx="160" cy="170" r="3" fill="#FFB800" />
                  {/* Trajectory Arc */}
                  <path d="M 150 160 Q 180 100 130 40" stroke="#00FF87" strokeWidth="2.5" strokeDasharray="4,4" />
                  <circle cx="130" cy="40" r="5" fill="#FF2A4D" />
                </svg>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-display text-cricket-muted uppercase tracking-wider bg-cricket-dark-card/90 px-3 py-1.5 rounded border border-cricket-dark-border">
                  <span>Ball Trajectory Tracking</span>
                  <span className="text-cricket-green">142.4 KM/H &bull; Outswinger</span>
                </div>
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-4 right-4 bg-cricket-dark-elevated border border-cricket-green/50 p-3 rounded-xl shadow-neon-green/20 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-cricket-green" />
                <div>
                  <span className="block text-xs font-display font-bold text-white">Authentic Ball Physics</span>
                  <span className="block text-[10px] text-cricket-muted">Swing, Drift & Friction</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="green" size="md">
              Game Concept Showcase
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white leading-tight">
              A Game Crafted For Both <br />
              <span className="text-gradient-green font-display">Tacticians & Reflex Masters</span>
            </h2>

            <p className="text-cricket-muted leading-relaxed text-base">
              CRICKET27 is designed from scratch to strip away the clunky animation locks found in traditional 3D cricket games. By utilizing precision 2D mechanics, players experience instantaneous bat-to-ball responsiveness.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Full 360-degree ground and aerial shot distribution',
                'Pitch deterioration affecting ball bounce throughout multi-day matches',
                'Comprehensive DRS hawkeye-style virtual review telemetry',
                'Custom league creation and knockout cup tournament structures',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-cricket-silver">
                  <CheckCircle2 className="w-5 h-5 text-cricket-green shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <Button to={ROUTES.OUR_GAME} variant="primary" size="md" icon={ArrowRight}>
                Game Concept Deep-Dive
              </Button>
              <Link
                to={ROUTES.FEATURES}
                className="text-xs uppercase font-display font-bold tracking-wider text-cricket-muted hover:text-white transition-colors"
              >
                View Feature Matrix &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GameIntroSection;
