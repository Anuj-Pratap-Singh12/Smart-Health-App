import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold text-white">Smart Health Surveillance</h2>
          <p className="text-sm mt-2 text-gray-400">
            Early warning & monitoring system for water-borne diseases in rural communities.
          </p>
        </div>

        {/* Health-related Links */}
        <div className="flex flex-col space-y-2">
          <a href="/about" className="hover:text-white text-sm">About Us</a>
          <a href="/awareness" className="hover:text-white text-sm">Health Awareness</a>
          <a href="/resources" className="hover:text-white text-sm">Resources</a>
          <a href="/contact" className="hover:text-white text-sm">Contact</a>
        </div>

        {/* Emergency Contact */}
        <div>
          <h3 className="text-sm font-semibold text-white mb-2">Emergency Helpline</h3>
          <p className="flex items-center text-sm text-gray-400 mb-1">
            {/* Phone Icon */}
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
                       19.86 19.86 0 0 1-8.63-3.07 
                       19.5 19.5 0 0 1-6-6 
                       19.86 19.86 0 0 1-3.07-8.67 
                       A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 
                       1.72 12.44 12.44 0 0 0 .67 2.81 
                       2 2 0 0 1-.45 2.11L8.09 9.91a16 
                       16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 
                       2.11-.45 12.44 12.44 0 0 0 2.81.67 
                       A2 2 0 0 1 22 16.92z"/>
            </svg>
            108 (Ambulance - India)
          </p>
          <p className="flex items-center text-sm text-gray-400 mb-1">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
                       19.86 19.86 0 0 1-8.63-3.07 
                       19.5 19.5 0 0 1-6-6 
                       19.86 19.86 0 0 1-3.07-8.67 
                       A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 
                       1.72 12.44 12.44 0 0 0 .67 2.81 
                       2 2 0 0 1-.45 2.11L8.09 9.91a16 
                       16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 
                       2.11-.45 12.44 12.44 0 0 0 2.81.67 
                       A2 2 0 0 1 22 16.92z"/>
            </svg>
            +91-XXXXXXXXXX (Local Health Center)
          </p>
          <p className="flex items-center text-sm text-gray-400">
            {/* Mail Icon */}
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 
                       2v12c0 1.1-.9 2-2 
                       2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 
                       2-2zm0 4v.01L12 13l8-5V8l-8 
                       5-8-5z"/>
            </svg>
            support@smarthealth.org
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-6 border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Smart Health Surveillance. All rights reserved.
        </p>

        {/* Social Media */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          {/* Facebook */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 
                       1.325v21.351C0 23.403.597 
                       24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 
                       1.894-4.788 4.659-4.788 1.325 0 2.464.099 
                       2.795.143v3.24l-1.918.001c-1.504 
                       0-1.796.715-1.796 
                       1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.729 
                       0 1.325-.597 1.325-1.324V1.325C24 
                       .597 23.403 0 22.675 0z"/>
            </svg>
          </a>

          {/* Twitter */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.83 9.83 0 
                       0 1-2.828.775 4.932 4.932 
                       0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 
                       1.184a4.916 4.916 0 0 
                       0-8.38 4.482A13.94 13.94 0 0 
                       1 1.671 3.149a4.916 4.916 0 0 
                       0 1.523 6.574 4.902 4.902 0 0 
                       1-2.229-.616c-.054 2.281 
                       1.581 4.415 3.949 4.89a4.935 4.935 
                       0 0 1-2.224.084c.626 
                       1.956 2.444 3.379 4.6 
                       3.419A9.867 9.867 0 0 1 0 
                       19.54a13.94 13.94 0 0 0 7.548 
                       2.212c9.142 0 14.307-7.721 
                       13.995-14.646A9.935 9.935 0 0 0 24 4.557z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.225 0H1.771C.792 
                       0 0 .774 0 1.729v20.542C0 
                       23.226.792 24 1.771 
                       24h20.451C23.2 24 24 
                       23.226 24 
                       22.271V1.729C24 
                       .774 23.2 0 22.225 
                       0zM7.119 20.452H3.56V9h3.559v11.452zM5.34 
                       7.433c-1.137 0-2.059-.922-2.059-2.059 
                       0-1.137.922-2.059 2.059-2.059s2.059.922 
                       2.059 2.059c0 1.137-.922 2.059-2.059 
                       2.059zM20.452 
                       20.452h-3.559v-5.569c0-1.328-.027-3.037-1.85-3.037-1.851 
                       0-2.135 1.445-2.135 2.939v5.667h-3.559V9h3.414v1.561h.049c.476-.9 
                       1.637-1.85 3.367-1.85 3.599 0 4.268 
                       2.369 4.268 5.455v6.286z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5 text-gray-400 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a2.974 2.974 0 0 
                       0-2.09-2.103C19.691 3.5 12 
                       3.5 12 
                       3.5s-7.691 0-9.408.583a2.974 
                       2.974 0 0 0-2.09 
                       2.103A31.533 31.533 0 0 0 
                       0 12a31.533 31.533 0 0 0 
                       .502 5.814 2.974 2.974 0 0 
                       0 2.09 2.103C4.309 20.5 12 
                       20.5 12 
                       20.5s7.691 0 9.408-.583a2.974 
                       2.974 0 0 0 2.09-2.103A31.533 
                       31.533 0 0 0 24 
                       12a31.533 31.533 0 0 0-.502-5.814zM9.545 
                       15.568V8.432L15.818 
                       12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;