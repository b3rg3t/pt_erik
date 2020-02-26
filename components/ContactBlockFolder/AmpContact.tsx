import React from "react";
// import { useAmp } from "next/amp";
import Form from "../FormFolder/Form";
import MapContainer from "../MapFolder/MapContainer";
import { profileData } from "../../helpers/helpdata";
import ContactStyling from "./ContactStyling";

const AmpContact = (): React.ReactElement => {
  //   const isAmp = useAmp();
  return (
    <>
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
      <ContactStyling />
    </>
  );
};

export default AmpContact;
