import React from "react";
import { Metadata } from "next";
import ContactTwoMain from "@/pages/contact/contact-2";

export const metadata: Metadata = {
  title: "The-X-Media - Contact 2 Page",
};

const ContactTwoPage = () => {
  return (
    <ContactTwoMain/>
  );
};

export default ContactTwoPage;
