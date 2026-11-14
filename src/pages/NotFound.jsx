import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageTransition from '../components/animations/PageTransition';
import SEO from '../components/common/SEO';
import { ROUTES } from '../utils/constants';

export const NotFound = () => {
  usePageTitle('404 — Page Not Found');

  return (
    <PageTransition>
      <SEO
        title="404 — Page Not Found | CRICKET27"
        description="The requested trajectory does not exist or has pitched outside the boundary line. Return to CRICKET27 homepage."
      />
      <section className="py-24 sm:py-36 flex flex-col items-center justify-center text-center">
        <div className="w-full max-w-xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-heading font-semibold uppercase tracking-widest text-coral bg-coral/10 border border-coral/30 rounded-full">
            <span className="w-2 h-2 rounded-full bg-coral animate-ping" />
            <span>Error 404 &bull; Out of Crease</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-heading font-black text-warm-white tracking-wider uppercase">
            404
          </h1>

          <p className="text-lg text-muted-text max-w-md mx-auto">
            The requested trajectory does not exist or has pitched outside the boundary line.
          </p>

          <div className="pt-4">
            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-brand bg-lime text-midnight font-heading font-bold uppercase tracking-wider hover:bg-lime-hover shadow-lime-glow transition-all"
            >
              &larr; Return to CRICKET27 Home
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;
