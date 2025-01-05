import { useState } from "react";
import { FC } from "react";

interface NavbarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar: FC<NavbarProps> = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 bg-fall-100 dark:bg-fall-900 shadow-lg">
      <div className="flex items-center justify-between relative">
        <div className="text-4xl text-gray-800 dark:text-fall-50 tracking-wider font-extrabold">
          <h1>k.</h1>
        </div>

        {/* Centered Theme Toggle */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <button
            className="transition-all transform hover:scale-125 focus:outline-none"
            onClick={toggleTheme} // Call toggleTheme passed as a prop
            aria-label="Toggle Theme"
          >
            <span className="text-3xl transition-all">
              {isDarkMode ? "🌙" : "🌞"}{" "}
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={toggleMenu}>
          <span>menu</span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-full h-full bg-black bg-opacity-100 transition-transform transform ${
            isOpen ? "translate-y-0" : "-translate-y-full"
          } md:hidden`}
        >
          <div className="flex justify-end p-4">
            {/* Close Button (X Icon) */}
            <button onClick={closeMenu} className="text-white text-xl">
              ❌
            </button>
          </div>
          <ul className="flex flex-col items-center mt-16 font-mono text-red-500 text-2xl">
            <li
              className="p-4 cursor-pointer hover:underline"
              onClick={closeMenu}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className="p-4 cursor-pointer hover:underline"
              onClick={closeMenu}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className="p-4 cursor-pointer hover:underline"
              onClick={closeMenu}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
