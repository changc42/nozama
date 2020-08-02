let { db, coll } = require("../dbAndColls");
let custCartModel = require("../models/Customer");

let custCartCollection;

module.exports = class CustomerDAO {
  static async injectDB(conn) {
    try {
      custCartCollection = await conn
        .db(db.nozama)
        .collection(coll.customerCart);
    } catch (e) {
      console.error("unable to connect to customer collection", e);
    }
  }
};
