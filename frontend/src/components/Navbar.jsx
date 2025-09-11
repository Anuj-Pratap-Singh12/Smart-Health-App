import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "Monitoring", "Awareness", "Reports", "Contact"];

  const slugify = (text) =>
    String(text || "").toLowerCase().trim().replace(/\s+/g, "-");

  return (
    <nav className="bg-white text-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-green-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 
                     12 12 12 12-5.372 12-12S18.628 
                     0 12 0zm0 21.6c-5.298 0-9.6-4.302-9.6-9.6S6.702 
                     2.4 12 2.4s9.6 4.302 9.6 
                     9.6-4.302 9.6-9.6 9.6z"/>
          </svg>
          <div className="leading-tight">
            <div className="text-lg md:text-xl  text-green-500 font-bold">Smart Health</div>
            <div className="text-xs md:text-sm text-gray-400">Early Warning System</div>
          </div>
        </div>

        {/* Links for tablet+desktop */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={"#" + slugify(item)}
              className="relative group"
            >
              <span className="transition-colors duration-200 group-hover:text-green-400">
                {item}
              </span>
              {/* underline effect */}
              <span className="block h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 mt-1" />
            </a>
          ))}
        </div>

        {/* Right Side (tablet + desktop) */}
        <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
          {/* Notification Bell */}
          <button className="relative" aria-label="Notifications">
            <svg
              className="w-6 h-6 text-gray-500 hover:text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405M19 13V9a7 7 0 10-14 0v4l-1.405 1.405A2.032 
                2.032 0 004 17h16a2.032 2.032 0 00.405-2.595L19 13z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1 rounded-full">
              2
            </span>
          </button>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
            U
          </div>

          {/* Login & Signup */}
          <a
            href="/login"
            className="px-4 py-1 border border-green-500 rounded-md text-green-400 hover:bg-green-500 hover:text-white transition whitespace-nowrap"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-1 bg-green-500 rounded-md text-white hover:bg-green-600 transition whitespace-nowrap"
          >
            Signup
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-3">
          {navItems.map((item) => (
            <a key={item} href={"#" + slugify(item)} className="block group">
              <span className="transition-colors duration-200 group-hover:text-green-400">{item}</span>
              <span className="block h-[2px] bg-green-400 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 mt-1" />
            </a>
          ))}

          <div className="flex items-center space-x-4 pt-3 border-t border-gray-700">
            <button className="relative" aria-label="Notifications">
              <svg
                className="w-6 h-6 text-gray-300 hover:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405M19 13V9a7 7 0 10-14 0v4l-1.405 1.405A2.032 
                  2.032 0 004 17h16a2.032 2.032 0 00.405-2.595L19 13z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1 rounded-full">2</span>
            </button>

            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">U</div>
          </div>

          <div className="space-y-2 pt-2">
            <a
              href="/login"
              className="block w-full text-center px-3 py-2 border border-green-500 text-green-400 rounded-md hover:bg-green-500 hover:text-white transition"
            >
              Login
            </a>
            <a
              href="/signup"
              className="block w-full text-center px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Signup
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;