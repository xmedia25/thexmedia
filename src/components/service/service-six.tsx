import React from "react";
import OptimizedImage from "@/components/ui/optimized-image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Digital Marketing",
    title: "SEO for Service Professionals",
    text: "We help realtors, mortgage agents, lawyers, CAs, and local service-based businesses dominate local search. Our SEO isn't about vanity traffic—it's about visibility to the right audience, at the right time.",
    lists: [
      "Keyword research tailored to your niche",
      "On-page SEO optimization",
      "Google Business Profile optimization",
      "Local backlinks and citation building",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Business Strategy",
    title: "Business Consultancy & Strategy",
    text: "We partner with you to refine your business model, positioning, offer, and growth systems. Think of us as your strategic co-pilot.",
    lists: [
      "Offer optimization & packaging",
      "SOP creation for sales and delivery",
      "CRM setup and automation workflows",
      "AI automation integration",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Paid Advertising",
    title: "Performance Marketing",
    text: "Already got organic traction? Let's pour fuel on the fire. We create, test, and optimize paid campaigns that convert clicks into real business.",
    lists: [
      "Meta & Google Ads campaigns",
      "Ad creative design and copy",
      "Funnel creation with lead magnets",
      "Performance tracking and optimization",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Development",
    title: "Website & App Development",
    text: "We build sleek, fast, and functional websites and mobile apps designed to convert—built specifically for realtors, mortgage pros, lawyers, and other local service experts.",
    lists: [
      "Custom website design and development",
      "Mobile-first and SEO-friendly builds",
      "CRM and automation integrations",
      "AI-enhanced features",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <OptimizedImage
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                    showSkeleton={true}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="sv-service-btn">
                        <Link
                          className="tp-btn-zikzak zikzak-inner p-relative"
                          href="/service-details"
                        >
                          <span className="zikzak-content">
                            See <br /> Details
                            <RightArrow clr="currentColor" />
                          </span>
                          <ShapeTwo />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
