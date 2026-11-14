import { Link } from 'react-router-dom';
import { APP_CONFIG, ROUTES } from '../../utils/constants';
import Container from '../common/Container';
import BrandLogo from '../common/BrandLogo';
import Badge from '../common/Badge';
import FooterLinks from './FooterLinks';
import SocialLinks from './SocialLinks';
import FooterBottom from './FooterBottom';
import { FOOTER_COLUMNS } from '../../data/navigation';

export const Footer = () => {
  return (
    <footer className="bg-midnight-dark border-t border-slate text-warm-white pt-16 pb-12 mt-20 relative z-30">
      <Container size="xl">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          {/* Column 1 — Brand (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to={ROUTES.HOME} className="inline-block group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime rounded" aria-label="CRICKET27 Homepage">
              <BrandLogo variant="horizontal" className="h-9 sm:h-10 w-auto group-hover:scale-[1.02] transition-transform duration-200" />
            </Link>

            <div className="space-y-2">
              <p className="text-xs font-heading font-black tracking-widest text-lime uppercase">
                {APP_CONFIG.TAGLINE}
              </p>
              <p className="text-muted-text text-sm leading-relaxed max-w-sm">
                CRICKET27 is the premier international 2D sports gaming brand engineered to bring tactical depth, sub-millisecond stroke timing, and broadcast realism to cricket fans worldwide.
              </p>
            </div>

            <div className="pt-1 flex items-center gap-2">
              <Badge variant="lime" size="sm" pulse>
                Studio Pre-Launch
              </Badge>
              <span className="text-[11px] font-mono text-muted-text">v0.4.0 &bull; 2026</span>
            </div>
          </div>

          {/* Columns 2 & 3 — Explore & Updates (lg:col-span-5) */}
          <div className="lg:col-span-5">
            <FooterLinks />
          </div>

          {/* Column 4 — Social Media (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-coral rounded-full" />
              <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-warm-white">
                {FOOTER_COLUMNS.SOCIAL.title}
              </h4>
            </div>

            <p className="text-xs text-muted-text leading-relaxed">
              Connect with our growing player community across official developer channels:
            </p>

            <SocialLinks />

            <div className="pt-2 p-3 rounded-brand bg-midnight border border-slate/50">
              <span className="text-[10px] font-mono uppercase tracking-wider text-lime block font-bold mb-1">
                Channel Verification
              </span>
              <p className="text-[11px] text-muted-text leading-tight">
                {FOOTER_COLUMNS.SOCIAL.disclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom (Copyright, Legal, Disclaimers, Scroll Top) */}
        <FooterBottom />
      </Container>
    </footer>
  );
};

export default Footer;
