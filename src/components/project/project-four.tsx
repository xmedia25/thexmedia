import React from "react";
import Image from "next/image";

import { ProjectShape, RightArrow } from "../svg";
// videos
const video_1 = '/assets/reels/lets_work/realters_1.mp4';
const video_2 = '/assets/reels/lets_work/realters_2.mp4';
const video_3 = '/assets/reels/lets_work/INVESTORS_1.mp4';
const video_4 = '/assets/reels/lets_work/INVESTORS_2.mp4';
const video_5 = '/assets/reels/lets_work/BUSINESSES_1.mp4';
const video_6 = '/assets/reels/lets_work/BUSINESSES_2.mp4';

import Link from "next/link";

// portfolio data
const project_data = [
  {
    id: 1,
    video_1: video_1,
    video_2: video_2,
    meta: "DEC 2024 . Creative",
    title: "Realtors ",
  },
  {
    id: 2,
    video_1: video_3,
    video_2: video_4,
    meta: "NOV 2024 . Creative",
    title: "Investors/ Lawyers",
  },
  {
    id: 3,
    video_1: video_5,
    video_2: video_6,
    meta: "OCT 2024 . Relish Immigration",
    title: "Businesses",
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
                    <div className="tp-project-3-thumb pro-img-1">
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
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <span className="tp-project-3-meta">{item.meta} </span>
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
                    <div className="tp-project-3-thumb pro-img-2">
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
