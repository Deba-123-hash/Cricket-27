import { motion } from 'framer-motion';
import { ArrowRight, Send, Users, ShieldAlert, Sparkles, MessageSquare, Twitter, Youtube, Instagram, Facebook } from 'lucide-react';
import { ROUTES } from '../../utils/constants';
import Container from '../../components/common/Container';
import Button from '../../components/common/Button';
import Badge from '../../components/common/Badge';
import CricketImage from '../../components/common/CricketImage';
import { SOCIAL_LINKS } from '../../data/socialLinks';

const iconMap = {
  MessageSquare,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
};

export const CommunitySection = () => {
  return (
    <section id="community-intro" className="py-24 sm:py-32 bg-midnight-dark relative overflow-hidden border-t border-slate/50">
      {/* Background Graphic Watermark */}
      <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 bg-pitch-pattern bg-[length:40px_40px] opacity-10 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Community Editorial Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <Badge variant="lime" size="sm">
                MORE THAN A GAME. A COMMUNITY.
              </Badge>
              <span className="h-px w-8 bg-slate-light" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-muted-text">
                PLAYER SQUAD
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-wider text-warm-white uppercase leading-[0.98]">
              ONE SPORT. <br />
              ONE PASSION. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime to-lime-hover">
                ONE COMMUNITY.
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-text leading-relaxed">
              Connect with cricket enthusiasts worldwide. Discuss mechanics, share custom artwork, and shape the future of 2D cricket.
            </p>

            {/* Key Community Hub Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-brand bg-slate-card border border-slate flex items-start gap-3">
                <Users className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white block">
                    Concept Dialogue
                  </span>
                  <span className="text-xs text-muted-text">
                    Discuss proposed mechanics, shot controls &amp; match modes.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-brand bg-slate-card border border-slate flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white block">
                    Exclusive Key Art
                  </span>
                  <span className="text-xs text-muted-text">
                    Access high-resolution stadium artwork &amp; phone wallpapers.
                  </span>
                </div>
              </div>
            </div>

            {/* Dual Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                to={ROUTES.COMMUNITY}
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="shadow-lime-glow font-heading uppercase tracking-wider justify-center"
              >
                EXPLORE COMMUNITY
              </Button>

              <Button
                to={ROUTES.CONTACT}
                variant="outline"
                size="lg"
                icon={Send}
                iconPosition="left"
                className="font-heading uppercase tracking-wider justify-center border-slate hover:border-lime"
              >
                GET IN TOUCH
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Social Channels & Community Banner Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Visual Banner */}
            <div className="relative rounded-brand overflow-hidden border border-slate shadow-card-elevated group">
              <div className="aspect-[16/10] w-full overflow-hidden bg-midnight">
                <CricketImage
                  src="/assets/community/community-squad-banner.svg"
                  alt="CRICKET27 player community hub banner artwork"
                  title="Official Squad Hub"
                  icon="users"
                  aspectRatio="16/10"
                  objectFit="cover"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 z-10">
                <Badge variant="lime" size="sm" pulse>
                  COMMUNITY LOUNGE ACTIVE
                </Badge>
              </div>

              <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-brand bg-midnight-light/95 backdrop-blur-md border border-slate flex items-center justify-between">
                <div>
                  <span className="text-xs font-heading font-black uppercase text-warm-white block">
                    Official Squad Hub
                  </span>
                  <span className="text-[11px] font-mono text-muted-text">
                    Join developer AMAs, community polls &amp; previews
                  </span>
                </div>
                <span className="text-xs font-mono text-lime font-bold">DISCORD READY</span>
              </div>
            </div>

            {/* Social Channels Directory */}
            <div className="p-6 rounded-brand bg-slate-card border border-slate space-y-4">
              <div className="flex items-center justify-between border-b border-slate pb-3">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-warm-white">
                  Social Channels Directory
                </span>
                <span className="text-[11px] font-mono text-lime font-semibold">PRE-LAUNCH PREVIEWS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = iconMap[item.icon] || Users;
                  return (
                    <div
                      key={item.name}
                      className="p-3 rounded bg-midnight border border-slate/60 flex items-center justify-between gap-3 group hover:border-lime/40 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-8 h-8 rounded bg-slate-card border border-slate flex items-center justify-center text-lime shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-xs font-heading font-bold uppercase text-warm-white block truncate group-hover:text-lime transition-colors">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-mono text-muted-text block truncate">
                            {item.description}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-muted-text bg-slate-card px-2 py-0.5 rounded border border-slate shrink-0">
                        Preview
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Disclaimer Notice */}
              <div className="pt-2 flex items-start gap-2 text-[11px] font-mono text-muted-text leading-tight">
                <ShieldAlert className="w-3.5 h-3.5 text-coral shrink-0 mt-0.5" />
                <span>
                  Official handles activate prior to public alpha. Follow for developer dispatches and concept previews.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CommunitySection;
