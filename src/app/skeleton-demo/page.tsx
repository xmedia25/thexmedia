'use client';
import React from 'react';
import OptimizedImage from '@/components/ui/optimized-image';
import OptimizedVideo from '@/components/ui/optimized-video';
import SkeletonLoader from '@/components/ui/skeleton-loader';

export default function SkeletonDemoPage() {
  return (
    <div className="skeleton-demo-page" style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
        Skeleton Loading Demo - YouTube Style
      </h1>
      
      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: '#555' }}>Image Skeleton Loading</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {/* Optimized images with skeleton loading */}
          <div>
            <h3>Optimized Image 1</h3>
            <OptimizedImage 
              src="https://picsum.photos/400/300?random=1" 
              alt="Demo image 1" 
              width={400} 
              height={300}
              showSkeleton={true}
            />
          </div>
          
          <div>
            <h3>Optimized Image 2</h3>
            <OptimizedImage 
              src="https://picsum.photos/400/300?random=2" 
              alt="Demo image 2" 
              width={400} 
              height={300}
              showSkeleton={true}
            />
          </div>
          
          <div>
            <h3>Optimized Image 3</h3>
            <OptimizedImage 
              src="https://picsum.photos/400/300?random=3" 
              alt="Demo image 3" 
              width={400} 
              height={300}
              showSkeleton={true}
            />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: '#555' }}>Video Skeleton Loading</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
          {/* Optimized videos with skeleton loading */}
          <div>
            <h3>Optimized Video 1</h3>
            <OptimizedVideo 
              src="/assets/reels/the_x_media-01.mp4"
              width={400}
              height={225}
              showSkeleton={true}
              controls={true}
              muted={true}
            />
          </div>
          
          <div>
            <h3>Optimized Video 2</h3>
            <OptimizedVideo 
              src="/assets/reels/the_x_media-02.mp4"
              width={400}
              height={225}
              showSkeleton={true}
              controls={true}
              muted={true}
            />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '60px' }}>
        <h2 style={{ marginBottom: '20px', color: '#555' }}>Standalone Skeleton Loaders</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {/* Standalone skeleton loaders */}
          <div>
            <h3>Image Skeleton</h3>
            <SkeletonLoader 
              type="image" 
              width={300} 
              height={200}
            />
          </div>
          
          <div>
            <h3>Video Skeleton</h3>
            <SkeletonLoader 
              type="video" 
              width={400} 
              height={225}
            />
          </div>
          
          <div>
            <h3>Custom Size Skeleton</h3>
            <SkeletonLoader 
              type="image" 
              width={250} 
              height={150}
            />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '20px', color: '#555' }}>Performance Features</h2>
        <div style={{ 
          background: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px',
          border: '1px solid #e9ecef'
        }}>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li>YouTube-style shimmer animation</li>
            <li>Smooth opacity transitions</li>
            <li>Responsive design</li>
            <li>Dark theme support</li>
            <li>Reduced motion support</li>
            <li>High contrast mode support</li>
            <li>Error handling with fallbacks</li>
            <li>Customizable skeleton appearance</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', color: '#666', fontSize: '14px' }}>
        <p>This demo showcases the skeleton loading functionality for both images and videos.</p>
        <p>The skeleton loaders provide a smooth user experience while content is loading.</p>
      </div>
    </div>
  );
}
