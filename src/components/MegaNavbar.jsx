import React, { useState, useEffect } from 'react';
import Logo from '/Images/logo.webp';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(null);
  const [showShadow, setShowShadow] = useState(false); // State to track shadow display
  const [megaMenuData, setMegaMenuData] = useState(null); // State to store mega menu data
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);
  const navigate = useNavigate()

  // Mock data for services mega menu
  const servicesMockData = [
    { path:'/services',title: 'Web Development', description: 'We specialize in creating modern and responsive websites that drive traffic and engage users.', path: '/web-development' },
    { path:'/sevices',title: 'Mobile App Development', description: 'From iOS to Android, we build custom mobile apps that elevate user experiences.', path: '/mobile-app-development' },
    {path:'/services', title: 'E-commerce Solutions', description: 'Boost your online sales with our custom e-commerce platforms tailored to your business.', path: '/e-commerce-solutions' },
    // Add more services as needed
  ];

 // Mock data for pages dropdown
const pagesMockData = [
  { 
    title: 'Portfolio', 
    description: 'Explore our portfolio showcasing our latest projects.', 
    path: '/portfolio' 
  },
  { 
    title: 'FAQ', 
    description: 'Find answers to frequently asked questions about our services.', 
    path: '/faq' 
  },
  { 
    title: 'Our Quotations', 
    description: 'Discover quotes and testimonials from our satisfied clients.', 
    path: '/quotations' 
  },
  { 
    title: 'Resources', 
    description: 'Access helpful resources and guides related to software development.', 
    path: '/resources' 
  },
  { 
    title: 'Case Studies', 
    description: 'Explore in-depth case studies highlighting our successful projects.', 
    path: '/case-studies' 
  }
  // Add more 
];


  const menuitems = [
    { path: '/about', link: 'About' },
    { path: '/services', link: 'Services', dropdown: servicesMockData }, // Added dropdown property
    { link: 'Our Process', dropdown: pagesMockData }, // Updated to include pagesMockData
    { path: '/resources', link: 'Resources' },
    { path: '/blog', link: 'Blog' },
    { path: '/contact', link: 'Contact' },

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

  const handleMouseEnter = (index, dropdown) => {
    setIsCompanyHovered(true);
    if (dropdown) {
      setMegaMenuData(dropdown); // Set mega menu data based on dropdown item
    } else {
      setMegaMenuData(null);
    }
  };

  const handleMouseLeave = () => {
    setIsCompanyHovered(false); // Commented out to keep mega menu visible after leaving dropdown item
    setMegaMenuData(null); // Commented out to keep mega menu visible after leaving dropdown item
  };

  return (
    <div className={`md:px-16 md:fixed z-50  bg-white md:bg-opacity-95 z-100 top-0 right-0    shadow-gray-50  flex  items-center transition-all duration-300 ${showShadow ? 'shadow-md' : ''}`}>
        <Link to={'/'} className='hidden md:block w-64'>
          <img src={Logo} alt="" className='md:h-32 h-24  ' />
        </Link>

{/* mobile logo */}
        <div className='md:hidden flex justify-between items-center w-full px-4 bg-white bg-opacity-95 fixed top-0 left-0'>
        <Link to={'/'} className=''>
          <img src={Logo} alt="" className=' h-20  ' />
        </Link>
        <HiMenuAlt1 size={28} onClick={() => setMenuOpen(!menuOpen)} className='md:hidden block text-blue-950 text-opacity-80' />
        </div>
        
        <div className='hidden md:flex justify-between gap-8 items-center w-5/6'>
          {/* navbar */}
          <div className='md:w-1/2 hidden md:flex items-center gap-4 text-lg font-medium '>
          {menuitems.map((item, index) => (
            <div key={index + item.link} className='relative flex'>
              <Link
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index, item.dropdown)}
                className='hover:text-blue-500 whitespace-nowrap justify-center  flex  items-center hover:underline hover:underline-offset-8 hover:border-black hover:rounded-full  px-2'
                to={item.path}
              >
                 {item.link}
                {item.dropdown && item.dropdown ? (megaMenuData ==index ? <FiChevronUp /> : <FiChevronDown />) : ''}
              </Link>
            </div>
          ))}
        </div>
        <div className=' hidden md:flex item-center gap-2 justify-between '>
        <button
            className='border-black border-2 text-black text-md font-medium px-2 py-2 rounded-xl hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2'
            onClick={() => window.location.href = 'tel:+254114266430'}
          >
             Call: +254 114 266 430
          </button>          
          <Link to='/contact'><button className='bg-black text-white text-md border-black border-2 font-medium py-2  px-2 rounded-xl'>Book Appointment</button></Link>
        </div>

        </div>
      

      {menuOpen && (
        <div>
          {/* <div className='z-100 fixed bg-opacity-30 bg-black top-0 right-0 w-full h-full'></div> */}
          <div className='fixed  top-0 w-screen  px-4 right-0 h-full  text-white bg-blue-800 '>
            <div className='relative pt-24 w-full '>
              <MdClose onClick={() => setMenuOpen(false)} size={25} className='absolute top-8 right-8' />
              {menuitems.map((item, index) => (
                <div key={index + item.link} className=''>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    className='hover:text-blue-500 text-xl  flex gap-2 items-center hover:border-2 hover:border-black hover:rounded-full py-2 px-2'
                    to={item.path}
                  >
                    {item.link}
                    {item.dropdown && item.dropdown ? (megaMenuData ==index ? <FiChevronUp /> : <FiChevronDown />) : ''}
                    </Link>
                    <hr></hr>
                </div>
              ))}
            </div>
            <div className=' bottom-4 left-0 mt-40  flex flex-col item-center gap-2 justify-between '>
        <button
            className='border-white border-2 text-center  text-white text-md font-medium py-2 rounded-xl hover:bg-black hover:text-white transition-all duration-300 '
            onClick={() => window.location.href = 'tel:+254114266430'}
          >
             Call: +254 114 266 430
          </button>          
          <Link to='/contact'><button className='bg-black w-full text-white text-md border-black border-2 font-medium py-2  px-2 rounded-xl'>Book Appointment</button></Link>
        </div>
          </div>
        </div>
      )}

      {megaMenuData && (
        <div
          className='absolute px-16 top-full left-0 grid grid-cols-4 border-t border-gray-200 bg-white shadow-lg w-full p-4'
          onMouseEnter={() => setIsCompanyHovered(true)}
          onMouseLeave={() => setMegaMenuData(false)}
        >
        <div className='w-3/4 py-8'>
            <h2 className='text-3xl font-bold'>Discuss Your Project</h2>
            <p className='text-lg mt-4 text-gray-400'>Ready to Discuss your Project?. Hit the link below to get in touch and scedule a meeting</p>
            <button onClick={()=>navigate('/contact')} className='px-8 py-2 text-lg font mt-4 medium text-white bg-black'>Schedule a Meet</button>
            </div>
        <div className="col-span-3 py-8 gap-8 items-start  grid-cols-3 grid">
          {megaMenuData.map((menuItem, index) => (
            <div onClick={()=>navigate(menuItem.path)} key={index}>
              <h3 className='font-semibold mb-2'>{menuItem.title}</h3>
              <p>{menuItem.description}</p>
              <Link className='font-bold text-lg text-blue-500' to={menuItem.path}>Learn More</Link>
            </div>
          ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
