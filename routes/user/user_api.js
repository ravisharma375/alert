var express = require("express");
var router = express.Router();

//adduser
var adduser = require("./adduser");
router.use("/adduser", adduser);
//alert
var alert = require("./alert");
router.use("/alert", alert);
module.exports = router;
