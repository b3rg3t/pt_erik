import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAmp } from "next/amp";
import { colors, Links, heights } from "../../helpers/helpdata";

import AmpSidebar from "./AmpSidebar";

import { FaBars } from "react-icons/fa";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

const Navigation = ({ scrollValue }): React.ReactElement => {
  const isAmp = useAmp();
  const [scroll, setScroll] = useState(0);
  const [top] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    const el = document.querySelector(".nav");
    if (el !== null) {
      scroll > 0 ? el.classList.add("fixed-nav") : null;
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [top]);

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
          className="nav" id={scroll > top || scrollValue === 1 ? "fixed-nav" : ""}
          style={{
            height: `${heights.navHeigt}`,
            display: `${isAmp ? "none" : ""}`
          }}
        >
          <div className="nav__boxes">
            <Logo />
          </div>
          <div className="nav__boxes"></div>
          {!isAmp && (
            <div className="nav__boxes">
              <ul className="nav__boxes">
                {Links &&
                  Links.map((link, index) => (
                    <li key={index}>
                      <Link href={link.href}>
                        <a>{link.title.toUpperCase()}</a>
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
            transition: all 0.5s ease;
            top: 0;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            border-top: 0.5rem solid #00000000;
          }
          #fixed-nav {
            background-color: ${colors.navbar};
            
            border-top: 0.5rem solid ${colors.secondary};
          }
          @supports (-ms-ime-align:auto) {
            #fixed-nav {
              background-color: black;
            }
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
