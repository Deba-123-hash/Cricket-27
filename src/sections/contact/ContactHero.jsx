import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Breadcrumb from '../../components/common/Breadcrumb';
import { CONTACT_HERO_DATA } from '../../data/contact';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const ContactHero = () => {
  const { eyebrow, description, bgImage } = CONTACT_HERO_DATA;

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 bg-midnight overflow-hidden border-b border-slate/60">
      {/* Background Stadium Glow & Atmospheric Backdrop */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            type="image/webp"
            srcSet={(bgImage || '').replace(/\.(jpg|jpeg|png)$/, '.webp')}
          />
          <img
            src={bgImage}
            alt="Atmospheric cricket stadium arena under night floodlights"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </picture>
        {/* Layered brand gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-transparent to-midnight" />

        {/* Ambient Radial Electric Lime Glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[380px] bg-lime/10 rounded-full blur-[150px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-24 right-10 w-[400px] h-[400px] bg-slate/20 rounded-full blur-[130px] pointer-events-none"
          aria-hidden="true"
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
            <Breadcrumb items={[{ label: 'Contact' }]} />
          </motion.div>

          {/* Eyebrow Pill */}
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 mb-5">
            <span className="font-heading font-black tracking-widest text-xs uppercase px-3.5 py-1.5 rounded-full bg-lime/15 text-lime border border-lime/30 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              {eyebrow}
            </span>
            <Badge variant="outline" size="sm" className="hidden sm:inline-flex border-slate text-muted-text">
              OFFICIAL INQUIRY DESK
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeIn}
            className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black tracking-tight text-warm-white uppercase leading-[1.05] mb-6"
          >
            LET&apos;S START A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime via-lime to-lime-hover">
              CONVERSATION.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            className="text-base sm:text-xl text-warm-white/80 font-sans leading-relaxed max-w-2xl mx-auto mb-8"
          >
            {description}
          </motion.p>

          {/* Trust Meta Pill */}
          <motion.div
            variants={fadeIn}
            className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-4 py-2 rounded-2xl sm:rounded-full bg-slate-card/60 border border-slate text-xs font-mono text-muted-text max-w-full text-center"
          >
            <span className="flex items-center gap-1.5 text-lime font-bold">
              <ShieldCheck className="w-4 h-4 text-lime" />
              PROMOTIONAL HUB
            </span>
            <span className="hidden sm:inline text-slate">•</span>
            <span className="hidden sm:inline">COMMUNITY & BRAND DIALOGUE</span>
            <span className="hidden sm:inline text-slate">•</span>
            <span className="flex items-center gap-1.5 text-warm-white/80">
              <MessageSquare className="w-3.5 h-3.5 text-lime" />
              INQUIRIES WELCOME
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactHero;
