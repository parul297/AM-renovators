import React, { useState } from 'react';
import { Building2, Home, Church, TreePine, Layers, CheckCircle, Clock, Shield, Award, Users, FileText, Camera, Ruler, Hammer, TrendingUp, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import Footer from '../../components/Footer/Footer';

export default function ConstructionService() {
  const [openFaq, setOpenFaq] = useState(null);

  const buildingTypes = [
    {
      icon: Home,
      title: 'Independent Houses & Villas',
      description: 'Custom-designed residential homes built to your specifications',
      features: ['Custom floor plans', 'Premium materials', 'Modern amenities', 'Vastu compliance'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building2,
      title: 'Multi-Storied Buildings',
      description: 'G+2, G+3, and higher residential and mixed-use developments',
      features: ['Structural engineering', 'Elevator provisions', 'Fire safety compliance', 'Parking facilities'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TreePine,
      title: 'Farmhouses & Premium Developments',
      description: 'Luxury farmhouse constructions with modern facilities',
      features: ['Landscape integration', 'Sustainable design', 'Private amenities', 'Gated security'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Church,
      title: 'Masjid Constructions',
      description: 'Purpose-built religious structures with traditional aesthetics',
      features: ['Islamic architecture', 'Prayer hall design', 'Ablution facilities', 'Community spaces'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const qualityStandards = [
    {
      icon: Award,
      title: 'International Standards',
      description: 'Dubai construction practices applied locally'
    },
    {
      icon: Shield,
      title: 'Material Quality',
      description: 'Only branded, certified materials used'
    },
    {
      icon: Users,
      title: 'Skilled Workforce',
      description: 'Experienced masons, engineers, and supervisors'
    },
    {
      icon: Camera,
      title: 'Photo Documentation',
      description: 'Weekly progress photos for transparency'
    }
  ];

  const projectExamples = [
    {
      title: '3BHK Independent Villa',
      location: 'Kompally, Hyderabad',
      area: '2,400 sq ft',
      duration: '7 months',
      budget: '₹45-50 Lakhs',
      image: 'https://assets.architecturaldigest.in/photos/647f4419dfce01034953080e/16:9/w_1280,c_limit/Untitled%20design%20(2).png?mbid=social_retweet'
    },
    {
      title: 'G+2 Residential Building',
      location: 'Miyapur, Hyderabad',
      area: '6,000 sq ft',
      duration: '10 months',
      budget: '₹85-95 Lakhs',
      image: 'https://images.adsttc.com/media/images/637c/cc4e/db20/0f35/7400/b765/medium_jpg/housing-apartment-at-badade-nagar-studio-frozen-music_1.jpg?1669123187'
    },
    {
      title: 'Luxury Farmhouse',
      location: 'Shamshabad, Hyderabad',
      area: '4,500 sq ft',
      duration: '9 months',
      budget: '₹75-85 Lakhs',
      image: 'https://i.pinimg.com/originals/00/64/1e/00641e2b6ea1525753768e4af4ef8d48.jpg'
    }
  ];

  const faqs = [
    {
      question: 'What is the typical timeline for independent house construction?',
      answer: 'For a standard 2,000-2,500 sq ft independent house, the complete construction takes approximately 8-10 months from design to handover. This includes 2-3 weeks for planning, 4-6 weeks for approvals, 3-4 months for structure, and 2-3 months for finishing work. Timeline can vary based on design complexity, weather, and approval processing time.'
    },
    {
      question: 'Do you provide architectural and structural design services?',
      answer: 'Yes, we provide complete design services as part of our construction package. Our team works with licensed architects and structural engineers to create designs that meet your requirements, comply with local regulations, and ensure structural safety. We provide 2D floor plans, 3D visualizations, and all necessary engineering drawings.'
    },
    {
      question: 'How is the construction cost calculated?',
      answer: 'Construction cost is calculated based on built-up area (sq ft), specifications chosen (basic/standard/premium), structural complexity, and current material rates. We provide a detailed, itemized quotation covering civil work, electrical, plumbing, and finishes. Our quotes are transparent with no hidden charges, and we work within your budget to optimize specifications.'
    },
    {
      question: 'What approvals are required and do you handle them?',
      answer: 'For construction, you need building plan approval from GHMC (or local Panchayat), structural stability certificate, and in some cases fire NOC. Yes, we handle the entire approval process on your behalf, including documentation preparation, submission, and follow-up. Our experience ensures faster approval processing.'
    },
    {
      question: 'Can I make changes during construction?',
      answer: 'Minor changes can be accommodated during construction, though it\'s best to finalize design before starting. Structural changes are difficult and costly once foundation/columns are done. For finishing aspects (tiles, paint colors, fixtures), changes can be made until procurement. We document all change requests and provide cost/timeline implications before proceeding.'
    },
    {
      question: 'How do you ensure quality during construction?',
      answer: 'We ensure quality through: (1) Using only branded, certified materials with bills, (2) Experienced workforce with skilled masons and engineers, (3) Regular site supervision by our team, (4) Stage-wise inspections (foundation, structure, finishing), (5) Weekly photo documentation for transparency, (6) Third-party testing for critical elements like soil, concrete, and (7) Final quality inspection before handover.'
    },
    {
      question: 'What about warranty after construction completion?',
      answer: 'We provide a comprehensive warranty covering structural defects (foundation, columns, slabs) for 5 years, waterproofing for 3 years, and other finishing work for 1 year. We maintain a defect liability period of 6 months where any issues are rectified at no charge. Detailed warranty terms are provided in the construction agreement.'
    },
    {
      question: 'Can you work with my own architect/designer?',
      answer: 'Absolutely! We are happy to work with your chosen architect or designer. We can work from their drawings and specifications. Our role would be to provide construction execution, material procurement, quality control, and project management. We coordinate closely with external consultants to ensure design intent is properly translated into reality.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Homes Built' },
    { number: '27+', label: 'Years Experience' },
    { number: '100%', label: 'On-Time Delivery' },
    { number: '₹45L+', label: 'Average Project Size' }
  ];

  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-32 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-orange-500/30 animate-pulse">
                <Building2 size={18} />
                Construction Services
              </div>
              <h1 className="text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Construction &<br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
                  New Developments
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed max-w-xl">
                From foundation to finishing, we build homes and structures that stand the test of time. Quality construction backed by international experience.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                alt="Construction site" 
                className="relative rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* <div className="absolute -bottom-8 -left-8 bg-white text-gray-900 p-8 rounded-2xl shadow-2xl border-4 border-orange-500 transform hover:scale-105 transition-transform">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">150+</div>
                <div className="text-sm font-semibold text-gray-600 mt-1">Successful Projects</div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      {/* <section className="py-8 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 rounded-3xl shadow-2xl p-10 border-4 border-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-5xl font-black text-white mb-3 drop-shadow-lg">{stat.number}</div>
                  <div className="text-orange-50 font-semibold text-sm tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* What We Build */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            {/* <div className="inline-block bg-blue-100 text-blue-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              OUR EXPERTISE
            </div> */}
            <h2 className="text-5xl font-black text-gray-900 mb-6">What We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From individual homes to multi-storied buildings, we handle diverse construction projects with expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {buildingTypes.map((type, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-transparent overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${type.color}`}></div>
                <div className="p-10">
                  <div className={`w-20 h-20 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <type.icon size={36} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{type.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed">{type.description}</p>
                  <div className="grid grid-cols-2 gap-4">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-y-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
              QUALITY ASSURANCE
            </div>
            <h2 className="text-5xl font-black mb-6">Quality Standards We Follow</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              International construction practices ensure durability and longevity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {qualityStandards.map((standard, index) => (
              <div 
                key={index} 
                className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 border-2 border-white/20 text-center hover:bg-white/20 hover:border-orange-500 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <standard.icon size={36} className="text-white" />
                </div>
                <h3 className="text-xl font-black mb-4">{standard.title}</h3>
                <p className="text-blue-100 leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>

          {/* <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'IS Code compliant designs',
              'Branded materials only',
              'Third-party testing',
              'Regular inspections',
              'Structural warranty',
              'Photo documentation'
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-4 bg-white/10 backdrop-blur-xl rounded-xl p-5 border border-white/20 hover:bg-white/20 hover:border-green-400 transition-all duration-300 transform hover:scale-105"
              >
                <CheckCircle size={24} className="text-green-400 flex-shrink-0" />
                <span className="text-white font-semibold">{item}</span>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Project Examples */}
      {/* <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
        
            <h2 className="text-5xl font-black text-gray-900 mb-6">Recent Construction Projects</h2>
            <p className="text-xl text-gray-600">Real projects with actual timelines and budgets</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {projectExamples.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-orange-500 transform hover:-translate-y-3"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-6 flex items-center gap-2 font-medium">
                    <Ruler size={16} className="text-orange-500" />
                    {project.location}
                  </p>
               
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 border-2 border-orange-300 rounded-xl p-5 shadow-sm">
                    <div className="text-xs text-orange-700 font-bold mb-2 tracking-wide">PROJECT BUDGET</div>
                    <div className="text-2xl font-black bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">{project.budget}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      {/* <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-green-100 text-green-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
              FAQ
            </div>
            <h2 className="text-5xl font-black text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our construction services</p>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-r from-gray-50 to-white rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'border-orange-500 shadow-xl' : 'border-gray-200 hover:border-gray-300 shadow-md'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-7 text-left hover:bg-gradient-to-r hover:from-orange-50 hover:to-white transition-colors"
                >
                  <span className="font-black text-gray-900 pr-6 text-lg">{faq.question}</span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFaq === index ? 'bg-orange-500 rotate-180' : 'bg-gray-200'
                  }`}>
                    {openFaq === index ? (
                      <ChevronUp size={24} className="text-white" />
                    ) : (
                      <ChevronDown size={24} className="text-gray-600" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-7 pb-7 animate-fadeIn">
                    <div className="pt-4 border-t-2 border-orange-100">
                      <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
  <section className="relative py-28 md:py-32 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white overflow-hidden">
  {/* Animated background orbs */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-1/2 -right-20 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    <div className="absolute -bottom-32 left-1/3 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
    
    {/* Subtle grid pattern - using CSS instead of SVG data URL to avoid parsing issues */}
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px',
      }}
    ></div>
  </div>

  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    {/* Enhanced heading with better typography */}
    <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
      <span className="block">Ready to experience</span>
      <span className="block mt-2 bg-gradient-to-r from-white via-orange-50 to-white bg-clip-text text-transparent">
        the Guarantee?
      </span>
    </h2>
    
    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
      Let's build with <span className="font-bold text-white">trust</span>, 
      <span className="font-bold text-white"> reliability</span>, and 
      <span className="font-bold text-white"> quality workmanship</span> you can count on.
    </p>

    {/* Refined button group */}
    <div className="flex flex-wrap justify-center gap-5">
      <a 
        href="tel:+919876543210" 
        className="group relative inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-black/20 border border-white/10 overflow-hidden"
      >
        {/* Button shimmer effect */}
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
        
        <Users size={24} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
        <span className="relative z-10">Call or WhatsApp</span>
      </a>
    </div>

    {/* Optional subtle trust badge */}
    <div className="mt-10 flex items-center justify-center gap-2 text-white/70 text-sm">
      <span className="flex items-center gap-1">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        Free consultation
      </span>
      <span className="w-1 h-1 bg-white/30 rounded-full"></span>
      <span>No obligation quote</span>
    </div>
  </div>
</section>
      
      <Footer/>
    </div>
  );
}