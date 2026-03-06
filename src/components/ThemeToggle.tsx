'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function getInitialTheme() {
  if (typeof window === 'undefined') return false;
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark((prev) => !prev)}
      className="relative w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500"
      aria-label="Toggle theme"
    >
      <Sun className="w-5 h-5 text-amber-500 dark:hidden" />
      <Moon className="w-5 h-5 text-blue-400 hidden dark:block" />
    </button>
  );
}
