let { db, coll } = require("../dbAndColls");
let CustCartItem = require("../models/CustomerCart");
let uuidv4 = require("uuid").v4;

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

  //adds multiple items to cart. items is an array
  static async batchAddToCart(googleID, productName, quantity) {
    let documents = [];
    for (let i = 0; i < quantity; i++) {
      documents.push(CustCartItem(googleID, productName, uuidv4()));
    }
    custCartCollection.insertMany(documents);
  }
};
