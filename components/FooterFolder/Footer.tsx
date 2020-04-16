import React from "react";
import { Links, AMPurl, heights } from "../../helpers/helpdata";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useAmp } from "next/amp";
import { colors, SocialMedia } from "../../helpers/helpdata";

const Footer = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      <footer style={{ height: `${heights.footerheight}` }}>
        <div>
          <ul className="footer__link">
            {Links &&
              Links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href + (isAmp ? AMPurl.url : "")}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <a
          className="footer__icons"
            target="_blank"
            rel="noreferrer noopener"
            title={SocialMedia.linkedin.title}
            href={SocialMedia.linkedin.url}
          >
            <FaLinkedin />
          </a>
          <a
          className="footer__icons"
            target="_blank"
            rel="noreferrer noopener"
            title={SocialMedia.instagram.title}
            href={SocialMedia.instagram.url}
          >
            <FaInstagram />
          </a>
          <a
          className="footer__icons"
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
          background-color: ${colors.footer};
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          border-bottom: 0.5rem solid ${colors.secondary};
          z-index: 10;
        }
        .footer__link {
          display: flex;
          margin: 0 0 2rem 0;
          padding: 1rem;
          border-top: 1px solid ${colors.secondary};
          border-bottom: 1px solid ${colors.secondary};
        }
        .footer__link a{
          color: white;
          transition: all 0.5s ease;
          margin: 0.5rem;
        }
        .footer__icons {
          transition: all 0.5s ease;
          font-size: 2rem;
          padding: 0.5rem 0.5rem 0 0.5rem;
          color: ${colors.white};
        }
        footer p {
          color: ${colors.white};
        }
        footer a:hover {
          color: ${colors.primary};
        }
        @media only screen and (max-width: 960px) {
          .footer__link {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
