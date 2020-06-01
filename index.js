let express = require("express");
// let middleware = require("./middleware");
let app = express();

// app.use(middleware);
const MongoClient = require("mongodb").MongoClient;
const uri =
  "mongodb+srv://changc42:nozama@cluster0-ggt27.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
async function run() {
  try {
    await client.connect();
    let testDb = client.db("test");
    let collection = testDb.collection("people");

    // await collection.insertOne(document);
    const query = { name: { first: "Caleb", last: "Chang" } };
    const update = {
      $set: {
        attendedEvents: ["5ecc8fa55ed1eb3ddc019e2e"],
      },
    };
    const options = { upsert: "false" };
    await collection.findOne(query, update, options);
    const myDoc = await collection.findOne();
    console.log(myDoc);

    // perform actions on the collection object
    client.close();
  } catch (err) {
    console.log(err.stack);
  }
}

run().catch(console.dir);

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("listening on port ", PORT);
});
