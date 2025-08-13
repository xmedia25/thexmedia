'use client';
import React, { useState, useEffect, useRef } from 'react';
import SkeletonLoader from './skeleton-loader';

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  autoPlay?: boolean;
  playsInline?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
  showSkeleton?: boolean;
  skeletonClassName?: string;
  onLoadStart?: () => void;
  onCanPlay?: () => void;
  onError?: () => void;
}

const OptimizedVideo: React.FC<OptimizedVideoProps> = ({
  src,
  poster,
  width = '400px',
  height = '600px',
  className = '',
  style,
  controls = true,
  muted = false,
  loop = false,
  autoPlay = false,
  playsInline = false,
  preload = 'metadata',
  showSkeleton = true,
  skeletonClassName = '',
  onLoadStart,
  onCanPlay,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setIsPlaying(false);
  }, [src]);

  const handleLoadStart = () => {
    setIsLoading(true);
    onLoadStart?.();
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    onCanPlay?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  // If there's an error, show skeleton
  if (hasError) {
    return (
      <SkeletonLoader 
        type="video" 
        width={width}
        height={height}
        className={skeletonClassName}
      />
    );
  }

  return (
    <div 
      className="optimized-video-container" 
      style={{ 
        position: 'relative',
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      {/* Show skeleton while loading */}
      {showSkeleton && isLoading && (
        <SkeletonLoader 
          type="video" 
          width="100%"
          height="100%"
          className={skeletonClassName}
        />
      )}
      
      {/* Video element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className={`optimized-video ${className} ${isLoading ? 'video-loading' : 'video-loaded'}`}
        style={{
          ...style,
          width: '100%',
          height: '100%',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
        controls={controls}
        muted={muted}
        loop={loop}
        autoPlay={autoPlay}
        playsInline={playsInline}
        preload={preload}
        onLoadStart={handleLoadStart}
        onCanPlay={handleCanPlay}
        onError={handleError}
        onPlay={handlePlay}
        onPause={handlePause}
        onClick={handleClick}
        {...props}
      />

      {/* Custom play button overlay for better UX */}
      {!controls && !isPlaying && !isLoading && (
        <div 
          className="video-play-overlay"
          onClick={handleClick}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
            zIndex: 2,
          }}
        >
          <div className="play-button">
            <svg viewBox="0 0 24 24" fill="currentColor" width="48" height="48">
              <path d="M8 5v14l11-7z" fill="#fff"/>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedVideo;
