import { motion, useReducedMotion } from 'framer-motion';
import { EASINGS } from '../../utils/animations';

export const FadeIn = ({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  delay = 0,
  duration = 0.5,
  distance = 24,
  className = '',
  viewport = { once: true, margin: '-50px' },
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getOffsets = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offsets = getOffsets();

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.2 : duration,
          delay: shouldReduceMotion ? 0 : delay,
          ease: EASINGS.sportSmooth,
        },
      }}
      viewport={viewport}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
