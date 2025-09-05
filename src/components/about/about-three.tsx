import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal imports
import shape from '@/assets/img/home-03/about/ab-shape-img.png';
import { ArrowBg, RightArrowTwo,FirstBracket, FirstBracketTwo } from "../svg";

export default function AboutThree() {

  return (
    <div className="tp-about-3-area pt-120 pb-110">
      <div className="container">
        <div className="row">
          <div className="col-xl-11">
            <div className="tp-about-3-title-box">
              <h4 className="mb-30 tp-section-title-90 tp_fade_bottom">
              We generate qualified leads, organically!{" "}
               </h4>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-4">
            <div className="tp-about-3-shape text-lg-end">
              <Image src={shape} alt="shape" style={{ height: "auto" }} />
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-8">
            <div className="tp-about-3-content">
              <p className="mt-60 mb-30 tp_fade_bottom">
              At TheXMedia, we help realtors, mortgage agents, lawyers, CAs, and businesses grow fast with powerful organic social media content. No paid ads just content that connects, engages, and reaches millions.
              </p>
              <p className="mb-45 tp_fade_bottom">
              We don’t just make you go viral, we turn that attention into qualified leads using AI automations and smart CRM tools. Ready to be seen, heard, and chosen? Let’s make it happen.
              </p>
              <Link className="tp-btn-black-2 tp_fade_bottom" href="/about-us">
                About Us
                <span className="p-relative">
                  <RightArrowTwo />
                  <ArrowBg />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
