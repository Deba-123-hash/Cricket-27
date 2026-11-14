import { cn } from '../../utils/helpers';

export const NarrowContainer = ({ children, className = '', ...props }) => {
  return (
    <div
      className={cn('w-full max-w-4xl mx-auto px-4 sm:px-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default NarrowContainer;
