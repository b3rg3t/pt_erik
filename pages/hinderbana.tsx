import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";
import ImageBlock from "../components/ImageBlockFolder/ImageBlock";

const Kontakt = (): React.ReactElement => {
  return (
    <Layout title={`${SEOdata.title} | Kontakt`}>
      <ImageBlock />
    </Layout>
  );
};

export default Kontakt;
