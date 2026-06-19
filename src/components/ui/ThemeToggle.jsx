import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.theme = newTheme ? 'dark' : 'light';
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-muted/10 text-yellow-500 hover:bg-yellow-500/10 transition-all duration-300 hover:rotate-12 ml-2"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? (
        <FiSun size={20} />
      ) : (
        <FiMoon size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
