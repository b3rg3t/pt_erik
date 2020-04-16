import React from "react";
import { blockHeight } from "../../helpers/helpdata";

const ContactStyling = (): React.ReactElement => {
  return (
    <style jsx global>{`
    .contact-block {
      min-height: ${blockHeight.height};
      position: relative;
      z-index: 10;
    }
    .contact-block__container {
      max-width: 960px;
      margin: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap-reverse;
      z-index: 20;
    }
    .contact-block__layer {
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
    }
    .contact-block__content {
      padding: 4rem 0;
    }
    .contact-block__content__text{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 1rem 2rem 0 2rem ;
    }
  `}</style>
  );
};

export default ContactStyling;
