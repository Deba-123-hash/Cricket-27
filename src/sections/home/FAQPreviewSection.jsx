import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import { FAQ_ITEMS } from '../../data/faq';

export const FAQPreviewSection = () => {
  // First item open by default for immediate visual feedback
  const [openIndex, setOpenIndex] = useState(0);

  // Take the 5 questions specified in Section 8
  const previewQuestions = FAQ_ITEMS.slice(0, 5);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq-preview" className="py-24 sm:py-32 bg-midnight relative overflow-hidden border-t border-slate/40">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-lime/5 rounded-full blur-[200px] pointer-events-none" />

      <Container size="md" className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <Badge variant="lime" size="sm">
              NEED TO KNOW MORE?
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black tracking-wider text-warm-white uppercase leading-[1.02]">
            FREQUENTLY ASKED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-hover">
              QUESTIONS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-muted-text leading-relaxed">
            Find answers to common questions about CRICKET27 and our vision.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
          {previewQuestions.map((item, index) => {
            const isOpen = openIndex === index;
            const headingId = `faq-heading-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`rounded-brand border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-card border-lime/60 shadow-lime-glow/10 ring-1 ring-lime/20'
                    : 'bg-slate-card/60 border-slate hover:border-lime/30'
                }`}
              >
                {/* Question Trigger */}
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-midnight select-none group"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span
                      className={`w-7 h-7 rounded flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                        isOpen ? 'bg-lime text-midnight' : 'bg-midnight text-muted-text group-hover:text-lime'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base sm:text-lg font-heading font-black uppercase text-warm-white tracking-wide group-hover:text-lime transition-colors">
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-brand border flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-lime text-midnight border-lime rotate-180'
                        : 'bg-midnight text-muted-text border-slate group-hover:border-lime group-hover:text-warm-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </div>
                </button>

                {/* Animated Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headingId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-muted-text leading-relaxed border-t border-slate/40">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Section Bottom CTA & Support Note */}
        <div className="mt-14 text-center space-y-4">
          <Button
            to={ROUTES.FAQ}
            variant="outline"
            size="lg"
            icon={ArrowRight}
            iconPosition="right"
            className="font-heading uppercase tracking-wider"
          >
            VIEW ALL QUESTIONS
          </Button>

          <div className="flex items-center justify-center gap-2 text-xs font-mono text-muted-text">
            <HelpCircle className="w-4 h-4 text-lime" />
            <span>Have a direct question? Check our FAQ or reach out via Contact</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQPreviewSection;
