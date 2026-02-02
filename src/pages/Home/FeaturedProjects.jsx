import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Heart, MapPin, Star } from 'lucide-react';
import './FeaturedProjects.css';

export default function FeaturedProjects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: 'Villa Construction - Premium Residences',
            category: 'Civil Construction',
            img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=500&fit=crop',
            location: 'Hyderabad, Telangana',
            rating: 4.9,
            reviews: 48,
            year: '2023',
            description: 'Luxury villa with modern architecture and premium finishes'
        },
        {
            id: 2,
            title: 'Commercial Building Renovation',
            category: 'Renovation',
            img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=500&fit=crop',
            location: 'Pune, Maharashtra',
            rating: 4.8,
            reviews: 35,
            year: '2023',
            description: 'Complete office space modernization with smart systems'
        },
        {
            id: 3,
            title: 'Luxury Apartment Upgradation',
            category: 'facility Management',
            img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=500&fit=crop',
            location: 'Mumbai, Maharashtra',
            rating: 5.0,
            reviews: 62,
            year: '2024',
            description: 'High-end apartment with smart home integration'
        },
        {
            id: 4,
            title: 'Office Building Facilities',
            category: 'Commercial',
            img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=500&fit=crop',
            location: 'Bangalore, Karnataka',
            rating: 4.7,
            reviews: 28,
            year: '2023',
            description: 'Enterprise-grade facilities management and maintenance'
        },
        {
            id: 5,
            title: 'Farmhouse Complex Development',
            category: 'Residential',
            img: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=500&fit=crop',
            location: 'Outskirts, Hyderabad',
            rating: 4.9,
            reviews: 41,
            year: '2023',
            description: 'Sprawling farmhouse with landscaping and amenities'
        },
        {
            id: 6,
            title: 'Hyderabad Airport Maintenance Contract',
            category: 'Institutional',
            img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=500&fit=crop',
            location: 'Hyderabad International Airport',
            rating: 5.0,
            reviews: 89,
            year: '2022',
            description: 'Large-scale institutional facilities management'
        }
    ];

    const categories = ['All', 'Civil Construction', 'Renovation', 'Fcaility Management', 'NRI Property Management', ];

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white py-16 md:py-24 px-4 featured-projects-container">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 featured-projects-animate-slide-down">
                        Featured <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-purple-600 bg-clip-text text-transparent featured-projects-gradient-shift">Projects</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto featured-projects-animate-fade-in-delayed">
                        Showcasing project excellence across some of the residential, commercial, farm, NRI properties projects.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16">
                    {categories.map((category, index) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-500 ${selectedCategory === category
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105 featured-projects-filter-active'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            style={{
                                animation: isVisible ? `slideInUp 0.5s ease ${index * 80}ms forwards` : 'none',
                                opacity: isVisible ? 1 : 0
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative cursor-pointer h-96 featured-projects-card"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            style={{
                                animation: isVisible ? `cardFadeIn 0.6s ease ${index * 100}ms forwards` : 'none',
                                opacity: isVisible ? 1 : 0
                            }}
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gray-200 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                {/* Image */}
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover featured-projects-image-zoom"
                                />

                                {/* Animated Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500 featured-projects-overlay-fade" />

                                {/* Floating Category Badge */}
                                <div className={`absolute top-4 right-4 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-bold transition-all duration-500 ${hoveredProject === project.id ? 'translate-x-0 opacity-100 featured-projects-badge-slide' : 'translate-x-8 opacity-0'
                                    }`}>
                                    {project.category}
                                </div>

                                {/* Floating Heart Button */}
                                <button
                                    className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 flex items-center justify-center transition-all duration-300 border border-white/30 group-hover:scale-110 featured-projects-heart-beat"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        // Handle like functionality
                                    }}
                                >
                                    <Heart size={20} className="text-white" />
                                </button>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                                    {/* Top Info */}
                                    <div className={`transition-all duration-500 transform ${hoveredProject === project.id ? 'translate-y-0 opacity-100 featured-projects-content-reveal' : 'translate-y-4 opacity-0'
                                        }`}>
                                        <div className="flex items-center gap-2 text-sm text-orange-300 mb-2">
                                            <MapPin size={16} className="featured-projects-star-twinkle" />
                                            <span>{project.location}</span>
                                        </div>
                                        <p className="text-sm text-gray-200 leading-relaxed">{project.description}</p>
                                    </div>

                                    {/* Bottom Info */}
                                    <div className="space-y-4">
                                        {/* Rating */}
                                        <div className={`flex items-center justify-between transition-all duration-500 transform ${hoveredProject === project.id ? 'translate-y-0 opacity-100 featured-projects-content-reveal' : 'translate-y-4 opacity-0'
                                            }`}
                                            style={{ transitionDelay: '100ms' }}>
                                            <div className="flex items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className={`${i < Math.floor(project.rating) ? 'fill-yellow-400 text-yellow-400 featured-projects-star-pop' : 'text-gray-400'}`}
                                                        style={{ animationDelay: `${i * 100}ms` }}
                                                    />
                                                ))}
                                                <span className="ml-2 text-sm font-semibold featured-projects-rating-count">{project.rating}</span>
                                            </div>
                                            <span className="text-xs text-gray-300">({project.reviews} reviews)</span>
                                        </div>

                                        {/* Title and CTA */}
                                        <div className={`transition-all duration-500 transform ${hoveredProject === project.id ? 'translate-y-0 opacity-100 featured-projects-content-reveal' : 'translate-y-4 opacity-0'
                                            }`}
                                            style={{ transitionDelay: '200ms' }}>
                                            <h3 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h3>
                                            <button className="flex items-center gap-2 text-orange-400 font-semibold hover:gap-3 transition-all group/btn featured-projects-arrow-move">
                                                View Details <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Year Badge - Floating Corner */}
                                <div className={`absolute bottom-4 right-4 px-3 py-1 rounded-full bg-blue-600/80 backdrop-blur-md text-white text-xs font-bold border border-blue-400/50 transition-all duration-500 featured-projects-badge-float ${hoveredProject === project.id ? 'scale-100 opacity-100' : 'scale-75 opacity-60'
                                    }`}>
                                    {project.year}
                                </div>
                            </div>

                            {/* Glow Effect on Hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-orange-600/0 transition-all duration-500 featured-projects-color-shift ${hoveredProject === project.id ? 'from-blue-600/20 via-purple-600/20 to-orange-600/20 featured-projects-glow-pulse' : ''
                                } pointer-events-none`} />
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-16 md:mt-20 pt-12 border-t border-gray-200">
                    {/* <button className="px-12 py-4 text-white rounded-lg font-bold text-lg transition-all duration-500 hover:scale-105 inline-flex items-center gap-2 featured-projects-button-shimmer">
                        View All Projects
                        <ArrowRight size={20} className="featured-projects-arrow-move" />
                    </button> */}
                </div>
            </div>
        </div>
    );
}