import React from 'react'
import {useNavigate} from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#03113f] '>
    <div className=' px-4 md:px-16 grid items-start md:grid-cols-4 gap-8 pt-16 pb-8'>
      <div>
        <img src={'/Images/logo-white.webp'} alt="" className='h-40 w-40 object-cover md:scale-125 md:-translate-y-4' />
        <p className='text-lg font-normal text-white/90'>Pioneering tech solutions that redefine the future. 
        </p>
      </div>


      <div className='grid grid-cols-2 gap-2 text-white text-lg font-medium'>
        <h2 className='text-xl'>Our Company</h2>
        <ul className=' text-xl grid gap-2  capitalize text-gray-400'>
          <li onClick={()=>navigate('/about')} className='hover:text-blue-400 cursor-pointer hover:font-light transition-all duration-200'>About Us</li>
          <li onClick={()=>navigate('/portfolio')} className='hover:text-blue-400 cursor-pointer hover:font-light transition-all duration-200'>Portfolio</li>
          <li onClick={()=>navigate('/about')} className='hover:text-blue-400 cursor-pointer hover:font-light transition-all duration-200'>Our Team</li>
          <li onClick={()=>navigate('/blog')} className='hover:text-blue-400 cursor-pointer hover:font-light transition-all duration-200'>Blog</li>
          <li onClick={()=>navigate('/contact')} className='hover:text-blue-400 cursor-pointer hover:font-light transition-all duration-200'>Contact Us</li>
        </ul>
      </div>


      <div className='grid grid-cols-2 gap-2 text-white text-lg font-medium'>
        <h2 className='text-xl'>Important Links</h2>
        <ul className=' text-xl grid gap-2  capitalize text-gray-400'>
          <li  onClick={()=>navigate('/service-policy')} className='hover:text-blue-400 cursor-pointer hover:font-light transition-all duration-200'>Service Policy</li>
          <li onClick={()=>navigate('/terms-conditions')} className='hover:text-blue-400 cursor-pointer hover:font-light transition-all duration-200'>Terms & Conditions</li>
          <li onClick={()=>navigate('/contact')} className='hover:text-blue-400cursor-pointer hover:font-light transition-all duration-200'>Support Center</li>
          <li onClick={()=>navigate('/blog')} className='hover:text-blue-400 cursor-pointer hover:font-light transition-all duration-200'>Blog</li>
          <li onClick={()=>navigate('/contact')} className='hover:text-blue-400 cursor-pointer hover:font-light transition-all duration-200'>Contact Us</li>
        </ul>
      </div>

      <div className='grid grid-cols-2 gap-2 text-white text-lg font-medium'>
        <h2 className='text-xl'>Social Media</h2>
        <ul className='text-xl grid gap-2  capitalize text-gray-400'>
          <li className='hover:text-blue-400 hover:font-light transition-all cursor-pointer duration-200'>
            <a href="https://www.instagram/codeonafrica">Instagram </a></li>
          <li className='hover:text-blue-400 hover:font-light transition-all cursor-pointerduration-200'>
            <a href="https://www.facebook.com/profile.php?id=61556826287759">Facebook</a></li>
          <li className='hover:text-blue-400 hover:font-light transition-all cursor-pointer duration-200'>
            <a href="https://www.linkedin.com/company/codeon-africa">Linkedin</a></li>
          <li className='hover:text-blue-400 hover:font-light transition-all cursor-pointer duration-200'>
            <a href="https://www.twitter.com/codeonafrica">Twitter X</a> </li>
          <li className='hover:text-blue-400 hover:font-light transition-all duration-200'>
            <a href="https://github.com/CodeOnAfrica">Github</a></li>
        </ul>
      </div>
    </div>
    <div className='bg-gray-200 w-[92%] mx-auto my-4  h-[0.05em]'></div>
    <div className='pb-4 px-4  md:px-16 flex items-center justify-between'>
      <h2 className='text-gray-400 text-sm font-medium'>Copyright  © 2024  CodeOn Africa. All Rights Reserved</h2>
      <div className='flex items-center gap-4'>
        <p onClick={()=>navigate('/terms-conditions#terms')} className='text-sm font-medium cursor-pointer underline text-gray-400'>Terms of Service</p>
        <p  onClick={()=>navigate('/terms-conditions#privacy')} className='text-sm font-medium cursor-pointer underline text-gray-400'>Privacy Policy</p>
      </div>

    </div>

   
    </div>
  )
}

export default Footer