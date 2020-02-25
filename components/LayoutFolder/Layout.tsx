import * as React from "react";
import Head from "next/head";
import Navigation from "../NavigationFolder/Navigation";
import Footer from "../FooterFolder/Footer";
import { useAmp } from "next/amp";

type LayoutProps = {
  title?: string;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => {
  const isAmp = useAmp();
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        {isAmp && (
          <>
            <script
              async
              custom-element="amp-form"
              src="https://cdn.ampproject.org/v0/amp-form-0.1.js"
            ></script>
            <script
              async
              custom-element="amp-iframe"
              src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
            ></script>
            <script
              async
              custom-element="amp-sidebar"
              src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"
            ></script>
          </>
        )}
      </Head>
      <Navigation />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
