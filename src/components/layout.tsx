'use client';
import { ReactNode, useEffect, useState} from "react";
import Navbar from "./sections/navbar";
import { ThemeProvider } from "@/context/themeContext";

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {

    const [showOpener, setShowOpener] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowOpener(false), 2000);
        return () => clearTimeout(timer);
      }, []);

      useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
      }, [darkMode]);

      const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDarkMode(e.target.value === 'dark');
      };

  return (
    <>
      <ThemeProvider>
      {showOpener ? (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-2000">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-10 left-10 w-200 h-100 border-t-4 border-l-4 border-white" />
            <div className="absolute bottom-10 right-10 w-200 h-100 border-b-4 border-r-4 border-white" />
          </div>
          <div className="text-left">
            <h1 className="text-white text-8xl md:text-9xl font-black">CYRIL IMPERIAL</h1>
            <p className="text-white italic text-7xl">Portfolio</p>
          </div>
        </div>
      ) : (
        <div className={`fixed inset-0 z-50 transition-opacity duration-1000 ${darkMode ? 'bg-black' : 'bg-white'}`}>
          {/* Border frame */}
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute top-10 left-10 w-200 h-100 border-t-4 border-l-4 ${darkMode ? 'border-white' : 'border-black'}`} />
            <div className={`absolute bottom-10 right-10 w-200 h-100 border-b-4 border-r-4 ${darkMode ? 'border-white' : 'border-black'}`} />
          </div>

          {/* Theme Switcher */}
          <div className={`absolute top-4 left-10 text-sm font-semibold pointer-events-auto flex flex-row space-x-4 ${darkMode ? 'text-white' : 'text-black'}`}>
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="theme" value="light" checked={!darkMode} onChange={handleCheckboxChange} />
              <span>Light</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="theme" value="dark" checked={darkMode} onChange={handleCheckboxChange} />
              <span>Dark</span>
            </label>
          </div>

          {/* Main content */}
          <main>{children}</main> 
      

          {/* Navbar in Top Corners */}
          <Navbar />
        </div>
      )}
      </ThemeProvider>
    </>
  );
}

export default Layout;