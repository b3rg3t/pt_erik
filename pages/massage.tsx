import React from "react";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata } from "../helpers/helpdata";

const Massage = (): React.ReactElement => {
  return (
    <Layout title={`${SEOdata.title} | Massage`}>
      <div
        style={{
          height: "calc(100vh - 100px)",
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

export default Massage;
