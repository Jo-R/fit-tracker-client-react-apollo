import React from "react";
import { PageLayout } from "./PageLayout";
import { AddRunActivity } from "../features/runActivities/AddRunActivity";
import { RunActivities } from "../features/runActivities/RunActivities";
import { useIsLoggedIn } from "../apollo/reactiveVars";

export const HomePage = ({ children, props }) => {
  const { isLoggedIn } = useIsLoggedIn();
  return (
    <PageLayout>
      {isLoggedIn ? (
        <>
          <AddRunActivity {...props} />
          <RunActivities {...props} />
        </>
      ) : (
        <p>you need to log in...</p>
      )}
    </PageLayout>
  );
};
