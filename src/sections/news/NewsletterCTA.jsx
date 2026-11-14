import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { NEWS_NEWSLETTER_DATA } from '../../data/news';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { validateNewsletterEmail } from '../../utils/validators';

export const NewsletterCTA = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'error' | 'preview_success'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = validateNewsletterEmail(email);
    if (!result.isValid) {
      setStatus('error');
      setErrorMessage(result.error);
      return;
    }

    // Explicitly transparent preview success state (no backend, no data stored)
    setStatus('preview_success');
    setErrorMessage('');
  };

  return (
    <section className="relative py-20 lg:py-28 bg-midnight-light border-y border-slate/60 overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full bg-lime/5 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeIn} className="mb-4">
            <Badge variant="lime" size="sm">
              {NEWS_NEWSLETTER_DATA.eyebrow}
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeIn}
            className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-4"
          >
            {NEWS_NEWSLETTER_DATA.heading}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeIn}
            className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed mb-8"
          >
            {NEWS_NEWSLETTER_DATA.description}
          </motion.p>

          {/* Form Container */}
          <motion.div variants={fadeIn} className="max-w-xl mx-auto">
            {status !== 'preview_success' ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-3">
                <div className="relative flex flex-col sm:flex-row items-center gap-3">
                  <div className="relative w-full">
                    <label htmlFor="newsletter-email-input" className="sr-only">
                      Email address for updates
                    </label>
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-text pointer-events-none">
                      <Mail className="w-4 h-4 text-lime" />
                    </div>
                    <input
                      id="newsletter-email-input"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder={NEWS_NEWSLETTER_DATA.placeholder}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-card border border-slate rounded-brand text-warm-white text-base sm:text-sm placeholder:text-muted-text focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto min-h-[44px] px-6 py-3.5 rounded-brand bg-lime text-midnight font-heading font-black text-xs uppercase tracking-wider hover:bg-lime-light hover:shadow-lime-glow transition-all duration-200 shrink-0 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                  >
                    <span>{NEWS_NEWSLETTER_DATA.buttonText}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Error Alert */}
                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center justify-center gap-2 text-xs text-coral font-medium pt-1"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            ) : (
              /* Success / Preview State (Transparent communication) */
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-brand-lg bg-slate-card border border-lime/40 text-left sm:text-center space-y-2 shadow-card"
              >
                <div className="w-10 h-10 rounded-full bg-lime/10 border border-lime/30 flex items-center justify-center text-lime sm:mx-auto">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-black text-lg text-warm-white uppercase">
                  Preview Notice: Newsletter Concept Verified
                </h4>
                <p className="text-xs sm:text-sm text-warm-white/80 font-sans leading-relaxed">
                  Thank you for your interest! The newsletter subscription service is currently in frontend preview and will officially launch with our community portal. No data has been collected or stored.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus('idle');
                    setEmail('');
                  }}
                  className="text-xs font-mono text-lime hover:underline pt-2 block"
                >
                  Reset preview form
                </button>
              </motion.div>
            )}

            {/* Transparent Note */}
            <p className="mt-4 text-[11px] font-mono text-muted-text flex items-center justify-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-lime shrink-0" />
              <span>{NEWS_NEWSLETTER_DATA.note}</span>
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default NewsletterCTA;
