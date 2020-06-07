let { db, coll } = require("../dbAndColls");
let custModel = require("../models/Customer");

let custCollection;

module.exports = class CustomerDAO {
  static async injectDB(conn) {
    try {
      custCollection = await conn.db(db.nozama).collection(coll.customer);
    } catch (e) {
      console.error("unable to connect to customer collection", e);
    }
  }

  static async dummyFind() {
    return await custCollection.findOne();
  }

  static async cookieToUser(cookie) {
    let custDoc = await custCollection.findOne({ cookie });
    return custDoc;
  }

  static async googleIdToUser(googleID) {
    let custDoc = await custCollection.findOne({ googleID });
    return custDoc;
  }

  static async createUser(googleID, fname, lname, cookie) {
    let newCustDoc = custModel(googleID, fname, lname, cookie);
    custCollection.insertOne(newCustDoc);
  }

  static async updateCookie(googleID, cookie) {
    const query = { googleID };
    const update = {
      $set: {
        cookie,
      },
    };
    const options = {
      upsert: true,
    };
    custCollection.updateOne(query, update, options);
  }

  static async isLoggedIn(cookie) {
    let custDoc = await custCollection.findOne({ cookie });
    return custDoc ? true : false;
  }

  static async endSession(googleID) {
    custCollection.updateOne({ googleID }, { $unset: { cookie: "" } });
  }

  static async addItemsToCart(googleID, productName, quantity) {
    custCollection.updateOne({ googleID }, { $inc: {} });
  }
};
