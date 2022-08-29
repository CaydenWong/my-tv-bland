import React from "react";
import Head from "next/head";

interface MetadataProps {
  children: React.ReactNode;
  metadata: {
    title: string;
  };
}

const Metadata: React.FC<MetadataProps> = ({ metadata, children }) => {
  return (
    <Head>
      <title key="title">{metadata.title}</title>
      {children}
    </Head>
  );
};

export default Metadata;
