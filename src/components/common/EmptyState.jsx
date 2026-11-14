import { Inbox } from 'lucide-react';
import { cn } from '../../utils/helpers';
import Button from './Button';

export const EmptyState = ({
  icon: Icon = Inbox,
  title = 'No Records Found',
  description = 'There is currently no data or media matching your selection.',
  actionLabel,
  onAction,
  actionTo,
  className = '',
}) => {
  return (
    <div
      className={cn(
        'p-10 sm:p-14 rounded-brand bg-slate-card border border-slate text-center flex flex-col items-center justify-center max-w-lg mx-auto space-y-4 shadow-card-depth',
        className
      )}
    >
      <div className="w-14 h-14 rounded-full bg-midnight border border-slate flex items-center justify-center text-muted-text">
        <Icon className="w-7 h-7" aria-hidden="true" />
      </div>

      <div className="space-y-1.5">
        <h3 className="text-xl font-heading font-bold uppercase text-warm-white tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-muted-text leading-relaxed max-w-sm mx-auto">
          {description}
        </p>
      </div>

      {(actionLabel && (onAction || actionTo)) && (
        <div className="pt-2">
          {actionTo ? (
            <Button to={actionTo} variant="primary" size="sm">
              {actionLabel}
            </Button>
          ) : (
            <Button onClick={onAction} variant="primary" size="sm">
              {actionLabel}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default EmptyState;
