'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import SkeletonLoader from './skeleton-loader';

interface VideoQuality {
  src: string;
  quality: 'low' | 'medium' | 'high';
  size?: number; // file size in bytes
}

interface OptimizedVideoProps {
  src: string | VideoQuality[];
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
  lazyLoad?: boolean;
  rootMargin?: string;
  threshold?: number;
  onLoadStart?: () => void;
  onCanPlay?: () => void;
  onError?: () => void;
  onPerformanceMetrics?: (metrics: any) => void;
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
  lazyLoad = true,
  rootMargin = '50px',
  threshold = 0.1,
  onLoadStart,
  onCanPlay,
  onError,
  onPerformanceMetrics,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(!lazyLoad);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast'>('fast');
  const [loadStartTime, setLoadStartTime] = useState<number>(0);
  const [isBuffering, setIsBuffering] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Detect connection speed
  const detectConnectionSpeed = useCallback(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const effectiveType = connection?.effectiveType;
      setConnectionSpeed(effectiveType === '4g' || effectiveType === '3g' ? 'fast' : 'slow');
    }
  }, []);

  // Select optimal video quality based on connection and device
  const selectOptimalQuality = useCallback((sources: VideoQuality[]) => {
    if (typeof src === 'string') return src;
    
    const isMobile = window.innerWidth <= 768;
    const isSlowConnection = connectionSpeed === 'slow';
    
    if (isSlowConnection || isMobile) {
      return sources.find(s => s.quality === 'low')?.src || sources[0]?.src || '';
    } else {
      return sources.find(s => s.quality === 'high')?.src || sources[sources.length - 1]?.src || '';
    }
  }, [connectionSpeed, src]);

  // Performance monitoring
  const reportPerformanceMetrics = useCallback((metrics: any) => {
    if (onPerformanceMetrics) {
      onPerformanceMetrics({
        loadTime: Date.now() - loadStartTime,
        videoSize: videoRef.current?.videoWidth || 0,
        quality: connectionSpeed,
        ...metrics
      });
    }
  }, [loadStartTime, connectionSpeed, onPerformanceMetrics]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazyLoad || !containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current?.disconnect();
        }
      },
      {
        rootMargin,
        threshold
      }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [lazyLoad, rootMargin, threshold]);

  // Initialize connection detection and video source
  useEffect(() => {
    detectConnectionSpeed();
    
    if (isInView) {
      const optimalSrc = Array.isArray(src) ? selectOptimalQuality(src) : src;
      setCurrentSrc(optimalSrc);
      setIsLoading(true);
      setHasError(false);
      setIsPlaying(false);
    }
  }, [src, isInView, detectConnectionSpeed, selectOptimalQuality]);

  // Memory cleanup
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = '';
        videoRef.current.load();
      }
    };
  }, []);

  const handleLoadStart = () => {
    setIsLoading(true);
    setLoadStartTime(Date.now());
    onLoadStart?.();
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    setIsBuffering(false);
    reportPerformanceMetrics({ event: 'canplay' });
    onCanPlay?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    reportPerformanceMetrics({ event: 'error' });
    onError?.();
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setIsBuffering(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleWaiting = () => {
    setIsBuffering(true);
  };

  const handlePlaying = () => {
    setIsBuffering(false);
  };

  const handleClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {
          // Handle autoplay restrictions
          setHasError(true);
        });
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
      ref={containerRef}
      className="optimized-video-container" 
      style={{ 
        position: 'relative',
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      {/* Show skeleton while loading or not in view */}
      {showSkeleton && (isLoading || !isInView) && (
        <SkeletonLoader 
          type="video" 
          width="100%"
          height="100%"
          className={skeletonClassName}
        />
      )}
      
      {/* Buffering indicator */}
      {isBuffering && (
        <div 
          className="video-buffering-indicator"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 3,
            color: '#fff',
            fontSize: '14px',
            background: 'rgba(0,0,0,0.7)',
            padding: '8px 12px',
            borderRadius: '4px'
          }}
        >
          Buffering...
        </div>
      )}
      
      {/* Video element - only render when in view */}
      {isInView && currentSrc && (
        <video
          ref={videoRef}
          src={currentSrc}
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
          autoPlay={autoPlay && isInView}
          playsInline={playsInline}
          preload={isInView ? preload : 'none'}
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          onError={handleError}
          onPlay={handlePlay}
          onPause={handlePause}
          onWaiting={handleWaiting}
          onPlaying={handlePlaying}
          onClick={handleClick}
          {...props}
        />
      )}

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
