import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, CheckCircle, Award, Users, Globe, Shield, Star, Phone, ArrowRight,
  Building2, Wrench, Zap
} from 'lucide-react';
import Footer from '../../components/Footer/Footer';
import FeaturedProjects from './FeaturedProjects';
import EnhancedProcess from './EnhancedProcess';
import ContactSidebar from '../../components/contactSideBar/ContactSideBar';
import './Home.css';
import heroVideo from '../../assets/videos/hero-background.mp4';

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [buildingProgress, setBuildingProgress] = useState(0);
  const [isBuildingComplete, setIsBuildingComplete] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const buildingRef = useRef(null);
  const videoRef = useRef(null);
  
  // Services Timeline States
  const [activeService, setActiveService] = useState(0);
  const [isTimelineVisible, setIsTimelineVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const startBuildingAnimation = () => {
      const totalDuration = 800; // Reduced from 2000ms to 800ms for faster loading
      const interval = 40; // Reduced interval for smoother animation
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
      { threshold: 0.1 } // Reduced from 0.3 to trigger earlier
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

                <p className="hero-description mt-4 text-gray-100">
                  <span className="font-semibold text-orange-300">NRIs,</span>{" "}
                  here is your trustworthy party to manage your properties back home in our beloved country –{" "}
                  <span className="inline-flex items-center ml-1">
                    <span className="font-semibold text-orange-300">India</span>
                    <span className="mx-2 text-orange-400">—</span>
                    <a
                      href="https://big-b-nri-services.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        font-semibold text-orange-300
                        hover:text-orange-200
                        underline decoration-orange-400/50 hover:decoration-orange-300
                        transition-all duration-300
                        focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:ring-offset-2 focus:ring-offset-gray-900
                        rounded
                      "
                    >
                      Click here
                    </a>
                  </span>
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
                  <div className="hero-feature-item ">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>Indian government projects</span>
                  </div>
                  <div className="hero-feature-item">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>International Standards</span>
                  </div>
                  {/* <div className="hero-feature-item">
                    <CheckCircle size={20} className="text-green-400" />
                    <span>27+ Years</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section 
        ref={buildingRef}
        className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" 
        style={{
          opacity: buildingProgress > 30 ? 1 : 0.5, // Reduced from 50 to 30 for faster visibility
          transition: 'opacity 0.4s ease' // Reduced from 0.5s to 0.4s
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20" style={{
            transform: buildingProgress > 50 ? 'translateY(0)' : 'translateY(20px)', // Reduced threshold from 100
            opacity: buildingProgress > 50 ? 1 : 0,
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' // Faster transition
          }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Why Choose <span className="bg-gradient-to-r from-blue-700 to-blue-600 bg-clip-text text-transparent">AM Renovators</span>?
            </h2>
            <div className="relative max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Bringing international best practices to every project we undertake
              </p>
              <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
            </div>
          </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
  {whyChoose.map((item, index) => (
    <div key={index} className="group" style={{
      transform: buildingProgress > 50 ? 'translateY(0)' : 'translateY(20px)', // Reduced threshold
      opacity: buildingProgress > 50 ? 1 : 0,
      transition: `all 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${index * 80}ms` // Reduced delay from 100ms to 80ms
    }}>
      <div className="relative h-full bg-white rounded-lg p-8 shadow-2xl hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-blue-500 hover:-translate-y-1">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110">
              <item.icon size={26} className="text-white" />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
        
        <div className="pt-10 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-blue-800 transition-colors duration-300">
            {item.title}
          </h3>
          <div className="h-px w-16 bg-gradient-to-r from-blue-400 to-transparent mx-auto mb-6 opacity-70"></div>
          <p className="text-gray-600 leading-relaxed text-[15px] font-medium">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
          
          {/* Optional: Add subtle background pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-10"></div>
          </div>
        </div>
        <FeaturedProjects />
      </section>

      {/* EnhancedProcess Component */}
      <EnhancedProcess />

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Get a free consultation and transparent quote for your construction, renovation, or facilities management needs
            </p>

            {/* CTA Button - Simple and elegant */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 mb-12"
            >
              We'd Love to Hear from You
              <ArrowRight size={20} />
            </button>

            {/* Core values - clean and minimal */}
            <div className="flex flex-wrap justify-center gap-6 pt-8 border-t border-slate-700/50">
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Shield size={16} className="text-blue-400" />
                </div>
                <span className="text-sm font-medium">Integrity</span>
              </div>
              
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <CheckCircle size={16} className="text-green-400" />
                </div>
                <span className="text-sm font-medium">Transparency</span>
              </div>
              
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Award size={16} className="text-purple-400" />
                </div>
                <span className="text-sm font-medium">Technical Excellence</span>
              </div>
              
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                  <Users size={16} className="text-orange-400" />
                </div>
                <span className="text-sm font-medium">Client Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ContactSidebar 
        openFromHeader={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
      />
    </div>
  );
}