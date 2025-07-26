import React from "react";
import { Metadata } from "next";
import BlogClassicMain from "@/pages/blog/blog-classic";

export const metadata: Metadata = {
  title: "The-X-Media - Blog Classic page",
};

const BlogClassicPage = () => {
  return (
    <BlogClassicMain/>
  );
};

export default BlogClassicPage;
