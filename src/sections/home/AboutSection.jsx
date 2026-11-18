import { motion } from 'framer-motion';
import { ArrowRight, Trophy, Flame } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';

export const AboutSection = () => {
  return (
    <section id="about-brand" className="py-24 sm:py-32 bg-midnight relative overflow-hidden border-t border-slate/40">
      {/* Background Graphic Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-lime/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-slate/10 rounded-full blur-[160px] pointer-events-none" />

      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <Badge variant="lime" size="sm">
                THE STORY BEHIND CRICKET27
              </Badge>
              <span className="h-px w-10 bg-slate-light" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
                ORIGIN &bull; IDENTITY
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
              MORE THAN JUST A GAME. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-hover">
                A PASSION FOR CRICKET.
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-muted-text leading-relaxed">
              CRICKET27 redefines digital cricket through sub-millisecond gameplay, broadcast presentation, and an authentic competitive spirit for fans worldwide.
            </p>

            {/* Brand Accent Card: 27 Number Accent */}
            <div className="p-5 rounded-brand bg-slate-card border border-slate flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-midnight border border-lime/40 flex items-center justify-center text-lime font-heading font-black text-2xl shrink-0 shadow-lime-glow/20">
                27
              </div>
              <div className="space-y-1">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white block">
                  Dedicated To Tactical Depth
                </span>
                <p className="text-xs text-muted-text leading-relaxed">
                  Master authentic crease awareness, tactical field placements, and sub-millisecond stroke timing.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2 flex items-center gap-4">
              <Button
                to={ROUTES.ABOUT}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="shadow-lime-glow font-heading uppercase tracking-wider"
              >
                DISCOVER OUR STORY
              </Button>
            </div>
          </motion.div>

          {/* Right Column: High-Impact Promotional Artwork */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-brand overflow-hidden border border-slate shadow-card-elevated group">
              {/* Main Artwork */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-midnight">
                <CricketImage
                  src="/assets/about/about-cricket-passion.webp"
                  fallbackSrc="/assets/about/about-cricket-passion.jpg"
                  alt="Atmospheric stadium tunnel view of cricketer walking onto floodlit pitch"
                  icon="trophy"
                  aspectRatio="4/3"
                  objectFit="cover"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent pointer-events-none" />

              {/* Top Accent Badges */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div className="px-3 py-1 rounded bg-midnight/90 border border-lime/50 text-lime font-mono text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  STADIUM ATMOSPHERE
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-brand bg-midnight-light/95 backdrop-blur-md border border-slate flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-slate-card border border-slate flex items-center justify-center text-lime shrink-0">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white block">
                      Floodlit Stadium Immersion
                    </span>
                    <span className="text-[11px] font-mono text-muted-text">
                      Atmospheric night venue acoustics &amp; volumetric lighting
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono text-coral font-bold uppercase">
                  <Flame className="w-3.5 h-3.5" />
                  <span>PRE-RELEASE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
