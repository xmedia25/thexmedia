"use client";
import { gsap } from "gsap";
import React, { useEffect } from "react";
import Head from "next/head";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import HeroBannerFour from "@/components/hero-banner/hero-banner-four";
import GalleryOne from "@/components/gallery/gallery-one";
import AboutThree from "@/components/about/about-three";
import BrandThree from "@/components/brand/brand-three";
import ProjectFour from "@/components/project/project-four";
import VideoThree from "@/components/video/video-three";
import ServiceFour from "@/components/service/service-four";
import ContactOne from "@/components/contact/contact-one";
import { textInvert } from "@/utils/text-invert";
import { fadeAnimation, revelAnimationOne } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";
import { ctaAnimation } from "@/utils/cta-anim";
import FooterOne from "@/layouts/footers/footer-one";
import ProjectFive from "@/components/project/project-five";
import TeamOne from "@/components/team/team-one";
import AboutWork from "@/components/work/about-work";
import ServicesGrid from "@/components/services/services-grid";

import { TestimonialHome } from "@/components/testimonial";

const HomeFourMain = () => {
  useScrollSmooth();
  useEffect(() => {
    document.body.classList.add("tp-smooth-scroll");
    
    return () => {
      document.body.classList.remove("tp-smooth-scroll");
    };
  }, []);

  // Add LeadConnector widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute("data-widget-id", "69b4e6f52e31766f245f1280");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      revelAnimationOne();
      projectThreeAnimation();
      ctaAnimation();
      textInvert();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <Head>
        <script 
          src="https://widgets.leadconnectorhq.com/loader.js"  
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" 
          data-widget-id="69b4e6f52e31766f245f1280"   
          async
        />
      </Head>
      <Wrapper>

        {/* header area start */}
        <HeaderFour />
        {/* header area end */}

        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>

              {/* hero area start */}
              <HeroBannerFour />
              {/* hero area end */}

              {/* gallery area start */}
              <GalleryOne />
              {/* gallery area end */}

              {/* about area start */}
              <AboutThree />


              {/* project area start */}
              <ProjectFour />
              {/* project area end */}

              <ServicesGrid />


              {/* service area start */}
              <ServiceFour />
              {/* service area end */}

              {/* testimonial area start */}
              <TestimonialHome />
              {/* testimonial area end */}

                          {/* contact area start */}
              <ContactOne />
              {/* contact area end */}

            

            </main>

            {/* footer area */}
            <FooterOne />
            {/* footer area */}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default HomeFourMain;