import React, { useState } from "react";
import styles from "./AddRunActivity.module.css";
import typeStyles from "../../sharedStyles/Typography.module.css";
import { Card } from "../../components/Card/Card";
import { useMutation, gql } from "@apollo/client";
import { ADD_RUN_ACTIVITY } from "../../apollo/queries";

export const AddRunActivity = ({ className }) => {
  const [distance, setDistance] = useState("");
  const [title, setTitle] = useState("");
  const [addRun] = useMutation(ADD_RUN_ACTIVITY, {
    update(cache, { data: { addRunActivity } }) {
      cache.modify({
        fields: {
          runActivitiesForUser(existingRunActivities = []) {
            const newActivityRef = cache.writeFragment({
              data: addRunActivity,
              fragment: gql`
                fragment NewActivity on Activity {
                  distanceMile
                  title
                  id
                  date
                }
              `,
            });
            return [...existingRunActivities.items, newActivityRef];
          },
        },
      });
    },
  });

  const handleTitleInput = (evt) => {
    setTitle(evt.target.value);
  };

  const handleDistanceInput = (evt) => {
    setDistance(evt.target.value);
  };

  const handleSave = async (evt) => {
    evt.preventDefault();
    const date = new Date();
    addRun({
      variables: {
        activity: {
          userId: "d30e52b0-304c-4aa1-3c68-08d888b124c0",
          date: date.toISOString(),
          title,
          distanceMile: parseInt(distance),
          duration: "00:00:30",
          averageHr: 150,
          maxHr: 190,
          averagePaceMile: "00:09:00",
          notes: "",
        },
      },
    });
  };

  return (
    <section className={className}>
      <Card>
        <form onSubmit={handleSave}>
          <h3 className={typeStyles.sectionHeading}>Add new run</h3>
          <div className={styles.grid}>
            <label htmlFor="titleInput">Title</label>
            <input
              id="titleInput"
              value={title}
              onChange={handleTitleInput}
            ></input>
            <label htmlFor="distanceInput">distance</label>
            <input
              id="distanceInput"
              value={distance}
              onChange={handleDistanceInput}
            ></input>
          </div>
          <div className={styles.rightAlign}>
            <button onClick={handleSave} type="submit" className={styles.btn}>
              Save
            </button>
          </div>
        </form>
      </Card>
    </section>
  );
};
