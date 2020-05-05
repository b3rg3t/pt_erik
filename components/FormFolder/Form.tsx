import React, { useState } from "react";
import { colors, heights } from "../../helpers/helpdata";
import { useAmp } from "next/amp";
import { contactBlockStyle } from "../../helpers/helpdata";
import PopUp from "../PopUpFolder/PopUp";

const axios = require("axios");

const Form = (): React.ReactElement => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState("");

  const isAmp = useAmp();

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    const data = JSON.stringify({
      name: name,
      email: email,
      message: message
    });
    const headers = {
      "Content-Type": "application/json; charset=utf-8"
    };
    let response;
    try {
      const postBasin = await axios.post(`${heights.url}`, data, {
        headers
      });
      response = await postBasin;
      if (response.status === 200) {
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        setShowPopUp(true);
        setSubmitMessage("Meddelande skickat!");
        setShowErrorMessage("false");
      } else {
        console.log("Something went wrong" + response.status);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      setShowPopUp(true);
      setSubmitMessage(error.message);
      setShowErrorMessage("error");
    }
  };
  const handleClick = (status: boolean) => {
    setShowPopUp(status);
  };
  const isDisabled = message.length > 0 && email.length > 0 && name.length > 0;
  return (
    <>
      {showPopUp && (
        <PopUp
          submitMessage={submitMessage}
          handleClick={handleClick}
          showErrorMessage={showErrorMessage}
        />
      )}

      <section
        style={{
          height: `${contactBlockStyle.height}`,
          width: `${contactBlockStyle.width}`
        }}
        className="contact"
      >
        <div className="contact__form__div">
          <form
            className="contact__form"
            onSubmit={handleSubmit}
            verify-xhr={isAmp ? `${process.env.USEBASIN_EMAIL}` : null}
            method="post"
            action-xhr={isAmp ? `${process.env.USEBASIN_EMAIL}` : null}
            target="_top"
          >
            <h3 className="contact__head">Kontakt</h3>
            <input
              aria-label="name"
              className="contact__form__input"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Namn"
              required
            />
            <br />
            <input
              aria-label="email"
              className="contact__form__input"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <br />
            <textarea
              aria-label="message"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Skriv ett meddelande.."
              required
            />
            <button
              className="main-btn"
              type="submit"
              value="Submit"
              disabled={!isAmp ? (loading ? isDisabled : !isDisabled) : null}
            >
              {!loading ? "Skicka" : "Laddar.."}
            </button>
            <br />
          </form>
        </div>
      </section>
      <style jsx>{`
        .contact {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: 1rem 0;
        }
        .contact h3 {
          margin: 1rem 0 2rem 0;
          text-align: center;
        }
        .contact__form__div {
          width: 100%;
          height: 100%;
          background-color: ${colors.color6};
          padding: 2rem;
          border-radius: 1rem;
          -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        }
        .contact form {
          display: flex;
          flex-direction: column;
          max-width: 400px;
        }
        .contact__form__loading {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 1.2rem;
        }
        .contact input {
          font-family: "Dosis", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          padding: 4px 0 4px 8px;
          border: 1px solid ${colors.transparent};
          -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.16);
          -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.16);
          box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.16);
        }
        .contact input:focus {
          outline: none;
          border: 1px solid ${colors.secondary};
        }
        .main-btn {
          margin: auto;
        }
        .contact textarea {
          width: 100%;
          resize: none;
          font-family: "Dosis", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          border: 1px solid ${colors.transparent};
          padding: 0.5rem;
          -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.16);
          -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.16);
          box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.16);
        }
        .contact textarea:focus {
          outline: none;
          border: 1px solid ${colors.secondary};
        }
        form button {
          margin-top: 2rem;
        }
        @media only screen and (max-width: 600px) {
          .contact__form__div {
            padding: 2rem 1rem;
          }
          .contact {
            padding: 0rem 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Form;