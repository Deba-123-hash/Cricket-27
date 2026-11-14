import { motion } from 'framer-motion';
import { Flame, Lightbulb, Zap, Users, Shield } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';

export const CoreValuesSection = () => {
  const values = [
    {
      number: '01',
      title: 'PASSION',
      summary: 'We are inspired by the excitement, dedication and spirit of cricket.',
      description: 'Cricket is rooted in history, drama, and sportsmanship. Every design decision we make is guided by a genuine love for the game and its global community.',
      icon: Flame,
      color: 'text-coral',
      borderColor: 'border-coral/40',
      badge: 'FOUNDATION',
    },
    {
      number: '02',
      title: 'CREATIVITY',
      summary: 'We believe fresh ideas and thoughtful design can create a distinctive digital experience.',
      description: 'From bold typographic treatments to handcrafted stadium vectors, we embrace creative thinking to set a new standard for 2D sports game presentation.',
      icon: Lightbulb,
      color: 'text-lime',
      borderColor: 'border-lime/40',
      badge: 'ART DIRECTION',
    },
    {
      number: '03',
      title: 'INNOVATION',
      summary: 'We are interested in exploring new possibilities in cricket gaming and digital entertainment.',
      description: 'We prioritize sub-millisecond input response, real-time ball seam physics, and authentic tactical fielding over generic button-mashing mechanics.',
      icon: Zap,
      color: 'text-sky-400',
      borderColor: 'border-sky-400/40',
      badge: 'ENGINEERING',
    },
    {
      number: '04',
      title: 'COMMUNITY',
      summary: 'We believe cricket is more meaningful when people can share their passion together.',
      description: 'Sports thrive on shared celebration. We are building an open community where cricket fans, competitive players, and creators contribute their ideas.',
      icon: Users,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-400/40',
      badge: 'FELLOWSHIP',
    },
  ];

  return (
    <section id="core-values" className="py-24 sm:py-32 bg-midnight relative overflow-hidden border-t border-slate/40">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-lime/5 rounded-full blur-[200px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <Badge variant="lime" size="sm">
              PRINCIPLES &bull; STANDARDS
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
            THE VALUES THAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-hover">
              DEFINE US.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-text leading-relaxed">
            Four guiding principles that shape our creative vision, development roadmap, and relationship with players.
          </p>
        </div>

        {/* 4 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="p-7 rounded-brand bg-slate-card border border-slate hover:border-lime/50 transition-all duration-300 flex flex-col justify-between group shadow-card-depth relative overflow-hidden"
              >
                {/* Glow Corner */}
                <div className="absolute top-0 right-0 -mr-12 -mt-12 w-24 h-24 rounded-full bg-lime/5 blur-xl group-hover:bg-lime/10 transition-colors pointer-events-none" />

                <div className="space-y-5">
                  {/* Top Row: Number & Badge */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate">
                    <span className="font-heading font-black text-2xl text-muted-text/50 group-hover:text-lime transition-colors">
                      {item.number}
                    </span>
                    <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                      {item.badge}
                    </Badge>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-brand bg-midnight border border-slate flex items-center justify-center group-hover:scale-105 transition-all">
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>

                  {/* Title & Summary */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-heading font-black uppercase text-warm-white group-hover:text-lime transition-colors tracking-wide">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-lime uppercase tracking-wider">
                      {item.summary}
                    </p>
                  </div>

                  {/* Body Paragraph */}
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-5 mt-6 border-t border-slate/60 flex items-center justify-between text-[11px] font-mono text-muted-text">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-lime" />
                    <span>CORE PILLAR</span>
                  </div>
                  <span className="text-warm-white font-bold">&bull;</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CoreValuesSection;
