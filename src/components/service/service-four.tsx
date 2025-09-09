import React from "react";
import OptimizedImage from "@/components/ui/optimized-image";
import Link from "next/link";
import { FirstBracket, FirstBracketTwo, RightArrow, SvgBg } from "../svg";
import icon from '@/assets/img/home-03/service/sv-icon-1.png';

const service_data = [
  {
    id: 1,
    title: "Ideation",
    desc: "We sit down with you to uncover your story — your experiences, insights, and journey. Through thoughtful conversations, we extract content that reflects your expertise and connects with your audience. It’s all about turning your knowledge into engaging ideas that position you as a leader in your industry.",
  },
  {
    id: 2,
    title: "Scripting",
    desc: "​​We turn your ideas into powerful scripts, the secret sauce behind every viral video. Our scripts are crafted with proven hooks and engaging storytelling that spark likes, shares, comments, and real conversations. It’s not just content; it’s strategy-driven storytelling that drives results.",
  },
  {
    id: 3,
    title: "Direction",
    desc: "We guide you through every step to bring out your best on camera. Our team helps you speak with confidence and clarity, making content feel natural and impactful. It’s not just about filming — it’s about showing the best version of you to the world.",
  },
  {
    id: 4,
    title: "Editing",
    desc: "Every script and video comes to life through modern, high-impact editing. We use viral visual hooks, catchy audio, and AI-enhanced content to make each piece scroll-stopping and share-worthy. Great editing turns creativity into a captivating experience people want to watch - again and again.",
  },
  {
    id: 5,
    title: "Leads/Automation",
    desc: "Going viral is just the beginning — we help you handle the buzz, effortlessly. Using AI and modern automation tools, we respond to DMs, explain your services, collect leads, and push them into your CRM — all without human intervention. You stay focused on your work, while our systems ensure every lead is tracked for smooth follow-ups and maximum conversions."
  },
  {
    id: 6,
    title: "Other Services",
    desc: "SEO, Business Consultancy, Performance Marketing (Meta, Google Ads) Website & App Development."
  }
  ];
export default function ServiceFour() {
  
  return (
    <div className="tp-service-3-area pt-130 pb-130" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      position: 'relative'
    }}>
      {/* Background overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 30% 20%, rgba(254, 216, 58, 0.05) 0%, transparent 50%),
                     radial-gradient(circle at 70% 80%, rgba(254, 216, 58, 0.03) 0%, transparent 50%)`,
        pointerEvents: 'none'
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row">
          <div className="col-xl-8 col-lg-10">
            <div className="tp-service-3-title-box mb-80 p-relative">
              <div className="tp-service-3-icon mb-30">
                <OptimizedImage src={icon} alt="icon" showSkeleton={true} />
              </div>
              
              <h4 className="tp-section-title-90 tp_text_invert tp_fade_bottom mb-20" style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '20px',
                textAlign: 'left'
              }}>
                Journey From Content to Business
              </h4>
              
              <p className="tp-section-text" style={{
                fontSize: '18px',
                color: '#cccccc',
                maxWidth: '600px',
                margin: '0',
                lineHeight: '1.6',
                textAlign: 'left'
              }}>
                Our comprehensive 6-step process transforms your expertise into engaging content and profitable business growth.
              </p>
            </div>
          </div>
        </div>

        <div className="tp-service-steps-container">
          {service_data.map((item, index) => (
            <div key={item.id} className="tp-service-3-wrap tp_fade_bottom mb-60" style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '40px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}>
              {/* Step number indicator */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '30px',
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #fed83a 0%, #e6c233 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: '700',
                color: '#000',
                boxShadow: '0 8px 25px rgba(254, 216, 58, 0.3)',
                zIndex: 10
              }}>
                {item.id}
              </div>
              
              {/* Progress line for connecting steps */}
              {index < service_data.length - 1 && (
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '2px',
                  height: '60px',
                  background: 'linear-gradient(to bottom, #fed83a, rgba(254, 216, 58, 0.3))',
                  zIndex: 1
                }}></div>
              )}
              
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3">
                  <div className="tp-service-3-title-box">
                    <h4 className="tp-service-3-title" style={{
                      fontSize: '28px',
                      fontWeight: '600',
                      color: '#ffffff',
                      marginBottom: '15px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      textAlign: 'left'
                    }}>
                      <Link href="/service" style={{
                        color: '#ffffff',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}>
                        {item.title}
                      </Link>
                    </h4>
                    
                    <div style={{
                      width: '50px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #fed83a, #e6c233)',
                      borderRadius: '2px',
                      marginBottom: '20px'
                    }}></div>
                  </div>
                </div>
                
                <div className="col-xl-7 col-lg-7">
                  <div className="tp-service-3-content">
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.7',
                      color: '#ffffff',
                      margin: '0',
                      textAlign: 'left'
                    }} dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                  </div>
                </div>
                
                <div className="col-xl-2 col-lg-2">
                  <div className="tp-service-3-btn-box" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '80px'
                  }}>
                    <style jsx>{`
                      @media (max-width: 991px) {
                        .tp-service-3-btn-box {
                          padding-top: 20px !important;
                        }
                      }
                      @media (max-width: 767px) {
                        .tp-service-3-btn-box {
                          padding-top: 15px !important;
                        }
                      }
                    `}</style>
                    <Link
                      className="tp-btn-black-sm"
                      href="/service"
                      style={{
                        background: 'linear-gradient(135deg, #fed83a 0%, #e6c233 100%)',
                        color: '#000',
                        border: '2px solid transparent',
                        borderRadius: '4px',
                        fontWeight: '500',
                        fontSize: '14px',
                        textTransform: 'capitalize',
                        letterSpacing: '0.03em',
                        transition: 'all 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 15px rgba(254, 216, 58, 0.25)',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = '#fed83a';
                        e.currentTarget.style.color = '#fed83a';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #fed83a 0%, #e6c233 100%)';
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.color = '#000';
                      }}
                    >
                      Details
                      <span style={{ marginLeft: '6px', transform: 'translateY(-1px)' }}>
                        <RightArrow clr="currentColor" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
