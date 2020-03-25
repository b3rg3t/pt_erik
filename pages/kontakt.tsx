import React from "react";
import ContactBlock from "../components/ContactBlockFolder/ContactBlock";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata, heights } from "../helpers/helpdata";
import { useAmp } from "next/amp";
import Form from "../components/FormFolder/Form";
import MapContainer from "../components/MapFolder/MapContainer";

export const config = { amp: "hybrid" };

const Kontakt = ({ url }): React.ReactElement => {
  const isAmp = useAmp();
  console.log(url.pathname)
  return (
    <Layout title={`${SEOdata.title} | Kontakt`} navbar={url.pathname}>
      {!isAmp ? (
        <div style={{ minHeight: `calc(100vh - ${heights.footerheight})` }}>
          <ContactBlock />
        </div>
      ) : (
          <>
            <div
              style={{
                minHeight: `calc(100vh)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Form />
            </div>
            <div
              style={{
                minHeight: `calc(100vh - ${heights.footerheight})`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <MapContainer />
            </div>
          </>
        )}
    </Layout>
  );
};

Kontakt.getInitialProps = ({ query }) => {
  return { query }
}
export default Kontakt;
