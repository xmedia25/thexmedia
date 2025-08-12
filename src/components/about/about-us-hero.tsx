import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{backgroundImage: "url(/assets/img/inner-about/hero/hero-1.jpg)"}}
    >
      <div className="breadcurmb-site d-none">
        <h6>About Us</h6>
      </div>
      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}>
          <span>
            Scroll to explore
            <ScrollDown />
          </span>
        </a>
      </div>
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <span className="ab-inner-hero-subtitle">
                Viral Content & <br /> Organic Growth
              </span>
              <h1 className="ab-inner-hero-title tp-char-animation">
                Helping Service Professionals Go Viral & Scale Up
              </h1>
              <p>Creating viral, organic content that drives real business results for realtors, mortgage agents, lawyers, CAs, and service professionals</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p className="tp_title_anim">
                At TheXMedia, we help professionals stand out and scale up by creating viral, organic content that drives real business results—without relying solely on paid ads.
              </p>
               <a className="tp-btn-white-sm border-style" href="#our-story">Our Story</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
