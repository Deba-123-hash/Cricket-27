import { AlertTriangle, RefreshCw } from 'lucide-react';
import { cn } from '../../utils/helpers';
import Button from './Button';

export const ErrorState = ({
  title = 'System Transmission Error',
  message = 'An unexpected error occurred while loading this section. Please try again.',
  onRetry,
  retryLabel = 'Try Again',
  className = '',
}) => {
  return (
    <div
      role="alert"
      className={cn(
        'p-8 sm:p-12 rounded-brand bg-slate-card border border-coral/40 text-center flex flex-col items-center justify-center max-w-lg mx-auto space-y-4 shadow-card-depth',
        className
      )}
    >
      <div className="w-14 h-14 rounded-full bg-coral/10 text-coral flex items-center justify-center border border-coral/30">
        <AlertTriangle className="w-7 h-7" aria-hidden="true" />
      </div>

      <div className="space-y-1.5">
        <h3 className="text-xl font-heading font-bold uppercase text-warm-white tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-muted-text leading-relaxed max-w-sm mx-auto">
          {message}
        </p>
      </div>

      {onRetry && (
        <div className="pt-2">
          <Button onClick={onRetry} variant="coral" size="sm" icon={RefreshCw}>
            {retryLabel}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ErrorState;
