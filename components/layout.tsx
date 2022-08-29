import React from "react";
import styles from "../styles/layout.module.scss";
import Metadata from "./metadata";
import Header from "./header";
import Loader from "../components/loader";

interface LayoutProps {
  children: React.ReactNode;
  metadata: {
    title: string;
  };
  header: React.ReactNode;
  loading: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  metadata,
  header,
  loading,
}) => {
  return (
    <div className={styles.layout__container}>
      <Metadata metadata={metadata}>
        <meta charSet="UTF-8" />
        <meta httpEquiv="content-language" content="en-gb" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="TV schedules and show" />
        <link rel="icon" type="image/png" href="/icon.png" />
      </Metadata>
      <div className={styles.layout__header}>
        <Header>{loading ? <div /> : header}</Header>
      </div>
      <div className={styles.layout__main}>
        <main className={styles.main__container}>
          {loading ? <Loader loading={loading} /> : children}
        </main>
      </div>
      <div className={styles.layout__footer} />
    </div>
  );
};

export default Layout;
