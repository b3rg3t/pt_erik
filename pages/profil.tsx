import React from "react";
import { SEOdata, fullprofileData, utbildning } from "../helpers/helpdata";
import Layout from "../components/LayoutFolder/Layout";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";
import AmpProfilBlock from "../components/ProfileFolder/AmpProfileBlock";
import { useAmp } from "next/amp";

export const config = { amp: "hybrid" };

const Profil: React.FunctionComponent = (props: any) => {
  const isAmp = useAmp();
  return (
    <Layout title={`${SEOdata.title} | Profil`}>
      {isAmp ? (
        <>
          <AmpProfilBlock profil={fullprofileData}/>
          <AmpProfilBlock profil={utbildning}/>
        </>
      ) : (
        <>
          <ProfilBlock profil={fullprofileData} />
          <ProfilBlock profil={utbildning} />
        </>
      )}
    </Layout>
  );
};

export default Profil;
