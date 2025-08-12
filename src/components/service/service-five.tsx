import React from "react";
import Image from "next/image";
import Link from "next/link";
// images
import s_1 from "@/assets/img/home-01/service/service-icon-1.png";
import s_2 from "@/assets/img/home-01/service/service-icon-2.png";
import s_3 from "@/assets/img/home-01/service/service-icon-3.png";

const service_data = [
  {
    id: 1,
    title: "AI Content Creation",
    desc: "Generate viral content at scale using AI-powered avatars and voice cloning. Shoot once, scale forever.",
    icon: s_2,
    link: "/ai-content"
  },
  {
    id: 2,
    title: "SEO & Local Marketing",
    desc: "Dominate local search and generate qualified leads month after month without ad spend.",
    icon: s_1,
    link: "/service-details"
  },
  {
    id: 3,
    title: "Business Consultancy",
    desc: "Refine your business model, positioning, and growth systems for sustainable scaling.",
    icon: s_3,
    link: "/service-details"
  },
  {
    id: 4,
    title: "Performance Marketing",
    desc: "Convert clicks into real business with optimized paid campaigns that align with your organic strengths.",
    icon: s_1,
    link: "/service-details"
  },
  {
    id: 5,
    title: "Web Development",
    desc: "Build a digital presence that converts visitors into clients 24/7 with modern, functional websites and apps.",
    icon: s_2,
    link: "/service-details"
  },
  {
    id: 6,
    title: "Content Strategy",
    desc: "From ideation to final edit, we help you create viral content that showcases your expertise and drives engagement.",
    icon: s_3,
    link: "/service-details"
  }
];

// service items
export function ServiceItems() {
  return (
    <div className="row">
      {service_data.map((item) => (
        <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 mb-30">
          <div className="tp-service-5-item tp_fade_bottom space-1">
            <div className="tp-service-4-icon">
              <Image src={item.icon} alt="icon" />
            </div>
            <div className="tp-service-4-content">
              <h4 className="tp-service-4-title-sm tp-text-black">
                <Link href={item.link}>{item.title}</Link>
              </h4>
              <p>{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// service five area
export default function ServiceFive() {
  return (
    <div className="tp-service-5-area pt-120 pb-70">
      <div className="container container-1775">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-5-title-box mb-90">
              <h4 className="tp-service-5-title p-relative tp_fade_right">
                <span className="tp-service-5-subtitle tp_fade_left">
                  SERVICES
                </span>
                <span className="text-space"></span>
                Comprehensive digital solutions for service professionals <br />
                who want to scale their business sustainably
              </h4>
            </div>
          </div>
        </div>
        <div className="tp-service-5-wrap">
          <ServiceItems/>
        </div>
      </div>
    </div>
  );
}
