import { motion } from 'framer-motion';
import { Heart, Lightbulb, Users, ArrowRight } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';

export const BrandVisionSection = () => {
  const principles = [
    {
      number: '01',
      title: 'PASSION FOR CRICKET',
      subtitle: 'Honoring the Sport',
      description: 'Channeling the drama of floodlit arenas and crease tension into every delivery.',
      icon: Heart,
      accent: 'text-coral',
    },
    {
      number: '02',
      title: 'CREATIVE CRAFT',
      subtitle: 'Distinctive 2D Art',
      description: 'Elevating sports gaming with sub-millisecond fidelity and broadcast telemetry.',
      icon: Lightbulb,
      accent: 'text-lime',
    },
    {
      number: '03',
      title: 'COMMUNITY FIRST',
      subtitle: 'Player-Driven Vision',
      description: 'Shaped alongside cricket fans through devlogs, polls, and open feedback.',
      icon: Users,
      accent: 'text-sky-400',
    },
  ];

  return (
    <section id="brand-vision" className="py-24 sm:py-32 bg-midnight-dark relative overflow-hidden border-t border-slate/50">
      {/* Background Graphic Watermark */}
      <div className="absolute -bottom-20 right-0 font-heading font-black text-[18rem] text-slate/10 select-none pointer-events-none leading-none">
        27
      </div>

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="lime" size="sm">
              BRAND PHILOSOPHY &bull; CORE PILLARS
            </Badge>
            <span className="h-px w-10 bg-slate-light" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
              FOUNDATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
            THE FUTURE OF CRICKET GAMING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-hover">
              STARTS WITH A VISION.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-text leading-relaxed">
            Bridging athletic passion, esports-grade responsiveness, and modern digital cricket entertainment.
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-brand bg-slate-card border border-slate hover:border-lime/40 transition-all duration-300 flex flex-col justify-between group shadow-card-depth"
              >
                <div className="space-y-6">
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate">
                    <span className="font-heading font-black text-3xl text-muted-text/60 group-hover:text-lime transition-colors">
                      {item.number}
                    </span>
                    <div className="w-11 h-11 rounded-brand bg-midnight border border-slate flex items-center justify-center text-warm-white group-hover:scale-105 transition-all">
                      <Icon className={`w-5 h-5 ${item.accent}`} />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-heading font-black uppercase tracking-wide text-warm-white group-hover:text-lime transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-lime font-semibold uppercase tracking-wider">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Visual Accent */}
                <div className="pt-6 mt-6 border-t border-slate/60 flex items-center justify-between text-xs font-mono text-muted-text">
                  <span className="uppercase">CRICKET27 STANDARD</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom Action */}
        <div className="mt-16 text-center">
          <Button
            to={ROUTES.ABOUT}
            variant="secondary"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            className="font-heading uppercase tracking-wider"
          >
            DISCOVER THE FULL CRICKET27 STORY
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default BrandVisionSection;
