import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';

export const OurStorySection = () => {
  return (
    <section id="our-story" className="py-24 sm:py-32 bg-midnight-dark relative overflow-hidden border-t border-slate/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-lime/5 rounded-full blur-[180px] pointer-events-none" />

      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="flex items-center gap-3">
            <Badge variant="lime" size="sm">
              THE STORY BEHIND THE BRAND
            </Badge>
            <span className="h-px w-8 bg-slate-light" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
              ORIGINS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
            BORN FROM A PASSION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-hover">
              FOR CRICKET.
            </span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-muted-text leading-relaxed">
            <p>
              Cricket is defined by strategic tension, split-second reflexes, and electric stadium energy. CRICKET27 channels that culture into modern digital entertainment—crafted for competitors who live beyond the boundary.
            </p>
            <p>
              Our journey is centred on creative authenticity, thoughtful game design, and a shared appreciation for the sport.
            </p>
          </div>

          {/* Tactical Identity Box */}
          <div className="pt-2">
            <div className="p-6 rounded-brand bg-slate-card border border-slate flex items-start gap-4">
              <div className="w-12 h-12 rounded bg-midnight border border-lime/40 flex items-center justify-center text-lime font-heading font-black text-2xl shrink-0 shadow-lime-glow/20">
                27
              </div>
              <div className="space-y-1">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white block">
                  The &apos;27&apos; Distinction
                </span>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  A symbol of forward-looking ambition — aiming beyond traditional boundaries to create digital experiences shaped by sports culture.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default OurStorySection;
