import React from "react";

export default function ImageLink({ aTagClass, imgTagClass, href, src, alt }) {
  return (
    <a className={aTagClass} href={href} target="_blank">
      <img className={imgTagClass} src={src} alt={alt} />
    </a>
  );
}
