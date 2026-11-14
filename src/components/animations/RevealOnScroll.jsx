import { motion, useReducedMotion } from 'framer-motion';
import { EASINGS } from '../../utils/animations';

export const RevealOnScroll = ({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'none'
  delay = 0,
  duration = 0.55,
  className = '',
  amount = 0.15,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const directions = {
    up: { y: 28, x: 0 },
    down: { y: -28, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  const offset = shouldReduceMotion ? { x: 0, y: 0 } : (directions[direction] || directions.up);

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
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
      viewport={{ once: true, amount }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
