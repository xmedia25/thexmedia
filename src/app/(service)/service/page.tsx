import React from "react";
import { Metadata } from "next";
import ServiceMain from "@/pages/service/service";

export const metadata: Metadata = {
  title: "The X Media - Digital Marketing Services & Solutions",
  description: "Explore The X Media's comprehensive digital marketing services including web design, mobile app development, e-commerce solutions, SEO, and brand strategy.",
};

const ServicePage = () => {
  return (
    <ServiceMain/>
  );
};

export default ServicePage;
