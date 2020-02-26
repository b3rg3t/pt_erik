import React from "react";
import Link from "next/link";
import { GiEarthAfricaEurope } from "react-icons/gi";
import { SEOdata, AMPurl, colors } from "../../helpers/helpdata";
import { useAmp } from "next/amp";

const Logo = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      <Link href={!isAmp ? `/` : `${AMPurl.url}`}>
        <a>
          <GiEarthAfricaEurope color="white" size="3rem" />
          {SEOdata.title.toUpperCase()}
        </a>
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
      `}</style>
    </>
  );
};

export default Logo;
