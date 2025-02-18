import React from "react";
import { menuLinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "left-[-100%]"
      } fixed bottom-0 top-0 w-[75%] transition-all duration-300 shadow-md pt-16 px-8 bg-white dark:bg-gray-900 z-50 flex md:hidden flex-col justify-between pb-4`}
    >
      <div className="card">
        {/* Menu Section */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {menuLinks.map(({ id, name, link }) => {
              return (
                <li key={id}>
                  <a href={link}>{name}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Footer Section */}
      <div>
        <h1>
          Made with by <a href="https://github.com/Mattrixxx">Mattrixxx</a>
        </h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
