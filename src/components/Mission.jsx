import React from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Mission = () => {
  return (
    <div className=' px-4 md:px-16 py-20 grid md:grid-cols-5 gap-8'>
      <div className='md:col-span-2 grid gap-4'>
        <h1 className=' text-5xl md:pr-8 font-semibold'>We Collaborate to Build The Innovative Tech Ecosystem</h1>
        <p className=' text-lg  text-gray-600 md:pr-8 '> Our mission is to redefine the future through technology.
         Believing in the power of innovation, we strive to create solutions that matter,
          going beyond boundaries. Our commitment is rooted in a shared vision – shaping a 
          world where technology exceeds expectations, making a lasting impact.</p>
          <div>
            <div className='px-8 py-4 bg-blue-100 grid  rounded-lg'>
              <p className='text-xl font-medium text-gray-800'>Software Development</p>
            </div>
            <div className='px-8 py-4 bg-blue-100 grid mt-4 rounded-lg'>
              <p className='text-xl font-medium text-gray-800'>AI Intergration</p>
            </div>
            <div className='px-8 py-4 bg-blue-100 grid mt-4 rounded-lg'>
              <p className='text-xl font-medium text-gray-800'>Payment Intergration</p>
            </div>
            <div className='px-8 py-4 bg-blue-100 grid mt-4 rounded-lg'>
              <p className='text-xl font-medium text-gray-800'>Data Analytics</p>
            </div>
          </div>
      </div>
      <div className='rounded-xl overflow-hidden md:col-span-2'>
        <img src={'/Images/about.jpg'} className='h-full w-full object-cover' alt="" />
      </div>
      <div className='grid md:grid-rows-5'>
        <div className='md:row-span-2'>
        <p className='text-lg text-gray-500'>Learn more about the minds behind the magic, the values that guide us, and how together, 
          we turn possibilities into reality.</p>
        <Link to='/about'>
          <button className='px-4 py-4 flex items-center gap-2 bg-blue-800 bg-opacity-70 rounded-full my-4 text-white text-lg font-medium'>More About us <FaLongArrowAltRight/></button>
      </Link>
      </div>

      <div className='md:row-span-3 rounded-2xl overflow-hidden'>
        <img src={'/Images/culture1.jpg'} alt="" />
      </div>
      </div>

    </div>
  )
}

export default Mission