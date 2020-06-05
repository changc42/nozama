import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./notLoggedInLandingStyles";
import theme from "../../muiTheme";

function NotLoggedInLanding(props) {
  let { classes } = props;
  return (
    <div className={classes.root}>
      <img src="nozama_logo_full.png" className={classes.Logo} />
      <Typography variant="h4">A fake shopping website</Typography>
      <Grid container>
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
      </Grid>
    </div>
  );
}

export default withStyles(styles(theme))(NotLoggedInLanding);