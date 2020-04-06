import React from "react";

import Layout from "../components/LayoutFolder/Layout";
import Hero from "../components/HeroFolder/Hero";
import TrainingBlock from "./TrainingBlockFolder/TrainingBlock";
import CardBlock from "../components/CardBlockFolder/CardBlock";
import ContactBlock from "../components/ContactBlockFolder/ContactBlock";
import AmpContact from "./ContactBlockFolder/AmpContact";

import { SEOdata } from "../helpers/helpdata";
import { useAmp } from "next/amp";


const ComponentRenderer = (props: any): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <Layout title={`${SEOdata.title} | Hem`}>
      {!isAmp ? (
        <>
          <section id="hero">
            <Hero hero={props.data.heroblock} />
          </section>
          <section id="cards">
            <CardBlock allCards={props.data.allCardoffers} />
          </section>
          <section id="about">
            <TrainingBlock profiles={props.data.allHomepages} />
          </section>
          <section id="contact">
            <ContactBlock />
          </section>
        </>
      ) : (
          <>
            <section id="hero">
              <Hero hero={props.data.heroblock} />
            </section>
            <section id="cards">
              <CardBlock allCards={props.data.allCardoffers} />
            </section>
            <section id="about">
              <TrainingBlock profiles={props.data.allHomepages} />
            </section>
            <section id="contact">
              <AmpContact />
            </section>
          </>
        )}
    </Layout>
  );
};

export default ComponentRenderer;
