import * as React from "react";
import Head from "next/head";
import Navigation from "../NavigationFolder/Navigation";
import Footer from "../FooterFolder/Footer";
import AmpStyling from "../AMP/AmpStyling";
import { useAmp } from "next/amp";

type LayoutProps = {
  title?: string;
  navbar?: boolean;
  logo?: any;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title, navbar, logo }) => {
  const isAmp = useAmp();
  let renderBackgroundColor;
  if (navbar) {
    renderBackgroundColor = 1;
  }

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
      <Navigation scrollValue={renderBackgroundColor} logo={logo} />
      <main className="site-content">{children}</main>
      <Footer />
      <AmpStyling />
    </div>
  );
};

export default Layout;
