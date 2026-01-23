// components/ThemeToggle.js
import { useEffect, useState } from 'react';

import {MoonStar, Moon, Sun} from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Al montar, verificamos qué clase tiene el HTML realmente
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    setIsDark(isCurrentlyDark);
  }, []);

  const handleToggle = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs font-bold text-french-blue-400 dark:text-french-blue-300 uppercase">
        {isDark ? 'Modo Oscuro' : 'Modo Claro'}
      </span>
      <button
        onClick={handleToggle}
        className="relative w-14 h-7 bg-french-blue-200 dark:bg-french-blue-800 rounded-full p-1 transition-colors duration-300 shadow-inner"
      >
        <div className={`
          bg-white w-5 h-5 rounded-full shadow transform transition-transform duration-300
          ${isDark ? 'translate-x-7' : 'translate-x-0'}
          flex items-center justify-center text-[10px]
        `}>
          {isDark ? <Moon className='bg-french-blue-950 text-french-blue-50 rounded-xl' /> : <Sun className='bg-yellow-400 rounded-xl' />}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;