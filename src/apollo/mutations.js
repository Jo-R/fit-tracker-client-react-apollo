import { useMutation, gql } from "@apollo/client";

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
// TODO need to sort out "
// To address this problem (which is not a bug in Apollo Client), define a custom merge function for // the Query.runActivitiesForUser field, so InMemoryCache can safely merge these objects:"
export const useAddRun = () => {
  const [addRun, { data, error }] = useMutation(ADD_RUN_ACTIVITY, {
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
  return { addRun, data, error };
};
