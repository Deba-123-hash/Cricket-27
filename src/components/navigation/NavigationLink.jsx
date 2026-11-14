import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

export const NavigationLink = ({
  to,
  children,
  onClick,
  className = '',
  badge,
  end = false,
  showUnderline = true,
}) => {
  // If linking to root '/', default end to true to prevent greedy match
  const isExactRoot = to === '/' ? true : end;

  return (
    <NavLink
      to={to}
      end={isExactRoot}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          'relative px-2.5 xl:px-3.5 py-1.5 xl:py-2 text-xs xl:text-sm uppercase font-heading tracking-wider transition-all duration-200 rounded select-none inline-flex items-center gap-1.5 xl:gap-2 group',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-midnight',
          isActive
            ? 'text-lime font-bold'
            : 'text-muted-text hover:text-warm-white hover:bg-white/5',
          className
        )
      }
    >
      {({ isActive }) => (
        <>
          <span className="relative z-10 transition-transform duration-150 group-hover:translate-y-[-1px]">
            {children}
          </span>

          {badge && (
            <span
              className={cn(
                'text-[10px] font-mono px-1.5 py-0.2 rounded font-bold uppercase tracking-wider',
                isActive
                  ? 'bg-lime text-midnight'
                  : 'bg-slate-card text-muted-text border border-slate group-hover:border-lime/40'
              )}
            >
              {badge}
            </span>
          )}

          {isActive && showUnderline && (
            <motion.span
              className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-lime rounded-full shadow-[0_0_8px_#B7F34A]"
              layoutId="desktopNavUnderline"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </>
      )}
    </NavLink>
  );
};

export default NavigationLink;
