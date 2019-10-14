var express = require("express");
var router = express.Router();
var connection = require("../db");
const bodyparser = require("body-parser");
//admin
var admin = require("./admin/admin_api");
router.use("/admin", admin);
//user
var user = require("./user/user_api");
router.use("/user", user);
module.exports = router;
