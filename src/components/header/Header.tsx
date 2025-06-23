
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-base-200 text-base-content shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <div>
          <a href="/">
            <img src={logo} alt="Logo" className="h-12 w-auto inline-block" />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-base-content focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav
          className={`lg:flex lg:items-center lg:space-x-8 lg:flex-row ${
            isMenuOpen ? "flex flex-col items-center space-y-4 mt-4 lg:mt-0" : "hidden"
          }`}
        >
          <ul className="lg:flex lg:space-x-8 space-y-4 lg:space-y-0 text-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary"
                    : "text-base-content hover:text-primary transition-colors"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aptitude"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-primary"
                    : "text-base-content hover:text-primary transition-colors"
                }
              >
                Aptitude
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Theme Toggle Button */}
        <div className="hidden lg:flex items-center space-x-2">
          <span className="text-sm text-primary">Mode</span>
          <button
            onClick={toggleTheme}
            className="w-12 h-6 bg-neutral dark:bg-gray-600 rounded-full p-1 transition-colors"
            aria-label="Toggle theme"
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Theme Toggle Button for Mobile */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden flex items-center justify-center mt-4`}
      >
        <span className="text-sm text-primary">Mode</span>
        <button
          onClick={toggleTheme}
          className="w-12 h-6 bg-neutral dark:bg-gray-600 rounded-full p-1 transition-colors ml-2"
          aria-label="Toggle theme"
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
              theme === "dark" ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
