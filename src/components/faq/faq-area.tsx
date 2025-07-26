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
    question: "What we do?",
    answer:
      "We specialize in custom e-commerce solutions and mobile app development. Our team creates scalable platforms that drive business growth and enhance customer engagement through innovative technology.",
  },
  {
    id: 2,
    question: "How we do it?",
    answer:
      "Our development process typically takes 4-12 weeks depending on complexity. We follow agile methodology with regular updates and client feedback to ensure your project meets all requirements.",
  },
  {
    id: 3,
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we provide comprehensive post-launch support including maintenance, updates, security patches, and feature enhancements to keep your platform running smoothly.",
  },
  {
    id: 4,
    question: "Free Shipping  & Return Order",
    answer:
      "We work with businesses of all sizes, from startups to enterprise companies. Our solutions are scalable and can be customized to meet your specific business needs and budget.",
  },
  {
    id: 5,
    question: "Payment options",
    answer:
      "We use modern technologies including React, Node.js, React Native, and cloud platforms like AWS to build robust, scalable solutions that perform excellently across all devices.",
  },
  {
    id: 6,
    question: "Best Quality Products",
    answer:
      "Getting started is easy! Contact us for a free consultation where we'll discuss your project requirements, timeline, and provide a detailed proposal tailored to your needs.",
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
                <h4 className="fq-faq-sidebar-title">Q&A</h4>
                <p>
                  Lorem ipsum dolor sit laud munere dicunt detraxit mel, nisl
                  evertitu <br /> eu vim.
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
                <input type="text" placeholder="Search product" />
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
