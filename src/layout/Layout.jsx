import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import MegaNavbar from '../components/MegaNavbar'


const Layout = () => {
  return (
    <div className=' relative overflow-y-scroll no-scrollbar h-screen '>
      <MegaNavbar/>
      <div className='md:pt-28 pt-20 '>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout