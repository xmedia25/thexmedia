import React from "react";
import { Metadata } from "next";
import BlogModernMain from "@/pages/blog/blog-modern";

export const metadata: Metadata = {
  title: "The X Media - Digital Marketing Blog & Insights",
  description: "Stay updated with The X Media's latest insights on digital marketing trends, web design tips, mobile app development, and e-commerce strategies.",
};

const BlogModernPage = () => {
  return (
    <BlogModernMain/>
  );
};

export default BlogModernPage;
