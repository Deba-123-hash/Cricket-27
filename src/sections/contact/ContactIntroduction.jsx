import { motion } from 'framer-motion';
import { Sparkles, MessageSquare, Compass, ShieldCheck } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import { CONTACT_INTRO_DATA } from '../../data/contact';
import { fadeIn, staggerContainer } from '../../utils/animations';

const highlightIcons = [MessageSquare, ShieldCheck, Compass];

export const ContactIntroduction = () => {
  const { eyebrow, description, subtext, image, alt, caption, highlights } =
    CONTACT_INTRO_DATA;

  return (
    <section className="relative py-20 lg:py-28 bg-midnight-light border-b border-slate/60 overflow-hidden">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-lime/5 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Column: Narrative Content */}
          <motion.div variants={fadeIn} className="lg:col-span-6">
            <Badge variant="lime" size="sm" className="mb-4">
              {eyebrow}
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-6 leading-tight">
              WE&apos;RE HERE <br />
              <span className="text-lime">TO CONNECT.</span>
            </h2>

            <p className="text-warm-white/90 font-sans leading-relaxed text-base sm:text-lg mb-4">
              {description}
            </p>

            <p className="text-sm sm:text-base text-muted-text font-sans leading-relaxed mb-8">
              {subtext}
            </p>

            {/* Three Communication Pillars */}
            <div className="space-y-4 pt-4 border-t border-slate/60">
              {highlights.map((item, idx) => {
                const Icon = highlightIcons[idx] || Sparkles;

                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-brand bg-slate-card/70 border border-slate/80 hover:border-lime/40 transition-colors flex items-start gap-3.5 shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-brand bg-midnight border border-slate flex items-center justify-center text-lime shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-sm uppercase text-warm-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs text-warm-white/70 font-sans leading-relaxed mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Prominent Visual Card */}
          <motion.div variants={fadeIn} className="lg:col-span-6">
            <div className="relative rounded-brand-lg overflow-hidden border border-slate bg-slate-card shadow-2xl group">
              <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-midnight">
                <CricketImage
                  src={image}
                  fallbackSrc="/assets/contact/contact-hero.jpg"
                  alt={alt}
                  aspectRatio="16/10"
                  title="Inquiry Desk"
                  badge="COMMUNICATIONS"
                  icon="compass"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-85 pointer-events-none" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-heading font-black text-xs uppercase px-3 py-1 rounded bg-midnight/90 text-lime border border-lime/40 backdrop-blur-sm">
                  OFFICIAL INQUIRY DESK
                </span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-warm-white/90 p-3 rounded-brand bg-midnight/90 border border-slate backdrop-blur-sm">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted-text truncate mr-2">
                  {caption}
                </span>
                <span className="font-mono text-lime font-bold shrink-0">CRICKET27</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactIntroduction;
