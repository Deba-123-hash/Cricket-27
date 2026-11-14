import { useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

export const Tabs = ({
  tabs = [],
  activeTab,
  onChange,
  className = '',
  tabClassName = '',
  layoutId = 'activeTabIndicator',
  size = 'md',
  scrollable = true,
}) => {
  const tabListRef = useRef(null);

  const handleKeyDown = (e, index) => {
    let nextIndex = null;
    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      const nextTab = tabs[nextIndex];
      const val = nextTab.id ?? nextTab.value ?? nextTab.label;
      onChange?.(val);
      // Focus the next tab element
      const buttons = tabListRef.current?.querySelectorAll('[role="tab"]');
      buttons?.[nextIndex]?.focus();
    }
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs min-h-[36px]',
    md: 'px-4 py-2 sm:px-4.5 sm:py-2.5 text-xs sm:text-sm min-h-[44px]',
    lg: 'px-6 py-3 text-sm sm:text-base min-h-[48px]',
  };

  return (
    <div
      ref={tabListRef}
      role="tablist"
      aria-label="Content Tabs"
      className={cn(
        'flex items-center gap-2 p-1 rounded-brand bg-midnight-light/60 border border-slate/60',
        scrollable && 'overflow-x-auto no-scrollbar',
        className
      )}
    >
      {tabs.map((tab, idx) => {
        const tabValue = tab.id ?? tab.value ?? tab.label;
        const isActive = activeTab === tabValue;
        const Icon = tab.icon;

        return (
          <button
            key={tabValue}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange?.(tabValue)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={cn(
              'relative rounded-brand font-heading font-bold uppercase tracking-wider transition-colors duration-200 select-none shrink-0 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime z-10',
              sizeClasses[size] || sizeClasses.md,
              isActive
                ? 'text-midnight font-black'
                : 'text-warm-white/75 hover:text-warm-white hover:bg-slate-card/40',
              tabClassName
            )}
          >
            {/* Smooth animated active pill */}
            {isActive && (
              <motion.div
                layoutId={layoutId}
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                className="absolute inset-0 bg-lime rounded-brand shadow-lime-glow z-[-1]"
              />
            )}

            {Icon && <Icon className={cn('w-4 h-4', isActive ? 'text-midnight' : 'text-lime')} />}

            <span>{tab.label}</span>

            {tab.count !== undefined && (
              <span
                className={cn(
                  'text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold transition-colors',
                  isActive
                    ? 'bg-midnight text-lime'
                    : 'bg-midnight text-muted-text border border-slate/60'
                )}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
