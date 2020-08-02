let CustomerDAO = require("../mongoDB/dao/CustomerDAO");

module.exports = async (req, res, next) => {
  let customerDoc = await CustomerDAO.googleIdToUser(
    req.signedCookies.googleID
  );
  let requiresAuth = ["/shop"];
  if (requiresAuth.includes(req.url) && customerDoc === null) {
    res.redirect(req.baseUrl + "unauthorized");
  } else next();
};
