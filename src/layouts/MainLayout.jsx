import { useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/footer/Footer';
import BackToTop from '../components/common/BackToTop';
import PageFallback from '../components/common/PageFallback';

export const MainLayout = () => {
  const { pathname } = useLocation();

  // Instant scroll-to-top on route change to preserve snappy page transitions
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-midnight text-warm-white selection:bg-lime selection:text-midnight font-sans antialiased relative">
      {/* Global Sticky / Scroll-Aware Navbar (h-20) */}
      <Navbar />

      {/* Primary Page Content with safe top padding to prevent navbar overlap */}
      <main className="flex-1 w-full pt-20" id="main-content">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Floating Interactive Back-to-Top Button */}
      <BackToTop />

      {/* Global Comprehensive 4-Column Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
