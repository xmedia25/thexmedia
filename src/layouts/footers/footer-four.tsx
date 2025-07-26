import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo/logo-white.png';
import { RightArrow, SvgBgSm } from '@/components/svg';
import Link from 'next/link';

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Website map</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">About</a></li>
    
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr='#19191A' />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm/>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100">
                    Ready to scale your business? <br />
                    Let&apos;s build something amazing together.
                  </p>
                  <Link className="tp-footer-3-logo p-relative" href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright">
                    {new Date().getFullYear()} The-X-Media <br /> © All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <a href="https://www.google.com/maps/place/100+Matheson+Blvd+E,+Mississauga,+ON,+Canada/"
                      target="_blank">100 Matheson blvd, Mississauga, Ontario CA</a>
                      </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>P: <a href="tel:+14372635601">+1 437 263 5601</a></span>
                    <span>E: <a href="mailto:contact@thexmedia.com">contact@thexmedia.com</a></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <a href="https://www.facebook.com/thexmediaofficial" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/thexmedia_/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/theexmedia/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
