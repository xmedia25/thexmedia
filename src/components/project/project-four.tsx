import React from "react";
import Image from "next/image";

import { ProjectShape, RightArrow } from "../svg";
// videos
const video_1 = '/assets/reels/the_x_media-06.mp4';
const video_2 = '/assets/reels/lets_work/realters_2.mp4';
const video_3 = '/assets/reels/lets_work/INVESTORS_1.mp4';
const video_4 = '/assets/reels/the_x_media-03.mp4';
const video_5 = '/assets/reels/lets_work/BUSINESSES_1.mp4';
const video_6 = '/assets/reels/lets_work/BUSINESSES_2.mp4';

import Link from "next/link";

// portfolio data with Instagram links
const project_data = [
  {
    id: 1,
    video_1: video_1,
    video_2: video_2,
    meta: "DEC 2024 . Creative",
    title: "Realtors",
    instagram_1: "https://www.instagram.com/reel/DJwcdiXOgUa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
    instagram_2: "https://www.instagram.com/reel/DFu4KpaRPVF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
    instagram_title_1: "@thexmedia_",
    instagram_title_2: "@thexmedia_"
  },
  {
    id: 2,
    video_1: video_3,
    video_2: video_4,
    meta: "NOV 2024 . Creative",
    title: "Investors/ Lawyers",
    instagram_1: "https://www.instagram.com/thexmedia/",
    instagram_2: "https://www.instagram.com/thexmedia/",
    instagram_title_1: "@thexmedia_",
    instagram_title_2: "@thexmedia_"
  },
  {
    id: 3,
    video_1: video_5,
    video_2: video_6,
    meta: "OCT 2024 . Relish Immigration",
    title: "Businesses",
    instagram_1: "https://www.instagram.com/thexmedia/",
    instagram_2: "https://www.instagram.com/thexmedia/",
    instagram_title_1: "@thexmedia_",
    instagram_title_2: "@thexmedia_"
  }
];

// prop type
type IProps = {
  style_2?: boolean;
};
export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div className={`tp-project-3-area ${style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"}`}>
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Latest <span>Work</span>
                </h4>
                <div className="tp-project-3-btn-box">
                  <Link
                    className="tp-btn-zikzak p-relative"
                    href="/our-clients"
                  >
                    <span className="zikzak-content">
                      See <br /> All Project
                      <RightArrow clr="#19191A" />
                    </span>
                    <ProjectShape />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item, i) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1" style={{ position: 'relative' }}>
                      <video
                        src={item.video_1}
                        style={{
                          height: '700px',
                          width: '100%',
                          objectFit: 'cover',
                          borderRadius: '20px',
                          transformOrigin: 'bottom left',
                          transform: 'rotate(-2deg)',
                          position: 'relative',
                          zIndex: 2
                        }}
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                      {/* Instagram Link Overlay for Video 1 */}
                      <div 
                        className="instagram-overlay"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.8), rgba(255, 255, 255, 0.1))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'all 0.3s ease',
                          borderRadius: '20px',
                          cursor: 'pointer',
                          backdropFilter: 'blur(2px)',
                          zIndex: 3
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = '0';
                        }}
                        onClick={() => window.open(item.instagram_1, '_blank')}
                      >
                        <div style={{
                          textAlign: 'center',
                          color: 'white'
                        }}>
                          <div style={{
                            marginBottom: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                              }}
                            >
                              <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <div style={{
                            fontSize: '16px',
                            fontWeight: '600',
                            marginBottom: '5px'
                          }}>
                            View on Instagram
                          </div>
                          <div style={{
                            fontSize: '12px',
                            opacity: 0.8
                          }}>
                            {item.instagram_title_1}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <h4 className="tp-project-3-title-sm">
                        <Link href="/portfolio-details">{item.title}</Link>
                      </h4>
                      <Link
                        className="tp-btn-project-sm"
                        href="/portfolio-details"
                      >
                        See Project
                      </Link>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2" style={{ position: 'relative' }}>
                      <video
                        src={item.video_2}
                        style={{
                          height: '700px',
                          width: '100%',
                          objectFit: 'cover',
                          borderRadius: '20px',
                          transformOrigin: 'bottom right',
                          transform: 'rotate(2deg)',
                          position: 'relative',
                          zIndex: 1
                        }}
                        muted
                        loop
                        playsInline
                        autoPlay
                      />
                      {/* Instagram Link Overlay for Video 2 */}
                      <div 
                        className="instagram-overlay"
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.8), rgba(255, 255, 255, 0.1))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          opacity: 0,
                          transition: 'all 0.3s ease',
                          borderRadius: '20px',
                          cursor: 'pointer',
                          backdropFilter: 'blur(2px)',
                          zIndex: 2
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = '0';
                        }}
                        onClick={() => window.open(item.instagram_2, '_blank')}
                      >
                        <div style={{
                          textAlign: 'center',
                          color: 'white'
                        }}>
                          <div style={{
                            marginBottom: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              style={{
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                              }}
                            >
                              <path
                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                                fill="white"
                              />
                            </svg>
                          </div>
                          <div style={{
                            fontSize: '16px',
                            fontWeight: '600',
                            marginBottom: '5px'
                          }}>
                            View on Instagram
                          </div>
                          <div style={{
                            fontSize: '12px',
                            opacity: 0.8
                          }}>
                            {item.instagram_title_2}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
