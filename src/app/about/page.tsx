import React from 'react';
import Image from 'next/image';
import cyril from '../../../public/img/cyril.jpg';
import Link from 'next/link';
import { MapPin, Mail, Phone } from 'lucide-react'; // Import the required icons

function About() {

  return (
    <div className="flex min-h-screen ml-35 mr-200 mt-60">
     {/* Content Section on Left */}
      <div className="flex flex-col items-start justify-start text-left space-y-6">
        {/* Main text: Cyril Imperial & Developer */}
        <h1 className="text-5xl md:text-8xl font-black text-black dark:text-white">
          CYRIL IMPERIAL
        </h1>
        <p className="italic text-5xl text-black dark:text-white">
          Developer & UI/UX Designer
        </p>

        {/* Add more content here to make scrolling possible */}
        <p className="text-3xl text-black dark:text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sollicitudin
          mi a orci facilisis, ac egestas enim malesuada. Curabitur non sapien
          vitae arcu dapibus aliquet.
        </p>

       {/* Contact Information */}
       <div className="space-y-1">
          {/* Address */}
          <div className="flex items-center space-x-3 text-lg text-black dark:text-white">
            <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <span>Ortigas Center, Mandaluyong, Metro Manila</span>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3 text-lg text-black dark:text-white">
            <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <span>cyrilimperial12@gmail.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3 text-lg text-black dark:text-white">
            <Phone className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            <span>09151398321</span>
          </div>
        </div>

        {/* Improved Buttons */}
        <div className="flex space-x-4 mt-6">
          <Link href="/about/skills">
            <button className="px-6 py-3 text-xl font-semibold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105">
              Skills
            </button>
          </Link>
          <Link href="/about/experience">
            <button className="px-6 py-3 text-xl font-semibold text-white bg-green-500 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105">
              Experience
            </button>
          </Link>
          <Link href="/about/education">
            <button className="px-6 py-3 text-xl font-semibold text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 transform hover:scale-105">
              Education
            </button>
          </Link>
          <Link href="/about/engagement">
            <button className="px-6 py-3 text-xl font-semibold text-white bg-purple-500 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300 transform hover:scale-105">
              Engagement
            </button>
          </Link>
        </div>
      </div>

      
      {/* Image positioned on the bottom right */}
      <div className="absolute bottom-15 right-15">
        <Image
          src={cyril}
          alt="Cyril Imperial"
          className="w-32 h-32 md:w-150 md:h-150 object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}

export default About;
