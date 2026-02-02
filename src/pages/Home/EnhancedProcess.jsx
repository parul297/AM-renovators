import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle,
  MessageSquare,
  FileCheck,
  Hammer,
  Hand,
  ArrowRight,
  Zap,
  Clock,
  Users,
  Shield,
  Download,
  Video,
  Phone,
  Calendar,
  ChevronRight,
  Star,
  Target,
  Award,
  Globe,
  CheckCircle2,
  FileText,
  Building,
  Plane,
} from "lucide-react";
import "./EnhancedProcess.css";

export default function EnhancedProcess() {
  const [expandedStep, setExpandedStep] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const processSteps = [
    {
      id: 0,
      number: "01",
      icon: MessageSquare,
      title: "Consultation & Discovery",
      shortDesc: "In-depth analysis of your vision and requirements",
      fullDesc:
        "We start with a comprehensive consultation to understand your specific needs, preferences, and budget. Our experts analyze the space and create a preliminary vision board.",
      details: [
        "Virtual/in-person site inspection",
        "Requirement analysis",
        "Budget planning",
        "Design assessment",
        "Preliminary visualization",
      ],
      duration: "2-3 Days",
      deliverables: [
        "Site Analysis Report",
        "Design Concepts",
        "Budget Estimate",
      ],
      colorScheme: "blue",
      testimonials: [
        "AM Renovators understood our vision perfectly!",
        "The visualization helped us make confident decisions.",
      ],
    },
    {
      id: 1,
      number: "02",
      icon: FileCheck,
      title: "Design & Quotation",
      shortDesc: "Detailed plans with transparent pricing",
      fullDesc:
        "Our design team creates comprehensive plans including drawings, material specifications, and 3D renderings with clear pricing.",
      details: [
        "Detailed architectural drawings",
        "Material selections",
        "Cost breakdown",
        "Timeline schedule",
        "3D renderings",
      ],
      duration: "4-6 Days",
      deliverables: [
        "Architectural Plans",
        "3D Renderings",
        "Detailed Quotation",
      ],
      colorScheme: "orange",
      testimonials: [
        "Most transparent quotation we've received!",
        "The 3D walkthrough was very helpful.",
      ],
    },
    {
      id: 2,
      number: "03",
      icon: Hammer,
      title: "Execution & Quality Control",
      shortDesc: "Precision work with daily updates",
      fullDesc:
        "Our certified professionals execute with precision. Daily quality checks and progress updates ensure everything stays on track.",
      details: [
        "Daily site supervision",
        "Progress reports",
        "Quality assurance",
        "Material verification",
        "Client tracking dashboard",
      ],
      duration: "Project Duration",
      deliverables: ["Progress Reports", "Quality Documents"],
      colorScheme: "green",
      testimonials: [
        "Daily updates gave us peace of mind!",
        "Exceptional quality control.",
      ],
    },
    {
      id: 3,
      number: "04",
      icon: Hand,
      title: "Handover & Support",
      shortDesc: "Complete documentation and aftercare",
      fullDesc:
        "We conduct final inspection, provide documentation including warranties, and offer comprehensive aftercare support.",
      details: [
        "Final walkthrough",
        "Project documentation",
        "Warranty certificates",
        "Maintenance manuals",
        "Aftercare support",
      ],
      duration: "2-3 Days",
      deliverables: [
        "Completion Certificate",
        "Warranty Package",
        "Support Agreement",
      ],
      colorScheme: "purple",
      testimonials: [
        "Documentation was incredibly thorough!",
        "Support gives us complete confidence.",
      ],
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Integrity",
      description: "No hidden costs. Clear, itemized quotations.",
      // stat: '100% Transparency'
    },
    {
      icon: Clock,
      title: "Transparency",
      description: "Projects delivered on schedule.",
      // stat: '98% On Time'
    },
    {
      icon: Users,
      title: "Technical Excellence",
      description: "Single point of contact for communication.",
      // stat: '24/7 Support'
    },
    {
      icon: Video,
      title: "Client Focus",
      description: "Daily photo/video updates.",
      // stat: 'Real-time Tracking'
    },
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
        const progress = Math.max(
          0,
          Math.min(1, 1 - rect.top / window.innerHeight),
        );
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

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isScrolling]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (index) => {
    setIsScrolling(true);
    setExpandedStep(index);
    setTimeout(() => setIsScrolling(false), 1000);
  };

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
        {/* Header */}
        <div className="process-header">
          <h1 className="process-title">
            Our <span className="gradient-text">Process</span>
          </h1>

          <div className="header-subtitle">
            <p className="process-description">
              A simple 4-step methodology ensuring quality and timely delivery
            </p>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="features-showcase">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card ${index === activeFeature ? "active" : ""}`}
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
          {/* Timeline Steps */}
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
                const isCompleted =
                  scrollProgress > (index + 1) / processSteps.length;
                const isLastStep = index === processSteps.length - 1;

                return (
                  <div
                    key={index}
                    className={`timeline-step-marker ${step.colorScheme} ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                    style={{
                      left:
                        index === 0
                          ? "0"
                          : isLastStep
                            ? "100%"
                            : `${index * (100 / (processSteps.length - 1))}%`,
                      transform:
                        index === 0
                          ? "translateX(0)"
                          : isLastStep
                            ? "translateX(-100%)"
                            : "translateX(-50%)",
                    }}
                    onClick={() => handleStepClick(index)}
                  >
                    <div className="marker-dot">
                      <StepIcon className="marker-icon" />
                      {isCompleted && <div className="completion-ring"></div>}
                    </div>
                    <div className="marker-label">
                      <span className="marker-number">{step.number}</span>
                      <span className="marker-title">{step.title}</span>
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
                  className={`details-panel ${isActive ? "active" : ""} ${step.colorScheme}`}
                >
                  {isActive && (
                    <>
                      <div className="panel-header">
                        <div className="panel-title-section">
                          <div className="step-badge">
                            <span className="step-number-large">
                              {step.number}
                            </span>
                            <div>
                              <span className="step-title-large">
                                {step.title}
                              </span>
                              <div className="step-subtitle">
                                {step.shortDesc}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="panel-content">
                        <div className="content-main">
                          <div className="description-section">
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
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
