import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '../../utils/helpers';

export const Breadcrumb = ({ items = [], showHomeIcon = true, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center text-xs font-heading uppercase tracking-wider', className)}>
      <ol className="inline-flex items-center space-x-1.5 sm:space-x-2">
        {/* Home Item */}
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-muted-text hover:text-lime transition-colors"
          >
            {showHomeIcon && <Home className="w-3.5 h-3.5" aria-hidden="true" />}
            <span>Home</span>
          </Link>
        </li>

        {/* Dynamic Items */}
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label || index} className="inline-flex items-center space-x-1.5 sm:space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-border shrink-0" aria-hidden="true" />
              {isLast || !item.to ? (
                <span className="text-lime font-bold" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="text-muted-text hover:text-warm-white transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
