import React from "react";

import Layout from "../components/LayoutFolder/Layout";
import Hero from "../components/HeroFolder/Hero";
import TrainingBlock from "./TrainingBlockFolder/TrainingBlock";
import CardBlock from "../components/CardBlockFolder/CardBlock";
import ContactBlock from "../components/ContactBlockFolder/ContactBlock";

import { SEOdata } from "../helpers/helpdata";

const ComponentRenderer = ({ response }): React.ReactElement => {
  console.log(response.heroblock)
  return (
    <Layout title={`${SEOdata.title} | Hem`}>
        <>
          <section id="hero">
            {/* <Hero hero={response.heroblock} /> */}
          </section>
          <section id="cards">
            <CardBlock allCards={response.allCardoffers} cardblock={response.cardblock} />
          </section>
          <section id="about">
            <TrainingBlock profiles={response.allHomepages} />
          </section>
          <section id="contact">
            <ContactBlock contactblock={response.contactblock}/>
          </section>
        </>
    </Layout>
  );
};

export default ComponentRenderer;
