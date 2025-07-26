import React from "react";
import { Metadata } from "next";
import PortfolioStandardMain from "@/pages/portfolio/portfolio-standard-main";

export const metadata: Metadata = {
  title: "The X Media - Portfolio | Our Digital Marketing Projects",
  description: "Explore The X Media's portfolio showcasing successful digital marketing campaigns, web designs, mobile apps, and e-commerce solutions for diverse clients.",
};

const PortfolioStandardPage = () => {
  return (
    <PortfolioStandardMain/>
  );
};

export default PortfolioStandardPage;
