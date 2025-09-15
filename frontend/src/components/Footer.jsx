import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaDribbble, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto w-full max-w-screen-xl p-6 lg:py-10">
        <div className="md:flex md:justify-between">
          {/* Left side - Logo + Description */}
          <div className="mb-6 md:mb-0 max-w-sm">
            <a href="#" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                SmartHealth
              </span>
            </a>
            <p className="mt-4 text-gray-400 text-sm">
              A Smart Health Surveillance & Early Warning System to detect, monitor,
              and help prevent outbreaks of water-borne diseases in vulnerable communities.
            </p>
            {/* Social Icons */}
            <div className="flex mt-4 space-x-5">
              <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><FaWhatsapp size={20} /></a>
            </div>
          </div>

          {/* Right side - Links */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Quick links</h2>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Reports</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
                
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">For Health Authorities</h2>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#" className="hover:underline">Dashboard login</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Data & Analytics</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Support</a></li>
                <li><a href="#" className="hover:underline">Community</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">For Communities</h2>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#" className="hover:underline">Report a Health Issue</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Educational Resources</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
              <ul className="text-gray-400">
                <li className="mb-2"><a href="#" className="hover:underline">Terms of Service</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Data Security & Constent Policy</a></li>
               
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2025 SmartHealth™. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}