import React from "react";
import { SEOdata } from "../../helpers/helpdata";

const SEOTags = (): React.ReactElement => {
  return (
    <>
      <title>{SEOdata.title} | {SEOdata.name}</title>
      <meta property="og:site_name" content={SEOdata.name} />
      {SEOdata.description && <meta name="description" content={SEOdata.description} />}
      <meta property="og:title" content={`${SEOdata.title} - ${SEOdata.name}`} />
      <meta property="og:type" content={SEOdata.ogType} />
      {SEOdata.description && <meta property="og:description" content={SEOdata.description} />}
      <meta name="twitter:title" content={`${SEOdata.title} - ${SEOTags.name}`} />
      {SEOdata.description && <meta name="twitter:description" content={SEOdata.description} />}
      <meta name="twitter:card" content="summary_large_image" />
      {SEOdata.customImageSrc && <meta property="og:image" content={SEOdata.customImageSrc} />}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {SEOdata.customImageSrc && <meta name="twitter:image" content={SEOdata.customImageSrc} />}
    </>
  );
};

export default SEOTags;
