import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
