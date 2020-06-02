let uuidv4 = require("uuid").v4;

module.exports = (req, res, next) => {
  if (!req.headers.cookie) {
    let cookieString = uuidv4();
    res.writeHead(302, {
      "Set-cookie": cookieString,
      Location: req.baseUrl + req.url,
    });
  }
  res.end(req.headers.cookie);
};