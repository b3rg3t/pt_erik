import React from "react";
import Link from "next/link";
import { SEOdata, AMPurl, colors } from "../../helpers/helpdata";
import { useAmp } from "next/amp";

const Logo = ({ logo }): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      {isAmp ? (
        <amp-img src={logo?.url} alt={logo?.alt} width={"auto"} height={40} />
      ) : (
        <img src={logo?.url} alt={logo?.alt} width={"auto"} height={40} />
      )}
      <Link href={!isAmp ? `/` : `${AMPurl.url}`}>
        <a>{SEOdata.title.toUpperCase()}</a>
      </Link>
      <style jsx>{`
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: ${colors.white};
          font-weight: bold;
          transition: all 0.5s ease;
        }
        a:hover {
          color: ${colors.secondary};
        }
        img {
          margin-right: 8px;
        }
        @media only screen and (max-width: 600px) {
          a:hover {
            color: white;
          }
        }
      `}</style>
    </>
  );
};

export default Logo;
