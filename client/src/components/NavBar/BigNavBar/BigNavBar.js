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
import styles from "./bigNavBarStyles";
import theme from "../../../muiTheme";

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
    <div className={classes.root}>
      <AppBar color="white">
        <Toolbar>
          <Button className={classes.navButton} href="shop">
            <Typography variant="h4" style={{ textTransform: "none" }}>
              SHOP
            </Typography>
          </Button>
          <Button className={classes.navButton} href="activity">
            <Typography variant="h4" style={{ textTransform: "none" }}>
              ACTIVITY
            </Typography>
          </Button>

          <span className={classes.separator}></span>

          <IconButton
            color="secondary"
            aria-label="upload picture"
            component="span"
            onClick={() => (window.location.href = "cart")}
          >
            <ShoppingCartIcon />
          </IconButton>
          {/* <IconButton
            color="secondary"
            aria-label="upload picture"
            component="span"
            onClick={() => (window.location.href = "inventory")}
          >
            <img src="shopping-bag.svg" style={{ height: "2rem" }} />
          </IconButton> */}
          <Button color="inherit" className={classes.button} href="api/logout">
            Purchases
          </Button>
          <Button color="inherit" className={classes.button} href="api/logout">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles(theme))(withWidth()(BigNavBar));
