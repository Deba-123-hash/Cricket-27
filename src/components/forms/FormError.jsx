import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

/**
 * Reusable FormError message component with accessibility support.
 */
export const FormError = forwardRef(({ message, id, className = '' }, ref) => {
  if (!message) return null;

  return (
    <motion.div
      ref={ref}
      id={id}
      role="alert"
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.15 }}
      className={cn('flex items-center gap-1.5 text-xs text-coral font-medium pt-1', className)}
    >
      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </motion.div>
  );
});

FormError.displayName = 'FormError';

FormError.propTypes = {
  message: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default FormError;
