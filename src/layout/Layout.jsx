import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import MegaNavbar from '../components/MegaNavbar'


const Layout = () => {
  return (
    <div className=' relative overflow-y-scroll no-scrollbar h-screen '>
      <MegaNavbar/>
      <div className='md:pt-20 pt-16'>
      <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout