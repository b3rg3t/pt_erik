import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata, heights } from "../helpers/helpdata";
import { BASE_URL, headers, body } from "../config";
import PriceList from "../components/PriceListFolder/PriceList";

export const config = { amp: "hybrid" };
var fetch = require("isomorphic-unfetch");

// interface PriceList{
//   prices: string[];
//   title: string;
//   id: string;
// }

const Priser = (props: any): React.ReactElement => {
  console.log(props); 
  return (
    <Layout title={`${SEOdata.title} | Priser`}>
      <div
        style={{
          height: `calc(100vh - ${heights.footerheight})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <PriceList pricelist={props.response.data}/>
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
