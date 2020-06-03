let express = require("express");
// let middleware = require("./middleware");
let path = require("path");

// let { mongoURI } = require("./config");
// const MongoClient = require("mongodb").MongoClient;
// let CustomerDAO = require("./mongoDB/dao/CustomerDAO");
let app = express();

// MongoClient.connect(mongoURI, { useNewUrlParser: true })
//   .catch((err) => {
//     console.error(err.stack);
//     process.exit(1);
//   })
//   .then(async (client) => {
//     CustomerDAO.injectDB(client);

//     // app.use(middleware);
//     app.use("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname, "./client/build"));
//     });
//     app.use(express.static("client/build"));

//     PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log("listening on port ", PORT);
// });
//   });

app.use(express.static("client/build"));
app.get("/", (req, res) => {
  res.end("hiii!");
});
app.listen(5000, () => {
  console.log("listening on port ", 5000);
});
