import Head from "next/head";

const Metadata = ({ metadata, children }) => {
  return (
    <Head>
      <title key="title">{metadata.title}</title>
      {children}
    </Head>
  );
};

export default Metadata;
