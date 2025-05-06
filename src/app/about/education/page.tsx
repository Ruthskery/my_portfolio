import React from 'react';
import Navbar from '../navbar';
import Image from 'next/image';
import agnesLogo from '../../../../public/img/SAA.png'
import cspcLogo from '../../../../public/img/CSPC.png'

function Education() {
  return (
    <div className="min-h-screen flex">
      <Navbar />

      {/* Right Side - Education Cards */}
      <div className="flex flex-col gap-10 absolute left-250 top-[25%]">
        
        {/* Card 1: Senior High School */}
        <div className="bg-black dark:bg-white shadow-lg rounded-xl p-6 max-w flex items-center space-x-4">
          <Image
            src={agnesLogo}
            alt="St. Agnes Academy Logo"
            width={150}
            height={150}
            className="rounded-full bg-white"
          />
          <div>
            <h2 className="text-lg font-bold text-white dark:text-black mb-1">Strand:</h2>
            <p className="text-white dark:text-black font-semibold">Science, Technology, Engineering, and Mathematics</p>
            <p className="text-sm text-white dark:text-black">August 2017 - May 2019</p>
            <p className="text-sm text-white dark:text-black">St. Agnes Academy | SHS</p>
          </div>
        </div>

        {/* Card 2: College Degree */}
        <div className="bg-black dark:bg-white shadow-lg rounded-xl p-6 max-w flex items-center space-x-4">
          <Image
            src={cspcLogo}
            alt="CSPC Logo"
            width={150}
            height={150}
            className="rounded-full bg-white"
          />
          <div>
            <h2 className="text-lg font-bold text-white dark:text-black mb-1">Degree:</h2>
            <p className="text-white dark:text-black font-semibold">Bachelor of Science in Information Technology</p>
            <p className="text-sm text-white dark:text-black">August 2020 - May 2024</p>
            <p className="text-sm text-white dark:text-black">Camarines Sur Polytechnic Colleges - CSPC</p>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Education;
