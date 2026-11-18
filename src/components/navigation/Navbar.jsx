import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Container from '../common/Container';
import Button from '../common/Button';
import BrandLogo from '../common/BrandLogo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';
import { cn } from '../../utils/helpers';
import { useUI } from '../../hooks/useUI';

export const Navbar = () => {
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    isNavScrolled,
    setIsNavScrolled,
  } = useUI();

  const location = useLocation();
  const isHome = location.pathname === '/';

  // Track scroll position with optimized listener
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsNavScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setIsNavScrolled]);

  // Close mobile drawer on route change
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname, closeMobileMenu]);

  return (
    <>
      {/* Accessible Skip Navigation Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-lime focus:text-midnight focus:font-heading focus:font-bold focus:rounded-brand focus:shadow-lime-glow"
      >
        Skip to main content
      </a>

      {/* Main Global Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 h-20 transition-all duration-300 flex items-center',
          isNavScrolled || !isHome
            ? 'bg-midnight/95 backdrop-blur-md border-b border-slate shadow-card-depth'
            : 'bg-midnight/70 backdrop-blur-sm border-b border-white/5'
        )}
      >
        <Container size="xl">
          <div className="flex items-center justify-between gap-4">
            {/* Left: CRICKET27 Brand Logo */}
            <div className="flex items-center">
              <Link
                to={ROUTES.HOME}
                className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-midnight rounded py-1"
                aria-label="CRICKET27 Homepage — Beyond The Boundary"
              >
                <BrandLogo
                  variant="horizontal"
                  className="h-8 sm:h-9 md:h-10 w-auto group-hover:scale-[1.02] transition-transform duration-200"
                />
              </Link>
            </div>

            {/* Center: Desktop Navigation Bar */}
            <DesktopMenu />

            {/* Right: Explore Game CTA Action & Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Desktop About CTA Button */}
              <Button
                to={ROUTES.ABOUT}
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex shadow-lime-glow font-heading uppercase tracking-wider"
                icon={ArrowRight}
                iconPosition="right"
              >
                About Us
              </Button>

              {/* Mobile Hamburger Toggle Button */}
              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? 'Close navigation drawer' : 'Open navigation drawer'}
              />
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Slide-in Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </>
  );
};

export default Navbar;
