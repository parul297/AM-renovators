import React, { useState } from 'react';
import { Shield, Wrench, Calendar, Clock, CheckCircle, AlertTriangle, Building2, Home, Factory, Phone, Star, Award, Zap, Droplets, Wind, FileText, Camera, Users, ArrowRight, MessageCircle } from 'lucide-react';
import Footer from '../../components/Footer/Footer';

export default function MaintenanceService() {
  const [selectedPlan, setSelectedPlan] = useState('residential');
  const [activeStat, setActiveStat] = useState(0);

  const amcPlans = {
    residential: {
      name: 'Residential AMC',
      icon: Home,
      color: 'from-blue-500 to-cyan-500',
      subtitle: 'For Homes & Apartments',
      price: '₹15,000 - ₹40,000',
      period: 'per year',
      ideal: 'Individual homes, apartments, villas',
      coverage: [
        { icon: Zap, service: 'Electrical Systems', details: 'Wiring, switches, MCBs, lighting' },
        { icon: Droplets, service: 'Plumbing', details: 'Pipes, taps, drainage, tanks' },
        { icon: Wind, service: 'HVAC', details: 'AC servicing, ventilation' },
        { icon: Wrench, service: 'General Repairs', details: 'Doors, windows, fixtures' }
      ],
      features: ['Quarterly preventive inspections', 'Priority emergency response', 'Free labor, material at cost', 'Annual deep cleaning', '24/7 helpline access'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80'
    },
    commercial: {
      name: 'Commercial AMC',
      icon: Building2,
      color: 'from-purple-500 to-pink-500',
      subtitle: 'For Offices & Workspaces',
      price: '₹50,000 - ₹2,00,000',
      period: 'per year',
      ideal: 'Offices, retail spaces, clinics',
      coverage: [
        { icon: Zap, service: 'Power Systems', details: 'Main panels, UPS, generators' },
        { icon: Wind, service: 'Climate Control', details: 'Central AC, exhaust, ventilation' },
        { icon: Shield, service: 'Safety Systems', details: 'Fire safety, emergency lights' },
        { icon: Wrench, service: 'Infrastructure', details: 'Doors, partitions, furniture' }
      ],
      features: ['Monthly preventive visits', '4-hour emergency response', 'Detailed maintenance logs', 'Compliance documentation', 'Vendor coordination'],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
    },
    corporate: {
      name: 'Corporate Facilities AMC',
      icon: Factory,
      color: 'from-orange-500 to-red-500',
      subtitle: 'For Large Facilities',
      price: '₹2,00,000+',
      period: 'per year',
      ideal: 'Corporate offices, factories, institutions',
      coverage: [
        { icon: Building2, service: 'Complete Facilities', details: 'End-to-end management' },
        { icon: Users, service: 'Vendor Management', details: 'Coordinate all service providers' },
        { icon: FileText, service: 'Compliance', details: 'Safety audits, certifications' },
        { icon: Camera, service: 'Monitoring', details: 'Real-time tracking, reports' }
      ],
      features: ['Dedicated facility manager', 'On-site team availability', '2-hour emergency response', 'Monthly performance reports', 'Predictive maintenance'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80'
    }
  };

  const stats = [
    { number: '500+', label: 'Properties Under AMC', detail: 'Residential & Commercial', icon: Building2 },
    { number: '98%', label: 'Renewal Rate', detail: 'Client Satisfaction', icon: Star },
    { number: '<4hrs', label: 'Response Time', detail: 'Emergency Support', icon: Clock },
    { number: '10+ Years', label: 'Hyderabad Airport', detail: 'AMC Contract', icon: Award }
  ];

  const preventiveMaintenance = [
    {
      system: 'Electrical Systems',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      monthly: ['Visual inspection', 'Testing emergency lights'],
      quarterly: ['MCB testing', 'Wiring check', 'Voltage testing'],
      annual: ['Complete system audit', 'Infrared thermography', 'Load balancing']
    },
    {
      system: 'Plumbing',
      icon: Droplets,
      color: 'from-blue-400 to-cyan-500',
      monthly: ['Leak detection', 'Tap & valve check'],
      quarterly: ['Drainage cleaning', 'Tank cleaning', 'Pressure testing'],
      annual: ['Complete pipe inspection', 'Water quality testing', 'Pump servicing']
    },
    {
      system: 'HVAC',
      icon: Wind,
      color: 'from-green-400 to-teal-500',
      monthly: ['Filter cleaning', 'Gas pressure check'],
      quarterly: ['Deep cleaning', 'Coil servicing', 'Thermostat calibration'],
      annual: ['Complete overhaul', 'Refrigerant top-up', 'Duct cleaning']
    },
    {
      system: 'General Infrastructure',
      icon: Wrench,
      color: 'from-purple-400 to-pink-500',
      monthly: ['Door/window check', 'Lock lubrication'],
      quarterly: ['Paint touch-ups', 'Structural inspection', 'Waterproofing check'],
      annual: ['Façade inspection', 'Roof assessment', 'Pest control']
    }
  ];

  const credibility = [
    {
      title: 'Hyderabad Airport AMC',
      subtitle: 'Terminal Buildings & Residential Colonies',
      duration: '10+ Years',
      scope: 'Complete facilities management for one of India\'s busiest airports',
      icon: Award,
      badge: 'Government Contract'
    },
    {
      title: 'Nakheel Properties, Dubai',
      subtitle: '129 Buildings + 208 Villas',
      duration: '5+ Years',
      scope: 'Managed preventive and corrective maintenance for large residential communities',
      icon: Building2,
      badge: 'International Experience'
    },
    {
      title: 'Institutional Clients',
      subtitle: 'Educational & Government',
      duration: 'Ongoing',
      scope: 'Multiple government institutions under CPWD contract maintenance',
      icon: Shield,
      badge: 'CPWD Registered'
    }
  ];

  const emergencyServices = [
    {
      issue: 'Electrical Failure',
      icon: Zap,
      response: '2-4 hours',
      severity: 'Critical',
      color: 'bg-red-500',
      examples: ['Complete power loss', 'Short circuit', 'MCB tripping']
    },
    {
      issue: 'Water Leakage',
      icon: Droplets,
      response: '2-4 hours',
      severity: 'Critical',
      color: 'bg-red-500',
      examples: ['Pipe burst', 'Ceiling leakage', 'Tank overflow']
    },
    {
      issue: 'AC Breakdown',
      icon: Wind,
      response: '4-8 hours',
      severity: 'High',
      color: 'bg-orange-500',
      examples: ['Cooling failure', 'Water leakage', 'Noise issues']
    },
    {
      issue: 'General Repairs',
      icon: Wrench,
      response: '24 hours',
      severity: 'Medium',
      color: 'bg-yellow-500',
      examples: ['Door/window issues', 'Minor leaks', 'Fixture problems']
    }
  ];

  const comparisonData = [
    { aspect: 'Cost Predictability', withAMC: 'Fixed annual cost, no surprises', withoutAMC: 'Variable, often 2-3x higher in emergencies', winner: 'amc' },
    { aspect: 'Response Time', withAMC: '2-4 hours emergency response', withoutAMC: '1-3 days to find & schedule vendor', winner: 'amc' },
    { aspect: 'Prevention', withAMC: 'Regular inspections prevent breakdowns', withoutAMC: 'Reactive - fix only when broken', winner: 'amc' },
    { aspect: 'Quality', withAMC: 'Consistent service, documented history', withoutAMC: 'Different vendors, variable quality', winner: 'amc' }
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.2),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.2),transparent_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
                <Shield size={20} className="text-emerald-300" />
                Trusted by Hyderabad Airport
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Maintenance &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300">
                  AMC Services
                </span>
              </h1>
              
              <p className="text-2xl text-teal-100 mb-8 leading-relaxed">
                Protect your investment with proactive maintenance. From homes to airports - we keep everything running smoothly.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#plans" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-2xl inline-flex items-center gap-3 group">
                  View AMC Plans
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#emergency" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-5 rounded-full font-bold text-lg transition-all border-2 border-white/30 inline-flex items-center gap-3">
                  <Phone size={24} />
                  Emergency Support
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <stat.icon size={24} className="text-emerald-300" />
                      <div className="text-3xl font-bold text-white">{stat.number}</div>
                    </div>
                    <div className="text-teal-200 font-semibold">{stat.label}</div>
                    <div className="text-teal-300 text-sm">{stat.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80" 
                alt="Maintenance professional" 
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-orange-500 to-red-500 text-white p-8 rounded-2xl shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={32} />
                  <div className="text-4xl font-bold">&lt;4hrs</div>
                </div>
                <div className="text-lg">Emergency Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                onMouseEnter={() => setActiveStat(index)}
                className={`text-center transition-all cursor-pointer ${activeStat === index ? 'scale-110' : ''}`}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <stat.icon size={32} className="text-emerald-200" />
                  <div className="text-5xl font-bold text-white">{stat.number}</div>
                </div>
                <div className="text-emerald-100 font-semibold">{stat.label}</div>
                <div className="text-emerald-200 text-sm">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Plans */}
      <section id="plans" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Choose Your AMC Plan</h2>
            <p className="text-xl text-gray-600">Comprehensive maintenance packages for every need</p>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            {Object.entries(amcPlans).map(([key, plan]) => (
              <button
                key={key}
                onClick={() => setSelectedPlan(key)}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all ${
                  selectedPlan === key
                    ? `bg-gradient-to-r ${plan.color} text-white shadow-2xl scale-110`
                    : 'bg-white text-gray-700 hover:shadow-lg border-2 border-gray-200'
                }`}
              >
                <plan.icon size={28} />
                <span className="hidden md:block">{plan.name}</span>
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${amcPlans[selectedPlan].color} text-white px-6 py-3 rounded-full font-bold mb-6 shadow-lg`}>
                  {React.createElement(amcPlans[selectedPlan].icon, { size: 28 })}
                  {amcPlans[selectedPlan].name}
                </div>

                <h3 className="text-4xl font-bold text-gray-900 mb-2">{amcPlans[selectedPlan].subtitle}</h3>
                <p className="text-gray-600 mb-6">Ideal for: {amcPlans[selectedPlan].ideal}</p>

                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 mb-8 border-2 border-emerald-200">
                  <div className="text-5xl font-bold text-gray-900 mb-2">{amcPlans[selectedPlan].price}</div>
                  <p className="text-gray-600">{amcPlans[selectedPlan].period}</p>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4">What's Covered:</h4>
                <div className="space-y-4 mb-8">
                  {amcPlans[selectedPlan].coverage.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-gray-50 rounded-xl p-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${amcPlans[selectedPlan].color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <item.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{item.service}</div>
                        <div className="text-sm text-gray-600">{item.details}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4">Key Benefits:</h4>
                <div className="space-y-3 mb-8">
                  {amcPlans[selectedPlan].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <a href="#quote" className={`w-full bg-gradient-to-r ${amcPlans[selectedPlan].color} text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2`}>
                  Get This Plan
                  <ArrowRight size={20} />
                </a>
              </div>

              <div className="relative h-full min-h-[800px]">
                <img 
                  src={amcPlans[selectedPlan].image}
                  alt={amcPlans[selectedPlan].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preventive Maintenance */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Preventive Maintenance Schedule</h2>
            <p className="text-xl text-gray-600">Regular inspections prevent costly breakdowns</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {preventiveMaintenance.map((system, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${system.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <system.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{system.system}</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-blue-600" />
                      <span className="font-bold text-gray-900 text-sm">MONTHLY</span>
                    </div>
                    <ul className="space-y-1 ml-6">
                      {system.monthly.map((task, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5"></span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-orange-600" />
                      <span className="font-bold text-gray-900 text-sm">QUARTERLY</span>
                    </div>
                    <ul className="space-y-1 ml-6">
                      {system.quarterly.map((task, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5"></span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-green-600" />
                      <span className="font-bold text-gray-900 text-sm">ANNUAL</span>
                    </div>
                    <ul className="space-y-1 ml-6">
                      {system.annual.map((task, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5"></span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Proven Track Record</h2>
            <p className="text-xl text-teal-200">Trusted by leading organizations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {credibility.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center shadow-xl">
                    <project.icon size={32} className="text-white" />
                  </div>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">{project.badge}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-teal-200 mb-4">{project.subtitle}</p>
                
                <div className="bg-white/10 rounded-lg p-4 mb-4">
                  <div className="text-3xl font-bold text-emerald-300 mb-1">{project.duration}</div>
                  <div className="text-sm text-teal-200">Contract Duration</div>
                </div>
                
                <p className="text-white/90 text-sm">{project.scope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section id="emergency" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-6 py-3 rounded-full font-bold mb-4">
              <AlertTriangle size={24} />
              24/7 Emergency Support
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">When Things Go Wrong</h2>
            <p className="text-xl text-gray-600">We respond fast to minimize damage and downtime</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:shadow-2xl transition-all">
                <div className={`${service.color} h-2`}></div>
                <div className="p-6">
                  <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                    <service.icon size={28} className="text-gray-900" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.issue}</h3>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm font-semibold text-gray-700">Response: {service.response}</span>
                  </div>
                  
                  <div className={`inline-block ${service.color} text-white px-3 py-1 rounded-full text-xs font-bold mb-4`}>
                    {service.severity} Priority
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <div className="font-semibold mb-1">Examples:</div>
                    <ul className="space-y-1">
                      {service.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-1.5"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Emergency Hotline</h3>
            <a href="tel:+919876543210" className="text-5xl font-bold hover:text-yellow-300 transition-colors">
              +91 9515 88 1444
            </a>
            <p className="mt-4 text-red-100">Available 24/7 for AMC clients</p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">AMC vs No AMC</h2>
            <p className="text-xl text-gray-600">See why regular maintenance makes sense</p>
          </div>

          <div className="space-y-6">
            {comparisonData.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-200 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.aspect}</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border-2 border-emerald-500">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle size={24} className="text-emerald-600" />
                      <span className="font-bold text-emerald-900">With AMC</span>
                    </div>
                    <p className="text-gray-700">{item.withAMC}</p>
                  </div>
                  <div className="bg-gray-100 rounded-xl p-6 border-2 border-gray-300">
                                         <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle size={24} className="text-gray-500" />
                      <span className="font-bold text-gray-900">Without AMC</span>
                    </div>
                    <p className="text-gray-700">{item.withoutAMC}</p>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  {item.winner === 'amc' ? (
                    <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-bold">
                      <CheckCircle size={16} />
                      AMC is better
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-bold">
                      <AlertTriangle size={16} />
                      No AMC is better
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA/Contact Section */}
      {/* <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-200">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Your Free AMC Quote</h2>
                <p className="text-gray-600 mb-8">Fill in your details and our team will contact you within 24 hours with a customized AMC proposal.</p>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="+91 9515 88 1444"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                    <select 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                    >
                      <option>Select property type</option>
                      <option>Residential Home</option>
                      <option>Apartment</option>
                      <option>Commercial Office</option>
                      <option>Retail Space</option>
                      <option>Factory/Industrial</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Approximate Square Feet</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="e.g., 2000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                    <textarea 
                      rows="3"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                      placeholder="Tell us about your specific maintenance needs..."
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={20} />
                    Request Free Quote
                  </button>
                </form>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-12 text-white">
                <div className="mb-8">
                  <Shield size={48} className="mb-4" />
                  <h3 className="text-3xl font-bold mb-4">Why Choose Us?</h3>
                  <p className="text-emerald-100">With 15+ years of experience and major government contracts, we provide reliable, professional maintenance services.</p>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-emerald-200 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">24/7 Support</h4>
                      <p className="text-emerald-200 text-sm">Emergency response within 4 hours for all AMC clients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-emerald-200 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Transparent Pricing</h4>
                      <p className="text-emerald-200 text-sm">No hidden charges, clear scope of work</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-emerald-200 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Certified Technicians</h4>
                      <p className="text-emerald-200 text-sm">All staff are background-checked and certified</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-emerald-200 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold">Digital Reports</h4>
                      <p className="text-emerald-200 text-sm">Access all maintenance records online</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-emerald-500 pt-6">
                  <h4 className="font-bold mb-4">Contact Info</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone size={20} className="text-emerald-200" />
                      <a href="tel:+919876543210" className="hover:text-emerald-200">+91 9515 88 1444</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle size={20} className="text-emerald-200" />
                      <span>support@maintenance.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
    <Footer/>
    </div>
  );
}