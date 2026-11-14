import { Menu, X } from 'lucide-react';
import { cn } from '../../utils/helpers';

export const MobileMenuButton = ({
  isOpen = false,
  onClick,
  className = '',
  'aria-label': ariaLabel,
  'aria-controls': ariaControls = 'mobile-nav-drawer',
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={ariaControls}
      aria-label={ariaLabel || (isOpen ? 'Close mobile menu' : 'Open mobile menu')}
      className={cn(
        'min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-brand text-muted-text hover:text-warm-white hover:bg-slate-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-midnight transition-colors lg:hidden active:scale-95 select-none',
        isOpen && 'bg-slate-card text-warm-white',
        className
      )}
    >
      {isOpen ? (
        <X className="w-6 h-6 shrink-0" aria-hidden="true" />
      ) : (
        <Menu className="w-6 h-6 shrink-0" aria-hidden="true" />
      )}
    </button>
  );
};

export default MobileMenuButton;
