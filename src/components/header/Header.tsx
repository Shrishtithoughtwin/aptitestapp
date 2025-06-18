import React, { useState, useEffect } from "react";
import { NavLink, } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });

  

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="bg-base-200 text-base-content shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <div>
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto inline-block ml-2"
            />
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex-grow text-center">
          <ul className="inline-flex space-x-8">
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
        <div className="flex items-center space-x-2">
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
    </header>
  );
};

export default Header;
