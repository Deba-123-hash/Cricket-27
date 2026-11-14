import { Link } from 'react-router-dom';
import { FOOTER_COLUMNS } from '../../data/navigation';

export const FooterLinks = () => {
  const sections = [FOOTER_COLUMNS.EXPLORE, FOOTER_COLUMNS.UPDATES];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
      {sections.map((section) => (
        <div key={section.title} className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-3.5 bg-lime rounded-full" />
            <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-warm-white">
              {section.title}
            </h4>
          </div>

          <ul className="space-y-2.5">
            {section.links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="text-sm text-muted-text hover:text-lime hover:translate-x-1 inline-block transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-lime rounded"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
