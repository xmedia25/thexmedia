"use client";
import React, { useEffect } from "react";

interface ReviewWidgetSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
  spacing?: string;
}

export default function ReviewWidgetSection({ 
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it. See what professionals across Canada are saying about their experience with TheXMedia.",
  className = "",
  spacing = "pt-130 pb-130"
}: ReviewWidgetSectionProps) {
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
    <section className={`tp-review-widget-area-dark ${spacing} ${className}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-review-widget-header text-center mb-60">
              <h2 className="tp-section-title-2 mb-20">
                {title.split(' ').map((word, index, array) => {
                  if (word === 'Clients' || word === 'clients') {
                    return <span key={index}>{word} </span>;
                  }
                  return word + (index < array.length - 1 ? ' ' : '');
                })}
              </h2>
              <p className="tp-section-text">
                {subtitle}
              </p>
            </div>
            
            <div className="tp-review-widget-container">
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
    </section>
  );
}
