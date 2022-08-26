import styles from "../styles/layout.module.scss";

const Header = ({ children }) => {
  return (
    <div className={styles.header_container}>
      <h1 className={styles.header_font}>TV Bland</h1>
      <div className={styles.header_heading}>{children}</div>
    </div>
  );
};

export default Header;
