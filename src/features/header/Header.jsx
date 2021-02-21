import React from "react";
import styles from "./Header.module.css";
import typeStyles from "../../sharedStyles/Typography.module.css";
import { useIsLoggedIn } from "../../apollo/reactiveVars";

export const Header = () => {
  const { isLoggedIn, toggleIsLoggedIn } = useIsLoggedIn();
  return (
    <header className={styles.header}>
      <h1 className={typeStyles.bannerTitle}>Track yo' runs</h1>
      {isLoggedIn ? (
        <button onClick={toggleIsLoggedIn}>Log out</button>
      ) : (
        <button onClick={toggleIsLoggedIn}>Log in</button>
      )}
    </header>
  );
};
