import React from "react";
// import { useAmp } from "next/amp";
import Form from "../FormFolder/Form";
import MapContainer from "../MapFolder/MapContainer";
import { profileData } from "../../helpers/helpdata";
import ContactStyling from "./ContactStyling";
import LazyLoad from "react-lazyload";

const ContactBlock = (): React.ReactElement => {
  //   const isAmp = useAmp();
  return (
    <>
      <LazyLoad>
        <div
          className="contact-block"
          style={{
            backgroundImage: `url(./images/ropes.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        >
          <div
            className="contact-block__layer"
            style={{
              background: `${profileData.overlayColor}`,
              opacity: `${profileData.opacity}`
            }}
          />

          <div className="contact-block__container">
            <MapContainer />
            <Form />
          </div>
        </div>
      </LazyLoad>
      <ContactStyling />
    </>
  );
};

export default ContactBlock;
