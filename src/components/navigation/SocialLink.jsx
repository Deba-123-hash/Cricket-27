import { cn } from '../../utils/helpers';

export const SocialLink = ({
  href,
  icon: Icon,
  name,
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'p-2 text-xs',
    md: 'p-2.5 text-sm',
    lg: 'p-3 text-base',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Follow CRICKET27 on ${name}`}
      className={cn(
        'rounded-brand bg-slate-card border border-slate text-muted-text hover:text-lime hover:border-lime hover:shadow-lime-glow transition-all duration-200 inline-flex items-center justify-center focus-visible:outline-lime',
        sizeMap[size] || sizeMap.md,
        className
      )}
    >
      {Icon && <Icon className="w-5 h-5 shrink-0" aria-hidden="true" />}
      <span className="sr-only">{name}</span>
    </a>
  );
};

export default SocialLink;
