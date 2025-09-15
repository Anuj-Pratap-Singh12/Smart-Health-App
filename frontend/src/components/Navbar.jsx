import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between flex-nowrap">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
            className="h-8 w-8"
          />
          <span className="font-bold text-3xl whitespace-nowrap">
            Smart Health
          </span>
        </div>

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
};

export default Navbar;