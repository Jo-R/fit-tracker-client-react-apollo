import React from "react";
import styles from "./RunActivities.module.css";
import typeStyles from "../../sharedStyles/Typography.module.css";
import { ActivityCard } from "../../components/ActivityCard/ActivitySummaryCard";
import { useQuery } from "@apollo/client";
import { USER_ACTIVITIES } from "../../apollo/queries";

export const RunActivities = () => {
  const { loading, error, data } = useQuery(USER_ACTIVITIES);

  if (loading) {
    return <p>LOADING</p>;
  }

  if (error) {
    return <p>ERROR</p>;
  }

  const getItems = () => {
    const {
      runActivitiesForUser: { items },
    } = data;
    const orderedActivities = items
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    return orderedActivities.map((el) => (
      <React.Fragment key={el.id}>
        <li className={styles.item}>
          <ActivityCard
            title={el.title}
            distance={el.distanceMile}
            id={el.id}
          />
        </li>
      </React.Fragment>
    ));
  };

  return (
    <section>
      <h2 className={typeStyles.sectionHeading}>Your activities:</h2>
      <ul className={styles.unstyled}>{getItems()}</ul>
    </section>
  );
};
