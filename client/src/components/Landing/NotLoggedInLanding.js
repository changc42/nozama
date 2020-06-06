import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import styles from "./notLoggedInLandingStyles";
import theme from "../../muiTheme";

function NotLoggedInLanding(props) {
  let { classes } = props;
  return (
    <div className={classes.root}>
      <img src="nozama_logo_full.png" className={classes.Logo} />
      <Typography variant="h3" style={{ fontFamily: "Officina Sans Bold" }}>
        A fake shopping website
      </Typography>

      <Grid container className={classes.ButtonContainer}>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            disableElevation
            startIcon={
              <img src="google-icon.svg" className={classes.ButtonIcon} />
            }
            href="api/auth/google"
            className={classes.Button}
          >
            Login With Google
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            disableElevation
            className={classes.Button}
          >
            Proceed As Guest
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            disableElevation
            className={classes.Button}
            startIcon={<HelpOutlineIcon />}
          >
            What is this website?
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles(theme))(NotLoggedInLanding);
