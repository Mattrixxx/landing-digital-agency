import React, { useState } from "react";
import Logo from "../../assets/website/Logo.svg";
import DarkMode from "./DarkMode";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

export const menuLinks = [
  {
    id: 1,
    name: "About",
    link: "/#about",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "Projects",
    link: "/#projects",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="bg-white dark:bg-black dark:text-white transition-all">
        <div className="container py-3 md:py-2">
          <div className="flex justify-between items-center md:items-baseline">
            {/* Logo Section */}
            <div>
              <a href="#" className="flex items-center gap-3">
                <img src={Logo} alt="Logo" className="w-5" />
                <span className="text-2xl sm:text-3xl font-semibold">
                  Digital Agency
                </span>
              </a>
            </div>
            {/* Desktop NavLinks Section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8">
                {menuLinks.map(({ id, name, link }) => {
                  return (
                    <li key={id} className="cursor-pointer py-4">
                      <a
                        href={link}
                        className="text-lg font-medium hover:text-primary py-2 border-b-0 hover:border-b-2 hover:border-primary transition-all ease-in-out duration-100"
                      >
                        {name}
                      </a>
                    </li>
                  );
                })}
                <button className="btn-primary">Get in Touch</button>
                <DarkMode />
              </ul>
            </div>
            {/* Mobile View */}
            <div className="flex items-center gap-4 md:hidden">
              <DarkMode />
              {showMenu ? (
                <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer text-2xl" />
              ) : (
                <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer text-2xl" />
              )}
            </div>
          </div>
        </div>
        {/* Mobile Menu Section */}
        <ResponsiveMenu showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
