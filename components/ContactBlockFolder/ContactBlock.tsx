import React from "react";
import Form from "../FormFolder/Form";
import MapContainer from "../MapFolder/MapContainer";
import ContactStyling from "./ContactStyling";
import { contactblock } from "../../pages/index";

interface ContactBlockProps {
  contactblock: contactblock
}

const ContactBlock = ({ contactblock }: ContactBlockProps): React.ReactElement => {
  return contactblock && (
    <>
      <div
        className="contact-block"
        style={{
          backgroundImage: contactblock?.backgroundimage?.url &&
            `url(${contactblock.backgroundimage.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div
          className="contact-block__layer"
          style={{
            background: `${contactblock.overlaycolor.hex}`,
            opacity: `${contactblock.opacity}`
          }}
        />
        <div className="contact-block__content">
          <div className="contact-block__content__text">
            {contactblock.title.length ? <h3 style={{ color: `${contactblock?.textcolor?.hex}` }}>{contactblock.title}</h3> : null}
            {contactblock.toptext ? <p style={{ color: `${contactblock?.textcolor?.hex}`, padding: "1rem 0 1rem 0" }}>{contactblock.toptext}</p> : null}
          </div>
          <div className="contact-block__container">
            <MapContainer />
            <Form />
          </div>
          <div className="contact-block__content__text">
            {contactblock.secondtext ? <p style={{ color: `${contactblock?.textcolor?.hex}`, padding: "0 0 0 0" }}>{contactblock.secondtext}</p> : null}
          </div>
        </div>
      </div>
      <ContactStyling />
    </>
  );
};

export default ContactBlock;
