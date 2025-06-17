import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png"; 

const Header: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    
    return (localStorage.getItem("theme") as "light" | "dark") || "light";
  });
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); 
  };

  return (
    <header className="bg-white-500 text-black shadow-md">
    <div className="container mx-auto flex justify-between items-center py-3 px-6">
      {/* Logo */}
      <div>
        <a href="/">
          <img
            src={logo}
            alt="Logo"
            className="h-17 w-auto inline-block ml-10"
          />
        </a>
      </div>

      {/* Centered Navigation Links */}
      <nav className="flex-grow text-center">
        <ul className="inline-flex space-x-8">
          <li>
            <NavLink
              to="/"
              className={`${
                location.pathname === "/" ? "text-blue-500 font-bold" : "text-black dark:text-white"
              } hover:text-blue-500 transition-colors duration-300`}
            >
              Home
            </NavLink>
          </li>
          <li>
          <NavLink
                to="/aptitude"
                className={`${
                  location.pathname === "/aptitude"
                    ? "text-blue-500 font-bold dark:text-blue-400"
                    : "text-black dark:text-white"
                } hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300`}
              >
                Aptitude
              </NavLink>
          </li>
        </ul>
      </nav>


        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="ml-4 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>

    </div>
  </header>
  );
};

export default Header;
