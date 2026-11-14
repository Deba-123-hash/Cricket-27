import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, Newspaper } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { NEWS_HERO_DATA } from '../../data/news';
import { ROUTES } from '../../utils/constants';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const NewsHero = () => {
  return (
    <section className="relative min-h-[480px] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-midnight pt-28 pb-16 lg:py-28">
      {/* Background Stadium Atmosphere with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source
            type="image/webp"
            srcSet={(NEWS_HERO_DATA.bgImage || '').replace(/\.(jpg|jpeg|png)$/, '.webp')}
          />
          <img
            src={NEWS_HERO_DATA.bgImage}
            alt="International cricket stadium under lights"
            className="w-full h-full object-cover object-center opacity-30 scale-105"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/90 to-midnight/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-transparent to-midnight" />

        {/* Ambient Radial Lime Glow */}
        <div
          className="absolute -top-32 right-1/4 w-[550px] h-[550px] rounded-full bg-lime/10 blur-[150px] pointer-events-none"
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
          {/* Breadcrumb */}
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
            <span className="text-warm-white font-medium">News</span>
          </motion.nav>

          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-heading font-black tracking-widest text-xs uppercase px-3 py-1.5 rounded-full bg-lime/15 text-lime border border-lime/30 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              {NEWS_HERO_DATA.eyebrow}
            </span>
            <Badge variant="outline" size="sm" className="border-slate-card text-muted-text">
              STUDIO DISPATCHES &bull; EDITORIAL
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeIn}
            className="text-3xl sm:text-5xl lg:text-7xl font-heading font-black tracking-tight text-warm-white uppercase leading-[1.05] mb-6"
          >
            NEWS. STORIES. <br />
            <span className="text-lime">THE GAME.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            className="text-base sm:text-xl text-warm-white/80 leading-relaxed font-sans max-w-2xl mb-8"
          >
            {NEWS_HERO_DATA.description}
          </motion.p>

          {/* Subheader info strip */}
          <motion.div
            variants={fadeIn}
            className="pt-6 border-t border-slate/60 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-muted-text font-mono"
          >
            <div className="flex items-center gap-2 text-warm-white">
              <Newspaper className="w-4 h-4 text-lime" />
              <span>Studio News &amp; Design Notes</span>
            </div>
            <div className="h-4 w-[1px] bg-slate hidden sm:block" />
            <span>Updated Periodically</span>
            <div className="h-4 w-[1px] bg-slate hidden sm:block" />
            <span className="text-lime">Concept Previews Only</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default NewsHero;
