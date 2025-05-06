import React, { useEffect, useState } from 'react';
import Navbar from './navbar'; // adjust path if needed
import Link from 'next/link';

function Hero() {
  const [showOpener, setShowOpener] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowOpener(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDarkMode(e.target.value === 'dark');
  };

  return (
    <>
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
          <div className="absolute top-4 left-10 text-sm font-semibold pointer-events-auto flex flex-row space-x-4 text-black dark:text-white">
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="theme" value="light" checked={!darkMode} onChange={handleCheckboxChange} />
              <span>Light</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="checkbox" name="theme" value="dark" checked={darkMode} onChange={handleCheckboxChange} />
              <span>Dark</span>
            </label>
          </div>

          {/* Centered Name */}
          <div className="flex items-center justify-center h-full px-8">
            <div className="text-left space-y-6">
              {/* Main text: Cyril Imperial & Developer */}
              <h1 className={`text-5xl md:text-9xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>CYRIL IMPERIAL</h1>
              <p className={`italic text-5xl ${darkMode ? 'text-white' : 'text-black'}`}>Developer & UI/UX Designer</p>
              
             {/* Centered Links Section */}
              <div className="flex items-center justify-center w-full space-x-20 mt-10">
                <Link href="" className={`hover:underline ${darkMode ? 'text-white' : 'text-black'} text-4xl md:text-5xl font-bold`}>
                 Works
                </Link>

                <Link href="" className={`hover:underline ${darkMode ? 'text-white' : 'text-black'} text-4xl md:text-5xl font-bold`}>
                 Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Navbar in Top Corners */}
          <Navbar />
        </div>
      )}
    </>
  );
}

export default Hero;
