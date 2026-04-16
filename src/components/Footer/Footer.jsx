import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link , useLocation } from 'react-router-dom'; // Import Link from react-router-dom

export default function Footer() {

const location = useLocation();
  
  const handleNavigation = (path) => {
    // If we're already on the same page, just scroll to top
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    { name: 'Construction', path: '/services/new-construction' },
    { name: 'Renovation', path: '/services/renovation' },
    { name: 'Facility Management', path: '/services/facilities' },
    { name: 'NRI Property Management', path: '/services/nri-property' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">AM Construction & Services</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Professional construction, renovation, property and facilities management company that adheres to international best practices and local execution excellence together, serving clients across India and beyond.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-3">
              <a href="#facebook" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#instagram" className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#linkedin" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#twitter" className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.path} 
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Credentials */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-orange-500" />
                <span className="text-sm text-gray-400">
                  Hyderabad, Telangana<br />India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-orange-500" />
                <a href="tel:+919876543210" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  +91 9515 88 1444
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-orange-500" />
                <a href="mailto:info@amrenovators.com" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  info@amrenovators.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2025 AM Construction & Services. All rights reserved.
            </p>
            
            <div className="text-sm text-gray-500">
              Designed with <span className="text-red-500">❤</span> in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}