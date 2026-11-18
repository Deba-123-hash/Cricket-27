import { motion } from 'framer-motion';
import { ArrowRight, Compass, Eye, ShieldAlert } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';

export const GameIntroSection = () => {
  return (
    <section id="our-game-intro" className="py-24 sm:py-32 bg-midnight-dark relative overflow-hidden border-t border-slate/50">
      {/* Background Stadium Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-pitch-pattern bg-[length:40px_40px] opacity-10 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Full Panoramic Concept Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="relative rounded-brand overflow-hidden border border-slate shadow-card-elevated group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-midnight">
                <CricketImage
                  src="/assets/game-concept/game-concept-stadium.webp"
                  fallbackSrc="/assets/game-concept/game-concept-stadium.jpg"
                  alt="Panoramic night cricket match stadium with floodlights and bowler in delivery stride"
                  icon="eye"
                  aspectRatio="16/10"
                  objectFit="cover"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-midnight-dark/30 to-transparent pointer-events-none" />

              {/* Status Chip Overlay */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div className="px-3 py-1 rounded bg-midnight/90 border border-lime/50 text-lime font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-md flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5" />
                  <span>CONCEPT KEY ART</span>
                </div>
              </div>

              {/* Bottom Scrim Bar */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-brand bg-midnight-light/95 backdrop-blur-md border border-slate flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-xs font-heading font-black uppercase tracking-wider text-warm-white block">
                    2D Broadcast Match Perspective
                  </span>
                  <span className="text-[11px] font-mono text-muted-text">
                    Sub-millisecond trajectory engine &amp; dynamic DRS review
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-lime font-bold">
                  <span>PLANNED TITLE</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Game Vision Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5 order-1 lg:order-2 space-y-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <Badge variant="lime" size="sm">
                INTRODUCING CRICKET27
              </Badge>
              <span className="h-px w-8 bg-slate-light" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
                PROJECT VISION
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
              THE GAME WE ENVISION. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-hover">
                THE PASSION WE SHARE.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-text leading-relaxed">
              Engineered around tactical intelligence, high-tempo 2D mechanics, and zero pay-to-win compromises.
            </p>

            {/* Key Concept Highlights */}
            <div className="space-y-2.5 pt-1">
              <div className="p-3 rounded-brand bg-slate-card border border-slate flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-lime shrink-0" />
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white">
                  Tactical Mind-Games at Every Delivery
                </span>
              </div>
              <div className="p-3 rounded-brand bg-slate-card border border-slate flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-coral shrink-0" />
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white">
                  100% Skill-First Competitive Balance
                </span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                to={ROUTES.OUR_GAME}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="shadow-lime-glow font-heading uppercase tracking-wider justify-center w-full sm:w-auto"
              >
                EXPLORE OUR GAME
              </Button>
              <Button
                to={ROUTES.FEATURES}
                variant="outline"
                size="lg"
                icon={Compass}
                iconPosition="left"
                className="font-heading uppercase tracking-wider justify-center w-full sm:w-auto"
              >
                VIEW FEATURES
              </Button>
            </div>

            {/* Concept Disclaimer */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-muted-text pt-2">
              <ShieldAlert className="w-3.5 h-3.5 text-coral shrink-0" />
              <span>Promotional concept showcase &bull; Not a playable build</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default GameIntroSection;
