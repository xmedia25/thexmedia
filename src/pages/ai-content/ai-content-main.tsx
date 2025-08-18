"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderFour from "@/layouts/headers/header-four";
import BigText from "@/components/big-text";
import FooterOne from "@/layouts/footers/footer-one";
import Image from "next/image";
// icons
import Check from "@/components/svg/check";
import AiBrain from "@/components/svg/ai-brain";
import VideoCamera from "@/components/svg/video-camera";
import Rocket from "@/components/svg/rocket";
import StarSquare from "@/components/svg/star-square";
import { RightArrowTwo, ArrowBg } from "@/components/svg";

// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";

const AiContentMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
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
              {/* AI Content Hero */}
              <div className="sv-hero-area sv-hero-ptb">
                <div className="container container-1530">
                  <div className="row">
                    <div className="col-xl-10">
                      <div className="sv-hero-title-box">
                        <h4 className="sv-hero-title tp-char-animation">
                          AI-Driven Content Creation
                        </h4>
                        <p className="tp_fade_bottom">
                          Build Your Personal Brand Without Repeating Yourself on Camera
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="sv-hero-thumb p-relative">
                        <div className="sv-hero-thumb-box">
                          <Image 
                            src="/assets/img/inner-service/service/service-1.jpg" 
                            alt="AI Content Creation" 
                            width={1200} 
                            height={600}
                            className="img-fluid rounded-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* AI Content Hero */}

              {/* Transform Your Content Creation - CTA Style */}
              <div className="tp-services-grid-section pt-80 pb-80">
                <div className="container container-1530">
                  <div className="row">
                    <div className="col-xl-10 mx-auto">
                      <div className="tp-service-card text-center">
                        <div className="tp-service-card-content">
                          <h2 className="tp-section-title-2 mb-30 tp-char-animation">
                            Transform Your <span>Content Creation</span>
                          </h2>
                          <p className="tp-section-text tp_fade_bottom">
                            At TheXMedia, we&apos;re helping entrepreneurs, executives, and content-driven professionals scale their brand presence using the power of AI. If you&apos;ve ever felt like content creation is too time-consuming — this is for you.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Transform Your Content Creation - CTA Style */}

              {/* How It Works Section */}
              <div className="tp-services-grid-section pt-80 pb-80">
                <div className="container container-1530">
                  <div className="row justify-content-center mb-60">
                    <div className="col-xl-8">
                      <div className="tp-section-header text-center">
                        <h2 className="tp-section-title-2 mb-20">
                          How It <span>Works</span>
                        </h2>
                        <p className="tp-section-text">
                          One short video or audio session is all we need to capture your voice, presence, and tone.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-icon mb-30">
                            <VideoCamera />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                            Shoot Once, Scale Forever
                          </h3>
                          <p className="tp-service-card-desc">One short video or audio session is all we need to capture your voice, presence, and tone.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-icon mb-30">
                            <AiBrain />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                            AI Avatar + AI Voice
                          </h3>
                          <p className="tp-service-card-desc">Using tools like HeyGen and ElevenLabs, we create a lifelike avatar and clone your voice to speak exactly like you — no green screen or studio required.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-icon mb-30">
                            <StarSquare />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                            Scriptwriting & Content Strategy
                          </h3>
                          <p className="tp-service-card-desc">We craft viral-ready scripts designed to educate, entertain, and convert — personalized to your niche and voice.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-icon mb-30">
                            <Rocket />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                            Full AI-Enhanced Video Production
                          </h3>
                          <p className="tp-service-card-desc">Our expert editors combine your avatar, AI voice, engaging visuals, hooks, captions, and effects into scroll-stopping content people want to watch and share.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* How It Works Section */}

              {/* Why It Works Section */}
              <div className="tp-services-grid-section pt-80 pb-80">
                <div className="container container-1530">
                  <div className="row justify-content-center mb-60">
                    <div className="col-xl-8">
                      <div className="tp-section-header text-center">
                        <h2 className="tp-section-title-2 mb-20">
                          Why It <span>Works</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-icon mb-30">
                            <Check />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                            No More Daily Shoots
                          </h3>
                          <p className="tp-service-card-desc">Focus on your business while we generate content for you.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-icon mb-30">
                            <Rocket />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                             Massive Scale, Zero Burnout
                          </h3>
                          <p className="tp-service-card-desc">Repurpose your voice and face into dozens of videos a week.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-icon mb-30">
                            <StarSquare />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                             Authentic & Relatable
                          </h3>
                          <p className="tp-service-card-desc">AI models are trained on you, so it still feels real.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-icon mb-30">
                            <Check />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                            Always-On Presence
                          </h3>
                          <p className="tp-service-card-desc">Show up for your audience consistently across every platform.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Why It Works Section */}

              {/* Who It's For Section */}
              <div className="tp-services-grid-section pt-80 pb-80">
                <div className="container container-1530">
                  <div className="row justify-content-center mb-60">
                    <div className="col-xl-8">
                      <div className="tp-section-header text-center">
                        <h2 className="tp-section-title-2 mb-20">
                          Who It&apos;s <span>For</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <h3 className="tp-service-card-title mb-20">
                            Entrepreneurs
                          </h3>
                          <p className="tp-service-card-desc">Who want to dominate their niche</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <h3 className="tp-service-card-title mb-20">
                            Founders & Execs
                          </h3>
                          <p className="tp-service-card-desc">Building authority and personal brand</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <h3 className="tp-service-card-title mb-20">
                            Coaches & Creators
                          </h3>
                          <p className="tp-service-card-desc">Scaling personal brands efficiently</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <h3 className="tp-service-card-title mb-20">
                            Busy Professionals
                          </h3>
                          <p className="tp-service-card-desc">Too busy for weekly filming</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <h3 className="tp-service-card-title mb-20">
                            Growth-Focused
                          </h3>
                          <p className="tp-service-card-desc">Anyone ready to grow faster — with less effort</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Who It's For Section */}

              {/* Visual Showcase Section */}
              <div className="tp-services-grid-section pt-80 pb-80">
                <div className="container container-1530">
                  <div className="row justify-content-center mb-60">
                    <div className="col-xl-8">
                      <div className="tp-section-header text-center">
                        <h2 className="tp-section-title-2 mb-20">
                          AI Content in <span>Action</span>
                        </h2>
                        <p className="tp-section-text">
                          See how our AI-powered content creation transforms your brand presence
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-image mb-30">
                            <Image 
                              src="/assets/img/inner-service/service/service-2.jpg" 
                              alt="AI Content Creation Process" 
                              width={300} 
                              height={200}
                              className="img-fluid rounded-3"
                            />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                            Content Strategy
                          </h3>
                          <p className="tp-service-card-desc">Strategic planning for maximum engagement and reach</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-image mb-30">
                            <Image 
                              src="/assets/img/inner-service/service/service-3.jpg" 
                              alt="AI Video Production" 
                              width={300} 
                              height={200}
                              className="img-fluid rounded-3"
                            />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                            Video Production
                          </h3>
                          <p className="tp-service-card-desc">Professional editing and AI enhancement</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-image mb-30">
                            <Image 
                              src="/assets/img/inner-service/service/service-4.jpg" 
                              alt="Content Distribution" 
                              width={300} 
                              height={200}
                              className="img-fluid rounded-3"
                            />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                            Multi-Platform
                          </h3>
                          <p className="tp-service-card-desc">Optimized content for all social platforms</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Visual Showcase Section */}

              {/* The New Wave Section */}
              <div className="tp-services-grid-section pt-80 pb-80">
                <div className="container container-1530">
                  <div className="row justify-content-center mb-60">
                    <div className="col-xl-8">
                      <div className="tp-section-header text-center">
                        <h2 className="tp-section-title-2 mb-20">
                          The New Wave of <span>Personal Branding</span>
                        </h2>
                        <p className="tp-section-text">
                          AI-generated content isn&apos;t the future — it&apos;s the now. The most effective creators are building influence at scale with AI-powered videos. With TheXMedia, you&apos;re not just following the trend — you&apos;re leading it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-icon mb-30">
                            <Rocket />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                            Lightning Fast
                          </h3>
                          <p className="tp-service-card-desc">Generate high-quality content in seconds, not hours</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                      <div className="tp-service-card tp_fade_bottom">
                        <div className="tp-service-card-content">
                          <div className="tp-service-card-icon mb-30">
                            <StarSquare />
                          </div>
                          <h3 className="tp-service-card-title mb-20">
                            Global Reach
                          </h3>
                          <p className="tp-service-card-desc">Multi-language support for worldwide audience engagement</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* The New Wave Section */}

              {/* CTA Section */}
              <div className="tp-services-grid-section pt-80 pb-80">
                <div className="container container-1530">
                  <div className="row">
                    <div className="col-xl-8 mx-auto">
                      <div className="tp-service-card text-center">
                        <div className="tp-service-card-content">
                          <h3 className="tp-service-card-title mb-20 tp-char-animation">
                            Ready to Go Viral on Autopilot?
                          </h3>
                          <p className="tp-service-card-desc tp_fade_bottom">
                            Let&apos;s turn your face and voice into a 24/7 content machine that brings visibility, authority, and revenue.
                          </p>
                          <div className="tp-hero-btn mt-30">
                            <a href="https://crm.thexmedia.com/widget/booking/49CNEuLUWgqv6vOPwV7t" className="tp-btn-black-2" target="_blank">
                              Book Your AI Content Demo{" "}
                              <span className="p-relative">
                                <RightArrowTwo />
                                <ArrowBg />
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CTA Section */}

              {/* big text */}
              <div className="pt-80">
                <BigText />
              </div>
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

export default AiContentMain;
