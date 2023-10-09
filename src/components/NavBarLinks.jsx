import { NavLink } from "react-router-dom";

import { navLinks } from "../utils/constants/usefulLinks";

export default function NavBarLinks({ isExpand, toggleMenu }) {
  return (
    <nav
      className={`absolute md:static top-full w-full md:w-auto left-0  md:max-h-none bg-deep-100 md:bg-transparent transition-all duration-200 ${
        isExpand ? "max-h-48 " : "max-h-0 overflow-hidden"
      }`}
    >
      <ul className="md:flex md:gap-4">
        {navLinks.map((link) => {
          return (
            <li key={link.id}>
              <NavLink
                className="navlink py-2 px-4 md:px-3 rounded-md text-sm block  text-gray-400 hover:bg-deep-100 font-semibold tracking-wider uppercase"
                to={link.url}
                onClick={toggleMenu}
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
