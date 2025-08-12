"use client";
import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
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
    // Disable heavy animations on mobile for better performance
    if (isMobile) {
      gsap.set("*", {
        clearProps: "transform,opacity,scale,rotation,skew"
      });
      
      // Reduce animation complexity on mobile
      gsap.defaults({
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [isMobile]);

  return (
    <div className={`wrapper ${isMobile ? 'mobile-optimized' : ''}`}>
      {children}
    </div>
  );
};

export default Wrapper;
