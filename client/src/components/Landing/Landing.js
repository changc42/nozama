import React, { useEffect, useState } from "react";
import LoggedInLanding from "./LoggedInLanding";
import NotLoggedInLanding from "./NotLoggedInLanding";

export default function Landing() {
  let [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(async () => {
    fetch("api/mongo/isLoggedIn")
      .then((res) => res.json())
      .then((data) => setIsLoggedIn(data.isLoggedIn));
  }, []);

  if (isLoggedIn === null) return "";
  else if (isLoggedIn) return <LoggedInLanding />;
  else return <NotLoggedInLanding />;
}
