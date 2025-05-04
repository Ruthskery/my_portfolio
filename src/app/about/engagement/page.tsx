import React from 'react';
import Navbar from '../navbar';

function Engagement() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">

      <Navbar/>

      {/* Right Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 absolute right-70">
       <h1>Right Content</h1>
      </div>

    </div>
  );
}

export default Engagement;
