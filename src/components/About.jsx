import React from 'react'
import Aboutimage from '../../public/Images/about.jpg'
import Team from './Team'
import OurValues from './OurValues'
import Schedule from './Schedule'

function About() {
  return (
    <div>
    <div className='grid md:py-20 py-8 md:px-16 px-4 gap-8 '>
      <div className=' '>
        <h1 className='md:text-5xl text-4xl font-semibold text-black leading-8
           decoration-blue-900 mb-4 '>Revolutionizing technology, empowering businesses. <br/>Together, we shape the future.
         </h1>
       
      </div>
      <div>
        <img className='w-full rounded-xl h-[40vh] object-cover' src = {Aboutimage} alt="" />
      </div>
      <div>
      <p className='text-2xl py-4 leading-8'>Founded by a diverse network of partners, our team embodies a collective passion for technology and innovation. 
      From diverse backgrounds,
       we unite to craft cutting-edge solutions, empowering clients worldwide to thrive in the digital age.</p>
      </div>
      </div>

      {/*  */}
      <OurValues/>
      <Team/>
      <Schedule/>
    </div>
  )
}

export default About
