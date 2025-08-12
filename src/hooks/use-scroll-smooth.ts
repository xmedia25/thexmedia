"use client";
import { gsap } from "gsap";
import { useState, useEffect } from "react";
import { ScrollSmoother} from '@/plugins';
import { useGSAP } from "@gsap/react";

export default function useScrollSmooth() {
  const [isScrollSmooth, setIsScrollSmooth] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
    const smoothWrapper = document.getElementById("smooth-wrapper");
    const smoothContent = document.getElementById("smooth-content");

    if (smoothWrapper && smoothContent && isScrollSmooth && !isMobile) {
      gsap.config({
        nullTargetWarn: false,
      });

      ScrollSmoother.create({
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
        normalizeScroll: false,
        ignoreMobileResize: true,
        smoothMobile: false,
      });
    }
  }, [isMobile, isScrollSmooth]);
}
