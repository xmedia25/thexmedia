import React from "react";
import { Facebook, Instagram, Linkdin, Twitter } from "../svg";

const social_data = [
  {
    id: 1,
    icon: <Facebook />,
    link: "https://www.facebook.com/thexmediaofficial",
  },
  {
    id: 2,
    icon: <Instagram />,
    link: "https://www.instagram.com/thexmedia_/",
  },
  {
    id: 3,
    icon: <Linkdin />,
    link: "https://www.linkedin.com/company/theexmedia/",
  },
];

export default function Social() {
  return (
    <>
      {social_data.map((item) => (
        <a href={item.link} key={item.id} target="_blank">
          <span>{item.icon}</span>
        </a>
      ))}
    </>
  );
}
