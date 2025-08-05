import React from "react";
import Image from "next/image";
import shape from '@/assets/img/inner-about/about/shape-1.png';

const work_data = [
  {
    id: 1,
    title: "SEO",
    text: "Rank where your clients search: local + industry SEO for realtors, mortgage agents, lawyers, CAs, and service businesses. We build topical authority with high‑intent content, schema, reviews, and technical fixes. Result: more qualified inbound leads from Google—without paying per click.",
  },
  {
    id: 2,
    title: "Business Consultancy",
    text: " We audit your offer, positioning, and funnel to craft a clear, scalable growth plan. Pricing, packaging, SOPs, AI automations, CRM setup, and sales scripts—built for service pros. Outcome: tighter operations, predictable pipeline, and faster conversions.",
  },
  {
    id: 3,
    title: "Performance Marketing (Meta & Google Ads)",
    text: "When paid makes sense, we scale what's already working organically. Audience research, creative testing, LSAs/PMax, conversion tracking, and CRM-integrated lead flows. Scale fast, spend smart, and attribute every dollar to revenue.",
  },
  {
    id: 4,
    title: "Website & App Development",
    text: "Conversion-first sites & lightweight apps designed for professional services. Fast, SEO-ready, mobile-first, with booking, chat, payments, and CRM/AI automation baked in. Launch quickly, track everything, and iterate without dev headaches.",
  },
];
export default function AboutWork() {
  return (
    <div className="ab-2-work-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <div className="ab-2-work-title-box p-relative">
              <h4 className="ab-2-work-title tp_title_anim">
              Our Team
              </h4>
              <span className="ab-2-work-subtitle tp_title_anim">
                About Our Team
              </span>
              <Image
                className="ab-2-work-shape d-none d-lg-block"
                src={shape}
                alt="shape"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            {work_data.map((item) => (
              <div key={item.id} className="ab-2-work-item tp_fade_bottom">
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <h4 className="sv-service-title">{item.title}</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
