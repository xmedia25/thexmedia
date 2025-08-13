'use client';
import React from 'react';
import OptimizedVideo from '@/components/ui/optimized-video';

const VideoOne = () => {
  
  return (
    <div className="tp-hero-bottom-img-wrap">
      <div className="tp-hero-bottom-img">
        <OptimizedVideo 
          src="https://html.hixstudio.net/videos/The-X-Media/The-X-Media.mp4"
          loop={true} 
          muted={true} 
          autoPlay={true} 
          playsInline={true}
          controls={false}
          showSkeleton={true}
        />
      </div>
    </div>
  );
};

export default VideoOne;