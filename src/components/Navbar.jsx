import React, { useState } from 'react'
import Logo from '/Images/logo.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false)
  const menuitems = [
    {path:'/', link:'Home'},
    {path:'/about', link:'About Us'},
    {path:'/services', link:'Services'},
    {path:'', link:'Pages', dropdown:[]},
    {path:'/team', link:'Teams'},
    {path:'/blog', link:'Blog'},
  ]

  return (
    <div className='px-16 py-4 flex items-center'>
      <div className='w-1/4'>
        <img src={Logo} alt="" className='h-32' />
      </div>
      <div className='w-1/2 flex items-center gap-8 text-lg font-medium '>
        {menuitems.map((item, index)=>(
          <div>
          <Link key={index+item.link} onClick={()=>setIsOpen(!isOpen)} className='hover:text-blue-500 hover:border-2 hover:border-black hover:rounded-full py-2 px-4' to={item.path}>{item.link}</Link>
          {isOpen && (
          <div>
            {item.dropdown && item.dropdown.map((item)=>{
              <p>{item}</p>
            })}
          </div>
           )}
          </div>
        ))}
      </div>
      <div className='flex justify-end w-1/4'>
      <button className='bg-black text-white text-lg font-medium px-8 py-4  rounded-full'>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar