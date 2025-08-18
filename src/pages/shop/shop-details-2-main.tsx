"use client";
import { gsap } from "gsap";
import React from "react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderTwelve from "@/layouts/headers/header-twelve";
import { IProductDT } from "@/types/product-d-t";
import ShopDetailsAreaTwo from "@/components/shop/details/shop-details-area-2";
import ShopDetailsBottomArea from "@/components/shop/details/shop-details-bottom-area";
import FooterSix from "@/layouts/footers/footer-six";
import { ReviewWidgetSection } from "@/components/review-widget";

// prop type
type IProps = {
  product: IProductDT;
};

const ShopDetailsTwoMain = ({ product }: IProps) => {
  useScrollSmooth();

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderTwelve />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* shop details */}
            <ShopDetailsAreaTwo />
            {/* shop details */}

            {/* review widget */}
            <ReviewWidgetSection 
              title="Customer Reviews"
              subtitle="Discover what our customers think about this product. Your feedback matters and helps others make the right choice."
            />
            {/* review widget */}

            {/* shop details area */}
            <ShopDetailsBottomArea product={product} />
            {/* shop details area */}
          </main>

          {/* footer area */}
          <FooterSix />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ShopDetailsTwoMain;
