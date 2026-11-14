import { motion } from 'framer-motion';
import { ExternalLink, Users } from 'lucide-react';
import { cn } from '../../utils/helpers';
import Button from '../common/Button';

export const CommunityCard = ({
  icon: Icon = Users,
  platform,
  handle,
  members,
  description,
  url,
  actionLabel = 'Connect',
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        'rounded-brand bg-slate-card border border-slate hover:border-lime/60 p-6 flex flex-col justify-between shadow-card-depth transition-all duration-300',
        className
      )}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="w-11 h-11 rounded-lg bg-midnight border border-slate flex items-center justify-center text-lime shrink-0">
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
          {members && (
            <span className="font-mono text-xs font-bold text-lime px-2.5 py-1 rounded bg-midnight border border-slate">
              {members}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-xl font-heading font-bold uppercase text-warm-white">
            {platform}
          </h3>
          {handle && (
            <span className="text-xs font-mono text-muted-text block mt-0.5">
              {handle}
            </span>
          )}
        </div>

        <p className="text-xs text-muted-text leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate">
        <Button
          href={url}
          variant="outline"
          size="sm"
          className="w-full"
          icon={ExternalLink}
        >
          {actionLabel}
        </Button>
      </div>
    </motion.div>
  );
};

export default CommunityCard;
