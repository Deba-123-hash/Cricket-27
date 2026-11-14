import { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ROUTES, APP_CONFIG } from '../utils/constants';
import Container from '../components/common/Container';
import BrandLogo from '../components/common/BrandLogo';
import BackToTop from '../components/common/BackToTop';

export const MinimalLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-midnight text-warm-white font-sans antialiased selection:bg-lime selection:text-midnight">
      {/* Minimal Brand Header */}
      <header className="py-4 border-b border-slate bg-midnight-light/80 backdrop-blur-md sticky top-0 z-40">
        <Container size="xl">
          <div className="flex items-center justify-between">
            <Link
              to={ROUTES.HOME}
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded"
              aria-label="CRICKET27 Homepage"
            >
              <BrandLogo variant="horizontal" className="h-8 w-auto" />
            </Link>

            <Link
              to={ROUTES.HOME}
              className="inline-flex items-center gap-1.5 text-xs uppercase font-heading font-bold tracking-wider text-muted-text hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded px-2.5 py-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Return to Main Site</span>
            </Link>
          </div>
        </Container>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full py-12" id="main-content">
        <Outlet />
      </main>

      <BackToTop />

      {/* Minimal Footer */}
      <footer className="py-6 border-t border-slate text-center text-xs text-muted-text bg-midnight-dark">
        <p>&copy; {APP_CONFIG.YEAR} {APP_CONFIG.BRAND_NAME}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MinimalLayout;
