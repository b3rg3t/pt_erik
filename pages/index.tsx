import React from "react";

import ComponentRenderer from "../components/componentRenderer";
import { BASE_URL, headers, body } from "../config";

var fetch = require("isomorphic-unfetch");

interface Course {
  id: string;
  title: string;
  spots: number;
  date: string;
  externalurl: string;
  content: string;
  location: string;
  time: string;
  image?: {
    alt: string;
    title?: string;
    url: string;
    width: string;
    height: string;
  };
}

interface Articles {
  id: string;
  title: string;
  topText: string;
  bottomText: string;
  smallImagePosition: boolean;
  opacity: number;
  overlaycolor: { hex: string };
  backgroundimg?: {
    alt: string;
    title?: string;
    url: string;
    width: string;
    height: string;
  };
  smallimg: {
    alt: string;
    title?: string;
    url: string;
    width: string;
    height: string;
  };
}

interface PageData {
  data: { allCourses: Course[]; allArticles: Articles[] };
}
export const DataContext = React.createContext<PageData | null>(null);

export const config = { amp: "hybrid" };

const Index: React.FunctionComponent = (props: any) => {
  return (
    <DataContext.Provider value={props.response}>
      <ComponentRenderer />
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
