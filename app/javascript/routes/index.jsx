import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/Header/Header';
import Timer from "../components/Timer/Timer";
import Settings from "../components/Settings/Settings";

export default (
  <Router>
    <Header />
    <div className="Container p-4 mx-auto max-w-xs">
      <Switch>
        <Route path="/" exact component={Timer} />
        <Route path="/settings" exact component={Settings} />
      </Switch>
    </div>
  </Router>
);
