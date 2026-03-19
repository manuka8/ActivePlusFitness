import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { Toaster } from 'react-hot-toast';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { pathname, hash } = useLocation();

  // Handle scroll on route or hash change
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  // Check system preference or localStorage on mount
  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
                   (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 relative bg-white dark:bg-dark-bg">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
