let CustomerDAO = require("../../mongoDB/dao/CustomerDAO");

module.exports = async (req, res) => {
  let custDoc = await CustomerDAO.cookieToUser(req.cookies.default);
  await CustomerDAO.endSession(custDoc.googleID);
  res.redirect(req.baseUrl + "/");
};
