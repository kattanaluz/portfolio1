import React from "react";

export default function Links({ className, href, text }) {
  return (
    <a className={className} href={href} target="_blank">
      {text}
    </a>
  );
}
