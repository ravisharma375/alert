var express = require("express");
var router = express.Router();
var connection = require("../../db");
const bodyparser = require("body-parser");
var admin = require("firebase-admin");

//message
router.get("/", (req, res) => {
  var serviceAccount = require("C:/Users/Ravi/Desktop/task/private.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://loyal-saga-254206.firebaseio.com"
  });

  var token = [
    "fT-iqZmlApI:APA91bGcaCCl17xAgHUSI97VkRJk3L1nISJ91ZOUp4HCVm6lTFiXxToM4wpyvxnC2wWb_anfSxve8m7HyDlwXJMvM1ZGA55pSnyCX39l9ZzMpgqo9a4MQq1u_qKYiHMuX11FacpUn3TR"
  ];

  var payload = {
    notification: {
      title: "Alert Notification",
      body: "ALERT ACCEPTED SUCCESSFULLY."
    }
  };
  var options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
  };
  admin
    .messaging()
    .sendToDevice(token, payload, options)
    .then(function(response) {
      console.log("Successfully sent message:", response);
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
    });
});

module.exports = router;
