import React from "react";
import { Card } from "../../components/Card/Card";
import styles from "./ViewRunActivity.module.css";
import { BiArrowBack } from "react-icons/bi";
import placeholderImg from "../../assets/york.jpg";
import { useQuery } from "@apollo/client";
import { ACTIVITY_DETAIL } from "../../apollo/queries";
import typeStyles from "../../sharedStyles/Typography.module.css";

export const ViewRunActivity = ({ match, history }) => {
  const runId = match.params.runId;
  const { loading, error, data } = useQuery(ACTIVITY_DETAIL, {
    variables: { id: parseInt(runId) },
  });

  if (loading) {
    return <p>LOADING</p>;
  }

  if (error) {
    return <p>ERROR</p>;
  }

  const goBack = () => {
    history.push("/");
  };

  const { runActivity } = data;

  return (
    <Card>
      <button aria-label="back" className={styles.btn} onClick={goBack}>
        <span>
          <BiArrowBack size={"2em"} color={"var(--main-2"} />
        </span>
      </button>
      {data ? (
        <>
          <h2 className={typeStyles.cardHeading}>{runActivity.title}</h2>
          <p>{`distance ${runActivity.distanceMile}`}</p>
        </>
      ) : (
        <p>No such activity</p>
      )}
      <div className={styles.grid}>
        <div>
          <p>some other details</p>
        </div>
        <img src={placeholderImg} alt="a map" />
      </div>
    </Card>
  );
};
