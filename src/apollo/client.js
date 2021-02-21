import { ApolloClient, InMemoryCache } from "@apollo/client";
import { makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar({ status: false });

export const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          isLoggedIn: {
            read() {
              return isLoggedInVar();
            },
          },
        },
      },
    },
  }),
});
