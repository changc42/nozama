import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Landing from "../Landing/Landing";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../muiTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;
