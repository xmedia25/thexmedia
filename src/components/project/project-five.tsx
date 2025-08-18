import React from "react";
import Image from "next/image";
import LineTextFour from "../line-text/line-text-4";
import { UpArrow } from "../svg";
import Link from "next/link";
// images
import p_img_1 from "@/assets/img/home-05/project/project-4.jpg";
import p_img_2 from "@/assets/img/home-05/project/project-5.jpg";
import p_img_3 from "@/assets/img/home-05/project/project-6.jpg";
import p_img_4 from "@/assets/img/home-05/project/project-7.jpg";
import p_img_5 from "@/assets/img/home-05/project/project-8.jpg";
import p_img_6 from "@/assets/img/home-05/project/project-9.jpg";

const client_data = [
  {
    id: 1,
    title: "Real Estate Professionals",
    category: "Viral Content & SEO",
    img: p_img_1,
    description: "Realtors who dominate local search and generate qualified leads through organic content",
    services: ["SEO", "Content Creation", "Lead Generation"]
  },
  {
    id: 2,
    title: "Mortgage Agents",
    category: "Performance Marketing",
    img: p_img_2,
    description: "Mortgage professionals building trust and authority through strategic content marketing",
    services: ["Paid Ads", "Content Strategy", "Automation"]
  },
  {
    id: 3,
    title: "Legal Professionals",
    category: "Personal Branding",
    img: p_img_3,
    description: "Lawyers and CAs establishing thought leadership and client trust through content",
    services: ["Brand Building", "Content Creation", "CRM Setup"]
  },
  {
    id: 4,
    title: "Service Entrepreneurs",
    category: "Business Systems",
    img: p_img_4,
    description: "Local service businesses scaling with automation and lead generation systems",
    services: ["Process Automation", "Lead Nurturing", "Growth Systems"]
  },
  {
    id: 5,
    title: "Financial Advisors",
    category: "Content Marketing",
    img: p_img_5,
    description: "Financial professionals building credibility and client relationships through content",
    services: ["Content Strategy", "Social Media", "Lead Conversion"]
  },
  {
    id: 6,
    title: "Healthcare Providers",
    category: "Digital Presence",
    img: p_img_6,
    description: "Healthcare professionals expanding their reach and patient base through digital marketing",
    services: ["Website Development", "Content Marketing", "Patient Acquisition"]
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFive({ style_2 = false }: IProps) {
  return (
    <>
      <style jsx>{`
        .client-intro-content h3 {
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        .client-intro-content p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #e0e0e0;
        }
        .client-stats .stat-item h4 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .client-stats .stat-item p {
          font-size: 1rem;
          color: #b0b0b0;
          margin: 0;
        }
        .tp-project-5-2-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #d0d0d0;
          margin: 0.5rem 0;
        }
        .tp-project-5-2-services {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.75rem;
        }
        .service-tag {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>
      
      <div
        className={`tp-project-5-2-area pb-130 ${
          style_2 ? "" : "tp-project-5-2-pt black-bg"
        }`}
      >
        {!style_2 && (
          <div className="row">
            <div className="col-xl-12">
              <LineTextFour />
            </div>
          </div>
        )}
        
        {/* Client Introduction Section */}
        <div className="container mb-120 mt-120">

          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="client-intro-content">
                <h3 className="mb-30" style={{color: 'white'}}>Growing Together</h3>
                <p className="mb-30">
                  Whether you&apos;re a realtor, mortgage agent, lawyer, CA, or service-based entrepreneur, our clients are united by one goal: to lead in their industry by showing up with powerful, organic content that works.
                </p>
                <p className="mb-30">
                  We don&apos;t just work for our clients—we grow with them. We take their business as seriously as our own, helping them not only go viral but also build sales teams, business development pipelines, and internal processes. From automations to SOPs, we create systems that help them scale with clarity and confidence.
                </p>
                <p>
                  Below are some of the incredible professionals and businesses we&apos;ve helped go viral, build systems, and generate real business results.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
              <div className="client-stats">
                <div className="stat-item mb-30">
                  <h4 style={{color: 'white'}}>2M+</h4>
                  <p>Followers Across Platforms</p>
                </div>
                <div className="stat-item mb-30">
                  <h4 style={{color: 'white'}}>500K+</h4>
                  <p>Average Video Views</p>
                </div>
                <div className="stat-item">
                  <h4 style={{color: 'white'}}>100%</h4>
                  <p>Client Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Portfolio Grid */}
        <div className="container">
          <div className="row gx-140">
            {client_data.map((item) => (
              <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                <div
                  className="tp-project-5-2-thumb fix mb-140 p-relative not-hide-cursor"
                  data-cursor="View<br>Details"
                >
                  <Link className="cursor-hide" href="/portfolio-details">
                    <span className="tp_img_reveal">
                      <div className="tp_img_reveal">
                        <Image
                          src={item.img}
                          alt="client-portfolio-img"
                          style={{ height: "auto" }}
                        />
                      </div>
                    </span>
                    <div className="tp-project-5-2-category tp_fade_anim">
                      <span>{item.category}</span>
                    </div>
                    <div className="tp-project-5-2-content tp_fade_anim">
                      <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                      <p className="tp-project-5-2-description">{item.description}</p>
                      <div className="tp-project-5-2-services">
                        {item.services.map((service, index) => (
                          <span key={index} className="service-tag">{service}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-projct-5-2-btn-box d-flex justify-content-center">
                <div className="tp-hover-btn-wrapper">
                  <Link
                    className={`tp-btn-circle ${
                      style_2 ? "style-2" : ""
                    } tp-hover-btn-item tp-hover-btn`}
                    href="/contact"
                  >
                    <span className="tp-btn-circle-text">
                      Join Our <br /> Client Family
                    </span>
                    <span className="tp-btn-circle-icon">
                      <UpArrow />
                    </span>
                    <i className="tp-btn-circle-dot"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
