import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, Share2, Loader2, ImageOff } from 'lucide-react';
import { modalVariants } from '../../utils/animations';
import Badge from '../common/Badge';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useToast } from '../../hooks/useToast';

export const Lightbox = ({ item, onClose, onNext, onPrev, currentIndex, totalCount }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { success } = useToast();

  useLockBodyScroll(!!item);
  useEscapeKey(onClose, !!item);

  // Arrow key navigation
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, onNext, onPrev]);

  // Reset image loading states when active item changes
  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [item]);

  if (!item) return null;

  const imageSrc = item.src || item.image;

  const handleCopyLink = () => {
    const fullUrl = window.location.origin + imageSrc;
    navigator.clipboard?.writeText(fullUrl);
    success(`Asset link copied to clipboard!`);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md select-none"
        role="dialog"
        aria-modal="true"
        aria-label={`Visual preview: ${item.title}`}
      >
        {/* Backdrop Click Dismiss */}
        <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

        {/* Modal Window */}
        <motion.div
          variants={modalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="relative z-10 w-full max-w-5xl bg-midnight-light border border-slate rounded-brand-xl overflow-y-auto shadow-2xl flex flex-col max-h-[96vh] sm:max-h-[92vh] ring-1 ring-lime/20"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-3 sm:p-4 px-4 sm:px-6 border-b border-slate bg-midnight shrink-0">
            <div className="flex items-center gap-2 sm:gap-3 truncate">
              <Badge variant="lime" size="sm">
                {item.category}
              </Badge>
              {typeof currentIndex === 'number' && typeof totalCount === 'number' && (
                <span className="font-mono text-xs text-lime bg-slate/40 px-2 py-0.5 rounded border border-slate/60 shrink-0">
                  {currentIndex + 1} / {totalCount}
                </span>
              )}
              <h3 className="text-sm sm:text-base font-heading font-black uppercase text-warm-white tracking-wider truncate">
                {item.title}
              </h3>
            </div>

            <div className="flex items-center gap-1 sm:gap-2 shrink-0">
              {/* Copy Share Link Button */}
              <button
                type="button"
                onClick={handleCopyLink}
                title="Copy asset link"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-text hover:text-lime hover:bg-slate-card rounded-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                aria-label="Copy asset link"
              >
                <Share2 className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-text hover:text-warm-white hover:bg-slate-card rounded-brand transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                aria-label="Close image lightbox"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Image Display Area */}
          <div className="relative flex-1 bg-black/50 p-3 sm:p-8 flex items-center justify-center min-h-[200px] sm:min-h-[420px] overflow-hidden">
            {/* Loading Indicator */}
            {isLoading && !hasError && (
              <div className="absolute inset-0 flex items-center justify-center bg-midnight/40 z-10">
                <Loader2 className="w-8 h-8 text-lime animate-spin" />
              </div>
            )}

            {/* Error Fallback */}
            {hasError ? (
              <div className="w-full max-w-lg aspect-video rounded-brand-lg bg-gradient-to-br from-slate-card via-midnight to-slate-card/90 flex flex-col items-center justify-center relative overflow-hidden p-6 text-center select-none border border-slate-border/80 shadow-card">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(183,243,74,0.12)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#263449_1px,transparent_1px),linear-gradient(to_bottom,#263449_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="relative z-10 w-14 h-14 rounded-brand-lg bg-midnight/90 border border-slate-border/80 flex items-center justify-center text-lime shadow-card mb-3">
                  <ImageOff className="w-7 h-7 text-lime" aria-hidden="true" />
                </div>
                <span className="relative z-10 font-heading font-black text-sm uppercase tracking-wider text-warm-white">
                  {item.title || 'Visual Archive Preview'}
                </span>
                <span className="relative z-10 font-mono text-[10px] text-lime/80 uppercase tracking-widest mt-1">
                  BEYOND THE BOUNDARY
                </span>
                <p className="relative z-10 text-xs font-sans text-muted-text mt-2">
                  Unable to load visual preview.
                </p>
              </div>
            ) : (
              <img
                src={imageSrc}
                alt={item.alt || item.title}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                  setIsLoading(false);
                  setHasError(true);
                }}
                className={`max-h-[52vh] sm:max-h-[64vh] max-w-full object-contain rounded-brand shadow-card-depth transition-opacity duration-300 ${
                  isLoading ? 'opacity-0' : 'opacity-100'
                }`}
              />
            )}

            {/* Left Nav Arrow */}
            {onPrev && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onPrev();
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-midnight/80 border border-slate text-warm-white hover:text-midnight hover:bg-lime hover:border-lime hover:shadow-lime-glow transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                aria-label="View previous image (Left Arrow)"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
            )}

            {/* Right Nav Arrow */}
            {onNext && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNext();
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full bg-midnight/80 border border-slate text-warm-white hover:text-midnight hover:bg-lime hover:border-lime hover:shadow-lime-glow transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                aria-label="View next image (Right Arrow)"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Footer Metadata */}
          <div className="p-4 px-6 border-t border-slate bg-midnight/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <p className="text-muted-text leading-relaxed max-w-2xl">
              {item.description}
            </p>
            <div className="flex items-center gap-3 shrink-0">
              {item.dimensions && (
                <span className="font-mono text-lime bg-midnight px-2.5 py-1 rounded border border-slate text-[11px]">
                  {item.dimensions}
                </span>
              )}
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-text">
                <Eye className="w-3.5 h-3.5 text-lime" />
                <span>ESC to Close &bull; &larr; &rarr; Navigate</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default Lightbox;
