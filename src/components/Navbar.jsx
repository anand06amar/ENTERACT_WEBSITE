import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-teal-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Drama Society</div>
        <ul className="flex space-x-8">
        <li><NavLink to="/" className="hover:text-yellow-300">Home</NavLink></li>

          <li><NavLink to="/events" className="hover:text-yellow-300">Events</NavLink></li>

          <li><NavLink to="/awards" className="hover:text-yellow-300">Awards</NavLink></li>

          <li><NavLink to="/contact" className="hover:text-yellow-300">Contact Us</NavLink></li>

          <li>
            <NavLink to="/team" className="hover:text-yellow-300">
              Our Team
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
