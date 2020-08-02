let { db, coll } = require("../dbAndColls");
let SpecificProduct = require("../models/SpecificProduct");

let specificProductCollection;

module.exports = class SpecificProductDAO {
  static async injectDB(conn) {
    try {
      specificProductCollection = await conn
        .db(db.nozama)
        .collection(coll.specificProduct);
    } catch (e) {
      console.error("unable to connect to customer collection", e);
    }
  }

  //docs is a 2-d array. nested arrays are of the form [name, price, description, imgSrc]
  static async createSpecificProduct(productName, specific_product_id) {
    let document = SpecificProduct(productName, specific_product_id);
    await specificProductCollection.insertOne(document);
  }

  static async getAllOfAGeneralProduct(productName) {
    return await specificProductCollection
      .find({ product_name: productName })
      .toArray();
  }
};
