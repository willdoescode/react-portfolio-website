import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import RouterView from "./RouterView";
import SiteNavbar from "./SiteNavbar";

export default function App() {
  return (
    <Router>
      <SiteNavbar />
      <RouterView />
    </Router>
  );
}
