import React, { useState, useEffect } from 'react';
import Logo from '/Images/logo.webp';
import { Link } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showShadow, setShowShadow] = useState(false); // State to track shadow display
  const menuitems = [
    { path: '/', link: 'Home' },
    { path: '/about', link: 'About Us' },
    { path: '/services', link: 'Services' },
    { path: '', link: 'Pages', dropdown: [{ path: '/about', link: 'Portfolio' }, { path: '/faq', link: 'FAQ' }] },
    { path: '/team', link: 'Teams' },
    { path: '/blog', link: 'Blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scroll position is greater than 40vh
      if (window.scrollY > window.innerHeight * 0.4) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (index) => {
    setMenuOpen(false);
    setIsOpen(index === isOpen ? null : index);
  };

  return (
    <div className={`md:px-16 fixed bg-white bg-opacity-95 z-100  top-0 right-0 w-full px-4 flex justify-between items-center transition-all duration-300 ${showShadow ? 'shadow-md' : ''}`}>
      <Link to={'/'} className='md:w-1/4'>
        <img src={Logo} alt="" className='h-28 translate-y-4' />
      </Link>
      <HiMenuAlt1 size={35} onClick={() => setMenuOpen(!menuOpen)} className='md:hidden block text-blue-950 text-opacity-80' />

      <div className='w-1/2 hidden md:flex items-center gap-8 text-lg font-medium '>
        {menuitems.map((item, index) => (
          <div key={index + item.link} className='relative'>
            <Link onClick={() => handleClick(index)} className='hover:text-blue-500  flex gap-2 items-center hover:underline hover:underline-offset-8 hover:decoration-black hover:decoration-4  hover:border-black hover:rounded-full py-2 px-2' to={item.path}>
              {item.link}{item.dropdown && item.dropdown ? (isOpen === index ? <FaChevronUp /> : <FaChevronDown />) : ''}
            </Link>
            {item.dropdown && isOpen === index && (
              <div className='absolute top-full grid left-0 shadow-md p-4 rounded-lg w-40'>
                {item.dropdown &&
                  item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <Link to={dropdownItem.path} key={dropdownIndex}>{dropdownItem.link}</Link>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className='bg-black text-white text-lg font-medium px-8 py-4  rounded-full'>Book Appointment</button>
      <div className=' hidden md:flex justify-end w-1/4'>
        <Link to='/contact' className='bg-black text-white text-lg font-medium px-8 py-4 rounded-full'>Book Appointment</Link>
      </div>

      {menuOpen && (
        <div>
          <div className='z-100 absolute bg-opacity-30 bg-black top-0 right-0 w-full h-full'></div>
          <div className='fixed  top-2 w-3/4  px-4 right-0 h-[96vh]  rounded-l-2xl bg-white'>
            <div className='relative py-24 '>
              <MdClose onClick={() => setMenuOpen(false)} size={25} className='absolute top-8 right-8' />
              {menuitems.map((item, index) => (
                <div key={index + item.link} className='relative'>
                  <Link onClick={() => setMenuOpen(false)} className='hover:text-blue-500  flex gap-2 items-center hover:border-2 hover:border-black hover:rounded-full py-2 px-2' to={item.path}>
                    {item.link}{item.dropdown && item.dropdown ? <FaChevronDown /> : ''}
                  </Link>
                  {item.dropdown && isOpen && (
                    <div className=' grid gap-2 p-4 rounded-lg w-40'>
                      {item.dropdown &&
                        item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <Link to={dropdownItem.path} key={dropdownIndex}>{dropdownItem.link}</Link>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
              <button className='bg-black text-white text-lg font-medium px-8 py-4  rounded-full'>Book Appointment</button>
          
            <Link to='/contact'>
              <button className='bg-black text-white text-lg font-medium px-8 py-4  rounded-full'>Book Appointment</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
