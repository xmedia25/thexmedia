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
      title: "SEO",
      description: "Rank where your clients search: local + industry SEO for realtors, mortgage agents, lawyers, CAs, and service businesses. We build topical authority with high‑intent content, schema, reviews, and technical fixes. Result: more qualified inbound leads from Google—without paying per click."
    },
    {
      title: "Business Consultancy",
      description: "We audit your offer, positioning, and funnel to craft a clear, scalable growth plan. Pricing, packaging, SOPs, AI automations, CRM setup, and sales scripts—built for service pros. Outcome: tighter operations, predictable pipeline, and faster conversions."
    },
    {
      title: "Performance Marketing (Meta & Google Ads)",
      description: "When paid makes sense, we scale what's already working organically. Audience research, creative testing, LSAs/PMax, conversion tracking, and CRM-integrated lead flows. Scale fast, spend smart, and attribute every dollar to revenue."
    },
    {
      title: "Website & App Development",
      description: "Conversion-first sites & lightweight apps designed for professional services. Fast, SEO-ready, mobile-first, with booking, chat, payments, and CRM/AI automation baked in. Launch quickly, track everything, and iterate without dev headaches."
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
            <div key={index} className="col-xl-6 col-lg-6 col-md-6 mb-40">
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
