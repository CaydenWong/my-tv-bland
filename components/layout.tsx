import styles from "../styles/layout.module.scss";
import Metadata from "./metadata";
import Header from "./header";

const Layout = ({ children, metadata, header }) => {
  return (
    <>
      <Metadata metadata={metadata}>
        <meta charSet="UTF-8" />
        <meta httpEquiv="content-language" content="en-gb" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="TV schedules and show" />
        <link rel="icon" type="image/png" href="/icon.png" />
      </Metadata>
      <div className={styles.header}>
        <Header>{header}</Header>
      </div>
      <main className={styles.main}>{children}</main>
      <div className={styles.footer}></div>
    </>
  );
};

export default Layout;
