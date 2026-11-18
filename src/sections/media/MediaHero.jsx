import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Image as ImageIcon } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { MEDIA_HERO_DATA } from '../../data/gallery';
import { ROUTES } from '../../utils/constants';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const MediaHero = () => {
  return (
    <section className="relative min-h-[480px] sm:min-h-[75vh] flex items-center justify-center overflow-hidden bg-midnight pt-28 pb-16 lg:py-28">
      {/* Background Stadium Artwork with Dark Multi-Layer Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            type="image/webp"
            srcSet={(MEDIA_HERO_DATA.bgImage || '').replace(/\.(jpg|jpeg|png)$/, '.webp')}
          />
          <img
            src={MEDIA_HERO_DATA.bgImage}
            alt="Atmospheric cricket stadium illuminated under floodlights"
            className="w-full h-full object-cover object-center opacity-35 scale-105"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-transparent to-midnight" />

        {/* Ambient Radial Lighting Accents */}
        <div
          className="absolute -top-32 left-1/3 w-[600px] h-[600px] rounded-full bg-lime/10 blur-[150px] pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-28 right-10 w-[450px] h-[450px] rounded-full bg-coral/5 blur-[130px] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl"
        >
          {/* Breadcrumb Navigation */}
          <motion.nav
            variants={fadeIn}
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-mono text-muted-text mb-6"
          >
            <Link
              to={ROUTES.HOME}
              className="hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-light" />
            <span className="text-warm-white font-medium">Media</span>
          </motion.nav>

          {/* Eyebrow Pill */}
          <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-heading font-black tracking-widest text-xs uppercase px-3 py-1.5 rounded-full bg-lime/15 text-lime border border-lime/30 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              {MEDIA_HERO_DATA.eyebrow}
            </span>
            <Badge variant="outline" size="sm" className="border-slate-card text-muted-text">
              OFFICIAL VISUAL VAULT
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeIn}
            className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black tracking-tight text-warm-white uppercase leading-[1.05] mb-6"
          >
            THE WORLD OF <span className="text-lime">CRICKET27.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            className="text-base sm:text-xl text-warm-white/80 leading-relaxed font-sans max-w-2xl mb-8"
          >
            {MEDIA_HERO_DATA.description}
          </motion.p>

          {/* Quick Stats Indicator */}
          <motion.div
            variants={fadeIn}
            className="pt-6 border-t border-slate/60 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-muted-text font-mono"
          >
            <div className="flex items-center gap-2 text-warm-white">
              <ImageIcon className="w-4 h-4 text-lime" />
              <span>16 Curated High-Resolution Assets</span>
            </div>
            <div className="h-4 w-[1px] bg-slate hidden sm:block" />
            <span>Interactive Full-Screen Lightbox Enabled</span>
            <div className="h-4 w-[1px] bg-slate hidden sm:block" />
            <span className="text-lime">100% Concept Integrity</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default MediaHero;
