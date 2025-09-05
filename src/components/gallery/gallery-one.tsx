import React, { CSSProperties, useState, useEffect } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import OptimizedVideo from '@/components/ui/optimized-video';
// images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';

// videos from reels directory with quality options
const video_1 = '/assets/reels/the_x_media-01.mp4';
const video_2 = '/assets/reels/the_x_media-02.mp4';
const video_3 = '/assets/reels/the_x_media-03.mp4';
const video_4 = '/assets/reels/the_x_media-04.mp4';
const video_5 = '/assets/reels/the_x_media-05.mp4';

// Reduced video array for better performance
const all_gallery_videos = [
  video_1, video_2, video_3, video_4, video_5
];

// Device-aware video count
const getOptimalVideoCount = () => {
  if (typeof window === 'undefined') return 5;
  
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1024;
  
  if (isMobile) return 3; // Show fewer videos on mobile
  if (isTablet) return 4; // Moderate amount on tablet
  return 5; // Full amount on desktop
};

// Performance monitoring
const handleVideoPerformance = (metrics: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Video Performance:', metrics);
  }
};

const imgStyle:CSSProperties = {height: "auto"};

export default function GalleryOne() {
  const [gallery_videos, setGalleryVideos] = useState<string[]>([]);
  const [marqueeSpeed, setMarqueeSpeed] = useState(100);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Set device-aware video count and performance settings
    const videoCount = getOptimalVideoCount();
    const isMobile = window.innerWidth <= 768;
    
    // Create optimized video array
    const optimizedVideos = all_gallery_videos.slice(0, videoCount);
    setGalleryVideos(optimizedVideos);
    
    // Adjust marquee speed based on device
    setMarqueeSpeed(isMobile ? 50 : 80); // Slower on mobile for better performance
  }, []);

  if (!isClient) {
    return (
      <div className="tp-gallery-area fix p-relative">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-gallery-slider-wrap">
                <div className="swiper-container tp-gallery-slider-active">
                  <div className="tp-gallery-titming">
                    {/* Loading placeholder */}
                    <div style={{ height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      Loading gallery...
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
                <Marquee 
                  className="tp-gallery-titming" 
                  speed={marqueeSpeed} 
                  direction='left'
                  pauseOnHover={true}
                  gradient={false}
                >
                  {gallery_videos.map((video, i) => (
                    <div key={`${video}-${i}`}>
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
                          autoPlay={false} // Disable autoplay for better performance
                          playsInline
                          controls={false}
                          showSkeleton={true}
                          lazyLoad={true}
                          rootMargin="100px" // Load videos earlier for smoother experience
                          threshold={0.1}
                          preload="metadata" // Only load metadata initially
                          onPerformanceMetrics={handleVideoPerformance}
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
