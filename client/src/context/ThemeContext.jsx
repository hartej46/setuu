import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();


function getStoredTheme() {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem('setu-theme') || 'light';
    }
  } catch {
    // Access denied (e.g. strict security policy, private browsing, or sandboxed iframe)
  }
  return 'light';
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return { theme: 'light', toggleTheme: () => {} };
  }
  return context;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    } catch {
      // DOM access safeguard
    }

    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem('setu-theme', theme);
      }
    } catch {
      // localStorage unavailable — theme won't persist but still works
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
