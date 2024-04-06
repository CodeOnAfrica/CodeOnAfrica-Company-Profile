import React from 'react'

const Schedule = () => {
  return (
    <div className='h-screen grid px-4 md:px-16 md:grid-cols-2 gap-2 items-center'>
      <div className='w-3/4'>
        <h1 className='text-5xl font-semibold'>Talk to us about your project</h1>
        <p className='text-xl mt-4'>Don't hesitate to get in touch with us! Whether you have a project in mind
           or simply want to learn more about our services, our team is ready to help.</p>

      </div>

      {/*  */}
      <div className=' flex justify-center gap-4 md:gap-16 items-center'>
      <button className='md:px-16 px-4 py-4 text-xl font-medium text-gray-100 bg-blue-500'>Contact Us</button>

      <button className='md:px-16 px-4 py-4 text-xl font-medium border-blue-500  text-blue-500 bg-white border-2'>View Services</button>

      
      </div>

    </div>
  )
}

export default Schedule