import React from "react";
import OptimizedImage from "@/components/ui/optimized-image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/home-03/service/sv-icon-1.png';

const service_data = [
  {
    id: 1,
    title: "Ideation",
    desc: "We sit down with you to uncover your story — your experiences, insights, and journey. Through thoughtful conversations, we extract content that reflects your expertise and connects with your audience. It’s all about turning your knowledge into engaging ideas that position you as a leader in your industry.",
  },
  {
    id: 2,
    title: "Scripting",
    desc: "​​We turn your ideas into powerful scripts, the secret sauce behind every viral video. Our scripts are crafted with proven hooks and engaging storytelling that spark likes, shares, comments, and real conversations. It’s not just content; it’s strategy-driven storytelling that drives results.",
  },
  {
    id: 3,
    title: "Direction",
    desc: "We guide you through every step to bring out your best on camera. Our team helps you speak with confidence and clarity, making content feel natural and impactful. It’s not just about filming — it’s about showing the best version of you to the world.",
  },
  {
    id: 4,
    title: "Editing",
    desc: "Every script and video comes to life through modern, high-impact editing. We use viral visual hooks, catchy audio, and AI-enhanced content to make each piece scroll-stopping and share-worthy. Great editing turns creativity into a captivating experience people want to watch - again and again.",
  },
  {
    id: 5,
    title: "Leads/Automation",
    desc: "Going viral is just the beginning — we help you handle the buzz, effortlessly. Using AI and modern automation tools, we respond to DMs, explain your services, collect leads, and push them into your CRM — all without human intervention. You stay focused on your work, while our systems ensure every lead is tracked for smooth follow-ups and maximum conversions."
  },
  {
    id: 6,
    title: "Other Services",
    desc: "SEO, Business Consultancy, Performance Marketing (Meta, Google Ads) Website & App Development."
  }
  ];
export default function ServiceFour() {
  
  return (
    <div className="tp-service-3-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <div className="tp-service-3-title-box mb-60 p-relative">
              <div className="tp-service-3-icon">
                <OptimizedImage src={icon} alt="icon" showSkeleton={true} />
              </div>
              <span className="tp-section-subtitle-2 tp_fade_bottom">
                <span>
                  <FirstBracket />
                </span>
                <span className="tp-subtitle-text tp_text_invert">
                  Our approach
                </span>
                <span>
                  <FirstBracketTwo />
                </span>
              </span>
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom">
              Journey From <br /> Content to Business
              </h4>
            </div>
          </div>
        </div>

        {service_data.map((item) => (
          <div key={item.id} className="tp-service-3-wrap tp_fade_bottom">
            <div className="row align-items-start">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-service-3-title-box">
                  <h4 className="tp-service-3-title">
                    <Link href="/service">{item.title}</Link>
                  </h4>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-service-3-content">
                  <p dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-service-3-btn-box text-start text-md-end">
                  <Link
                    className="tp-btn-zikzak-sm p-relative"
                    href="/service"
                  >
                    <span className="zikzak-content">
                      See <br /> Details
                      <RightArrow clr="currentColor" />
                    </span>
                    <span>
                      <SvgBg />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
