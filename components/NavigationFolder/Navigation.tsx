import React from "react";
import Link from "next/link";
import { useAmp } from "next/amp";
import heights, { colors, SEOdata, Links } from "../../helpers/helpdata";

import AmpSidebar from "./AmpSidebar";

import { GiEarthAfricaEurope } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import Hamburger from "./Hamburger";

const Navigation = (): React.ReactElement => {
  const isAmp = useAmp();

  return (
    <>
      <header>
        {!isAmp ? (
          <div className="ham-nav">
            <Hamburger />
          </div>
        ) : (
          <>
            <AmpSidebar />
            <div className="nav__boxes amp-button">
              <button
                style={{
                  border: "none",
                  color: `${colors.secondary}`,
                  background: "none",
                  fontSize: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                className="hamburger"
                on="tap:sidebar1.toggle"
              >
                <span aria-label="Toggle Navigation" />
                <FaBars />
              </button>
            </div>
          </>
        )}
        <nav
          style={{
            height: `${heights.navHeigt}`,
            display: `${isAmp ? "none" : ""}`
          }}
        >
          <div className="nav__boxes">
            <Link href={`#hero`}>
              <a>
                <GiEarthAfricaEurope size="3rem" />
                {SEOdata.title.toUpperCase()}
              </a>
            </Link>
          </div>
          <div className="nav__boxes"></div>
          {!isAmp && (
            <div className="nav__boxes">
              <ul className="nav__boxes">
                {Links &&
                  Links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>
                        <a>{link.title}</a>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
      <style jsx>
        {`
          nav {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: #00000090;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          nav a {
            color: white;
            transition: all 0.5s ease;
            display: flex;
            align-items: center;
            padding: 0.5rem;
            font-weight: bold;
          }
          nav a:hover {
            color: ${colors.secondary};
          }
          nav a:focus {
            outline: none;
            color: ${colors.secondary};
          }
          .nav__boxes {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .amp-button {
            position: fixed;
            justify-content: flex-end;
            z-index: 300;
            padding: 0;
            top: 1rem;
            right: 1.3rem;
          }
          .hamburger {
            padding: 0;
          }
          .ham-nav {
            display: none;
          }
          @media only screen and (max-width: 600px) {
            nav {
              display: none;
            }
            .ham-nav {
              display: block;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navigation;
