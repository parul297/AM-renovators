import React, { useState } from 'react';
import { Sparkles, Home, Palette, Layers, Zap, Droplets, Wind, Sun, Shield, Camera, Clock, TrendingUp, ArrowRight, ChevronLeft, ChevronRight, CheckCircle, Star, Users, Award, Phone, MessageCircle } from 'lucide-react';
import Footer from '../../components/Footer/Footer';
import beforefull from "../../assets/workedWith/beforeBadminton.jpg";
import afterfull from "../../assets/workedWith/afterBadminton.jpg";
import before from "../../assets/workedWith/beforeHalf.jpg";
import after from "../../assets/workedWith/afterFull.jpg";
import flatsbefore from "../../assets/workedWith/beforeFlats.jpeg"

export default function RenovationService() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState('living');

  const beforeAfterProjects = [
    {
      title: 'Badminton Court Complete Transformation',
      location: 'Hyderabad, Telangana',
      before: beforefull,
      after: afterfull,
      // duration: '75 days',
      // budget: '₹18 Lakhs',
      highlights: ['Complete flooring replacement', 'Professional court marking', 'LED lighting upgrade', 'Surface refinishing']
    },
    {
      title: 'Residential Space Modernization',
      location: 'Hyderabad, Telangana',
      before: before,
      after: after,
      // duration: '90 days',
      // budget: '₹32 Lakhs',
      highlights: ['Structural repairs', 'Interior redesign', 'Modern finishes', 'Complete makeover']
    },
    {
      title: 'Apartment Complex Project',
      location: 'Hyderabad, Telangana',
      before: flatsbefore,
      after: flatsbefore, // Using same image since no after image available
      // duration: '45 days',
      // budget: '₹12 Lakhs',
      highlights: ['Space optimization', 'Structural work', 'Quality upgrades', 'Modern amenities']
    }
  ];

  const roomTypes = {
    living: {
      name: 'Living Spaces',
      icon: Home,
      color: 'from-blue-500 to-blue-600',
      services: ['Complete interior redesign', 'False ceiling & lighting', 'Flooring upgrades', 'Wall treatments & paint', 'Built-in furniture', 'Smart home integration']
    },
    kitchen: {
      name: 'Kitchen & Dining',
      icon: Sparkles,
      color: 'from-purple-500 to-purple-600',
      services: ['Modular kitchen installation', 'Countertop upgrades', 'Appliance integration', 'Storage optimization', 'Plumbing & drainage', 'Ventilation systems']
    },
    bathroom: {
      name: 'Bathrooms',
      icon: Droplets,
      color: 'from-cyan-500 to-cyan-600',
      services: ['Complete sanitaryware replacement', 'Premium tiling & waterproofing', 'Modern fixtures & fittings', 'Shower enclosures', 'Vanity units', 'Underfloor heating']
    },
    bedroom: {
      name: 'Bedrooms',
      icon: Sun,
      color: 'from-orange-500 to-orange-600',
      services: ['Wardrobe & storage solutions', 'Accent walls & lighting', 'Flooring selection', 'Window treatments', 'Built-in study areas', 'Climate control']
    },
    exterior: {
      name: 'Exterior & Façade',
      icon: Wind,
      color: 'from-green-500 to-green-600',
      services: ['Façade restoration', 'Exterior painting', 'Waterproofing solutions', 'Terrace upgrades', 'Landscaping', 'Compound wall repairs']
    }
  };

  const transformationSteps = [
    {
      phase: 'Discovery & Planning',
      icon: Camera,
      duration: '1 week',
      description: 'We assess your space, understand your vision, and create a comprehensive renovation plan',
      activities: ['Site inspection', 'Design consultation', 'Budget discussion', '3D visualization', 'Material selection']
    },
    {
      phase: 'Design Finalization',
      icon: Palette,
      duration: '1-2 weeks',
      description: 'Detailed design development with your inputs and expert recommendations',
      activities: ['Floor plans', 'Layouts', 'Material specs', 'Cost breakdown', 'Timeline planning']
    },
    {
      phase: 'Demolition & Prep',
      icon: Shield,
      duration: '3-7 days',
      description: 'Careful removal of old elements with dust control and safety measures',
      activities: ['Selective demolition', 'Debris removal', 'Surface prep', 'Protection', 'Assessment']
    },
    {
      phase: 'Transformation',
      icon: Zap,
      duration: '4-8 weeks',
      description: 'Systematic renovation with quality checks at every stage',
      activities: ['Civil work', 'Electrical & plumbing', 'Flooring & tiling', 'Carpentry', 'Painting', 'Inspections']
    },
    {
      phase: 'Final Touches',
      icon: Star,
      duration: '3-5 days',
      description: 'Detailed finishing, cleaning, and your dream space ready to move in',
      activities: ['Fixture installation', 'Deep cleaning', 'Snag clearance', 'Walkthrough', 'Handover']
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'NRI-Friendly Process',
      description: 'Weekly photo/video updates, remote approvals, and complete transparency for clients managing from abroad'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We commit to timelines and deliver. Phased scheduling ensures minimal disruption to your daily life'
    },
    {
      icon: Award,
      title: 'Dubai-Quality Standards',
      description: 'International renovation practices from Nakheel experience - quality that lasts decades'
    },
    {
      icon: Shield,
      title: 'Zero Surprises',
      description: 'Fixed-price quotes, no hidden costs. What we quote is what you pay, with complete transparency'
    }
  ];

  const testimonials = [
    {
      text: "They transformed our 20-year-old house into a modern home while we were in Singapore. Weekly updates and photo documentation gave us complete peace of mind. The attention to detail was incredible!",
      author: "Priya & Karthik",
      location: "NRI Clients, Singapore",
      project: "Complete 4BHK Renovation",
      rating: 5
    },
    {
      text: "What impressed us most was how they managed to complete everything in 60 days without compromising quality. We were living in the house during renovation, and they ensured minimal disruption.",
      author: "Dr. Sharma Family",
      location: "Banjara Hills, Hyderabad",
      project: "Living Room & Kitchen Renovation",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % beforeAfterProjects.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
                <Sparkles size={16} className="text-yellow-300" />
                Transform Your Space
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Renovation &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300">
                  Refurbishment
                </span>
              </h1>
              <p className="text-2xl text-blue-100 mb-8 leading-relaxed">
                Breathe new life into your space. From outdated to outstanding - we create homes you'll love to live in.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#before-after" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl inline-flex items-center gap-3 group">
                  See Transformations
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#process" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all border-2 border-white/30">
                  Our Process
                </a>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80"
                alt="Beautiful renovated interior" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Showcase */}
      <section id="before-after" className="py-32 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Witness The Transformation</h2>
            <p className="text-xl text-gray-300">From dated to dazzling - see our renovation magic</p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/10 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div className="relative group">
                  <div className="absolute -top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-sm z-10 shadow-lg">
                    BEFORE
                  </div>
                  <img 
                    src={beforeAfterProjects[activeSlide].before}
                    alt="Before renovation"
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>

                <div className="relative group">
                  <div className="absolute -top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold text-sm z-10 shadow-lg">
                    AFTER
                  </div>
                  <img 
                    src={beforeAfterProjects[activeSlide].after}
                    alt="After renovation"
                    className="w-full h-96 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{beforeAfterProjects[activeSlide].title}</h3>
                    <p className="text-gray-300 mb-4">{beforeAfterProjects[activeSlide].location}</p>
                    <div className="flex flex-wrap gap-2">
                      {beforeAfterProjects[activeSlide].highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-orange-500 hover:text-white transition-all"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl hover:bg-orange-500 hover:text-white transition-all"
            >
              <ChevronRight size={28} />
            </button>

            <div className="flex justify-center gap-3 mt-8">
              {beforeAfterProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeSlide ? 'w-12 bg-gradient-to-r from-orange-500 to-pink-500' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Room Services */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">What We Renovate</h2>
            <p className="text-xl text-gray-600">Every room, every corner - transformed with care</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(roomTypes).map(([key, room]) => (
              <button
                key={key}
                onClick={() => setSelectedRoom(key)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all ${
                  selectedRoom === key
                    ? `bg-gradient-to-r ${room.color} text-white shadow-xl scale-105`
                    : 'bg-white text-gray-700 hover:shadow-lg border-2 border-gray-200'
                }`}
              >
                <room.icon size={24} />
                {room.name}
              </button>
            ))}
          </div>

          <div className={`bg-gradient-to-br ${roomTypes[selectedRoom].color} rounded-3xl p-12 shadow-2xl`}>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  {React.createElement(roomTypes[selectedRoom].icon, { size: 40, className: 'text-gray-900' })}
                </div>
                <h3 className="text-4xl font-bold text-white mb-6">{roomTypes[selectedRoom].name}</h3>
                <p className="text-white/90 text-lg mb-8">
                  Complete transformation services tailored to make your {roomTypes[selectedRoom].name.toLowerCase()} functional, beautiful, and uniquely yours.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                <h4 className="text-white font-bold text-xl mb-6">Services Included:</h4>
                <div className="space-y-4">
                  {roomTypes[selectedRoom].services.map((service, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle size={24} className="text-white flex-shrink-0 mt-0.5" />
                      <span className="text-white font-medium text-lg">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Renovation Journey</h2>
            <p className="text-xl text-gray-600">A proven 5-phase process that delivers excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {transformationSteps.map((step, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <step.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.phase}</h3>
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.activities.map((activity, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Why Renovate With Us?</h2>
            <p className="text-xl text-blue-200">Experience the AM Renovators difference</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-xl">
                  <reason.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-blue-100">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-2xl mb-10 text-white/90">
            Let's create the home you've always dreamed of
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919876543210" className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl inline-flex items-center gap-3">
              <Phone size={24} />
              Call Now
            </a>
            <a href="https://wa.me/919876543210" className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl inline-flex items-center gap-3">
              <MessageCircle size={24} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}