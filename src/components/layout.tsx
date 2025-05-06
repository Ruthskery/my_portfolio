'use client';
import { ReactNode } from 'react';
import Navbar from './sections/navbar';
import { ThemeProvider, useDarkMode } from '@/context/themeContext';

type LayoutProps = {
  children: ReactNode;
};

function LayoutContent({ children }: LayoutProps) {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Border frame */}
      <div className="absolute inset-0 pointer-events-none">
       {/* Top-left border animation */}
        <div
          className={`absolute top-10 left-10 w-0 h-100 border-t-4 border-l-4 transition-all duration-1000 ${
            darkMode ? 'border-white' : 'border-black'
          } animate-lineDraw`}
        />
        {/* Bottom-right border animation */}
        <div
          className={`absolute bottom-10 right-10 w-0 h-100 border-b-4 border-r-4 transition-all duration-1000 ${
            darkMode ? 'border-white' : 'border-black'
          } animate-lineDraw`}
        />
      </div>

      {/* Theme Toggle */}
      <div className={`absolute top-4 left-10 text-sm font-semibold pointer-events-auto flex items-center space-x-4 ${darkMode ? 'text-white' : 'text-black'}`}>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span>{darkMode ? 'Dark' : 'Light'}</span>
        </label>
      </div>

      {/* Main Content */}
      <main>{children}</main>
      <Navbar />
    </div>
  );
}

function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
}

export default Layout;
