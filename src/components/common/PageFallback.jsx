import Loader from './Loader';

/**
 * CRICKET27 Route Transition & Suspense Loading Fallback
 * Provides a stable-height, branded loading state that prevents layout shifts.
 */
export const PageFallback = () => {
  return (
    <div
      className="w-full min-h-[70vh] flex items-center justify-center bg-midnight text-warm-white"
      aria-label="Loading page content"
    >
      <Loader size="lg" text="INITIALISING EXPERIENCE..." />
    </div>
  );
};

export default PageFallback;
