import React from "react";
import heights from "../../helpers/helpdata";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { useAmp } from "next/amp";
import { colors, SocialMedia } from "../../helpers/helpdata";


const Footer = (): React.ReactElement => {
  // const isAmp = useAmp();
  return (
    <>
      <footer style={{ height: `${heights.footerheight}` }}>
        <div></div>
        <div>
          <a
            target="_blank"
            rel="noreferrer noopener"
            title={SocialMedia.linkedin.title}
            href={SocialMedia.linkedin.url}
          >
            <FaLinkedin />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            title={SocialMedia.instagram.title}
            href={SocialMedia.instagram.url}
          >
            <FaInstagram />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            title={SocialMedia.facebook.title}
            href={SocialMedia.facebook.url}
          >
            <FaFacebook />
          </a>
        </div>
        <div>
          <p>© Copyright 2020</p>
        </div>
      </footer>
      <style jsx>{`
        footer {
          background-color: ${colors.white};
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border-bottom: 0.5rem solid ${colors.secondary};
          -webkit-box-shadow: 0 8px 6px 8px ${colors.lightgray};
          -moz-box-shadow: 0 8px 6px 8px ${colors.lightgray};
          box-shadow: 0 8px 6px 8px ${colors.lightgray};
          z-index: 10;
        }
        footer a {
          transition: all 0.5s ease;
          font-size: 2rem;
          padding: 0.5rem 0.5rem 0 0.5rem;
          color: ${colors.secondary};
        }
        footer a:hover {
          color: ${colors.primary};
        }
      `}</style>
    </>
  );
};

export default Footer;
