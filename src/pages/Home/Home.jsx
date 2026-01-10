import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, CheckCircle, Award, Users, Building2, Globe, Shield, Star, Phone, Mail, MapPin, ArrowRight, Square } from 'lucide-react';
// Header is rendered at App level
import Footer from '../../components/Footer/Footer';

export default function MainSections() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [buildingProgress, setBuildingProgress] = useState(0);
  const [isBuildingComplete, setIsBuildingComplete] = useState(false);
  const buildingRef = useRef(null);
  
  useEffect(() => {
    // Animation for building construction
    const startBuildingAnimation = () => {
      const totalDuration = 2000; // 2 seconds
      const interval = 50; // Update every 50ms
      const steps = totalDuration / interval;
      let currentStep = 0;
      
      const intervalId = setInterval(() => {
        currentStep++;
        const progress = (currentStep / steps) * 100;
        setBuildingProgress(progress);
        
        if (currentStep >= steps) {
          clearInterval(intervalId);
          setIsBuildingComplete(true);
        }
      }, interval);
      
      return () => clearInterval(intervalId);
    };
    
    // Trigger animation when section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && buildingProgress === 0) {
            startBuildingAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (buildingRef.current) {
      observer.observe(buildingRef.current);
    }
    
    return () => observer.disconnect();
  }, [buildingProgress]);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Dubai, UAE',
      type: 'NRI Client',
      text: 'Managing my property renovation from Dubai seemed impossible until I found AM Renovators. Ahmed personally oversaw everything, sent weekly updates with photos, and the transparency was exceptional. My parents are thrilled with their upgraded home!',
      rating: 5,
      project: 'Complete Home Renovation'
    },
    {
      name: 'Priya Sharma',
      location: 'Jubilee Hills, Hyderabad',
      type: 'Local Homeowner',
      text: 'The professionalism and quality of work exceeded our expectations. They completed our 3BHK renovation in exactly 90 days as promised, with minimal disruption. The attention to detail and transparent pricing made the entire experience stress-free.',
      rating: 5,
      project: 'Apartment Renovation'
    },
    {
      name: 'Dr. Venkat Rao',
      location: 'Educational Institution',
      type: 'Institutional Client',
      text: 'Their CPWD credentials and experience with Hyderabad Airport gave us confidence. The AMC services are outstanding - regular maintenance reports, quick response to issues, and complete documentation for our committees.',
      rating: 5,
      project: 'Annual Maintenance Contract'
    }
  ];

  const stats = [
    { number: '27+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const whyChoose = [
    {
      icon: Globe,
      title: 'International Experience',
      description: 'Dubai facilities management experience with Nakheel Properties - 129 buildings and 208+ villas managed'
    },
    {
      icon: Award,
      title: 'CPWD Registered',
      description: 'Government contractor credentials with proven track record at Hyderabad International Airport'
    },
    {
      icon: Shield,
      title: 'Complete Transparency',
      description: 'Detailed documentation, itemized billing, and regular progress updates with photographic evidence'
    },
    {
      icon: Users,
      title: 'NRI Specialized',
      description: 'Dedicated services for NRIs with remote project management and accountability you can trust'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star size={16} fill="currentColor" />
                Trusted by NRIs Worldwide
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                International Standards.<br />
                <span className="text-orange-400">Local Excellence.</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Professional construction, renovation, and facilities management services backed by 27+ years of experience across India and the Middle East.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#quote" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight size={20} />
                </a>
                <a href="#projects" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/20 inline-flex items-center gap-2">
                  View Projects
                  <ChevronRight size={20} />
                </a>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>CPWD Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Dubai Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>27+ Years</span>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" 
                  alt="Construction project" 
                  className="rounded-lg shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">{stat.number}</div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Building Construction Animation */}
{/* Building Construction Animation */}
      <section ref={buildingRef} className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-b from-sky-100 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-48 md:h-64">
            
            {/* Ground/Foundation - Realistic concrete */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-b from-gray-400 to-gray-500" style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)' }}></div>
            <div className="absolute bottom-4 left-0 right-0 h-1 bg-amber-900 opacity-40"></div>
            
            {/* Building Structure - Center positioned */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-48 md:w-64">
              
              {/* Building Frame/Outline */}
              <div className="relative" style={{ height: '140px' }}>
                
                {/* 6 Floors building from bottom to top - Realistic brick color */}
                {[0, 1, 2, 3, 4, 5].map((floor) => {
                  const floorProgress = Math.max(0, Math.min((buildingProgress - floor * 16.66) / 16.66, 1)) * 100;
                  
                  return (
                    <div
                      key={floor}
                      className="absolute left-0 right-0 transition-all duration-200"
                      style={{
                        bottom: `${floor * 23}px`,
                        height: '20px',
                        opacity: floorProgress > 0 ? 1 : 0
                      }}
                    >
                      {/* Floor structure */}
                      <div className="relative h-full">
                        {/* Main floor block - Realistic red brick */}
                        <div 
                          className="absolute left-0 h-full rounded-sm"
                          style={{
                            width: `${floorProgress}%`,
                            background: 'linear-gradient(to right, #a0522d, #b8632f, #a0522d)',
                            boxShadow: '0 3px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                          }}
                        >
                          {/* Realistic brick pattern */}
                          <div className="absolute inset-0">
                            {/* Mortar lines - horizontal */}
                            <div className="absolute left-0 right-0 top-1/3 h-px bg-stone-300 opacity-60"></div>
                            <div className="absolute left-0 right-0 top-2/3 h-px bg-stone-300 opacity-60"></div>
                            
                            {/* Mortar lines - vertical (offset pattern) */}
                            {[15, 35, 50, 70, 85].map((pos) => (
                              <div
                                key={pos}
                                className="absolute top-0 bottom-0 w-px bg-stone-300 opacity-50"
                                style={{ left: `${pos}%` }}
                              ></div>
                            ))}
                          </div>
                          
                          {/* Realistic glass windows */}
                          {floorProgress > 60 && (
                            <div className="absolute inset-0 flex items-center justify-around px-3">
                              {[1, 2, 3].map((window) => (
                                <div
                                  key={window}
                                  className="w-5 h-3 rounded-sm relative overflow-hidden"
                                  style={{
                                    background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 50%, #7dd3fc 100%)',
                                    boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.6), 0 1px 3px rgba(0,0,0,0.4)',
                                    border: '1px solid #94a3b8'
                                  }}
                                >
                                  {/* Window reflection */}
                                  <div className="absolute top-0 left-0 right-1/2 bottom-1/2 bg-white opacity-40"></div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        {/* Construction progress spark on active floor */}
                        {floorProgress > 0 && floorProgress < 100 && (
                          <div 
                            className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full animate-pulse"
                            style={{ boxShadow: '0 0 10px rgba(251, 191, 36, 1), 0 0 20px rgba(251, 191, 36, 0.5)' }}
                          ></div>
                        )}
                      </div>
                    </div>
                  );
                })}
                
                {/* Realistic slate roof */}
                {buildingProgress > 90 && (
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 w-52 md:w-72 transition-all duration-500"
                    style={{
                      bottom: '138px',
                      opacity: (buildingProgress - 90) / 10
                    }}
                  >
                    <div className="relative">
                      {/* Triangular roof - dark gray slate */}
                      <div 
                        className="w-0 h-0 mx-auto"
                        style={{
                          borderLeft: '80px solid transparent',
                          borderRight: '80px solid transparent',
                          borderBottom: '30px solid #475569',
                          filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))'
                        }}
                      ></div>
                      {/* Roof ridge */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-slate-700"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Realistic Construction Crane - Yellow/Black */}
            <div className="absolute left-8 md:left-16 top-0 bottom-0">
              {/* Crane tower - steel structure */}
              <div className="absolute bottom-5 left-0 w-3" style={{ height: '160px' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500" style={{ boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.3)' }}></div>
                {/* Black stripes for safety */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black to-gray-900 opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-gray-900 opacity-80"></div>
              </div>
              
              {/* Crane arm - yellow steel beam */}
              <div className="absolute bottom-32 -left-4 w-32 h-3 origin-left transform -rotate-12" style={{ background: 'linear-gradient(to bottom, #fbbf24, #f59e0b)', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                {/* Black stripe on arm */}
                <div className="absolute left-0 top-0 bottom-0 w-4 bg-black opacity-80"></div>
                
                {/* Steel cable */}
                <div 
                  className="absolute right-4 top-3 w-0.5 bg-gray-600 transition-all duration-1000"
                  style={{
                    height: buildingProgress < 90 ? `${40 + Math.sin(buildingProgress / 10) * 20}px` : '20px',
                    boxShadow: '0 0 2px rgba(0,0,0,0.5)'
                  }}
                >
                  {/* Metal hook */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-sm" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.4)' }}></div>
                  
                  {/* Brick being lifted - realistic red brick */}
                  {buildingProgress > 0 && buildingProgress < 95 && (
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-5 h-3 rounded-sm" style={{ background: '#a0522d', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}></div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Progress Indicator */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="px-6 py-3 rounded-lg flex items-center gap-3 border-2" style={{ 
                background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                borderColor: 'rgba(255,255,255,0.3)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
              }}>
                <Building2 className="text-white" size={24} />
                <span className="font-bold text-white text-base">Building Progress</span>
                <span className="font-extrabold text-2xl text-yellow-400" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>{Math.round(buildingProgress)}%</span>
              </div>
            </div>
            
            {/* Realistic Construction Workers */}
            {buildingProgress > 5 && buildingProgress < 95 && (
              <>
                {/* Worker 1 - Orange safety vest */}
                <div 
                  className="absolute bottom-9 w-5 h-7 rounded-sm transition-all duration-500"
                  style={{
                    left: `${30 + Math.sin(buildingProgress / 20) * 10}%`,
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(to bottom, #ea580c, #c2410c)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Safety helmet - yellow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-3 rounded-t-full -mt-2" style={{ background: 'linear-gradient(to bottom, #fbbf24, #f59e0b)', boxShadow: '0 1px 3px rgba(0,0,0,0.3)' }}></div>
                  {/* Arms */}
                  <div className="absolute top-1 -left-1 w-1 h-2 bg-orange-800 rounded"></div>
                  <div className="absolute top-1 -right-1 w-1 h-2 bg-orange-800 rounded"></div>
                </div>
                
                {/* Worker 2 - Blue safety vest */}
                <div 
                  className="absolute bottom-9 w-5 h-7 rounded-sm transition-all duration-700"
                  style={{
                    left: `${60 + Math.cos(buildingProgress / 15) * 10}%`,
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(to bottom, #2563eb, #1d4ed8)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Safety helmet - yellow */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-3 rounded-t-full -mt-2" style={{ background: 'linear-gradient(to bottom, #fbbf24, #f59e0b)', boxShadow: '0 1px 3px rgba(0,0,0,0.3)' }}></div>
                  {/* Arms */}
                  <div className="absolute top-1 -left-1 w-1 h-2 bg-blue-900 rounded"></div>
                  <div className="absolute top-1 -right-1 w-1 h-2 bg-blue-900 rounded"></div>
                </div>
              </>
            )}
            
            {/* Completion Celebration */}
            {isBuildingComplete && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center animate-bounce">
                  <CheckCircle size={56} className="text-green-600 mx-auto mb-2" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))' }} />
                  <div className="text-3xl font-extrabold text-gray-800 px-6 py-2 rounded-lg" style={{ 
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                  }}>
                    Construction Complete!
                  </div>
                </div>
              </div>
            )}
            
            {/* Construction Materials on Ground - Realistic colors */}
            {buildingProgress > 10 && buildingProgress < 90 && (
              <div className="absolute bottom-5 left-12 flex gap-2">
                <div className="w-4 h-3 rounded-sm transform rotate-12" style={{ background: '#a0522d', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}></div>
                <div className="w-3 h-4 rounded-sm" style={{ background: '#d4d4d4', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}></div>
                <div className="w-5 h-3 rounded-sm transform -rotate-6" style={{ background: '#8b4513', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}></div>
              </div>
            )}
            
            {/* Scaffolding on side */}
            {buildingProgress > 20 && buildingProgress < 85 && (
              <div className="absolute bottom-5 right-32 md:right-40" style={{ height: `${buildingProgress}px` }}>
                <div className="w-1 h-full bg-yellow-600 opacity-60"></div>
                <div className="absolute top-1/4 left-0 w-8 h-0.5 bg-yellow-600 opacity-60"></div>
                <div className="absolute top-1/2 left-0 w-8 h-0.5 bg-yellow-600 opacity-60"></div>
                <div className="absolute top-3/4 left-0 w-8 h-0.5 bg-yellow-600 opacity-60"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Appears after building animation */}
      <section className="py-12 md:py-20 bg-white" style={{
        opacity: buildingProgress > 50 ? 1 : 0.3,
        transition: 'opacity 0.5s ease'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16" style={{
            transform: buildingProgress === 100 ? 'translateY(0)' : 'translateY(20px)',
            opacity: buildingProgress === 100 ? 1 : 0,
            transition: 'all 0.5s ease'
          }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose AM Renovators?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Bringing international best practices to every project we undertake
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center" style={{
                transform: buildingProgress === 100 ? 'translateY(0)' : 'translateY(20px)',
                opacity: buildingProgress === 100 ? 1 : 0,
                transition: `all 0.5s ease ${index * 100}ms`
              }}>
                <div className="bg-gradient-to-br from-blue-900 to-blue-800 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg hover:scale-105 transition-transform duration-300">
                  <item.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of your sections remain the same */}
      {/* NRI Special Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Managing Your India Property from Abroad?
              </h2>
              <p className="text-xl text-orange-50 mb-8 leading-relaxed">
                We understand the challenges of distance, trust, and quality assurance. With our specialized NRI services, you get complete peace of mind through transparent communication and on-ground accountability.
              </p>
              
              <div className="space-y-4 mb-8">
                {['Weekly Photo & Video Updates', 'Single-Point Accountability', 'Transparent Billing & Documentation', 'Time-Zone Friendly Communication'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={24} className="text-white flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a href="#nri-clients" className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-all inline-flex items-center gap-2 shadow-lg">
                Learn About NRI Services
                <ArrowRight size={20} />
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" 
                alt="Modern home" 
                className="rounded-lg shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from NRIs, homeowners, and institutions</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={24} className="text-orange-500 fill-current" />
                ))}
              </div>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                "{testimonials[activeTestimonial].text}"
              </p>
              
              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[activeTestimonial].location}</div>
                  <div className="text-sm text-orange-600 font-semibold mt-1">{testimonials[activeTestimonial].project}</div>
                </div>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === activeTestimonial ? 'bg-orange-500 w-8' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Get a free consultation and transparent quote for your construction, renovation, or facilities management needs
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#quote" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
              <Phone size={24} />
              Get Free Quote
            </a>
            <a href="https://wa.me/919876543210" className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>Transparent Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>

    </div>
  );
}