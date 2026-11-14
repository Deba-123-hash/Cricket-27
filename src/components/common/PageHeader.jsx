import { cn } from '../../utils/helpers';
import Container from './Container';
import Badge from './Badge';
import Breadcrumb from './Breadcrumb';

export const PageHeader = ({
  eyebrow,
  title,
  highlightText,
  subtitle,
  breadcrumbs = [],
  action,
  className = '',
}) => {
  return (
    <div className={cn('relative py-12 sm:py-16 border-b border-slate bg-midnight-light/50', className)}>
      <Container size="xl">
        <div className="flex flex-col space-y-6">
          {breadcrumbs.length > 0 && (
            <div className="pb-2">
              <Breadcrumb items={breadcrumbs} />
            </div>
          )}

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              {eyebrow && (
                <Badge variant="lime" size="md" pulse>
                  {eyebrow}
                </Badge>
              )}

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black tracking-wide uppercase text-warm-white leading-tight">
                {title}{' '}
                {highlightText && (
                  <span className="text-gradient-lime font-heading">{highlightText}</span>
                )}
              </h1>

              {subtitle && (
                <p className="lead text-muted-text max-w-2xl text-sm sm:text-base leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            {action && <div className="shrink-0">{action}</div>}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PageHeader;
