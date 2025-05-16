'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Skills', href: '/about/skills' },
    { label: 'Experience', href: '/about/experience' },
    { label: 'Education', href: '/about/education' },
    { label: 'Engagement', href: '/about/engagement' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute top-30 md:top-50 left-1 md:left-30 w-full flex flex-row md:flex-col justify-center md:items-start items-center gap-2 md:gap-10 z-50 pointer-events-none"
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`pointer-events-auto transition-all duration-300 text-black dark:text-white hover:underline ${
              isActive
                ? 'text-md md:text-7xl font-bold underline'
                : 'text-xs md:text-4xl font-normal'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </motion.div>
  );
}

export default Navbar;
