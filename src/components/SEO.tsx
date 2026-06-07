import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({ title, description, canonicalPath, noindex }) => {
  const baseUrl = "https://garrydigital360.in";
  const canonicalUrl = canonicalPath ? `${baseUrl}${canonicalPath}` : baseUrl;

  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter Tags */}
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
};
