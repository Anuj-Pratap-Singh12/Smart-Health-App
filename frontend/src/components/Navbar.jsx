import React from "react";
import { Link } from "react-router-dom"; // using react-router for navigation

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Logo / Brand */}
      <div className="text-xl font-bold">MyWebsite</div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-green-400 transition">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-green-400 transition">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-green-400 transition">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-green-400 transition">
            Contact
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg transition"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-white text-green-600 border border-green-500 hover:bg-green-100 px-6 py-2 rounded-lg transition"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
}
