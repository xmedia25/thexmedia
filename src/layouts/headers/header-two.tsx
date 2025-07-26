'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

import useSticky from "@/hooks/use-sticky";

import MobileOffcanvasTwo from "@/components/offcanvas/mobile-offcanvas-2";


export default function HeaderTwo() {
  const {sticky} = useSticky();

  const [openOffCanvas, setOpenOffcanvas] = React.useState(false);
  return (
    <>
      <header>
        <div
          id="header-sticky"
          className={`tp-header-2-area tp-header-2-ptb z-index-2 tp-transparent ${sticky?'header-sticky':''}`}
        >
          <div className="container container-1870">
            <div className="row align-items-center">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
                <div className="tp-header-logo">
                  <Link className="logo-1" href="/">
                    <Image
                      src="/assets/img/logo/logo.png"
                      alt="logo"
                      width={85}
                      height={26}
                    />
                  </Link>
                  <Link className="logo-2" href="/">
                    <Image
                      src="/assets/img/logo/logo-white.png"
                      alt="logo"
                      width={85}
                      height={26}
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6">
                <div className="tp-header-2-menu-bar text-end text-sm-center">
                  <button className="tp-offcanvas-open-btn" onClick={() => setOpenOffcanvas(true)}>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 d-none d-sm-block">
                {/* Cart removed */}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvasTwo openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffcanvas} />
      {/* off canvas */}
    </>
  );
}
