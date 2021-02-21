import React from "react";
import styles from "./Header.module.css";
import typeStyles from "../../sharedStyles/Typography.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={typeStyles.bannerTitle}>Track yo' runs</h1>
    </header>
  );
};
