import { motion, useReducedMotion } from 'framer-motion';
import { EASINGS } from '../../utils/animations';

export const TextReveal = ({
  text,
  as: Component = 'h2',
  className = '',
  wordClassName = '',
  delay = 0,
  staggerDelay = 0.04,
  highlightWord = '',
  highlightClassName = 'text-lime',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (typeof text !== 'string') {
    return <Component className={className}>{text}</Component>;
  }

  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <Component className={className}>{text}</Component>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 16, filter: 'blur(3px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.45,
        ease: EASINGS.sportSmooth,
      },
    },
  };

  return (
    <Component className={className} aria-label={text}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="inline-flex flex-wrap gap-x-[0.28em]"
        aria-hidden="true"
      >
        {words.map((word, idx) => {
          const isHighlighted =
            highlightWord &&
            word.toLowerCase().includes(highlightWord.toLowerCase());

          return (
            <motion.span
              key={`${word}-${idx}`}
              variants={wordVariants}
              className={`inline-block ${
                isHighlighted ? highlightClassName : wordClassName
              }`}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.span>
    </Component>
  );
};

export default TextReveal;
