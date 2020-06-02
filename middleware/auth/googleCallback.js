let url = require("url");
let {
  clientID,
  clientSecret,
  redirectURI,
  API_KEY,
} = require("../../config/keys");
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
          let accessToken = JSON.parse(sb).access_token;
          getUserInfo(accessToken, res);
        });
      }
    )
    .end(JSON.stringify(query));
};

function getUserInfo(accessToken, origRes) {
  console.log(accessToken);
  let query = {
    key: API_KEY,
    personFields: "emailAddresses",
    access_token: accessToken,
  };
  let queryString = new URLSearchParams(query).toString();
  https.get(
    "https://people.googleapis.com/v1/people/me?" + queryString,
    (res) => {
      let sb = "";
      res.on("data", (data) => (sb += data.toString()));
      res.on("end", () => {
        let personObj = JSON.parse(sb);
        let googleID = personObj.resourceName.split("/")[1];
        origRes.end(googleID);
      });
    }
  );
}
