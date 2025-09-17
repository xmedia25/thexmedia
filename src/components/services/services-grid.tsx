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
    },
    {
      title: "Business Consultancy & Strategy",
    },
    {
      title: "Performance Marketing (Meta & Google Ads)",
    },
    {
      title: "Website & App Development",
    },
    {
      title: "Content Creation - Ideation",
    },
    {
      title: "Content Creation - Scripting",
    },
    {
      title: "Content Creation - Direction",
    },
    {
      title: "Content Creation - Editing",
    },
    {
      title: "Leads/Automation",
    }
  ];

  return (
    <section className="tp-services-grid-section tp-services-grid--black pt-120 pb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-xl-12">
            <div className="tp-section-header" style={{ textAlign: 'left' }}>
              <h2 className="tp-section-title-2 mb-20" style={{ textAlign: 'left' }}>
                Our <span>Services</span>
              </h2>
              <p className="tp-section-text" style={{ textAlign: 'left' }}>
                Comprehensive solutions to grow your professional service business
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6 mb-40">
              <ServiceCard 
                title={service.title} description={""}              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
