"use client";
import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
    name: "Sarah Chen",
    position: "Marketing Director",
    company: "TechStart Solutions",
    image: "/assets/img/home-01/team/team-1-1.jpg",
    testimonial: "TheXMedia transformed our digital presence completely. Their strategic approach to content marketing helped us achieve 300% growth in lead generation within 6 months. The team's expertise in Toronto's competitive tech market is unmatched.",
    rating: 5,
    location: "Toronto, ON"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    position: "CEO",
    company: "GreenLeaf Consulting",
    image: "/assets/img/home-01/team/team-1-2.jpg",
    testimonial: "Working with TheXMedia was a game-changer for our sustainability consulting firm. Their content strategy not only increased our online visibility but also positioned us as thought leaders in the environmental sector across the GTA.",
    rating: 5,
    location: "Mississauga, ON"
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    position: "Immigration Lawyer",
    company: "Patel Law Associates",
    image: "/assets/img/home-01/team/team-1-3.jpg",
    testimonial: "TheXMedia's expertise in creating educational content for immigration law has positioned me as a trusted authority in Toronto's diverse community. Their viral content strategy brought in 200+ consultation requests in 2 months.",
    rating: 5,
    location: "Toronto, ON"
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Restaurant Owner",
    company: "Thompson's Bistro",
    image: "/assets/img/home-01/team/team-1-4.jpg",
    testimonial: "TheXMedia's local SEO and social media campaigns helped my restaurant become the #1 rated dining spot in Calgary. Our online orders increased by 250% and foot traffic doubled within 4 months.",
    rating: 5,
    location: "Calgary, AB"
  },
  {
    id: 5,
    name: "Jessica Park",
    position: "E-commerce Founder",
    company: "Park Fashion Co.",
    image: "/assets/img/home-01/team/team-1-5.jpg",
    testimonial: "Their influencer marketing strategy and content creation took our fashion brand from startup to 6-figure revenue in 8 months. TheXMedia's team understands the Canadian market like no other agency.",
    rating: 5,
    location: "Montreal, QC"
  },
  {
    id: 6,
    name: "Robert Kim",
    position: "Tech Startup CTO",
    company: "CloudTech Solutions",
    image: "/assets/img/home-01/team/team-1-6.jpg",
    testimonial: "TheXMedia's B2B content strategy and LinkedIn campaigns generated over 500 qualified leads for our SaaS platform. Their technical understanding and marketing expertise is unmatched.",
    rating: 5,
    location: "Ottawa, ON"
  },
  {
    id: 7,
    name: "Amanda Foster",
    position: "Real Estate Agent",
    company: "Foster Realty Group",
    image: "/assets/img/home-01/team/team-1-7.jpg",
    testimonial: "Thanks to TheXMedia's digital marketing strategies, I became the top-selling realtor in my area. Their video content and social media campaigns helped me close 40+ deals this year alone.",
    rating: 5,
    location: "Edmonton, AB"
  },
  {
    id: 8,
    name: "Carlos Mendez",
    position: "Fitness Studio Owner",
    company: "Mendez Fitness",
    image: "/assets/img/home-01/team/team-1-8.jpg",
    testimonial: "TheXMedia's health and wellness content strategy transformed my small gym into a thriving fitness community. Membership grew by 180% and we now have a 6-month waiting list.",
    rating: 5,
    location: "Winnipeg, MB"
  },
  {
    id: 9,
    name: "Lisa Chang",
    position: "Dental Practice Owner",
    company: "Chang Dental Care",
    image: "/assets/img/home-01/team/team-1-9.jpg",
    testimonial: "Their healthcare marketing expertise and patient education content helped my dental practice become fully booked. New patient inquiries increased by 320% in just 5 months.",
    rating: 5,
    location: "Halifax, NS"
  },
  {
    id: 10,
    name: "James Wilson",
    position: "Construction Company Owner",
    company: "Wilson Construction Ltd.",
    image: "/assets/img/home-01/team/team-1-1.jpg",
    testimonial: "TheXMedia's B2B marketing and project showcase content helped us land 3 major commercial contracts worth over $5M. Their understanding of the construction industry is impressive.",
    rating: 5,
    location: "Saskatoon, SK"
  },
  {
    id: 11,
    name: "Maria Santos",
    position: "Beauty Salon Owner",
    company: "Santos Beauty Studio",
    image: "/assets/img/home-01/team/team-1-2.jpg",
    testimonial: "Their beauty industry expertise and Instagram marketing strategies made my salon the most sought-after in the city. Bookings are now scheduled 2 months in advance.",
    rating: 5,
    location: "Victoria, BC"
  },
  {
    id: 12,
    name: "Kevin O'Brien",
    position: "Financial Advisor",
    company: "O'Brien Financial Services",
    image: "/assets/img/home-01/team/team-1-3.jpg",
    testimonial: "TheXMedia's financial services marketing and educational content positioning helped me build trust with clients. My practice grew by 200% and I now manage over $50M in assets.",
    rating: 5,
    location: "St. John's, NL"
  },
  {
    id: 13,
    name: "Sophie Dubois",
    position: "Boutique Owner",
    company: "Dubois Fashion Boutique",
    image: "/assets/img/home-01/team/team-1-4.jpg",
    testimonial: "Leur stratégie de marketing numérique a transformé ma boutique locale en une marque reconnue à travers le Québec. Les ventes en ligne ont augmenté de 400% en 6 mois.",
    rating: 5,
    location: "Quebec City, QC"
  }
];

const TestimonialHome: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        style={{ 
          color: index < rating ? '#FFD700' : 'rgba(255,255,255,0.3)', 
          fontSize: '16px',
          marginRight: '2px'
        }}
      >
        ★
      </span>
    ));
  };

  // Generate SVG avatar with initials
  const generateAvatar = (name: string, index: number) => {
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
      '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
      '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
    ];
    const bgColor = colors[index % colors.length];
    
    const svgString = `
      <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="30" fill="${bgColor}"/>
        <text x="30" y="38" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="20" font-weight="bold">
          ${initials}
        </text>
      </svg>
    `;
    
    return `data:image/svg+xml;base64,${btoa(svgString)}`;
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="tp-testimonial-home-area pt-130 pb-130" style={{
      background: 'transparent',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-about-content p-relative text-center mb-60">
              <h2 className="tp_fade_bottom mb-40" style={{color: 'white'}}>Client Testimonials</h2>
              <div className="col-xl-8 mx-auto">
                <div className="ab-about-card tp_fade_bottom" style={{
                  background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '30px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
                }}>
                  <p style={{fontSize: '18px', lineHeight: '1.7', color: 'white', margin: 0}}>
                    Discover how we&apos;ve helped businesses across the Greater Toronto Area achieve remarkable digital growth through strategic content creation and automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <Slider {...sliderSettings}>
              {testimonialData.map((testimonial, index) => (
                <div key={testimonial.id} className="px-3">
                  <div 
                    className="tp-testimonial-home-item ab-about-card tp_fade_bottom"
                    style={{
                      background: 'linear-gradient(135deg, rgba(30,30,30,0.9) 0%, rgba(20,20,20,0.95) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '20px',
                      padding: '35px',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                      height: '400px',
                      position: 'relative',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}

                  >
                    <div className="tp-testimonial-home-content">
                      <div className="tp-testimonial-home-user-info d-flex align-items-center mb-25">
                        <div className="tp-testimonial-home-avater">
                          <Image
                            src={generateAvatar(testimonial.name, index)}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            style={{
                              borderRadius: '50%',
                              objectFit: 'cover',
                              border: '3px solid rgba(255, 255, 255, 0.1)'
                            }}
                          />
                        </div>
                        <div className="tp-testimonial-home-user-content ml-20">
                          <h4 
                            className="mb-5"
                            style={{
                              color: 'white',
                              fontSize: '20px',
                              fontWeight: '600',
                              lineHeight: '1.2'
                            }}
                          >
                            {testimonial.name}
                          </h4>
                          <span 
                            className="d-block mb-5"
                            style={{
                              color: 'white',
                              fontSize: '14px',
                              fontWeight: '400',
                              opacity: '0.8'
                            }}
                          >
                            {testimonial.position} at {testimonial.company}
                          </span>
                          <div className="tp-testimonial-home-user-location">
                            <span style={{
                              color: 'white',
                              fontSize: '12px',
                              opacity: '0.6'
                            }}>
                              📍 {testimonial.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="tp-testimonial-home-rating mb-20">
                        <div className="tp-testimonial-home-rating-star">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                      
                      <div className="tp-testimonial-home-text flex-grow-1">
                        <p style={{
                          color: 'white',
                          fontSize: '16px',
                          lineHeight: '1.7',
                          margin: 0
                        }}>
                          &ldquo;{testimonial.testimonial}&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialHome;