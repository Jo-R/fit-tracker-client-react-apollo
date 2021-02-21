import React from "react";
import { PageLayout } from "./PageLayout";
import { AddRunActivity } from "../features/runActivities/AddRunActivity";
import { RunActivities } from "../features/runActivities/RunActivities";

export const HomePage = ({ children, props }) => {
  return (
    <PageLayout>
      <AddRunActivity {...props} />
      <RunActivities {...props} />
    </PageLayout>
  );
};
