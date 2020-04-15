import React from "react";
import Form from "../FormFolder/Form";
import MapContainer from "../MapFolder/MapContainer";
import ContactStyling from "./ContactStyling";
import LazyLoad from "react-lazyload";

const ContactBlock = (): React.ReactElement => {
  return (
    <>

      <div
        className="contact-block"
        style={{
          // backgroundImage: `url(./images/ropes.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        {/* <div
            className="contact-block__layer"
            style={{
              background: `${profileData.overlayColor}`,
              opacity: `${profileData.opacity}`
            }}
          /> */}

        <div className="contact-block__container">
          <LazyLoad height={350}>
            <MapContainer />
          </LazyLoad>
          <Form />
        </div>
      </div>

      <ContactStyling />
    </>
  );
};

export default ContactBlock;
