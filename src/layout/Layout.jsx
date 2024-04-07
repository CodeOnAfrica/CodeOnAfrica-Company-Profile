import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import MegaNavbar from '../components/MegaNavbar'


const Layout = () => {
  return (
    <div className='w-screen relative no-scrollbar'>
      <MegaNavbar/>
      <div className='md:pt-28'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout