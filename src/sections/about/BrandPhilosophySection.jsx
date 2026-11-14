import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';

export const BrandPhilosophySection = () => {
  return (
    <section id="brand-philosophy" className="py-28 sm:py-40 bg-midnight relative overflow-hidden border-t border-slate/40">
      {/* Background Ambience & Massive 27 Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading font-black text-[22rem] lg:text-[32rem] text-slate/5 select-none pointer-events-none leading-none">
        27
      </div>
      <div className="absolute inset-0 bg-pitch-pattern bg-[length:48px_48px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[220px] pointer-events-none" />

      <Container size="lg" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <Badge variant="lime" size="md">
              BRAND PHILOSOPHY
            </Badge>
          </div>

          {/* Quote Icon */}
          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-full bg-slate-card border border-slate flex items-center justify-center text-lime shadow-lime-glow/20">
              <Quote className="w-6 h-6 rotate-180" />
            </div>
          </div>

          {/* Oversized Signature Statement */}
          <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-wider text-warm-white uppercase leading-[0.92] select-none">
            &ldquo;BEYOND THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-lime to-lime-hover">
              BOUNDARY.&rdquo;
            </span>
          </h2>

          {/* Supporting Narrative */}
          <div className="max-w-2xl mx-auto space-y-3 text-base sm:text-xl text-warm-white/85 leading-relaxed font-sans">
            <p>
              Cricket transcends the pitch—it is tactical drama, electric emotion, and global community.
            </p>
            <p className="text-lime font-mono text-sm sm:text-base font-semibold">
              CRICKET27 channels that energy into an authentic, fast-paced digital universe.
            </p>
          </div>

          {/* Signature Tag */}
          <div className="pt-4 flex items-center justify-center gap-3 text-xs font-mono text-muted-text">
            <span className="w-8 h-px bg-slate-light" />
            <span>THE CRICKET27 MANIFESTO</span>
            <span className="w-8 h-px bg-slate-light" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default BrandPhilosophySection;
