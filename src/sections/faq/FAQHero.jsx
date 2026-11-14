import { motion } from 'framer-motion';
import { HelpCircle, Sparkles, ShieldCheck } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Breadcrumb from '../../components/common/Breadcrumb';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const FAQHero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-midnight overflow-hidden border-b border-slate/60">
      {/* Background Stadium Glow & Seam Motifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        {/* Subtle radial stadium floodlight glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-lime/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-24 right-10 w-[450px] h-[450px] bg-slate/20 rounded-full blur-[140px]" />

        {/* Subtle Pitch Crease & Seam Vector Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #B7F34A 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Breadcrumb Navigation */}
          <motion.div variants={fadeIn} className="flex justify-center mb-6">
            <Breadcrumb items={[{ label: 'FAQ' }]} />
          </motion.div>

          {/* Eyebrow Pill */}
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 mb-5">
            <span className="font-heading font-black tracking-widest text-xs uppercase px-3.5 py-1.5 rounded-full bg-lime/15 text-lime border border-lime/30 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              CRICKET27 HELP CENTER
            </span>
            <Badge variant="outline" size="sm" className="hidden sm:inline-flex border-slate text-muted-text">
              OFFICIAL FAQ
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeIn}
            className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black tracking-tight text-warm-white uppercase leading-[1.05] mb-6"
          >
            GOT QUESTIONS? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-lime to-lime-hover">
              LET&apos;S CLEAR THINGS UP.
            </span>
          </motion.h1>

          {/* Subtext Description */}
          <motion.p
            variants={fadeIn}
            className="text-base sm:text-xl text-warm-white/80 font-sans leading-relaxed max-w-2xl mx-auto mb-8"
          >
            Find answers to common questions about CRICKET27, our vision, the cricket gaming concept, community and future updates.
          </motion.p>

          {/* Trust Meta Pill */}
          <motion.div
            variants={fadeIn}
            className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-4 py-2 rounded-2xl sm:rounded-full bg-slate-card/60 border border-slate text-xs font-mono text-muted-text max-w-full text-center"
          >
            <span className="flex items-center gap-1.5 text-lime font-bold">
              <ShieldCheck className="w-4 h-4 text-lime" />
              VERIFIED INFORMATION
            </span>
            <span className="hidden sm:inline text-slate">•</span>
            <span className="hidden sm:inline">UPDATED FOR 2026</span>
            <span className="hidden sm:inline text-slate">•</span>
            <span className="flex items-center gap-1">
              <HelpCircle className="w-3.5 h-3.5 text-muted-text" />
              16 CURATED ANSWERS
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default FAQHero;
