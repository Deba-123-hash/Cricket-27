/**
 * CRICKET27 — Central Motion & Interaction Design System
 * Precision Framer Motion Presets & Easing Curves for 2D Sports & Esports
 */

// Custom cubic bezier easing curves
export const EASINGS = {
  sportSmooth: [0.16, 1, 0.3, 1], // Confident, responsive sports motion
  cinematic: [0.22, 1, 0.36, 1], // Smooth filmic deceleration
  dramatic: [0.25, 0.1, 0.25, 1], // Page transitions
  sharp: [0.4, 0, 0.2, 1], // Quick interactive clicks
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
};

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASINGS.sportSmooth },
  },
  exit: { opacity: 0, y: 16, transition: { duration: 0.25 } },
};
// Backward compatibility alias
export const fadeInUp = fadeUp;

export const fadeDown = {
  initial: { opacity: 0, y: -24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASINGS.sportSmooth },
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
};
// Backward compatibility alias
export const fadeInDown = fadeDown;

export const slideLeft = {
  initial: { opacity: 0, x: 32 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASINGS.sportSmooth },
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.25 } },
};
// Backward compatibility alias
export const slideInRight = slideLeft;

export const slideRight = {
  initial: { opacity: 0, x: -32 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASINGS.sportSmooth },
  },
  exit: { opacity: 0, x: -20, transition: { duration: 0.25 } },
};
// Backward compatibility alias
export const slideInLeft = slideRight;

export const scaleIn = {
  initial: { opacity: 0, scale: 0.94 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: EASINGS.sportSmooth },
  },
  exit: { opacity: 0, scale: 0.96, transition: { duration: 0.25 } },
};

export const imageReveal = {
  initial: { opacity: 0, scale: 1.06 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASINGS.cinematic },
  },
};

export const clipPathReveal = {
  initial: { clipPath: 'inset(100% 0% 0% 0%)', opacity: 0 },
  animate: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: { duration: 0.7, ease: EASINGS.cinematic },
  },
};

/**
 * Flexible staggerContainer supporting both function invocation and static variant
 */
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.05) => {
  if (typeof staggerChildren === 'object' && staggerChildren !== null) {
    // If passed as static object
    return {
      initial: {},
      animate: {
        transition: {
          staggerChildren: 0.08,
          delayChildren: 0.05,
        },
      },
    };
  }
  return {
    initial: {},
    animate: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASINGS.sportSmooth },
  },
};

export const textReveal = {
  initial: { opacity: 0, y: '100%' },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASINGS.cinematic },
  },
};

export const wordReveal = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASINGS.sportSmooth },
  },
};

export const cardReveal = {
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASINGS.sportSmooth },
  },
};

export const hoverScale = {
  rest: { scale: 1, transition: { duration: 0.25, ease: 'easeOut' } },
  hover: { scale: 1.04, transition: { duration: 0.25, ease: 'easeOut' } },
};

export const hoverLift = {
  rest: { y: 0, transition: { duration: 0.2, ease: 'easeOut' } },
  hover: { y: -5, transition: { duration: 0.2, ease: 'easeOut' } },
};

export const buttonPress = {
  scale: 0.97,
  transition: { duration: 0.1 },
};

export const pageTransitionVariants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: EASINGS.dramatic },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
};
export const pageTransition = pageTransitionVariants;

export const modalVariants = {
  initial: { opacity: 0, scale: 0.94, y: 16 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: EASINGS.sportSmooth },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 10,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
};

export default {
  EASINGS,
  fadeIn,
  fadeUp,
  fadeInUp,
  fadeDown,
  fadeInDown,
  slideLeft,
  slideInRight,
  slideRight,
  slideInLeft,
  scaleIn,
  imageReveal,
  clipPathReveal,
  staggerContainer,
  staggerItem,
  textReveal,
  wordReveal,
  cardReveal,
  hoverScale,
  hoverLift,
  buttonPress,
  pageTransition,
  pageTransitionVariants,
  modalVariants,
};
