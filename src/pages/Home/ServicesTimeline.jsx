// import React, { useState, useEffect, useRef } from 'react';
// import { Building2, Wrench, Zap, Award, ArrowRight, CheckCircle } from 'lucide-react';
// import './ServicesTimeline.css';

// export default function ServicesTimeline() {
//     const [activeService, setActiveService] = useState(0);
//     const [isVisible, setIsVisible] = useState(false);
//     const containerRef = useRef(null);

//     const services = [
//         {
//             id: 0,
//             icon: Building2,
//             title: 'Construction',
//             desc: 'Independent houses, villas, and multi-storied buildings',
//             color: 'from-blue-600 to-cyan-500',
//             bgColor: 'bg-blue-50',
//             details: ['Foundation', 'Structural Design', 'Quality Materials'],
//             fullDesc: 'Precision construction with international standards.'
//         },
//         {
//             id: 1,
//             icon: Award,
//             title: 'Renovation',
//             desc: 'Transform spaces with modern upgrades',
//             color: 'from-orange-500 to-amber-500',
//             bgColor: 'bg-orange-50',
//             details: ['Space Optimization', 'Modern Design', 'Complete Makeover'],
//             fullDesc: 'Complete renovations with modern aesthetics.'
//         },
//         {
//             id: 2,
//             icon: Zap,
//             title: 'Upgradation',
//             desc: 'Latest electrical, plumbing, and HVAC systems',
//             color: 'from-emerald-600 to-green-500',
//             bgColor: 'bg-green-50',
//             details: ['Smart Systems', 'Energy Efficient', 'Latest Tech'],
//             fullDesc: 'State-of-the-art systems for comfort and efficiency.'
//         },
//         {
//             id: 3,
//             icon: Wrench,
//             title: 'Maintenance',
//             desc: 'Preventive and corrective maintenance',
//             color: 'from-purple-600 to-violet-500',
//             bgColor: 'bg-purple-50',
//             details: ['Regular Checkups', '24/7 Support', 'Long Term Care'],
//             fullDesc: 'Comprehensive maintenance with 24/7 support.'
//         }
//     ];

//     useEffect(() => {
//         setIsVisible(true);
        
//         // Smooth scroll to component if needed
//         const hash = window.location.hash;
//         if (hash === '#services') {
//             containerRef.current?.scrollIntoView({ behavior: 'smooth' });
//         }
//     }, []);

//     return (
//         <div 
//             ref={containerRef} 
//             className="bg-white py-12 md:py-16 px-4 md:px-6"
//             id="services"
//         >
//             <div className="max-w-6xl mx-auto">
//                 {/* Compact Header */}
//                 <div className="text-center mb-12">
//                     <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200">
//                         <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
//                         <span className="text-sm font-semibold text-gray-700">
//                             Complete Journey
//                         </span>
//                     </div>
                    
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//                         Your Property's <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600 bg-clip-text text-transparent">Full Lifecycle</span>
//                     </h2>
                    
//                     <p className="text-gray-600 max-w-2xl mx-auto">
//                         From foundation to ongoing care — comprehensive services at every stage
//                     </p>
//                 </div>

//                 {/* Compact Timeline */}
//                 <div className="relative">
//                     {/* Timeline Line - Only on desktop */}
//                     <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-orange-500 to-purple-500 hidden md:block" />
                    
//                     {/* Services Grid */}
//                     <div className="grid md:grid-cols-2 gap-6 md:gap-8">
//                         {services.map((service, index) => {
//                             const ServiceIcon = service.icon;
//                             const isActive = activeService === index;
//                             const isLeft = index % 2 === 0;

//                             return (
//                                 <div
//                                     key={service.id}
//                                     className={`relative ${isLeft ? 'md:pr-8' : 'md:pl-8 md:mt-16'}`}
//                                     style={{
//                                         opacity: isVisible ? 1 : 0,
//                                         transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
//                                         transition: `all 0.5s ease ${index * 0.1}s`
//                                     }}
//                                 >
//                                     {/* Desktop Timeline Dot */}
//                                     <div className="absolute hidden md:block top-6"
//                                         style={isLeft ? { right: '-12px' } : { left: '-12px' }}
//                                     >
//                                         <div className="relative w-6 h-6">
//                                             <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.color} shadow-lg ${isActive ? 'scale-125 ring-4 ring-white ring-opacity-50' : ''}`} />
//                                         </div>
//                                     </div>

//                                     {/* Mobile Header */}
//                                     <div className="md:hidden flex items-center gap-3 mb-4">
//                                         <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-md`}>
//                                             <ServiceIcon size={24} className="text-white" />
//                                         </div>
//                                         <div>
//                                             <h3 className="font-bold text-gray-900">{service.title}</h3>
//                                             <p className="text-sm text-gray-600">{service.desc}</p>
//                                         </div>
//                                     </div>

//                                     {/* Service Card */}
//                                     <div
//                                         className={`rounded-xl border-2 p-5 cursor-pointer transition-all duration-300 hover:shadow-lg ${isActive ? 'shadow-lg border-blue-300' : 'border-gray-200 hover:border-gray-300'
//                                             } ${isActive ? service.bgColor : 'bg-white'}`}
//                                         onClick={() => setActiveService(index)}
//                                     >
//                                         {/* Desktop Header */}
//                                         <div className="hidden md:flex items-center gap-3 mb-4">
//                                             <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-md`}>
//                                                 <ServiceIcon size={24} className="text-white" />
//                                             </div>
//                                             <div>
//                                                 <h3 className="font-bold text-gray-900">{service.title}</h3>
//                                                 <p className="text-sm text-gray-600">{service.desc}</p>
//                                             </div>
//                                         </div>

//                                         {/* Expandable Content */}
//                                         <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-48 mt-4' : 'max-h-0'}`}>
//                                             <div className="pt-4 border-t border-gray-100">
//                                                 <p className="text-sm text-gray-700 mb-4">{service.fullDesc}</p>
//                                                 <div className="grid grid-cols-2 gap-2">
//                                                     {service.details.map((detail, i) => (
//                                                         <div key={i} className="flex items-center gap-2">
//                                                             <CheckCircle size={14} className="text-green-500" />
//                                                             <span className="text-xs font-medium text-gray-700">{detail}</span>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                                 <button className="mt-4 w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-md transition-shadow flex items-center justify-center gap-2">
//                                                     Learn More
//                                                     <ArrowRight size={14} />
//                                                 </button>
//                                             </div>
//                                         </div>

//                                         {/* Collapsed State Indicator */}
//                                         {!isActive && (
//                                             <div className="text-right">
//                                                 <ArrowRight size={16} className="text-gray-400 ml-auto" />
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>

//                 {/* Compact CTA */}
//                 <div className="text-center mt-12 pt-8 border-t border-gray-200">
//                     <h3 className="text-xl font-bold text-gray-900 mb-4">Start Your Journey Today</h3>
//                     <div className="flex flex-col sm:flex-row gap-3 justify-center">
//                         <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 inline-flex items-center justify-center gap-2">
//                             Get Free Consultation
//                             <ArrowRight size={18} />
//                         </button>
//                         <button className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
//                             View Projects
//                         </button>
//                     </div>
//                     <div className="flex flex-wrap justify-center gap-4 mt-6">
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <CheckCircle size={16} className="text-green-500" />
//                             <span>Certified Excellence</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <CheckCircle size={16} className="text-green-500" />
//                             <span>24/7 Support</span>
//                         </div>
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <CheckCircle size={16} className="text-green-500" />
//                             <span>5-Year Warranty</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }