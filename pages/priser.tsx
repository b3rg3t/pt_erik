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

export interface PrisListaProps {
  id: string;
  title: string;
  prices: [{
    name: string;
    price: string;
  }];
  description: string;
  routepage: [string];
  linkpage: {
    id: string;
    title: string;
  }
  secondcolor: {
    hex: string;
  }
  color: {
    hex: string;
  }
}
export interface priceblockprops {
  id: string;
  opacity: number;
  secondtext?: string;
  backgroundimage: {
    alt?: string;
    url: string;
    width: string;
    height: string;
  }
  toptext?: string;
  title?: string;
  textcolor: {
    hex: string;
  }
  overlaycolor: {
    hex: string;
  }
}
export interface PrisProps {
  response: {
    allPricelists: PrisListaProps[],
    priceblock: priceblockprops
  }
}

const Priser = ({ response }: PrisProps): React.ReactElement => {
  const isAmp = useAmp();
  console.log(response.priceblock)
  return (
    <Layout title={`${SEOdata.title} | Priser`} navbar={true}>
      <div
        style={{
          minHeight: `calc(100vh - ${heights.footerheight})`,
          padding: "4rem 1rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: `${response.priceblock?.textcolor?.hex}` }}>{response.priceblock.title}</h2>
        <p style={{ color: `${response.priceblock?.textcolor?.hex}`, padding: "1rem" }}>
          {response.priceblock.toptext}
        </p>
        <PriceList pricelist={response.allPricelists} />
        <p style={{ color: `${response.priceblock?.textcolor?.hex}`, padding: "1rem" }}>{response.priceblock.secondtext}</p>
        <div style={{  paddingTop: "1rem" }}>
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
  return { response: response.data };
};

export default Priser;
