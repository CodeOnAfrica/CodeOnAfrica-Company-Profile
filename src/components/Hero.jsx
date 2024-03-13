import React from 'react'



const Hero = () => {
  return (
    <div className='md:px-16 px-4 pt-16 grid md:grid-cols-3 items-start'>
      <div className='md:col-span-2 md:w-5/6'>
        <h1 className='text-5xl md:text-7xl font-bold leading-tight'>Building Tomorrow's Tech Today</h1>
      </div>

      {/* second */}
      <div className='pt-2'>
        <div className='bg-blue-200 rounded-lg flex items-center p-4 bg-opacity-45'>
          <div className='p-2 rounded-full  border border-dashed border-black decoration-dotted bg-blue-100 '>
          <img src={'/Images/mzee.jpg'} alt="" className='h-20 w-20 rounded-full'/>
          </div>
          {/* 2 */}
          <div className='p-2  rounded-full hover:border hover:border-dashed hover:border-black   bg-blue-100'>
          <img src={'/Images/lady.jpg'} alt="" className='h-20 w-20 rounded-full'/>
          </div>
          {/* 3 */}
          <div className=' p-2 rounded-full hover:border hover:border-dashed hover:border-black  bg-blue-100'>
          <img src={'/Images/guy.jpg'} alt="" className='h-20 w-20 rounded-full'/>
          </div>

          <div>
            <h2 className='text-6xl font-extrabold text-opacity-80 text-blue-950'>10+</h2>
            <p className=' text-black capitalize text-md font-medium px-2'>Tech Experts</p>
          </div>
        </div>
        <p className='mt-4 text-lg text-gray-500'>Meet our team of experts dedicated to delivering excellence
           in every project. Passionate, skilled, and ready to innovate! </p>
      </div>
      
    </div>
  )
}

export default Hero