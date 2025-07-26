import React from "react";
import { Metadata } from "next";
import PortfolioDetailsVideoMain from "@/pages/portfolio/details/portfolio-details-video-main";


export const metadata: Metadata = {
  title: "The-X-Media - Portfolio Details video page",
};

const PortfolioDetailsVideoPage = () => {
  return (
    <PortfolioDetailsVideoMain/>
  );
};

export default PortfolioDetailsVideoPage;
