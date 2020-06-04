let { clientID, clientSecret, redirectURI } = require("../../../config");
let url = require("url");

module.exports = (req, res) => {
  let query = {
    response_type: "code",
    client_id: clientID,
    redirect_uri: redirectURI,

    scope: "https://www.googleapis.com/auth/userinfo.profile",
  };
  let queryString = new URLSearchParams(query).toString();
  // console.log(queryString);
  res.redirect(
    "https://accounts.google.com/o/oauth2/v2/auth" + "?" + queryString
  );
};
