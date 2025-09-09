import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Logo / Brand */}
      <div className="text-xl font-bold">MyWebsite</div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="hover:text-green-400 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-400 transition">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-400 transition">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-400 transition">
            Contact
          </a>
        </li>
      </ul>

      {/* Button */}
      <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition">
        Login
      </button>
    </nav>
  );
}
