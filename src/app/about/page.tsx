'use client';
import React from 'react';
import Image from 'next/image';
import cyril from '../../../public/img/cyril.jpg';
import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import DecryptedText from '@/components/decrypttext';

function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="max-w-screen-2xl mx-auto flex flex-col-reverse lg:flex-row items-start justify-between min-h-screen px-13 py-40 md:py-10 md:px-10 lg:px-0 pt-30 md:pt-50 gap-10">
        
        {/* Left Section: Content */}
        <div className="flex flex-col space-y-2 md:space-y-6 w-full items-center text-center lg:items-start lg:text-left lg:w-2/3 ">
          
          {/* Name */}
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-black dark:text-white">
            <DecryptedText
              text="CYRIL IMPERIAL"
              animateOn="view"
              speed={155}
              parentClassName="all-letters"
              revealDirection="start"
              sequential
            />
          </h1>

          {/* Title */}
          <p className="italic text-xl sm:text-3xl text-black dark:text-white">
            <DecryptedText
              text="Developer & UI/UX Designer"
              animateOn="view"
              speed={90}
              parentClassName="all-letters"
              revealDirection="start"
              sequential
            />
          </p>

          {/* Description */}
          <p className="text-xs sm:text-lg md:text-2xl text-black dark:text-white">
            <DecryptedText
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin mi a orci facilisis, ac egestas enim malesuada. Curabitur non sapien vitae arcu dapibus aliquet."
              animateOn="view"
              speed={390}
            />
          </p>

          {/* Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center space-x-3 text-xs sm:text-base md:text-lg text-black dark:text-white">
              <MapPin className="w-3 h-3 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" />
              <DecryptedText
                text="Ortigas Center, Mandaluyong, Metro Manila"
                animateOn="view"
                speed={60}
                parentClassName="all-letters"
                revealDirection="start"
                sequential
              />
            </div>
            <div className="flex items-center space-x-3 text-xs sm:text-base md:text-lg text-black dark:text-white">
              <Mail className="w-3 h-3 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" />
              <DecryptedText
                text="cyrilimperial12@gmail.com"
                animateOn="view"
                speed={100}
                parentClassName="all-letters"
                revealDirection="start"
                sequential
              />
            </div>
            <div className="flex items-center space-x-3 text-xs sm:text-base md:text-lg text-black dark:text-white">
              <Phone className="w-3 h-3 sm:w-6 sm:h-6 text-gray-600 dark:text-gray-400" />
              <DecryptedText
                text="09151398321"
                animateOn="view"
                speed={200}
                parentClassName="all-letters"
                revealDirection="start"
                sequential
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2 md:gap-4 mt-1 md:mt-6 justify-center lg:justify-start">
            {[
              { href: '/about/skills', label: 'Skills' },
              { href: '/about/experience', label: 'Experience' },
              { href: '/about/education', label: 'Education' },
              { href: '/about/engagement', label: 'Engagement' },
              { href: '/', label: 'Download CV' },
            ].map((btn, idx) => (
              <motion.div
                key={btn.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="border border-gray-300 dark:border-white rounded-xl shadow-md dark:shadow-white/20 p-2 sm:p-4"
              >
                <Link
                  href={btn.href}
                  className="text-xs sm:text-base md:text-lg font-bold text-black dark:text-white"
                >
                  {btn.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <Image
              src={cyril}
              alt="Cyril Imperial"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-150 md:h-150 object-cover rounded-2xl shadow-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
