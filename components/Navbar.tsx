import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/reservations', label: 'Reservations' },
    { path: '/events', label: 'Private Events' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled || isOpen
            ? 'bg-black/90 backdrop-blur-md py-3 border-white/10 shadow-2xl'
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <Link to="/" className="relative z-50 group" onClick={closeMenu}>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-[0.2em] text-white group-hover:text-brand-gold transition-colors duration-300">
                  DYNAMO
                </span>
                <span className="text-[10px] tracking-[0.6em] text-brand-gold uppercase pl-1 opacity-80 group-hover:text-white transition-colors duration-300">
                  ROOM
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-8 2xl:space-x-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative py-2 group ${
                    location.pathname === link.path ? 'text-brand-gold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold transform origin-left transition-transform duration-300 ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden xl:flex items-center gap-8">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-gold transition-colors">
                   <Phone size={14} className="text-white group-hover:text-brand-gold transition-colors" />
                </div>
                <span className="text-xs font-medium tracking-widest text-white group-hover:text-brand-gold transition-colors">
                  {CONTACT_INFO.phone}
                </span>
              </a>
              <Link to="/reservations">
                <button className="bg-brand-gold text-black px-8 py-3 text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-white transition-all duration-300">
                  Book Table
                </button>
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={toggleMenu}
              className="xl:hidden relative z-50 w-10 h-10 flex items-center justify-center text-white hover:text-brand-gold transition-colors focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-dark z-40 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover opacity-10 blur-sm"></div>
         
         <div className="relative z-10 flex flex-col items-center space-y-6 w-full px-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`text-3xl md:text-4xl font-serif font-medium text-white hover:text-brand-gold transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}

            <div className="w-16 h-[1px] bg-white/20 my-8"></div>

            <Link 
              to="/reservations" 
              onClick={closeMenu}
              className={`transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <button className="bg-brand-gold text-black px-10 py-4 text-sm font-bold uppercase tracking-[0.25em] hover:bg-white transition-colors">
                Reserve A Table
              </button>
            </Link>
            
            <a 
              href={`tel:${CONTACT_INFO.phone}`} 
              className={`text-gray-400 text-sm tracking-widest hover:text-white mt-8 transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
            >
              {CONTACT_INFO.phone}
            </a>
         </div>
      </div>
    </>
  );
};

export default Navbar;