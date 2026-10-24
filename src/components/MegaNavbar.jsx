import { useState, useEffect } from 'react';
import Logo from '/Images/logo-trim.png';
import { Link, useNavigate } from 'react-router-dom';
import { HiMenuAlt1 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { FiChevronDown } from 'react-icons/fi';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(null);
  const [showShadow, setShowShadow] = useState(false); // State to track shadow display
  const [megaMenuData, setMegaMenuData] = useState(null); // State to store mega menu data
  const [, setIsCompanyHovered] = useState(false);
  const navigate = useNavigate()

  // Mock data for services mega menu
  const servicesMockData = [
    { title: 'Web Development', description: 'We specialize in creating modern and responsive websites that drive traffic and engage users.', path: '/services' },
    { title: 'Mobile App Development', description: 'From iOS to Android, we build custom mobile apps that elevate user experiences.', path: '/services' },
    { title: 'E-commerce Solutions', description: 'Boost your online sales with our custom e-commerce platforms tailored to your business.', path: '/services' },
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


  return (
    <header className={`fixed left-0 right-0 top-0 z-50 border-b border-ink-rule bg-ink-head backdrop-blur ${showShadow ? 'shadow-md' : ''}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8" aria-label="Main">
        {/* The logo is blue artwork for a light ground, so it sits on a small white plate in every theme. */}
        <Link to="/" className="keep-light flex shrink-0 items-center bg-white px-2 py-1" aria-label="CodeOn Africa home">
          <img src={Logo} alt="CodeOn Africa" className="h-11 w-auto md:h-14" />
        </Link>

        <ul className="hidden self-stretch border-l border-ink-rule lg:flex">
          {menuitems.map((item, index) => (
            <li key={index + item.link} className="flex border-r border-ink-rule">
              <Link
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index, item.dropdown)}
                className="flex items-center gap-1 whitespace-nowrap px-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-ink-fg transition-colors hover:text-ink-link xl:px-4"
                to={item.path}
              >
                {item.link}
                {item.dropdown ? <FiChevronDown aria-hidden="true" /> : null}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeSwitcher />
          <Link to="/contact" className="btn-action whitespace-nowrap px-4 py-2 text-xs">Book appointment</Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex min-h-tap min-w-[44px] items-center justify-center text-ink-fg lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <MdClose size={26} /> : <HiMenuAlt1 size={26} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="h-[calc(100vh-4rem)] overflow-y-auto border-t border-ink-rule bg-ink-bg px-4 pb-8 lg:hidden">
          <ul className="py-4">
            {menuitems.map((item, index) => (
              <li key={index + item.link} className="border-b border-ink-rule">
                <Link
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-tap items-center py-3 font-mono text-sm uppercase tracking-[0.08em] text-ink-fg hover:text-ink-link"
                  to={item.path || (item.dropdown && item.dropdown[0] ? item.dropdown[0].path : '/')}
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4">
            <ThemeSwitcher labels />
            <a href="tel:+254114266430" className="btn-ghost w-full">Call +254 114 266 430</a>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="btn-action w-full">Book appointment</Link>
          </div>
        </div>
      )}

      {megaMenuData && (
        <div
          className="absolute left-0 top-full grid w-full grid-cols-4 border-b border-border bg-card px-16 py-4 shadow-lg"
          onMouseEnter={() => setIsCompanyHovered(true)}
          onMouseLeave={() => setMegaMenuData(false)}
        >
          <div className="w-3/4 py-8">
            <h2 className="display text-2xl text-heading">Discuss your project</h2>
            <p className="mt-4 text-muted-foreground">Ready to discuss your project? Get in touch and schedule a meeting.</p>
            <button type="button" onClick={() => navigate('/contact')} className="btn-action mt-4">Schedule a meeting</button>
          </div>
          <div className="col-span-3 grid grid-cols-3 items-start gap-8 py-8">
            {megaMenuData.map((menuItem) => (
              <div key={menuItem.title}>
                <h3 className="mb-2 font-display font-bold text-foreground">{menuItem.title}</h3>
                <p className="text-muted-foreground">{menuItem.description}</p>
                <Link className="mt-2 inline-block font-mono text-xs uppercase tracking-[0.08em] text-heading hover:underline" to={menuItem.path}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
