import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/workedWith/AMrenovators.jpeg";
import ContactSidebar from '../contactSideBar/ContactSideBar';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
    { name: 'Construction', href: '/services/new-construction' },
    { name: 'Renovation', href: '/services/renovation' },
    { name: 'Facility Management', href: '/services/facilities' },
    { name: 'NRI Property Management', href: '/services/nri-property', highlight: true },
  ];

  const handleEnquiryClick = () => {
    setIsSidebarOpen(prev => !prev);
    setIsMobileMenuOpen(false);
  };

  const handleEnquiryHover = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div>
      {/* Top Bar - Also fixed */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-900 text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>+91 9515 88 1444</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>info@amrenovators.com</span>
            </div>
          </div>
          <div className="text-xs">
            <span className="font-semibold">27+ Years Experience</span> |{" "}
            <span>CPWD Registered</span> |{" "}
            <span>International Experience</span>
          </div>
        </div>
      </div>

      {/* Header - Fixed below top bar */}
      <header className={`fixed top-[36px] md:top-[36px] left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logo}
                alt="AM Renovators"
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-end flex-1">
              <div className="flex items-center gap-8">

                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.href;

                  return (
                    <Link
                      key={index}
                      to={item.href}
                      className={`
                        relative font-medium transition-all duration-300
                        ${item.highlight
                          ? 'text-orange-700 bg-orange-50 px-4 py-2 border-l-4 border-orange-600 font-semibold'
                          : 'text-gray-700 hover:text-blue-900'
                        }
                        ${!item.highlight
                          ? 'after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300 hover:after:w-full'
                          : ''
                        }
                        ${isActive && !item.highlight ? 'font-semibold text-blue-900' : ''}
                      `}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* Enquiry Button - Fixed color issue */}
                <button
                  onClick={handleEnquiryClick}
                  onMouseEnter={handleEnquiryHover}
                  className="
                    relative font-medium text-gray-700
                    hover:text-blue-900 transition-all duration-300
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:w-0 after:bg-blue-900
                    after:transition-all after:duration-300 hover:after:w-full
                    bg-transparent border-0 cursor-pointer p-0
                  "
                >
                  Enquiry
                </button>

              </div>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden ml-auto p-2 text-gray-700 hover:text-blue-900"
            >
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
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block py-3 font-medium transition-all
                    ${item.highlight
                      ? 'text-orange-700 bg-orange-50 px-4 border-l-4 border-orange-600 font-semibold'
                      : 'text-gray-700 px-3 hover:text-blue-900'
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={handleEnquiryClick}
                className="block w-full text-left py-3 px-3 font-medium text-gray-700 hover:text-blue-900 bg-transparent border-0 cursor-pointer"
              >
                Enquiry
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[116px] md:h-[116px]"></div>

      <ContactSidebar
        openFromHeader={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}