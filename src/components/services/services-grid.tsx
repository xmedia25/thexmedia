"use client";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="tp-service-card">
      <div className="tp-service-card-content">
        {icon && (
          <div className="tp-service-card-icon mb-30">
            {icon}
          </div>
        )}
        <h3 className="tp-service-card-title mb-20">{title}</h3>
        <p className="tp-service-card-desc">{description}</p>
      </div>
    </div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      title: "SEO for Service Professionals",
      description: "We help realtors, mortgage agents, lawyers, CAs, and local service-based businesses dominate local search. Our SEO isn't about vanity traffic—it's about visibility to the right audience, at the right time."
    },
    {
      title: "Business Consultancy & Strategy",
      description: "We partner with you to refine your business model, positioning, offer, and growth systems. Think of us as your strategic co-pilot to scale sustainably with better systems and positioning."
    },
    {
      title: "Performance Marketing (Meta & Google Ads)",
      description: "Already got organic traction? Let's pour fuel on the fire. We create, test, and optimize paid campaigns that convert clicks into real business for established businesses ready to scale faster."
    },
    {
      title: "Website & App Development",
      description: "We build sleek, fast, and functional websites and mobile apps designed to convert—built specifically for realtors, mortgage pros, lawyers, and other local service experts."
    },
    {
      title: "Content Creation - Ideation",
      description: "We bring your expertise to life through thoughtful, strategic content ideation sessions. We interview you about your journey, identify content pillars, and brainstorm engaging ideas."
    },
    {
      title: "Content Creation - Scripting",
      description: "We transform your ideas into powerful scripts that drive views, shares, and action. We craft scroll-stopping hooks, relatable storytelling, and write in your authentic voice."
    },
    {
      title: "Content Creation - Direction",
      description: "We guide you on camera to capture your best, most confident self. We provide on-shoot coaching, frame guidance, and real-time feedback to keep you relaxed and camera-ready."
    },
    {
      title: "Content Creation - Editing",
      description: "We turn raw footage into scroll-stopping videos using modern editing techniques. We add viral visual and audio hooks, integrate subtitles, branding, effects, and AI-generated elements."
    },
    {
      title: "Leads/Automation",
      description: "Going viral is just the beginning — we help you handle the buzz, effortlessly. Using AI and modern automation tools, we respond to DMs, explain your services, collect leads, and push them into your CRM."
    }
  ];

  return (
    <section className="tp-services-grid-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center mb-60">
          <div className="col-xl-8">
            <div className="tp-section-header text-center">
              <h2 className="tp-section-title-2 mb-20">
                Our <span>Services</span>
              </h2>
              <p className="tp-section-text">
                Comprehensive solutions to grow your professional service business
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-40">
              <ServiceCard 
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
