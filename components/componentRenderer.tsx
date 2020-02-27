import React from "react";

import Layout from "../components/LayoutFolder/Layout";
import Hero from "../components/HeroFolder/Hero";
import ImageBlock from "../components/ImageBlockFolder/ImageBlock";
import ProfilBlock from "../components/ProfileFolder/ProfilBlock";
import CardBlock from "../components/CardBlockFolder/CardBlock";
import ContactBlock from "../components/ContactBlockFolder/ContactBlock";
import { SEOdata, profileData } from "../helpers/helpdata";
import AmpImageBlock from "./ImageBlockFolder/AmpImageBlock";
import AmpProfilBlock from "./ProfileFolder/AmpProfileBlock";
import AmpContact from "./ContactBlockFolder/AmpContact";
import Courses from "../components/CoursesFolder/Courses";
import AmpCourses from "./CoursesFolder/AmpCourses";

import { useAmp } from "next/amp";

const ComponentRenderer = (props: any): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <Layout title={`${SEOdata.title} | Hem`}>
      {!isAmp ? (
        <>
          <section id="hero">
            <Hero />
          </section>
          <section id="cards">
            <CardBlock />
          </section>
          <section id="about">
            <ProfilBlock profil={profileData} />
          </section>
          <section id="articles">
            <ImageBlock allArticles={props.data.allArticles} />
          </section>
          <section id="courses">{/* <Courses /> */}</section>
          <section id="contact">
            <ContactBlock />
          </section>
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
            <AmpProfilBlock profil={profileData} />
          </section>
          <section id="articles">
            <AmpImageBlock allArticles={props.data.allArticles}/>
          </section>
          <section id="courses">{/* <AmpCourses /> */}</section>
          <section id="contact">
            <AmpContact />
          </section>
        </>
      )}
    </Layout>
  );
};

export default ComponentRenderer;
