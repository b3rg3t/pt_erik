import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata, heights, AMPurl } from "../helpers/helpdata";
import { BASE_URL, headers } from "../config/config";
import Link from 'next/link';
import { body } from "../config/priceconfig";
import PriceList from "../components/PriceListFolder/PriceList";
import { useAmp } from "next/amp";
import fetch from 'isomorphic-unfetch';


export const config = { amp: "hybrid" };

export interface PriceProps {
  prices: [{ name: string; price: string }];
  title: string;
  id: string;
}

const Priser = (props: any): React.ReactElement => {
  const isAmp = useAmp();
  console.log(props);
  return (
    <Layout title={`${SEOdata.title} | Priser`} navbar={true}>
      <div
        style={{
          minHeight: `calc(100vh - ${heights.footerheight})`,
          padding: "4rem 1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h2>Priser</h2>
        <p style={{ padding: "2rem 1rem" }}>
          Den träning jag lär ut är bred och såklart anpassas den efter individ
          och förfrågan.
        </p>
        <PriceList pricelist={props.response.data} />
        <p style={{ padding: "1rem" }}>Hör gärna av dig/er för mer information.  För att boka något var vänligen använd kontakt formuläret.</p>
        <div style={{ paddingTop: "1rem" }}>
          <Link href={`/${isAmp ? "kontakt" + AMPurl.url : "kontakt"}`} as={`/${isAmp ? "kontakt" + AMPurl.url : "kontakt"}`}>
            <a className="main-btn course-btn" style={{ display: "flex", justifyContent: "center" }}>Kontakt</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};


Priser.getInitialProps = async (): Promise<{}> => {
  let response;
  try {
    response = await fetch(BASE_URL, {
      method: "POST",
      headers,
      body
    });
    response = await response.json();
  } catch (error) {
    console.error(error);
  }
  return { response };
};

export default Priser;
