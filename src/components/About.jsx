import React from 'react'
import Aboutimage from '../../public/Images/about.jpg'

function About() {
  return (
    <div className='grid md:grid-cols-2 md:py-20 py-8 md:px-16 px-4 gap-8 bg-cyan-50'>
      <div className='px-4  md:py-8'>
        <h1 className='md:text-5xl text-4xl font-bold text-black
         underline decoration-8 my-4 underline-offset-8 decoration-blue-900  '>About Us</h1>
        <p className='text-lg mt-8 md:mt-4'>
        At CodeOnAfrica,<span style={{color:"blue"}}>innovation is at the heart of everything we do</span> we're dedicated to revolutionizing Africa's digital landscape. As a leading coding company, we specialize in crafting innovative software solutions tailored to the unique needs of our clients.
        We embrace emerging technologies and stay ahead of the curve to ensure that our clients remain competitive in today's fast-paced world. <span style={{color:"blue"}}> Whether it's developing scalable web applications, intuitive mobile apps, or robust e-commerce platforms.</span> we are dedicated to delivering high-quality products that exceed our clients' expectations.
        With a focus on excellence and a passion for technology, we empower businesses to thrive in the digital age. Join us in shaping the future of Africa's tech ecosystem.
        </p>
      </div>
      <div>
        <img className='w-full rounded-xl' src = {Aboutimage} alt="" />
      </div>
    </div>
  )
}

export default About
