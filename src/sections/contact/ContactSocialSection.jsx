import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Twitter, ArrowRight, Lock } from 'lucide-react';
import Container from '../../components/common/Container';
import Badge from '../../components/common/Badge';
import Button from '../../components/common/Button';
import { SOCIAL_PLATFORMS_CONFIG } from '../../data/socialLinks';
import { ROUTES } from '../../utils/constants';

const socialIcons = {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
};

export const ContactSocialSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-midnight-light overflow-hidden border-b border-slate/60">
      {/* Decorative Radial Ambient Glow */}
      <div
        className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-lime/5 rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <Badge variant="lime" size="sm" className="mb-4">
            COMMUNITY CHANNELS
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-warm-white uppercase mb-4">
            FOLLOW THE <span className="text-lime">CRICKET27 JOURNEY.</span>
          </h2>
          <p className="text-base sm:text-lg text-warm-white/75 font-sans leading-relaxed max-w-2xl mx-auto mb-8">
            Explore our community page to find available social channels and future updates as we expand our official presence across major platforms.
          </p>

          <Link to={ROUTES.COMMUNITY || '/community'} className="w-full sm:w-auto inline-flex justify-center">
            <Button variant="primary" size="lg" className="gap-2 group shadow-lime-glow w-full sm:w-auto justify-center">
              <span>VISIT COMMUNITY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* 4 Social Platforms Mini-Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {SOCIAL_PLATFORMS_CONFIG.map((platform) => {
            const Icon = socialIcons[platform.icon] || Instagram;

            return (
              <div
                key={platform.id}
                className="p-5 rounded-brand bg-slate-card/60 border border-slate/80 flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-brand bg-midnight border border-slate flex items-center justify-center text-warm-white shrink-0">
                    <Icon className="w-5 h-5 text-lime" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-bold text-sm uppercase text-warm-white truncate">
                      {platform.name}
                    </h3>
                    <span className="text-[10px] font-mono text-muted-text block truncate">
                      {platform.tagline}
                    </span>
                  </div>
                </div>

                <Badge variant="slate" size="sm" className="shrink-0 text-[9px] font-mono flex items-center gap-1 text-muted-text">
                  <Lock className="w-2.5 h-2.5" />
                  <span>Soon</span>
                </Badge>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ContactSocialSection;
