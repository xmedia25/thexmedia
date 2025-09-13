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

  
             {/* Main Header Section */}
        <div className="row mb-60">
          <div className="col-xxl-12">
            <div className="ab-about-content p-relative text-center mb-80">
              <span>
                <Hand />
                Welcome!
              </span>
              <h1 className="tp_fade_bottom mt-30 mb-40" style={{color: 'white', fontSize: '48px', fontWeight: 'bold', textAlign: 'center', marginBottom: '60px'}}>WE MAKE YOU VIRAL BADLY</h1>
            </div>
            
            {/* Mission, Vision & Values Section */}
            <div className="ab-about-content p-relative text-center mb-60">
              <h2 className="tp_fade_bottom mb-10" style={{color: 'white', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>Mission, Vision & Values</h2>
            </div>
            
            {/* Card Layout for Mission, Vision & Values */}
            <div className="row justify-content-center">
              {/* Our Mission Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%',
                  textAlign: 'center'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>Our Mission</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white', textAlign: 'left'}}>
                    To empower service professionals with powerful content and automation systems that generate impact, influence, and income—organically.
                  </p>
                </div>
              </div>
              
              {/* Our Vision Card */}
              <div className="col-xl-4 col-lg-4 col-md-6 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%',
                  textAlign: 'center'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>Our Vision</h4>
                  <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white', textAlign: 'left'}}>
                    To be the leading content-driven growth agency for professionals in Canada and beyond—where creativity meets technology to build trusted personal brands at scale.
                  </p>
                </div>
              </div>
              
              {/* Our Values Card */}
              <div className="col-xl-4 col-lg-4 col-md-12 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '35px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  height: '100%',
                  textAlign: 'center'
                }}>
                  <h4 className="mb-25" style={{color: 'white', fontSize: '22px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>Our Values</h4>
                  <div style={{fontSize: '16px', lineHeight: '1.7', color: 'white', textAlign: 'left'}}>
                    <div className="mb-15"><strong>Authenticity:</strong> We keep it real, on and off camera</div>
                    <div className="mb-15"><strong>Innovation:</strong> We blend creativity with cutting-edge tech</div>
                    <div className="mb-15"><strong>Results:</strong> We&apos;re focused on ROI, not just reach</div>
                    <div className="mb-15"><strong>Partnership:</strong> We grow when our clients grow</div>
                    <div><strong>Simplicity:</strong> No fluff, no jargon—just systems that work</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="row mb-60">
          <div className="col-xxl-12">
            <div className="row justify-content-center">
              {/* Agency Snapshots Card */}
              <div className="col-xl-8 col-lg-8 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  textAlign: 'center'
                }}>
                  <h3 className="mb-30" style={{color: 'white', fontSize: '24px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>Our Results Agency Snapshots</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div style={{padding: '20px', textAlign: 'center'}}>
                        <h2 style={{color: '#FFD700', fontSize: '48px', fontWeight: 'bold', marginBottom: '10px'}}>900 mil</h2>
                        <p style={{color: 'white', fontSize: '18px'}}>Total Views Generated</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div style={{padding: '20px', textAlign: 'center'}}>
                        <h2 style={{color: '#FFD700', fontSize: '48px', fontWeight: 'bold', marginBottom: '10px'}}>10 M</h2>
                        <p style={{color: 'white', fontSize: '18px'}}>Views Per Month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Overview Section */}
        <div id="about-info" className="row mb-80">
          <div className="col-xxl-12">
            <div className="ab-about-content p-relative text-center mb-60">
              <h2 className="tp_fade_bottom " style={{color: 'white', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>About TheXMedia</h2>
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
                  <div style={{textAlign: 'center'}}>
                   <h3 className="mb-30" style={{color: 'white', fontSize: '28px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>Who We Are</h3>
                   </div>
                   <p style={{fontSize: '18px', lineHeight: '1.8', color: 'white'}}>
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
                   height: '100%',
                   textAlign: 'center'
                 }}>
                   <h4 className="mb-25" style={{color: 'white', fontSize: '22px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>Our Philosophy</h4>
                   <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white', textAlign: 'left'}}>
                     We started with a simple belief: professionals shouldn&apos;t need to rely solely on paid ads to grow. With the right content, storytelling, and automation, you can become a go-to name in your industry—organically.
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
                   height: '100%',
                   textAlign: 'center'
                 }}>
                   <h4 className="mb-25" style={{color: 'white', fontSize: '22px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>What Makes Us Different</h4>
                   <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white', textAlign: 'left'}}>
                     We do it all. From ideation and scripting to direction, editing, and automated lead generation, our team handles the entire content-to-client journey. We don&apos;t just create videos—we build systems that attract, engage, and convert at scale.
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
                   height: '100%',
                   textAlign: 'center'
                 }}>
                   <h4 className="mb-25" style={{color: 'white', fontSize: '22px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>Technology & Innovation</h4>
                   <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white', textAlign: 'left'}}>
                     We blend creativity with cutting-edge tech like AI-driven CRMs and automation tools, so while your content reaches millions, your backend never misses a beat. You focus on your expertise—we&apos;ll handle the visibility, engagement, and growth.
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
                  <div className="p-relative text-center">
                    <h4 className="mb-25" style={{color: 'white', fontSize: '20px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>Welcome to the Future</h4>
                  </div>
                   <p style={{fontSize: '16px', lineHeight: '1.7', color: 'white', fontWeight: '500', textAlign: 'left'}}>
                     Welcome to the new era of marketing.<br/>
                     <span style={{color: 'white', fontSize: '18px', fontWeight: '600'}}>Welcome to TheXMedia.</span>
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div id="our-story" className="row mb-60">
          <div className="col-xxl-12">
            <div className="ab-about-content p-relative text-center mb-60">
              <h2 className="tp_fade_bottom mb-20" style={{color: 'white', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>OUR STORY</h2>
            </div>
            
            {/* Story Cards Layout */}
            <div className="row justify-content-center">
              {/* How It All Started */}
              <div className="col-xl-12 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  textAlign: 'center'
                }}>
                  <h3 className="mb-30" style={{color: 'white', fontSize: '28px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>HOW IT ALL STARTED</h3>
                  <p style={{fontSize: '18px', lineHeight: '1.8', color: 'white', textAlign: 'left'}}>
                    TheXMedia began as a personal mission. While working a 9-to-5 job as a millwright, I spent two years experimenting with content—everything from personal vlogs to social media trends—learning through trial and error. Over three years, I dove deep into how content really works.
                  </p>
                </div>
              </div>
              
              {/* The Breakthrough */}
              <div className="col-xl-12 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  textAlign: 'center'
                }}>
                  <h3 className="mb-30" style={{color: 'white', fontSize: '28px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>THE BREAKTHROUGH</h3>
                  <p style={{fontSize: '18px', lineHeight: '1.8', color: 'white', textAlign: 'left'}}>
                    Eventually, I found my voice by talking about business ideas in Canada and launched the series &ldquo;100 Business Ideas in 100 Days.&rdquo; It went viral. Fast. We gained over 2 million followers across platforms, and our videos consistently hit 500K+ views—all shot from the front seat of a car using a regular iPhone.
                  </p>
                </div>
              </div>
              
              {/* The Realization */}
              <div className="col-xl-12 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  textAlign: 'center'
                }}>
                  <h3 className="mb-30" style={{color: 'white', fontSize: '28px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>THE REALIZATION</h3>
                  <p style={{fontSize: '18px', lineHeight: '1.8', color: 'white', textAlign: 'left'}}>
                    That&rsquo;s when I realized: it&rsquo;s not about fancy gear; it&rsquo;s about content that resonates, helps, and connects. The magic happens when you understand your audience and deliver value consistently.
                  </p>
                </div>
              </div>
              
              {/* The Partnership */}
              <div className="col-xl-12 mb-40">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '40px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  textAlign: 'center'
                }}>
                  <h3 className="mb-30" style={{color: 'white', fontSize: '28px', borderBottom: '3px solid #FFD700', paddingBottom: '10px', display: 'inline-block'}}>THE PARTNERSHIP</h3>
                  <p style={{fontSize: '18px', lineHeight: '1.8', color: 'white', textAlign: 'left'}}>
                    Then I met Dhruval, a seasoned entrepreneur and operations expert. While I mastered content, he mastered systems. Together, we built TheXMedia—a perfect mix of creativity and structure. I bring the storytelling, Dhruval brings the backend and business-building power. Now, we help professionals go viral, stay consistent, and turn views into real revenue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
