import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  '/Images/logo/acdn.png',
  '/Images/logo/atibule.png',
  '/Images/logo/Syncfusion.png',
];

const OurPartners = () => {
  return (
    <div className='md:p-8 p-2  '>
      <h2 className="text-2xl font-bold text-center mb-8">Our Partners</h2>
    <div className="bg-gray-100 py-4 mx-8 rounded-full">
      <div className="overflow-hidden">
        <motion.div
          className="flex items-center space-x-10 animate-scroll"
          initial={{ x: '100%' }}
          animate={{ x: '-100%' }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner Logo ${index + 1}`}
              className="w-32 h-auto"
            />
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default OurPartners;
