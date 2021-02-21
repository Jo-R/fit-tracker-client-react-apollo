import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ActivityDetailPage } from "./layout/ActivityDetailPage";
import { HomePage } from "./layout/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/activity/:runId" component={ActivityDetailPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
