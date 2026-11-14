import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, HelpCircle } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { ROUTES } from '../../utils/constants';

export const FAQContactCTA = () => {
  return (
    <section
      id="faq-contact-cta"
      aria-labelledby="faq-contact-heading"
      className="relative py-20 sm:py-28 bg-midnight border-t border-slate overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-lime/10 rounded-full blur-[140px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto rounded-brand-xl bg-slate-card/90 border border-slate/90 p-6 sm:p-10 md:p-16 text-center shadow-card-elevated relative overflow-hidden group">
          {/* Subtle Top Accent Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-lime to-transparent" />

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-4"
          >
            <Badge variant="lime">DIRECT ASSISTANCE</Badge>
            <span className="text-xs font-mono text-muted-text uppercase tracking-widest flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-lime" />
              SUPPORT PORTAL
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="faq-contact-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-warm-white mb-4"
          >
            STILL HAVE QUESTIONS?
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-text font-sans leading-relaxed max-w-xl mx-auto mb-8"
          >
            If you could not find the information you were looking for, visit our Contact page to explore the available ways to reach us.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
          >
            <Link to={ROUTES.CONTACT || '/contact'} className="w-full sm:w-auto inline-flex justify-center">
              <Button
                variant="primary"
                size="lg"
                className="gap-2 group shadow-lime-glow w-full sm:w-auto justify-center"
              >
                <MessageSquare className="w-4 h-4 text-midnight" />
                <span>CONTACT US</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Assurance Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 pt-6 border-t border-slate/60 text-xs font-mono text-muted-text/80 flex flex-wrap items-center justify-center gap-4"
          >
            <span>VERIFIED INQUIRY CHANNELS</span>
            <span>•</span>
            <span>PROMOTIONAL BRAND HUB</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FAQContactCTA;
