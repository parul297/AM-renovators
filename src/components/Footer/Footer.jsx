import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Projects Portfolio', href: '#projects' },
    { name: 'For NRI Clients', href: '#nri-clients' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Blog & Resources', href: '#resources' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const services = [
    { name: 'Construction & New Developments', href: '#construction' },
    { name: 'Renovation & Refurbishment', href: '#renovation' },
    { name: 'Upgradation & Modernization', href: '#upgradation' },
    { name: 'Maintenance & AMC', href: '#maintenance' },
    { name: 'Facilities & Asset Management', href: '#facilities' },
    { name: 'NRI Property Management', href: '#nri-services' }
  ];

  const credentials = [
    'CPWD Registered Class III',
    '27+ Years Experience',
    'Dubai Nakheel Properties',
    'Hyderabad Airport AMC',
    'Government Projects',
    'International Standards'
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
                <div className="text-white font-bold text-lg">AM Renovators</div>
                <div className="text-gray-400 text-xs">& Services</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Professional construction, renovation, and facilities management company with 27+ years of international experience across India and the Middle East.
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
                  <a 
                    href={link.href} 
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all"></span>
                    {link.name}
                  </a>
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
                  <a 
                    href={service.href} 
                    className="text-sm text-gray-400 hover:text-orange-500 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 transition-all"></span>
                    {service.name}
                  </a>
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
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0 text-orange-500" />
                <a href="mailto:info@amrenovators.com" className="text-sm text-gray-400 hover:text-orange-500 transition-colors">
                  info@amrenovators.com
                </a>
              </li>
            </ul>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-white font-semibold text-sm mb-2">Our Credentials</h4>
              <div className="flex flex-wrap gap-2">
                {credentials.slice(0, 3).map((credential, index) => (
                  <span key={index} className="text-xs bg-blue-900/50 text-blue-300 px-2 py-1 rounded">
                    {credential}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; 2025 AM Renovators & Services. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </a>
              <span className="text-gray-600">|</span>
              <a href="#terms" className="hover:text-orange-500 transition-colors">
                Terms & Conditions
              </a>
              <span className="text-gray-600">|</span>
              <a href="#sitemap" className="hover:text-orange-500 transition-colors">
                Sitemap
              </a>
            </div>
            
            <div className="text-sm text-gray-500">
              Designed with <span className="text-red-500">❤</span> in India
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}