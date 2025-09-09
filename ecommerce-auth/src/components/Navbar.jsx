import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Button from "./Button";
import Logo from "../assets/logo.png"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // close mobile menu after navigation
  };

  return (
    <nav className="bg-white md:border md:border-gray-200 md:shadow-md sticky top-5 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="/" onClick={(e) => { e.preventDefault(); handleNavigation("/"); }} className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-8 w-auto" />
          <span className="text-xl font-bold text-indigo-600">AuthApp</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["/", "/features", "/pricing", "/contact"].map((path, idx) => (
            <a
              key={idx}
              href={path}
              onClick={(e) => { e.preventDefault(); handleNavigation(path); }}
              className="text-gray-700 hover:text-indigo-600 font-medium"
            >
              {["Home", "Features", "Pricing", "Contact"][idx]}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" onClick={() => handleNavigation("/login")}>Login</Button>
          <Button variant="primary" size="sm" onClick={() => handleNavigation("/signup")}>Sign Up</Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          {["/", "/features", "/pricing", "/contact"].map((path, idx) => (
            <a
              key={idx}
              href={path}
              onClick={(e) => { e.preventDefault(); handleNavigation(path); }}
              className="block text-gray-700 hover:text-indigo-600 font-medium"
            >
              {["Home", "Features", "Pricing", "Contact"][idx]}
            </a>
          ))}
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="w-full" onClick={() => handleNavigation("/login")}>Login</Button>
            <Button variant="primary" size="sm" className="w-full" onClick={() => handleNavigation("/signup")}>Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
