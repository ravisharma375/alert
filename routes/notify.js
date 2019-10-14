/*
var express = require("express");
var router = express.Router();

const bodyparser = require("body-parser");

//for notification
router.get("/notification", function(req, res, next) {
  var FCM = require("fcm-push");
  var serverkey = "AAAA5XM-GIc:APA91bHf2CXwiUWJUve33EUKzcCEkv1wwtdIzBvpuPqp_7TscX1RXi28OAFEZcQe6zLLMo1WDADSWIeB0mI5FPokaPbuoj7eTkX8mgkh4SRzMwSrYchwFNH1vCC8AJVd4seM115v9h0K";
  var fcm = new FCM(serverkey);
  var message = {
    to:
      "f8_avypO3WE:APA91bEUyjbbUrElZ2lrFjb65p8jRADJAPaGOWPUpTlJxhkp4Q47FeDxb_8CuK6mGu65KRULJKbcJ5LyYO-UMBdodo7Bqqu7UeOtI2RqWFl38aIEWVEvyq7rW4R6kBcliWOXfG_IL6fztXI7UrBgJ8vZiQ9V1fgcUg",
    // collapse_key : '<insert-collapse-key>',
    // data : {
    //     <random-data-key1> : '<random-data-value1>',
    //     <random-data-key2> : '<random-data-value2>'
    // },
    notification: {
      title: "Title of the notification",
      body: "Body of the notification"
    }
  };
  fcm.send(message, function(err, response) {
    if (err) {
      console.log("Something has gone wrong !");
    } else {
      console.log("Successfully sent with resposne :", response);
    }
  });
});

//export router
module.exports = router;
*/
