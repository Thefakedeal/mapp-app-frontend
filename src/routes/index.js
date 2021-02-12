import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Place from "../pages/places/Place";
import Places from "../pages/places/Places";

export default function index() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Places />
        </Route>
        <Route exact path="/places/:id">
          <Place />
        </Route>
      </Switch>
    </Router>
  );
}
