import { colors, font } from "../../helpers/helpdata";

const AmpStyling = (): React.ReactElement => {
  return (
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      body {
        padding: 0;
        margin: 0;
        font-family: ${font.fontFamily};
      }
      html {
        scroll-behavior: smooth;
        overflow-x: hidden;
      }
      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        border-left: 1px solid rgb(218, 155, 155, 0.5);
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: ${colors.secondary};
        border-radius: 10px;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ${colors.primary};
      }

      .layout {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .site-content {
        flex: 1;
      }
      a {
        text-decoration: none;
      }
      img {
        animation: easein 3s;
      }
      a,
      p,
      ul,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      figcaption {
        color: ${colors.third};
        margin: 0;
        padding: 0;
      }
      h1 {
        font-size: 2.6rem;
      }
      h2 {
        font-size: 2.3rem;
      }
      h3 {
        font-size: 2rem;
        font-weight: 700;
      }
      li {
        list-style: none;
      }
      .main-btn {
        transition: all 0.5s ease;
        height: 40px;
        width: 160px;
        margin: auto;
        font-weight: 700;
        font-size: 1rem;
        background-color: ${colors.secondary};
        color: ${colors.white};
        border-radius: 30px;
        border: 1px solid ${colors.secondary};
        padding: 0.5rem 1rem;
        cursor: pointer;
      }
      .main-btn:hover {
        background: ${colors.primary};
        border: 1px solid ${colors.primary};
      }
      .main-btn:focus {
        outline: none;
        border: 1px solid ${colors.primary};
        border-radius: 30px;
      }
      .main-btn:disabled {
        cursor: not-allowed;
        background-color: ${colors.lightgray};
        border: 1px solid ${colors.lightgray};
      }
      .external-link {
        transition: all 0.5s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        width: 160px;
        margin: auto;
        font-weight: 700;
        font-size: 1.2rem;
        background-color: ${colors.secondary};
        color: ${colors.white};
        border-radius: 30px;
        border: 1px solid ${colors.secondary};
        padding: 0.5rem 1rem;
        cursor: pointer;
      }
      .external-link:hover {
        background: ${colors.primary};
        border: 1px solid ${colors.primary};
      }
      .external-link:focus {
        outline: none;
        border: 1px solid ${colors.primary};
        border-radius: 30px;
      }
      .external-link:disabled {
        cursor: not-allowed;
        background-color: ${colors.lightgray};
        border: 1px solid ${colors.lightgray};
      }
    `}</style>
  );
};

export default AmpStyling;
