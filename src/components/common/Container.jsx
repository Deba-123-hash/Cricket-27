import { forwardRef } from 'react';
import { cn } from '../../utils/helpers';

export const Container = forwardRef(
  ({ children, className = '', size = 'xl', ...props }, ref) => {
    const sizeClasses = {
      sm: 'max-w-4xl',
      md: 'max-w-5xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'w-full mx-auto px-4 sm:px-6 lg:px-8',
          sizeClasses[size] || sizeClasses.xl,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
export default Container;
