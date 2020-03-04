import React from "react";

import ComponentRenderer from "../components/componentRenderer";
import { BASE_URL, headers, body } from "../config";

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

interface PageData {
  data: { allArticles: Articles[] };
}
export const DataContext = React.createContext<PageData | null>(null);

export const config = { amp: "hybrid" };

const Index: React.FunctionComponent = (props: any) => {
  return (
    <DataContext.Provider value={props.response}>
      <ComponentRenderer data={props.response.data}/>
    </DataContext.Provider>
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
