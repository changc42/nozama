let CustomerDAO = require("../../mongoDB/dao/CustomerDAO");

module.exports = async (req, res) => {
  // let custDoc = await CustomerDAO.googleIdToUser(req.cookies.googleID);
  // await CustomerDAO.endSession(custDoc.googleID);
  res.clearCookie("googleID");
  res.redirect(req.baseUrl + "/");
};
