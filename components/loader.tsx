import React from "react";
import ClockLoader from "react-spinners/ClockLoader";
import styles from "../styles/layout.module.scss";

interface LoaderProps {
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div className={styles.loader__container}>
      <ClockLoader
        loading={loading}
        color="#878787"
        cssOverride={{ margin: "auto" }}
        size={200}
      />
    </div>
  );
};

export default Loader;
