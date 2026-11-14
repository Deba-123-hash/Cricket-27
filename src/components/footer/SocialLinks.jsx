import { MessageSquare, Twitter, Youtube, Instagram, Facebook, Share2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../../data/socialLinks';

const iconMap = {
  MessageSquare,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
};

export const SocialLinks = ({ className = '', iconClassName = 'w-4 h-4' }) => {
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {SOCIAL_LINKS.map((item) => {
        const IconComponent = iconMap[item.icon] || Share2;
        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Official ${item.name} Channel (Placeholder)`}
            title={`${item.name}: ${item.description}`}
            className="p-2.5 rounded-brand bg-slate-card/80 border border-slate text-muted-text hover:text-lime hover:border-lime hover:shadow-lime-glow transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-midnight active:scale-95"
          >
            <IconComponent className={iconClassName} aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
