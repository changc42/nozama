let GeneralProductDAO = require("../../../mongoDB/dao/GeneralProductDAO");

module.exports = async (req, res) => {
  let documents = await GeneralProductDAO.getAllProducts();
  console.log(documents, "lolol");
  res.end(JSON.stringify(documents));
};
