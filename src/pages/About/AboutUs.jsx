import React from 'react';
import { Award, Globe, Shield, Users, Building2, CheckCircle, MapPin, Briefcase, GraduationCap, Star, Eye, Compass, Target, ChevronLeft, ChevronRight, TrendingUp, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import airport from "../../assets/workedWith/airportAuthority.png";
import amana from "../../assets/workedWith/AMANA.jpeg";
import core from "../../assets/workedWith/coreSolution.png";
import cpwd from "../../assets/workedWith/CPWD.jpeg";
import iit from "../../assets/workedWith/IIT.png";
import ivr from "../../assets/workedWith/IVR.jpeg";
import manage from "../../assets/workedWith/manage.jpeg";
import naarm from "../../assets/workedWith/naarm.png";
import nakheel from "../../assets/workedWith/NAkheel.png";
import niphm from "../../assets/workedWith/NIPHM.jpeg";
import ordenance from "../../assets/workedWith/ordenance.jpeg";
import oil from "../../assets/workedWith/oil.jpeg";
import ahmedSir from "../../assets/workedWith/ahmedSir.jpeg"

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);
  const [isVisible, setIsVisible] = useState({});

  const slides = [
    {
      image: 'https://indiaprojectsnews.com/wp-content/uploads/2024/03/Construction-Projects-News-India.jpeg',
      badge: 'Vision',
      title: 'Our Vision',
      description: 'To be a trusted regional partner delivering construction and property solutions aligned with international standards and executed with local excellence.'
    },
    {
      image: 'https://www.businessoutreach.in/wp-content/uploads/2023/06/The-Indian-Construction-Industry-A-Case-Study-on-the-Challenges-and-Opportunities-Facing-Indias-Construction-Sector.jpg',
      badge: 'Mission',
      title: 'Our Mission',
      description: 'To execute construction and property management projects with consistency, transparency, and accountability, translating international standards into reliable local delivery and long-term asset performance.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageLoaded(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setImageLoaded(true);
      }, 300);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id^="animate-"]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goToSlide = (index) => {
    setImageLoaded(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setImageLoaded(true);
    }, 300);
  };

  const currentData = slides[currentSlide];

  const expertise = [
    {
      icon: Building2,
      title: 'Construction Excellence',
      points: [
        'Multi-storied building construction',
        'Independent residential houses and villas',
        'Premium farmhouse developments',
        'Institutional structures',
        'Masjid constructions'
      ],
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Renovation & Upgradation',
      points: [
        'Complete property transformations',
        'Structural modifications',
        'Interior and exterior refurbishment',
        'Electrical, plumbing, HVAC upgrades',
        'Energy-efficient improvements'
      ],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: TrendingUp,
      title: 'Facilities Management',
      points: [
        'Corporate office management',
        'Preventive & corrective maintenance',
        'Annual Maintenance Contracts (AMC)',
        'Vendor coordination & supervision',
        'Asset lifecycle management'
      ],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Property Management',
      points: [
        'NRI property management & representation',
        'Tenant acquisition and rental management',
        'Property inspection and reporting',
        'Statutory compliance & documentation',
        'Long-term asset preservation'
      ],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const credentials = [
    { label: 'CPWD Registration', value: 'Class III Contractor', icon: Shield },
    { label: 'Professional Experience', value: '27+ Years', icon: Award },
    { label: 'International Exposure', value: 'UAE, Saudi Arabia, Qatar', icon: Globe },
    { label: 'Major Projects', value: 'Airport AMC, Nakheel Dubai', icon: Building2 }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest, ethical practices in every transaction and relationship',
      color: 'from-blue-400 to-blue-500'
    },
    {
      icon: CheckCircle,
      title: 'Transparency',
      description: 'Complete cost clarity, regular updates, and open communication',
      color: 'from-green-400 to-green-500'
    },
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'International quality standards applied with local expertise',
      color: 'from-purple-400 to-purple-500'
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Single-point accountability and personalized service delivery',
      color: 'from-orange-400 to-orange-500'
    }
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section - Enhanced with parallax effect */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 animate-pulse" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        {/* Floating shapes */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div 
              id="animate-hero-badge"
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                isVisible['animate-hero-badge'] ? 'animate-fadeInUp' : 'opacity-0'
              }`}
            >
              <Award size={18} />
              27+ Years of Excellence
            </div>
            <h1 
              id="animate-hero-title"
              className={`text-5xl lg:text-7xl font-bold mb-8 leading-tight ${
                isVisible['animate-hero-title'] ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'
              }`}
            >
              About AM Renovators<br />
              <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                & Services
              </span>
            </h1>
            <p 
              id="animate-hero-text"
              className={`text-xl lg:text-2xl text-blue-100 leading-relaxed ${
                isVisible['animate-hero-text'] ? 'animate-fadeInUp animation-delay-400' : 'opacity-0'
              }`}
            >
              Bringing international best practices and local execution excellence together, serving clients across India and beyond with integrity, transparency, and technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Managing Director's Message - Enhanced with better layout */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div 
              id="animate-Managing Director-image"
              className={`relative ${
                isVisible['animate-Managing Director-image'] ? 'animate-fadeInLeft' : 'opacity-0'
              }`}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-600 rounded-3xl opacity-20 blur-2xl"></div>
              <img 
                src= {ahmedSir }
                alt="Ahmed Mohiuddin - Managing Director" 
                className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover ring-8 ring-white hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Decorative corner accent */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-orange-500 rounded-tl-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-blue-900 rounded-br-3xl"></div>
            </div>
            
            <div 
              id="animate-Managing Director-content"
              className={`${
                isVisible['animate-Managing Director-content'] ? 'animate-fadeInRight' : 'opacity-0'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Users size={16} />
                Leadership
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                From the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-orange-600">Managing Director</span>
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-xl font-semibold text-gray-900 flex items-start gap-3">
                  <span className="text-orange-500 text-3xl">"</span>
                  <span>Welcome to AM Renovators & Services.</span>
                </p>
                <p className="text-lg border-l-4 border-blue-900 pl-6 bg-blue-50 py-4 rounded-r-lg">
                  AM Construction & Services is a professionally managed civil construction, renovation, facilities management, and NRI property management company, headquartered in Hyderabad, India. The organization is built on decades of technical expertise, international exposure, and an uncompromising commitment to assured standards and meticulous quality.
                </p>
                <p className="text-lg">
                  We integrate our framework of robust engineering, project execution, and asset management capabilities to deliver solutions aligned with <strong className="text-blue-900 bg-blue-50 px-2 py-1 rounded">international Benchmark</strong>, while maintaining strong local execution excellence. Our structured processes, disciplined planning, and on‑ground management ensure execution with precision, transparency, and reliability across all stages of project delivery.
                </p>
                
                <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 text-white p-8 rounded-2xl shadow-xl mt-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full opacity-10 blur-2xl"></div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-1 bg-orange-500"></div>
                      <Star size={24} className="text-orange-500" />
                    </div>
                    <p className="text-lg leading-relaxed">
                      With extensive experience in NRI property management, we act as a trusted local representative for overseas clients, managing construction, renovations, maintenance, statutory coordination, and asset upkeep with complete accountability. Our approach is driven by integrity, client focus, and meticulous quality, enabling long‑term value creation and dependable outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision/Mission Carousel - Enhanced with better animations */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[550px]">
            {/* Background Card with Image */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-[60%] ring-8 ring-gray-100">
              <div className="min-h-[550px]">
                <div className="relative h-full">
                  <img 
                    src={currentData.image} 
                    alt="Background"
                    className="w-full h-full object-cover transition-all duration-700 transform"
                    style={{ 
                      opacity: imageLoaded ? 1 : 0.3,
                      transform: imageLoaded ? 'scale(1)' : 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20"></div>
                </div>
              </div>
            </div>

            {/* Foreground Card with Content */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[58%] max-w-2xl z-10">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-orange-600 rounded-3xl opacity-30 blur-2xl"></div>
                
                <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-500/50">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '40px 40px'
                    }}></div>
                  </div>
                  
                  <div className="relative p-10 lg:p-12 flex flex-col justify-center text-white">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 self-start shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <Eye size={16} />
                      {currentData.badge}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                      {currentData.title}
                    </h3>

                    {/* Description */}
                    <div className="text-lg lg:text-xl leading-relaxed font-light text-blue-50">
                      {currentData.description}
                    </div>

                    {/* Decorative line */}
                    <div className="mt-8 flex items-center gap-3">
                      <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
                      <div className="h-1 w-8 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Pagination Dots */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all rounded-full ${
                    index === currentSlide 
                      ? 'w-12 h-2 bg-gradient-to-r from-orange-500 to-red-500 shadow-lg' 
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400 hover:scale-125'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise - Enhanced with gradient cards */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            id="animate-capabilities-header"
            className={`text-center mb-20 ${
              isVisible['animate-capabilities-header'] ? 'animate-fadeInUp' : 'opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Compass size={16} />
              What We Do
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-orange-600">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive end-to-end solutions for all your construction and facilities management needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((area, index) => (
              <div 
                key={index}
                id={`animate-capability-${index}`}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-transparent hover:-translate-y-2 ${
                  isVisible[`animate-capability-${index}`] ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative">
                  {/* Icon with gradient background */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${area.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <area.icon size={40} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-900 group-hover:to-orange-600 transition-all duration-300">
                    {area.title}
                  </h3>
                  
                  <ul className="space-y-4">
                    {area.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/item">
                        <div className={`flex-shrink-0 mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${area.gradient} flex items-center justify-center`}>
                          <CheckCircle size={14} className="text-white" />
                        </div>
                        <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values - Enhanced with better cards */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            id="animate-values-header"
            className={`text-center mb-20 ${
              isVisible['animate-values-header'] ? 'animate-fadeInUp' : 'opacity-0'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield size={16} />
              Our Foundation
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Philosophy & Values</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Built on integrity, transparency, and technical excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div 
                key={index}
                id={`animate-value-${index}`}
                className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                  isVisible[`animate-value-${index}`] ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <value.icon size={36} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-blue-100 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            id="animate-commitment"
            className={`bg-white/10 backdrop-blur-lg rounded-3xl p-10 lg:p-12 border-2 border-white/30 max-w-5xl mx-auto shadow-2xl hover:shadow-3xl transition-all duration-500 ${
              isVisible['animate-commitment'] ? 'animate-fadeInUp animation-delay-600' : 'opacity-0'
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
              <Target size={32} className="text-orange-500" />
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-center">Our Commitment</h3>
            <p className="text-blue-100 leading-relaxed text-center text-xl">
              At AM Renovators & Services, we do not merely build or renovate structures—we protect, enhance, and manage assets. Our commitment is to deliver projects that uphold the trust placed in us, provide genuine value for money, and consistently exceed client expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Bar - Enhanced with icons and animations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
            {credentials.map((cred, index) => (
              <div 
                key={index}
                id={`animate-credential-${index}`}
                className={`group relative text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:border-blue-900 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible[`animate-credential-${index}`] ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <cred.icon size={24} className="text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <div className="text-sm font-semibold text-gray-600 mb-3">{cred.label}</div>
                  <div className="text-xl font-bold bg-gradient-to-r from-blue-900 to-orange-600 bg-clip-text text-transparent">
                    {cred.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trusted By Section - Enhanced */}
          <div 
            id="animate-trusted-by"
            className={isVisible['animate-trusted-by'] ? 'animate-fadeInUp' : 'opacity-0'}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
                <Star size={18} />
                Trusted Partners
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Organizations We've <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-orange-600">Worked With</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proud to have served leading institutions, government organizations, and corporate clients
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[
                { img: airport, name: 'Airport Authority of India' },
                { img: amana, name: 'Amana Steel Buildings' },
                { img: core, name: 'Core Construction Company' },
                { img: cpwd, name: 'CPWD' },
                { img: iit, name: 'IIT' },
                { img: ivr, name: 'IVR Constructions' },
                { img: manage, name: 'Manage' },
                { img: naarm, name: 'NAARM' },
                { img: nakheel, name: 'Nakheel Properties' },
                { img: niphm, name: 'NIPHM' },
                { img: ordenance, name: 'Ordnance Factory' },
                { img: oil, name: 'Directorate of Oil & Seeds' }
              ].map((company, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-900 hover:shadow-2xl transition-all duration-500 flex items-center justify-center overflow-hidden hover:-translate-y-2"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <img 
                    src={company.img} 
                    alt={company.name}
                    className="relative w-full h-28 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-50 to-white px-8 py-4 rounded-full border-2 border-gray-200 shadow-lg">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-900 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white"></div>
                </div>
                <p className="text-gray-700 font-medium">
                  ...and many more valued clients across residential, commercial, and institutional sectors
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer/>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}