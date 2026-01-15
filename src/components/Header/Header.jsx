import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/AMrenovators.jpeg";
import ContactSidebar from '../contactSideBar/ContactSideBar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Constructions', href: '/services/new-construction' },
    { name: 'Renovation', href: '/services/renovation' },
    { name: 'Facilities Management', href: '/services/facilities' },
    { name: 'NRI Property Management', href: '/services/nri-property', highlight: true },
  ];

  const [isHeaderHover, setIsHeaderHover] = useState(false);

  return (
    <div onMouseEnter={() => setIsHeaderHover(true)} onMouseLeave={() => setIsHeaderHover(false)}>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>info@amrenovators.com</span>
            </div>
          </div>
          <div className="text-xs">
            <span className="font-semibold">27+ Years Experience</span> | <span>CPWD Registered</span> | <span>International Exposure</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-lg' : ''}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo (IMAGE instead of text) */}
            <div className="flex justify-between items-center h-20 overflow-visible">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="AM Renovators" className="h-20 md:h-16 w-auto object-contain" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={index}
                    to={item.href}
                    className={`
                      font-medium transition-all
                      ${item.highlight
                        ? 'text-orange-600 bg-orange-50 px-4 py-2 rounded-lg border border-orange-200 hover:bg-orange-100'
                        : 'text-gray-700 hover:text-blue-900'
                      }
                      ${isActive ? 'font-semibold' : ''}
                    `}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 text-gray-700 hover:text-blue-900">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  className={`
                    block py-2 font-medium rounded-md
                    ${item.highlight ? 'text-orange-600 bg-orange-50 px-3' : 'text-gray-700'}
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Contact Info */}
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={16} />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={16} />
                  <span>info@amrenovators.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <ContactSidebar openFromHeader={isHeaderHover} />
    </div>
  );
}

