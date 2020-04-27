import React from "react";

import ComponentRenderer from "../components/componentRenderer";
import { BASE_URL, headers, body } from "../config/config";
import { typescriptobj } from "../helpers/typescriptobj";

import fetch from 'isomorphic-unfetch';

export const config = { amp: "hybrid" };

interface allCardoffersProps {
  id: string;
  name: string;
  routepage: string;
  smallpic: {
    alt?: string;
    height: string;
    width: string;
    url: string;
  }
  description: string;
}
interface heroblock {
  backgroundimage: {
    alt?: string;
    url: string;
    width: string;
    height: string;
  }
  id: string;
  header: string;
  content: string;
  opacity: number;
  overlaycolor: {
    hex: string;
  }
  textcolor: {
    hex: string;
  }
}

export interface contactblock {
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
export interface cardblock {
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

interface IndexProps {
  response: {
    allHomepages: typescriptobj,
    allCardoffers: allCardoffersProps,
    heroblock: heroblock,
    contactblock: contactblock,
    cardblock: cardblock
  }
}

const Index = ({ response }: IndexProps): React.ReactElement => {
  return (
    <ComponentRenderer response={response} />
  );
};

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
  return { response: response.data };
};

export default Index;
