import { gql } from "@apollo/client";

export const USER_ACTIVITIES = gql`
  query GetUserActivities {
    runActivitiesForUser(
      input: {
        id: "d30e52b0-304c-4aa1-3c68-08d888b124c0"
        pageNo: 1
        pageSize: 50
      }
    ) {
      items {
        distanceMile
        title
        id
        date
      }
    }
  }
`;

export const ACTIVITY_DETAIL = gql`
  query GetRunDetail($id: Int!) {
    runActivity(id: $id) {
      date
      duration
      distanceMile
      title
      averageHr
      averagePaceMile
      notes
    }
  }
`;

export const ADD_RUN_ACTIVITY = gql`
  mutation addRunActivity($activity: RunActivityInput!) {
    addRunActivity(input: $activity) {
      distanceMile
      title
      id
      date
    }
  }
`;
