import React from "react";
import ContactBlock from "../components/ContactBlockFolder/ContactBlock";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";
import { useAmp } from "next/amp";
import AmpContact from "../components/ContactBlockFolder/AmpContact";

export const config = { amp: "hybrid" };

const Kontakt = (): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <Layout title={`${SEOdata.title} | Kontakt`}>
      {!isAmp ? (
        <div style={{ minHeight: "calc(100vh - 100px)" }}>
          <ContactBlock />
        </div>
      ) : (
        <div style={{ minHeight: "calc(100vh - 100px)" }}>
          <AmpContact />
        </div>
      )}
    </Layout>
  );
};

export default Kontakt;
