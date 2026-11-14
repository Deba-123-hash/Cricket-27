import { motion } from 'framer-motion';
import { Eye, Sparkles } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import { MEDIA_INTRO_DATA } from '../../data/gallery';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const MediaIntroduction = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-midnight-light border-y border-slate/60 overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-lime/5 blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Asymmetric Editorial Narrative */}
          <motion.div variants={fadeIn} className="lg:col-span-5">
            <Badge variant="lime" size="sm" className="mb-4">
              EDITORIAL VISION
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-6 leading-tight">
              A VISUAL EXPERIENCE <br />
              <span className="text-lime">BEYOND THE GAME.</span>
            </h2>

            <p className="text-warm-white/80 font-sans leading-relaxed text-base sm:text-lg mb-6">
              {MEDIA_INTRO_DATA.description}
            </p>

            <p className="text-sm text-muted-text font-sans leading-relaxed mb-8">
              Every asset in this vault is created to reflect the tactical intensity, authentic stadium atmospheres,
              and stylized modern 2D art direction that defines CRICKET27.
            </p>

            {/* Micro Feature Bullet Bar */}
            <div className="pt-6 border-t border-slate space-y-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-warm-white/90">
                <div className="w-6 h-6 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime shrink-0">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span>Curated cricket art direction and concept prints</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-warm-white/90">
                <div className="w-6 h-6 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime shrink-0">
                  <Eye className="w-3.5 h-3.5" />
                </div>
                <span>Full-screen high-resolution lightbox inspection</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Prominent Visual Feature Card */}
          <motion.div variants={fadeIn} className="lg:col-span-7">
            <div className="relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card shadow-2xl group">
              <div className="aspect-[16/10] overflow-hidden bg-midnight">
                <CricketImage
                  src={MEDIA_INTRO_DATA.featuredImage}
                  fallbackSrc="/assets/game-concept/match-experience.jpg"
                  alt={MEDIA_INTRO_DATA.featuredImageAlt}
                  aspectRatio="16/10"
                  title="Curated Selection"
                  badge="MEDIA SHOWCASE"
                  icon="sparkles"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80 pointer-events-none" />

              {/* Top Status Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-heading font-black text-xs uppercase px-3 py-1 rounded bg-midnight/90 text-lime border border-lime/40 backdrop-blur-sm">
                  CURATED SELECTION
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-warm-white/90 p-3 rounded-brand bg-midnight/90 border border-slate backdrop-blur-sm">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-text">
                  {MEDIA_INTRO_DATA.caption}
                </span>
                <span className="font-mono text-lime font-bold">CRICKET27</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default MediaIntroduction;
