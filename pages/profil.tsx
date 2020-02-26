import React from "react";

// import ComponentRenderer from "../components/componentRenderer";
// import { BASE_URL, headers, body } from "../config";
import { SEOdata, profileData } from "../helpers/helpdata";
import Layout from "../components/LayoutFolder/Layout";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";
import AmpStyling from "../components/AMP/AmpStyling";

export const config = { amp: "hybrid" };

const Profil: React.FunctionComponent = (props: any) => {
  return (
    <Layout title={`${SEOdata.title} | Profil`}>
      <ProfilBlock profil={profileData}/>
      <AmpStyling />
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
