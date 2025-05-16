"use client";
import React, { useState } from 'react';
import {
  SiFigma, SiCanva, SiHtml5, SiCss3, SiJavascript,
  SiTailwindcss, SiPython, SiMysql, SiPostgresql,
  SiNpm, SiGithub, SiNextdotjs, SiAstro,
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { motion } from 'framer-motion';
import Navbar from '../navbar';

const techStack = [
  { name: 'VS Code', icon: <VscVscode className="text-blue-500" />, category: 'Development' },
  { name: 'Figma', icon: <SiFigma className="text-pink-500" />, category: 'Design' },
  { name: 'Canva', icon: <SiCanva className="text-blue-400" />, category: 'Design' },
  { name: 'HTML', icon: <SiHtml5 className="text-orange-500" />, category: 'Development' },
  { name: 'CSS', icon: <SiCss3 className="text-blue-500" />, category: 'Development' },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, category: 'Development' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, category: 'Development' },
  { name: 'Python', icon: <SiPython className="text-yellow-500" />, category: 'Development' },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700" />, category: 'Database' },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-700" />, category: 'Database' },
  { name: 'NPM', icon: <SiNpm className="text-red-500" />, category: 'Development' },
  { name: 'GitHub', icon: <SiGithub className="text-gray-800 dark:text-white" />, category: 'Development' },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" />, category: 'Development' },
  { name: 'Astro', icon: <SiAstro className="text-purple-500" />, category: 'Development' },
];

const categories = ['All', 'Development', 'Design', 'Database'];

function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStack = activeCategory === 'All'
    ? techStack
    : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8 pt-30 md:pt-20 pl-0 md:pl-100 ">
      <Navbar />

      <div className="w-full max-w-6xl mt-10">
        <h1 className="text-2xl sm:text-5xl font-bold text-center mb-2 md:mb-8 text-black dark:text-white">
          Tech Stack
        </h1>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-1 md:gap-3 mb-2 md:mb-8 ml-5 mr-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-2 md:px-4 py-1 md:py-2 rounded-full border text-xs md:text-2xl ${
                activeCategory === cat
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-white text-black dark:bg-gray-800 dark:text-white'
              } transition-colors duration-200`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 ml-15 mr-12 mt-5 md:m-2">
          {filteredStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md rounded-xl p-1 md:p-4 transition-transform duration-200 hover:scale-105 cursor-pointer"
            >
              <div className="text-3xl sm:text-4xl mb-2">{tech.icon}</div>
              <p className="text-center text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
