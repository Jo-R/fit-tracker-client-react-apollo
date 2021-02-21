import React from "react";
import styles from "./RunActivities.module.css";
import typeStyles from "../../sharedStyles/Typography.module.css";
import { ActivityCard } from "../../components/ActivityCard/ActivitySummaryCard";

export const RunActivities = () => {
  return (
    <section>
      <h2 className={typeStyles.sectionHeading}>Your activities:</h2>
      <ul className={styles.unstyled}>
        <ActivityCard title={"a run"} distance={"4"} id={"1"} />
      </ul>
    </section>
  );
};
