let { db, coll } = require("../dbAndColls");

let custCollection;

module.exports = class CustomerDAO {
  static async injectDB(conn) {
    try {
      custCollection = await conn.db(db.nozama).collection(coll.customer);
    } catch (e) {
      console.error("unable to connect to customer collection", e);
    }
  }

  static async cookieToUser(cookie) {
    let custDoc = await custCollection.findOne({ "session.cookie": cookie });
    return custDoc;
  }

  static async createUser() {}
};
