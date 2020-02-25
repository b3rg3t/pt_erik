import React from "react";
import Link from "next/link";
import { colors, SocialMedia, SEOdata, Links } from "../../helpers/helpdata";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

import { GiEarthAfricaEurope } from "react-icons/gi";

const AmpSidebar = (): React.ReactElement => {
  return (
    Links && (
      <>
        <div style={{ display: "block" }}>
          <amp-sidebar id="sidebar1" layout="nodisplay" side="right">
            <nav>
              <ul>
                <li className="logo-link">
                  <Link href={`#hero`}>
                    <a>
                      <GiEarthAfricaEurope color="white" size="3rem" />
                      {SEOdata.title.toUpperCase()}
                    </a>
                  </Link>
                </li>
                {Links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <a>{link.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <ul className="social-media-div">
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    title={SocialMedia.linkedin.title}
                    href={SocialMedia.linkedin.url}
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    title={SocialMedia.instagram.title}
                    href={SocialMedia.instagram.url}
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    title={SocialMedia.facebook.title}
                    href={SocialMedia.facebook.url}
                  >
                    <FaFacebook />
                  </a>
                </li>
              </ul>
            </div>
          </amp-sidebar>
        </div>
        <style jsx>{`
          #sidebar1 {
            background-color: ${colors.secondary};
            z-index: 2147483647;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .menu {
            fill: #fff;
            height: 24px;
            width: 24px;
            cursor: pointer;
            margin: auto;
          }
          button {
            border: none;
            background: none;
            color: white;
            padding: 0;
            font-size: 1.6rem;
            display: flex;
            align-items: center;
          }
          ul {
            margin: 0;
            padding: 1rem;
          }
          li {
            list-style: none;
            padding: 0;
            margin: 1rem;
            text-align: center;
          }
          a {
            color: white;
            text-decoration: none;
            font-size: 1.2rem;
          }
          .social-media-div {
            display: flex;
            justify-content: center;
            align-items: center;
            
          }
          .social-media-div a{
            font-size: 1.6rem;
          }
          .logo-link a {
            display: flex;
            align-items: center;
            border-bottom: 1px solid white;
            padding-bottom: 0.5rem;
          }
        `}</style>
      </>
    )
  );
};

export default AmpSidebar;
