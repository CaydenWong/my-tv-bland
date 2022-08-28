import styles from "../styles/layout.module.scss";

const Header = ({ children }) => {
  return (
    <div className={styles.header__container}>
      <h1 className={styles.header__title}>TV Bland</h1>
      <div className={styles.header__subtitle}>{children}</div>
    </div>
  );
};

export default Header;
