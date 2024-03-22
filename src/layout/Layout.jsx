import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import MainNavbar from '../components/MainNavbar'


const Layout = () => {
  return (
    <div className='w-screen relative'>
      <MainNavbar/>
      <div className='md:pt-28'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout