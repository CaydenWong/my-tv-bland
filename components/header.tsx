import React from "react";
import styles from "../styles/page.module.scss";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className={styles.layout__header__inner__container}>
      <h1 className={styles.layout__header__title}>TV Bland</h1>
      {children}
      {/*<div className={styles.layout__header__content}>{children}</div>*/}
    </div>
  );
};

export default Header;
