import React, { CSSProperties } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import OptimizedVideo from '@/components/ui/optimized-video';
// images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';

// videos from reels directory
const video_1 = '/assets/reels/the_x_media-01.mp4';
const video_2 = '/assets/reels/the_x_media-02.mp4';
const video_3 = '/assets/reels/the_x_media-03.mp4';
const video_4 = '/assets/reels/the_x_media-04.mp4';
const video_5 = '/assets/reels/the_x_media-05.mp4';

const gallery_videos = [
  video_1, video_2, video_3, video_4, video_5, video_3, video_1, video_2, video_3, video_4, video_5, video_3
]

const imgStyle:CSSProperties = {height: "auto"};

export default function GalleryOne() {
  return (
    <div className="tp-gallery-area fix p-relative">
      <div className="tp-gallery-shape-1">
        <Image className="img-1" src={shape_1} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_1} alt="shape" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <Image className="img-1" src={shape_2} alt="shape" style={imgStyle} />
        <Image className="img-2" src={shape_d_2} alt="shape" style={imgStyle} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active">
                <Marquee className="tp-gallery-titming" speed={100} direction='left'>

                  {gallery_videos.map((video, i) => (

                    <div key={i}>
                      <div className="tp-gallery-item mr-30">
                        <OptimizedVideo 
                          src={video} 
                          style={{ 
                            height: '600px', 
                            width: '400px', 
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                          muted
                          loop
                          autoPlay
                          playsInline
                          controls={false}
                          showSkeleton={true}
                        />
                      </div>
                    </div>
                  ))}

                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
