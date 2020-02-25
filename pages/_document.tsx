import React from "react";

import Document, { Html, Head, Main, NextScript } from "next/document";
import { font } from "../helpers/helpdata";
import SEOTags from "../components/SEO/seoTags";
import { colors } from "../helpers/helpdata";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="sv">
        <Head>
          <SEOTags />
          <meta name="theme-color" content={colors.navbar} />
          <meta charSet="utf-8" />
          <link href={`${font.url}`} rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
