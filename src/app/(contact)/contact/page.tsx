import React from "react";
import { Metadata } from "next";
import ContactMain from "@/pages/contact/contact";

export const metadata: Metadata = {
  title: "The X Media - Contact Our Digital Marketing Experts",
  description: "Get in touch with The X Media team. Let's discuss your digital marketing needs and create a customized strategy to grow your business online.",
};

const ContactPage = () => {
  return (
    <ContactMain/>
  );
};

export default ContactPage;
