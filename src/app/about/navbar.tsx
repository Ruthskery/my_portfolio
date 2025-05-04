'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: 'Skills', href: '/about/skills' },
    { label: 'Experience', href: '/about/experience' },
    { label: 'Education', href: '/about/education' },
    { label: 'Engagement', href: '/about/engagement' },
  ];

  return (
    <div className="absolute top-60 left-100 flex flex-col items-center md:items-start space-y-10 text-center md:text-left z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`transition-all duration-300 text-black dark:text-white hover:underline ${
              isActive
                ? 'text-7xl font-black underline'
                : 'text-4xl font-normal'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
