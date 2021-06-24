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
            <Timer
              focusSessionLength={props.focusSessionLength}
            />
          </Route>
          <Route exact path="/settings">
            <Settings
              focusSessionLength={props.focusSessionLength}
              shortBreakLength={props.shortBreakLength}
              longBreakLength={props.longBreakLength}
              longBreakAfter={props.longBreakAfter}
              changePathname={props.changePathname}
              changeSettings={props.changeSettings}
              saveSettings={props.saveSettings}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default Routes;
