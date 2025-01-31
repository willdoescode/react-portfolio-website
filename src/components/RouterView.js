import React from "react";
import {Route, Switch} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Contacts from "./routes/Contacts";

export default function RouterView() {
  return (
      <>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    )
}
