import { PRIMARY_NAV_LINKS } from '../../data/navigation';
import NavigationLink from './NavigationLink';
import DropdownMenu from './DropdownMenu';

export const DesktopMenu = () => {
  return (
    <nav
      className="hidden lg:flex items-center gap-1 xl:gap-2 px-2 py-1 rounded-full bg-midnight-light/40 border border-slate/30 backdrop-blur-md shadow-inner"
      aria-label="Main Navigation"
    >
      {PRIMARY_NAV_LINKS.map((link) => {
        if (link.hasDropdown && link.dropdownItems) {
          return (
            <DropdownMenu
              key={link.path}
              triggerLabel={link.label}
              triggerTo={link.path}
              items={link.dropdownItems.map((item) => ({
                label: item.label,
                to: item.path,
                description: item.description,
              }))}
            />
          );
        }

        return (
          <NavigationLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
          >
            {link.label}
          </NavigationLink>
        );
      })}
    </nav>
  );
};

export default DesktopMenu;
