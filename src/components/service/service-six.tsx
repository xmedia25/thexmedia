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
    subtitle: "Ideation",
    // title: "SEO for Service Professionals",
    text: "We uncover your unique story through deep conversations. Your experiences and expertise become the foundation of powerful content. Every idea is designed to connect with your ideal audience. This is where we position you as an authority in your industry.",
    lists: [
      "Story Discovery",
      "Audience Connection",
      "Authority Positioning",
      "Content Blueprint",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Scripting",
    // title: "Business Consultancy & Strategy",
    text: "We transform ideas into scroll-stopping video scripts. Our scripts use proven hooks and storytelling frameworks. Each one is built to spark engagement and conversation. The goal: content that feels organic but drives results.",
    lists: [
      "Proven Hooks",
      "Storytelling Frameworks",
      "Engagement Focus",
      "Viral Potential",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Shooting",
    // title: "Performance Marketing",
    text: "We direct you on camera to bring out your best. From confidence coaching to clear messaging, we guide every step. Videos are shot with precision and crafted for maximum impact. Editing adds viral visuals, audio, and AI-powered enhancements.",
    lists: [
      "On-Camera Coaching",
      "Confidence & Clarity",
      "High-Impact Filming",
      "Viral Editing",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Viral Editing",
    // title: "Website & App Development",
    text: "Going viral is only the start  we turn views into clients. AI tools handle DMs, FAQs, and lead collection automatically. Every prospect flows directly into your CRM for tracking. You focus on business while we optimize conversions.",
    lists: [
      "AI Lead Capture",
      "CRM Automation",
      "Conversion Optimization",
      "Effortless Scaling",
    ],
  },
];

export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2 pb-90">
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
                      {/* <h4 className="sv-service-title">{item.title}</h4> */}
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
