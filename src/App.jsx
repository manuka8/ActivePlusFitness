import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300 relative">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
