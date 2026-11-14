import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, AlertTriangle, X } from 'lucide-react';
import { ToastContext } from './toastState';

let toastIdCounter = 0;

const TOAST_ICONS = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const TOAST_STYLES = {
  success: 'border-lime/60 bg-midnight/95 text-warm-white shadow-lime-glow/20',
  error: 'border-coral/60 bg-midnight/95 text-warm-white shadow-coral-glow/20',
  warning: 'border-amber-400/60 bg-midnight/95 text-warm-white',
  info: 'border-slate bg-midnight/95 text-warm-white shadow-card-depth',
};

const TOAST_ICON_STYLES = {
  success: 'text-lime',
  error: 'text-coral',
  warning: 'text-amber-400',
  info: 'text-lime',
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    (message, type = 'info', duration = 3500) => {
      const id = ++toastIdCounter;
      const newToast = { id, message, type, duration };

      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }

      return id;
    },
    [removeToast]
  );

  const success = useCallback((msg, duration) => addToast(msg, 'success', duration), [addToast]);
  const error = useCallback((msg, duration) => addToast(msg, 'error', duration), [addToast]);
  const warning = useCallback((msg, duration) => addToast(msg, 'warning', duration), [addToast]);
  const info = useCallback((msg, duration) => addToast(msg, 'info', duration), [addToast]);

  const contextValue = useMemo(
    () => ({ addToast, removeToast, success, error, warning, info }),
    [addToast, removeToast, success, error, warning, info]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      {/* Floating Toast Container */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="fixed bottom-6 right-3 sm:right-6 z-50 flex flex-col gap-2.5 max-w-sm sm:max-w-md w-[calc(100%-1.5rem)] sm:w-auto pointer-events-none pb-safe"
      >
        <AnimatePresence>
          {toasts.map((toast) => {
            const Icon = TOAST_ICONS[toast.type] || Info;
            const style = TOAST_STYLES[toast.type] || TOAST_STYLES.info;
            const iconStyle = TOAST_ICON_STYLES[toast.type] || TOAST_ICON_STYLES.info;

            return (
              <motion.div
                key={toast.id}
                role="status"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 15, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`pointer-events-auto p-4 rounded-brand border backdrop-blur-md flex items-start gap-3 shadow-2xl ${style}`}
              >
                <div className={`shrink-0 mt-0.5 ${iconStyle}`}>
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>

                <div className="flex-1 min-w-0 pr-1">
                  <p className="text-xs sm:text-sm font-sans font-medium text-warm-white leading-snug">
                    {toast.message}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => removeToast(toast.id)}
                  aria-label="Dismiss notification"
                  className="min-w-[36px] min-h-[36px] flex items-center justify-center p-1 rounded text-muted-text hover:text-warm-white hover:bg-slate-card/60 transition-colors shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
