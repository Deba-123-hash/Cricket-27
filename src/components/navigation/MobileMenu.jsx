import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ShieldAlert } from 'lucide-react';
import { MOBILE_NAV_LINKS } from '../../data/navigation';
import { APP_CONFIG, ROUTES } from '../../utils/constants';
import BrandLogo from '../common/BrandLogo';
import Button from '../common/Button';
import SocialLinks from '../footer/SocialLinks';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { cn } from '../../utils/helpers';

export const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  // Prevent background scrolling & handle Escape key via standard hooks
  useLockBodyScroll(isOpen);
  useEscapeKey(onClose, isOpen);

  // Close whenever location path changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="mobile-nav-drawer" className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Slide-in Drawer Container */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 260 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm sm:max-w-md bg-midnight-light border-l border-slate flex flex-col justify-between overflow-y-auto shadow-2xl p-5 sm:p-6 pb-safe touch-scroll"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Top Bar: Brand Logo & Close Action */}
            <div className="flex items-center justify-between pb-5 sm:pb-6 border-b border-slate">
              <Link to={ROUTES.HOME} onClick={onClose} className="inline-block">
                <BrandLogo variant="horizontal" className="h-8 w-auto" />
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-brand bg-slate-card border border-slate text-muted-text hover:text-warm-white hover:border-lime/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                aria-label="Close navigation drawer"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Navigation Link Stack */}
            <div className="py-6 flex-1">
              <div className="text-[11px] font-heading font-bold uppercase tracking-widest text-muted-text mb-3 px-3">
                Navigation Directory
              </div>

              <nav className="space-y-1" aria-label="Mobile Navigation Links">
                {MOBILE_NAV_LINKS.map((item) => {
                  const isActive =
                    item.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(item.path);

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      className={cn(
                        'flex items-center justify-between px-4 py-3 rounded-brand text-sm uppercase font-heading tracking-wider transition-all duration-150 group',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime',
                        isActive
                          ? 'bg-midnight text-lime font-bold border-l-4 border-lime shadow-inner'
                          : 'text-warm-white hover:text-lime hover:bg-slate-card/60'
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={cn(
                            'w-1.5 h-1.5 rounded-full transition-all',
                            isActive ? 'bg-lime shadow-[0_0_8px_#B7F34A]' : 'bg-slate-light group-hover:bg-lime/60'
                          )}
                        />
                        <span>{item.label}</span>
                      </div>

                      {item.badge && (
                        <span
                          className={cn(
                            'text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase tracking-wider',
                            isActive
                              ? 'bg-lime text-midnight'
                              : 'bg-slate text-muted-text border border-slate-light group-hover:border-lime/40 group-hover:text-lime'
                          )}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions & Community Channels */}
            <div className="pt-6 border-t border-slate space-y-5">
              {/* Primary Features CTA */}
              <Button
                to={ROUTES.FEATURES}
                onClick={onClose}
                variant="primary"
                size="md"
                className="w-full justify-center shadow-lime-glow font-heading uppercase tracking-wider"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore Features
              </Button>

              {/* Social Channels Stack */}
              <div className="space-y-2">
                <div className="text-[10px] font-heading font-bold uppercase tracking-widest text-muted-text px-1">
                  Community Channels
                </div>
                <SocialLinks className="justify-center" />
              </div>

              {/* Disclaimer Notice */}
              <div className="p-3 rounded bg-midnight border border-slate text-[11px] text-muted-text flex items-start gap-2 leading-relaxed">
                <ShieldAlert className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                <span>
                  CRICKET27 is a promotional gaming brand web portal presenting game concepts.
                </span>
              </div>

              {/* Legal Copyright */}
              <p className="text-center text-xs text-muted-text">
                &copy; {APP_CONFIG.YEAR} {APP_CONFIG.BRAND_NAME}. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
