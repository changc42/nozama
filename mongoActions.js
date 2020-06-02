let { MongoURI } = require("./config/keys");
const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(MongoURI, { useNewUrlParser: true });
// client.connect(err => {
//  const collection = client.db("test").collection("devices");
//   client.close();
// });

module.exports = {
  getSession: async (cookie_id) => {
    client.connect((err) => {
      if (err) console.log(err);
      const customerCollection = client.db("Cluster0").collection("customers");
      let session = customerCollection.findOne({cookie_id: cookie_id}, (err, res)=>{
        if()
      })
    });
  },
};
