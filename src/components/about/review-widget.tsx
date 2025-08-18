"use client";
import React, { useEffect } from "react";

export default function ReviewWidget() {
  useEffect(() => {
    // Load the review widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://crm.thexmedia.com/reputation/assets/review-widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="review-widget-section pt-120 pb-120">
      <div className="container container-1480">
        <div className="row justify-content-center">
          <div className="col-xxl-10">
            <div className="review-widget-header text-center mb-60">
              <h2 className="tp-section-title-2 mb-20">
                What Our <span>Clients Say</span>
              </h2>
              <p className="tp-section-text">
                Don&apos;t just take our word for it. See what professionals across Canada are saying about their experience with TheXMedia.
              </p>
            </div>
            
            <div className="review-widget-container">
              <iframe 
                className='lc_reviews_widget' 
                src='https://crm.thexmedia.com/reputation/widgets/review_widget/dhrB8ImilCpc99qFBwBo' 
                frameBorder='0' 
                scrolling='no' 
                title="Client Reviews"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
