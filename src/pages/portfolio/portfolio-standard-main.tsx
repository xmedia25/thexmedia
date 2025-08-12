"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText, cursorAnimation } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import FooterTwo from "@/layouts/footers/footer-two";
import ProjectFive from "@/components/project/project-five";
import BigText from "@/components/big-text";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { imageRevealAnimation } from "@/utils/image-reveal-anim";
import { hoverBtn } from "@/utils/hover-btn";

const PortfolioStandardMain = () => {
  useScrollSmooth();

  useEffect(() => {
    document.body.classList.add("tp-magic-cursor");
    return () => {
      document.body.classList.remove("tp-magic-cursor");
    }
  }, []);

  useEffect(() => {
    if(typeof window !== 'undefined' && document.querySelector('.tp-magic-cursor')) {
      cursorAnimation();
    }
  },[]);

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      imageRevealAnimation();
      hoverBtn();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>

      {/* magic cursor start */}
      <div id="magic-cursor">
        <div id="ball"></div>
      </div>
      {/* magic cursor end */}
      
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio hero */}
            <div
              className="tm-hero-area tm-hero-ptb"
              style={{ backgroundImage: "url(/assets/img/inner-project/hero/hero-bg.jpg)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content">
                      <span className="tm-hero-subtitle">TheXMedia</span>
                      <h4 className="tm-hero-title tp-char-animation">
                        Our Clients – Who We Work With
                      </h4>
                    </div>
                    <div className="tm-hero-text">
                      <p className="tp_title_anim">
                        At TheXMedia, we&apos;re proud to work with professionals who are serious about growing their brand, reaching new audiences, and converting attention into action.
                      </p>
                    </div>
                    <div className="tm-hero-description tp_fade_bottom mt-4">
                      <p>
                        Whether you&apos;re a realtor, mortgage agent, lawyer, CA, or service-based entrepreneur, our clients are united by one goal: to lead in their industry by showing up with powerful, organic content that works.
                      </p>
                      <p className="mt-3">
                        We don&apos;t just work for our clients—we grow with them. We take their business as seriously as our own, helping them not only go viral but also build sales teams, business development pipelines, and internal processes. From automations to SOPs, we create systems that help them scale with clarity and confidence.
                      </p>
                      <p className="mt-3">
                        Below are some of the incredible professionals and businesses we&apos;ve helped go viral, build systems, and generate real business results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}

            {/* portfolio area */}
            <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90">
                      <h4 className="tp-service-5-title tp-char-animation">
                        Client Profiles
                      </h4>
                      <p className="tp_fade_bottom">
                        You can now follow this section with individual client spotlights, testimonials, case studies, or social media highlights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio area */}

            {/* client profiles area */}
            <ProjectFive style_2={true} />
            {/* client profiles area */}

            {/* big text */}
            <BigText/>
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioStandardMain;
