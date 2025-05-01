'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Overlay: Logo & Hamburger */}
      <div className="absolute top-15 left-15 right-30 flex justify-between items-center z-50 pointer-events-auto">
        {/* Logo */}
        <div className="text-9xl font-bold text-gray-800 dark:text-white">
          Ci
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
          {isOpen ? <X className="w-12 h-12" /> : <Menu className="w-12 h-12" />}
        </button>
      </div>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 left-0 w-[50%] h-full bg-white dark:bg-black z-[999] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out shadow-lg`}>
        
        {/* Close Button at Top-Right */}
        <div className="flex justify-between items-center p-20">
          <div className="text-9xl font-bold text-gray-800 dark:text-white">
            Ci
          </div>
          <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
            <X size={60} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center h-[calc(50%-40px)] space-y-6">          
          <Link href="/" onClick={toggleMenu} className="text-gray-800 dark:text-white text-8xl hover:underline">Home</Link>
          <Link href="/about" onClick={toggleMenu} className="text-gray-800 dark:text-white text-8xl hover:underline">About</Link>
          <Link href="/works" onClick={toggleMenu} className="text-gray-800 dark:text-white text-8xl hover:underline">Works</Link>
          <Link href="/contact" onClick={toggleMenu} className="text-gray-800 dark:text-white text-8xl hover:underline">Contact</Link>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && <div onClick={toggleMenu} className="fixed inset-0 bg-black dark:bg-white bg-opacity-40 z-[998]" />}
    </>
  );
}

export default Navbar;
