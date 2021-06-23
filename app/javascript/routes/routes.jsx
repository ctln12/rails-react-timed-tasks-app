import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import Timer from "../components/Timer/Timer";
import Settings from "../components/Settings/Settings";

function Routes(props) {
  return (
    <Router>
      <Navbar changePathname={props.changePathname} />
      <div className="Container p-4 mx-auto max-w-xs">
        <Switch>
          <Route exact path="/">
            <Timer />
          </Route>
          <Route exact path="/settings">
            <Settings changePathname={props.changePathname} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default Routes;
