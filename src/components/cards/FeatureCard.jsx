import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Crosshair, Zap, Shield, Tv, Trophy, Sparkles, Award, ArrowRight } from 'lucide-react';
import Badge from '../common/Badge';
import CricketImage from '../common/CricketImage';
import { ROUTES } from '../../utils/constants';

const iconMap = {
  Crosshair,
  Zap,
  Shield,
  Tv,
  Trophy,
  Sparkles,
};

export const FeatureCard = memo(({ feature, to = ROUTES.FEATURES }) => {
  const { title, category, summary, badge, iconName, highlight, image, fallbackImage } = feature;
  const IconComponent = iconMap[iconName] || Award;
  const hasVisualBanner = Boolean(image);

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.22, ease: 'easeOut' } }}
      className={`relative rounded-brand bg-slate-card border transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-card-depth ${
        highlight
          ? 'border-lime/60 shadow-lime-glow/20 ring-1 ring-lime/20'
          : 'border-slate hover:border-lime/40 hover:shadow-card-elevated'
      }`}
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 rounded-full bg-lime/5 blur-2xl group-hover:bg-lime/10 transition-colors pointer-events-none" />

      {/* Top Visual Artwork (16:9 Illustration or Thematic Branded Fallback) */}
      {hasVisualBanner && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-midnight border-b border-slate">
          <CricketImage
            src={image}
            fallbackSrc={fallbackImage}
            alt={`${title} conceptual visual artwork`}
            aspectRatio="16/9"
            icon={IconComponent}
            title={title}
            className="w-full h-full"
            imageClassName="transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            width="640"
            height="360"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-card via-transparent to-transparent opacity-80 pointer-events-none" />
          {badge && (
            <div className="absolute top-3 right-3 z-10">
              <Badge variant={highlight ? 'lime' : 'neutral'} size="sm">
                {badge}
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Header row when no top visual banner */}
          {!hasVisualBanner && (
            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="w-11 h-11 rounded-brand bg-midnight border border-slate flex items-center justify-center text-lime group-hover:border-lime/50 group-hover:scale-105 transition-all">
                <IconComponent className="w-5 h-5" />
              </div>
              {badge && (
                <Badge variant={highlight ? 'lime' : 'neutral'} size="sm">
                  {badge}
                </Badge>
              )}
            </div>
          )}

          <div className="flex items-center gap-2 mb-2">
            {hasVisualBanner && (
              <span className="w-6 h-6 rounded bg-midnight border border-slate flex items-center justify-center text-lime shrink-0">
                <IconComponent className="w-3.5 h-3.5" />
              </span>
            )}
            <span className="text-[11px] uppercase font-mono font-semibold tracking-wider text-muted-text">
              {category}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-heading font-black uppercase text-warm-white mb-2.5 group-hover:text-lime transition-colors leading-tight">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Action Link Footer */}
        <div className="mt-6 pt-4 border-t border-slate/60 flex items-center justify-between text-xs font-heading font-bold uppercase tracking-widest text-muted-text group-hover:text-lime transition-colors">
          <Link
            to={to}
            className="inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded"
            aria-label={`Explore ${title} details`}
          >
            <span>Explore Feature Vision</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
          </Link>
          <span className="text-[10px] font-mono text-muted-text/70">CONCEPT</span>
        </div>
      </div>
    </motion.div>
  );
});

FeatureCard.displayName = 'FeatureCard';

export default FeatureCard;
