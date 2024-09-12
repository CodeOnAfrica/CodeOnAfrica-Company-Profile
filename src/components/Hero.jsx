import React from 'react'
import { FaHandsHelping } from 'react-icons/fa'
import { MdArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'



const Hero = () => {
  return (
    <div className='md:w-full w-screen md:px-16 px-4 pt-8 grid md:grid-cols-3 items-start'>
      <div className='md:col-span-2 md:w-5/6'>
        <h1 className='text-4xl md:text-7xl font-bold leading-tight'>Building Tomorrow's Tech Today</h1>

{/* banner 1 */}
        <div className=' bg-blue-800 bg-opacity-70 p-4 gap-2 items-start  mt-4 justify-between md:items-center  md: rounded-2xl flex '>
        <p className='p-3 rounded-full bg-blue-950 bg-opacity-80 text-white h-12 w-12'><FaHandsHelping size={25}/></p>
         <Link to={'/about'}>
          <div className=' '>
        <h1 className='text-2xl font-semibold text-white'>Great Tech Ecosystem</h1>
        <p className='text-md text-gray-100'>A dynamic hub for innovation and excellence</p>
        </div>
        </Link>
        <Link to={'/about'} className='border hidden md:block fl text-white w-16 h-16 rounded-full border-white p-4'>
          <MdArrowOutward size={32}/>
        </Link>
      </div>

      {/* banner 2 */}
      <div className='md:py-4 py-2 md:px-8 px-4 flex justify-between gap-4 mt-4 bg-blue-100 rounded-xl md:rounded-2xl'>
        {/* <div className=''>
          <h1 className='text-4xl font-bold text-blue-950 text-opacity-90'>8+</h1>
        <h2 className='font-medium whitespace-nowrap my-1 text-md'>Affiliate Company</h2>
        </div> */}
        <p>Discover how our collaborations redefine industry standards and drive innovation.</p>
      </div>

      {/* cta */}
      <div className=' mt-8 md:flex  grid gap-2 items-center md:gap-8'>
        <button className="bg-sky-950 font-medium text-white px-8 py-3 rounded-full" > Request Quote</button>
        <button className="text-sky-950 shadowy border border-sky-950 font-medium bg-white px-8 py-3 rounded-full" > <a href="mailto:info@codeonafrica.com">info@codeonafrica.com</a></button>
        <button className="text-sky-950 shadowy border border-sky-950  font-medium bg-white px-8 py-3 rounded-full" ><a href="tel:+254114266430">+254 114 266 430</a></button>
      </div>
      </div>

      <div className='relative h-[60vh] mt-8 md:mt-0 md:-ml-8 w-full'>
        <img src="/Images/optimize.png" alt="" className=' rounded-md w-[90%] object-fit  overflow-hidden absolute top-0 md:left-8 z-10 ml-4 h-full md:w-full bg-cover' />
        <div className=' pt-8 mt-8 bg-black w-64 h-full rounded-md'></div>
      </div>
        {/*  */}
      
      
    </div>
  )
}

export default Hero