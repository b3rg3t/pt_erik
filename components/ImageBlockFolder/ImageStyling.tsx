import React from "react";

import { useAmp } from "next/amp";

const ImageStyling = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <style jsx global>{`
      .image-block {
        animation: easein 3s;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
      }
      .image-block h3 {
        margin-bottom: 1rem;
      }
      .image-block__layer {
        opacity: 0.9;
        width: 100%;
        height: 100%;
        position: absolute;
      }
      .image-block__content {
        z-index: 2;
        padding: 4rem 0;
        position: relative;
      }
      .left {
        flex-direction: row-reverse;
      }
      .image-block__content__boxes {
        max-width: 960px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap-reverse;
      }
      .image-block__content__boxes__img {
        flex: 1 1 400px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        position: relative;
        padding: 0 2rem;
      }
      .image-block__content__boxes__img img {
        max-width: 100%;
        min-height: 350px;
        max-height: 350px;
        object-fit: cover;
      }
      .image-block__content__boxes__text {
        min-height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1 1 500px;
        padding: 0 2rem 0 2rem;
      }

      .button-container {
        display: flex;
        justify-content: center;
      }
      .text-top {
        padding-bottom: 1rem;
        font-weight: 1000;
      }
      .text-bottom {
        font-weight: 500;
      }
      @media only screen and (max-width: 910px) {
        .button-container {
          margin: 2rem 0;
        }
        .image-block__content__boxes__text {
          min-height: 100px;
        }
        .image-block__content__boxes__img {
          ${isAmp ? "padding: 0 2rem" : "padding: 0"};
        }
        .image-block__content__boxes__img img {
          padding: 0 2rem;
        }
      }
      @keyframes easein {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    `}</style>
  );
};

export default ImageStyling;
