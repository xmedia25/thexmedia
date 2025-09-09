import React, { CSSProperties, useState, useEffect } from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import OptimizedVideo from '@/components/ui/optimized-video';
// images
import shape_1 from '@/assets/img/home-03/gallery/gal-shape-1.png';
import shape_d_1 from '@/assets/img/home-03/gallery/gal-shape-dark-1.png';
import shape_2 from '@/assets/img/home-03/gallery/gal-shape-2.png';
import shape_d_2 from '@/assets/img/home-03/gallery/gal-shape-dark-2.png';

// Video data with Instagram links
const videoData = [
  {
    src: '/assets/reels/the_x_media-01.mp4',
    instagramLink: 'https://www.instagram.com/reel/DE452Tuxq_w/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D',
    target: '_blank',
    title: '@thexmedia_'
  },
  {
    src: '/assets/reels/the_x_media-02.mp4',
    instagramLink: 'https://www.instagram.com/reel/DIbp2tbxHFB/?utm_source=ig_web_copy_link',
    target: '_blank',
    title: '@thexmedia_'
  },
  {
    src: '/assets/reels/the_x_media-03.mp4',
    instagramLink: 'https://www.instagram.com/reel/DLkPGeQxkeq/?utm_source=ig_web_copy_link',
    target: '_blank',
    title: '@thexmedia_'
  },
  {
    src: '/assets/reels/the_x_media-04.mp4',
    instagramLink: 'https://www.instagram.com/reel/DKUl45wO31a/?utm_source=ig_web_copy_link',
    target: '_blank',
    title: '@thexmedia_'
  },
  {
    src: '/assets/reels/the_x_media-05.mp4',
    instagramLink: 'https://www.instagram.com/reel/DMkmbqYRAHO/?utm_source=ig_web_copy_link',
    target: '_blank',
    title: '@thexmedia_'
  },
  {
    src: '/assets/reels/the_x_media-06.mp4',
    instagramLink: 'https://www.instagram.com/reel/DJwcdiXOgUa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D',
    target: '_blank',
    title: '@thexmedia_'
  }
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
  const [gallery_videos, setGalleryVideos] = useState<typeof videoData>([]);
  const [marqueeSpeed, setMarqueeSpeed] = useState(100);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Set device-aware video count and performance settings
    const videoCount = getOptimalVideoCount();
    const isMobile = window.innerWidth <= 768;
    
    // Create optimized video array
    const optimizedVideos = videoData.slice(0, videoCount);
    setGalleryVideos(optimizedVideos);
    
    // Adjust marquee speed based on device for better auto-play experience
    setMarqueeSpeed(isMobile ? 30 : 50); // Slower speed for better video viewing experience
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
                  {gallery_videos.map((videoItem, i) => (
                    <div key={`${videoItem.src}-${i}`}>
                      <div className="tp-gallery-item mr-30" style={{ position: 'relative' }}>
                        <OptimizedVideo 
                          src={videoItem.src} 
                          style={{ 
                            height: '600px', 
                            width: '400px', 
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                          muted
                          loop
                          autoPlay={true} // Enable autoplay for gallery carousel
                          playsInline
                          controls={false}
                          showSkeleton={true}
                          lazyLoad={true}
                          rootMargin="100px" // Load videos earlier for smoother experience
                          threshold={0.1}
                          preload="metadata" // Only load metadata initially
                          onPerformanceMetrics={handleVideoPerformance}
                        />
                        {/* Instagram Link Overlay */}
                        <div 
                          className="instagram-overlay"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.7)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            opacity: 0,
                            transition: 'opacity 0.3s ease',
                            borderRadius: '8px',
                            cursor: 'pointer'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = '1';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = '0';
                          }}
                          onClick={() => window.open(videoItem.instagramLink, '_blank')}
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
                              {videoItem.title}
                            </div>
                          </div>
                        </div>
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
