import React from "react";
import { SEOdata } from "../helpers/helpdata";
import Layout from "../components/LayoutFolder/Layout";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";
import { BASE_URL, headers } from "../config/config";
import { body } from "../config/profilconfig";
import TrainingBlock from "../components/TrainingBlockFolder/TrainingBlock";
import fetch from "isomorphic-unfetch";
import { typescriptobj } from "../helpers/typescriptobj";

export const config = { amp: "hybrid" };

export interface EducationProps {
  id: string;
  opacity: number;
  overlaycolor: {
    hex: string;
  };
  roundedimage: boolean;
  picposition: boolean;
  smallimage: {
    alt?: string;
    id?: string;
    width: string;
    height: string;
    url: string;
  };
  textcolor: {
    hex: string;
  };
  title: string;
  backgroundimage: {
    alt?: string;
    id?: string;
    height: string;
    url: string;
    width: string;
  };
  educations: {
    data: [string];
  };
  imageafter: string;
}

interface ProfilProps {
  response: {
    allProfiles: [typescriptobj];
    education: EducationProps;
  };
}

const Profil = ({ response }: ProfilProps): React.ReactElement => {
  return (
    <Layout 
      title={`${SEOdata.title} | Profil`}
      //@ts-ignore
      logo={response?.logo?.pageLogo}
     >
      <TrainingBlock profiles={response.allProfiles} />
      <ProfilBlock profil={response.education} />
    </Layout>
  );
};

Profil.getInitialProps = async (): Promise<{}> => {
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

export default Profil;
