import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata, heights } from "../helpers/helpdata";

export const config = { amp: "hybrid" };

const Priser = (): React.ReactElement => {
  return (
    <Layout title={`${SEOdata.title} | Priser`}>
      <div
        style={{
          height: `calc(100vh - ${heights.footerheight})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1>Under byggnation!</h1>
        <p>Denna sida kommer uppdateras inom kort!</p>
      </div>
    </Layout>
  );
};

export default Priser;
