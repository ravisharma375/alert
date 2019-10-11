var express = require("express");
var router = express.Router();
var connection = require("../../db");
const bodyparser = require("body-parser");

//using get method to insert data in alert table
router.get("/", (req, res) => {
  const data = {
    time: new Date(),
    alertaccept: "",
    status: 1
  };
  connection.query("insert into alerttable SET ?", data, (error, row) => {
    if (!error) {
      res.json({
        status: true,
        message: "alert submitted sucessfully"
      });
    } else {
      res.json({
        status: false,
        message: "there is some error"
      });
    }
  });
});

module.exports = router;
