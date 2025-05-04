import React from 'react';
import {
  SiFigma, SiCanva, SiHtml5, SiCss3, SiJavascript,
  SiTailwindcss, SiPython, SiMysql, SiPostgresql,
  SiNpm, SiGithub, SiNextdotjs, SiAstro,
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import Navbar from '../navbar';

const techStack = [
  { name: 'VS Code', icon: <VscVscode className="text-blue-500" /> },
  { name: 'Figma', icon: <SiFigma className="text-pink-500" /> },
  { name: 'Canva', icon: <SiCanva className="text-blue-400" /> },
  { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Python', icon: <SiPython className="text-yellow-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-indigo-700" /> },
  { name: 'NPM', icon: <SiNpm className="text-red-500" /> },
  { name: 'GitHub', icon: <SiGithub className="text-gray-800 dark:text-white" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
  { name: 'Astro', icon: <SiAstro className="text-purple-500" /> },
];

function Skills() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">

      {/* Left Content */}
      {/* <div className="flex flex-col items-center md:items-start space-y-10 text-center md:text-left mr-200">
        <h1 className="text-7xl font-black text-black dark:text-white">Skills</h1>
          <Link href="/about/experience" className="hover:underline text-4xl font-regular text-black dark:text-white">
            Experience
          </Link>
          <Link href="/about/education" className="hover:underline text-4xl font-regular text-black dark:text-white">
          Education
          </Link>
          <Link href="/about/engagement" className="hover:underline text-4xl font-regular text-black dark:text-white">
          Engagement
          </Link>
      </div> */}

      <Navbar />

      {/* Right Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 absolute right-70">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-lg rounded-4xl p-4 hover:scale-200 transition-transform"
          >
            <div className="text-4xl mb-2">{tech.icon}</div>
            <p className="text-center text-sm font-medium text-gray-800 dark:text-gray-200">{tech.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Skills;
