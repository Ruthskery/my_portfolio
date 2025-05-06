'use client';
import React, { useState } from 'react';
import Navbar from '../navbar';
import Image from 'next/image';
import { BriefcaseBusiness, SquareUser, MicVocal } from 'lucide-react';
import { motion } from 'framer-motion';

import leader from '../../../../public/img/leader.jpg';
import prof from '../../../../public/img/professional.jpg';
import broadcast from '../../../../public/img/broad.jpg'
import mict from '../../../../public/img/MICT.png'
// import CSPC from '../../../../public/img/CSPC.png'


function Experience() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseEnter = (cardId: number) => {
    setActiveCard(cardId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Card Section */}
      <div className="flex h-[90vh] gap-5 items-end justify-center">
        {/* Card 1 */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(1)}
        >
          <div
            className="bg-black dark:bg-white hover:bg-black dark:hover:bg-white p-6 rounded-xl shadow-md text-center cursor-pointer 
                      transition-all duration-300 transform hover:-translate-y-2"
          >              <h2 className="text-xl font-bold text-white dark:text-black">
              <BriefcaseBusiness />
            </h2>
          </div>

          {activeCard === 1 && (
            <motion.div
              className="fixed top-[45%] left-[67%] transform -translate-x-1/2 -translate-y-1/2 w-[900px] z-10"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <div className="flex flex-col gap-10 mt-5">
                {/* Detail 1 */}
                <div className="flex gap-5">
                  <Image
                    src={mict}
                    alt="Professional Image"
                    className="rounded-lg bg-white"
                    width={200}
                    height={150}
                  />
                  <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">
                    <h1 className="text-lg font-bold text-gray-800 mb-2">Student Aide | Management Information Communication Technology Center</h1>
                    <p className="text-sm text-gray-600 mb-2">
                      Camarines Sur Polytechnic College — Dec 2022 to Dec 2024
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Provided IT support, maintained hardware/software, configured networks,
                      conducted preventive maintenance, and managed inventory for over 50 staff and
                      instructors.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Image
                    src={broadcast}
                    alt="Professional Image"
                    className="rounded-lg"
                    width={200}
                    height={150}
                  />
                  <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">
                    <h1 className="text-lg font-bold text-gray-800">Student Aide | Broadcast Center</h1>
                    <p className="text-gray-900 text-base font-semibold ">
                    Camarines Sur Polytechnic College - <span className="text-sm italic font-light text-gray-600">
                      Dec 2022 to Dec 2024                    
                    </span>
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Provided IT support, maintained hardware/software, configured networks,
                      conducted preventive maintenance, and managed inventory for over 50 staff and
                      instructors.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Card 2 */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(2)}
        >
          <div
            className="bg-black dark:bg-white hover:bg-black dark:hover:bg-white p-6 rounded-xl shadow-md text-center cursor-pointer 
                      transition-all duration-300 transform hover:-translate-y-2"
          >            
            <h2 className="text-xl font-bold text-white dark:text-black">
              <SquareUser />
            </h2>
          </div>

          {activeCard === 2 && (
            <motion.div
              className="fixed top-[45%] left-[67%] transform -translate-x-1/2 -translate-y-1/2 w-[900px] z-10"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <div className="flex flex-col gap-10 mt-5">
                {/* Detail 2 */}
                <div className="flex gap-5">
                  <Image
                    src={prof}
                    alt="Professional Image"
                    className="rounded-lg"
                    width={350}
                    height={300}
                  />
                  <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">
                    <h1 className="text-lg font-bold text-gray-800 mb-2">President</h1>
                    <p className="text-gray-900 text-base font-semibold mb-1">
                      Bicol IT Student Council
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      Legazpi City, Albay — Jun 2024 – Jan 2025
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Built partnerships with tech industry leaders and sponsors. Engaged with the local IT community to align events with current trends.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Card 3 */}
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(3)}
        >
          <div
            className="bg-black dark:bg-white hover:bg-black dark:hover:bg-white p-6 rounded-xl shadow-md text-center cursor-pointer 
                      transition-all duration-300 transform hover:-translate-y-2"
          >              <h2 className="text-xl font-bold text-white dark:text-black">
              <MicVocal />
            </h2>
          </div>

          {activeCard === 3 && (
            <motion.div
              className="fixed top-[45%] left-[67%] transform -translate-x-1/2 -translate-y-1/2 w-[900px] z-10"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <div className="flex flex-col gap-10 mt-5">
                {/* Detail 3 */}
                <div className="flex gap-5">
                  <Image
                    src={leader}
                    alt="Professional Image"
                    className="rounded-lg"
                    width={350}
                    height={300}
                  />
                  <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">
                    <h1 className="text-lg font-bold text-gray-800 mb-2">BITCON 2024</h1>
                    <p className="text-gray-900 text-base font-semibold mb-1">
                      Student Panel Speaker
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      Nov 25, 2024 – Legazpi City Expo Center
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Represented IT students as a working student and council president. Spoke on emerging IT trends, student leadership, and building tech communities.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
