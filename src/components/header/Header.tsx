import React from "react";
import logo from "../../assets/logo.png"; 

const Header: React.FC = () => {
  return (
    <header className="bg-white-500 text-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-5">
        {/* Logo */}
       <div>
          <a href="/" > <img
          src={logo} 
            className="h-15 w-auto inline-block ml-10"
          /></a>
        </div>
        
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/aptitude" className="hover:underline">
                Aptitude
              </a>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
