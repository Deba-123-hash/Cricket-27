import PropTypes from 'prop-types';
import CricketImage from '../common/CricketImage';

export const ResponsiveImage = ({
  src,
  alt = 'CRICKET27 visual asset',
  aspectRatio = '16/9',
  objectFit = 'contain',
  className = '',
  imageClassName = '',
  fallbackSrc = '/assets/branding/logo/logo-symbol-mark.svg',
  loading = 'lazy',
  ...props
}) => {
  return (
    <CricketImage
      src={src}
      fallbackSrc={fallbackSrc}
      alt={alt}
      aspectRatio={aspectRatio}
      objectFit={objectFit}
      className={className}
      imageClassName={imageClassName}
      loading={loading}
      icon="activity"
      {...props}
    />
  );
};

ResponsiveImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  aspectRatio: PropTypes.string,
  objectFit: PropTypes.oneOf(['cover', 'contain', 'fill', 'none', 'scale-down']),
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  fallbackSrc: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
};

export default ResponsiveImage;
