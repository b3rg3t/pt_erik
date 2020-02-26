import React from "react";
// import heights from "../../helpers/helpdata";
// import { colors } from "../AMP/AmpStyling";
import { SEOdata } from "../../helpers/helpdata";
import { IoIosArrowDown } from "react-icons/io";

const FirstComponent = (): React.ReactElement => {
  return (
    <>
      <div
        className="hero"
        style={{
          // - ${heights.navHeigt}
          height: `calc(100vh )`,
          backgroundImage: `url(./images/erik2.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      >
        <div className="hero__layer"></div>
        <div className="hero__content">
          <div className="hero__box">
            <h1>{SEOdata.title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              eaque labore nulla doloremque laborum, odit nostrum
              necessitatibus.
            </p>
          </div>
          <div className="hero__bottom-arrow">
            <a className="arrow-down" href="#cards">
              <span aria-label="Move down to cards block" />
              <IoIosArrowDown />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          background: #ffffff50;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .hero__layer {
          position: absolute;
          background: black;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          -ms-transform: translateX(-50%) translateY(-50%);
          -moz-transform: translateX(-50%) translateY(-50%);
          -webkit-transform: translateX(-50%) translateY(-50%);
          transform: translateX(-50%) translateY(-50%);
          overflow: hidden;
          opacity: 0.3;
          z-index: 5;
        }
        .hero__content {
          max-width: 960px;
          z-index: 10;
        }
        .hero__box {
          padding: 0 2rem;
        }
        .hero p {
          color: white;
          max-width: 70ch;
          z-index: 2;
          text-align: start;
        }
        .hero h1 {
          color: white;
          z-index: 2;
          text-align: start;
        }
        a {
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .main-btn {
          margin-top: 4rem;
        }
        .play-text {
          margin-right: 0.5rem;
        }
        .hero__bottom-arrow {
          margin: auto;
          position: absolute;
          bottom: 0;
          left: 50%;
          right: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .arrow-down {
          font-size: 3rem;
          animation: pulsing 1.5s infinite;
        }
        @keyframes pulsing {
          0% {
            opacity: 0;
            transform: translate(0px 0px);
          }
          100% {
            opacity: 1;
            transform: translate(0, 10px);
          }
        }
      `}</style>
    </>
  );
};

export default FirstComponent;
