import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { COMMUNITY_FAQS } from '../../data/community';

export const CommunityFAQPreview = () => {
  // Store the active open item index (default first open for quick discovery)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      id="community-faq"
      aria-labelledby="community-faq-heading"
      className="relative py-24 sm:py-32 bg-midnight border-t border-slate overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lime/5 rounded-full blur-[130px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Badge variant="lime">COMMON QUESTIONS</Badge>
              <span className="text-xs font-mono text-muted-text uppercase tracking-widest flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-lime" />
                COMMUNITY FAQ
              </span>
            </motion.div>

            <motion.h2
              id="community-faq-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-warm-white mb-4"
            >
              QUESTIONS ABOUT OUR COMMUNITY?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-text font-sans leading-relaxed max-w-2xl mx-auto"
            >
              Find answers to common questions about the CRICKET27 community, upcoming activities and how to follow our progress.
            </motion.p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4 mb-12">
            {COMMUNITY_FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const buttonId = `faq-btn-${faq.id}`;
              const panelId = `faq-panel-${faq.id}`;

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className={`rounded-brand-lg border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-card border-lime/40 shadow-card-elevated'
                      : 'bg-slate-card/60 border-slate/80 hover:border-slate hover:bg-slate-card/80'
                  }`}
                >
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-lime font-bold">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <span className="font-heading text-lg sm:text-xl font-bold uppercase tracking-wide text-warm-white group-hover:text-lime transition-colors">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${
                        isOpen
                          ? 'bg-lime text-midnight border-lime rotate-180'
                          : 'bg-midnight text-muted-text border-slate'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                          transition: { height: { duration: 0.3, ease: 'easeOut' }, opacity: { duration: 0.25, delay: 0.05 } },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: { height: { duration: 0.25, ease: 'easeIn' }, opacity: { duration: 0.15 } },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-warm-white/80 font-sans leading-relaxed border-t border-slate/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Call to Action */}
          <div className="text-center pt-4">
            <Link to="/faq">
              <Button variant="outline" size="lg" className="group">
                <span>VIEW ALL QUESTIONS & ANSWERS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CommunityFAQPreview;
