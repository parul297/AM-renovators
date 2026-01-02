import React from 'react';
import { Award, Globe, Shield, Users, Building2, CheckCircle, MapPin, Briefcase, GraduationCap, Star } from 'lucide-react';

export default function AboutUs() {
  const timeline = [
    {
      year: '1998-2010',
      location: 'India',
      role: 'Early Career & Foundation',
      company: 'IVR Constructions Limited',
      project: 'Begumpet Airport, Hyderabad - Model Airport Project',
      description: 'Contributed to construction of Domestic and International Terminal Buildings on behalf of Airports Authority of India',
      icon: Building2
    },
    {
      year: '2010-2015',
      location: 'Middle East',
      role: 'International Exposure',
      company: 'Amana Steel Buildings LLC & Core Construction Company',
      project: 'Saudi Arabia & Qatar Projects',
      description: 'Gained comprehensive exposure to diverse construction environments and international quality standards',
      icon: Globe
    },
    {
      year: '2015-2020',
      location: 'Dubai, UAE',
      role: 'Facilities Management Excellence',
      company: 'Nakheel Properties',
      project: 'The Gardens & Garden View Villas',
      description: 'Managed 129 G+2 residential buildings and 208+ duplex villas. Received Letter of Appreciation from Director for outstanding service',
      icon: Award,
      highlight: true
    },
    {
      year: '2020-Present',
      location: 'Hyderabad, India',
      role: 'CPWD Contractor & Founder',
      company: 'AM Renovators & Services',
      project: 'Hyderabad Airport AMC & Multiple Projects',
      description: 'CPWD Class III contractor serving government institutions, NRI clients, and corporate facilities management',
      icon: Star
    }
  ];

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
                    <div className="text-sm text-orange-600 font-semibold">Founder & Proprietor</div>
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
                  I am Ahmed Mohiuddin, a Graduate Civil Engineer with over <strong className="text-blue-900">27 years of hands-on professional experience</strong> across India and the Middle East, including Saudi Arabia, Qatar, and the United Arab Emirates.
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

      {/* Professional Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A career spanning two decades across three continents, delivering excellence at every milestone
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-900 via-orange-500 to-blue-900"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative grid lg:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
                    <div className={`bg-white rounded-xl shadow-lg p-6 border-2 ${item.highlight ? 'border-orange-500' : 'border-gray-200'} hover:shadow-xl transition-shadow`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.highlight ? 'bg-gradient-to-br from-orange-500 to-orange-600' : 'bg-gradient-to-br from-blue-900 to-blue-800'}`}>
                          <item.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-orange-600">{item.year}</div>
                          <div className="text-xs text-gray-600 flex items-center gap-1">
                            <MapPin size={12} />
                            {item.location}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.role}</h3>
                      <div className="text-blue-900 font-semibold mb-2">{item.company}</div>
                      <div className="text-sm text-gray-600 font-medium mb-2">{item.project}</div>
                      <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                      
                      {item.highlight && (
                        <div className="mt-4 inline-flex items-center gap-2 bg-orange-50 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold">
                          <Award size={14} />
                          Letter of Appreciation Received
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-900 rounded-full top-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dubai Experience Highlight */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Globe size={16} />
                International Experience
              </div>
              <h2 className="text-4xl font-bold mb-6">
                Facilities Management Excellence in Dubai
              </h2>
              <p className="text-xl text-orange-50 mb-8 leading-relaxed">
                A defining milestone in my career was my tenure with <strong>Nakheel Properties</strong>, one of Dubai's most respected master developers.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold mb-1">129</div>
                  <div className="text-orange-50">G+2 Residential Buildings - "The Gardens"</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold mb-1">208+</div>
                  <div className="text-orange-50">Duplex Villas - "Garden View Villas"</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-orange-50">Asset Management & Resident Service Delivery</div>
                </div>
              </div>
              
              <div className="mt-8 bg-white/20 backdrop-blur-sm rounded-lg p-6 border border-white/30">
                <p className="text-sm italic">
                  "This experience has been particularly valuable in addressing the needs of NRIs seeking reliable, professional on-ground management of their properties in India."
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80" 
                alt="Dubai skyline" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CPWD & Government Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Shield size={16} />
              Government Credentials
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Public Sector & Institutional Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CPWD-registered contractor with proven track record in government and institutional projects
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center">
                  <Award size={32} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">CPWD Registered</div>
                  <div className="text-blue-900 font-semibold">Class III Contractor</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Registered with the Central Public Works Department (CPWD), Government of India. Initially under Class IV Category, promoted to <strong>Class III Category</strong> upon successful execution of qualifying projects.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Key Government Projects</h3>
              <ul className="space-y-4">
                {[
                  'Annual Maintenance Contract (AMC) - Hyderabad International Airport Terminal Buildings & Operational Areas',
                  'Annual Maintenance Contract (AMC) - Hyderabad International Airport Residential Colonies',
                  'Renovation and upgradation works for Government Institutions under CPWD',
                  'Indoor Badminton Court construction - Agricultural University, Hyderabad'
                ].map((project, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="flex-shrink-0 mt-1 text-orange-400" />
                    <span className="text-blue-50">{project}</span>
                  </li>
                ))}
              </ul>
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

      {/* NRI Partnership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  A Trusted Partner for NRI Clients
                </h2>
                <p className="text-orange-50 mb-6 leading-relaxed">
                  Having worked internationally for a significant part of my career, I fully understand the challenges faced by NRIs managing properties and projects from overseas—distance, timelines, quality assurance, regulatory compliance, and the need for absolute transparency.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Single-point accountability and coordination',
                    'Clear scope definition and cost transparency',
                    'Regular progress updates through photographs and detailed reports',
                    'Ethical procurement and disciplined execution',
                    'Reliable on-ground representation and supervision'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={20} className="flex-shrink-0 mt-1 text-white" />
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a href="#nri-clients" className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors shadow-lg">
                  Learn More About NRI Services
                  <Briefcase size={20} />
                </a>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" 
                  alt="Modern home interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
        </div>
      </section>
    </div>
  );
}