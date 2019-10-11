/*
var express = require("express");
var router = express.Router();
var connection = require("../config");

/*
var express = require("express");
var router = express.Router();
var connection = require("../db");

const bodyparser = require("body-parser");

//using get method to insert data in alert table
router.get("/alert", (req, res) => {
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


//using get method to add user details
router.post("/adduser", (req, res) => {
  const record = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    contact_no: req.body.contact_no
  };

  connection.query(
    "select count(id) as count from userdata where email=?",
    record.email,
    (error, results) => {
      if (error) {
        return console.log(error);
      } else {
        if (results.length > 0) {
          if (results[0].count >= 1) {
            res.json({
              message: "email already exist"
            });
          } else {
            connection.query(
              "insert into userdata SET ?",
              record,
              (err, row) => {
                if (!err) {
                  connection.query(
                    "select id from userdata where email=?",
                    record.email,
                    (Error, data) => {
                      res.json({ userID: data[0].id });
                    }
                  );
                } else {
                  res.send(err);
                  res.json({
                    status: false,
                    message: "there is some error"
                  });
                }
              }
            );
          }
        }
      }
    }
  );
});

module.exports = router;
=======

*/
