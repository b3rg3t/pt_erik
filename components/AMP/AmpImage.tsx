import React from "react";
import LazyLoad from "react-lazyload";
import { useAmp } from "next/amp";

interface AmpImage {
  src: string;
  width?: string | number;
  height?: string | number;
  alt: string;
  layout?: string;
  className?: string;
  media?: string;
  styling?: boolean;
}

const PlaceHolderImage = (): React.ReactElement => {
  return (
    <div style={{ width: "350px", height: "350px" }}>

    </div>
  )
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
        style={{ borderRadius: image.styling ? "50%" : "0" }}
      ></amp-img>
    ) : (
        <LazyLoad height={350} offset={200} placeholder={<PlaceHolderImage />}>
          <img
            className={image.className}
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            style={{ borderRadius: image.styling ? "50%" : "0" }}
          />
        </LazyLoad>
      );
  }
  return null;
};

export default Image;
