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
          <div className="col-xxl-12">
            <div className="ab-about-content p-relative text-center mb-60">
              <span>
                <Hand />
                Welcome!
              </span>
              <h2 className="tp_fade_bottom mt-30 mb-40" style={{color: 'white'}}>About TheXMedia</h2>
            </div>
            
            {/* Card Layout for Company Description */}
            <div className="row">
              {/* Main Description Card */}
               <div className="col-xl-12 mb-40">
                 <div className="ab-about-card tp_fade_bottom" style={{
                   background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255,255,255,0.1)',
                   borderRadius: '20px',
                   padding: '40px',
                   boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
                 }}>
                   <h3 className="mb-30" style={{color: 'white', fontSize: '28px'}}>Who We Are</h3>
                   <p className="tp-dropcap" style={{fontSize: '18px', lineHeight: '1.8', color: 'white'}}>
                     At TheXMedia, we help realtors, mortgage agents, lawyers, CAs, and other service professionals stand out and scale up by creating viral, organic content that drives real business results.
                   </p>
                 </div>
               </div>
               
               {/* Philosophy Card */}
               <div className="col-xl-6 col-lg-6 mb-40">
                 <div className="ab-about-card tp_fade_bottom" style={{
                   background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255,255,255,0.1)',
                   borderRadius: '20px',
                   padding: '35px',
                   boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                   height: '100%'
                 }}>
                   <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>Our Philosophy</h4>
                   <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                     We started with a simple belief: professionals shouldn't need to rely solely on paid ads to grow. With the right content, storytelling, and automation, you can become a go-to name in your industry—organically.
                   </p>
                 </div>
               </div>
               
               {/* What Makes Us Different Card */}
               <div className="col-xl-6 col-lg-6 mb-40">
                 <div className="ab-about-card tp_fade_bottom" style={{
                   background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255,255,255,0.1)',
                   borderRadius: '20px',
                   padding: '35px',
                   boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                   height: '100%'
                 }}>
                   <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>What Makes Us Different</h4>
                   <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                     We do it all. From ideation and scripting to direction, editing, and automated lead generation, our team handles the entire content-to-client journey. We don't just create videos—we build systems that attract, engage, and convert at scale.
                   </p>
                 </div>
               </div>
               
               {/* Technology & Approach Card */}
               <div className="col-xl-8 col-lg-8 mb-40">
                 <div className="ab-about-card tp_fade_bottom" style={{
                   background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255,255,255,0.1)',
                   borderRadius: '20px',
                   padding: '35px',
                   boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                   height: '100%'
                 }}>
                   <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>Technology & Innovation</h4>
                   <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                     We blend creativity with cutting-edge tech like AI-driven CRMs and automation tools, so while your content reaches millions, your backend never misses a beat. You focus on your expertise—we'll handle the visibility, engagement, and growth.
                   </p>
                 </div>
               </div>
               
               {/* Welcome Message Card */}
               <div className="col-xl-4 col-lg-4 mb-40">
                 <div className="ab-about-card tp_fade_bottom" style={{
                   background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                   backdropFilter: 'blur(10px)',
                   border: '1px solid rgba(255,255,255,0.1)',
                   borderRadius: '20px',
                   padding: '35px',
                   boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                   height: '100%',
                   display: 'flex',
                   flexDirection: 'column',
                   justifyContent: 'center',
                   textAlign: 'center'
                 }}>
                   <h4 className="mb-25" style={{color: 'white', fontSize: '20px'}}>Welcome to the Future</h4>
                   <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white', fontWeight: '500'}}>
                     Welcome to the new era of marketing.<br/>
                     <span style={{color: 'white', fontSize: '18px', fontWeight: '600'}}>Welcome to TheXMedia.</span>
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div id="our-story" className="row mb-120">
          <div className="col-xxl-12">
            <div className="ab-about-content p-relative text-center mb-60">
              <h2 className="tp_fade_bottom mt-30 mb-40" style={{color: 'white'}}>Our Story</h2>
            </div>
            
            {/* Card Layout for Company Story */}
            <div className="row">
              {/* Origin Story Card */}
              <div className="col-xl-12 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
                }}>
                  <h3 className="mb-30" style={{color: 'white', fontSize: '28px'}}>How It All Started</h3>
                  <p className="tp-dropcap" style={{fontSize: '18px', lineHeight: '1.8', color: 'white'}}>
                    TheXMedia began as a personal mission. While working a 9-to-5 job as a millwright, I spent two years experimenting with content—everything from personal vlogs to social media trends—learning through trial and error. Over three years, I dove deep into how content really works.
                  </p>
                </div>
              </div>
              
              {/* Viral Success Card */}
              <div className="col-xl-6 col-lg-6 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>The Breakthrough</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                    Eventually, I found my voice by talking about business ideas in Canada and launched the series "100 Business Ideas in 100 Days." It went viral. Fast. We gained over 2 million followers across platforms, and our videos consistently hit 500K+ views—all shot from the front seat of a car using a regular iPhone.
                  </p>
                </div>
              </div>
              
              {/* Key Realization Card */}
              <div className="col-xl-6 col-lg-6 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>The Realization</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                    That&apos;s when I realized: it&apos;s not about fancy gear; it&apos;s about content that resonates, helps, and connects. The magic happens when you understand your audience and deliver value consistently.
                  </p>
                </div>
              </div>
              
              {/* Partnership Card */}
              <div className="col-xl-12 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>The Perfect Partnership</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                    Then I met Dhruval, a seasoned entrepreneur and operations expert. While I mastered content, he mastered systems. Together, we built TheXMedia—a perfect mix of creativity and structure. I bring the storytelling, Dhruval brings the backend and business-building power. Now, we help professionals go viral, stay consistent, and turn views into real revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div id="why-choose-us" className="row mb-120">
          <div className="col-xxl-12">
            <div className="ab-about-content p-relative text-center mb-60">
              <h2 className="tp_fade_bottom mt-30 mb-40" style={{color: 'white'}}>Why Choose Us</h2>
            </div>
            
            {/* Card Layout for Why Choose Us */}
            <div className="row">
              {/* Real Results Card */}
              <div className="col-xl-6 col-lg-6 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>Real Results, Not Just Views</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                    We create content and systems that generate real leads, build trust, and convert followers into paying clients.
                  </p>
                </div>
              </div>
              
              {/* Built by Creators Card */}
              <div className="col-xl-6 col-lg-6 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>Built by Creators, Backed by Systems</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                    We've lived the content grind and cracked the code on what goes viral, paired with business automation.
                  </p>
                </div>
              </div>
              
              {/* End-to-End Service Card */}
              <div className="col-xl-6 col-lg-6 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>End-to-End Service</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                    From ideation to editing, automation to CRM setup—we do it all in one place.
                  </p>
                </div>
              </div>
              
              {/* AI & Automation Card */}
              <div className="col-xl-6 col-lg-6 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>AI & Automation First</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                    We leverage the latest tools to ensure no lead goes cold and your backend runs like a machine.
                  </p>
                </div>
              </div>
              
              {/* Personal Branding Card */}
              <div className="col-xl-6 col-lg-6 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>Personal Branding That Works</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                    We build brands that feel real, relatable, and trustworthy—turning you into the go-to expert.
                  </p>
                </div>
              </div>
              
              {/* Proven Track Record Card */}
              <div className="col-xl-6 col-lg-6 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>Proven Track Record</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                    Over 2 million followers, consistent viral videos, and successful client case studies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Values Section */}
        <div className="row mb-120">
          <div className="col-xxl-12">
            <div className="ab-about-content p-relative text-center mb-60">
              <h2 className="tp_fade_bottom mt-30 mb-40" style={{color: 'white'}}>Mission, Vision & Values</h2>
            </div>
            
            {/* Card Layout for Mission, Vision & Values */}
            <div className="row">
              {/* Our Mission Card */}
              <div className="col-xl-4 col-lg-6 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>Our Mission</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                    To empower service professionals with powerful content and automation systems that generate impact, influence, and income—organically.
                  </p>
                </div>
              </div>
              
              {/* Our Vision Card */}
              <div className="col-xl-4 col-lg-6 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>Our Vision</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                    To be the leading content-driven growth agency for professionals in Canada and beyond—where creativity meets technology to build trusted personal brands at scale.
                  </p>
                </div>
              </div>
              
              {/* Our Values Card */}
              <div className="col-xl-4 col-lg-12 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px'}}>Our Values</h4>
                  <div style={{fontSize: '16px', lineHeight: '1.7', color: 'white'}}>
                    <div className="mb-15"><strong>Authenticity:</strong> We keep it real, on and off camera</div>
                    <div className="mb-15"><strong>Innovation:</strong> We blend creativity with cutting-edge tech</div>
                    <div className="mb-15"><strong>Results:</strong> We're focused on ROI, not just reach</div>
                    <div className="mb-15"><strong>Partnership:</strong> We grow when our clients grow</div>
                    <div><strong>Simplicity:</strong> No fluff, no jargon—just systems that work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
