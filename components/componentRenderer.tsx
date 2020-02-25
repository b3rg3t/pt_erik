import React from "react";

import Layout from "../components/LayoutFolder/Layout";
import Hero from "../components/HeroFolder/Hero";
import ImageBlock from "../components/ImageBlockFolder/ImageBlock";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";
import CardBlock from "../components/CardBlockFolder/CardBlock";
import AmpStyling from "../components/AMP/AmpStyling";
import ContactBlock from "../components/ContactBlockFolder/ContactBlock";
import { SEOdata } from "../helpers/helpdata";
import Courses from "../components/CoursesFolder/Courses";

import { useAmp } from "next/amp";
import AmpCourses from "./CoursesFolder/AmpCourses";
import AmpImageBlock from "./ImageBlockFolder/AmpImageBlock";
import AmpProfilBlock from "./ProfileFolder/AmpProfileBlock";
import AmpContact from "./ContactBlockFolder/AmpContact";

const ComponentRenderer = (props: any): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <Layout title={`${SEOdata.title} | Yoga`}>
      {!isAmp ? (
        <>
          <section id="hero">
            <Hero />
          </section>
          <section id="cards">
            <CardBlock />
          </section>
          <section id="about">
            <ProfilBlock />
          </section>
          <section id="articles">
            <ImageBlock />
          </section>
          <section id="courses">
            <Courses />
          </section>
          <section id="contact">
            <ContactBlock />
          </section>
          <AmpStyling />
        </>
      ) : (
        <>
          <section id="hero">
            <Hero />
          </section>
          <section id="cards">
            <CardBlock />
          </section>
          <section id="about">
            <AmpProfilBlock />
          </section>
          <section id="articles">
            <AmpImageBlock />
          </section>
          <section id="courses">
            <AmpCourses />
          </section>
          <section id="contact">
            <AmpContact />
          </section>
          <AmpStyling />
        </>
      )}
    </Layout>
  );
};

export default ComponentRenderer;
