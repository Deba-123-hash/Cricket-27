import { motion } from 'framer-motion';
import { Filter, FileText, Bell } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { CONTACT_PROCESS_STEPS } from '../../data/contact';
import { fadeIn, staggerContainer } from '../../utils/animations';

const stepIcons = {
  Filter,
  FileText,
  Bell,
};

export const ContactProcess = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-midnight overflow-hidden border-b border-slate/60">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lime/5 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="lime" size="sm" className="mb-4">
            INQUIRY WORKFLOW
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-4">
            HOW TO <span className="text-lime">CONNECT WITH US.</span>
          </h2>
          <p className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed">
            A simple three-step process to help you structure your query and stay informed as our communication ecosystem grows.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {CONTACT_PROCESS_STEPS.map((stepItem, idx) => {
            const Icon = stepIcons[stepItem.icon] || FileText;

            return (
              <motion.div
                key={stepItem.step}
                variants={fadeIn}
                className="group relative rounded-brand-lg bg-slate-card/70 border border-slate p-8 flex flex-col justify-between hover:border-lime/40 transition-all duration-300 shadow-card"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-lime/40 group-hover:text-lime transition-colors">
                      {stepItem.step}
                    </span>
                    <div className="w-12 h-12 rounded-brand bg-midnight border border-slate flex items-center justify-center text-lime group-hover:bg-lime group-hover:text-midnight group-hover:border-lime transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-black uppercase text-warm-white tracking-wide mb-3 group-hover:text-lime transition-colors">
                    {stepItem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-warm-white/75 font-sans leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-8 pt-4 border-t border-slate/50 flex items-center justify-between text-[11px] font-mono text-muted-text">
                  <span>STEP {idx + 1} OF 3</span>
                  <span className="text-lime">CRICKET27</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Informational UI Disclaimer Note */}
        <div className="mt-12 text-center text-xs font-mono text-muted-text">
          <span>* This informational guide outlines our upcoming communications process; message routing activates in future releases.</span>
        </div>
      </Container>
    </section>
  );
};

export default ContactProcess;
