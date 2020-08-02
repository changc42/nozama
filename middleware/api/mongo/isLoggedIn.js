let CustomerDao = require("../../../mongoDB/dao/CustomerDAO");

module.exports = async (req, res) => {
  let isLoggedIn = await CustomerDao.isLoggedIn(req.signedCookies.googleID);
  res.end(JSON.stringify({ isLoggedIn }));
};
