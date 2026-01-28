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
                  Assured Standards.<br />
                  <span className="hero-title-highlight">Meticulous Quality.</span>
                </h1>

                {/* <p className="hero-description">
                  Professional construction, renovation, and facilities management services backed by 27+ years of experience across India and the Middle East.
                </p> */}

                <p className="hero-description mt-4">
                  <span className="font-semibold text-orange-300">NRIs,</span> here is your trustworthy party to manage your properties back home in our beloved country - <a href="https://big-b-nri-services.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-bold text-orange-400 underline decoration-2 underline-offset-4 hover:text-orange-300 transition-colors">INDIA</a>
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
  className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50" 
  style={{
    opacity: buildingProgress > 50 ? 1 : 0.3,
    transition: 'opacity 0.5s ease'
  }}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 md:mb-20" style={{
      transform: buildingProgress === 100 ? 'translateY(0)' : 'translateY(20px)',
      opacity: buildingProgress === 100 ? 1 : 0,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm tracking-wider uppercase mb-4">
        <div className="w-12 h-px bg-gradient-to-r from-blue-600 to-transparent"></div>
        <span>Our Advantages</span>
        <div className="w-12 h-px bg-gradient-to-l from-blue-600 to-transparent"></div>
      </div>
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
          transform: buildingProgress === 100 ? 'translateY(0)' : 'translateY(20px)',
          opacity: buildingProgress === 100 ? 1 : 0,
          transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms`
        }}>
          <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-100 hover:-translate-y-1">
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