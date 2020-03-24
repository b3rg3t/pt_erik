import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";
import { useAmp } from "next/amp";
import { trainingData } from "../helpers/trainingData";
import { hinderbanaData, hinderbanaTags } from "../helpers/hinderbanaData";
import { lopningData, lopningTags } from "../helpers/lopningData";
import AmpProfilBlock from "../components/ProfileFolder/AmpProfileBlock";
import { BASE_URL, headers } from "../config/config";
import { body } from "../config/trainingconfig";
import TrainingBlock from "../components/TrainingBlockFolder/TrainingBlock";


export const config = { amp: "hybrid" };

const Traning = (props: any): React.ReactElement => {
  const isAmp = useAmp();
  console.log(props)
  return (
    <Layout title={`${SEOdata.title} | Träning`}>
      {!isAmp ? (
        <>
        <TrainingBlock profiles={props.response.data.allTranings} />
          {/* <ProfilBlock profil={trainingData} />
          <ProfilBlock profil={hinderbanaData} tags={hinderbanaTags} />
          <ProfilBlock profil={lopningData} tags={lopningTags} /> */}
        </>
      ) : (
          <>
            <AmpProfilBlock profil={trainingData} />
            <AmpProfilBlock profil={hinderbanaData} tags={hinderbanaTags} />
            <AmpProfilBlock profil={lopningData} tags={lopningTags} />
          </>
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
      body
    });
    response = await response.json();
  } catch (error) {
    console.error(error);
  }
  return { response };
};

export default Traning;
