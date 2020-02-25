import React from "react";

const ContactStyling = (): React.ReactElement => {
  return (
    <style jsx global>{`
    .contact-block {
      position: relative;
      z-index: 10;
    }
    .contact-block__container {
      min-height: 100vh;
      max-width: 960px;
      margin: auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap-reverse;
      z-index: 20;
      padding: 2rem 0;
    }
    .contact-block__layer {
      opacity: 0.9;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
    }
  `}</style>
  );
};

export default ContactStyling;
