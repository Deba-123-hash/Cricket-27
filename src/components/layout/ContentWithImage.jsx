import { CheckCircle2 } from 'lucide-react';
import { cn } from '../../utils/helpers';
import SplitLayout from './SplitLayout';
import Badge from '../common/Badge';
import ResponsiveImage from '../media/ResponsiveImage';

export const ContentWithImage = ({
  eyebrow,
  title,
  highlightText,
  description,
  bullets = [],
  action,
  imageSrc,
  imageAlt,
  aspectRatio = '4/3',
  reversed = false,
  className = '',
}) => {
  const textContent = (
    <div className="space-y-6">
      {eyebrow && (
        <Badge variant="lime" size="md" pulse>
          {eyebrow}
        </Badge>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase text-warm-white leading-tight">
        {title}{' '}
        {highlightText && (
          <span className="text-gradient-lime font-heading">{highlightText}</span>
        )}
      </h2>

      {description && (
        <p className="lead text-muted-text text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}

      {bullets.length > 0 && (
        <ul className="space-y-3 pt-2">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-warm-white">
              <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" aria-hidden="true" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {action && <div className="pt-4">{action}</div>}
    </div>
  );

  const imageContent = (
    <div className="relative rounded-brand overflow-hidden bg-slate-card border border-slate p-3 sm:p-4 shadow-card-depth">
      <ResponsiveImage
        src={imageSrc}
        alt={imageAlt || title}
        aspectRatio={aspectRatio}
        objectFit="contain"
        className="rounded-md bg-midnight border border-slate/60"
      />
    </div>
  );

  return (
    <div className={cn('w-full', className)}>
      <SplitLayout
        left={textContent}
        right={imageContent}
        ratio="50/50"
        gap="lg"
        reversed={reversed}
      />
    </div>
  );
};

export default ContentWithImage;
