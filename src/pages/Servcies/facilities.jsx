import React, { useState, useEffect } from 'react';
import { 
  Building2, Users, Shield, BarChart, TrendingUp, Target, 
  Clock, CheckCircle, Award, Globe, Zap, Wind, Droplets, 
  Wrench, Settings, Cpu, Lock, Thermometer, Camera, 
  FileText, Calendar, Download, MessageCircle, Phone, 
  ArrowRight, ChevronRight, Star, Eye, HeartHandshake, 
  MapPin, Home, Factory, Briefcase, Network, PieChart,
  LineChart, Layers, Package,  Database, Cloud,
  Activity, Battery, RefreshCw, Award as AwardIcon,
  Users as TeamIcon, Shield as ShieldIcon, ChevronDown,
  X, Menu
} from 'lucide-react';
import Footer from '../../components/Footer/Footer';

export default function FacilitiesAssetManagement() {
  const [activeTab, setActiveTab] = useState('facility');
  const [hoveredService, setHoveredService] = useState(null);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({
    properties: 0,
    efficiency: 0,
    uptime: 0,
    savings: 0
  });

  // Animate stats on load
  useEffect(() => {
    const animateValue = (start, end, duration, setter) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        setter(value);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    animateValue(0, 129, 2000, (val) => setAnimatedStats(prev => ({...prev, properties: val})));
    animateValue(0, 35, 2000, (val) => setAnimatedStats(prev => ({...prev, efficiency: val})));
    animateValue(95, 99.7, 2000, (val) => setAnimatedStats(prev => ({...prev, uptime: val})));
    animateValue(0, 40, 2000, (val) => setAnimatedStats(prev => ({...prev, savings: val})));
  }, []);

  const nakheelExperience = {
    title: 'Nakheel Properties Experience',
    location: 'Dubai, UAE',
    duration: '5+ Years',
    scope: 'Managed 129 buildings and 208 villas in The Gardens & Garden View Villas communities',
    achievements: [
      'Implemented Dubai-level facilities management standards',
      'Reduced operational costs by 35% through systematic optimization',
      'Achieved 99.7% facility uptime across all managed properties',
      'Managed coordination of 200+ vendors and service providers',
      'Implemented sustainable practices reducing environmental impact'
    ],
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80'
  };

  const services = [
    {
      id: 'facility',
      title: 'Complete Facility Management',
      icon: Building2,
      color: 'from-blue-600 to-indigo-700',
      description: 'End-to-end management of all facility operations, maintenance, and services',
      features: [
        '24/7 facility operations monitoring',
        'Preventive & corrective maintenance programs',
        'Housekeeping & janitorial services management',
        'Landscaping & exterior maintenance',
        'Utility management & consumption optimization'
      ]
    },
    {
      id: 'asset',
      title: 'Strategic Asset Management',
      icon: TrendingUp,
      color: 'from-amber-500 to-orange-600',
      description: 'Maximizing asset value through comprehensive lifecycle management',
      features: [
        'Complete asset inventory & condition assessment',
        'Lifecycle cost analysis & forecasting',
        'Strategic replacement planning & budgeting',
        'Performance benchmarking against industry standards',
        'Depreciation tracking & asset valuation'
      ]
    },
    {
      id: 'vendor',
      title: 'Vendor Management',
      icon: Users,
      color: 'from-rose-500 to-pink-600',
      description: 'Professional coordination and management of all service providers',
      features: [
        'Vendor selection, onboarding & management',
        'Contract administration & SLA monitoring',
        'Quality assurance & performance audits',
        'Vendor performance scorecards',
        'Cost optimization through strategic negotiations'
      ]
    },
    {
      id: 'tech',
      title: 'Technology Solutions',
      icon: Cpu,
      color: 'from-cyan-500 to-blue-500',
      description: 'Smart building technologies and digital transformation services',
      features: [
        'Building Management Systems (BMS) implementation',
        'IoT sensors for predictive maintenance',
        'Energy management & monitoring systems',
        'Digital twin technology implementation',
        'Mobile-first reporting & analytics platform'
      ]
    }
  ];

  const managementSystems = [
    {
      id: 'bms',
      system: 'Building Management System',
      icon: Settings,
      description: 'Centralized control and monitoring of building systems',
      features: [
        'HVAC system optimization & control',
        'Lighting & energy management',
        'Security & access control integration',
        'Real-time monitoring & alerts',
        'Automated scheduling & reporting'
      ],
      benefits: '25-30% energy savings, improved occupant comfort',
      timeframe: 'Implementation: 90-120 days'
    },
    {
      id: 'cmms',
      system: 'Maintenance Management',
      icon: Database,
      description: 'Comprehensive maintenance workflow automation',
      features: [
        'Automated work order management',
        'Preventive maintenance scheduling',
        'Spare parts & inventory management',
        'Asset history & performance tracking',
        'Mobile workforce enablement'
      ],
      benefits: '40% reduction in equipment downtime',
      timeframe: 'Implementation: 60-90 days'
    },
    {
      id: 'ems',
      system: 'Energy Management',
      icon: Zap,
      description: 'Optimize energy consumption and reduce costs',
      features: [
        'Real-time energy monitoring & analytics',
        'Peak demand management & optimization',
        'Renewable energy integration',
        'Carbon footprint tracking',
        'Automated energy optimization'
      ],
      benefits: '30% reduction in energy costs',
      timeframe: 'Implementation: 120-150 days'
    }
  ];

  const clientTypes = [
    {
      type: 'Large Residential Communities',
      icon: Home,
      examples: [
        'Gated communities & townships',
        'High-rise apartment complexes',
        'Luxury villa developments',
        'Senior living communities'
      ],
      metrics: '5000+ residential units managed',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      type: 'Commercial Properties',
      icon: Building2,
      examples: [
        'Office towers & business parks',
        'Shopping malls & retail centers',
        'Mixed-use developments',
        'Co-working spaces'
      ],
      metrics: '98% tenant satisfaction rate',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      type: 'Institutional Facilities',
      icon: Briefcase,
      examples: [
        'Educational campuses & schools',
        'Healthcare facilities & hospitals',
        'Government buildings',
        'Cultural & sports complexes'
      ],
      metrics: 'CPWD standards compliance',
      color: 'bg-emerald-100 text-emerald-800'
    },
    {
      type: 'Industrial Facilities',
      icon: Factory,
      examples: [
        'Manufacturing plants',
        'Warehouses & logistics centers',
        'Research facilities',
        'Industrial parks'
      ],
      metrics: '99.5% operational uptime',
      color: 'bg-amber-100 text-amber-800'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Assessment & Audit',
      icon: Target,
      description: 'Comprehensive facility audit and needs assessment',
      tasks: ['Site inspection', 'Asset condition assessment', 'Stakeholder interviews', 'Gap analysis'],
      duration: '2-4 weeks'
    },
    {
      step: 2,
      title: 'Strategy & Planning',
      icon: BarChart,
      description: 'Develop customized management strategy',
      tasks: ['Service level agreements', 'Budget planning', 'Implementation roadmap', 'Team structure'],
      duration: '3-4 weeks'
    },
    {
      step: 3,
      title: 'Implementation',
      icon: Settings,
      description: 'Deploy systems, processes, and teams',
      tasks: ['System installation', 'Process documentation', 'Team training', 'Vendor onboarding'],
      duration: '8-12 weeks'
    },
    {
      step: 4,
      title: 'Operations & Optimization',
      icon: TrendingUp,
      description: 'Continuous management and improvement',
      tasks: ['Performance monitoring', 'Regular reporting', 'Cost optimization', 'Continuous improvement'],
      duration: 'Ongoing'
    }
  ];

  const faqs = [
    {
      question: 'What makes your facilities management different?',
      answer: 'Our Dubai experience with Nakheel Properties brings international standards to India. We combine proven global practices with local expertise, delivering 35% average cost savings and 99.7% facility uptime.'
    },
    {
      question: 'How do you handle vendor management?',
      answer: 'We implement a structured vendor management system with performance scorecards, regular audits, and strategic partnerships. This ensures quality, cost-effectiveness, and reliable service delivery.'
    },
    {
      question: 'What technology systems do you implement?',
      answer: 'We deploy Building Management Systems (BMS), Computerized Maintenance Management Systems (CMMS), and Energy Management Systems (EMS) for complete digital transformation and smart facility operations.'
    },
    {
      question: 'How quickly can you start managing our facility?',
      answer: 'After initial assessment, we typically begin operations within 4-6 weeks. The complete implementation including technology systems takes 12-16 weeks for full optimization.'
    },
    {
      question: 'What reporting do you provide?',
      answer: 'Daily operational reports, monthly financial summaries, quarterly performance reviews, and annual strategic reports with complete transparency on all metrics and KPIs.'
    }
  ];

  const testimonials = [
    {
      quote: 'Their Dubai experience transformed how we manage our commercial complex. Operational costs reduced by 32% in the first year.',
      author: 'Commercial Property Owner',
      location: 'Hyderabad'
    },
    {
      quote: 'Professional, transparent, and highly effective. The systems they implemented have given us complete visibility and control.',
      author: 'Residential Community Association',
      location: 'Bangalore'
    },
    {
      quote: 'From day one, their approach was systematic and results-oriented. Our facility uptime is now at 99.8%.',
      author: 'Industrial Facility Manager',
      location: 'Chennai'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center text-white">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-amber-500/30 mb-8">
              <Globe className="w-5 h-5 text-amber-300" />
              <span className="font-semibold text-amber-100">Dubai-Proven Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">World-Class</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-200">
                Facilities & Asset Management
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Bringing Nakheel Properties' Dubai expertise to India. 
              Transform your facility operations with international standards.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-10">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">{animatedStats.properties}+</div>
                <div className="text-blue-200 text-sm">Buildings Managed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">{animatedStats.efficiency}%</div>
                <div className="text-blue-200 text-sm">Cost Reduction</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">{animatedStats.uptime}%</div>
                <div className="text-blue-200 text-sm">Facility Uptime</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="text-3xl font-bold text-white mb-2">{animatedStats.savings}%</div>
                <div className="text-blue-200 text-sm">Average Savings</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-2xl hover:shadow-3xl inline-flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Request Consultation
              </a>
              <a 
                href="tel:+919876543210" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/30 inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Experience Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 md:p-12 shadow-xl border border-amber-200">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Award className="w-4 h-4" />
                  International Credentials
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {nakheelExperience.title}
                </h2>
                
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="font-semibold text-gray-700">{nakheelExperience.location}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-600">{nakheelExperience.duration}</span>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {nakheelExperience.scope}
                </p>
                
                <div className="space-y-3">
                  {nakheelExperience.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={nakheelExperience.image}
                    alt="Dubai skyline"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    <span className="font-bold">129 Buildings + 208 Villas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Management Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              End-to-end solutions that transform facility operations and maximize asset value
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === service.id
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <service.icon className="w-5 h-5" />
                  <span>{service.title.split(' ')[0]}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Service Detail */}
          {services.map((service) => (
            activeTab === service.id && (
              <div key={service.id} className="animate-fadeIn">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-200">
                  <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                          <p className="text-gray-600">{service.description}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-4 h-4 text-blue-600" />
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">
                          <Clock className="w-4 h-4" />
                          Typical Implementation: 8-12 weeks
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h4>
                        <div className="space-y-4">
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="text-2xl font-bold text-blue-600">25-40%</div>
                            <div className="text-sm text-gray-600">Operational Cost Reduction</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="text-2xl font-bold text-emerald-600">99.7%</div>
                            <div className="text-sm text-gray-600">Facility Uptime</div>
                          </div>
                          <div className="bg-white rounded-xl p-4 shadow-sm">
                            <div className="text-2xl font-bold text-amber-600">50%</div>
                            <div className="text-sm text-gray-600">Reduction in Downtime</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio of Managed Properties</h2>
            <p className="text-lg text-gray-600">Extensive experience across diverse property types and scales</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientTypes.map((client, index) => (
              <div 
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-6">
                  <client.icon className="w-7 h-7 text-blue-600" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4">{client.type}</h3>
                
                <ul className="space-y-2 mb-6">
                  {client.examples.map((example, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                      {example}
                    </li>
                  ))}
                </ul>
                
                <div className={`inline-block ${client.color} px-3 py-1 rounded-full text-sm font-semibold`}>
                  {client.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Management Systems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology & Systems</h2>
            <p className="text-lg text-gray-600">Advanced systems for modern facility management</p>
          </div>

          <div className="space-y-6">
            {managementSystems.map((system, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                        <system.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{system.system}</h3>
                        <p className="text-gray-600">{system.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                        <ul className="space-y-2">
                          {system.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 rounded-xl p-5">
                        <h4 className="font-semibold text-gray-900 mb-2">Key Benefit</h4>
                        <div className="text-lg font-bold text-blue-700 mb-2">{system.benefits}</div>
                        <div className="text-sm text-gray-600">{system.timeframe}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Implementation Timeline</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Planning</span>
                          <span>2 weeks</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full w-1/6"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Installation</span>
                          <span>6 weeks</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-indigo-500 rounded-full w-2/6"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Testing</span>
                          <span>2 weeks</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-500 rounded-full w-1/6"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Training</span>
                          <span>2 weeks</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-400 rounded-full w-1/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our 4-Step Management Process</h2>
            <p className="text-lg text-gray-600">Structured approach for successful implementation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 h-full">
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  
                  <div className="mt-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {step.tasks.map((task, idx) => (
                        <div key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          {task}
                        </div>
                      ))}
                    </div>
                    
                    <div className="text-sm font-semibold text-blue-600">{step.duration}</div>
                  </div>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600">Trusted by property owners across India</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-center gap-2 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                  <Award className="w-8 h-8 text-blue-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about our facilities management services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${
                    expandedFAQ === index ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {expandedFAQ === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="bg-gradient-to-r from-blue-800/50 to-indigo-800/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-700/30">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              CPWD Registered Contractor
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Facility Management?
            </h2>
            
            <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
              Get a free facility assessment and discover how our Dubai-proven expertise can optimize your operations and reduce costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+919876543210" 
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl inline-flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now: +91 98765 43210
              </a>
              <div className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold transition-all border border-white/30 inline-flex items-center justify-center gap-3 cursor-pointer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp: +91 98765 43210
              </div>
            </div>
            
            <div className="text-blue-300 text-sm">
              <div className="flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No obligation consultation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}