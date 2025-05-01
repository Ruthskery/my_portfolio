'use client';

import React from 'react'
import Link from 'next/link'

function Home() {
  
  return (
    <div className="flex items-center justify-center min-h-screen px-8">
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        {/* Main text: Cyril Imperial & Developer */}
        <h1 className="text-5xl md:text-9xl font-black text-black dark:text-white">
          CYRIL IMPERIAL
        </h1>
        <p className="italic text-5xl text-black dark:text-white">
          Developer & UI/UX Designer
        </p>

        {/* Centered Links Section */}
        <div className="flex items-center justify-center space-x-20 mt-10">
          <Link
            href=""
            className="hover:underline text-4xl md:text-5xl font-bold text-black dark:text-white"
          >
            - Works -
          </Link>
          <Link
            href="/about"
            className="hover:underline text-4xl md:text-5xl font-bold text-black dark:text-white"
          >
            - Profile -
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
