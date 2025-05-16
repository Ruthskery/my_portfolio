'use client';
import React, { useState } from 'react';
import Navbar from '../navbar';
import Image from 'next/image';
import { BriefcaseBusiness, SquareUser } from 'lucide-react';
import { motion } from 'framer-motion';

// import leader from '../../../../public/img/leader.jpg';
import prof from '../../../../public/img/professional.jpg';
import broadcast from '../../../../public/img/broad.jpg';
import mict from '../../../../public/img/MICT.png';

function Experience() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseEnter = (cardId: number) => {
    setActiveCard(cardId);
  };

  const renderCardDetails = (id: number) => {
    switch (id) {
      case 1:
        return (
          <div className="flex flex-col gap-2 md:gap-10 mt-1 md:mt-5">
            {/* MICT */}
            <div className="flex flex-row gap-5">
              <Image src={mict} alt="MICT"   className="hidden md:block rounded-lg bg-white w-[200px] h-auto" />
              <div className="bg-white shadow-lg rounded-xl p-6 w-full">
                <h1 className="text-[12px] md:text-lg font-bold text-gray-800 mb-2">
                  Student Aide | Management Information Communication Technology Center
                </h1>
                <p className="text-[10px] md:text-sm text-gray-600 mb-2">
                  Camarines Sur Polytechnic College — Dec 2022 to Dec 2024
                </p>
                <p className="text-[10px] md:text-sm text-gray-700 leading-relaxed">
                  Provided IT support, managed hardware/software, configured networks, performed maintenance, and handled inventory for 50+ staff.               
                </p>
              </div>
            </div>
            {/* Broadcast */}
            <div className="flex flex-row gap-5">
              <Image src={broadcast} alt="Broadcast" className="hidden md:block rounded-lg bg-white w-[200px] h-auto"/>
              <div className="bg-white shadow-lg rounded-xl p-6 w-full">
                <h1 className="text-[12px] md:text-lg font-bold text-gray-800">Student Aide | Broadcast Center</h1>
                <p className="text-[10px] md:text-sm text-gray-600 mb-2">
                  Camarines Sur Polytechnic College — Dec 2022 to Dec 2024
                </p>
                <p className="text-[10px] md:text-sm text-gray-700 leading-relaxed">
                  Provided IT support, managed hardware/software, configured networks, performed maintenance, and handled inventory for 50+ staff.
                </p>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
            <div className="flex flex-row gap-5">
            <Image src={prof} alt="Professional" className="hidden md:block rounded-lg bg-white w-[200px] h-auto" />
            <div className="bg-white shadow-lg rounded-xl p-6 w-full">
              <h1 className="text-[12px] md:text-lg font-bold text-gray-800 mb-2">President | Bicol IT Student Council</h1>
              <p className="text-[10px] md:text-sm text-gray-600 mb-2">Legazpi City, Albay — Jun 2024 – Jan 2025</p>
              <p className="text-[10px] md:text-sm text-gray-700 leading-relaxed">
                Built partnerships with tech industry leaders and sponsors. Engaged with the local IT community to align events with current trends.
              </p>
            </div>
          </div>
        );
      // case 3:
      //   return (
      //       <div className="flex flex-row gap-5">
      //       <Image src={leader} alt="Leader" className="hidden md:block rounded-lg bg-white w-[200px] h-auto"/>
      //       <div className="bg-white shadow-lg rounded-xl p-6 w-full">
      //         <h1 className="text-[12px] md:text-lg font-bold text-gray-800 mb-2">BITCON 2024 | Student Panel Speaker</h1>
      //         <p className="text-[10px] md:text-sm text-gray-600 mb-2">Nov 25, 2024 – Legazpi City Expo Center</p>
      //         <p className="text-[10px] md:text-sm text-gray-700 leading-relaxed">
      //           Represented IT students as a working student and council president. Spoke on emerging IT trends, student leadership, and building tech communities.
      //         </p>
      //       </div>
      //     </div>
      //   );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-col items-center md:pl-120 md:pr-10 py-35 md:py-30 gap-5">
        {/* Details */}
        {activeCard && (
         <motion.div
            className="w-[70%] md:w-[90%] lg:w-[80%] xl:w-[70%] z-10"
            initial={{ x: 100, opacity: 0 }}        // slide in from right
            animate={{ x: 0, opacity: 1 }}          // end position
            transition={{ type: 'spring', stiffness: 100 }}
          >
            {renderCardDetails(activeCard)}
          </motion.div>
        )}
      </div>

       {/* Cards */}
        <div className="fixed flex flex-row left-22 md:left-400 bottom-15 md:bottom-20 gap-5">
          {[1, 2].map((id) => (
            <div
              key={id}
              onMouseEnter={() => handleMouseEnter(id)}
              onClick={() => setActiveCard(id)} // fallback for mobile
              className="bg-black dark:bg-white hover:bg-black dark:hover:bg-white p-6 rounded-xl shadow-md text-center cursor-pointer transition-all duration-300 transform hover:-translate-y-2 w-10 md:w-24 h-10 md:h-24 flex items-center justify-center"
            >
              <h2 className="text-xl font-bold text-white dark:text-black">
                {id === 1 && <BriefcaseBusiness />}
                {id === 2 && <SquareUser />}
              </h2>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Experience;
