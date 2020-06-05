let uuidv4 = require("uuid").v4;
let CustomerDAO = require("../mongoDB/dao/CustomerDAO");

// client.connect((err) => {
//   if (err) console.log(err);
//   const customerCollection = client.db("Cluster0").collection("customer");
// });
module.exports = async (req, res, next) => {
  console.log(req.cookies);
  console.log(req.url);
  if (req.url === "/manifest.json") {
    next();
  } else if (!req.cookies.default) {
    console.log("no cookie");
    let cookieString = uuidv4();
    res.writeHead(302, {
      "Set-cookie": `default=${cookieString}; Max-Age=86400`,
      Location: req.baseUrl + req.url,
    });
    res.end();
  } else {
    next();
  }
};
