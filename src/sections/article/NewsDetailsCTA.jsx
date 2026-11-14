import { motion } from 'framer-motion';
import { ArrowRight, Newspaper, Sparkles } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { NEWS_DETAILS_CTA_DATA } from '../../data/news';
import { ROUTES } from '../../utils/constants';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const NewsDetailsCTA = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-midnight overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture>
          <source type="image/webp" srcSet={NEWS_DETAILS_CTA_DATA.bgImage ? NEWS_DETAILS_CTA_DATA.bgImage.replace(/\.(jpg|jpeg|png)$/, '.webp') : ''} />
          <img
            src={NEWS_DETAILS_CTA_DATA.bgImage}
            alt="Atmospheric stadium background under lights"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
            loading="lazy"
            decoding="async"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/90 to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/80 to-midnight" />

        {/* Ambient Radial Lime Glow */}
        <div
          className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[650px] h-[350px] rounded-full bg-lime/10 blur-[150px] pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="mb-4">
            <Badge variant="lime" size="sm">
              {NEWS_DETAILS_CTA_DATA.eyebrow}
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeIn}
            className="text-4xl sm:text-6xl font-heading font-black tracking-tight text-warm-white uppercase mb-6 leading-tight"
          >
            MORE THAN A STORY. <br />
            <span className="text-lime">A CRICKET27 VISION.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            className="text-lg sm:text-xl text-warm-white/80 font-sans leading-relaxed max-w-2xl mx-auto mb-10"
          >
            {NEWS_DETAILS_CTA_DATA.description}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12"
          >
            <Button
              as="link"
              to={ROUTES.OUR_GAME}
              variant="primary"
              size="lg"
              className="gap-2 group shadow-lime-glow/50"
            >
              <span>{NEWS_DETAILS_CTA_DATA.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              as="link"
              to={ROUTES.NEWS}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Newspaper className="w-4 h-4 text-lime" />
              <span>{NEWS_DETAILS_CTA_DATA.secondaryCtaText}</span>
            </Button>
          </motion.div>

          {/* Disclaimer Footer */}
          <motion.div
            variants={fadeIn}
            className="pt-8 border-t border-slate/60 inline-flex items-center gap-2 text-xs text-muted-text font-mono"
          >
            <Sparkles className="w-3.5 h-3.5 text-lime" />
            <span>CRICKET27 &bull; CONCEPTUAL SPORTS JOURNALISM &bull; BEYOND THE BOUNDARY</span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default NewsDetailsCTA;
