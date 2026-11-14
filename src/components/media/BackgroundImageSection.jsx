import PropTypes from 'prop-types';
import { cn } from '../../utils/helpers';
import Container from '../common/Container';
import HeroBackground from '../common/HeroBackground';

export const BackgroundImageSection = ({
  backgroundImage,
  children,
  containerSize = 'xl',
  overlayOpacity = '90', // e.g. 75, 85, 90
  className = '',
}) => {
  return (
    <section className={cn('relative py-20 sm:py-28 overflow-hidden bg-midnight', className)}>
      {/* Background Graphic */}
      {backgroundImage && (
        <HeroBackground
          src={backgroundImage}
          alt=""
          loading="lazy"
          className="z-0"
        >
          <div
            className={cn(
              'absolute inset-0 bg-midnight pointer-events-none',
              overlayOpacity === '75' && 'bg-opacity-75',
              overlayOpacity === '85' && 'bg-opacity-85',
              overlayOpacity === '90' && 'bg-opacity-90'
            )}
          />
        </HeroBackground>
      )}

      {/* Foreground Content */}
      <div className="relative z-10">
        <Container size={containerSize}>{children}</Container>
      </div>
    </section>
  );
};

BackgroundImageSection.propTypes = {
  backgroundImage: PropTypes.string,
  children: PropTypes.node,
  containerSize: PropTypes.string,
  overlayOpacity: PropTypes.oneOf(['75', '85', '90', 75, 85, 90, '']),
  className: PropTypes.string,
};

export default BackgroundImageSection;
