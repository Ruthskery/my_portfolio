import React from 'react';
import Navbar from '../navbar';

function Engagement() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      <div className="flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          Speaker Engagement
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl w-full bg-white rounded-2xl shadow-lg p-8">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src="/images/bitcon-2024.jpg" // Replace with your actual image path
              alt="BITCON 2024 Speaker Engagement"
              className="rounded-xl w-full object-cover shadow-md"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
              Student Panel Speaker — BITCON 2024
            </h2>
            <p className="text-sm text-gray-500 mb-4">November 25, 2024 · Legazpi City Expo Center</p>

            <ul className="list-disc list-inside space-y-2 text-base leading-relaxed">
              <li>
                Represented BSIT students as a <strong>leader</strong>, <strong>working student</strong>, and <strong>council president</strong>.
              </li>
              <li>
                Spoke on <strong>emerging IT trends</strong>, <strong>student leadership</strong>, and <strong>community building</strong>.
              </li>
              <li>
                Engaged an audience of <strong>500+ attendees</strong>, sharing insights into the <strong>future of the IT industry</strong>.
              </li>
            </ul>

            <div className="mt-6 text-right">
              <a
                href="https://www.linkedin.com/in/cyril-imperial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline hover:text-indigo-700"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Engagement;
