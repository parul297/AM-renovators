import React, { useState, useEffect, useRef } from 'react';
import {
    CheckCircle, MessageSquare, FileCheck, Hammer,
    Hand, ArrowRight, Zap, Clock, Users,
    Shield, Download, Video, Phone, Calendar,
    ChevronRight, Star, Target, Award
} from 'lucide-react';
import './EnhancedProcess.css';

export default function EnhancedProcess() {
    const [expandedStep, setExpandedStep] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);
    const timelineRef = useRef(null);
    const [activeFeature, setActiveFeature] = useState(0);

    const processSteps = [
        {
            id: 0,
            number: '01',
            icon: MessageSquare,
            title: 'Consultation & Discovery',
            shortDesc: 'In-depth analysis of your vision and requirements',
            fullDesc: 'We start with a comprehensive virtual or in-person consultation to understand your specific needs, preferences, and budget. Our experts analyze the space, discuss design options, and create a preliminary vision board.',
            details: [
                'Virtual/in-person site inspection',
                'Requirement analysis workshop',
                'Budget & timeline planning',
                'Design preference assessment',
                'Preliminary 3D visualization'
            ],
            duration: '2-3 Days',
            deliverables: ['Site Analysis Report', 'Preliminary Design Concepts', 'Budget Estimate'],
            colorScheme: 'blue',
            testimonials: [
                "AM Renovators understood our vision better than we did!",
                "The 3D visualization helped us make confident decisions."
            ]
        },
        {
            id: 1,
            number: '02',
            icon: FileCheck,
            title: 'Design & Quotation',
            shortDesc: 'Detailed plans with transparent pricing',
            fullDesc: 'Our design team creates comprehensive plans including architectural drawings, material specifications, and 3D renderings. We provide a crystal-clear, itemized quotation with no hidden costs.',
            details: [
                'Detailed architectural drawings',
                'Material & finish selections',
                'Itemized cost breakdown',
                'Project timeline schedule',
                '3D walkthrough renderings'
            ],
            duration: '4-6 Days',
            deliverables: ['Architectural Plans', '3D Renderings', 'Detailed Quotation'],
            colorScheme: 'orange',
            testimonials: [
                "Most transparent quotation we've ever received!",
                "The 3D walkthrough was incredibly helpful."
            ]
        },
        {
            id: 2,
            number: '03',
            icon: Hammer,
            title: 'Execution & Quality Control',
            shortDesc: 'Precision work with daily updates',
            fullDesc: 'Our certified professionals execute the project with military precision. Daily quality checks, weekly progress meetings, and real-time photo/video updates ensure everything stays on track.',
            details: [
                'Daily site supervision by project manager',
                'Weekly progress reports with photos/videos',
                'Quality assurance checkpoints',
                'Material verification at every stage',
                'Client dashboard for real-time tracking'
            ],
            duration: 'Project Duration',
            deliverables: ['Daily Progress Reports', 'Quality Check Documents', 'Client Dashboard Access'],
            colorScheme: 'green',
            testimonials: [
                "Daily photo updates gave us complete peace of mind!",
                "The quality control is exceptional."
            ]
        },
        {
            id: 3,
            number: '04',
            icon: Hand,
            title: 'Handover & Support',
            shortDesc: 'Complete documentation and aftercare',
            fullDesc: 'We conduct a meticulous final inspection with you, provide complete documentation including warranties and manuals, and offer 1-year comprehensive aftercare support.',
            details: [
                'Final walkthrough & snag list resolution',
                'Complete project documentation package',
                'Warranty certificates for all materials',
                'Operation & maintenance manuals',
                '1-year comprehensive AMC included'
            ],
            duration: '2-3 Days',
            deliverables: ['Project Completion Certificate', 'Warranty Package', 'AMC Agreement'],
            colorScheme: 'purple',
            testimonials: [
                "The documentation package was incredibly thorough!",
                "24/7 support gives us complete confidence."
            ]
        }
    ];

    const features = [
        {
            icon: Shield,
            title: 'Transparent Pricing',
            description: 'No hidden costs. Detailed, itemized quotations with crystal clear breakdown.',
            stat: '100% Transparency'
        },
        {
            icon: Clock,
            title: 'Timely Delivery',
            description: '98% projects delivered on or before schedule with penalty clauses for delays.',
            stat: '98% On Time'
        },
        {
            icon: Users,
            title: 'Dedicated Manager',
            description: 'Single point of contact ensures seamless communication and accountability.',
            stat: '24/7 Support'
        },
        {
            icon: Video,
            title: 'Live Updates',
            description: 'Daily photo/video updates and virtual site tours for remote monitoring.',
            stat: 'Real-time Tracking'
        }
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (timelineRef.current) {
                const rect = timelineRef.current.getBoundingClientRect();
                const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
                setScrollProgress(progress);
            }
        };

        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div ref={containerRef} className="enhanced-process-container">
            {/* Animated Background Elements */}
            <div className="background-elements">
                <div className="bg-circle-1"></div>
                <div className="bg-circle-2"></div>
                <div className="bg-circle-3"></div>
                <div className="bg-grid"></div>
            </div>

            <div className="process-wrapper">
                {/* Header with Stats */}
                <div className="process-header">
                    <div className="header-top">
                        <div className="process-badge">
                            <Star size={16} />
                            <span>Industry-Leading Process</span>
                        </div>
                        <div className="stats-bar">
                            <div className="stat-item">
                                <div className="stat-number">500+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">27+</div>
                                <div className="stat-label">Years</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat-item">
                                <div className="stat-number">98%</div>
                                <div className="stat-label">Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    <h1 className="process-title">
                        Our <span className="gradient-text">Proven Process</span>
                    </h1>

                    <div className="header-subtitle">
                        <p className="process-description">
                            A meticulously designed 4-step methodology that ensures transparency, quality,
                            and on-time delivery for every project, whether local or remote
                        </p>
                        {/* <div className="header-cta">
                            <button className="download-btn">
                                <Download size={18} />
                                Download Process PDF
                            </button>
                        </div> */}
                    </div>
                </div>

                {/* Feature Highlights */}
                <div className="features-showcase">
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`feature-card ${index === activeFeature ? 'active' : ''}`}
                                onMouseEnter={() => setActiveFeature(index)}
                            >
                                <div className="feature-icon-wrapper">
                                    <feature.icon className="feature-icon" />
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                                <div className="feature-stat">{feature.stat}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Process Timeline */}
                <div ref={timelineRef} className="process-timeline-section">
                    {/* Timeline Navigation */}
                    <div className="timeline-navigation">
                        {processSteps.map((step, index) => {
                            const isActive = expandedStep === index;
                            const isCompleted = scrollProgress > (index + 1) / processSteps.length;

                            return (
                                <button
                                    key={index}
                                    className={`timeline-nav-item ${step.colorScheme} ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                                    onClick={() => setExpandedStep(index)}
                                >
                                    <span className="nav-number">{step.number}</span>
                                    <span className="nav-title">{step.title}</span>
                                    {isCompleted && !isActive && (
                                        <CheckCircle className="nav-check" size={16} />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Process Timeline */}
                    <div className="process-timeline">
                        {/* Progress Bar */}
                        <div className="timeline-progress-container">
                            <div className="timeline-progress-background"></div>
                            <div
                                className="timeline-progress-fill"
                                style={{ width: `${scrollProgress * 100}%` }}
                            ></div>
                        </div>

                        {/* Timeline Steps */}
                        <div className="timeline-steps-container">
                            {processSteps.map((step, index) => {
                                const StepIcon = step.icon;
                                const isActive = expandedStep === index;
                                const isCompleted = scrollProgress > (index + 1) / processSteps.length;
                                const progress = (index + 1) / processSteps.length;

                                return (
                                    <div
                                        key={index}
                                        className={`timeline-step-marker ${step.colorScheme} ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
                                        style={{ left: `${index * (100 / (processSteps.length - 1))}%` }}
                                        onClick={() => setExpandedStep(index)}
                                    >
                                        <div className="marker-dot">
                                            <StepIcon className="marker-icon" />
                                            {isCompleted && (
                                                <div className="completion-ring"></div>
                                            )}
                                        </div>
                                        <div className="marker-tooltip">
                                            <span className="tooltip-title">{step.title}</span>
                                            <span className="tooltip-duration">{step.duration}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Step Details Panel */}
                    <div className="step-details-panel">
                        {processSteps.map((step, index) => {
                            const isActive = expandedStep === index;

                            return (
                                <div
                                    key={index}
                                    className={`details-panel ${isActive ? 'active' : ''} ${step.colorScheme}`}
                                >
                                    {isActive && (
                                        <>
                                            <div className="panel-header">
                                                <div className="panel-title-section">
                                                    <div className="step-badge">
                                                        <span className="step-number-large">{step.number}</span>
                                                        <span className="step-title-large">{step.title}</span>
                                                    </div>
                                                    <div className="duration-display">
                                                        <Clock size={20} />
                                                        <span>{step.duration}</span>
                                                    </div>
                                                </div>
                                                <div className="panel-actions">
                                                    {/* <button className="action-btn">
                                                        <Video size={18} />
                                                        Watch Process Video
                                                    </button> */}
                                                    <button className="action-btn outline">
                                                        <Phone size={18} />
                                                        Schedule Call
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="panel-content">
                                                <div className="content-main">
                                                    <div className="description-section">
                                                        <h3>What to Expect</h3>
                                                        <p>{step.fullDesc}</p>
                                                    </div>

                                                    <div className="details-section">
                                                        <h3>Key Activities</h3>
                                                        <div className="activities-grid">
                                                            {step.details.map((detail, i) => (
                                                                <div key={i} className="activity-item">
                                                                    <div className="activity-check">
                                                                        <CheckCircle size={16} />
                                                                    </div>
                                                                    <span>{detail}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="content-sidebar">
                                                    <div className="deliverables-section">
                                                        <h3>Deliverables</h3>
                                                        <div className="deliverables-list">
                                                            {step.deliverables.map((deliverable, i) => (
                                                                <div key={i} className="deliverable-item">
                                                                    <FileCheck size={16} />
                                                                    <span>{deliverable}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="testimonials-section">
                                                        <h3>Client Feedback</h3>
                                                        <div className="testimonials-list">
                                                            {step.testimonials.map((testimonial, i) => (
                                                                <div key={i} className="testimonial-item">
                                                                    <div className="testimonial-quote">"{testimonial}"</div>
                                                                    <div className="testimonial-author">
                                                                        <div className="author-avatar"></div>
                                                                        <div className="author-info">
                                                                            <span className="author-name">Verified Client</span>
                                                                            <span className="author-project">Recent Project</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="panel-footer">
                                                <div className="next-step">
                                                    {index < processSteps.length - 1 ? (
                                                        <>
                                                            <span className="next-label">Next: {processSteps[index + 1].title}</span>
                                                            <button
                                                                className="next-btn"
                                                                onClick={() => setExpandedStep(index + 1)}
                                                            >
                                                                Continue
                                                                <ChevronRight size={18} />
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span className="next-label">Ready to begin your project?</span>
                                                            <button className="next-btn primary">
                                                                Get Started
                                                                <ArrowRight size={18} />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="enhanced-cta-section">
                    <div className="cta-content">
                        <div className="cta-left">
                            <h2 className="cta-title">Ready to Experience Our Process?</h2>
                            <p className="cta-description">
                                Book a free 30-minute discovery call with our project lead.
                                We'll analyze your requirements and provide a customized project roadmap.
                            </p>
                            <div className="cta-features">
                                <div className="cta-feature">
                                    <CheckCircle size={18} />
                                    <span>Free initial consultation</span>
                                </div>
                                <div className="cta-feature">
                                    <CheckCircle size={18} />
                                    <span>Custom project roadmap</span>
                                </div>
                                <div className="cta-feature">
                                    <CheckCircle size={18} />
                                    <span>No-obligation quotation</span>
                                </div>
                            </div>
                        </div>

                        <div className="cta-right">
                            <div className="cta-card">
                                {/* <div className="cta-card-header">
                                    <Calendar className="calendar-icon" />
                                    <h3>Schedule Your Call</h3>
                                </div>

                                <div className="cta-options">
                                    <div className="time-option">
                                        <div className="time-slot">
                                            <span className="time">10:00 AM</span>
                                            <span className="duration">30 min</span>
                                        </div>
                                        <button className="slot-btn">Book Now</button>
                                    </div>

                                    <div className="time-option">
                                        <div className="time-slot">
                                            <span className="time">02:00 PM</span>
                                            <span className="duration">30 min</span>
                                        </div>
                                        <button className="slot-btn">Book Now</button>
                                    </div>

                                    <div className="time-option">
                                        <div className="time-slot">
                                            <span className="time">04:30 PM</span>
                                            <span className="duration">30 min</span>
                                        </div>
                                        <button className="slot-btn primary">Book Now</button>
                                    </div>
                                </div> */}

                                {/* <div className="cta-divider">
                                    <span>OR</span>
                                </div> */}

                                <div className="cta-actions">
                                    <button className="whatsapp-btn">
                                        <svg className="whatsapp-icon" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Message on WhatsApp
                                    </button>

                                    <button className="call-btn">
                                        <Phone size={18} />
                                        Call Now: +91 9876543210
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}