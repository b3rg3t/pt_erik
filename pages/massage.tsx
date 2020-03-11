import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";
import { massageData, massageOffer } from "../helpers/massageData";
import Courses from "../components/CoursesFolder/Courses";
import { useAmp } from "next/amp";
import { BASE_URL, headers } from "../config/config";
import { body } from "../config/massageconfig";
import AmpProfilBlock from "../components/ProfileFolder/AmpProfileBlock";
import AmpCourses from "../components/CoursesFolder/AmpCourses";

export const config = { amp: "hybrid" };

const Massage = (props: any): React.ReactElement => {
  // console.log(props.response.data.allMassageoffers)
  const isAmp = useAmp();
  return (
    <Layout title={`${SEOdata.title} | Massage`}>
      {!isAmp ? (
        <>
          <ProfilBlock profil={massageData} />
          <Courses offers={props.response.data.allMassageoffers} />
        </>
      ) : (
        <>
          <AmpProfilBlock profil={massageData} />
          <AmpCourses offers={massageOffer} />
        </>
      )}
    </Layout>
  );
};

//@ts-ignore
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
