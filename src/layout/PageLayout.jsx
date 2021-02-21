import React from "react";
import { Header } from "../features/header/Header";
import styles from "./PageLayout.module.css";

export const PageLayout = ({ children }) => {
  return (
    <div className={styles.grid}>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
