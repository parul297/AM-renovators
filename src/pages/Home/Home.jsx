import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, CheckCircle, Award, Users, Globe, Shield, Star, Phone, ArrowRight,
  Building2, Wrench, Zap
} from 'lucide-react';
import Footer from '../../components/Footer/Footer';
import FeaturedProjects from './FeaturedProjects';
import EnhancedProcess from './EnhancedProcess';
import './Home.css';
import heroVideo from '../../assets/videos/hero-background.mp4';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [buildingProgress, setBuildingProgress] = useState(0);
  const [isBuildingComplete, setIsBuildingComplete] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const buildingRef = useRef(null);
  const videoRef = useRef(null);
  
  // Services Timeline States
  const [activeService, setActiveService] = useState(0);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const startBuildingAnimation = () => {
      const totalDuration = 2000;
      const interval = 50;
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

  useEffect(() => {
    // Timeline visibility observer
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTimelineVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      timelineObserver.observe(timelineRef.current);
    }

    // Video load handler
    if (videoRef.current) {
      videoRef.current.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }

    // Smooth scroll to services if hash present
    const hash = window.location.hash;
    if (hash === '#services') {
      setTimeout(() => {
        timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    return () => {
      if (timelineRef.current) {
        timelineObserver.unobserve(timelineRef.current);
      }
    };
  }, []);

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

  const nriFeatures = [
    'Weekly Photo & Video Updates',
    'Single-Point Accountability',
    'Transparent Billing & Documentation',
    'Time-Zone Friendly Communication',
    'Power of Attorney Guidance',
    'Festival Property Checks'
  ];

  // Services Timeline Data
  const services = [
    {
      id: 0,
      icon: Building2,
      title: 'Construction',
      desc: 'Independent houses, villas, and multi-storied buildings',
      color: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-blue-50',
      details: ['Foundation', 'Structural Design', 'Quality Materials'],
      fullDesc: 'Precision construction with international standards.'
    },
    {
      id: 1,
      icon: Award,
      title: 'Renovation',
      desc: 'Transform spaces with modern upgrades',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50',
      details: ['Space Optimization', 'Modern Design', 'Complete Makeover'],
      fullDesc: 'Complete renovations with modern aesthetics.'
    },
    {
      id: 2,
      icon: Zap,
      title: 'Upgradation',
      desc: 'Latest electrical, plumbing, and HVAC systems',
      color: 'from-emerald-600 to-green-500',
      bgColor: 'bg-green-50',
      details: ['Smart Systems', 'Energy Efficient', 'Latest Tech'],
      fullDesc: 'State-of-the-art systems for comfort and efficiency.'
    },
    {
      id: 3,
      icon: Wrench,
      title: 'Maintenance',
      desc: 'Preventive and corrective maintenance',
      color: 'from-purple-600 to-violet-500',
      bgColor: 'bg-purple-50',
      details: ['Regular Checkups', '24/7 Support', 'Long Term Care'],
      fullDesc: 'Comprehensive maintenance with 24/7 support.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="hero-video-section">
        <div className="video-background-container">
          <video
            ref={videoRef}
            className="hero-background-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="video-overlay"></div>
        </div>

        <div className="hero-content-wrapper">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="hero-text-content">
                <h1 className="hero-title">
                  International Standards.<br />
                  <span className="hero-title-highlight">Local Excellence.</span>
                </h1>

                <p className="hero-description">
                  Professional construction, renovation, and facilities management services backed by 27+ years of experience across India and the Middle East.
                </p>

                <div className="hero-buttons">
                  {/* <a href="#quote" className="btn-primary">
                    Get Free Quote
                    <ArrowRight size={20} />
                  </a>
                  <a href="#services" className="btn-secondary">
                    View Services
                    <ChevronRight size={20} />
                  </a> */}
                </div>

                <div className="hero-features">
                  <div className="hero-feature-item">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>CPWD Registered</span>
                  </div>
                  <div className="hero-feature-item">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>Dubai Experience</span>
                  </div>
                  <div className="hero-feature-item">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>27+ Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section 
        ref={buildingRef}
        className="py-12 md:py-20 bg-white" 
        style={{
          opacity: buildingProgress > 50 ? 1 : 0.3,
          transition: 'opacity 0.5s ease'
        }}
      >
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

      {/* Services Timeline Section - Integrated */}
      <section 
        ref={timelineRef} 
        className="bg-white py-12 md:py-16 px-4 md:px-6"
        id="services"
      >
        <div className="max-w-6xl mx-auto">
          {/* Compact Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              <span className="text-sm font-semibold text-gray-700">
                Complete Journey
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Property's <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600 bg-clip-text text-transparent">Full Lifecycle</span>
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              From foundation to ongoing care — comprehensive services at every stage
            </p>
          </div>

          {/* Compact Timeline */}
          <div className="relative">
            {/* Timeline Line - Only on desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-orange-500 to-purple-500 hidden md:block" />
            
            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {services.map((service, index) => {
                const ServiceIcon = service.icon;
                const isActive = activeService === index;
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={service.id}
                    className={`relative ${isLeft ? 'md:pr-8' : 'md:pl-8 md:mt-16'}`}
                    style={{
                      opacity: isTimelineVisible ? 1 : 0,
                      transform: isTimelineVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.5s ease ${index * 0.1}s`
                    }}
                  >
                    {/* Desktop Timeline Dot */}
                    <div className="absolute hidden md:block top-6"
                      style={isLeft ? { right: '-12px' } : { left: '-12px' }}
                    >
                      <div className="relative w-6 h-6">
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.color} shadow-lg ${isActive ? 'scale-125 ring-4 ring-white ring-opacity-50' : ''}`} />
                      </div>
                    </div>

                    {/* Mobile Header */}
                    <div className="md:hidden flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-md`}>
                        <ServiceIcon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{service.title}</h3>
                        <p className="text-sm text-gray-600">{service.desc}</p>
                      </div>
                    </div>

                    {/* Service Card */}
                    <div
                      className={`rounded-xl border-2 p-5 cursor-pointer transition-all duration-300 hover:shadow-lg ${isActive ? 'shadow-lg border-blue-300' : 'border-gray-200 hover:border-gray-300'
                        } ${isActive ? service.bgColor : 'bg-white'}`}
                      onClick={() => setActiveService(index)}
                    >
                      {/* Desktop Header */}
                      <div className="hidden md:flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-md`}>
                          <ServiceIcon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">{service.title}</h3>
                          <p className="text-sm text-gray-600">{service.desc}</p>
                        </div>
                      </div>

                      {/* Expandable Content */}
                      <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-48 mt-4' : 'max-h-0'}`}>
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-sm text-gray-700 mb-4">{service.fullDesc}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {service.details.map((detail, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <CheckCircle size={14} className="text-green-500" />
                                <span className="text-xs font-medium text-gray-700">{detail}</span>
                              </div>
                            ))}
                          </div>
                          <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-md transition-shadow flex items-center justify-center gap-2">
                            Learn More
                            <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Collapsed State Indicator */}
                      {!isActive && (
                        <div className="text-right">
                          <ArrowRight size={16} className="text-gray-400 ml-auto" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Compact CTA */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            {/* <h3 className="text-xl font-bold text-gray-900 mb-4">Start Your Journey Today</h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
                Get Free Consultation
                <ArrowRight size={18} />
              </button>
              <button className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                View Projects
              </button>
            </div> */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-green-500" />
                <span>Certified Excellence</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-green-500" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={16} className="text-green-500" />
                <span>5-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjects />

      {/* NRI Services Section */}
      {/* <section className="py-12 md:py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Managing Your India Property from Abroad?</h2>
              <p className="text-lg md:text-xl text-orange-50 mb-8 leading-relaxed">We're your eyes, hands, and voice on the ground. Complete peace of mind through transparent communication and on-ground accountability.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {nriFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-base md:text-lg font-semibold">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={20} className="text-orange-600" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-white text-orange-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 group">
                Learn About NRI Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-white/10 blur-3xl rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=500&fit=crop"
                alt="Modern home"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* EnhancedProcess Component */}
      <EnhancedProcess />

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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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

      <Footer />
    </div>
  );
}