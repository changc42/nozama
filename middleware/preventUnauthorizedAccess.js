let CustomerDAO = require("../mongoDB/dao/CustomerDAO");

module.exports = async (req, res, next) => {
  let customerDoc = await CustomerDAO.googleIdToUser(req.cookies.googleID);
  let requiresAuth = ["/dashboard"];
  if (requiresAuth.includes(req.url) && customerDoc === null) {
    res.redirect(req.baseUrl + "unauthorized");
  } else next();
};
