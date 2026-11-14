import { cn } from '../../utils/helpers';

const variantMap = {
  lead: 'lead text-muted-text text-base sm:text-lg leading-relaxed font-normal',
  body: 'text-sm sm:text-base text-warm-white leading-relaxed',
  small: 'text-xs sm:text-sm text-warm-white leading-normal',
  caption: 'text-xs uppercase font-heading tracking-wider text-muted-text',
  muted: 'text-xs sm:text-sm text-muted-text leading-relaxed',
  mono: 'font-mono text-xs sm:text-sm text-lime tracking-wide',
};

export const Text = ({
  as: Component = 'p',
  variant = 'body',
  children,
  className = '',
  ...props
}) => {
  return (
    <Component className={cn(variantMap[variant] || variantMap.body, className)} {...props}>
      {children}
    </Component>
  );
};

export default Text;
