import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/animations';

export const StaggerContainer = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.1,
  className = '',
}) => {
  return (
    <motion.div
      variants={staggerContainer(staggerDelay, delayChildren)}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
