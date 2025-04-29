import React from 'react';
import { SunMedium, Moon } from 'lucide-react';
import { useDarkMode } from '@/context/themeContext'; // Import the hook!

function DarkmodeToggle() {
  const { darkMode, setDarkMode } = useDarkMode(); // Get darkMode and setDarkMode from context

  const toggleTheme = () => {
    setDarkMode(!darkMode); // Toggle the dark mode
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="px-6 py-2 bg-gray-200 dark:bg-gray-700 rounded-md transition-all cursor-pointer"
    >
      {darkMode ? <SunMedium /> : <Moon />}
    </button>
  );
}

export default DarkmodeToggle;
