import React from "react";
import styles from "../styles/layout.module.scss";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className={styles.header__container}>
      <h1 className={styles.header__title}>TV Bland</h1>
      <div className={styles.header__subtitle}>{children}</div>
    </div>
  );
};

export default Header;
