let express = require("express");

let router = require("express").Router();

router.use("/", (req, res) => {
  res.send("this is the homepage");
});

router.use("/");

module.exports = router;
