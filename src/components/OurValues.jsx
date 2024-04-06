import React, { useState } from 'react';

const OurValues = () => {
  const values = [
    {
      title: 'Professionalism',
      description: `At CodeOnAfrica, innovation is at the heart of everything we do.
       We specialize in crafting innovative software solutions tailored to the unique needs
        of our clients. We embrace emerging technologies and ensure our clients remain competitive. 
        With a focus on excellence, we empower businesses to thrive.`,
    },
    {
      title: 'Quality',
      description: `We prioritize quality in everything we do.
       From scalable web applications to intuitive mobile apps and robust e-commerce platforms,
        we deliver high-quality products that exceed our clients' expectations.`,
    },
    {
      title: 'Collaboration',
      description: `We believe in collaboration and teamwork.
       By working closely with our clients and partners, we ensure that our 
       solutions address their specific needs and challenges effectively.`,
    },
    {
      title: 'Innovation',
      description: `Innovation is our driving force. We stay ahead of the curve 
      by embracing emerging technologies and trends, enabling us to deliver cutting-edge
       solutions that drive success for our clients.`,
    },
    {
      title: 'Customer Satisfaction',
      description: `Customer satisfaction is our top priority. 
      We are committed to understanding our clients' requirements and delivering 
      solutions that not only meet but exceed their expectations.`,
    },
  ];

  const [hoveredTitle, setHoveredTitle] = useState(values[0].title);

  return (
    <div className='pt-8 '>
      <div className='md:px-16 px-4 my-8'> 
      <h1 className='text-5xl font-semibold '>Guiding principles</h1>
      <p className='text-xl font-medium mt-4 text-gray-500'>Five company values shape the way we operate</p>
      </div>

    <div className="bg-blue-700 py-20 md:px-16 px-4  text-white">
      <div className=" justify-center">
        <div className='flex md:flex-row flex-col  md:gap-8 gap-4 md:w-3/4 items-center'>
          {values.map((item, index) => (
            <div key={index} className={`${hoveredTitle === item.title ?  'w-full bg-white text-blue-500 px-4 py-2 rounded-full':'w-full border-white border-2 text-white rounded-full px-4 py-2'}`}
              onMouseEnter={() => setHoveredTitle(item.title)}
            >
              <p className="font-medium cursor-pointer text-md md:text-xl ">{item.title}</p>
            </div>
          ))}
        </div>
        {/* description */}
        <div className='grid md:grid-cols-2 gap-16'>
          <div className=' mt-16'>
            {values.map((item, index) => (
              <div key={index} className={`${hoveredTitle === item.title ? 'block' : 'hidden'}`}>
                <p className='text-5xl my-4 font-bold'>{item.title}</p>
                <p className={`text-start  text-gray-200  text-xl leading-10 `}>{item.description}</p>
              </div>
            ))}
          </div>
          {/* pattern */}
          <div className='relative grid grid-cols-3   items-start pt-20 gap-8'>
            <div className='w-40 h-40  border-white rounded-lg border-4'></div>
            <div className='w-40 h-40  border-white rounded-lg border-4 mt-20'></div>
            <div className='w-40 h-40  border-white rounded-lg border-4'></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OurValues;
