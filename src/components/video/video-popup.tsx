"use client";
import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface VideoPopupProps {
  isVideoOpen: boolean;
  setIsVideoOpen: (isOpen: boolean) => void;
  videoId: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useGSAP(() => {
    if (isVideoOpen) {
      setIsLoading(true);
      gsap.to(".video-popup", {
        duration: 0.3,
        scale: 1,
        opacity: 1,
        ease: "power2.out",
      });
    } else {
      gsap.to(".video-popup", {
        duration: 0.3,
        scale: 0.8,
        opacity: 0,
        ease: "power2.in",
        onComplete: () => {
          setIsLoading(false);
        },
      });
    }
  }, [isVideoOpen]);

  const handleClose = () => {
    setIsVideoOpen(false);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  if (!isVideoOpen) return null;

  return (
    <div className="video-popup-overlay" onClick={handleClose}>
      <div className="video-popup" onClick={(e) => e.stopPropagation()}>
        <button className="video-popup-close" onClick={handleClose}>
          <i className="fa-light fa-xmark"></i>
        </button>
        
        {isLoading && (
          <div className="video-loading">
            <div className="loading-spinner"></div>
            <p>Loading video...</p>
          </div>
        )}

        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1${isMobile ? '&controls=1' : ''}`}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleVideoLoad}
            loading="lazy"
            style={{
              width: isMobile ? '100%' : '800px',
              height: isMobile ? '225px' : '450px',
              maxWidth: '100%',
              maxHeight: '100vh'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
