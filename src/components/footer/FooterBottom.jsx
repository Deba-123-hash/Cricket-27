import { Link } from 'react-router-dom';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { APP_CONFIG, ROUTES } from '../../utils/constants';
import { LEGAL_LINKS } from '../../data/navigation';
import { scrollToTop } from '../../utils/helpers';

export const FooterBottom = () => {
  return (
    <div className="pt-8 border-t border-slate space-y-6 text-xs text-muted-text">
      {/* Top Row: Copyright, Legal Links, Developer Previews */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Copyright & Dev Links */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-center sm:text-left">
          <p>
            &copy; {APP_CONFIG.YEAR}{' '}
            <strong className="text-warm-white font-heading tracking-wider">{APP_CONFIG.BRAND_NAME}</strong>. All rights reserved.
          </p>

          <span className="hidden sm:inline text-slate-light">&bull;</span>

          <Link
            to={ROUTES.BRAND_PREVIEW}
            className="text-muted-text hover:text-lime transition-colors font-mono text-[11px]"
          >
            [Phase 02 Brand Preview]
          </Link>

          <span className="hidden sm:inline text-slate-light">&bull;</span>

          <Link
            to={ROUTES.DESIGN_SYSTEM}
            className="text-lime hover:underline font-mono text-[11px] font-semibold"
          >
            [Phase 03 Design System]
          </Link>
        </div>

        {/* Legal Links & Quick Scroll */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <ul className="flex flex-wrap items-center gap-4 text-xs" aria-label="Legal Disclaimers">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    window.alert(`${link.label}: Policy documentation will be published with the official community release.`);
                  }}
                  className="text-muted-text hover:text-warm-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <span className="hidden sm:inline text-slate-light">&bull;</span>

          {/* Quick Inline Back-to-Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-muted-text hover:text-lime transition-colors font-heading uppercase tracking-wider focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded px-2 py-1"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mandatory Sports Gaming Disclaimer */}
      <div className="p-4 rounded-brand bg-midnight border border-slate/60 flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left">
        <ShieldCheck className="w-5 h-5 text-lime shrink-0 sm:mt-0.5" aria-hidden="true" />
        <p className="leading-relaxed text-[11px] text-muted-text max-w-5xl">
          <strong className="text-warm-white">Legal &amp; Scope Notice:</strong> CRICKET27 is a promotional and informational brand website presenting 2D cricket video game concepts, visual identity systems, and community dispatches. This website is <strong className="text-warm-white">NOT</strong> a playable video game, match engine, gambling application, or online wagering service. All game assets, mechanics, and release schedules remain subject to active studio development.
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
