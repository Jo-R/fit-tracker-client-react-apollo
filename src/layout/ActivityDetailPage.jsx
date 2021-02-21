import React from "react";
import { ViewRunActivity } from "../features/runActivities/ViewRunActivity";
import { AddRunActivity } from "../features/runActivities/AddRunActivity";
import { PageLayout } from "./PageLayout";
import styles from "./ActivityDetailsPage.module.css";

export const ActivityDetailPage = ({ children, ...props }) => {
  return (
    <PageLayout>
      <AddRunActivity className={styles.hideMobile} {...props} />
      <ViewRunActivity {...props} />
    </PageLayout>
  );
};
