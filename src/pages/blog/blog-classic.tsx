"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation } from "@/utils/title-animation";
import BlogClassicSlider from "@/components/blog/slider/blog-classic-slider";
import BlogClassicArea from "@/components/blog/blog-classic-area";
import VideoPopup from "@/components/modal/video-popup";
import FooterOne from "@/layouts/footers/footer-one";

const BlogClassicMain = () => {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  const [videoId, setVideoId] = React.useState("rVHxkxJM3rY");
  useScrollSmooth();  

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderFour />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* blog classic hero start */}
            <BlogClassicSlider />
            {/* blog classic hero end */}

            {/* blog classic area area */}
            <BlogClassicArea setIsVideoOpen={setIsVideoOpen} setVideoId={setVideoId} />
            {/* blog classic area area */}
          </main>

          {/* footer area */}
          <FooterOne />
          {/* footer area */}
        </div>
      </div>

      {/* video popup */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={videoId}
      />
      {/* video popup */}
    </Wrapper>
  );
};

export default BlogClassicMain;
