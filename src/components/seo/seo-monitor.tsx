'use client';
import React, { useEffect, useState, useCallback } from 'react';

interface SEOMetrics {
  pageLoadTime: number;
  coreWebVitals: {
    lcp: number; // Largest Contentful Paint
    fid: number; // First Input Delay
    cls: number; // Cumulative Layout Shift
  };
  seoScore: number;
  mobileOptimized: boolean;
  structuredDataValid: boolean;
}

const SEOMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<SEOMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const measurePerformance = useCallback(() => {
    // Measure page load time
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const pageLoadTime = navigationTiming ? navigationTiming.loadEventEnd - navigationTiming.loadEventStart : 0;

    // Check for Core Web Vitals (simplified)
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const webVitals = {
        lcp: 0,
        fid: 0,
        cls: 0
      };

      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          webVitals.lcp = entry.startTime;
        }
        if (entry.entryType === 'first-input') {
          webVitals.fid = (entry as any).processingStart - entry.startTime;
        }
        if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          webVitals.cls += (entry as any).value;
        }
      });

      // Calculate SEO score (simplified)
      const seoScore = calculateSEOScore();
      
      setMetrics({
        pageLoadTime,
        coreWebVitals: webVitals,
        seoScore,
        mobileOptimized: checkMobileOptimization(),
        structuredDataValid: checkStructuredData()
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      setMetrics({
        pageLoadTime,
        coreWebVitals: { lcp: 0, fid: 0, cls: 0 },
        seoScore: calculateSEOScore(),
        mobileOptimized: checkMobileOptimization(),
        structuredDataValid: checkStructuredData()
      });
    }
  }, []);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const showMonitor = process.env.NODE_ENV === 'development' || 
                       localStorage.getItem('seo-monitor') === 'true';
    setIsVisible(showMonitor);

    if (showMonitor) {
      measurePerformance();
    }
  }, [measurePerformance]);



  const calculateSEOScore = (): number => {
    let score = 0;
    
    // Meta Title (15 points)
    const title = document.querySelector('title')?.textContent;
    if (title) {
      if (title.length >= 30 && title.length <= 60) score += 15;
      else if (title.length >= 20 && title.length <= 70) score += 10;
      else if (title.length > 0) score += 5;
    }
    
    // Meta Description (15 points)
    const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
    if (description) {
      if (description.length >= 120 && description.length <= 160) score += 15;
      else if (description.length >= 100 && description.length <= 180) score += 10;
      else if (description.length > 0) score += 5;
    }
    
    // H1 Tag (10 points)
    const h1 = document.querySelector('h1');
    if (h1 && h1.textContent && h1.textContent.trim().length > 0) score += 10;
    
    // Heading Structure (10 points)
    const h2s = document.querySelectorAll('h2');
    const h3s = document.querySelectorAll('h3');
    if (h2s.length >= 2) score += 5;
    if (h3s.length >= 1) score += 5;
    
    // Images with Alt Text (10 points)
    const images = document.querySelectorAll('img');
    const imagesWithAlt = document.querySelectorAll('img[alt]:not([alt=""])');
    if (images.length > 0) {
      const altRatio = imagesWithAlt.length / images.length;
      if (altRatio >= 0.9) score += 10;
      else if (altRatio >= 0.7) score += 7;
      else if (altRatio >= 0.5) score += 5;
    }
    
    // Internal Links (8 points)
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="thexmedia.com"]');
    if (internalLinks.length >= 5) score += 8;
    else if (internalLinks.length >= 3) score += 6;
    else if (internalLinks.length >= 1) score += 3;
    
    // External Links with proper attributes (7 points)
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="thexmedia.com"])');
    const externalLinksWithRel = document.querySelectorAll('a[href^="http"]:not([href*="thexmedia.com"])[rel*="nofollow"]');
    if (externalLinks.length > 0 && externalLinksWithRel.length / externalLinks.length >= 0.8) score += 7;
    
    // Structured Data (10 points)
    const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
    if (structuredData.length >= 3) score += 10;
    else if (structuredData.length >= 2) score += 8;
    else if (structuredData.length >= 1) score += 5;
    
    // Meta Viewport (5 points)
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) score += 5;
    
    // Canonical URL (5 points)
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) score += 5;
    
    // Open Graph Tags (5 points)
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogTitle && ogDescription && ogImage) score += 5;
    
    // Twitter Card Tags (5 points)
    const twitterCard = document.querySelector('meta[name="twitter:card"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterCard && twitterTitle) score += 5;
    
    // Language Declaration (3 points)
    const htmlLang = document.documentElement.getAttribute('lang');
    if (htmlLang) score += 3;
    
    // Robots Meta (2 points)
    const robots = document.querySelector('meta[name="robots"]');
    if (robots) score += 2;
    
    return Math.min(score, 100);
  };

  const checkMobileOptimization = (): boolean => {
    const viewport = document.querySelector('meta[name="viewport"]');
    return viewport !== null;
  };

  const checkStructuredData = (): boolean => {
    const structuredData = document.querySelectorAll('script[type="application/ld+json"]');
    return structuredData.length > 0;
  };

  const getScoreColor = (score: number): string => {
    if (score >= 80) return '#10B981'; // Green
    if (score >= 60) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  const getWebVitalStatus = (metric: string, value: number): string => {
    switch (metric) {
      case 'lcp':
        return value <= 2500 ? 'Good' : value <= 4000 ? 'Needs Improvement' : 'Poor';
      case 'fid':
        return value <= 100 ? 'Good' : value <= 300 ? 'Needs Improvement' : 'Poor';
      case 'cls':
        return value <= 0.1 ? 'Good' : value <= 0.25 ? 'Needs Improvement' : 'Poor';
      default:
        return 'Unknown';
    }
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0, 0, 0, 0.95)',
      color: 'white',
      padding: isMinimized ? '8px 12px' : '15px',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: isMinimized ? '200px' : '320px',
      fontFamily: 'monospace',
      border: '1px solid #374151',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: isMinimized ? '0' : '10px', 
        fontWeight: 'bold', 
        borderBottom: isMinimized ? 'none' : '1px solid #333', 
        paddingBottom: isMinimized ? '0' : '5px'
      }}>
        <span>🔍 SEO Monitor</span>
        <div style={{ display: 'flex', gap: '5px' }}>
          <button 
            onClick={() => setIsMinimized(!isMinimized)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#9CA3AF',
              cursor: 'pointer',
              fontSize: '14px',
              padding: '2px'
            }}
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            {isMinimized ? '⬆' : '⬇'}
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#EF4444',
              cursor: 'pointer',
              fontSize: '14px',
              padding: '2px'
            }}
            title="Close"
          >
            ✕
          </button>
        </div>
      </div>
      
      {!isMinimized && metrics && (
        <>
          <div style={{ marginBottom: '8px' }}>
            <strong>SEO Score: </strong>
            <span style={{ 
              color: getScoreColor(metrics.seoScore),
              fontSize: '14px',
              fontWeight: 'bold'
            }}>
              {metrics.seoScore}/100
            </span>
            {metrics.seoScore >= 90 && <span style={{ marginLeft: '5px' }}>🎉</span>}
          </div>
          
          <div style={{ marginBottom: '8px' }}>
            <strong>Page Load: </strong>{metrics.pageLoadTime.toFixed(0)}ms
          </div>
          
          <div style={{ marginBottom: '8px' }}>
            <strong>Core Web Vitals:</strong>
            <div style={{ marginLeft: '10px', fontSize: '11px' }}>
              <div>LCP: {metrics.coreWebVitals.lcp.toFixed(0)}ms ({getWebVitalStatus('lcp', metrics.coreWebVitals.lcp)})</div>
              <div>FID: {metrics.coreWebVitals.fid.toFixed(0)}ms ({getWebVitalStatus('fid', metrics.coreWebVitals.fid)})</div>
              <div>CLS: {metrics.coreWebVitals.cls.toFixed(3)} ({getWebVitalStatus('cls', metrics.coreWebVitals.cls)})</div>
            </div>
          </div>
          
          <div style={{ marginBottom: '8px' }}>
            <strong>Mobile Optimized: </strong>
            <span style={{ color: metrics.mobileOptimized ? '#10B981' : '#EF4444' }}>
              {metrics.mobileOptimized ? '✓' : '✗'}
            </span>
          </div>
          
          <div style={{ marginBottom: '8px' }}>
            <strong>Structured Data: </strong>
            <span style={{ color: metrics.structuredDataValid ? '#10B981' : '#EF4444' }}>
              {metrics.structuredDataValid ? '✓' : '✗'}
            </span>
          </div>
          
          <div style={{ 
            marginTop: '10px', 
            paddingTop: '8px', 
            borderTop: '1px solid #374151',
            fontSize: '10px',
            color: '#9CA3AF'
          }}>
            💡 Tip: Optimize meta tags and add more structured data to reach 99/100
          </div>
        </>
      )}
      
      {isMinimized && metrics && (
        <span style={{ 
          color: getScoreColor(metrics.seoScore),
          fontWeight: 'bold',
          marginLeft: '10px'
        }}>
          Score: {metrics.seoScore}/100
        </span>
      )}
    </div>
  );
};

export default SEOMonitor;