import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // for redirecting after logout

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) setIsLoggedIn(true);
  }, []);

  // Logout handler
  const handleSignOut = () => {
    localStorage.removeItem("authToken"); // remove JWT token
    setIsLoggedIn(false);                 // update state
    setProfileOpen(false);                // close profile dropdown
    navigate("/login");                   // redirect to login page
  };

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
            SANJEEVANI
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 text-xl font-medium flex-shrink">
          <a href="#" className="hover:text-green-600 whitespace-nowrap">
            Home
          </a>
          <a href="#" className="hover:text-green-600 whitespace-nowrap">
            About
          </a>
          <a href="#" className="hover:text-green-600 whitespace-nowrap">
            Reports
          </a>
          <a href="#" className="hover:text-green-600 whitespace-nowrap">
            Communities
          </a>
          <a href="#" className="hover:text-green-600 whitespace-nowrap">
            Contact
          </a>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          {/* Profile dropdown (desktop) */}
          {isLoggedIn && (
            <div className="relative hidden lg:block">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="focus:outline-none"
              >
                <img
                  src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  alt="profile"
                  className="h-8 w-8 rounded-full"
                />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                  <div className="px-4 py-3 border-b">
                    <p className="font-semibold">Aman Gupta</p>
                    <p className="text-sm text-gray-500">name@gmail.com</p>
                  </div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Dashboard
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    My Account
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Settings
                  </a>
                  <button
                    onClick={handleSignOut}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Login / Signup buttons (desktop only) */}
          {!isLoggedIn && (
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href="/login"
                className="text-green-600 border border-green-600 hover:bg-green-50 
                           rounded-lg text-lg px-4 py-2 whitespace-nowrap"
              >
                Login
              </a>
              <a
                href="/signup"
                className="text-white bg-green-600 hover:bg-green-700 
                           focus:ring-4 focus:outline-none focus:ring-green-300 
                           font-medium rounded-lg text-lg px-4 py-2 whitespace-nowrap"
              >
                Signup
              </a>
            </div>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            {isOpen ? (
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-900 rotate-45 translate-y-1"></span>
                <span className="block w-6 h-0.5 bg-gray-900 -rotate-45 -translate-y-1"></span>
              </div>
            ) : (
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-900"></span>
                <span className="block w-6 h-0.5 bg-gray-900"></span>
                <span className="block w-6 h-0.5 bg-gray-900"></span>
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-gray-100 text-gray-900 px-4 py-3 space-y-2 shadow-md">
          <a href="#" className="block hover:text-green-600">
            Home
          </a>
          <a href="#" className="block hover:text-green-600">
            About
          </a>
          <a href="#" className="block hover:text-green-600">
            Reports
          </a>
          <a href="#" className="block hover:text-green-600">
            Communities
          </a>
          <a href="#" className="block hover:text-green-600">
            Contact
          </a>

          <hr className="my-2" />

          {isLoggedIn ? (
            <>
              <a href="#" className="block hover:text-green-600">
                Dashboard
              </a>
              <a href="#" className="block hover:text-green-600">
                My Account
              </a>
              <a href="#" className="block hover:text-green-600">
                Settings
              </a>
              <button
                onClick={handleSignOut}
                className="w-full text-left hover:text-red-600 px-4 py-2"
              >
                Sign out
              </button>
            </>
          ) : (
            <>
              <a
                href="/login"
                className="w-full block text-center mt-3 text-green-600 border border-green-600 
                           hover:bg-green-50 rounded-lg text-lg px-4 py-2"
              >
                Login
              </a>
              <a
                href="/signup"
                className="w-full block text-center mt-3 text-white bg-green-600 hover:bg-green-700 
                           focus:ring-4 focus:outline-none focus:ring-green-300 
                           font-medium rounded-lg text-lg px-4 py-2"
              >
                Signup
              </a>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
