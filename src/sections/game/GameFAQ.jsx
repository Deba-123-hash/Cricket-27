import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { GAME_FAQS } from '../../data/gameFaq';
import { ROUTES } from '../../utils/constants';
import { fadeIn, staggerContainer } from '../../utils/animations';

export const GameFAQ = () => {
  const [openId, setOpenId] = useState('is-playable-now');

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-24 lg:py-32 bg-midnight-light border-y border-slate/60 overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute bottom-10 left-1/3 w-80 h-80 rounded-full bg-lime/5 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="lime" size="sm" className="mb-4">
              FREQUENTLY ASKED QUESTIONS
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-4">
              GAME CONCEPTS <span className="text-lime">&amp; PLANS.</span>
            </h2>
            <p className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed">
              Transparent answers regarding the development state, gameplay design philosophy, and community involvement.
            </p>
          </div>

          {/* Accordion List */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-4"
          >
            {GAME_FAQS.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <motion.div
                  key={faq.id}
                  variants={fadeIn}
                  className={`rounded-brand-lg border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-card/90 border-lime/40 shadow-card'
                      : 'bg-slate-card/50 border-slate hover:border-slate-light'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <div
                        className={`w-8 h-8 rounded-brand flex items-center justify-center shrink-0 border transition-colors ${
                          isOpen
                            ? 'bg-lime text-midnight border-lime'
                            : 'bg-midnight text-muted-text border-slate'
                        }`}
                      >
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-lime block mb-1">
                          {faq.category}
                        </span>
                        <span className="font-heading font-black text-lg sm:text-xl text-warm-white uppercase tracking-wide">
                          {faq.question}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border border-slate/60 text-warm-white transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-lime/10 border-lime/40 text-lime' : 'bg-midnight/60'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 border-t border-slate/50 text-warm-white/80 font-sans leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Quick Link to Global FAQ */}
          <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-text">
            <span>Have more general questions about CRICKET27?</span>
            <Link
              to={ROUTES.FAQ}
              className="inline-flex items-center gap-1.5 text-lime hover:text-warm-white font-medium transition-colors"
            >
              <span>Visit our complete FAQ Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GameFAQ;
