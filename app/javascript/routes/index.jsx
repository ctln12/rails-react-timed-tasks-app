import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Timer from "../components/Timer/Timer";
import Settings from "../components/Settings/Settings";

export default (
  <Router>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Timer} />
      <Route path="/settings" exact component={Settings} />
    </Switch>
  </Router>
);
