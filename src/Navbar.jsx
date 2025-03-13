import React, { useState } from "react"; 
import LiveClock from "./LiveClock";
import { Link } from "react-router-dom";

function Navbar() {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="text-white py-4 px-6">
        {/* Navbar Container */}
        <div className="flex justify-between items-center">
          {/* Left - Brand Logo & Live Clock */}
          <div className="flex gap-1">
            <Link to="/" className="text-xl font-semibold hover:text-gray-400 hidden md:block">
              Local/
            </Link>
            <LiveClock />
          </div>

          {/* Center - Desktop Menu (Hidden on Small Screens) */}
          <div className="hidden md:flex gap-6">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/services" className="hover:text-gray-400">Services</Link>
            <Link to="/about" className="hover:text-gray-400">About</Link>
            <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          </div>

          {/* Right - Call-to-Action Button */}
          <Link to="/home" className="hidden md:block text-white text-xl border-white border-2 rounded-3xl hover:bg-white hover:text-black px-4 py-2">
            Navigate here
          </Link>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="btn btn-ghost" aria-label="Open menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Only Visible When `isOpen` is True) */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center mt-4 gap-4 transition-all duration-300">
            <Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/services" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}

        <hr className="w-full opacity-20 mt-6" />
      </nav>
    </>
  );
}

export default Navbar;