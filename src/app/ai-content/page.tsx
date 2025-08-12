import React from "react";
import { Metadata } from "next";
import AiContentMain from "@/pages/ai-content/ai-content-main";

export const metadata: Metadata = {
  title: "The-X-Media - AI-Driven Content Creation",
  description: "Build Your Personal Brand Without Repeating Yourself on Camera. AI avatars, voice cloning, and viral content creation for entrepreneurs and professionals.",
};

const AiContentPage = () => {
  return (
    <AiContentMain/>
  );
};

export default AiContentPage;
