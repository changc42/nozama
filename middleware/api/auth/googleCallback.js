let url = require("url");
let {
  clientID,
  clientSecret,
  redirectURI,
  API_KEY,
} = require("../../../config");
let https = require("https");
let CustomerDao = require("../../../mongoDB/dao/CustomerDAO");

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
          getUserInfo(accessToken, req, res);
        });
      }
    )
    .end(JSON.stringify(query));
};

function getUserInfo(accessToken, origReq, origRes) {
  console.log(accessToken);
  let query = {
    key: API_KEY,
    personFields: "names",
    access_token: accessToken,
  };
  let queryString = new URLSearchParams(query).toString();
  https.get(
    "https://people.googleapis.com/v1/people/me?" + queryString,
    (res) => {
      let sb = "";
      res.on("data", (data) => (sb += data.toString()));
      res.on("end", async () => {
        let personObj = JSON.parse(sb);
        console.log(personObj);
        let googleID = personObj.resourceName.split("/")[1];
        let lname = personObj.names[0].familyName;
        let fname = personObj.names[0].givenName;

        let custDoc = await CustomerDao.googleIdToUser(googleID);
        if (custDoc === null) {
          await CustomerDao.createUser(
            googleID,
            fname,
            lname,
            origReq.cookies.default
          );
        } else {
          await CustomerDao.updateCookie(googleID, origReq.cookies.default);
        }
        origRes.redirect(origReq.baseUrl + "/shop");
      });
    }
  );
}
