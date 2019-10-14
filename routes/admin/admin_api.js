var express = require("express");
var router = express.Router();

const bodyparser = require("body-parser");
//accept-alert
var accept_alert = require("./accept_alert");
router.use("/accept_alert", accept_alert);
//message
var message = require("./message");
router.use("/message", message);
module.exports = router;
