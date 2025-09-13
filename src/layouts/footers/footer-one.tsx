"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/img/logo/logo-white.png';
import { footerOneAnimation, footerTwoAnimation } from "@/utils/footer-anim";

const footer_links = [
  { link: "/our-clients", title: "Expertise" },
  { link: "/service", title: "Services" },
  { link: "/about-us", title: "About" },
  { link: "/blog", title: "Blog" },
  { link: "/contact", title: "Contact" },
];

const legal_links = [
  { link: "/terms-and-conditions", title: "Terms & Conditions" },
  { link: "/privacy-policy", title: "Privacy Policy" },
  { link: "/cookies-policy", title: "Cookies Policy" },
];
export default function FooterOne() {
  const [isActive, setIsActive] = React.useState(false);
  useEffect(() => {
    footerOneAnimation();
  },[])
  return (
    <footer>
      {/* footer area start */}
      <div className="tp-footer-area black-bg pt-90">
        <div className="container-fluid">
          <div className="tp-footer-wrap">
            <div className="row align-items-end">
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-menu menu-anim">
                  <ul className="counter-row tp-text-anim">
                    {footer_links.map((item, i) => (
                      <li
                        key={i}
                        onMouseEnter={() => setIsActive(true)}
                        onMouseLeave={() => setIsActive(false)}
                        className={isActive ? "" : "active"}
                      >
                        <a href={item.link} style={{fontSize: '30px'}}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="tp-footer-middle-wrap">
                  <div className="tp-footer-content">
                    <h4 className="tp-footer-big-title footer-big-text">{"Let's"} Contact!</h4>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Say hello at:
                        </h4>
                        <div className="tp-footer-widget-info">
                          <div className="tp-footer-widget-info-mail tp_fade_bottom">
                            <a href="mailto:contact@thexmedia.com">
                              contact@thexmedia.com
                            </a>
                          </div>
                          <div className="tp-footer-widget-info-location tp_fade_bottom">
                            <a
                              href="https://www.google.com/maps/place/100+Matheson+Blvd+E,+Mississauga,+ON,+Canada/"
                              target="_blank"
                              rel="nofollow"
                            >
                              100 Matheson blvd Unit 102, <br /> Mississauga, Ontario CA
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <div className="tp-footer-widget">
                        <h4 className="tp-footer-title tp_fade_bottom">
                          Stalk us
                        </h4>
                        <ul className="tp-footer-widget-social">
                          <li className="tp_fade_bottom">
                            <a href="https://www.facebook.com/thexmediaofficial" target="_blank" rel="nofollow">Facebook</a>
                          </li>
                          <li className="tp_fade_bottom">
                            <a href="https://www.instagram.com/thexmedia_/" target="_blank" rel="nofollow">Instagram</a>
                          </li>
                          <li className="tp_fade_bottom">
                            <a href="https://www.linkedin.com/company/theexmedia/" target="_blank" rel="nofollow">LinkedIn</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* footer area end */}

        {/* copyright area start */}
        <div className="container-fluid">
          <div className="tp-copyright-wrap">
            <div className="row align-items-center">
              <div className="col-xl-4 col-md-3">
                <div className="tp-copyright-logo text-center text-md-start">
                  <Link href="/">
                    <Image src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="tp-footer-legal-links-inline text-center">
                  {legal_links.map((item, i) => (
                    <a key={i} href={item.link} className={`tp-footer-legal-link ${i < legal_links.length - 1 ? 'me-3' : ''}`}>
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>
              <div className="col-xl-4 col-md-3">
                <div className="tp-copyright-text text-center text-md-end">
                  <p>
                    Copyright © {new Date().getFullYear()} The X Media. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* copyright area end */}
      </div>
      {/* footer area start */}
    </footer>
  );
}
