import MobileHeader from "../mobile-header/mobile-header.component";

import DesktopHeader from "../desktop-header/desktop-header.component";

const Header: React.FC = () => {
  return (
    <header className="top-0 w-full clearNav z-50">
      <DesktopHeader />

      <MobileHeader />
    </header>
  );
};

export default Header;
