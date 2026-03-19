import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';

  const navLinks = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'About', href: isHomePage ? '#about' : '/#about', isRoute: !isHomePage },
    { name: 'Services', href: isHomePage ? '#services' : '/#services', isRoute: !isHomePage },
    { name: 'Trainers', href: isHomePage ? '#trainers' : '/#trainers', isRoute: !isHomePage },
    { name: 'Blog', href: '/blog', isRoute: true },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact', isRoute: !isHomePage },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderLink = (link, mobile = false) => {
    const baseClass = mobile
      ? "block px-3 py-3 rounded-md text-base font-medium text-light-text dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
      : `text-sm font-medium hover:text-primary transition-colors duration-200 ${scrolled || !isHomePage
        ? 'text-light-text dark:text-gray-300'
        : 'text-graye/90 dark:text-white hover:text-primary drop-shadow-md'
      }`;

    if (link.isRoute) {
      return (
        <Link
          key={link.name}
          to={link.href}
          className={baseClass}
          onClick={() => mobile && setIsOpen(false)}
        >
          {link.name}
        </Link>
      );
    }

    return (
      <a
        key={link.name}
        href={link.href}
        className={baseClass}
        onClick={() => mobile && setIsOpen(false)}
      >
        {link.name}
      </a>
    );
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm dark:shadow-slate-800/50 py-3'
          : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="ActivePlus Logo" className="h-16 md:h-20 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => renderLink(link))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${scrolled || !isHomePage
                  ? 'bg-gray-100 dark:bg-slate-800 text-light-text dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700'
                  : 'bg-gray-700/20 text-gray-700 dark:text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${scrolled || !isHomePage
                  ? 'text-light-text dark:text-yellow-400'
                  : 'text-white'
                }`}
            >
              {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${scrolled || !isHomePage ? 'text-light-text dark:text-white' : 'text-white'
                }`}
            >
              {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-light-bg dark:bg-dark-card border-b border-gray-200 dark:border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              {navLinks.map((link) => renderLink(link, true))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
