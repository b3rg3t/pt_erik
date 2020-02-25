import React, { useRef } from "react";
import { ProfileInfo } from "../../helpers/helpdata";
import { IoIosClose } from "react-icons/io";
import { FaRegPaperPlane } from "react-icons/fa";
import { useOnClickOutside } from "../../helpers/hooks";

interface PopUpProps {
  submitMessage: string;
  messageStatus: boolean;
  handleClick(status: boolean): void;
}

const PopUp = ({
  submitMessage,
  messageStatus,
  handleClick
}: PopUpProps): React.ReactElement => {
  const ref = useRef();

  useOnClickOutside(ref, () => closeModal());

  const closeModal = () => {
    return handleClick(false);
  };
  return (
    <>
      <article className="popup">
        <div ref={ref} role="alert" className="popup-modal">
          <button className="popup-modal__close" onClick={closeModal}>
            <IoIosClose />
          </button>
          {messageStatus ? (
            <>
              <h3>
                {submitMessage}
                <FaRegPaperPlane />
              </h3>
              <p>{ProfileInfo.name} kommer kontakta dig inom kort!</p>
            </>
          ) : (
            <>
              <h3>Något gick fel!</h3>
              <p>{submitMessage ? submitMessage : "Testa igen om en stund."}</p>
            </>
          )}

          <button className="main-btn" onClick={closeModal}>
            Stäng
          </button>
        </div>
      </article>
      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          height: 100vh;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #00000010;
          z-index: 100000;
        }
        .popup-modal {
          text-align: center;
          position: relative;
          background-color: white;
          padding: 2rem 2rem 1rem 2rem;
          border-radius: 1rem;
          -webkit-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          -moz-box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          box-shadow: 0px 2px 6px -1px rgba(173, 173, 173, 1);
          z-index: 100001;
        }
        .popup-modal p {
          margin-top: 1rem;
        }
        .popup-modal__close {
          cursor: pointer;
          position: absolute;
          top: 0.5rem;
          color: red;
          right: 0.5rem;
          background: none;
          border: none;
          padding: 0;
          font-size: 1.5rem;
          display: flex;
          justify-content: center;
        }
        .popup-modal__close:hover {
          color: gray;
        }
        .main-btn {
          margin-top: 1rem;
        }
      `}</style>
    </>
  );
};

export default PopUp;
