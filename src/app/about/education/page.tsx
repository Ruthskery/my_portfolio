import React from 'react';
import Navbar from '../navbar';


function Education() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">

      {/* Left Content
      <div className="flex flex-col items-center md:items-start space-y-10 text-center md:text-left mr-200">
        <h1 className="text-5xl md:text-9xl font-black text-black dark:text-white">Education</h1>
          <Link href="/about/engagement" className="hover:underline text-4xl md:text-5xl font-regular text-black dark:text-white">
          Engagement
          </Link>
          <Link href="/about/skills" className="hover:underline text-4xl md:text-5xl font-regular text-black dark:text-white">
          Skills
          </Link>
          <Link href="/about/experience" className="hover:underline text-4xl md:text-5xl font-regular text-black dark:text-white">
          Experience
          </Link>
      </div> */}

      <Navbar />

      {/* Right Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 absolute right-70">
       <h1>Right Content</h1>
      </div>

    </div>
  );
}

export default Education;
