import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ActivityDetailPage } from "./layout/ActivityDetailPage";
import { HomePage } from "./layout/HomePage";
import { client } from "./apollo/client";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/activity/:runId" component={ActivityDetailPage} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
