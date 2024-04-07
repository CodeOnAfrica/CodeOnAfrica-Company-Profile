import React from 'react';
import { FaBrain, FaHandshake, FaLock } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-start justify-center px-4 md:px-16 py-20">
      <div className='bg-gray-400 w-full h-[1px] mb-12'></div>
      <h2 className="text-3xl font-bold mb-8 text-blue-500">Why Choose Us?</h2> {/* Title added here */}
      <div className="md:w-3/4 flex flex-col md:flex-row justify-between  items-center">
        <div className="flex gap-2 items-center">
        <h3 className="text-5xl font-bold  text-blue-500">10+</h3>
          <h3 className="text-xl font-semibold ">Projects Completed</h3>
        </div>
        <div className="flex items-center gap-2">
          <FaHandshake size={44} className="text-blue-500 " />
          <h3 className="text-xl font-semibold ">Client-Centric Approach</h3>
        </div>
        <div className="flex items-center gap-2">
          <FaLock size={40} className="text-blue-500 " />
          <h3 className="text-xl font-semibold ">Quality, Reliable & Secure Software</h3>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
