import React, { useState } from "react";
import styles from "./AddRunActivity.module.css";
import typeStyles from "../../sharedStyles/Typography.module.css";
import { Card } from "../../components/Card/Card";

export const AddRunActivity = ({ className }) => {
  const [distance, setDistance] = useState("");
  const [title, setTitle] = useState("");

  const handleTitleInput = (evt) => {
    setTitle(evt.target.value);
  };

  const handleDistanceInput = (evt) => {
    setDistance(evt.target.value);
  };

  const handleSave = async (evt) => {
    evt.preventDefault();
    console.log("saved");
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
