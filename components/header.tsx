import styles from "../styles/header.module.scss";

const Header = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.font}>TV Bland</h1>
      <div className={styles.heading}>{children}</div>
    </div>
  );
};

export default Header;
