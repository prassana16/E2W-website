import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = () => {
  // Check for system preference and localStorage
  const getInitialTheme = () => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      
      const userPrefersDark = window.matchMedia && 
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      return userPrefersDark ? 'dark' : 'light';
    }
    return 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme());
  const [isHovered, setIsHovered] = useState(false);
  
  // Toggle between light and dark mode
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  // Apply theme class to document
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  return (
    <motion.button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed right-4 top-4 z-50 p-2 rounded-full bg-white dark:bg-black 
                border border-cyan/30 hover:border-cyan 
                shadow-md hover:shadow-lg hover:shadow-cyan/20
                transition-all duration-300"
      aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'light' ? 0 : 180 }}
        transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        className="relative"
      >
        {theme === 'light' ? (
          <FaSun className="text-black text-xl" />
        ) : (
          <FaMoon className="text-cyan text-xl" />
        )}
        
        {/* Subtle glow effect on hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: isHovered ? 0.8 : 0, scale: isHovered ? 1.5 : 0.6 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-full"
          style={{
            background: theme === 'light' 
              ? 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 70%)' 
              : 'radial-gradient(circle, rgba(5,244,249,0.2) 0%, rgba(5,244,249,0) 70%)',
            zIndex: -1,
          }}
        />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
