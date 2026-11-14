import { Link } from 'react-router-dom';
import { HelpCircle, ArrowRight } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { ROUTES } from '../../utils/constants';

export const ContactFAQCTA = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-midnight overflow-hidden border-b border-slate/60">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-lime/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto rounded-brand-xl bg-slate-card/80 border border-slate p-8 sm:p-12 text-center shadow-card relative overflow-hidden group">
          {/* Subtle Accent Top Border */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-lime to-transparent" />

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="lime" size="sm">
              SELF-SERVICE HELP
            </Badge>
            <span className="text-xs font-mono text-muted-text uppercase tracking-widest flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-lime" />
              16 CURATED ANSWERS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-heading font-black uppercase tracking-tight text-warm-white mb-4">
            LOOKING FOR QUICK ANSWERS?
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed max-w-xl mx-auto mb-8">
            You may find what you need in our frequently asked questions, covering brand vision, gameplay concepts, availability, and community.
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <Link to={ROUTES.FAQ || '/faq'}>
              <Button variant="outline" size="lg" className="gap-2 group">
                <HelpCircle className="w-4 h-4 text-lime" />
                <span>VISIT FAQ</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactFAQCTA;
