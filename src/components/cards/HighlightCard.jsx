import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '../../utils/helpers';
import Badge from '../common/Badge';
import Button from '../common/Button';
import CricketImage from '../common/CricketImage';

export const HighlightCard = forwardRef(
  (
    {
      badge = 'Featured Concept',
      title,
      description,
      to,
      actionLabel = 'Explore Detail',
      image,
      accent = 'lime', // 'lime' | 'coral'
      className = '',
    },
    ref
  ) => {
    const isCoral = accent === 'coral';

    return (
      <motion.div
        ref={ref}
        whileHover={{ y: -5, transition: { duration: 0.25 } }}
        className={cn(
          'relative rounded-brand overflow-hidden bg-slate-card border p-6 sm:p-8 flex flex-col justify-between shadow-card-depth group',
          isCoral ? 'border-coral/40 hover:border-coral' : 'border-slate hover:border-lime',
          className
        )}
      >
        {/* Background Glow */}
        <div
          className={cn(
            'absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none transition-opacity duration-300',
            isCoral ? 'bg-coral/10 group-hover:bg-coral/20' : 'bg-lime/10 group-hover:bg-lime/20'
          )}
        />

        <div>
          <div className="flex items-center justify-between gap-4 mb-6">
            <Badge variant={isCoral ? 'coral' : 'lime'} size="sm" pulse>
              {badge}
            </Badge>
            <Sparkles
              className={cn('w-4 h-4', isCoral ? 'text-coral' : 'text-lime')}
              aria-hidden="true"
            />
          </div>

          {image && (
            <div className="aspect-video w-full rounded-md overflow-hidden bg-midnight mb-6 border border-slate flex items-center justify-center">
              <CricketImage
                src={image}
                alt={title}
                title={title}
                icon="sparkles"
                aspectRatio="16/9"
                objectFit="contain"
                className="w-full h-full"
                imageClassName="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          )}

          <h3 className="text-2xl font-heading font-black uppercase text-warm-white mb-3 group-hover:text-lime transition-colors">
            {title}
          </h3>

          <p className="text-sm text-muted-text leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-slate">
          <Button
            to={to}
            variant={isCoral ? 'coral' : 'primary'}
            size="sm"
            className="w-full"
            icon={ArrowRight}
          >
            {actionLabel}
          </Button>
        </div>
      </motion.div>
    );
  }
);

HighlightCard.displayName = 'HighlightCard';

HighlightCard.propTypes = {
  badge: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  to: PropTypes.string,
  actionLabel: PropTypes.string,
  image: PropTypes.string,
  accent: PropTypes.oneOf(['lime', 'coral']),
  className: PropTypes.string,
};

export default HighlightCard;
