import React from "react";
import ContactBlock from "../components/ContactBlockFolder/ContactBlock";
import Layout from "../components/LayoutFolder/Layout";
import { SEOdata, heights } from "../helpers/helpdata";
import { useAmp } from "next/amp";
import Form from "../components/FormFolder/Form";
import MapContainer from "../components/MapFolder/MapContainer";
import { BASE_URL, headers } from "../config/config";
import { body } from "../config/contactconfig";

export const config = { amp: "hybrid" };

const Kontakt = ({ response }): React.ReactElement => {
  const isAmp = useAmp();
  return (
    <Layout title={`${SEOdata.title} | Kontakt`} navbar={true}>
      {!isAmp ? (
        <div style={{ minHeight: `calc(100vh - ${heights.footerheight})` }}>
          <ContactBlock contactblock={response.contactblock} />
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

Kontakt.getInitialProps = async (): Promise<{}> => {
  let response;
  try {
    response = await fetch(BASE_URL, {
      method: "POST",
      headers,
      body
    });
    response = await response.json();
  } catch (error) {
    console.error(error);
  }
  return { response: response.data };
};

export default Kontakt;
