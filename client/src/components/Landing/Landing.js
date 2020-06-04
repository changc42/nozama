import React, { useEffect, useState } from "react";

export default function Landing() {
  let [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(async () => {
    fetch("api/mongo/isLoggedIn")
      .then((res) => res.json())
      .then((data) => setIsLoggedIn(data.isLoggedIn));
  }, []);

  let output;
  if (isLoggedIn === null) output = <h1>Loading</h1>;
  else if (isLoggedIn === false)
    output = (
      <div>
        <h1>this is the landing page</h1>
        <a href="api/auth/google">login</a>
      </div>
    );
  else if (isLoggedIn === true)
    output = (
      <div>
        <h1>Welcome! You are logged in</h1>
        <a href="api/logout">logout</a>
      </div>
    );
  return output;
}
