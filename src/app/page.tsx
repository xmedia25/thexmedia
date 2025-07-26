import { Metadata } from "next";
import HomeFourMain from "@/pages/homes/home-4";

export const metadata: Metadata = {
  title: "The X Media - Digital Marketing & Creative Solutions",
  description: "Welcome to The X Media - Your premier destination for digital marketing, web design, mobile app development, and creative solutions that drive business growth.",
};

export default function Home() {
  return (
    <>
      <HomeFourMain />
    </>
  );
}
