import React from "react";
import Image from "next/image";
import avatar from '@/assets/img/inner-blog/blog-details/avatar/avatar-1.jpg'

export default function BlogDetailsAuthor() {
  return (
    <div className="blog-details-author d-flex mb-60">
      <div className="blog-details-author-img">
        <Image
          src={avatar}
          alt=""
        />
      </div>
      <div className="blog-details-author-content-wrap">
        <div className="blog-details-author-social text-end">
          <a href="https://www.facebook.com/thexmediaofficial" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/thexmedia_/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/theexmedia/" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="blog-details-author-content">
          <h4 className="blog-details-author-title">Lea Cohen</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.!
          </p>
        </div>
      </div>
    </div>
  );
}
