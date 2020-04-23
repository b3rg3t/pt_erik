import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";
import Courses from "../components/CoursesFolder/Courses";
import { BASE_URL, headers } from "../config/config";
import { body } from "../config/massageconfig";
import TrainingBlock from "../components/TrainingBlockFolder/TrainingBlock";
import fetch from 'isomorphic-unfetch';
import { typescriptobj } from "../helpers/typescriptobj";

export const config = { amp: "hybrid" };

interface allMassageoffersProps {
  id: string;
  price: string;
  time: number;
  title: string;
  content: string;
  position: string;
  image: {
    alt: string;
    url: string;
    height: string;
    width: string;
  }
}
interface MassageProps {
  response: {
    allMassageoffers: allMassageoffersProps;
    massage: typescriptobj;
  }
}

const Massage = ({ response }: MassageProps): React.ReactElement => {
  let massage:any = new Array;
  massage.push(response?.massage);
  return (
    <Layout title={`${SEOdata.title} | Massage`}>
      <TrainingBlock profiles={massage} />
      <Courses offers={response?.allMassageoffers} />
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
  return { response: response?.data ? response.data : "" };
};


export default Massage;
