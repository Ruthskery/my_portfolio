import React from 'react';
import Navbar from '../navbar';
import Image from 'next/image';
import agnesLogo from '../../../../public/img/SAA.png';
import cspcLogo from '../../../../public/img/CSPC.png';

function Education() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Education Cards */}
      <div className="flex flex-col items-center justify-center px-4 py-10 md:pt-50 md:pl-180 gap-6">
        
        {/* Card 1: Senior High School */}
        <div className="bg-black dark:bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <Image
            src={agnesLogo}
            alt="St. Agnes Academy Logo"
            width={120}
            height={120}
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
        <div className="bg-black dark:bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <Image
            src={cspcLogo}
            alt="CSPC Logo"
            width={120}
            height={120}
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
