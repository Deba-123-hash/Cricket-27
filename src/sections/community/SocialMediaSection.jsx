import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook, Twitter, Lock, Bell } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import { SOCIAL_PLATFORMS_CONFIG } from '../../data/socialLinks';

const iconMap = {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
};

export const SocialMediaSection = () => {
  return (
    <section
      id="social-channels"
      aria-labelledby="social-heading"
      className="relative py-24 sm:py-32 bg-midnight/90 border-t border-slate overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lime/5 rounded-full blur-[140px]" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Badge variant="lime">COMMUNITY CHANNELS</Badge>
          </motion.div>

          <motion.h2
            id="social-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-heading font-black uppercase tracking-tight text-warm-white mb-4"
          >
            FOLLOW THE CRICKET27 JOURNEY.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-text font-sans leading-relaxed"
          >
            Stay connected with CRICKET27 and follow future brand updates, visual stories and community announcements as we expand our official presence.
          </motion.p>
        </div>

        {/* 4 Social Platforms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_PLATFORMS_CONFIG.map((platform, idx) => {
            const IconComponent = iconMap[platform.icon] || Bell;

            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-brand-xl bg-slate-card/75 border border-slate/80 hover:border-lime/40 p-7 flex flex-col justify-between transition-all duration-300 shadow-card hover:shadow-card-elevated"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-lime/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Top Header: Icon & Coming Soon Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-brand-lg bg-midnight border border-slate flex items-center justify-center text-warm-white group-hover:text-lime group-hover:border-lime/50 transition-colors shadow-inner">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="slate" size="sm" className="font-mono text-[10px] tracking-wider uppercase border border-slate/80 text-muted-text">
                      Coming Soon
                    </Badge>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-lime block mb-1">
                      {platform.tagline}
                    </span>
                    <h3 className="text-xl font-heading font-black uppercase text-warm-white group-hover:text-lime transition-colors">
                      {platform.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-warm-white/70 font-sans leading-relaxed mb-6">
                    {platform.description}
                  </p>
                </div>

                {/* Footer State: Disabled Button indicating future official launch */}
                <div className="pt-4 border-t border-slate/60">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    title={`${platform.name} channel launch in preparation`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-brand-md bg-slate/40 border border-slate text-xs font-heading font-bold uppercase tracking-wider text-muted-text cursor-not-allowed select-none transition-colors"
                  >
                    <Lock className="w-3.5 h-3.5 opacity-60" />
                    <span>Channel Coming Soon</span>
                  </button>
                  <p className="text-[11px] font-sans text-center text-muted-text/70 mt-2">
                    Verified channel in preparation
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default SocialMediaSection;
