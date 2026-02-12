import React, { useState } from 'react';
import { Zap, Droplets, Wind, Sun, Battery, Wifi, Lock, Lightbulb, TrendingUp, Shield, CheckCircle, Star, Award, ArrowRight, ChevronDown, ChevronUp, Sparkles, DollarSign, Clock, Users, Home } from 'lucide-react';
import Footer from '../../components/Footer/Footer';

export default function UpgradationService() {
  const [selectedUpgrade, setSelectedUpgrade] = useState('electrical');
  const [openFaq, setOpenFaq] = useState(null);

  const upgradeCategories = {
    electrical: {
      name: 'Electrical Systems',
      icon: Zap,
      color: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50',
      tagline: 'Modern, Safe & Efficient Power',
      upgrades: [
        { name: 'Complete rewiring', benefit: 'Enhanced safety & capacity', roi: 'Prevents electrical fires' },
        { name: 'LED lighting systems', benefit: '70% energy savings', roi: '2-3 years payback' },
        { name: 'MCB/ELCB upgrades', benefit: 'Advanced safety protection', roi: 'Insurance compliance' },
        { name: 'Smart home automation', benefit: 'Remote control & monitoring', roi: 'Increased property value' },
        { name: 'Dedicated circuits', benefit: 'For heavy appliances', roi: 'No more tripping' },
        { name: 'Energy meters', benefit: 'Track consumption', roi: 'Optimize usage' }
      ],
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80'
    },
    plumbing: {
      name: 'Plumbing & Water',
      icon: Droplets,
      color: 'from-blue-400 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      tagline: 'Clean Water, No Leaks',
      upgrades: [
        { name: 'CPVC/PPR pipe replacement', benefit: 'No corrosion, longer life', roi: '25+ years durability' },
        { name: 'Water pressure boosters', benefit: 'Consistent flow', roi: 'Comfort improvement' },
        { name: 'Hot water systems', benefit: 'Solar/electric geysers', roi: 'Energy savings' },
        { name: 'Water filtration', benefit: 'Pure drinking water', roi: 'Health benefits' },
        { name: 'Leak detection systems', benefit: 'Prevent water damage', roi: 'Avoid costly repairs' },
        { name: 'Drainage upgrades', benefit: 'Better waste management', roi: 'No blockages' }
      ],
      image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80'
    },
    hvac: {
      name: 'HVAC & Climate',
      icon: Wind,
      color: 'from-green-400 to-teal-500',
      bgGradient: 'from-green-50 to-teal-50',
      tagline: 'Perfect Temperature, All Year',
      upgrades: [
        { name: 'Central AC installation', benefit: 'Uniform cooling', roi: 'Premium comfort' },
        { name: 'Inverter AC upgrades', benefit: '40% less electricity', roi: '3-4 years payback' },
        { name: 'Ventilation systems', benefit: 'Fresh air circulation', roi: 'Health & comfort' },
        { name: 'Smart thermostats', benefit: 'Automated control', roi: '15% energy savings' },
        { name: 'Ceiling fans upgrade', benefit: 'BLDC energy efficient', roi: '60% less power' },
        { name: 'Exhaust systems', benefit: 'Kitchen & bathroom', roi: 'Odor-free home' }
      ],
      image: 'https://images.unsplash.com/photo-1631545806609-47c7c83da68e?w=800&q=80'
    },
    smart: {
      name: 'Smart Home Tech',
      icon: Wifi,
      color: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      tagline: 'Your Home, Connected',
      upgrades: [
        { name: 'Smart lighting', benefit: 'Voice & app control', roi: 'Convenience & savings' },
        { name: 'Video doorbells', benefit: 'See visitors remotely', roi: 'Enhanced security' },
        { name: 'Smart locks', benefit: 'Keyless entry', roi: 'No lost keys' },
        { name: 'CCTV systems', benefit: '24/7 monitoring', roi: 'Peace of mind' },
        { name: 'Home theater', benefit: 'Entertainment upgrade', roi: 'Lifestyle enhancement' },
        { name: 'Network infrastructure', benefit: 'WiFi in every room', roi: 'Seamless connectivity' }
      ],
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80'
    },
    energy: {
      name: 'Energy Efficiency',
      icon: Sun,
      color: 'from-amber-400 to-red-500',
      bgGradient: 'from-amber-50 to-red-50',
      tagline: 'Save Money, Save Planet',
      upgrades: [
        { name: 'Solar panel installation', benefit: '90% bill reduction', roi: '5-7 years payback' },
        { name: 'Solar water heaters', benefit: 'Free hot water', roi: '3-4 years payback' },
        { name: 'Insulation upgrades', benefit: 'Thermal comfort', roi: '30% AC savings' },
        { name: 'Energy-efficient windows', benefit: 'Reduced heat gain', roi: 'Lower cooling costs' },
        { name: 'Rainwater harvesting', benefit: 'Water independence', roi: 'Groundwater recharge' },
        { name: 'Power backup systems', benefit: 'Uninterrupted supply', roi: 'No downtime' }
      ],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80'
    },
    structural: {
      name: 'Structural Upgrades',
      icon: Home,
      color: 'from-slate-400 to-gray-600',
      bgGradient: 'from-slate-50 to-gray-50',
      tagline: 'Strong Foundation, Lasting Value',
      upgrades: [
        { name: 'Waterproofing solutions', benefit: 'Stop leaks permanently', roi: 'Avoid major repairs' },
        { name: 'Roof replacement', benefit: 'New shingles/tiles', roi: '20+ years protection' },
        { name: 'Flooring upgrades', benefit: 'Tiles, wood, marble', roi: 'Aesthetic & durability' },
        { name: 'Window replacements', benefit: 'UPVC/Aluminum', roi: 'Energy efficiency' },
        { name: 'Balcony repairs', benefit: 'Safety & aesthetics', roi: 'Structural integrity' },
        { name: 'False ceiling', benefit: 'Modern interiors', roi: 'Hide utilities' }
      ],
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&q=80'
    }
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Property Value',
      stat: '15-25%',
      description: 'Modern upgrades significantly boost resale value and rental potential'
    },
    {
      icon: DollarSign,
      title: 'Lower Utility Bills',
      stat: '30-60%',
      description: 'Energy-efficient upgrades reduce monthly electricity and water costs'
    },
    {
      icon: Shield,
      title: 'Enhanced Safety',
      stat: '100%',
      description: 'Updated systems meet current safety standards and building codes'
    },
    {
      icon: Sparkles,
      title: 'Improved Comfort',
      stat: 'Priceless',
      description: 'Modern amenities make daily living more convenient and enjoyable'
    }
  ];

  const beforeAfter = [
    {
      upgrade: 'Complete Electrical Upgrade',
      before: 'Old wiring, frequent trips, no safety features',
      after: 'New circuits, MCBs, LED lights, smart switches',
      investment: '₹2.5 Lakhs',
      savings: '₹3,500/month',
      payback: '6 years',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80'
    },
    {
      upgrade: 'Solar Power System',
      before: '₹8,000/month electricity bill',
      after: '₹800/month bill (90% reduction)',
      investment: '₹4.5 Lakhs',
      savings: '₹7,200/month',
      payback: '5.2 years',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80'
    },
    {
      upgrade: 'HVAC Modernization',
      before: 'Old AC units, high power consumption',
      after: 'Inverter ACs, smart thermostats',
      investment: '₹3.2 Lakhs',
      savings: '₹2,800/month',
      payback: '9.5 years',
      image: 'https://images.unsplash.com/photo-1631548340217-0c4c05b7e8ff?w=800&q=80'
    }
  ];

  const process = [
    { step: 1, title: 'Assessment', description: 'Evaluate current systems', icon: Shield },
    { step: 2, title: 'Recommendation', description: 'Suggest best upgrades', icon: Lightbulb },
    { step: 3, title: 'ROI Analysis', description: 'Show cost & savings', icon: DollarSign },
    { step: 4, title: 'Installation', description: 'Professional execution', icon: Zap },
    { step: 5, title: 'Testing', description: 'Ensure perfect operation', icon: CheckCircle }
  ];

  const faqs = [
    {
      question: 'Which upgrades provide the best return on investment?',
      answer: 'Solar panel installation offers the fastest payback (5-7 years) with 90% bill reduction. LED lighting upgrades pay back in 2-3 years. Energy-efficient HVAC systems save 30-40% on cooling costs. Electrical rewiring, while not directly generating savings, prevents costly repairs and insurance issues. We provide detailed ROI analysis for your specific situation.'
    },
    {
      question: 'Can upgrades be done without major disruption?',
      answer: 'Yes, most upgrades can be phased to minimize disruption. Electrical work is done room-by-room, HVAC upgrades during cooler months, and plumbing in stages. Smart home tech requires minimal work (usually 2-3 days). We plan around your schedule and ensure daily cleanup. For occupied homes, we typically work in 4-6 hour blocks.'
    },
    {
      question: 'Do I need to upgrade everything at once?',
      answer: 'No, we recommend prioritizing based on: (1) Safety issues (electrical, structural), (2) Cost-saving potential (solar, LED, HVAC), (3) Comfort improvements (smart home, climate control). We create a phased upgrade plan matching your budget. Many clients spread upgrades over 1-2 years, starting with highest-impact items.'
    },
    {
      question: 'What warranty do you provide on upgrades?',
      answer: 'Installation workmanship: 2 years. Electrical components: 1-2 years. Solar panels: 25 years performance, 10 years product. Inverter ACs: 1-5 years (manufacturer). Plumbing pipes: 10+ years (material warranty). Smart devices: 1-2 years. We also provide post-installation support and annual maintenance contracts for ongoing peace of mind.'
    },
    {
      question: 'Are there government subsidies for upgrades?',
      answer: 'Yes, for solar installations: Central Government subsidy up to 40% for systems under 3kW, 20% for 3-10kW. Some states offer additional benefits. Energy-efficient AC purchases may qualify for tax benefits. Rainwater harvesting may be mandatory (subsidized) in certain areas. We help with subsidy applications and documentation.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Particles */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-75"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/20">
              <Sparkles size={20} className="text-yellow-300" />
              Future-Ready Home Solutions
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              Upgradation &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                Modernization
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your aging property into a modern, efficient, and smart home. Save money while increasing value.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <a href="#upgrades" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-12 py-6 rounded-full font-bold text-xl transition-all shadow-2xl inline-flex items-center gap-3 group">
                Explore Upgrades
                <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#roi" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-12 py-6 rounded-full font-bold text-xl transition-all border-2 border-white/30">
                See ROI Calculator
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">{benefit.stat}</div>
                  <div className="text-sm text-purple-200">{benefit.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Upgrade Section */}
      <section className="py-24 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Why Upgrade Your Home?</h2>
            <p className="text-xl text-gray-600">Smart investments that pay for themselves</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:shadow-2xl hover:scale-105 transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <benefit.icon size={32} className="text-white" />
                </div>
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 mb-3">
                  {benefit.stat}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade Categories - Interactive */}
      <section id="upgrades" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Choose Your Upgrade Path</h2>
            <p className="text-xl text-gray-600">Click to explore each upgrade category</p>
          </div>

          {/* Category Selector */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {Object.entries(upgradeCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedUpgrade(key)}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl font-bold transition-all ${
                  selectedUpgrade === key
                    ? `bg-gradient-to-br ${category.color} text-white shadow-2xl scale-110`
                    : 'bg-gray-50 text-gray-700 hover:shadow-lg border-2 border-gray-200 hover:border-gray-300'
                }`}
              >
                <category.icon size={32} />
                <span className="text-sm text-center">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Selected Category Details */}
          <div className={`bg-gradient-to-br ${upgradeCategories[selectedUpgrade].bgGradient} rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200`}>
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${upgradeCategories[selectedUpgrade].color} text-white px-6 py-3 rounded-full font-bold mb-6 shadow-lg`}>
                  {React.createElement(upgradeCategories[selectedUpgrade].icon, { size: 28 })}
                  {upgradeCategories[selectedUpgrade].name}
                </div>
                
                <h3 className="text-4xl font-bold text-gray-900 mb-4">
                  {upgradeCategories[selectedUpgrade].tagline}
                </h3>
                
                <p className="text-xl text-gray-600 mb-8">
                  Modernize your {upgradeCategories[selectedUpgrade].name.toLowerCase()} with cutting-edge solutions that improve efficiency, safety, and comfort.
                </p>

                <div className="space-y-4">
                  {upgradeCategories[selectedUpgrade].upgrades.map((upgrade, idx) => (
                    <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <CheckCircle size={24} className={`flex-shrink-0 mt-1 bg-gradient-to-r ${upgradeCategories[selectedUpgrade].color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
                        <div>
                          <div className="font-bold text-gray-900 mb-1">{upgrade.name}</div>
                          <div className="text-sm text-gray-600">{upgrade.benefit}</div>
                          <div className="text-xs text-green-600 font-semibold mt-1">ROI: {upgrade.roi}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <a href="#quote" className={`mt-8 inline-flex items-center gap-2 bg-gradient-to-r ${upgradeCategories[selectedUpgrade].color} text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all`}>
                  Get Upgrade Quote
                  <ArrowRight size={20} />
                </a>
              </div>

              <div className="relative h-full min-h-[600px]">
                <img 
                  src={upgradeCategories[selectedUpgrade].image}
                  alt={upgradeCategories[selectedUpgrade].name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After ROI Showcase */}
      <section id="roi" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Real ROI Examples</h2>
            <p className="text-xl text-gray-300">See how upgrades pay for themselves</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {beforeAfter.map((example, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img src={example.image} alt={example.upgrade} className="w-full h-48 object-cover" />
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">{example.upgrade}</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-20 h-20 bg-red-500/20 rounded-lg flex items-center justify-center border border-red-500/30 flex-shrink-0">
                        <span className="text-red-400 font-bold text-sm">BEFORE</span>
                      </div>
                      <p className="text-gray-300 text-sm pt-2">{example.before}</p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-20 h-20 bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30 flex-shrink-0">
                        <span className="text-green-400 font-bold text-sm">AFTER</span>
                      </div>
                      <p className="text-gray-300 text-sm pt-2">{example.after}</p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">Investment:</span>
                      <span className="text-yellow-300 font-bold">{example.investment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">Monthly Savings:</span>
                      <span className="text-green-400 font-bold">{example.savings}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/20 pt-2">
                      <span className="text-white font-semibold">Payback Period:</span>
                      <span className="text-orange-400 font-bold text-lg">{example.payback}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Upgradation Process</h2>
            <p className="text-xl text-gray-600">From assessment to installation - seamless execution</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-500"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-200 hover:border-yellow-400 hover:shadow-2xl transition-all relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto shadow-lg">
                      {step.step}
                    </div>
                    <div className="mb-4">
                      <step.icon size={40} className="text-gray-900 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about upgrades</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 pr-4 text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp size={28} className="text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={28} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 bg-gradient-to-br from-yellow-50 to-orange-50">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite`
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Ready to Upgrade Your Home?
          </h2>
          <p className="text-2xl mb-12 text-white/90">
            Start saving money and increase your property value today
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="tel:+919876543210"
              className="bg-white text-orange-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl inline-flex items-center gap-3"
            >
              <Zap size={28} />
              <div className="text-left">
                <div className="text-sm opacity-80">Call Now</div>
                <div>+91 9515 88 1444</div>
              </div>
            </a>
            
            <a 
              href="https://wa.me/919876543210"
              className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-full font-bold text-xl transition-all shadow-2xl inline-flex items-center gap-3"
            >
              <Battery size={28} />
              Get Free Assessment
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-white mb-2">₹7K+</div>
              <div className="text-white/80 text-sm">Avg. Monthly Savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5-7</div>
              <div className="text-white/80 text-sm">Years Payback</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">25%</div>
              <div className="text-white/80 text-sm">Value Increase</div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}