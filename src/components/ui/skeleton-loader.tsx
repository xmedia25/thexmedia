import React from 'react';

interface SkeletonLoaderProps {
  type: 'image' | 'video';
  width?: string | number;
  height?: string | number;
  className?: string;
  style?: React.CSSProperties;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({ 
  type, 
  width = '100%', 
  height = 'auto',
  className = '',
  style
}) => {
  const isImage = type === 'image';
  const isVideo = type === 'video';

  return (
    <div 
      className={`skeleton-loader ${type}-skeleton ${className}`}
      style={{ 
        ...style,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        aspectRatio: isVideo ? '16/9' : undefined
      }}
    >
      {isImage && (
        <div className="skeleton-image">
          <div className="skeleton-shimmer"></div>
          <div className="skeleton-placeholder">
            <div className="skeleton-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
              </svg>
            </div>
          </div>
        </div>
      )}
      
      {isVideo && (
        <div className="skeleton-video">
          <div className="skeleton-shimmer"></div>
          <div className="skeleton-placeholder">
            <div className="skeleton-play-button">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div className="skeleton-video-info">
              <div className="skeleton-title"></div>
              <div className="skeleton-subtitle"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkeletonLoader;
