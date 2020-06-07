import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  IconButton,
  Container,
  ButtonBase,
  AppBar,
  Typography,
  Toolbar,
  Button,
  withWidth,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./smallNavBarStyles";
import theme from "../../../muiTheme";
import MenuButton from "./MenuButton/MenuButton";
import ProfileButton from "./ProfileButton/ProfileButton";

function BigNavBar(props) {
  const { classes } = props;
  function renderSquares() {
    return (
      <div>
        <div style={{ height: "200px", backgroundColor: "red" }}></div>
        <div style={{ height: "200px", backgroundColor: "blue" }}></div>
        <div style={{ height: "200px", backgroundColor: "green" }}></div>
        <div style={{ height: "200px", backgroundColor: "yellow" }}></div>
      </div>
    );
  }

  return (
    <div>
      <AppBar color="white">
        <Toolbar>
          <MenuButton />

          <span className={classes.separator}></span>

          <ProfileButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles(theme))(withWidth()(BigNavBar));
