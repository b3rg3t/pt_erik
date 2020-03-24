import React from "react";

import ComponentRenderer from "../components/componentRenderer";
import { BASE_URL, headers, body } from "../config/config";

var fetch = require("isomorphic-unfetch");

export interface Articles {
  id: string;
  picposition: boolean;
  title: string;
  textcolor: { hex: string };
  toptext: string;
  secondtext: string;
  smallImagePosition: boolean;
  opacity: number;
  overlaycolor: { hex: string };
  backgroundimage?: {
    alt: string;
    title?: string;
    url?: string;
    width: string;
    height: string;
  };
  smallimage: {
    alt: string;
    title?: string;
    url?: string;
    width: string;
    height: string;
  };
}

export const config = { amp: "hybrid" };

const Index: React.FunctionComponent = (props: any) => {
  return (
    <ComponentRenderer data={props.response.data} />
  );
};

//@ts-ignore
Index.getInitialProps = async (): Promise<{}> => {
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

export default Index;
