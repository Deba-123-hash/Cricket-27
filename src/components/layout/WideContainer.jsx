import { cn } from '../../utils/helpers';

export const WideContainer = ({ children, className = '', ...props }) => {
  return (
    <div
      className={cn('w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default WideContainer;
