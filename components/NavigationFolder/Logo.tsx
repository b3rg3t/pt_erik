import React from "react";
import Link from "next/link";
import { SEOdata, AMPurl, colors } from "../../helpers/helpdata";
import { useAmp } from "next/amp";

const Logo = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <>
      <Link href={!isAmp ? `/` : `${AMPurl.url}`}>
        <a>
          <img
            src="/images/obstacle_fitness-dumbell-transparent.png"
            alt="Obstacle fitness logo"
            width={"auto"}
            height={40}
          />
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
