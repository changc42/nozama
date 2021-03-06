let express = require("express");
let cookieParser = require("cookie-parser");
let path = require("path");
let uuidv4 = require("uuid").v4;

let router = require("express").Router();

router.use((req, res, next) => {
  console.log("at first middle ware", req.url);
  next();
});
router.use(cookieParser(uuidv4()));

router.get("/api/auth/google", require("./api/auth/google"));
router.get("/api/auth/google/callback", require("./api/auth/googleCallback"));

router.use(require("./preventUnauthorizedAccess"));

router.get("/api/mongo/isLoggedIn", require("./api/mongo/isLoggedIn"));
router.get("/api/mongo/getAllProducts", require("./api/mongo/getAllProducts"));

router.get("/api/logout", require("./api/logout"));

router.use(express.static("client/build"));
router.get("*", (req, res) => {
  console.log();
  console.log("at catch all");
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

module.exports = router;
