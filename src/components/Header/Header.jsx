import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Construction & New Developments', href: '#construction' },
    { name: 'Renovation & Refurbishment', href: '#renovation' },
    { name: 'Upgradation & Modernization', href: '#upgradation' },
    { name: 'Maintenance & AMC', href: '#maintenance' },
    { name: 'Facilities & Asset Management', href: '#facilities' },
    { name: 'NRI Property Management', href: '#nri-services' }
  ];

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', dropdown: services },
    { name: 'For NRI Clients', href: '#nri-clients', highlight: true },
    { name: 'Projects', href: '#projects' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
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
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-white'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#home" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">AM</span>
                </div>
                <div>
                  <div className="text-blue-900 font-bold text-lg leading-tight">AM Renovators</div>
                  <div className="text-gray-600 text-xs">& Services</div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className={`flex items-center gap-1 text-gray-700 hover:text-blue-900 font-medium transition-colors ${
                          item.highlight ? 'text-orange-600 hover:text-orange-700' : ''
                        }`}
                      >
                        {item.name}
                        <ChevronDown size={16} />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {activeDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                          {item.dropdown.map((subItem, subIndex) => (
                            <a
                              key={subIndex}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    // For simple navigation between pages, use onClick to call parent navigation handler when provided
                    (item.name === 'Home' || item.name === 'About Us') ? (
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (typeof window !== 'undefined' && window.history && window.history.pushState) {
                            const path = item.name === 'Home' ? '/' : '/about';
                            if (window.location.pathname !== path) {
                              window.history.pushState({}, '', path);
                              const navEvent = new PopStateEvent('popstate');
                              window.dispatchEvent(navEvent);
                            }
                          }
                        }}
                        className={`text-gray-700 hover:text-blue-900 font-medium transition-colors ${
                          item.highlight ? 'text-orange-600 hover:text-orange-700' : ''
                        }`}
                      >
                        {item.name}
                      </a>
                    ) : (
                      <a
                        href={item.href}
                        className={`text-gray-700 hover:text-blue-900 font-medium transition-colors ${
                          item.highlight ? 'text-orange-600 hover:text-orange-700' : ''
                        }`}
                      >
                        {item.name}
                      </a>
                    )
                  )}
                </div>
              ))}

              {/* CTA Button */}
              <a
                href="#quote"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-blue-900"
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
                <div key={index}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="w-full flex items-center justify-between text-gray-700 font-medium py-2"
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-2 mt-2">
                          {item.dropdown.map((subItem, subIndex) => (
                                <a
                                  key={subIndex}
                                  href={subItem.href}
                                  className="block text-sm text-gray-600 hover:text-blue-900 py-1.5"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </a>
                              ))}
                        </div>
                      )}
                    </>
                  ) : (
                        // handle Home/About navigation in mobile menu as well
                        (item.name === 'Home' || item.name === 'About Us') ? (
                          <a
                            href="#"
                            className={`block text-gray-700 font-medium py-2 ${
                              item.highlight ? 'text-orange-600' : ''
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsMobileMenuOpen(false);
                              const path = item.name === 'Home' ? '/' : '/about';
                              if (window.location.pathname !== path) {
                                window.history.pushState({}, '', path);
                                const navEvent = new PopStateEvent('popstate');
                                window.dispatchEvent(navEvent);
                              }
                            }}
                          >
                            {item.name}
                          </a>
                        ) : (
                          <a
                            href={item.href}
                            className={`block text-gray-700 font-medium py-2 ${
                              item.highlight ? 'text-orange-600' : ''
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        )
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <a
                href="#quote"
                className="block text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </a>

              {/* Mobile Contact Info */}
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  );
}