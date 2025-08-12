import React from "react";
import { Metadata } from "next";
import PortfolioStandardMain from "@/pages/portfolio/portfolio-standard-main";

export const metadata: Metadata = {
  title: "The X Media - Our Clients | Who We Work With",
  description: "Meet the incredible professionals and businesses we've helped go viral, build systems, and generate real business results. From realtors to lawyers, we grow with our clients.",
};

const PortfolioPage = () => {
  return (
    <PortfolioStandardMain/>
  );
};

export default PortfolioPage;
