"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
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
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div
            className="inner-bg"
            style={{
              backgroundImage:
                "url(/assets/img/home-01/team/team-details-bg.png)",
            }}
          >
            <main>
              {/* AI Content Hero */}
              <div className="tm-hero-area tm-hero-ptb">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tm-hero-content">
                        <span className="tm-hero-subtitle">TheXMedia</span>
                        <h4 className="tm-hero-title tp-char-animation">
                          AI-Driven Content Creation
                        </h4>
                      </div>
                      <div className="tm-hero-text tp_title_anim">
                        <p>
                          Build Your Personal Brand Without Repeating Yourself on Camera
                        </p>
                      </div>
                      <div className="tm-hero-description tp_fade_bottom">
                        <p>
                          At TheXMedia, we&apos;re helping entrepreneurs, executives, and content-driven professionals scale their brand presence using the power of AI. If you&apos;ve ever felt like content creation is too time-consuming — this is for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* AI Content Hero */}

              {/* How It Works Section */}
              <div className="tp-service-5-area sv-service-style pb-70">
                <div className="container container-1530">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tp-service-5-title-box mb-90">
                        <h4 className="tp-service-5-title tp-char-animation">
                          How It Works
                        </h4>
                        <p className="tp_fade_bottom">
                          One short video or audio session is all we need to capture your voice, presence, and tone.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            Shoot Once, Scale Forever
                          </h4>
                          <p>One short video or audio session is all we need to capture your voice, presence, and tone.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            AI Avatar + AI Voice
                          </h4>
                          <p>Using tools like HeyGen and ElevenLabs, we create a lifelike avatar and clone your voice to speak exactly like you — no green screen or studio required.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            Scriptwriting & Content Strategy
                          </h4>
                          <p>We craft viral-ready scripts designed to educate, entertain, and convert — personalized to your niche and voice.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            Full AI-Enhanced Video Production
                          </h4>
                          <p>Our expert editors combine your avatar, AI voice, engaging visuals, hooks, captions, and effects into scroll-stopping content people want to watch and share.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* How It Works Section */}

              {/* Why It Works Section */}
              <div className="tp-service-5-area sv-service-style pb-70">
                <div className="container container-1530">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tp-service-5-title-box mb-90">
                        <h4 className="tp-service-5-title tp-char-animation">
                          Why It Works
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            ✅ No More Daily Shoots
                          </h4>
                          <p>Focus on your business while we generate content for you.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            ✅ Massive Scale, Zero Burnout
                          </h4>
                          <p>Repurpose your voice and face into dozens of videos a week.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            ✅ Authentic & Relatable
                          </h4>
                          <p>AI models are trained on you, so it still feels real.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            ✅ Always-On Presence
                          </h4>
                          <p>Show up for your audience consistently across every platform.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Why It Works Section */}

              {/* Who It's For Section */}
              <div className="tp-service-5-area sv-service-style pb-70">
                <div className="container container-1530">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tp-service-5-title-box mb-90">
                        <h4 className="tp-service-5-title tp-char-animation">
                          Who It&apos;s For
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            Entrepreneurs
                          </h4>
                          <p>Who want to dominate their niche</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            Founders & Execs
                          </h4>
                          <p>Building authority and personal brand</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            Coaches & Creators
                          </h4>
                          <p>Scaling personal brands efficiently</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            Busy Professionals
                          </h4>
                          <p>Too busy for weekly filming</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                      <div className="tp-service-5-item tp_fade_bottom space-1">
                        <div className="tp-service-4-content">
                          <h4 className="tp-service-4-title-sm tp-text-black">
                            Growth-Focused
                          </h4>
                          <p>Anyone ready to grow faster — with less effort</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Who It's For Section */}

              {/* The New Wave Section */}
              <div className="tp-service-5-area sv-service-style pb-70">
                <div className="container container-1530">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tp-service-5-title-box mb-90">
                        <h4 className="tp-service-5-title tp-char-animation">
                          The New Wave of Personal Branding
                        </h4>
                        <p className="tp_fade_bottom">
                          AI-generated content isn&apos;t the future — it&apos;s the now. The most effective creators are building influence at scale with AI-powered videos. With TheXMedia, you&apos;re not just following the trend — you&apos;re leading it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* The New Wave Section */}

              {/* CTA Section */}
              <div className="tp-service-5-area sv-service-style pb-70">
                <div className="container container-1530">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="tp-service-5-title-box mb-90 text-center">
                        <h4 className="tp-service-5-title tp-char-animation">
                          Ready to Go Viral on Autopilot?
                        </h4>
                        <p className="tp_fade_bottom">
                          Let&apos;s turn your face and voice into a 24/7 content machine that brings visibility, authority, and revenue.
                        </p>
                        <div className="tp-hero-btn mt-40">
                          <a href="/contact" className="tp-btn tp-btn-2 tp-btn-hover">
                            Book Your AI Content Demo
                            <span className="tp-btn-icon">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* CTA Section */}

              {/* big text */}
              <BigText />
              {/* big text */}
            </main>

            {/* footer area */}
            <FooterTwo topCls="" />
            {/* footer area */}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AiContentMain;
