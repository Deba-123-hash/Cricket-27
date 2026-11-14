import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { COMMUNITY_CTA_DATA } from '../../data/community';

export const CommunityCTA = () => {
  const { eyebrow, heading, description, cta1Text, cta1Link, cta2Text, cta2Link, bgImage } =
    COMMUNITY_CTA_DATA;

  return (
    <section
      id="community-cta"
      aria-labelledby="community-cta-heading"
      className="relative py-28 sm:py-36 bg-midnight overflow-hidden border-t border-slate"
    >
      {/* Background Stadium Photography with Multi-Layer Cinematic Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <picture>
          <source type="image/webp" srcSet={bgImage ? bgImage.replace(/\.(jpg|jpeg|png)$/, '.webp') : ''} />
          <img
            src={bgImage}
            alt="Atmospheric cricket stadium arena at night"
            className="w-full h-full object-cover object-center transform scale-105"
            loading="lazy"
            decoding="async"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </picture>
        {/* Darkening & Brand Color Gradient Overlays */}
        <div className="absolute inset-0 bg-midnight/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/90 to-midnight/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-midnight via-transparent to-midnight" />
        {/* Radial Lime Accent Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lime/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Badge variant="lime">{eyebrow}</Badge>
            <span className="text-xs font-mono text-warm-white/70 tracking-widest uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-lime" />
              BEYOND THE BOUNDARY
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="community-cta-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tight text-warm-white mb-6 leading-tight"
          >
            {heading}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-warm-white/80 font-sans leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to={cta1Link} className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto justify-center group">
                <span>{cta1Text}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link to={cta2Link} className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto justify-center group">
                <Compass className="w-4 h-4 text-lime" />
                <span>{cta2Text}</span>
              </Button>
            </Link>
          </motion.div>

          {/* Brand Assurance Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-slate/60 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-muted-text"
          >
            <span>OFFICIAL BRAND INITIATIVE</span>
            <span>•</span>
            <span>PRE-PRODUCTION CONCEPT</span>
            <span>•</span>
            <span>CRICKET27 ARCHITECTURE</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CommunityCTA;
