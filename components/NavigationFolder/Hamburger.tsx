import React from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import { Links, colors, SEOdata, SocialMedia } from "../../helpers/helpdata";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  showSettings(event) {
    event.preventDefault();
  }
  handleClick() {
    this.setState({ isOpen: true });
  }
  render() {
    
    return (
      <>
        <style jsx global>
          {`
            /* Position and sizing of burger button */
            .bm-burger-button {
              position: fixed;
              width: 28px;
              height: 24px;
              right: 1.5rem;
              top: 1.2rem;
              z-index: 10000;
            }

            /* Color/shape of burger icon bars */
            .bm-burger-bars {
              background: ${colors.secondary};
            }

            /* Color/shape of burger icon bars on hover*/
            .bm-burger-bars-hover {
              background: #a90000;
            }

            /* Position and sizing of clickable cross button */
            .bm-cross-button {
              height: 24px;
              width: 24px;
            }

            /* Color/shape of close button cross */
            .bm-cross {
              background: #bdc3c7;
            }

            /*
            .bm-menu-wrap {
              position: fixed;
              height: 100%;
              max-width: 200px;
            }

            /* General sidebar styles */
            .bm-menu {
              background: ${colors.secondary};
              padding: 1rem 1.5rem 0;
              font-size: 1.15em;
            }

            /* Morph shape necessary with bubble or elastic */
            .bm-morph-shape {
              fill: #373a47;
            }

            /* Wrapper for item list */
            .bm-item-list {
              color: #b8b7ad;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }

            /* Individual item */
            .bm-item {
              display: inline-block;
              padding-bottom: 2rem;
            }

            /* Styling of overlay */
            .bm-overlay {
              background: rgba(0, 0, 0, 0.3);
            }
            .ham-container {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .ham-links {
              color: white;
              font-size: 1.2rem;
            }
            .ham-li {
              display: flex;
              justify-content: center;
              list-style: none;
              padding: 0;
              margin: 1rem;
              text-align: center;
            }
            .ham-ul {
              margin: 0;
              padding: 1rem;
            }
            .ham-ul:focus {
              outline: none;
            }
            .social-media-div {
              display: flex;
              justify-content: space-around;
              color: white;
              align-items: center;
            }
            .social-media-div a {
              color: white;
              font-size: 1.6rem;
            }
            .logo-link a {
              display: flex;
              align-items: center;
              justify-content: center;
              border-bottom: 1px solid white;
              padding-bottom: 0.5rem;
              color: white;
            }
          `}
        </style>
        <Menu
          right
          width={"200px"}
          //@ts-ignore
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <ul className="ham-ul">
            <li onClick={() => this.closeMenu()} className="logo-link">
              <Link href={`#hero`}>
                <a>
                  <GiEarthAfricaEurope color="white" size="3rem" />
                  {SEOdata.title.toUpperCase()}
                </a>
              </Link>
            </li>
            {Links &&
              Links.map((link, index) => (
                <li onClick={() => this.closeMenu()} key={index} className="ham-li">
                  <Link href={link.href}>
                    <a className="ham-links">{link.title}</a>
                  </Link>
                </li>
              ))}
          </ul>
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
        </Menu>
      </>
    );
  }
}

export default Hamburger;
