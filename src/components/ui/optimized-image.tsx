'use client';
import React, { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import SkeletonLoader from './skeleton-loader';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallback?: string;
  showSkeleton?: boolean;
  skeletonClassName?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallback = '/assets/img/placeholder.jpg',
  showSkeleton = true,
  skeletonClassName = '',
  className = '',
  style,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (fallback && fallback !== src) {
      setImageSrc(fallback);
    }
  };

  // If there's an error and no fallback, show skeleton
  if (hasError && !fallback) {
    return (
      <SkeletonLoader 
        type="image" 
        className={skeletonClassName}
        style={style}
      />
    );
  }

  return (
    <div className="optimized-image-container" style={{ position: 'relative' }}>
      {/* Show skeleton while loading */}
      {showSkeleton && isLoading && (
        <SkeletonLoader 
          type="image" 
          className={skeletonClassName}
          style={style}
        />
      )}
      
      {/* Actual image */}
      <Image
        src={imageSrc}
        alt={alt}
        className={`optimized-image ${className} ${isLoading ? 'image-loading' : 'image-loaded'}`}
        style={{
          ...style,
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
