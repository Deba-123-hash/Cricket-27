import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Crosshair, Zap, Shield, Tv, Trophy, Sparkles, Award, ArrowDownRight } from 'lucide-react';
import Badge from '../common/Badge';
import CricketImage from '../common/CricketImage';

const iconMap = {
  Crosshair,
  Zap,
  Shield,
  Tv,
  Trophy,
  Sparkles,
};

export const ExperienceCard = forwardRef(({ item, onNavigate }, ref) => {
  const { title, shortDescription, badge, icon, image, targetSectionId } = item;
  const IconComponent = iconMap[icon] || Award;

  const handleClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(targetSectionId);
    } else {
      const element = document.getElementById(targetSectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
      className="group relative rounded-brand-lg bg-slate-card/80 border border-slate hover:border-lime/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-card hover:shadow-card-elevated"
    >
      {/* Top Visual Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-midnight border-b border-slate/60">
        <CricketImage
          src={image}
          alt={`${title} visual concept`}
          title={title}
          icon={icon}
          aspectRatio="16/10"
          objectFit="cover"
          className="w-full h-full"
          imageClassName="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-card via-transparent to-transparent opacity-85 pointer-events-none" />

        {/* Top-Right Badge */}
        {badge && (
          <div className="absolute top-3 right-3 z-10">
            <Badge variant="lime" size="sm" className="shadow-md">
              {badge}
            </Badge>
          </div>
        )}

        {/* Floating Icon */}
        <div className="absolute bottom-3 left-4 w-9 h-9 rounded-brand bg-midnight/90 border border-slate flex items-center justify-center text-lime backdrop-blur-sm group-hover:bg-lime group-hover:text-midnight group-hover:border-lime transition-all duration-200 z-10">
          <IconComponent className="w-4 h-4" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-heading font-black uppercase text-warm-white mb-2.5 group-hover:text-lime transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-sm text-warm-white/75 font-sans leading-relaxed line-clamp-3">
            {shortDescription}
          </p>
        </div>

        {/* Scroll Action Button */}
        <div className="mt-6 pt-4 border-t border-slate/60 flex items-center justify-between">
          <button
            type="button"
            onClick={handleClick}
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-lime group-hover:text-warm-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded"
            aria-label={`Jump to ${title} details`}
          >
            <span>Jump to Feature</span>
            <ArrowDownRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <span className="font-mono text-[10px] text-muted-text uppercase">CONCEPT</span>
        </div>
      </div>
    </motion.div>
  );
});

ExperienceCard.displayName = 'ExperienceCard';

ExperienceCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string,
    badge: PropTypes.string,
    icon: PropTypes.string,
    image: PropTypes.string,
    targetSectionId: PropTypes.string,
  }).isRequired,
  onNavigate: PropTypes.func,
};

export default ExperienceCard;
