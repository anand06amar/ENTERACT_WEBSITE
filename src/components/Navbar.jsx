import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-50 text-white py-2 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <img 
            src="/logo1.png" 
            alt="Drama Society Logo" 
            className="h-10 w-auto cursor-pointer" 
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        
        {/* Menu Icon for Small Screens */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul 
          className={`md:flex md:space-x-8 text-2xl space-y-4 md:space-y-0 absolute md:static top-14 right-0 md:right-auto md:top-auto bg-black md:bg-transparent md:p-0 p-4 w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
        >
          <li><NavLink to="/" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/events" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Events</NavLink></li>
          <li><NavLink to="/awards" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Awards</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-yellow-300" onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
          {/* <li><NavLink to="/team" className="hover:text-yellow-300">Our Team</NavLink></li> */}
        </ul>
      </div>

      {/* Media Query for Small Devices */}
      <style>
        {`
          @media (max-width: 768px) {
            nav {
              padding-top: 0.5rem; /* Reduce top padding */
              padding-bottom: 0.5rem; /* Reduce bottom padding */
            }
            .container {
              padding-left: 0.5rem; /* Reduce left padding */
              padding-right: 0.5rem; /* Reduce right padding */
            }
            ul {
              top: 12px; /* Adjust dropdown top position */
            }
            img {
              height: 8rem; /* Adjust logo height */
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
