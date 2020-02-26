import React from "react";
import ContactBlock from "../components/ContactBlockFolder/ContactBlock";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";

const Kontakt = (): React.ReactElement => {
  return (
    <Layout title={`${SEOdata.title} | Kontakt`}>
      <ContactBlock />
    </Layout>
  );
};

export default Kontakt;
