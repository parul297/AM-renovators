import React, { useState } from 'react';
import { Globe, Video, Camera, DollarSign, Shield, Clock, CheckCircle, Star, MapPin, Users, Phone, Mail, MessageCircle, FileText, Home, Wrench, AlertCircle, TrendingUp, Award, Plane, ArrowRight, ChevronRight } from 'lucide-react';
import Footer from '../../components/Footer/Footer';

export default function NRIPropertyManagement() {
  const [activeTimezone, setActiveTimezone] = useState(0);

  const nriChallenges = [
    {
      icon: MapPin,
      challenge: 'Distance & Time Zones',
      problem: 'Managing property from thousands of miles away',
      solution: 'Your dedicated on-ground partner with scheduled updates in your timezone',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      challenge: 'Trust & Transparency',
      problem: 'Fear of being overcharged or quality compromised',
      solution: 'Complete documentation, itemized bills, and photographic evidence',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      challenge: 'Timeline Management',
      problem: 'Projects dragging on with no clear completion date',
      solution: 'Fixed timelines with penalties, weekly progress tracking',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: DollarSign,
      challenge: 'Cost Control',
      problem: 'Budget overruns and hidden charges',
      solution: 'Fixed-price contracts, no surprise costs, clear payment schedules',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const services = [
    {
      icon: Home,
      title: 'Complete Renovation Management',
      description: 'End-to-end project management from design to handover',
      features: ['Design finalization', 'Vendor coordination', 'Quality supervision', 'Timeline management'],
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80'
    },
    {
      icon: Wrench,
      title: 'Property Maintenance',
      description: 'Regular upkeep and emergency repairs while you\'re away',
      features: ['Periodic inspections', 'Preventive maintenance', 'Emergency response', 'Seasonal checks'],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80'
    },
    {
      icon: Users,
      title: 'Tenant Management',
      description: 'Handle tenants, rent collection, and property issues',
      features: ['Tenant screening', 'Rent collection', 'Issue resolution', 'Legal compliance'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'
    },
    {
      icon: FileText,
      title: 'Documentation & Legal',
      description: 'Handle paperwork, approvals, and legal requirements',
      features: ['Building approvals', 'Tax documentation', 'Property papers', 'Compliance'],
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80'
    }
  ];

  const communicationProcess = [
    {
      day: 'Day 1',
      title: 'Initial Video Consultation',
      description: 'Understand your requirements, show property via video',
      icon: Video,
      deliverable: 'Detailed scope document'
    },
    {
      day: 'Day 3-5',
      title: 'Site Assessment & Quote',
      description: 'Complete property inspection with photo documentation',
      icon: Camera,
      deliverable: 'Itemized quotation with photos'
    },
    {
      day: 'Weekly',
      title: 'Progress Updates',
      description: 'Every Friday: Photos, videos, status report via email/WhatsApp',
      icon: MessageCircle,
      deliverable: 'Photo album + written update'
    },
    {
      day: 'Bi-Weekly',
      title: 'Video Call Reviews',
      description: 'Live virtual site walk-through to show progress',
      icon: Video,
      deliverable: 'Recorded video + Q&A session'
    },
    {
      day: 'On Demand',
      title: 'Instant Support',
      description: '24/7 WhatsApp access for urgent queries or concerns',
      icon: Phone,
      deliverable: 'Immediate response guarantee'
    }
  ];

  const timezones = [
    { country: 'UAE', cities: 'Dubai, Abu Dhabi', offset: 'GMT+4', flag: '🇦🇪' },
    { country: 'USA', cities: 'New York, Texas', offset: 'GMT-5/-6', flag: '🇺🇸' },
    { country: 'UK', cities: 'London, Manchester', offset: 'GMT+0', flag: '🇬🇧' },
    { country: 'Singapore', cities: 'Singapore', offset: 'GMT+8', flag: '🇸🇬' },
    { country: 'Australia', cities: 'Sydney, Melbourne', offset: 'GMT+10/+11', flag: '🇦🇺' }
  ];

  const testimonials = [
    {
      name: 'Rajesh & Priya Kumar',
      location: 'Dubai, UAE',
      property: 'Banjara Hills, Hyderabad',
      project: 'Complete 4BHK Renovation',
      rating: 5,
      text: 'Managing our property renovation from Dubai seemed impossible until we found AM Renovators. Ahmed personally oversaw everything, sent us weekly photo updates, and the transparency was exceptional. Our parents are thrilled with their upgraded home!',
      duration: '90 days',
      investment: '₹28 Lakhs',
      image: '🇦🇪'
    },
    {
      name: 'Anand Krishnan',
      location: 'Singapore',
      property: 'Jubilee Hills, Hyderabad',
      project: 'Villa Maintenance & Tenant Management',
      rating: 5,
      text: 'For 3 years, AM Renovators has managed my villa perfectly. From finding good tenants to handling repairs, everything is documented and transparent. I receive monthly reports and never worry about my property.',
      duration: 'Ongoing 3 years',
      investment: 'AMC Contract',
      image: '🇸🇬'
    },
    {
      name: 'Meera Patel',
      location: 'London, UK',
      property: 'Kondapur, Hyderabad',
      project: 'New Villa Construction',
      rating: 5,
      text: 'Building a house remotely was my biggest fear, but Ahmed made it seamless. Video calls every 2 weeks, detailed photo documentation, and honest advice throughout. Completed on time and within budget!',
      duration: '10 months',
      investment: '₹65 Lakhs',
      image: '🇬🇧'
    }
  ];

  const whyDifferent = [
    {
      icon: Globe,
      title: 'International Experience',
      description: 'Worked in Dubai, understand NRI perspective and challenges firsthand',
      proof: 'Managed 129 buildings for Nakheel Properties'
    },
    {
      icon: Shield,
      title: 'Complete Accountability',
      description: 'Single point of contact - Ahmed personally oversees every NRI project',
      proof: 'Direct mobile access to founder'
    },
    {
      icon: Camera,
      title: 'Photo Documentation',
      description: 'Every material delivery, every work stage photographed and shared',
      proof: '1000+ photos per project average'
    },
    {
      icon: FileText,
      title: 'Transparent Billing',
      description: 'Material bills, labor receipts, everything documented and shared',
      proof: 'Itemized expense tracking'
    }
  ];

  const paymentOptions = [
    { method: 'International Wire Transfer', details: 'SWIFT/IBAN to Indian account', fee: 'Bank charges apply' },
    { method: 'NRE/NRO Account Transfer', details: 'Direct bank transfer in India', fee: 'No additional fees' },
    { method: 'Third-Party Services', details: 'Wise, Remitly, Western Union', fee: 'Service charges vary' },
    { method: 'Milestone-Based Payments', details: 'Pay as work progresses', fee: 'Recommended approach' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(99,102,241,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(6,182,212,0.3),transparent_50%)]"></div>
        </div>

        {/* Floating planes animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                top: `${20 + i * 15}%`,
                animation: `float ${15 + i * 3}s linear infinite`,
                animationDelay: `${i * 3}s`
              }}
            >
              <Plane size={60} className="text-white" />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
              <Globe size={20} className="text-cyan-300" />
              Serving NRIs Worldwide
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              Your Property.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300">
                Our Responsibility.
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Managing your India property from abroad? We're your trusted on-ground partner with complete transparency and accountability.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <a href="#how-it-works" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-6 rounded-full font-bold text-xl transition-all shadow-2xl inline-flex items-center gap-3 group">
                See How It Works
                <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#testimonials" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold text-xl transition-all border-2 border-white/30">
                Success Stories
              </a>
            </div>

            {/* Timezone Slider */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-6">We Work in Your Timezone</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {timezones.map((tz, index) => (
                  <button
                    key={index}
                    onMouseEnter={() => setActiveTimezone(index)}
                    className={`p-4 rounded-xl transition-all ${
                      activeTimezone === index
                        ? 'bg-cyan-500 scale-110'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    <div className="text-4xl mb-2">{tz.flag}</div>
                    <div className="font-bold text-sm">{tz.country}</div>
                    <div className="text-xs text-blue-200">{tz.offset}</div>
                  </button>
                ))}
              </div>
              <p className="text-sm text-blue-200 mt-4">
                Video calls scheduled at your convenience • Updates sent in your morning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NRI Challenges & Solutions */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">We Understand Your Challenges</h2>
            <p className="text-xl text-gray-600">And we've built our entire process to solve them</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {nriChallenges.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 hover:shadow-2xl transition-all">
                <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <item.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.challenge}</h3>
                  
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4 rounded">
                    <div className="flex items-start gap-2">
                      <AlertCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-red-900 mb-1">The Problem</div>
                        <div className="text-sm text-red-700">{item.problem}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <div className="flex items-start gap-2">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-semibold text-green-900 mb-1">Our Solution</div>
                        <div className="text-sm text-green-700">{item.solution}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services for NRIs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">What We Manage For You</h2>
            <p className="text-xl text-gray-600">Comprehensive property management from abroad</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-3 shadow-lg">
                      <service.icon size={28} className="text-gray-900" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication Process */}
      <section id="how-it-works" className="py-24 bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">How We Keep You Updated</h2>
            <p className="text-xl text-blue-200">Complete transparency, constant communication</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {communicationProcess.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-xl">
                    <step.icon size={28} className="text-white" />
                  </div>
                  
                  <div className="text-cyan-300 font-bold text-sm mb-2">{step.day}</div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-blue-100 text-sm mb-4">{step.description}</p>
                  
                  <div className="bg-white/10 rounded-lg p-3 border border-white/20">
                    <div className="text-xs text-cyan-300 font-semibold mb-1">Deliverable:</div>
                    <div className="text-sm font-medium">{step.deliverable}</div>
                  </div>
                </div>
                
                {index < communicationProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight size={24} className="text-cyan-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto text-center">
            <Video size={48} className="mx-auto mb-4 text-cyan-300" />
            <h3 className="text-2xl font-bold mb-4">Every Project Documented</h3>
            <p className="text-blue-100 text-lg">
              Average 1,000+ photos and 10+ video updates per project. You'll know exactly what's happening, when it's happening.
            </p>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Why NRIs Choose Us</h2>
            <p className="text-xl text-gray-600">Not just promises - proven track record</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyDifferent.map((reason, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <reason.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 mb-4">{reason.description}</p>
                
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-blue-600" />
                    <span className="text-sm font-semibold text-blue-900">{reason.proof}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">NRI Success Stories</h2>
            <p className="text-xl text-gray-600">Real projects, real NRIs, real peace of mind</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl border-2 border-blue-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <div className="text-4xl">{testimonial.image}</div>
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="border-t-2 border-blue-200 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Property</div>
                      <div className="text-sm font-semibold text-gray-900">{testimonial.property}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Project</div>
                      <div className="text-sm font-semibold text-gray-900">{testimonial.project}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Duration</div>
                      <div className="text-sm font-semibold text-gray-900">{testimonial.duration}</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">Investment</div>
                      <div className="text-sm font-semibold text-gray-900">{testimonial.investment}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Flexible Payment Options</h2>
            <p className="text-xl text-gray-600">Easy international payment methods</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {paymentOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200">
                <div className="flex items-start gap-4">
                  <DollarSign size={32} className="text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{option.method}</h3>
                    <p className="text-gray-600 text-sm mb-2">{option.details}</p>
                    <span className="text-xs text-gray-500">{option.fee}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-blue-900 rounded-2xl p-8 text-white text-center">
            <TrendingUp size={48} className="mx-auto mb-4 text-cyan-300" />
            <h3 className="text-2xl font-bold mb-2">Milestone-Based Recommended</h3>
            <p className="text-blue-100">
              Pay as work progresses: 30% start, 40% mid-way, 30% completion. You're always in control.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Globe size={64} className="mx-auto mb-6 text-cyan-300" />
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Trust Your Property with Us?
          </h2>
          <p className="text-2xl mb-12 text-blue-100">
            Join 100+ NRIs worldwide who sleep peacefully knowing their property is in good hands
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="tel:+919876543210"
              className="bg-white text-blue-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl inline-flex items-center gap-3"
            >
              <Phone size={28} />
              <div className="text-left">
                <div className="text-sm opacity-80">Call Now</div>
                <div>+91 98765 43210</div>
              </div>
            </a>
            
            <a 
              href="https://wa.me/919876543210"
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-full font-bold text-xl transition-all shadow-2xl inline-flex items-center gap-3"
            >
              <MessageCircle size={28} />
              WhatsApp Us
            </a>

                     <a 
              href="mailto:info@amrenovators.com"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-12 py-6 rounded-full font-bold text-xl transition-all shadow-2xl inline-flex items-center gap-3"
            >
              <Mail size={28} />
              Email Us
            </a>
          </div>
          
          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/30 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-5xl font-bold text-cyan-300 mb-2">27+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-cyan-300 mb-2">100+</div>
                <div className="text-sm text-blue-100">NRI Clients Worldwide</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-cyan-300 mb-2">98%</div>
                <div className="text-sm text-blue-100">Client Retention</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-blue-100">
              <Shield size={20} />
              <span>CPWD Registered • Government Trusted Contractor</span>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Form */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-blue-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Free NRI Property Assessment</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Get a free video consultation with Ahmed to discuss your property needs. 
                  No obligation, just honest advice from someone who understands NRI challenges.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Video className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Video Consultation</h3>
                      <p className="text-gray-600">30-minute video call at your convenience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Camera className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Virtual Site Tour</h3>
                      <p className="text-gray-600">We'll show your property via video if needed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Written Proposal</h3>
                      <p className="text-gray-600">Detailed scope, timeline, and cost estimate</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Free Consultation</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Location</label>
                    <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
                      <option>Select your country</option>
                      <option>United Arab Emirates</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Singapore</option>
                      <option>Australia</option>
                      <option>Canada</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Location in India</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Hyderabad, Banjara Hills"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Communication</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="py-3 border-2 border-blue-200 rounded-lg hover:border-blue-500 transition-colors">
                        <Video className="w-5 h-5 mx-auto text-gray-600" />
                        <span className="text-xs mt-1 block">Video Call</span>
                      </button>
                      <button className="py-3 border-2 border-blue-200 rounded-lg hover:border-blue-500 transition-colors">
                        <Phone className="w-5 h-5 mx-auto text-gray-600" />
                        <span className="text-xs mt-1 block">Phone</span>
                      </button>
                      <button className="py-3 border-2 border-blue-200 rounded-lg hover:border-blue-500 transition-colors">
                        <MessageCircle className="w-5 h-5 mx-auto text-gray-600" />
                        <span className="text-xs mt-1 block">WhatsApp</span>
                      </button>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all">
                    Schedule Free Consultation
                  </button>
                  
                  <p className="text-center text-sm text-gray-500">
                    We'll respond within 24 hours to confirm your time slot
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold">AM Renovators & Services</span>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Your trusted partner for property management in India. 
              27+ years experience, CPWD registered, serving NRIs worldwide.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="font-bold mb-4">Contact</div>
                <div className="space-y-2 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>info@amrenovators.com</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="font-bold mb-4">Services for NRIs</div>
                <div className="space-y-2 text-gray-400 text-sm">
                  <div>Property Renovation</div>
                  <div>Maintenance Management</div>
                  <div>Tenant Management</div>
                  <div>Legal Documentation</div>
                </div>
              </div>
              
              <div>
                <div className="font-bold mb-4">Experience</div>
                <div className="space-y-2 text-gray-400 text-sm">
                  <div>27+ Years Experience</div>
                  <div>Nakheel Properties, Dubai</div>
                  <div>CPWD Registered</div>
                  <div>Hyderabad Airport AMC</div>
                </div>
              </div>
              
              <div>
                <div className="font-bold mb-4">Timezones Covered</div>
                <div className="space-y-2 text-gray-400 text-sm">
                  <div>Gulf: GMT+4</div>
                  <div>USA: GMT-5 to -8</div>
                  <div>UK: GMT+0</div>
                  <div>Singapore: GMT+8</div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 pt-8">
              <div className="text-gray-500 text-sm">
                <p>© 2024 AM Renovators & Services. All rights reserved.</p>
                <p className="mt-2">CPWD Registration Number: XYZ-12345 • GST Registered</p>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      <Footer/>
    </div>
  );
}

// Add CSS animation for floating planes
const styles = `
  @keyframes float {
    0% {
      transform: translateX(-100px) rotate(-10deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      transform: translateX(calc(100vw + 100px)) rotate(10deg);
      opacity: 0;
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.2);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}