import { motion } from 'framer-motion';
import { HelpCircle, Briefcase, MessageSquare, Camera, Clock } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { CONTACT_INFO_CARDS } from '../../data/contact';
import { fadeIn, staggerContainer } from '../../utils/animations';

const iconMap = {
  HelpCircle,
  Briefcase,
  MessageSquare,
  Camera,
};

export const ContactInfoCards = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-midnight overflow-hidden border-b border-slate/60">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lime/5 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="lime" size="sm" className="mb-4">
            COMMUNICATION CHANNELS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-4">
            INQUIRY <span className="text-lime">CATEGORIES.</span>
          </h2>
          <p className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed">
            Find the right touchpoint for your query. Direct channel coordinates will be published alongside future milestones.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CONTACT_INFO_CARDS.map((card) => {
            const Icon = iconMap[card.icon] || MessageSquare;

            return (
              <motion.div
                key={card.id}
                variants={fadeIn}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="group relative rounded-brand-lg bg-slate-card/80 border border-slate p-7 flex flex-col justify-between hover:border-lime/50 transition-all duration-300 shadow-card hover:shadow-card-elevated"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-brand bg-midnight border border-slate flex items-center justify-center text-lime group-hover:bg-lime group-hover:text-midnight group-hover:border-lime transition-all duration-300">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-midnight border border-slate/60 text-muted-text">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-black uppercase text-warm-white tracking-wide mb-3 group-hover:text-lime transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-warm-white/75 font-sans leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Status Bar: Contact details coming soon (Strict adherence to guidelines) */}
                <div className="pt-4 border-t border-slate/50">
                  <div className="flex items-center gap-2 px-3 py-2 rounded bg-midnight/90 border border-slate/60 text-xs font-mono text-muted-text">
                    <Clock className="w-3.5 h-3.5 text-lime shrink-0" />
                    <span className="truncate">{card.status}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactInfoCards;
