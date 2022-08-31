import React from "react";
import styles from "../styles/page.module.scss";
import CountrySelector from "./countrySelector";
import { useRouter } from "next/router";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div className={styles.layout__header__container}>
      <div className={styles.layout__header__heading}>
        <h1 className={styles.layout__header__title}>TV Bland</h1>
        {router.pathname === "/schedules" && (
          <CountrySelector className={styles.layout__header__country} />
        )}
      </div>
      {children}
    </div>
  );
};

export default Header;
