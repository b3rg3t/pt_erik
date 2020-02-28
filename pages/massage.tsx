import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";
import { massageData, massageOffer } from "../helpers/massageData";
import Courses from "../components/CoursesFolder/Courses";
import { useAmp } from "next/amp";
import AmpProfilBlock from "../components/ProfileFolder/AmpProfileBlock";
import AmpCourses from "../components/CoursesFolder/AmpCourses";

export const config = { amp: "hybrid" };

const Massage = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <Layout title={`${SEOdata.title} | Massage`}>
      {!isAmp ? (
        <>
          <ProfilBlock profil={massageData} />
          <Courses offers={massageOffer} />
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

export default Massage;
