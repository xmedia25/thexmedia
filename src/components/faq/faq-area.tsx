import React from "react";
import Image from "next/image";
import { Search } from "../svg";
import faq_banner from '@/assets/img/inner-faq/faq/banner-faq.jpg';
import FaqItem from "./faq-item";

// type 
type IFaq = {
  id: number;
  question: string;
  answer: string;
}
// faq data
export const faq_data:IFaq[] = [
  {
    id: 1,
    question: "Who do you work with?",
    answer:
      "We specialize in working with realtors, mortgage agents, lawyers, CAs, and local service-based businesses looking to grow their visibility and generate qualified leads.",
  },
  {
    id: 2,
    question: "What platforms do you create content for?",
    answer:
      "We create platform-optimized content for Instagram, Facebook, YouTube, TikTok, and LinkedIn — tailored to where your audience is most active.",
  },
  {
    id: 3,
    question: "Do I need to be good on camera?",
    answer:
      "Not at all. We guide you through direction and on-camera coaching to help you speak naturally and confidently, even if it's your first time.",
  },
  {
    id: 4,
    question: "How long does it take to start seeing results?",
    answer:
      "Organic growth and lead generation typically start showing results within 30–60 days. Paid campaigns can generate faster traction depending on budget and targeting.",
  },
  {
    id: 5,
    question: "Do you offer one-time projects or only monthly plans?",
    answer:
      "We offer both! Whether you want a one-time launch package or ongoing content and lead generation, we'll customize a plan for your goals.",
  },
  {
    id: 6,
    question: "How do automations and AI tools help me?",
    answer:
      "We use AI to handle lead responses, follow-ups, data collection, and CRM integrations—so you never miss a lead while focusing on your actual work.",
  },
  {
    id: 7,
    question: "Can you help me with website or CRM setup too?",
    answer:
      "Absolutely. We build high-converting websites and set up CRMs integrated with automation workflows for seamless client acquisition.",
  },
  {
    id: 8,
    question: "How involved do I need to be?",
    answer:
      "We keep your time commitment minimal. You'll collaborate during ideation and provide feedback—but we handle scripting, editing, publishing, and automation.",
  },
  {
    id: 9,
    question: "What's your pricing structure?",
    answer:
      "Our pricing depends on your needs—ranging from individual services to full-scale growth packages. Contact us for a personalized quote.",
  },
  {
    id: 10,
    question: "How do I get started?",
    answer:
      "Simple. Book a discovery call with us, and we'll map out a growth plan tailored to your business, goals, and timeline.",
  },
];

export default function FaqArea() {
  return (
    <div className="fq-faq-area fq-faq-bdr pt-80 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="fq-faq-wrapper">
              <div className="tp-service-2-accordion-box">
                <div className="accordion" id="accordionExample">
                  {faq_data.map((item) => (
                    <FaqItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="fq-faq-sidebar">
              <div className="fq-faq-sidebar-content">
                <h4 className="fq-faq-sidebar-title">Need Help?</h4>
                <p>
                  Can&apos;t find the answer you&apos;re looking for? <br />
                  Contact our team for personalized assistance.
                </p>
              </div>
              <div className="fq-faq-sidebar-thumb">
                <Image
                  className="w-100"
                  src={faq_banner}
                  alt="faq-banner"
                  style={{height:'auto'}}
                />
              </div>
              <div className="fq-faq-sidebar-input p-relative">
                <input type="text" placeholder="Search FAQ" />
                <button className="fq-faq-sidebar-search">
                  <Search />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
