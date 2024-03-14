import React from 'react'
import { FaHandsHelping } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'



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
        {/*  */}
        <div className='md:col-span-2  grid md:grid-cols-3 my-8 gap-8'>
      <div className='md:col-span-2 bg-blue-800 bg-opacity-70 p-4 h-60  md: rounded-2xl  '>
        <p className='p-3 rounded-full bg-blue-950 bg-opacity-80 text-white w-12'><FaHandsHelping size={25}/></p>
        
         <Link to={'/about'}>
          <div className=' bottom-4 left-4 py-8 md:py-4 mt-8 md:mt-16'>
        <h1 className='text-3xl font-semibold text-white'>Great Tech Ecosystem</h1>
        <p className='text-lg text-gray-100'>A dynamic hub for innovation and excellence</p>
        </div>
        </Link>
        <Link to={'/about'} className='border hidden md:block float-end md:-translate-y-20 bottom-4 right-4 text-white w-16 h-16 rounded-full border-white p-4'>
          <MdArrowOutward size={32}/>
        </Link>

      </div>
      <div className='py-4 px-8 bg-blue-100 rounded-2xl'>
        <h1 className='text-6xl font-bold text-blue-950 text-opacity-90'>8+</h1>
        <h2 className='font-medium my-1 text-lg'>Affiliate Company</h2>
        <p>Discover how our collaborations redefine industry standards and drive innovation.</p>
      </div>
      </div>
      
      
    </div>
  )
}

export default Hero