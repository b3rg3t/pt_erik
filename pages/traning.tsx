import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";
import { BASE_URL, headers } from "../config/config";
import { body } from "../config/trainingconfig";
import TrainingBlock from "../components/TrainingBlockFolder/TrainingBlock";
import Loading from "../components/loading";

export const config = { amp: "hybrid" };

const Traning = (props: any): React.ReactElement => {
  return (
    <Layout title={`${SEOdata.title} | Träning`}>
      {props?.response?.data?.allTranings ? <TrainingBlock profiles={props.response.data.allTranings} /> : <Loading />}
    </Layout>
  );
};

// Traning.getInitialProps = async (): Promise<{}> => {
//   let response;
//   try {
//     response = await fetch(BASE_URL, {
//       method: "POST",
//       headers,
//       body
//     });
//     response = await response.json();
//   } catch (error) {
//     console.error(error);
//   }
//   return { response };
// };

export default Traning;
