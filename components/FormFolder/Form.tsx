import React, { useState } from "react";
import Loading from "../loading";
import helpdata from "../../helpers/helpdata";
import { colors } from "../../helpers/helpdata";
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
  const [messageStatus, setMessageStatus] = useState(false);

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
      const postBasin = await axios.post(`${helpdata.url}`, data, {
        headers
      });
      response = await postBasin;
      if (response.status === 200) {
        console.log("status", response.status);
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        setMessageStatus(true);
        setSubmitMessage("Meddelande skickat!");
      } else {
        console.log("Something went wrong" + response.status);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      setMessageStatus(false);
      setSubmitMessage(error.message);
    }
  };
  const handleClick = (status: boolean) => {
    setMessageStatus(status);
  };
  const isDisabled = message.length > 0 && email.length > 0 && name.length > 0;
  return (
    <>
      {messageStatus && (
        <PopUp
          submitMessage={submitMessage}
          messageStatus={messageStatus}
          handleClick={handleClick}
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
            verify-xhr={isAmp ? `${helpdata.url}` : null}
            method="post"
            action-xhr={isAmp ? `${helpdata.url}` : null}
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
              className="contact__form__button main-btn"
              type="submit"
              value="Submit"
              disabled={!isAmp ? (loading ? isDisabled : !isDisabled) : null}
            >
              {!loading ? "Skicka" : <Loading loading={loading} />}
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
          border-radius: 30px;
          padding: 4px 0 4px 8px;
          border: 1px solid ${colors.transparent};
          -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        }
        .contact input:focus {
          outline: none;
          border: 1px solid ${colors.secondary};
          border-radius: 30px;
        }
        .contact textarea {
          width: 100%;
          font-family: "Dosis", sans-serif;
          font-weight: 400;
          font-size: 1rem;
          border-radius: 10px;
          border: 1px solid ${colors.transparent};
          padding: 0.5rem;
          -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
        }
        .contact textarea:focus {
          outline: none;
          border: 1px solid ${colors.secondary};
          border-radius: 10px;
        }
        form button {
          margin-top: 2rem;
        }
      `}</style>
    </>
  );
};

export default Form;
