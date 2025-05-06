'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Top Bar: Logo & Hamburger */}
      <div className="fixed top-10 left-10 md:left-5 right-5 md:right-10 flex justify-between items-center px-4 py-4 md:px-10 md:py-6 z-50 bg-transparent">
        {/* Logo */}
        <motion.div
          className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Ci
        </motion.div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {isOpen ? <X className="w-8 h-8 md:w-10 md:h-10" /> : <Menu className="w-8 h-8 md:w-10 md:h-10" />}
          </motion.div>
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] sm:w-[60%] md:w-[40%] bg-white dark:bg-black z-[999] transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out shadow-lg overflow-y-auto`}
      >
        {/* Sidebar Top: Logo and Close */}
        <div className="flex justify-between items-center px-6 py-6 border-b border-gray-200 dark:border-gray-700">
          <div className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white">Ci</div>
          <button onClick={toggleMenu} className="text-gray-800 dark:text-white">
            <X size={32} />
          </button>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-center justify-center space-y-6 py-12">
          <Link
            href="/"
            onClick={toggleMenu}
            className="text-2xl md:text-3xl text-gray-800 dark:text-white hover:underline"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="text-2xl md:text-3xl text-gray-800 dark:text-white hover:underline"
          >
            About
          </Link>
          <Link
            href="/works"
            onClick={toggleMenu}
            className="text-2xl md:text-3xl text-gray-800 dark:text-white hover:underline"
          >
            Works
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="text-2xl md:text-3xl text-gray-800 dark:text-white hover:underline"
          >
            Contact
          </Link>
        </div>

        {/* Social Media Icon */}
        <div className='flex justify-center items-center gap-10'>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className='dark:bg-white border-2 border-black rounded-2xl'
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="90" height="90" viewBox="0 0 24 24">
              <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
            </svg>
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className='dark:bg-white border-2 border-black rounded-2xl'
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30">
              <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
          </svg>
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black dark:bg-white bg-opacity-40 z-[998]"
        />
      )}
    </>
  );
}

export default Navbar;
