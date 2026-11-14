import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';
import Badge from '../common/Badge';

export const InformationCard = ({
  icon: Icon,
  badge,
  title,
  subtitle,
  items = [],
  footer,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        'rounded-brand bg-slate-card border border-slate hover:border-lime/60 p-6 sm:p-7 flex flex-col justify-between shadow-card-depth transition-all duration-300',
        className
      )}
    >
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between gap-4 mb-4">
          {Icon && (
            <div className="w-10 h-10 rounded-lg bg-midnight border border-slate flex items-center justify-center text-lime shrink-0">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
          )}
          {badge && <Badge variant="lime" size="sm">{badge}</Badge>}
        </div>

        <h3 className="text-xl font-heading font-bold uppercase text-warm-white mb-1">
          {title}
        </h3>

        {subtitle && (
          <p className="text-xs text-muted-text mb-4 font-normal">
            {subtitle}
          </p>
        )}

        {/* Structured Spec/Info Items */}
        {items.length > 0 && (
          <dl className="mt-4 space-y-2.5 border-t border-slate/60 pt-4">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs py-1">
                <dt className="text-muted-text font-normal">{item.label}</dt>
                <dd className="font-mono font-bold text-warm-white">{item.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      {footer && <div className="mt-6 pt-4 border-t border-slate">{footer}</div>}
    </motion.div>
  );
};

export default InformationCard;
