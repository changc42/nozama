let express = require("express");
let cookieParser = require("cookie-parser");
let path = require("path");

let router = require("express").Router();

router.use((req, res, next) => {
  console.log("at first middle ware", req.url);
  next();
});
// router.use(cookieParser());
// router.use(require("./giveCookie"));
// router.use(require("./preventUnauthorizedAccess"));

router.get("/api/auth/google", require("./auth/google"));
router.get("/api/auth/google/callback", require("./auth/googleCallback"));
router.use(express.static("client/build"));
router.get("*", (req, res) => {
  console.log();
  console.log("at catch all");
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});

module.exports = router;
