import React from "react";
import { SEOdata, utbildning } from "../helpers/helpdata";
import Layout from "../components/LayoutFolder/Layout";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";
import AmpProfilBlock from "../components/ProfileFolder/AmpProfileBlock";
import { useAmp } from "next/amp";
import { BASE_URL, headers } from "../config/config";
import { body } from "../config/profilconfig";
import TrainingBlock from "../components/TrainingBlockFolder/TrainingBlock";
import AmpTrainingBlock from "../components/TrainingBlockFolder/AmpTrainingBlock";


export const config = { amp: "hybrid" };

const Profil = (props: any): React.ReactElement => {
  const isAmp = useAmp();
  console.log(props);
  return (
    <Layout title={`${SEOdata.title} | Profil`}>
      {isAmp ? (
        <>
          <AmpTrainingBlock profiles={props.response.data.allProfiles} />
          <AmpProfilBlock profil={utbildning} />
        </>
      ) : (
          <>
            <TrainingBlock profiles={props.response.data.allProfiles} />
            <ProfilBlock profil={utbildning} />
          </>
        )}
    </Layout>
  );
};

Profil.getInitialProps = async (): Promise<{}> => {
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

export default Profil;
