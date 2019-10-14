/*
var express = require("express");
var router = express.Router();
var admin = require("firebase-admin");
//message
router.get("/", (req, res) => {
  var serviceAccount = require("C:/Users/Ravi/Desktop/task/private.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://loyal-saga-254206.firebaseio.com"
  });

  var token = [
    "fWS7wCqSS7o:APA91bF-hysj0AK5z6I4k37v7TQTX-PyD1NKmEm6SOX48o3zLWpJs3Zhm4W__gvO9zwrJOrbYaYaj9Sak64b6kJHw2WmtykPnD7Kfn1wWzSfWP3QuR1kCInf7s0d8ani9OlMuz2CHfAjfWS7wCqSS7o:APA91bF-hysj0AK5z6I4k37v7TQTX-PyD1NKmEm6SOX48o3zLWpJs3Zhm4W__gvO9zwrJOrbYaYaj9Sak64b6kJHw2WmtykPnD7Kfn1wWzSfWP3QuR1kCInf7s0d8ani9OlMuz2CHfAj"
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
*/
