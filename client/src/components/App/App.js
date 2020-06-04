import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Landing from "../Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/unauthorized">
          <a href="/">You must login</a>
        </Route>
        <Route exact path="/dashboard">
          <h1> you are logged in</h1>
        </Route>
        <Route exact path="/test">
          <h1> heyyio</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
