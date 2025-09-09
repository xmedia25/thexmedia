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
import { charAnimation, titleAnimation, fadeAnimation } from "@/utils/title-animation";
import { imageRevealAnimation } from "@/utils/image-reveal-anim";
import { hoverBtn } from "@/utils/hover-btn";
import FooterOne from "@/layouts/footers/footer-one";


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
      fadeAnimation();
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
                    <div className="tm-hero-description tp_fade_bottom mt-4" style={{display: 'block', visibility: 'visible'}}>
                      <p style={{display: 'block', visibility: 'visible', color: 'white', fontSize: '18px', lineHeight: '1.6', opacity: 1}}>
                        At TheXMedia, we&apos;re proud to work with professionals who are serious about growing their brand, reaching new audiences, and converting attention into action.
                      </p>
                    </div>
                    <div className="tm-hero-description tp_fade_bottom mt-4" style={{display: 'block', visibility: 'visible'}}>
                      <p style={{display: 'block', visibility: 'visible', color: 'white', fontSize: '18px', lineHeight: '1.6', opacity: 1}}>
                        Whether you&apos;re a realtor, mortgage agent, lawyer, CA, or service-based entrepreneur, our clients are united by one goal: to lead in their industry by showing up with powerful, organic content that works.
                      </p>
                      <p className="mt-3" style={{display: 'block', visibility: 'visible', color: 'white', fontSize: '18px', lineHeight: '1.6', opacity: 1}}>
                        We don&apos;t just work for our clients—we grow with them. We take their business as seriously as our own, helping them not only go viral but also build sales teams, business development pipelines, and internal processes. From automations to SOPs, we create systems that help them scale with clarity and confidence.
                      </p>
                      <p className="mt-3" style={{display: 'block', visibility: 'visible', color: 'white', fontSize: '18px', lineHeight: '1.6', opacity: 1}}>
                        Below are some of the incredible professionals and businesses we&apos;ve helped go viral, build systems, and generate real business results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}

              <div className="tp-services-grid-section pt-80 pb-80">
                <div className="container container-1530">
                  <div className="row">
                    <div className="col-xl-10 mx-auto">
                      <div className="tp-service-card text-center" style={{
                        background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '20px',
                        padding: '40px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
                      }}>
                        <div className="tp-service-card-content">
                          <h2 className="tp-section-title-2 mb-30 tp-char-animation" style={{
                            color: 'white',
                            fontSize: '48px',
                            fontWeight: '700',
                            lineHeight: '1.2',
                            fontFamily: 'var(--tp-ff-marcellus)'
                          }}>
                            Client Profiles
                          </h2>
                          <p className="tp-section-text tp_fade_bottom" style={{
                            display: 'contents',
                            color: 'white',
                            fontSize: '18px',
                            fontWeight: '400',
                            lineHeight: '26px'
                          }}>
                            You can now follow this section with individual client spotlights, testimonials, case studies, or social media highlights.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            {/* portfolio area */}
            {/* <div className="tp-service-5-area sv-service-style pb-70">
              <div className="container container-1530">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-service-5-title-box mb-90 ">
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
            </div> */}
            {/* portfolio area */}

            {/* client profiles area */}
            <ProjectFive style_2={true} />

            {/* client profiles area */}



            {/* big text */}
            <BigText/>
            {/* big text */}


          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioStandardMain;
