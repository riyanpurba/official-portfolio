import { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark');
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
    setTheme(next);
  };
  return (
    <button type="button" onClick={toggle} aria-label={theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'} className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-accent">
      {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
    </button>
  );
};
