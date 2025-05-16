'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import RotatingText from '@/components/rotatetext';

function Home() {
  return (
    <div className="flex items-center justify-center h-screen px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center justify-center text-center space-y-6 w-full max-w-5xl">
        {/* Main Text: Name */}
        <h1 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#292929] via-[#7A7A7A] to-[#292929] dark:from-[#E0E0E0] dark:via-[#858585] dark:to-[#E0E0E0]">
          CYRIL IMPERIAL
        </h1>

        {/* Rotating Text */}
        <RotatingText
          texts={['Developer', 'UI/UX Designer', 'Web3', 'Gaming', 'Technology', 'Cybersecurity']}
          mainClassName="italic text-2xl sm:text-3xl md:text-4xl text-black dark:text-white"
          staggerFrom="last"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-120%' }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
          transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-300 dark:border-white rounded-xl shadow-md dark:shadow-white/20 px-6 py-4"
          >
            <Link
              href="/works"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white"
            >
              WORKS
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-300 dark:border-white rounded-xl shadow-md dark:shadow-white/20 px-6 py-4"
          >
            <Link
              href="/about"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white"
            >
              PROFILE
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
