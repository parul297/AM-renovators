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

  // const processSteps = [
  //   {
  //     phase: 'Planning & Design',
  //     duration: '2-4 weeks',
  //     icon: FileText,
  //     activities: [
  //       'Initial consultation & requirement gathering',
  //       'Site survey & soil testing',
  //       'Architectural design & floor plans',
  //       'Structural engineering drawings',
  //       'Cost estimation & budget finalization',
  //       'Approval drawings for authorities'
  //     ]
  //   },
  //   {
  //     phase: 'Approvals & Documentation',
  //     duration: '3-6 weeks',
  //     icon: Shield,
  //     activities: [
  //       'GHMC/Panchayat building permissions',
  //       'Structural stability certificate',
  //       'Fire NOC (if applicable)',
  //       'Electricity & water connections',
  //       'Legal documentation verification'
  //     ]
  //   },
  //   {
  //     phase: 'Foundation & Structure',
  //     duration: '3-4 months',
  //     icon: Layers,
  //     activities: [
  //       'Site clearing & excavation',
  //       'Foundation laying (PCC, RCC)',
  //       'Column & beam construction',
  //       'Slab work (floor-by-floor)',
  //       'Brick/block masonry work',
  //       'Regular quality inspections'
  //     ]
  //   },
  //   {
  //     phase: 'Finishing & Handover',
  //     duration: '2-3 months',
  //     icon: Home,
  //     activities: [
  //       'Plastering & painting',
  //       'Flooring & tile work',
  //       'Electrical & plumbing installations',
  //       'Door, window & fixture fitting',
  //       'Final inspection & snag list',
  //       'Handover with documentation'
  //     ]
  //   }
  // ];

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
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
    },
    {
      title: 'G+2 Residential Building',
      location: 'Miyapur, Hyderabad',
      area: '6,000 sq ft',
      duration: '10 months',
      budget: '₹85-95 Lakhs',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    },
    {
      title: 'Luxury Farmhouse',
      location: 'Shamshabad, Hyderabad',
      area: '4,500 sq ft',
      duration: '9 months',
      budget: '₹75-85 Lakhs',
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80'
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Building2 size={16} />
                Construction Services
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Construction &<br />
                <span className="text-orange-400">New Developments</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                From foundation to finishing, we build homes and structures that stand the test of time. Quality construction backed by international experience.
              </p>
              {/* <div className="flex flex-wrap gap-4">
                <a href="#quote" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg inline-flex items-center gap-2">
                  Get Construction Quote
                  <ArrowRight size={20} />
                </a>
                <a href="#process" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all border border-white/20">
                  See Our Process
                </a>
              </div> */}
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                alt="Construction site" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-blue-900">150+</div>
                <div className="text-sm text-gray-600">Successful Projects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-orange-100 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Build</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual homes to multi-storied buildings, we handle diverse construction projects with expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {buildingTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`h-3 bg-gradient-to-r ${type.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-6`}>
                    <type.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Process */}
      {/* <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Construction Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic, transparent approach from design to handover
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border-l-4 border-blue-900 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-6 md:w-1/3">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
                      <step.icon size={32} className="text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-orange-600 font-semibold mb-1">Phase {index + 1}</div>
                      <h3 className="text-xl font-bold text-gray-900">{step.phase}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                        <Clock size={14} />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <TrendingUp size={32} className="text-blue-900 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Total Timeline: 8-10 Months</h3>
                <p className="text-gray-700">
                  For a typical 2,000-2,500 sq ft independent house. Actual timeline depends on design complexity, approval processing, weather conditions, and chosen specifications. We provide detailed project schedules during planning phase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Quality Standards */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Quality Standards We Follow</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              International construction practices ensure durability and longevity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-colors">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <standard.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{standard.title}</h3>
                <p className="text-blue-100 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              'IS Code compliant designs',
              'Branded materials only',
              'Third-party testing',
              'Regular inspections',
              'Structural warranty',
              'Photo documentation'
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Construction Projects</h2>
            <p className="text-xl text-gray-600">Real projects with actual timelines and budgets</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectExamples.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
                    <Ruler size={14} />
                    {project.location}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-xs text-gray-500">Built-up Area</div>
                      <div className="font-semibold text-gray-900">{project.area}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Duration</div>
                      <div className="font-semibold text-gray-900">{project.duration}</div>
                    </div>
                  </div>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                    <div className="text-xs text-orange-700 mb-1">Project Budget</div>
                    <div className="text-lg font-bold text-orange-600">{project.budget}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#projects" className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
              View Complete Portfolio
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our construction services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp size={24} className="text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown size={24} className="text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Dream Home?</h2>
          <p className="text-xl text-orange-50 mb-10">
            Get a detailed construction quote with transparent pricing and realistic timelines
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#quote" className="bg-white text-orange-600 px-10 py-5 rounded-lg font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg inline-flex items-center gap-2">
              <Hammer size={24} />
              Get Construction Quote
            </a>
            <a href="tel:+919876543210" className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-5 rounded-lg font-semibold text-lg transition-colors shadow-lg inline-flex items-center gap-2">
              <Users size={24} />
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}