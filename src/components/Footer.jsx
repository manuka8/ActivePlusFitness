import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light-text dark:bg-slate-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tighter text-primary mb-4">
             ACTIVE<span className="text-white">PLUS</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-sm mb-6">
            Transform your body and mind with our state-of-the-art facilities, expert trainers, and personalized programs. Connect with us to start your fitness journey today.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-primary transition-colors text-sm">Home</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors text-sm">About Us</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors text-sm">Services</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors text-sm">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>2nd Floor, Colts Cricket Club, Colombo 00500, Sri Lanka</li>
            <li>+94 77 182 3014</li>
            <li>info@activeplusfitness.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} ActivePlus Fitness. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
