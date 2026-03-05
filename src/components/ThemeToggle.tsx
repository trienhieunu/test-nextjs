'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5 text-amber-500 dark:hidden" />
      <Moon className="w-5 h-5 text-blue-400 hidden dark:block" />
    </button>
  );
}
