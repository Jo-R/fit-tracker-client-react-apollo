import React from "react";
import { Card } from "../../components/Card/Card";
import typeStyles from "../../sharedStyles/Typography.module.css";
import styles from "./ViewRunActivity.module.css";
import { BiArrowBack } from "react-icons/bi";
import placeholderImg from "../../assets/york.jpg";

export const ViewRunActivity = ({ match, history }) => {
  const runId = match.params.runId;
  console.log(runId);

  const goBack = () => {
    history.push("/");
  };

  return (
    <Card>
      <button aria-label="back" className={styles.btn} onClick={goBack}>
        <span>
          <BiArrowBack size={"2em"} color={"var(--main-2"} />
        </span>
      </button>
      <p>soome activity details</p>
      <div className={styles.grid}>
        <div>
          <p>some other details</p>
        </div>
        <img src={placeholderImg} alt="a map" />
      </div>
    </Card>
  );
};
