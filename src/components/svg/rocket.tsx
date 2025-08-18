import React from "react";

export default function Rocket() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 16.5L16 5L27.5 16.5L16 28L4.5 16.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5V28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 16.5H27.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5L4.5 16.5L16 28L27.5 16.5L16 5Z"
        fill="currentColor"
        fillOpacity="0.1"
      />
    </svg>
  );
}
