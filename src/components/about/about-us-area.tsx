import React from "react";
import Image from "next/image";
import { Hand } from "../svg";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/about-1.jpg";
import ab_2 from "@/assets/img/inner-about/about/about-3.jpg";
import ab_3 from "@/assets/img/inner-about/about/about-2.jpg";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
                <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Overview Section */}
        <div id="about-info" className="row mb-120">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <span>
                <Hand />
                Welcome!
              </span>
              <p className="tp-dropcap tp_fade_bottom">
                At TheXMedia, we help realtors, mortgage agents, lawyers, CAs, and other service professionals stand out and scale up by creating viral, organic content that drives real business results.
              </p>
              <p className="tp_fade_bottom mt-30">
                We started with a simple belief: professionals shouldn't need to rely solely on paid ads to grow. With the right content, storytelling, and automation, you can become a go-to name in your industry—organically.
              </p>
              <p className="tp_fade_bottom mt-30">
                What makes us different? We do it all. From ideation and scripting to direction, editing, and automated lead generation, our team handles the entire content-to-client journey. We don't just create videos—we build systems that attract, engage, and convert at scale.
              </p>
              <p className="tp_fade_bottom mt-30">
                We blend creativity with cutting-edge tech like AI-driven CRMs and automation tools, so while your content reaches millions, your backend never misses a beat. You focus on your expertise—we'll handle the visibility, engagement, and growth.
              </p>
              <p className="tp_fade_bottom mt-30">
                Welcome to the new era of marketing. Welcome to TheXMedia.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div id="our-story" className="row mb-120">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
                             <h3 className="mb-40 tp_fade_bottom" style={{color: 'white'}}>Our Story</h3>
              <p className="tp_fade_bottom">
                TheXMedia began as a personal mission. While working a 9-to-5 job as a millwright, I spent two years experimenting with content—everything from personal vlogs to social media trends—learning through trial and error. Over three years, I dove deep into how content really works. Eventually, I found my voice by talking about business ideas in Canada and launched the series "100 Business Ideas in 100 Days."
              </p>
              <p className="tp_fade_bottom mt-30">
                It went viral. Fast. We gained over 2 million followers across platforms, and our videos consistently hit 500K+ views—all shot from the front seat of a car using a regular iPhone. That's when I realized: it's not about fancy gear; it's about content that resonates, helps, and connects.
              </p>
              <p className="tp_fade_bottom mt-30">
                Then I met Dhruval, a seasoned entrepreneur and operations expert. While I mastered content, he mastered systems. Together, we built TheXMedia a perfect mix of creativity and structure. I bring the storytelling, Dhruval brings the backend and business-building power. Now, we help professionals go viral, stay consistent, and turn views into real revenue.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="row mb-120">
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h4 className="ab-about-category-title">
                    Why <br />
                    <span>CHOOSE US</span>
                  </h4>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        <li><strong>Real Results, Not Just Views</strong><br/>We create content and systems that generate real leads, build trust, and convert followers into paying clients.</li>
                        <li><strong>Built by Creators, Backed by Systems</strong><br/>We've lived the content grind and cracked the code on what goes viral, paired with business automation.</li>
                        <li><strong>End-to-End Service</strong><br/>From ideation to editing, automation to CRM setup—we do it all in one place.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                        <li><strong>AI & Automation First</strong><br/>We leverage the latest tools to ensure no lead goes cold and your backend runs like a machine.</li>
                        <li><strong>Personal Branding That Works</strong><br/>We build brands that feel real, relatable, and trustworthy—turning you into the go-to expert.</li>
                        <li><strong>Proven Track Record</strong><br/>Over 2 million followers, consistent viral videos, and successful client case studies.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Values Section */}
        <div className="row">
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                <div className="ab-about-category-list tp_fade_bottom">
                  <h5 className="mb-20" style={{color: 'white'}}>Our Mission</h5>
                  <p>To empower service professionals with powerful content and automation systems that generate impact, influence, and income—organically.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                <div className="ab-about-category-list tp_fade_bottom">
                  <h5 className="mb-20" style={{color: 'white'}}>Our Vision</h5>
                  <p>To be the leading content-driven growth agency for professionals in Canada and beyond—where creativity meets technology to build trusted personal brands at scale.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                <div className="ab-about-category-list tp_fade_bottom">
                  <h5 className="mb-20" style={{color: 'white'}}>Our Values</h5>
                  <ul className="mt-20">
                    <li><strong>Authenticity:</strong> We keep it real, on and off camera</li>
                    <li><strong>Innovation:</strong> We blend creativity with cutting-edge tech</li>
                    <li><strong>Results:</strong> We're focused on ROI, not just reach</li>
                    <li><strong>Partnership:</strong> We grow when our clients grow</li>
                    <li><strong>Simplicity:</strong> No fluff, no jargon—just systems that work</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
