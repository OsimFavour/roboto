import { useContext } from "react";
import { Link } from "react-router-dom";

import { MenuContext } from "@/contexts/menu.context";

import { menuItems } from "@/menu-data";

import { Menu, X } from "lucide-react";
import TwitterIcon from "../twitter-icon/twitter-icon.component";
import GitHubIcon from "../github-icon/github-icon.component";

const DesktopHeader = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isMenuOpen, setIsMenuOpen, isNavbarOpen } = useContext(MenuContext);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="max-w-7xl mx-auto flex flex-wrap p-3 flex-col md:flex-row">
      <div className="flex flex-row items-center justify-between p-3 md:p-1">
        <Link
          to="/"
          className="flex text-3xl text-white font-medium mb-4 md:mb-0"
        >
          ROBOTO
        </Link>
        <button
          className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none content-end ml-auto"
          type="button"
          aria-label="button"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open menu</span>
          {isMenuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      <div
        className={
          "md:flex flex-grow items-center" +
          (isNavbarOpen ? " flex" : " hidden")
        }
      >
        <div className="md:ml-auto md:mr-auto font-4 pt-1 md:pl-14 pl-1 flex flex-wrap items-center md:text-base text-1xl md:justify-center justify-items-start">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="mr-12 md:ml-11 ml-0 cursor-pointer text-gray-300 hover:text-white font-semibold tr04"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <a
          href="https://twitter.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="invisible md:visible ml-6"
        >
          
          <TwitterIcon />
        </a>
        <a
          data-v-54e46119=""
          href="https://github.com/"
          rel="noopener noreferrer"
          target="_blank"
          className="pl-7 invisible md:visible ml-6"
        >
          
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default DesktopHeader;
