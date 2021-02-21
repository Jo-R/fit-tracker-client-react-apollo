import React from "react";
import styles from "./ActivityCard.module.css";
import typeStyles from "../../sharedStyles/Typography.module.css";
import { Link } from "react-router-dom";
import { Card } from "../Card/Card";

export const ActivityCard = ({ title, distance, id }) => {
  return (
    <Card>
      <h3 className={typeStyles.cardHeading}>{title}</h3>
      <div className={styles.content}>
        <p className={typeStyles.greyText}>You ran {distance} miles</p>
        <Link
          to={`/activity/${id}`}
          className={`${styles.link} ${typeStyles.blackText}`}
        >
          View details
        </Link>
      </div>
    </Card>
  );
};
