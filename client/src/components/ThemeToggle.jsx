import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-xl border cursor-pointer transition-colors duration-300"
      style={{
        background: isDark
          ? 'linear-gradient(135deg, #173F5F 0%, #20A2B1 100%)'
          : 'linear-gradient(135deg, #E6972B 0%, #D97706 100%)',
        borderColor: isDark ? 'rgba(32, 162, 177, 0.4)' : 'rgba(230, 151, 43, 0.4)',
      }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-200" />
        ) : (
          <Moon className="w-5 h-5 text-white" />
        )}
      </motion.div>
    </motion.button>
  );
}
