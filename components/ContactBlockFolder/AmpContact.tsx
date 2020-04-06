import React from "react";
import Form from "../FormFolder/Form";
import MapContainer from "../MapFolder/MapContainer";
import ContactStyling from "./ContactStyling";

const AmpContact = (): React.ReactElement => {

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
          <MapContainer />
          <Form />
        </div>
      </div>
      <ContactStyling />
    </>
  );
};

export default AmpContact;
