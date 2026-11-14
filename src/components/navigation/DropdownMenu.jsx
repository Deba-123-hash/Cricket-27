import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { cn } from '../../utils/helpers';

export const DropdownMenu = ({
  triggerLabel = 'Menu',
  items = [],
  align = 'left',
  className = '',
  triggerTo,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();

  // Check if any child item matches current route
  const isAnyChildActive = items.some(
    (item) => item.to && location.pathname === item.to
  );

  // Close on outside click & Escape key using unified hooks
  useClickOutside(containerRef, () => setIsOpen(false), isOpen);
  useEscapeKey(() => setIsOpen(false), isOpen);

  // Close on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div
      ref={containerRef}
      className={cn('relative inline-block text-left', className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="inline-flex items-center">
        {triggerTo ? (
          <Link
            to={triggerTo}
            className={cn(
              'px-2 xl:px-2.5 py-1.5 xl:py-2 text-xs xl:text-sm uppercase font-heading tracking-wider transition-colors rounded select-none',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-midnight',
              isAnyChildActive || location.pathname === triggerTo
                ? 'text-lime font-bold'
                : 'text-muted-text hover:text-warm-white'
            )}
          >
            {triggerLabel}
          </Link>
        ) : (
          <span
            className={cn(
              'px-2 xl:px-2.5 py-1.5 xl:py-2 text-xs xl:text-sm uppercase font-heading tracking-wider transition-colors rounded select-none cursor-pointer',
              isAnyChildActive
                ? 'text-lime font-bold'
                : 'text-muted-text hover:text-warm-white'
            )}
          >
            {triggerLabel}
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label={`Toggle ${triggerLabel} menu`}
          className="p-1 text-muted-text hover:text-warm-white rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
        >
          <ChevronDown
            className={cn(
              'w-3.5 h-3.5 transition-transform duration-200',
              isOpen && 'rotate-180 text-lime'
            )}
            aria-hidden="true"
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={cn(
              'absolute z-50 mt-1 w-64 rounded-brand bg-slate-card/95 backdrop-blur-md border border-slate shadow-card-depth p-1.5 focus:outline-none ring-1 ring-lime/20',
              align === 'right' ? 'right-0' : 'left-0'
            )}
            role="menu"
            aria-orientation="vertical"
          >
            <div className="px-3 py-1.5 border-b border-slate/60 text-[10px] font-heading font-bold uppercase tracking-widest text-muted-text flex items-center justify-between">
              <span>{triggerLabel} Navigation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            </div>

            <div className="py-1 space-y-0.5">
              {items.map((item, index) => {
                const isActive = item.to && location.pathname === item.to;

                if (item.to) {
                  return (
                    <Link
                      key={item.label || index}
                      to={item.to}
                      role="menuitem"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'w-full text-left px-3 py-2.5 text-xs font-heading uppercase tracking-wider rounded transition-all flex flex-col gap-0.5 group',
                        isActive
                          ? 'bg-midnight text-lime font-bold border-l-2 border-lime'
                          : 'text-warm-white hover:text-lime hover:bg-midnight/80'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        {item.badge && (
                          <span
                            className={cn(
                              'text-[10px] font-mono px-1.5 py-0.5 rounded font-bold',
                              isActive
                                ? 'bg-lime text-midnight'
                                : 'bg-slate text-lime border border-lime/30'
                            )}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <span className="text-[11px] font-sans lowercase text-muted-text group-hover:text-warm-white/70 tracking-normal normal-case">
                          {item.description}
                        </span>
                      )}
                    </Link>
                  );
                }

                return (
                  <button
                    key={item.label || index}
                    type="button"
                    onClick={() => {
                      item.onClick?.();
                      setIsOpen(false);
                    }}
                    role="menuitem"
                    className="w-full text-left px-3 py-2 text-xs font-heading uppercase tracking-wider text-muted-text hover:text-warm-white hover:bg-midnight rounded transition-colors flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-mono text-lime bg-lime/10 px-1.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
