import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle, Video, Calendar, Users, Building2, Home, Wrench, Star, ArrowRight } from 'lucide-react';
import Footer from '../../components/Footer/Footer';

export default function ContactUs() {
  const [selectedService, setSelectedService] = useState(null);
  const [step, setStep] = useState(1);

  const services = [
    { id: 'construction', name: 'Construction', icon: Building2, color: 'from-blue-500 to-blue-600' },
    { id: 'renovation', name: 'Renovation', icon: Home, color: 'from-purple-500 to-purple-600' },
    { id: 'maintenance', name: 'Maintenance', icon: Wrench, color: 'from-green-500 to-green-600' },
    { id: 'nri', name: 'NRI Services', icon: Star, color: 'from-orange-500 to-orange-600' }
  ];

  const contactWays = [
    {
      type: 'Call',
      icon: Phone,
      title: 'Schedule a Call',
      desc: 'Speak directly with our team',
      time: '15-30 minutes',
      color: 'bg-blue-50 border-blue-200',
      button: 'Book Call Slot'
    },
    {
      type: 'Video',
      icon: Video,
      title: 'Video Consultation',
      desc: 'Perfect for NRI clients',
      time: '30-45 minutes',
      color: 'bg-purple-50 border-purple-200',
      button: 'Schedule Video Call'
    },
    {
      type: 'Visit',
      icon: MapPin,
      title: 'Site Visit',
      desc: 'We come to your location',
      time: 'Flexible timing',
      color: 'bg-green-50 border-green-200',
      button: 'Request Site Visit'
    },
    {
      type: 'Chat',
      icon: MessageCircle,
      title: 'Live Chat',
      desc: 'Quick questions & quotes',
      time: 'Instant response',
      color: 'bg-orange-50 border-orange-200',
      button: 'Start Chat'
    }
  ];

  const quickContact = [
    { 
      icon: Phone, 
      label: 'Call Directly', 
      value: '+91 98765 43210',
      subtext: 'Available Mon-Sat, 9 AM - 7 PM',
      action: 'tel:+919876543210'
    },
    { 
      icon: MessageCircle, 
      label: 'WhatsApp Us', 
      value: 'Instant Reply',
      subtext: 'Chat with us anytime',
      action: 'https://wa.me/919876543210'
    },
    { 
      icon: Mail, 
      label: 'Email Us', 
      value: 'info@amrenovators.com',
      subtext: '24-hour response guarantee',
      action: 'mailto:info@amrenovators.com'
    }
  ];

  const locations = [
    {
      city: 'Hyderabad',
      areas: ['Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Madhapur', 'Kondapur'],
      isMain: true
    },
    {
      city: 'Secunderabad',
      areas: ['Trimulgherry', 'Alwal', 'Sainikpuri', 'Kompally'],
      isMain: false
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Different Approach */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Users size={16} />
              Join 500+ Satisfied Clients
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Build Something<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-orange-600">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose how you'd like to connect with us. We're flexible and ready to work around your schedule.
            </p>
          </div>

          {/* Service Selection Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-6 rounded-2xl border-2 transition-all hover:scale-105 ${
                  selectedService === service.id
                    ? 'border-orange-500 bg-orange-50 shadow-lg'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 mx-auto`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{service.name}</h3>
                {selectedService === service.id && (
                  <CheckCircle size={20} className="text-orange-500 mx-auto mt-2" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Way to Connect */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Preferred Way to Connect</h2>
            <p className="text-xl text-gray-600">Select the method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactWays.map((way, index) => (
              <div key={index} className={`${way.color} border-2 rounded-2xl p-6 hover:shadow-xl transition-all`}>
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <way.icon size={28} className="text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{way.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{way.desc}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <Clock size={16} />
                  <span>{way.time}</span>
                </div>
                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-colors">
                  {way.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {quickContact.map((contact, index) => (
              <a
                key={index}
                href={contact.action}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-blue-100 text-sm mb-1">{contact.label}</div>
                    <div className="text-white font-bold text-lg mb-1">{contact.value}</div>
                    <div className="text-blue-200 text-xs">{contact.subtext}</div>
                  </div>
                  <ArrowRight size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Visual Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We Serve Hyderabad & Beyond</h2>
            <p className="text-xl text-gray-600">Delivering excellence across the city</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className={`rounded-2xl p-8 ${location.isMain ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-white' : 'bg-gray-50 border-2 border-gray-200'}`}>
                <div className="flex items-center gap-3 mb-6">
                  <MapPin size={32} className={location.isMain ? 'text-orange-400' : 'text-blue-900'} />
                  <div>
                    <h3 className="text-2xl font-bold">{location.city}</h3>
                    {location.isMain && <span className="text-orange-300 text-sm">Main Service Area</span>}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {location.areas.map((area, idx) => (
                    <span 
                      key={idx}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                        location.isMain 
                          ? 'bg-white/20 text-white' 
                          : 'bg-white border border-gray-300 text-gray-700'
                      }`}
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
              <Star size={20} className="text-orange-500" />
              <span className="text-gray-700 font-medium">Special services available for NRI clients nationwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Happens After You Reach Out?</h2>
            <p className="text-xl text-gray-600">Our simple, transparent process</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Contact Us', desc: 'Reach out via your preferred method', icon: MessageCircle, time: 'Day 1' },
              { step: '2', title: 'Consultation', desc: 'Free discussion about your project', icon: Video, time: 'Within 24hrs' },
              { step: '3', title: 'Site Visit', desc: 'We assess your property & needs', icon: MapPin, time: 'Day 2-3' },
              { step: '4', title: 'Detailed Quote', desc: 'Transparent, itemized proposal', icon: CheckCircle, time: 'Day 4-5' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-blue-900 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <div className="mb-4">
                    <item.icon size={32} className="text-orange-500" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
                  <div className="text-xs text-orange-600 font-semibold">{item.time}</div>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-blue-900 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Proof */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={32} className="text-white fill-white" />
              ))}
            </div>
            <blockquote className="text-2xl font-bold mb-6 italic">
              "The responsiveness and transparency throughout our renovation was outstanding. They understood we were managing from Dubai and made everything seamless."
            </blockquote>
            <div className="text-orange-100">
              <div className="font-bold text-lg">Rajesh Kumar</div>
              <div className="text-sm">NRI Client, Dubai → Hyderabad Renovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Different Approach */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Still Not Sure? Let's Talk!
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            No commitment required. Just a friendly conversation about your project.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <a 
              href="tel:+919876543210"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              <div className="text-left">
                <div className="text-sm opacity-90">Call Now</div>
                <div className="font-bold">+91 98765 43210</div>
              </div>
            </a>

            <a 
              href="https://wa.me/919876543210"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-5 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-3"
            >
              <MessageCircle size={24} />
              <div className="text-left">
                <div className="text-sm opacity-90">WhatsApp</div>
                <div className="font-bold">Chat Instantly</div>
              </div>
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">24hrs</div>
              <div className="text-blue-100 text-sm">Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-blue-100 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-blue-100 text-sm">Transparency</div>
            </div>
          </div>
        </div>
      </section>
         <Footer/>
    </div>
  );
}