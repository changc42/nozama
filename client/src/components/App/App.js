import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Landing from "../Landing/Landing";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../../muiTheme";
import Shop from "../Shop/Shop";
import NavBar from "../NavBar/NavBar";
import { Toolbar } from "@material-ui/core";

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
          <Route exact path="/shop">
            <NavBar />
            <Toolbar />
            <Shop />
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
