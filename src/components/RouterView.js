import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

export default function RouterView() {
  return (
      <>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    )
}

function Users() {
  return <h2>Users</h2>;
}
