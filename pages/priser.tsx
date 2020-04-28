import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";
import { BASE_URL, headers } from "../config/config";
import { body } from "../config/priceconfig";
import fetch from 'isomorphic-unfetch';
import PriceBlock from "../components/PriceListFolder/PriceBlock";


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
  console.log(response.priceblock)
  return (
    <Layout title={`${SEOdata.title} | Priser`} navbar={true}>
      <PriceBlock response={response} />
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
  return { response: response?.data ? response.data : "" };
};

export default Priser;
