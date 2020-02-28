import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";
import { useAmp } from "next/amp";
import { trainingData } from "../helpers/trainingData";
import { hinderbanaData, hinderbanaTags } from "../helpers/hinderbanaData";
import { lopningData, lopningTags } from "../helpers/lopningData";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";
import AmpProfilBlock from "../components/ProfileFolder/AmpProfileBlock";

export const config = { amp: "hybrid" };

const Traning = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <Layout title={`${SEOdata.title} | Träning`}>
      {!isAmp ? (
        <>
          <ProfilBlock profil={trainingData} />
          <ProfilBlock profil={hinderbanaData} tags={hinderbanaTags}/>
          <ProfilBlock profil={lopningData} tags={lopningTags}/>
        </>
      ) : (
        <>
          <AmpProfilBlock profil={trainingData} />
          <AmpProfilBlock profil={hinderbanaData} tags={hinderbanaTags}/>
          <AmpProfilBlock profil={lopningData} tags={lopningTags}/>
        </>
      )}
    </Layout>
  );
};

export default Traning;
