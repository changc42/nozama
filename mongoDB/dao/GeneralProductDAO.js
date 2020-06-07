let { db, coll } = require("../dbAndColls");
let GeneralProduct = require("../models/GeneralProduct");

let generalProductCollection;

module.exports = class GeneralProductDAO {
  static async injectDB(conn) {
    try {
      generalProductCollection = await conn
        .db(db.nozama)
        .collection(coll.generalProduct);
    } catch (e) {
      console.error("unable to connect to customer collection", e);
    }
  }

  //docs is a 2-d array. nested arrays are of the form [name, price, description, imgSrc]
  static async createGeneralProducts(documentParams) {
    let documents = documentParams.map((params) => {
      return GeneralProduct(...params);
    });
    console.log(documents);
    await generalProductCollection.insertMany(documents);
  }

  static async getAllProducts() {
    return await generalProductCollection.find().toArray();
  }
};
