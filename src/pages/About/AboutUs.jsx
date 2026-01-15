import React from 'react';
import { Award, Globe, Shield, Users, Building2, CheckCircle, MapPin, Briefcase, GraduationCap, Star, Eye, Compass, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import airport from "../../assets/airportAuthority.png";
import amana from "../../assets/AMANA.jpeg";
import core from "../../assets/coreSolution.png";
import cpwd from "../../assets/CPWD.jpeg";
import iit from "../../assets/IIT.png";
import ivr from "../../assets/IVR.jpeg";
import manage from "../../assets/manage.jpeg";
import naarm from "../../assets/naarm.png";
import nakheel from "../../assets/NAkheel.png";
import niphm from "../../assets/NIPHM.jpeg";
import ordenance from "../../assets/ordenance.jpeg";
import oil from "../../assets/oil.jpeg";

export default function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(true);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
    },
    {
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80'
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
      ]
    },
    {
      icon: '🔄',
      title: 'Renovation & Upgradation',
      points: [
        'Complete property transformations',
        'Structural modifications',
        'Interior and exterior refurbishment',
        'Electrical, plumbing, HVAC upgrades',
        'Energy-efficient improvements'
      ]
    },
    {
      icon: '🏢',
      title: 'Facilities Management',
      points: [
        'Corporate office management',
        'Preventive & corrective maintenance',
        'Annual Maintenance Contracts (AMC)',
        'Vendor coordination & supervision',
        'Asset lifecycle management'
      ]
    }
  ];

  const credentials = [
    { label: 'CPWD Registration', value: 'Class III Contractor' },
    { label: 'Professional Experience', value: '27+ Years' },
    { label: 'International Exposure', value: 'UAE, Saudi Arabia, Qatar' },
    { label: 'Major Projects', value: 'Airport AMC, Nakheel Dubai' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest, ethical practices in every transaction and relationship'
    },
    {
      icon: CheckCircle,
      title: 'Transparency',
      description: 'Complete cost clarity, regular updates, and open communication'
    },
    {
      icon: Award,
      title: 'Technical Excellence',
      description: 'International quality standards applied with local expertise'
    },
    {
      icon: Users,
      title: 'Client Focus',
      description: 'Single-point accountability and personalized service delivery'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Award size={16} />
              27+ Years of Excellence
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About AM Renovators<br />
              <span className="text-orange-400">& Services</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Bringing international best practices and local execution excellence together, serving clients across India and beyond with integrity, transparency, and technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" 
                alt="Ahmed Mohiuddin - Founder" 
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 ml-8 mr-8 relative z-10">
                <div className="flex items-center gap-4">
                  <GraduationCap size={48} className="text-blue-900" />
                  <div>
                    <div className="text-xl font-bold text-gray-900">Ahmed Mohiuddin</div>
                    <div className="text-gray-600">Graduate Civil Engineer</div>
                    <div className="text-sm text-orange-600 font-semibold">Proprietor</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">From the Founder's Desk</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  <strong className="text-gray-900">Welcome to AM Renovators & Services.</strong>
                </p>
                <p>
                  AM Renovators & Services is a professionally managed construction, renovation, upgradation, and facilities management company founded on decades of technical expertise, international exposure, and an uncompromising commitment to quality.
                </p>
                <p>
                  The company brings together extensive project delivery and asset management capabilities, enabling us to deliver solutions that align with <strong className="text-blue-900">international standards</strong> while remaining firmly rooted in local execution excellence.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-r-lg mt-6">
                  <p className="italic text-gray-800">
                    "Every project—irrespective of size—is approached with disciplined planning, attention to detail, and a long-term asset perspective. We do not merely construct or renovate—we build trust and manage assets with care and responsibility."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision/Mission Carousel - MODIFIED SECTION */}
  <section className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[500px]">
            {/* Background Card with Image - Positioned to the LEFT */}
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden w-[60%]">
              <div className="min-h-[500px]">
                <div className="relative h-full">
                  <img 
                    src={currentData.image} 
                    alt="Background"
                    className="w-full h-full object-cover transition-opacity duration-500"
                    style={{ opacity: imageLoaded ? 1 : 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
                </div>
              </div>
            </div>

            {/* Foreground Card with Content - Static content, positioned on top RIGHT */}
            <div className="absolute top-1/2 right-5 transform -translate-y-1/2 w-[55%] max-w-2xl">
              <div className="bg-gradient-to-br from-blue-900/90 to-blue-800/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-orange-500/30">
                <div className="p-8 lg:p-10 flex flex-col justify-center text-white">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-orange-500/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-5 self-start">
                    <Eye size={14} />
                    Problem Solvers
                  </div>

                  {/* Main Quote - Static */}
                  <div className="text-xl lg:text-2xl italic leading-relaxed mb-8 font-light">
                    "Building trust through international expertise and local excellence—from India to Dubai and back, delivering world-class construction and facilities management."
                  </div>

                  {/* Author/Person Info - Static */}
                  <div className="mt-3">
                    <div className="font-bold text-lg">Ahmed Mohiuddin</div>
                    <div className="text-blue-100 text-sm mt-0.5">President</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination Dots - Smaller and thinner */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-1.5 mt-8">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all rounded-full ${
                    index === currentSlide 
                      ? 'w-8 h-1 bg-orange-500' 
                      : 'w-1 h-1 bg-gray-400 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive end-to-end solutions for all your construction and facilities management needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-blue-900 transition-colors">
                <div className="text-5xl mb-4">
                  {typeof area.icon === 'string' ? area.icon : <area.icon size={48} className="text-blue-900" />}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <ul className="space-y-3">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={18} className="flex-shrink-0 mt-1 text-orange-500" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Philosophy & Values</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Built on integrity, transparency, and technical excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-colors">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-blue-100 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Our Commitment</h3>
            <p className="text-blue-100 leading-relaxed text-center text-lg">
              At AM Renovators & Services, we do not merely build or renovate structures—we protect, enhance, and manage assets. Our commitment is to deliver projects that uphold the trust placed in us, provide genuine value for money, and consistently exceed client expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {credentials.map((cred, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="text-sm font-semibold text-gray-600 mb-2">{cred.label}</div>
                <div className="text-lg font-bold text-blue-900">{cred.value}</div>
              </div>
            ))}
          </div>

          {/* Trusted By Section */}
          <div className="mt-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Star size={16} />
                Trusted Partners
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Organizations We've Worked With
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
                  className="group bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-blue-900 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                >
                  <img 
                    src={company.img} 
                    alt={company.name}
                    className="w-full h-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 italic">
                ...and many more valued clients across residential, commercial, and institutional sectors
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}