/*
var express = require("express");
var router = express.Router();
var connection = require("../config");
const bodyparser = require("body-parser");

/*
var express = require("express");
var router = express.Router();
var connection = require("../db");
const bodyparser = require("body-parser");


//using put method to update alert
router.post("/:id", (req, res) => {
  const data = {
    alertaccept: new Date()
  };
  connection.query(
    `update alerttable set alertaccept="${data.alertaccept}" where id="${req.params.id}"`,
    (error, data) => {
      if (!error) {
        res.json({
          status: true,
          message: "Alert Accepted"
        });
      } else {
        res.send(error);
      }
    }
  );
});

module.exports = router;
*/
