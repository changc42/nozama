let url = require("url");
let { clientID, clientSecret, redirectURI } = require("../../config/keys");
let https = require("https");

module.exports = (req, res) => {
  let code = url.parse(req.url, true).query.code;
  let query = {
    code,
    client_id: clientID,
    client_secret: clientSecret,
    grant_type: "authorization_code",
    redirect_uri: redirectURI,
  };
  https
    .request(
      { hostname: "oauth2.googleapis.com", path: "/token", method: "POST" },
      (tokenRes) => {
        let sb = "";
        tokenRes.on("data", (data) => {
          sb += data.toString();
        });
        tokenRes.on("end", () => {
          console.log(sb);
          res.send("done");
        });
      }
    )
    .end(JSON.stringify(query));
};
