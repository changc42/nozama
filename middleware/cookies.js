let uuidv4 = require("uuid").v4;
let client = require("../mongoActions");

client.connect((err) => {
  if (err) console.log(err);
  const customerCollection = client.db("Cluster0").collection("customer");
});
module.exports = (req, res, next) => {
  if (!req.headers.cookie) {
    let cookieString = uuidv4();
    res.writeHead(302, {
      "Set-cookie": cookieString,
      Location: req.baseUrl + req.url,
    });
  }
  next();
};
