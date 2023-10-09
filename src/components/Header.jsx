import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

import TopBar from "./TopBar";
import HeaderIconButtons from "./HeaderIconButtons";
import NavBarLinks from "./NavBarLinks";

export default function Header() {
  const [isExpand, setIsExpand] = useState(false);

  const toggleMenu = () => {
    setIsExpand((prev) => !prev);
  };

  return (
    <header className="relative">
      <TopBar />
      <div className="bg-deep-300">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            to="/"
            className="bg-accent-200 rounded-md px-4 py-2 hover:bg-accent-300 duration-200 transition-all hidden md:inline-block"
          >
            <span className="text-deep-300 font-extrabold text-xl">ES</span>
          </Link>

          <button
            className="bg-accent-200 rounded-md px-4 py-2 hover:bg-accent-300 duration-200 transition-all md:hidden"
            onClick={toggleMenu}
          >
            <span className="text-deep-300 font-extrabold text-xl">
              <HiMenu className="text-deep-300" size={24} />
            </span>
          </button>

          <NavBarLinks isExpand={isExpand} toggleMenu={toggleMenu} />

          <HeaderIconButtons />
        </div>
      </div>
    </header>
  );
}
