import React from 'react'



const Hero = () => {
  return (
    <div className='px-16 pt-16 grid grid-cols-3 items-start'>
      <div className='col-span-2 w-5/6'>
        <h1 className='text-7xl font-bold leading-tight'>Bring The Future For The Technology Companies</h1>
      </div>

      {/* second */}
      <div className='pt-2'>
        <div className='bg-blue-200 rounded-lg flex items-center p-4 bg-opacity-45'>
          <div className='p-2 rounded-full z-20 border border-dashed border-black decoration-dotted bg-blue-100 '>
          <img src={'/Images/mzee.jpg'} alt="" className='h-20 rounded-full'/>
          </div>
          {/* 2 */}
          <div className='p-2  rounded-full hover:border hover:border-dashed hover:border-black -translate-x-8 z-10 bg-blue-100'>
          <img src={'/Images/lady.jpg'} alt="" className='h-20 rounded-full'/>
          </div>
          {/* 3 */}
          <div className=' p-2 rounded-full hover:border hover:border-dashed hover:border-black -translate-x-16 z-5 bg-blue-100'>
          <img src={'/Images/guy.jpg'} alt="" className='h-20 rounded-full'/>
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