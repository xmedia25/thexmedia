'use client';
import React from "react";
import { ArrowBg, RightArrowTwo } from "../svg";
import Link from "next/link";

export default function HeroBannerFour() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>
              <div className="tp-hero-3-category">
                <span>#1 in personal branding in Canada.</span>
              </div>
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">{"We"} make you </span>
                <span className="tp-reveal-line"> viral badly! </span>
              </h4>
              <span className="tp-hero-3-category tp_reveal_anim">
              Branding / Lead Generation / Automations / Content Creation
              </span>
              <Link className="tp-btn-black-2" href="https://crm.thexmedia.com/widget/booking/49CNEuLUWgqv6vOPwV7t" target="_blank" rel="nofollow">
              Book Now{" "}
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
