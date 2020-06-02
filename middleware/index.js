let express = require("express");

let router = require("express").Router();

router.get("/api/auth/google", require("./auth/google"));
router.get("/api/auth/google/callback", require("./auth/googleCallback"));
router.use(express.static("client/build"));

module.exports = router;
