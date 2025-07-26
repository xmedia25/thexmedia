import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/pages/about/about-us";

export const metadata: Metadata = {
  title: "The X Media - About Our Digital Marketing Agency",
  description: "Learn about The X Media's mission, values, and expert team. Discover how we help businesses transform their digital presence through innovative marketing solutions.",
};

const AboutUsPage = () => {
  return (
    <AboutUsMain/>
  );
};

export default AboutUsPage;
