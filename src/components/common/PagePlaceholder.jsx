import { Link } from 'react-router-dom';
import { NAV_ITEMS, APP_CONFIG } from '../../utils/constants';

export const PagePlaceholder = ({
  title,
  routePath,
  description = 'Frontend foundation route configured and verified for Phase 01.',
}) => {
  return (
    <section className="py-20 sm:py-28 flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6">
        {/* Phase 01 Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-heading font-semibold uppercase tracking-widest text-lime bg-lime/10 border border-lime/30 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
          <span>{APP_CONFIG.PHASE}</span>
        </div>

        {/* Page Title */}
        <h1 className="text-4xl sm:text-6xl font-heading font-bold text-warm-white tracking-wide uppercase mb-4">
          {title}
        </h1>

        {/* Route Indicator */}
        <p className="font-mono text-xs sm:text-sm text-lime bg-slate-card px-4 py-1.5 rounded-md inline-block border border-slate mb-6">
          Active Route: <span className="text-warm-white">{routePath}</span>
        </p>

        {/* Description */}
        <p className="lead text-muted-text max-w-xl mx-auto mb-10">
          {description}
        </p>

        {/* Minimal Navigation Test Bar */}
        <div className="p-6 rounded-brand bg-slate-card border border-slate text-left">
          <h2 className="text-xs font-heading font-bold uppercase tracking-wider text-muted-text mb-3">
            Minimal Route Navigation Test
          </h2>
          <div className="flex flex-wrap gap-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-xs font-heading uppercase tracking-wider px-3 py-1.5 rounded bg-midnight hover:bg-lime hover:text-midnight text-warm-white border border-slate transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PagePlaceholder;
