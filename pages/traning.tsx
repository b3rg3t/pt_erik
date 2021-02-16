import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";
import { BASE_URL, headers } from "../config/config";
import { body } from "../config/trainingconfig";
import TrainingBlock from "../components/TrainingBlockFolder/TrainingBlock";
import Loading from "../components/loading";
import fetch from "isomorphic-unfetch";
import { typescriptobj } from "../helpers/typescriptobj";

export const config = { amp: "hybrid" };

export interface TraningProps {
  response: {
    allTranings: [typescriptobj];
  };
}

const Traning = ({ response }: TraningProps): React.ReactElement => {
  return (
    <Layout
      title={`${SEOdata.title} | Träning`}
      //@ts-ignore
      logo={response?.logo?.pageLogo}
    >
      {response.allTranings ? (
        <TrainingBlock profiles={response.allTranings} />
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

Traning.getInitialProps = async (): Promise<{}> => {
  let response;
  try {
    response = await fetch(BASE_URL, {
      method: "POST",
      headers,
      body,
    });
    response = await response.json();
  } catch (error) {
    console.error(error);
  }
  return { response: response?.data ? response.data : "" };
};

export default Traning;
