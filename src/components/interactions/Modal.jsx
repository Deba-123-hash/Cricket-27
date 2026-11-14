import { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { cn } from '../../utils/helpers';

const sizeMap = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-6xl',
};

export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  closeOnBackdrop = true,
  closeOnEscape = true,
  showCloseButton = true,
  className = '',
}) => {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  useEscapeKey(onClose, isOpen && closeOnEscape);
  useLockBodyScroll(isOpen);

  // Focus trap & restoration
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      // Focus the modal or the first interactive element
      modalRef.current?.focus();
    } else if (previousActiveElement.current) {
      previousActiveElement.current.focus?.();
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          aria-describedby={description ? 'modal-description' : undefined}
        >
          {/* Backdrop Scrim */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeOnBackdrop ? onClose : undefined}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            ref={modalRef}
            tabIndex={-1}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className={cn(
              'relative z-10 w-full rounded-brand-xl bg-midnight-light border border-slate shadow-2xl p-5 sm:p-7 md:p-8 my-auto max-h-[92vh] overflow-y-auto focus:outline-none ring-1 ring-lime/20',
              sizeMap[size] || sizeMap.md,
              className
            )}
          >
            {/* Header */}
            {(title || showCloseButton) && (
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate/60 mb-5">
                <div>
                  {title && (
                    <h3
                      id="modal-title"
                      className="text-xl sm:text-2xl font-heading font-black uppercase text-warm-white tracking-wide"
                    >
                      {title}
                    </h3>
                  )}
                  {description && (
                    <p
                      id="modal-description"
                      className="text-xs sm:text-sm text-muted-text font-sans mt-1 leading-relaxed"
                    >
                      {description}
                    </p>
                  )}
                </div>

                {showCloseButton && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-brand bg-slate-card border border-slate text-muted-text hover:text-warm-white hover:border-lime/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime shrink-0"
                    aria-label="Close dialog"
                  >
                    <X className="w-4 h-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            )}

            {/* Content Body */}
            <div className="text-sm sm:text-base text-warm-white/85 font-sans leading-relaxed">
              {children}
            </div>

            {/* Footer */}
            {footer && (
              <div className="pt-5 mt-6 border-t border-slate/60 flex flex-wrap items-center justify-end gap-3">
                {footer}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
