"use client";
import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Testimonial data for Toronto-based business
interface TestimonialData {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  testimonial: string;
  rating: number;
  location: string;
}

const testimonialData: TestimonialData[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    position: "Real Estate Agent",
    company: "Royal LePage",
    image: "/assets/img/testimonials/client-1.svg",
    testimonial: "TheXMedia transformed our digital presence in Toronto's competitive real estate market. Their organic content strategy generated 150+ qualified leads in just 3 months. The AI automation handles inquiries 24/7, allowing me to focus on closing deals.",
    rating: 5,
    location: "Toronto, ON"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Mortgage Broker",
    company: "Dominion Lending",
    image: "/assets/img/testimonials/client-2.svg",
    testimonial: "Working with TheXMedia has been a game-changer for my mortgage business. Their content strategy helped me reach first-time homebuyers across the GTA. The lead generation system is incredible - I've closed 40% more deals this quarter.",
    rating: 5,
    location: "Mississauga, ON"
  },
  {
    id: 3,
    name: "Jennifer Rodriguez",
    position: "Immigration Lawyer",
    company: "Rodriguez Law Firm",
    image: "/assets/img/testimonials/client-3.svg",
    testimonial: "TheXMedia's expertise in creating educational content for immigration law has positioned me as a trusted authority in Toronto's diverse community. Their viral content strategy brought in 200+ consultation requests in 2 months.",
    rating: 5,
    location: "Toronto, ON"
  }
];

const TestimonialHome: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
        style={{ 
          color: index < rating ? '#FFD700' : 'rgba(255,255,255,0.3)', 
          fontSize: '18px',
          marginRight: '2px'
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="tp-testimonial-home-area pt-130 pb-130" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(51,110,249,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(51,110,249,0.05) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="tp-testimonial-header text-center mb-80">
              <h2 className="tp-section-title-2 mb-30" style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '700',
                color: 'white',
                fontFamily: 'var(--tp-ff-marcellus)',
                lineHeight: '1.2',
                marginBottom: '20px'
              }}>
                What Our <span style={{ color: '#336EF9' }}>Toronto Clients</span> Say
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6',
                fontFamily: 'var(--tp-ff-marcellus)'
              }}>
                Discover how professionals across the Greater Toronto Area are growing their businesses with our proven digital marketing strategies.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          {testimonialData.map((testimonial, index) => (
            <div key={testimonial.id} className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div 
                className="tp-testimonial-card"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  height: '100%',
                  color: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 30px 60px rgba(51,110,249,0.2)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                }}
              >
                {/* Top gradient line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #336EF9, #5A8BFF, #336EF9)',
                  borderRadius: '20px 20px 0 0'
                }} />
                
                {/* Floating orb */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, rgba(51,110,249,0.3), rgba(90,139,255,0.3))',
                  borderRadius: '50%',
                  filter: 'blur(15px)',
                  animation: 'pulse 3s infinite'
                }} />
                
                {/* Client Image */}
                <div className="tp-testimonial-avatar mb-25" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #336EF9, #5A8BFF)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: 'bold',
                    color: 'white',
                    border: '3px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 10px 20px rgba(51,110,249,0.3)',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h5 style={{
                      margin: 0,
                      fontSize: '18px',
                      fontWeight: '700',
                      color: 'white',
                      fontFamily: 'var(--tp-ff-marcellus)'
                    }}>
                      {testimonial.name}
                    </h5>
                    <p style={{
                      margin: 0,
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.7)'
                    }}>
                      {testimonial.position}
                    </p>
                    <p style={{
                      margin: 0,
                      fontSize: '14px',
                      color: '#336EF9',
                      fontWeight: '600'
                    }}>
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="tp-testimonial-rating mb-20" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <div>{renderStars(testimonial.rating)}</div>
                  <span style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.6)'
                  }}>
                    ({testimonial.rating}.0)
                  </span>
                </div>
                
                {/* Testimonial Content */}
                <div className="tp-testimonial-content" style={{ flex: 1 }}>
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: 'rgba(255,255,255,0.9)',
                    fontStyle: 'italic',
                    marginBottom: '25px',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    "{testimonial.testimonial}"
                  </p>
                </div>
                
                {/* Location Badge */}
                <div className="tp-testimonial-location" style={{
                  marginTop: 'auto'
                }}>
                  <div style={{
                    background: 'rgba(51,110,249,0.2)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '15px',
                    padding: '8px 15px',
                    display: 'inline-block',
                    border: '1px solid rgba(51,110,249,0.3)',
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.8)',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    📍 {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="row justify-content-center mt-60">
          <div className="col-xl-6 text-center">
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
            }}>
              <h4 style={{
                color: 'white',
                marginBottom: '15px',
                fontFamily: 'var(--tp-ff-marcellus)',
                fontSize: '24px'
              }}>
                Ready to Join Them?
              </h4>
              <p style={{
                color: 'rgba(255,255,255,0.8)',
                marginBottom: '25px',
                fontSize: '16px'
              }}>
                Start your journey to digital success in Toronto's competitive market.
              </p>
              <a 
                href="/contact" 
                style={{
                  background: 'linear-gradient(135deg, #336EF9, #5A8BFF)',
                  color: 'white',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '16px',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  boxShadow: '0 10px 20px rgba(51,110,249,0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(51,110,249,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(51,110,249,0.3)';
                }}
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        
        @media (max-width: 768px) {
          .tp-testimonial-card {
            margin-bottom: 30px !important;
          }
          
          .tp-testimonial-avatar {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialHome;