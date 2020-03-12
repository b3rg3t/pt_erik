import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata, heights } from "../helpers/helpdata";
import { BASE_URL, headers } from "../config/config";
import { body } from "../config/priceconfig";
import PriceList from "../components/PriceListFolder/PriceList";

export const config = { amp: "hybrid" };
var fetch = require("isomorphic-unfetch");

export interface PriceProps {
  prices: [{ name: string; price: string }];
  title: string;
  id: string;
}

const Priser = (props: any): React.ReactElement => {
  return (
    <Layout title={`${SEOdata.title} | Priser`}>
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
        <p>
          Den träning jag lär ut är bred och såklart anpassas den efter individ
          och förfrågan.
        </p>
        <PriceList pricelist={props.response.data} />
        <p>Hör gärna av dig/er för mer information.</p>
      </div>
    </Layout>
  );
};

//@ts-ignore
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
