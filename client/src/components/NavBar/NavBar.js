import React from "react";
import BigNavBar from "./BigNavBar/BigNavBar";
import SmallNavBar from "./SmallNavBar/SmallNavBar";
import { withWidth, Toolbar } from "@material-ui/core";

function NavBar(props) {
  return (
    <div>
      {props.width === "xs" ? (
        <SmallNavBar />
      ) : (
        <div>
          <BigNavBar />
        </div>
      )}
    </div>
  );
}

export default withWidth()(NavBar);
