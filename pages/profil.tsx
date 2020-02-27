import React from "react";

// import ComponentRenderer from "../components/componentRenderer";
// import { BASE_URL, headers, body } from "../config";
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

// //@ts-ignore
// Profile.getInitialProps = async (): Promise<{}> => {
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

export default Profil;
