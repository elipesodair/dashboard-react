import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import LabDois from "./LabDois.jsx";



function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/labdois" component={LabDois} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
