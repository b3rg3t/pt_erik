import React from "react";
import { useAmp } from "next/amp";

interface AmpImage {
  src: string;
  width?: string;
  height?: string;
  alt: string;
  layout?: string;
  className?: string;
  media?: string;
}

const Image = (image: AmpImage): React.ReactElement => {
  const isAmp = useAmp();
  if (image && image.src) {
    return isAmp ? (
      <amp-img
        className={image.className}
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
        layout={image.layout ? image.layout : "responsive"}
      ></amp-img>
    ) : (
      <img
        className={image.className}
        src={image.src}
        width={image.width}
        height={image.height}
        alt={image.alt}
      />
    );
  }
  return null;
};

export default Image;
