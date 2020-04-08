import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";
import Courses from "../components/CoursesFolder/Courses";
import { BASE_URL, headers } from "../config/config";
import { body } from "../config/massageconfig";
import TrainingBlock from "../components/TrainingBlockFolder/TrainingBlock";
import fetch from 'isomorphic-unfetch';

export const config = { amp: "hybrid" };

const Massage = (props: any): React.ReactElement => {
  let massage = new Array;
  massage.push(props?.response?.data?.massage)
  return (
    <Layout title={`${SEOdata.title} | Massage`}>
        <TrainingBlock profiles={massage} />
        <Courses offers={props?.response?.data?.allMassageoffers} />
    </Layout>
  );
};

Massage.getInitialProps = async (): Promise<{}> => {
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


export default Massage;
